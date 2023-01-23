import { useRecoilState } from "recoil";
import { datasState } from "../../recoil/snsState";
import PostItem from "../PostItem/PostItem";
import "./PostList.scss";

export interface dataType {
  postId: number;
  postImg: string;
  likes: number;
  nickName: string;
  commentsNumber: number;
  postedAt?: Date | string | undefined;
  userImg: string;
  postContent: string;
  postComments: commentType[];
}
export interface commentType {
  commentId: number;
  commentLikes: number;
  commentContent: string;
  commentedAt: string;
}

const PostList = () => {
  const [datas, setDatas] = useRecoilState<dataType[]>(datasState);

  console.log("postList", datas);
  return (
    <main className="PostList">
      {datas &&
        datas.map((data: dataType) => {
          return <PostItem data={data} key={data.postId} />;
        })}
    </main>
  );
};

export default PostList;
