const CoreConcepts = ({ coreImg, title, description }) => {
  return (
    <li>
      <img src={coreImg} alt="core concepts image" />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
};

export default CoreConcepts;
