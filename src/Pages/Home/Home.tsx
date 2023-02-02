import { useEffect, useState } from "react";
import HomeHeader from "../../Views/HomeHeader/HomeHeader";
import Nav from "../../Views/Nav/Nav";

import PostList from "../../Views/PostList/PostList";
import "./Home.scss";

const Home = () => {
  const dummy = [
    {
      postId: 1,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 1 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 2,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 2 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 3,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 3 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 4,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 4 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 5,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 5 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 6,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 6 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 7,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 7 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 8,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 8 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 9,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 9 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 10,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 10 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 11,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 11 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 12,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 12 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 13,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 13 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 14,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 14 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 15,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 15 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 16,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 16 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 17,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 17 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 18,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 18 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 19,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 19 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 20,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 20 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 21,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 21 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 22,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 22 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 23,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 23 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 24,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 24 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 25,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 25 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 26,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 26 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 27,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 27 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 28,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 28 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 29,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 29 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 30,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 30 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 31,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 31 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 32,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 32 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
    {
      postId: 33,
      postImg: "/Users/blanc/Documents/Project/sns/src/Assets/sample.png",
      likes: 9,
      postContent: `게시물 내용 테스트 33 입니다`,
      nickName: "blanc",
      postedAt: "Sat Jan 21 2023 17:29:28",
      userImg: "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg",
      commentsNumber: 4,
      postComments: [
        {
          nickName: "blanc",
          commentId: 1,
          commentContent: "댓글 1 입니다.",
          updatedAt: "Sat Jan 21 2023 17:29:28",
        },
        {
          nickName: "blanc",
          commentId: 2,
          commentContent: "댓글 2 입니다.",
          updatedAt: "Sat Jan 21 2023 12:10:28",
        },
      ],
    },
  ];
  const [currentPage, setCurrentPage] = useState(0);
  const API_response = (page: any, data: any) => {
    setCurrentPage(currentPage + 1);
    return data.slice(page * 5, (page + 1) * 5);
  };
  const [dummyList, setDummyList] = useState<any>([]);
  console.log("dummyList", dummyList);
  const areAlmostEndPoint = () => {
    const { scrollTop, offsetHeight, scrollHeight } = document.documentElement;
    console.log(scrollHeight, scrollTop + offsetHeight + 200);
    if (scrollHeight <= scrollTop + offsetHeight + 200) {
      // get api call
      setDummyList([...dummyList, ...API_response(currentPage, dummy)]);
    }
  };
  useEffect(() => {
    setDummyList(API_response(0, dummy));
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", areAlmostEndPoint);
    console.log("Home Mount!");
    return () => window.removeEventListener("scroll", areAlmostEndPoint);
  });
  return (
    <div className="Home">
      <HomeHeader />
      <PostList dummyList={dummyList} />
      <Nav />
    </div>
  );
};

export default Home;
