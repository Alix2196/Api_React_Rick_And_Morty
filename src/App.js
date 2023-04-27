import "./App.css";
import Menu from "./Componentes/Menu/Menu";
import Personajes from "./Componentes/personajes";
import Citas from "./Componentes/Citas/Citas";
import Episodios from "./Componentes/episodios";
import Home from "./Componentes/Home/home";

function App() {
  const currentURL = window.location.pathname;
  function renderContent() {
    switch (currentURL) {
      case "/":
        return <Home />;
      case "/personajes":
        return <Personajes />;
      case "/citas":
        return <Citas />;
      case "/episodios":
        return <Episodios />;
      default:
        return <Home />;
    }
  }
  
  return (
    <div className="App">
      <Menu />
      {renderContent()}
    </div>
  );
}

export default App;
