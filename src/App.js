import './App.css';
import MessagesLayout from './layouts/MessagesLayout/MessagesLayout';
import Avatar from './components/Avatar/Avatar';
import Message from './components/Message/Message';
import ChatLayout from './layouts/ChatLayout/ChatLayout';
import Textbtn from './components/Textbtn/Textbtn';
import Audiobtn from './components/Audiobtn/Audiobtn';
import Videobtn from './components/Videobtn/Videobtn';
import TopChatLayout from './layouts/TopChatLayout/TopChatLayout';

function App() {
  return (
    <div className="App">
      <MessagesLayout>
        <Message>
          <Avatar/>
          udfhiluvszfdluihvlzid
        </Message>
        <Message>
          <Avatar/>
          udfhiluvszfdluihvlzid
        </Message>
        <Message>
          <Avatar/>
          udfhiluvszfdluihvlzid
        </Message>
        <Message>
          <Avatar/>
          udfhiluvszfdluihvlzid
        </Message>
        <Message>
          <Avatar/>
          udfhiluvszfdluihvlzid
        </Message>
        <Message>
          <Avatar/>
          udfhiluvszfdluihvlzid
        </Message>
        <Message>
          <Avatar/>
          udfhiluvszfdluihvlzid
        </Message>
        <Message>
          <Avatar/>
          udfhiluvszfdluihvlzid
        </Message>
      </MessagesLayout>
      <ChatLayout>
        <TopChatLayout>
          <Avatar/>
        </TopChatLayout>
        <div className='btns'>
          <Videobtn/>
          <Textbtn/>
          <Audiobtn/>
        </div>
      </ChatLayout>
    </div>
  );
}

export default App;
