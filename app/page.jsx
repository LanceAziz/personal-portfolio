import Divider from "./components/divider/divider.jsx";
import Heading from "./sections/heading/heading";

export default function Home() {
  return (
    <div className="container">
      <Heading />
      <Divider width="100%" padding="50px" />
    </div>
  );
}
