import PropTypes from "prop-types";

function Card({ title, content }) {
  return (
    <div className="border-[1px] w-60 space-y-3  items-stretch border-orange-400 inline-block p-5">
      <div className="font-bold">{title}</div>
      <div className="break-words">{content}</div>
    </div>
  );
}
Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};
export default Card;
