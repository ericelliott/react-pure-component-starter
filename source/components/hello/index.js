export default React => {
  const hello = ({ helloClass }) => {
    return <p className={ helloClass }>Hello, World!</p>;
  };

  hello.propTypes = {
    helloClass: React.PropTypes.string.isRequired
  };

  return hello;
};
