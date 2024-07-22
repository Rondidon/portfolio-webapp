type PortfolioProps = {
  message: string;
};

const Portfolio: React.FC<PortfolioProps> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Portfolio;
