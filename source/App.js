import createTitle from 'components/title';
import createHello from 'components/hello';

export default React => ({ foo, ...props }) => {
  const Title = createTitle(React);
  const Hello = createHello(React);

  return (
    <div className="content">
      <Title { ...props } />
      <Hello { ...props } />
      <p>Content goes here: { foo }</p>
    </div>
  );
};
