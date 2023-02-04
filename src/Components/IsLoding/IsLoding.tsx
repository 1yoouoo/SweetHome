import "./IsLoding.scss";
interface IsLodingTypeProps {
  height?: string;
}
const IsLoding = ({ height }: IsLodingTypeProps) => {
  return (
    <div className="loading_spinner_box" style={{ height: `${height}vh` }}>
      <div className="loading_spinner" />
    </div>
  );
};

export default IsLoding;
