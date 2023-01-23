import { Dispatch, SetStateAction, useState } from "react";
import { useRecoilState } from "recoil";
import { datasState } from "../../recoil/snsState";
import { getNickName } from "../../utills/function/function";
import { dataType } from "../../Views/PostList/PostList";
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
  setNewData: Dispatch<SetStateAction<dataType>>;
  newData: dataType;
}
const CreatePost = () => {
  const [datas, setDatas] = useRecoilState<dataType[]>(datasState);
  const [newData, setNewData] = useState<dataType>({
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
  const onClickSharing = () => {
    setDatas((datas): dataType[] => [...datas, newData]);
    console.log("newData", newData);
    console.log("datas", datas);
  };
  return (
    <>
      <CurrentHeader
        current="새 게시물"
        createPost={true}
        onClickSharing={onClickSharing}
      />
      <form className="CreatePost">
        <UploadPhotos setNewData={setNewData} newData={newData} />
        <TextArea setNewData={setNewData} newData={newData} />
      </form>
    </>
  );
};

export default CreatePost;
