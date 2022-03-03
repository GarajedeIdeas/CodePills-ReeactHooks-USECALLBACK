import './App.css';
import Main from './components/Main';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <div className="App">
      <Main />
      <UserDetail userId={9} />
    </div>
  );
}

export default App;
