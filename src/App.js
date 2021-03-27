import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import JumbotronComponent from "./components/Jumbotron"
import NavbarComponent from "./components/Navbar"
import Projects from "./components/Projects"

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <JumbotronComponent />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
