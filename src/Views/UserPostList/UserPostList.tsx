import { GreetingPropTypes } from "../../Pages/UserPage/UserPage";
import "./UserPostList.scss";

const UserPostList = ({ posts }: GreetingPropTypes) => {
  return (
    <ul className="UserPostList">
      {posts &&
        posts.map((post: any) => {
          return (
            <li className="UserPostList__item" key={post.id}>
              <span className="UserPostList__item--img">
                <img
                  // src={require(`/Users/blanc/Documents/Project/sns/src/Assets/cat${item.id}.png`)}
                  src={post.img}
                  alt=""
                />
              </span>
            </li>
          );
        })}
    </ul>
  );
};

export default UserPostList;
