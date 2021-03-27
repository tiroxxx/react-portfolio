import AboutMe from "./components/AboutMe"
import JumbotronComponent from "./components/Jumbotron"
import NavbarComponent from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <JumbotronComponent />
      <AboutMe />
    </div>
  );
}

export default App;
