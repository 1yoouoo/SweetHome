import { CommentType } from "../../Components/AddComment/AddComment";
import IsLoding from "../../Components/IsLoding/IsLoding";
import PostItem from "../PostItem/PostItem";
import "./PostList.scss";

export interface PostItemType {
  postId: number;
  postImg: string;
  likes: number;
  nickName: string;
  commentsNumber: number;
  postedAt?: Date | string | undefined;
  userImg: string;
  postContent: string;
  postComments: CommentType[];
}
interface PostListTypeProps {
  dummyList: PostItemType[];
  isLoding: boolean;
}

const PostList = ({ dummyList, isLoding }: any) => {
  return (
    <>
      <main className="PostList">
        {dummyList &&
          dummyList.map((postItem: PostItemType) => {
            return <PostItem postItem={postItem} key={postItem.postId} />;
          })}
      </main>
      {isLoding && <IsLoding height="20" />}
    </>
  );
};

export default PostList;
