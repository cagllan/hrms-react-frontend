import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Dashboard from './layouts/Dashboard'
import {Container} from 'semantic-ui-react'
import Header from './layouts/Header';



function App() {
  return (
    <div className="App">
      <Header/>
      <Container className="main">
      <Dashboard/>
      </Container>
      
    </div>
  );
}

export default App;
