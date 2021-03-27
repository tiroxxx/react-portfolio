import AboutMe from "./components/AboutMe"
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
    </div>
  );
}

export default App;
