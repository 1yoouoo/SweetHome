import { SetStateAction, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import API from "../../API/API";
import AddComment, {
  CommentType,
} from "../../Components/AddComment/AddComment";
import ErrorView from "../../Components/ErrorView/ErrorView";
import IsLoding from "../../Components/IsLoding/IsLoding";
import { commentState, postItemState } from "../../recoil/snsState";
import PostComments from "../../Views/PostComments/PostComments";
import PostContent from "../../Views/PostContent/PostContent";
import CurrentHeader from "../../Views/UserHeader/CurrentHeader";
import "./PostDetail.scss";
export interface postType {
  nickName: string;
  postContent: string;
  updatedAt: string;
  userProfileImage: string;
}

export interface userSimpleResponse {
  nickName: string;
  userId: number;
  userProfileImageUrl: string;
}
export interface clickedPostTypeProps {
  postData: any;
}
export interface getCommentsType {
  postSummaryResponse: postType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  commentListDetailResponse: SetStateAction<any> | undefined;
  userSimpleResponse: userSimpleResponse;
  commentResponses: any;
}

const PostDetail = () => {
  const [isLoding, setIsLoding] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const { postId } = useParams<string>();

  const [getUserProfile, setGetUserProfile] = useState<userSimpleResponse>();
  const postData = useRecoilValue(postItemState);
  const setComments = useSetRecoilState<CommentType[]>(commentState);
  const inputRef = useRef<HTMLInputElement>(null);
  const fetchComments = async () => {
    const response = await API.getComments({ postId });
    return response.data.data.commentListResponse;
  };

  const getComments = async () => {
    try {
      const response: getCommentsType = await fetchComments();
      setComments(response?.commentListDetailResponse);
      setGetUserProfile(response?.userSimpleResponse);
      setIsLoding(false);
    } catch (error) {
      setError(error);
    }
  };
  const createComment = async () => {
    try {
      const response = await API.createComment({
        content: inputRef.current?.value,
        postId: postId,
      });
      console.log("create Comments !", response);
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
    getComments();
    console.log(postData);
  }, []);

  return (
    <>
      {error ? (
        <ErrorView />
      ) : (
        <div className="PostDetail">
          <CurrentHeader current="댓글" backwards={true} />
          {isLoding ? (
            <IsLoding />
          ) : (
            <>
              <PostContent postData={postData} />
              <PostComments />
              <AddComment
                onSubmit={onSubmit}
                inputRef={inputRef}
                getUserProfile={getUserProfile}
              />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default PostDetail;
