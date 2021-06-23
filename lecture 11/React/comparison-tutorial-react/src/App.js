
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Faq from './components/Faq/Faq';
import Home from './components/Home/Home';
import { Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">

        <Header></Header>

        <Route exact={true} path="/" component={Home} />
        <Route path="/faq" component={Faq} />


        <Footer></Footer>

    </div>
  );
}

export default App;
