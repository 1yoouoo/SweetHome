import { SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import API from "../../API/API";
import AddComment, {
  CommentType,
} from "../../Components/AddComment/AddComment";
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
  const { postId } = useParams<string>();
  const [post, setPost] = useState<postType>({
    nickName: "",
    postContent: "",
    updatedAt: "",
    userProfileImage: "",
  });
  const [getUserProfile, setGetUserProfile] = useState<userSimpleResponse>();
  const setComments = useSetRecoilState<CommentType[]>(commentState);
  const [inputValue, setInputValue] = useState<string>("");

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };
  const fetchComments = async () => {
    const response = await API.getComments({ postId });
    return response.data.data.postAndCommentsResponse;
  };

  const getComments = async () => {
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
  };
  const createComment = async () => {
    const response = await API.createComment({
      content: inputValue,
      postId: postId,
    });
    console.log("create Comments !", response);
    return response;
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
      <div className="PostDetail">
        <CurrentHeader current="댓글" />
        {isLoding ? (
          <IsLoding />
        ) : (
          <>
            <PostContent post={post} />
            <PostComments />
            <AddComment
              onSubmit={onSubmit}
              onChangeValue={onChangeValue}
              getUserProfile={getUserProfile}
            />
          </>
        )}
      </div>
    </>
  );
};

export default PostDetail;
