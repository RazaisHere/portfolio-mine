import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/intro/intro";
import Skill from "./components/skills/skill";
import Work from "./components/Work/Work";
import Contact from "./components/contactme/Contactme";
import Footer from "./components/Footor/Footer";
function App() {
  const styleObject = {
    scrollBehavior: "smooth",
  };
  return (
    <div className="App" style={styleObject}>
      <Navbar />
      <Intro />
      <Skill />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
