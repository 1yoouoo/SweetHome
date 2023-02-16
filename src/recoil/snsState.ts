import { CommentType } from "../Components/AddComment/AddComment";
import { PostItemType } from "../Views/PostList/PostList";
import { atom } from "recoil";
import { FormdataType } from "../Pages/CreatePost/CreatePost";

export const postItemState = atom<PostItemType[]>({
  key: "postItems",
  default: [],
});

export const commentState = atom<CommentType[]>({
  key: "comments",
  default: [],
});

export const selectedCommentState = atom<any>({
  key: "selectedComment",
  default: {
    commentId: "",
    nickName: "",
    isReply: false,
  },
});

export const formDataState = atom<FormdataType[]>({
  key: "formData",
  default: [],
});
