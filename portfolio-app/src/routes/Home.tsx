import { Link } from "react-router-dom";

type HomeProps = {
  message: string;
};

const Home: React.FC<HomeProps> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
      <Link to={"/imprint"}>To Imprint</Link>
      <Link to={"/privacy-policy"}>To PP</Link>
    </div>
  );
};

export default Home;
