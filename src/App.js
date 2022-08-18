import { MainProvider } from './context/MainContext';
import './App.css';
import Container from './components/Container';

function App() {
  return (
    <div>
      <MainProvider>
        <Container />
      </MainProvider>
    </div>
  );
}

export default App;
