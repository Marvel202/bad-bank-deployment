import { Card } from "../components/card";
import "./bank.png";

const Home = () => {
  return (
    <Card
      txtcolor="white"
      bgcolor="primary"
      header="Bad Bank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={<img src="./bank.png" className="img-fluid" alt="responsive" />}
    />
  );
};

export default Home;
