import { Contatos } from "./components/contatos";
import { Header } from "./components/header";
import { Home } from "./components/home";
import { PProjetos } from "./components/princ-projetos";
import { Projetos } from "./components/projetos";
import { Sobre } from "./components/sobre";
import { Global } from "./styles/globalStyle";

function App() {
  return (
    <div className="App">
      <Global/>
      <Header></Header>
      <Home></Home>
      <Projetos></Projetos>
      <PProjetos></PProjetos>
      <Sobre></Sobre>
      <Contatos></Contatos>
    </div>
  );
}

export default App;
