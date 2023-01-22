import { dataType } from "../Views/PostList/PostList";
import { atom } from "recoil";

export const datasState = atom<dataType[]>({
  key: "datas",
  default: [
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
  ],
});
