import { useEffect, useState } from "react";
import API from "../../API/API";
import "./ReplyComments.scss";
interface ReplyCommentsProps {
  commentId: number | undefined;
}
function ReplyComments({ commentId }: ReplyCommentsProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const [replyComments, setReplyComments] = useState<any>();
  const fetchReplyComments = async (page: number) => {
    const response = await API.getReplyComments({ commentId, page });
    return response.data.data.reCommentListResponse;
  };
  const getReplyComments = async () => {
    const response = await fetchReplyComments(currentPage);
    setReplyComments(response.reCommentListDetailResponseList);
    setIsLastPage(!response.hasNext);
  };
  useEffect(() => {
    console.log("Mount!");
    getReplyComments();
    setCurrentPage(currentPage + 1);
  }, []);
  return (
    <ul className="ReplyComments">
      {replyComments?.map((replyComment: any) => {
        return <span>hi</span>;
      })}
    </ul>
  );
}

export default ReplyComments;
