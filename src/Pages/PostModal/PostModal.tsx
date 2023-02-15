import { useEffect, useLayoutEffect, useRef, useState } from "react";
import EllipsisSvg from "../../Assets/SVG/EllipsisSvg";
import UserNickName from "../../sass/styled-components/UserNickName";
import UserPhoto from "../../sass/styled-components/UserPhoto";
import { timeFormat } from "../../utills/function/function";
import InteractionBar from "../../Components/InteractionBar/InteractionBar";
import "./PostModal.scss";
import API from "../../API/API";
import PostComments from "../../Views/PostComments/PostComments";
import { useRecoilState } from "recoil";
import { commentState } from "../../recoil/snsState";
import AddComment from "../../Components/AddComment/AddComment";
import { getCommentsType, userSimpleResponse } from "../PostDetail/PostDetail";
import AlertModal from "../../sass/styled-components/AlertModal";

interface PostModalProps {
  toggleModal: (e: any) => void;
  postId: number;
}
export const useIsOverflow = (ref: any, callback: any) => {
  const [isOverflow, setIsOverflow] = useState<any>(undefined);

  useLayoutEffect(() => {
    const { current } = ref;

    const trigger = () => {
      const hasOverflow = current.scrollHeight > current.clientHeight;

      setIsOverflow(hasOverflow);

      if (callback) callback(hasOverflow);
    };

    if (current) {
      trigger();
    }
  }, [callback, ref]);

  return isOverflow;
};
const PostModal = ({ toggleModal, postId }: PostModalProps) => {
  const [likes, setLikes] = useState<number>(0);
  const [postItem, setPostItem] = useState<any>();
  const [currentPage, setCurrentPage] = useState(1);
  const [getUserProfile, setGetUserProfile] = useState<userSimpleResponse>();
  const [viewComments, setViewComments] = useState(false);
  const [activatedAlertModal, setActivatedAlertModal] = useState<any>(false);
  const [isLastPage, setIsLastPage] = useState(false);
  const [comments, setComments] = useRecoilState<any>(commentState);
  const ref = useRef();
  const inputRef = useRef<HTMLInputElement>(null);
  const isOverflow = useIsOverflow(ref, (isOverflowFromCallback: any) => {
    // console.log(isOverflowFromCallback);
  });
  const [more, setMore] = useState(isOverflow);
  const getPost = async () => {
    const response = await API.getPost({ postId });
    setPostItem(response?.data.data.postDetailResponse);
    setLikes(response?.data.data.postDetailResponse.postLikeSize);
  };
  const deletePost = async () => {
    try {
      await API.deletePost({ postId });
      window.location.reload();
    } catch (error: any) {
      alert(error?.message);
    }
  };
  const onClickEllipsis = () => {
    setActivatedAlertModal(!activatedAlertModal);
  };
  const onClickComments = async () => {
    const response = await fetchComments(0);
    setViewComments(!viewComments);
    setGetUserProfile(response.userSimpleResponse);
    setComments(response.commentListDetailResponse);
    setIsLastPage(response.hasNext);
  };
  const getMoreComments = async () => {
    const response = await fetchComments(currentPage);
    setComments([...comments, ...response.commentListDetailResponse]);
    setIsLastPage(response.hasNext);
  };
  const fetchComments = async (page: any) => {
    const response = await API.getComments({ postId, page });
    return response.data.data.commentListResponse;
  };
  const getComments = async () => {
    try {
      const response: getCommentsType = await fetchComments(currentPage);
      setComments(response.commentListDetailResponse);
      setCurrentPage(currentPage + 1);
    } catch (error: any) {
      alert(error.message);
    }
  };
  const createComment = async () => {
    try {
      await API.createComment({
        content: inputRef.current?.value,
        postId: postId,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await createComment();
    getComments();
  };
  useEffect(() => {
    console.log("postModal Mount!");
    console.log("viewComments", comments);
  }, []);
  useEffect(() => {
    console.log("mount");
    getPost();
    document.body.style.cssText = `overflow-y: hidden`;
    return () => {
      document.body.style.cssText = `overflow-y: auto`;
      setComments([]);
      console.log("화면에 사라짐", open);
    };
  }, [open]);
  return (
    <>
      {postItem && (
        <div className="background" onClick={toggleModal}>
          <section className="PostModal">
            <div className="PostModal__top">
              <span className="PostModal__top--left">
                <UserPhoto
                  size="44px"
                  userProfileImage={postItem.userProfileImageURL}
                />
                <UserNickName nickName={postItem.nickName} />
              </span>
              <span className="PostModal__top--right">
                {activatedAlertModal && (
                  <AlertModal onNagativeClick={deletePost} />
                )}
                <EllipsisSvg onClickEvent={onClickEllipsis} />
              </span>
            </div>
            <div className="PostModal__main">
              <img src={postItem.postImageUrl1} alt="sample" />
            </div>
            <div className="PostModal__bottom">
              <InteractionBar
                likes={likes}
                setLikes={setLikes}
                postId={postItem.postId}
                isLike={postItem.like}
              />
              <div className="PostModal__bottom--likes">{likes} likes</div>
              <div className="PostModal__bottom--content">
                <span
                  style={
                    more ? { display: "inline" } : { display: "-webkit-box" }
                  }
                  ref={ref as any}
                >
                  <b>{postItem.nickName}</b> {postItem.content}
                </span>
                {isOverflow && (
                  <span onClick={() => setMore(!more)}>더보기</span>
                )}
              </div>
              <div className="PostModal__bottom--comments">
                <span onClick={onClickComments}>
                  View all {postItem.commentSize} comments
                </span>
                {viewComments && (
                  <div className="PostModal__comments">
                    <PostComments
                      isLastPage={isLastPage}
                      getMoreComments={getMoreComments}
                    />
                    <AddComment
                      onSubmit={onSubmit}
                      inputRef={inputRef}
                      getUserProfile={getUserProfile}
                    />
                  </div>
                )}
              </div>
              <div className="PostModal__bottom--posted-at">
                {timeFormat(postItem?.updatedAt)}
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default PostModal;
