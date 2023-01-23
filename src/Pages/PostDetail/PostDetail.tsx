import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { datasState } from "../../recoil/snsState";
import PostComments from "../../Views/PostComments/PostComments";
import PostContent from "../../Views/PostContent/PostContent";
import { dataType } from "../../Views/PostList/PostList";
import CurrentHeader from "../../Views/UserHeader/CurrentHeader";
import "./PostDetail.scss";

export interface clickedPostTypeProps {
  clickedPost?: dataType;
}
const PostDetail = () => {
  const [datas, setDatas] = useRecoilState<dataType[]>(datasState);
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
    </div>
  );
};

export default PostDetail;
