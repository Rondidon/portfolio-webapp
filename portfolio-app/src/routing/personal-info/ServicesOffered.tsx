type ServicesOfferedProps = {
  message: string;
};

const ServicesOffered: React.FC<ServicesOfferedProps> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default ServicesOffered;
