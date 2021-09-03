import './App.css';
import styled from 'styled-components';

const COLORS = {
  GRAY: '#f5f5f5',
  PRIMARY: '#0084ff',
};

const MessageType = {
  SENDER: 'SENDER',
  RECEIVER: 'RECEIVER',
};

const CONTACT_LIST = Array.from(Array(30).keys()).map(index => {
  return {
    id: index,
    name: `Contact ${index}`,
    message: `This is message ${index + 1}. Your chat message will stay here.`,
  }
})


function App() {
  return (
    <Wrapper>
      <Sidebar>
        <Header>
          <SelfAvatarWrapper>
            <Avatar
              size={40}
              src="https://scontent.fhan3-2.fna.fbcdn.net/v/t1.6435-1/p100x100/80362123_10212573949542746_445906919169720320_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=5B22sD8uS5EAX8mH5Fx&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan3-2.fna&oh=c36ef09462d19a4851f94a3b2ad58d5e&oe=615659D9"
            />
          </SelfAvatarWrapper>

          <AppName>Chats</AppName>
          <FunctionButtons>
            <Button>
              <MoreActions>
                ...
              </MoreActions>
            </Button>
            <Button>🎥</Button>
            <Button>🖊</Button>
          </FunctionButtons>
        </Header>
        <SearchMessenger>
          🔎
          <SearchInput placeholder="Search Messenger" />
        </SearchMessenger>
        <ChatList>
          {CONTACT_LIST.map(contact => {
            return (
              <Contact key={contact.id}>
                <Avatar
                  size={40}
                  src="https://scontent.fhan3-2.fna.fbcdn.net/v/t1.6435-1/p100x100/80362123_10212573949542746_445906919169720320_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=5B22sD8uS5EAX8mH5Fx&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan3-2.fna&oh=c36ef09462d19a4851f94a3b2ad58d5e&oe=615659D9"
                />
                <ContactInforWrarpper>
                  <ContactName>{contact.name}</ContactName>
                  <ContactMessage>{contact.message}</ContactMessage>
                </ContactInforWrarpper>
              </Contact>
            )
          })}
        </ChatList>
      </Sidebar>
      <Conversation>
        {Array.from(Array(100).keys()).map((index) => {
          if (index % 2) {
            return (
              <SenderChatMessage
                key={index}
                type={MessageType.SENDER}
              >
                {`This is message ${index + 1}`}
              </SenderChatMessage>
            )
          }
          return (
            <ReceiverChatMessage
              key={index}
              type={MessageType.RECEIVER}
            >
              {`This is message ${index + 1}`}
            </ReceiverChatMessage>
          )
        }
        )}
      </Conversation>
      <Information>
        Information
      </Information>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`

const Sidebar = styled.div`
  border: 1px solid ${COLORS.GRAY};
  flex: 0 1 360px;
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  padding: 16px;
  display: flex;
  gap: 16px;
  align-items: center;
`

const SelfAvatarWrapper = styled.div`
  /* width: 40px;
  height: 40px; */
`

const Avatar = styled.img`
  border-radius: 50%;
  width: ${props => `${props.size}px` || '40px'};
  height: ${props => `${props.size}px` || '40px'};
`

const AppName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`
const FunctionButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-left: auto;
`
const Button = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${COLORS.GRAY};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MoreActions = styled.div`
  margin-top: -10px;
  font-weight: bold;
`

const SearchMessenger = styled.div`
  /* margin: 16px; */
  background-color: ${COLORS.GRAY};
  border-radius: 16px;
  display: flex;
  gap: 16px;
  padding: 8px 16px;
  margin: 0 16px;
`

const SearchInput = styled.input`
  border: 0;
  background-color: ${COLORS.GRAY};
  outline: none;
  flex: 1;
`

const ChatList = styled.div`

`

const Contact = styled.div`
  display: flex;
  gap: 8px;
`
const ContactInforWrarpper = styled.div`
`
const ContactName = styled.div`
`
const ContactMessage = styled.div`
`


const Conversation = styled.div`
  border: 1px solid ${COLORS.GRAY};
  flex: 1 1 500px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
`

const ChatMessage = styled.div`
  padding: 16px;
  border-radius: 32px;
`

const SenderChatMessage = styled(ChatMessage)`
  background-color: ${COLORS.PRIMARY};
  color: white;
  align-self: flex-end;
`

const ReceiverChatMessage = styled(ChatMessage)`
  background-color: ${COLORS.GRAY};
  align-self: flex-start;
`

const Information = styled.div`
  border: 1px solid ${COLORS.GRAY};
  flex: 0 2 380px;
`

export default App;