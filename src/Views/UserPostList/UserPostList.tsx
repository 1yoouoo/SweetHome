import "./UserPostList.scss";

const UserPostList = () => {
  const SampleitemList = [
    {
      id: 1,
      img: "/Users/blanc/Documents/Project/sns/src/Assets/cat1.jpeg",
    },
    {
      id: 2,
      img: "/Users/blanc/Documents/Project/sns/src/Assets/cat2.jpeg",
    },
    {
      id: 3,
      img: "/Users/blanc/Documents/Project/sns/src/Assets/cat3.jpeg",
    },
    {
      id: 4,
      img: "/Users/blanc/Documents/Project/sns/src/Assets/cat4.jpeg",
    },
  ];
  return (
    <ul className="UserPostList">
      {SampleitemList &&
        SampleitemList.map((item) => {
          return (
            <li className="UserPostList__item" key={item.id}>
              <img
                src={require(`/Users/blanc/Documents/Project/sns/src/Assets/cat${item.id}.jpeg`)}
                alt=""
              />
            </li>
          );
        })}
    </ul>
  );
};

export default UserPostList;
