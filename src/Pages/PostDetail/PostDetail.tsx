import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { postItemState } from "../../recoil/snsState";
import AddComment from "../../Views/AddComment/AddComment";
import PostComments from "../../Views/PostComments/PostComments";
import PostContent from "../../Views/PostContent/PostContent";
import { PostItemType } from "../../Views/PostList/PostList";
import CurrentHeader from "../../Views/UserHeader/CurrentHeader";
import "./PostDetail.scss";

export interface clickedPostTypeProps {
  clickedPost?: PostItemType;
  setClickedPost?: any;
}
const PostDetail = () => {
  const [postItems, setPostItems] =
    useRecoilState<PostItemType[]>(postItemState);
  const { postId } = useParams();
  // FIXME
  const [clickedPost, setClickedPost] = useState(
    postItems?.find(function (data: any) {
      return data.postId == postId;
    })
  );
  return (
    <div className="PostDetail">
      <CurrentHeader current="댓글" />
      <PostContent clickedPost={clickedPost} />
      <PostComments clickedPost={clickedPost} />
      <AddComment clickedPost={clickedPost} setClickedPost={setClickedPost} />
    </div>
  );
};

export default PostDetail;
