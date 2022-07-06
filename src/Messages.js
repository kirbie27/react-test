import './Messages.css';

function Message1() {
  return (
    <div className="MessageDiv">
      <h1 className="MessageInRoot">I am a test message</h1>
    </div>

  );
}

function Message2() {
  return (
    <div className="MessageDiv">
      <h2 className="MessageInRoot">I am a second test message</h2>
    </div>

  );
}

export { Message1, Message2 };