import { useState } from "react";
import PostItem from "../PostItem/PostItem";
import "./PostList.scss";

export interface dataType {
  postId: number;
  postImg: string;
  likes: number;
  nickName: string;
  text: string;
  commentsNumber: number;
  postedAt: string;
  userImg: string;
}

export const initialdatas = [
  {
    postId: 1,
    postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
    likes: 9,
    nickName: "blanc",
    text: "test입니다.",
    commentsNumber: 4,
    postedAt: "Sat Jan 21 2023 17:29:28",
    userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
  },
  {
    postId: 2,
    postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
    likes: 9,
    nickName: "blanc",
    text: "test입니다.",
    commentsNumber: 4,
    postedAt: "Sat Jan 20 2023 13:39:28",
    userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
  },
];
const PostList = () => {
  const [datas, setDatas] = useState<dataType[]>(initialdatas);

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
