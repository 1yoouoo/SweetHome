import { SetStateAction, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import API from "../../API/API";
import AddComment, {
  CommentType,
} from "../../Components/AddComment/AddComment";
import ErrorView from "../../Components/ErrorView/ErrorView";
import IsLoding from "../../Components/IsLoding/IsLoding";
import { commentState } from "../../recoil/snsState";
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

interface userSimpleResponse {
  nickName: string;
  userId: number;
  userProfileImageUrl: string;
}
export interface clickedPostTypeProps {
  post: postType | null;
}
interface getCommentsType {
  postSummaryResponse: postType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  commentResponses: SetStateAction<any> | undefined;
  userSimpleResponse: userSimpleResponse;
}

const PostDetail = () => {
  const [isLoding, setIsLoding] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const { postId } = useParams<string>();
  const [post, setPost] = useState<postType>({
    nickName: "",
    postContent: "",
    updatedAt: "",
    userProfileImage: "",
  });
  const [getUserProfile, setGetUserProfile] = useState<userSimpleResponse>();
  const setComments = useSetRecoilState<CommentType[]>(commentState);
  const inputRef = useRef<HTMLInputElement>(null);
  const fetchComments = async () => {
    const response = await API.getComments({ postId });
    return response.data.data.postAndCommentsResponse;
  };

  const getComments = async () => {
    try {
      const response: getCommentsType = await fetchComments();
      setPost({
        nickName: response?.postSummaryResponse.nickName,
        postContent: response?.postSummaryResponse.postContent,
        updatedAt: response?.postSummaryResponse.updatedAt,
        userProfileImage: response?.postSummaryResponse.userProfileImage,
      });
      setComments(response?.commentResponses);
      setGetUserProfile(response?.userSimpleResponse);
      await setIsLoding(false);
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
              <PostContent post={post} />
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
