import './App.css';
import Banner from "./components/banner"
import Header from "./components/header"
import Body from './components/body';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Banner
        titulo="Bienvenido Nakama a la aventura con React"
      />
      <Header />
      <Banner
        subtitulo="Unete a la aventura!"
      />
      <Body />
      <Footer>{<p>Elaborado por Dennis y Pablo</p>}</Footer>
    </div>
  );
}

export default App;
