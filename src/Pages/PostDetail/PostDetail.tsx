import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { datasState } from "../../recoil/snsState";
import PostComments from "../../Views/PostComments/PostComments";
import PostContent from "../../Views/PostContent/PostContent";
import { dataType } from "../../Views/PostList/PostList";
import CurrentHeader from "../../Views/UserHeader/CurrentHeader";
import "./PostDetail.scss";

const PostDetail = () => {
  const [datas, setDatas] = useRecoilState<dataType[]>(datasState);
  const { postId } = useParams();
  const clickedPost = datas?.find(function (data: any) {
    return data.postId == postId;
  });

  return (
    <div className="PostDetail">
      <CurrentHeader current="댓글" />
      <PostContent clickedPost={clickedPost} />
      <PostComments clickedPost={clickedPost} />
    </div>
  );
};

export default PostDetail;
