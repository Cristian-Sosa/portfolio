function Button({ text, type }) {
  return (
    <a className={`btn ${type ? "primary" : "secondary"}`}>{text}</a>
  );
}

export default Button;
