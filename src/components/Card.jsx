import PropTypes from "prop-types";
function Card({ title, content }) {
  return (
    <div className="border-[1px] w-60 rounded-md space-y-3  items-stretch border-orange-400 inline-block p-5 hover:bg-orange-400/10">
      <div className="font-bold">{title}</div>
      <div className="break-words flex justify-between">
        <span>{content}</span>
        <button>❌</button>
      </div>
    </div>
  );
}
Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};
export default Card;
