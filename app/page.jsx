import Divider from "./components/divider/divider.jsx";
import About from "./sections/about/about.jsx";
import Experience from "./sections/experience/experience.jsx";
import Heading from "./sections/heading/heading";
import Services from "./sections/services/services.jsx";

export default function Home() {
  return (
    <div style={{ width: '100%', maxWidth: '90ch', padding: '0 20px' }}>
      <Heading />
      <Divider width="100%" padding="50px" color="transparent" />
      <About />
      <Divider width="100%" padding="50px" color="transparent" />
      <Services />
      <Divider width="100%" padding="50px" color="transparent" />
      <Experience />
      <Divider width="100%" padding="50px" color="transparent" />
    </div>
  );
}

