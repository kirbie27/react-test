import { Message1, Message2 } from './Messages';
import logo from './klogo.png';
import './App.css';

function App() {
  return (

    /*

      Hi kirby here testing!
      Hello kirby, i saw your push.
      Thank you for your reply.
      Here again
      
    */
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          THIS WAS MODIFIED BY KIRBY
        </p>
        <Message1 />
        <Message2 />
      </header>

    </div>
  );
}

export default App;




