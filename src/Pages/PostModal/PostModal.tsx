import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EllipsisSvg from "../../Assets/SVG/EllipsisSvg";
import UserNickName from "../../sass/styled-components/UserNickName";
import UserPhoto from "../../sass/styled-components/UserPhoto";
import { timeFormat } from "../../utills/function/function";
import InteractionBar from "../../Components/InteractionBar/InteractionBar";
import "./PostModal.scss";
import sample from "/Users/blanc/Documents/Project/sns/src/Assets/sample.png";

const testList = {
  postId: 1,
  nickName: "tester",
  postContent:
    "this is a testthis is a testthis is a testthis is a testthis is a testthis is a testthis is a testthis is a testthis is a testthis is a testthis is a testthis is a testthis is a testthis is a testthis is a testthis is a testthis is a testthis is a testthis is a testthis is a testthis is a test",
  commentsNumber: 1,
  postedAt: "11131",
  likes: 12,
};

// type
// interface PostModalTypeProps {
//   testList: PostModalType;
// }
const PostModal = ({ toggleModal }: any) => {
  const [likes, setLikes] = useState<number>(testList.likes);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("modal");
    return () => {
      console.log("화면에 사라짐", open);
    };
  }, [open]);
  return (
    <div className="background" onClick={(e: any) => toggleModal(e)}>
      <section className="PostModal">
        <div className="PostModal__top">
          <span className="PostModal__top--left">
            <UserPhoto size="44px" />
            <UserNickName nickName={testList.nickName} />
          </span>
          <span className="PostModal__top--right">
            <EllipsisSvg />
          </span>
        </div>
        <div className="PostModal__main">
          <img src={sample} alt="sample" />
        </div>
        <div className="PostModal__bottom">
          <InteractionBar
            likes={likes}
            setLikes={setLikes}
            postId={testList.postId}
          />
          <div className="PostModal__bottom--likes">{likes} likes</div>
          <div className="PostModal__bottom--content">
            <div>
              <b>{testList.nickName}</b> {testList.postContent}
            </div>
          </div>
          <div className="PostModal__bottom--comments">
            <span onClick={() => console.log("댓글 창 클릭 !")}>
              View all {testList.commentsNumber} comments
            </span>
          </div>
          <div className="PostModal__bottom--posted-at">
            {timeFormat(testList?.postedAt)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostModal;
