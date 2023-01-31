import { CommentType } from "../Components/AddComment/AddComment";
import { PostItemType } from "../Views/PostList/PostList";
import { atom } from "recoil";
import { FormdataType } from "../Pages/CreatePost/CreatePost";

export const postItemState = atom<PostItemType[]>({
  key: "postItems",
  default: [
    {
      postId: 1,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: "게시물 내용 테스트 1 입니다",
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 2,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      nickName: "blanc",
      commentsNumber: 4,
      postedAt: "Sat Jan 20 2023 13:39:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      postContent: "게시물 내용 테스트 2 입니다",
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
  ],
});

export const commentState = atom<CommentType[]>({
  key: "comments",
  default: [],
});

export const formDataState = atom<FormdataType>({
  key: "formData",
  default: {
    imageFileList: [],
    newPostContent: "",
  },
});
