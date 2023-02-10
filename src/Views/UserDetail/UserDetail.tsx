import React from "react";
import { userInfoType } from "../../Pages/UserPage/UserPage";
import { logOut } from "../../utills/function/function";
import UserInfo from "../UserInfo/UserInfo";
import UserSummary from "../UserSummary/UserSummary";
import "./UserDetail.scss";
export interface userDetailProps {
  userDetail: userInfoType;
}
const UserDetail = ({ userDetail }: userDetailProps) => {
  return (
    <div className="UserDetail">
      <UserInfo userDetail={userDetail} />
      <UserSummary userDetail={userDetail} />
      <button onClick={logOut}>LOGOUT</button>
    </div>
  );
};

export default React.memo(UserDetail);
