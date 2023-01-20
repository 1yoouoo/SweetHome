import "./CurrentHeader.scss";

const CurrentHeader = ({ current }: any) => {
  return (
    <div className="CurrentHeader">
      <span className="CurrentHeader__user-id">{current}</span>
    </div>
  );
};

export default CurrentHeader;
