import { Header } from "./components/header";
import { Home } from "./components/home";
import { Projetos } from "./components/projetos";
import { Sobre } from "./components/sobre";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Projetos></Projetos>
      <Sobre></Sobre>
    </div>
  );
}

export default App;
