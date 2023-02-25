import { CommentType } from "../Components/AddComment/AddComment";
import { PostItemType } from "../Views/PostList/PostList";
import { atom } from "recoil";
import { FormdataType } from "../Pages/CreatePost/CreatePost";
import { selectedCommentType } from "../Pages/PostModal/PostModal";

export const postItemState = atom<PostItemType[]>({
  key: "postItems",
  default: [],
});

export const commentState = atom<CommentType[]>({
  key: "comments",
  default: [],
});

export const selectedCommentState = atom<selectedCommentType>({
  key: "selectedComment",
  default: {
    commentId: 0,
    nickName: "",
    isReply: false,
  },
});

export const formDataState = atom<FormdataType[]>({
  key: "formData",
  default: [],
});
