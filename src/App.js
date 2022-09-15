import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Right from './components/Right';

function App() {
  return (
    <div>
    <Navbar/>
    {/* <Right/> */}
    </div>
  );
}

const root=ReactDOM.createRoot(document.getElementById('left'));
ReactDOM.render(<><App/></>)
export default App;
