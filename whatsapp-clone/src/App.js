import './App.css';
import Sidebar from './Components/Sidebar/sidebar'
import Chat from './Components/Chat/Chat'

function App() {
  return (
    <div className="app">
      <div className='app__body'>
        <Sidebar />
        <Chat />

      </div>


    </div>
  );
}

export default App;
