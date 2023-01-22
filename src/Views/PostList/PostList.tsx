import { useState } from "react";
import { useRecoilState } from "recoil";
import { datasState } from "../../recoil/snsState";
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
