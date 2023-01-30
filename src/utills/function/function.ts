export function timeFormat(millisecond: any) {
  const today = new Date();
  const timeValue = new Date(millisecond);

  const betweenTime = Math.floor(
    (today.getTime() - timeValue.getTime()) / 1000 / 60
  );
  if (betweenTime < 1) return "방금 전";
  if (betweenTime < 60) {
    return `${betweenTime}분 전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간 전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    if (betweenTimeDay < 2) {
      return `어제`;
    }
    return `${betweenTimeDay}일 전`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년 전`;
}

export function getNickName() {
  const nickName = "blanc";
  return nickName;
}

export const newCommentId = (datas: any) => {
  const newId = datas.slice(-1)[0].commentId + 1;
  return newId;
};

export const isLogin = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
};

// export const updateComment = () => {

// }
