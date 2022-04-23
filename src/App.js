import './App.css';
import ChatsLayout from './layouts/ChatsLayout/ChatsLayout';
import Avatar from './components/Avatar/Avatar';
import Chat from './components/Chat/Chat';
import MessagesLayout from './layouts/MessagesLayout/MessagesLayout';
import Textbtn from './components/Textbtn/Textbtn';
import Audiobtn from './components/Audiobtn/Audiobtn';
import Videobtn from './components/Videobtn/Videobtn';
import TopChatLayout from './layouts/TopChatLayout/TopChatLayout';
import Message from './components/Message/Message';

function App() {
  return (
    <div className="App">
      <ChatsLayout>
        <Chat>
          <Avatar/>
          udfhiluvszfdluihvlzid
        </Chat>
        <Chat>
          <Avatar/>
          udfhiluvszfdluihvlzid
        </Chat>
        <Chat>
          <Avatar/>
          udfhiluvszfdluihvlzid
        </Chat>
        <Chat>
          <Avatar/>
          udfhiluvszfdluihvlzid
        </Chat>
        <Chat>
          <Avatar/>
          udfhiluvszfdluihvlzid
        </Chat>
        <Chat>
          <Avatar/>
          udfhiluvszfdluihvlzid
        </Chat>
        <Chat>
          <Avatar/>
          udfhiluvszfdluihvlzid
        </Chat>
        <Chat>
          <Avatar/>
          udfhiluvszfdluihvlzid
        </Chat>
      </ChatsLayout>
      <MessagesLayout>
        <TopChatLayout>
          <Avatar/>
        </TopChatLayout>
        <div className='meslayout'>
          <Message/>
          <Message/>
          <Message/>
          <Message/>
          <Message/>
          <Message/>
          <Message/>
        </div>
        <div className='btns'>
          <Videobtn/>
          <Textbtn/>
          <Audiobtn/>
        </div>
      </MessagesLayout>
    </div>
  );
}

export default App;
