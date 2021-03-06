import logo from './logo.svg';
import Table from './components/Table';
import './App.css';
import { Container } from '@material-ui/core';


function App() {
  return (
    <div className="App">
      <Container>
        <h2>A Data Table</h2>
        <Table/>
      </Container>
    </div>
  );
}

export default App;
