import SingleDotSvg from "../../Assets/SVG/SingleDotSvg";
import UserPhoto from "../../sass/styled-components/UserPhoto";
import "./PostContent.scss";

const PostContent = () => {
  return (
    <div className="PostContent">
      <div className="PostContent__author">
        <UserPhoto size="44px" />
      </div>

      <div className="PostContent__content">
        <div className="PostContent__content--wrapper">
          <span className="PostContent__content--username">username</span>
          <span className="PostContent__content--dot">
            <SingleDotSvg />
          </span>
          <span className="PostContent__content--created-at">1시간</span>
        </div>
        <div className="PostContent__content--text">
          어쩌구저쩌구 ㅁㄴㅇㅁㄴ 1214-- ㄴㅁ 어쩌구저쩌구 ㅁㄴㅇㅁㄴ 1214--
          ㄴㅁ 어쩌구저쩌구 ㅁㄴㅇㅁㄴ 1214-- ㄴㅁ 어쩌구저쩌구 ㅁㄴㅇㅁㄴ
          1214-- ㄴㅁ 어쩌구저쩌구 ㅁㄴㅇㅁㄴ 1214-- ㄴㅁ 어쩌구저쩌구
          ㅁㄴㅇㅁㄴ 1214-- ㄴㅁ 어쩌구저쩌구 ㅁㄴㅇㅁㄴ 1214-- ㄴㅁ
        </div>
      </div>
    </div>
  );
};

export default PostContent;
