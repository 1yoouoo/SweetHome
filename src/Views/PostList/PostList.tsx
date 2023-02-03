import { CommentType } from "../../Components/AddComment/AddComment";
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

const PostList = ({ dummyList }: any) => {
  // const postItems = useRecoilValue<PostItemType[]>(postItemState);

  return (
    <main className="PostList">
      {dummyList &&
        dummyList.map((postItem: PostItemType) => {
          return <PostItem postItem={postItem} key={postItem.postId} />;
        })}
    </main>
  );
};

export default PostList;
