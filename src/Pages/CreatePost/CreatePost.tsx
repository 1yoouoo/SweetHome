import { Dispatch, SetStateAction, useState } from "react";
import { useRecoilState } from "recoil";
import API from "../../API/API";
import { postItemState } from "../../recoil/snsState";
import { findLastId, getNickName } from "../../utills/function/function";
import Nav from "../../Views/Nav/Nav";
import { PostItemType } from "../../Views/PostList/PostList";
import TextArea from "../../Views/TextArea/TextArea";
import UploadPhotos from "../../Views/UploadPhotos/UploadPhotos";
import CurrentHeader from "../../Views/UserHeader/CurrentHeader";
import "./CreatePost.scss";

export interface newDataType {
  postImg: string;
  postContent: string;
  nickName: string;
}
export interface newDataTypeProps {
  setNewData: Dispatch<SetStateAction<PostItemType>>;
  newData: PostItemType;
}

const CreatePost = () => {
  const [datas, setDatas] = useRecoilState<PostItemType[]>(postItemState);
  const [newData, setNewData] = useState<PostItemType>({
    postId: 3,
    postImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg", //
    likes: 0,
    postContent: "", //
    nickName: getNickName(), //
    postedAt: new Date(), //
    userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
    commentsNumber: 0,
    postComments: [],
  });

  const onClickSharing = async () => {
    // setDatas((datas): PostItemType[] => [...datas, newData]);
    // console.log("newData", newData);
    // console.log("datas", datas);
    const data = await API.createPost({
      content: "asdasdas",
    });
    if (data?.data.validation === null) {
      // 실패시
      alert(data?.data.error.message);
    } else {
      // 성공시
      const token = data?.headers.token;
      localStorage.setItem("token", token);
      alert(data?.data.validation.message);
    }
  };
  return (
    <>
      <CurrentHeader
        current="새 게시물"
        createPost={true}
        onClickSharing={onClickSharing}
      />
      <form className="CreatePost">
        <UploadPhotos />
        <TextArea setNewData={setNewData} newData={newData} />
      </form>
      <Nav />
    </>
  );
};

export default CreatePost;
