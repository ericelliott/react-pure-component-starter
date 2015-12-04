export default React => {

  const {
    string, shape, func
  } = React.PropTypes;

  const hello = ({ helloClass, subject = 'World', actions: { setMode } }) => {
    return (
      <p className={ helloClass } onClick={ () => setMode('edit') }>Hello, { subject }!</p>
    );
  };

  hello.propTypes = {
    helloClass: string.isRequired,
    subject: string,
    actions: shape({
      setMode: func.isRequired
    })
  };

  return hello;
};
