import PropTypes from "prop-types";
function Button({ children, className, onClickHandler }) {
  return (
    <button className={className} onClick={onClickHandler}>
      {children}
    </button>
  );
}
Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClickHandler: PropTypes.func,
};
export default Button;
