import PropTypes from "prop-types";
import { usePostsContext } from "../context/PostsContext";
function Card({ title, content, id }) {
  const { deletePost } = usePostsContext();
  return (
    <div className="border-[1px] w-60 rounded-md space-y-3  items-stretch border-orange-400 inline-block p-5 hover:bg-orange-400/10">
      <div className="font-bold">{title}</div>
      <div className="break-words flex justify-between">
        <span>{content}</span>
        <button onClick={() => deletePost(id)}>❌</button>
      </div>
    </div>
  );
}
Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.string,
};
export default Card;
