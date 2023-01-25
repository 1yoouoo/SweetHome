import { useRecoilState } from "recoil";
import { postItemState } from "../../recoil/snsState";
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
  postComments: commentType[];
}
export interface commentType {
  nickName: string;
  commentId: number;
  commentLikes: number;
  commentContent: string;
  commentedAt: string | Date;
}

const PostList = () => {
  const [postItems, setPostItems] =
    useRecoilState<PostItemType[]>(postItemState);

  console.log("postList", postItems);
  return (
    <main className="PostList">
      {postItems &&
        postItems.map((postItem: PostItemType) => {
          return <PostItem postItem={postItem} key={postItem.postId} />;
        })}
    </main>
  );
};

export default PostList;
