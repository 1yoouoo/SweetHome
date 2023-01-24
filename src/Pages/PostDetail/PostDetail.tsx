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
}
const PostDetail = () => {
  const [datas, setDatas] = useRecoilState<PostItemType[]>(postItemState);
  const { postId } = useParams();
  // FIXME
  const clickedPost = datas?.find(function (data: any) {
    return data.postId == postId;
  });
  console.log(clickedPost);
  return (
    <div className="PostDetail">
      <CurrentHeader current="댓글" />
      <PostContent clickedPost={clickedPost} />
      <PostComments clickedPost={clickedPost} />
      <AddComment />
    </div>
  );
};

export default PostDetail;
