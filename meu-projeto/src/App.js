import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {
  const nome = 'Maria';
  return (

    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Henrique" />
      <SayMyName nome="Will" />
      <SayMyName nome={nome} />
      <Pessoa nome="Henrique"
        idade="19"
        profissao="Programador"
        foto="https.via.placeholder.com/150"
      />
      <List />
    </div>
  );
}

export default App;
