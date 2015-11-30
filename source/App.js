import createTitle from 'components/title';

export default React => ({ foo, ...props }) => {
  const Title = createTitle(React);

  return (
    <div className="content">
      <Title { ...props } />
      <p>Content goes here: { foo }</p>
    </div>
  );
};
