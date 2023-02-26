import { CommentType } from "../../Components/AddComment/AddComment";
import IsLoding from "../../Components/IsLoding/IsLoding";
import PostItem from "../PostItem/PostItem";
import "./PostList.scss";

export interface PostItemType {
  postId: number;
  postImageUrl1: string;
  likes: number;
  nickName: string;
  commentSize: number;
  isPostLike: boolean;
  updatedAt: string;
  userImg: string;
  content: string;
  postComments: CommentType[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  postImageUrls: any;
  userProfileImageUrl: string;
  postLikeSize: number;
  like?: boolean;
  userProfileImageURL?: string;
}
interface PostListTypeProps {
  posts?: PostItemType[];
  isLoding: boolean;
}

const PostList = ({ posts, isLoding }: PostListTypeProps) => {
  return (
    <>
      <main className="PostList">
        {posts &&
          posts.map((postItem: PostItemType) => {
            return <PostItem postItem={postItem} key={postItem.postId} />;
          })}
      </main>
      {isLoding && <IsLoding height="20" />}
    </>
  );
};

export default PostList;
