import { useEffect, useState } from "react";
import API from "../../API/API";
import ReplyComment from "../ReplyComment/ReplyComment";
import "./ReplyComments.scss";
interface ReplyCommentsProps {
  commentId: number | undefined;
}
export interface ReplyCommentType {
  content?: string;
  reCommentId?: number;
  nickName: string;
  updatedAt?: string | Date;
  userProfileImageUrl?: string;
  reCommentLikeSize?: number;
}
function ReplyComments({ commentId }: ReplyCommentsProps) {
  const [currentPage, setCurrentPage] = useState(0);
  // const [lastId, setLastId] = useState(0);
  // const [isLastPage, setIsLastPage] = useState(false);
  const [replyComments, setReplyComments] = useState<ReplyCommentType[]>();

  const fetchReplyComments = async (reCommentId?: number) => {
    const response = await API.getReplyComments({ commentId, reCommentId });
    return response.data.data.reCommentListResponse;
  };
  const getReplyComments = async () => {
    const response = await fetchReplyComments();
    setReplyComments(response.reCommentListDetailResponseList);
    // setIsLastPage(!response.hasNext);
  };
  // const getMoreReplyComments = async () => {
  //   const response = await fetchReplyComments(lastId);
  //   setReplyComments([...replyComments, ...response.commentListDetailResponse]);
  //   setIsLastPage(response.hasNext);
  //   // setLastId(response.commentListDetailResponse.at(-1)?.commentId);
  // };
  useEffect(() => {
    console.log("ReplyComments Mount!!!");
    getReplyComments();
    setCurrentPage(currentPage + 1);
  }, []);
  return (
    <ul className="ReplyComments">
      {replyComments?.map((replyComment: ReplyCommentType) => {
        return (
          <ReplyComment
            replyComment={replyComment}
            key={replyComment.reCommentId}
          />
        );
      })}
    </ul>
  );
}

export default ReplyComments;
