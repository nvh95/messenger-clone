import './App.css';
import styled from 'styled-components';

import { ReactComponent as PlusMore } from 'assets/svg/plus-more.svg';
import { ReactComponent as AddImage } from 'assets/svg/add-image.svg';
import { ReactComponent as AddStickers } from 'assets/svg/add-stickers.svg';
import { ReactComponent as AddGIF } from 'assets/svg/add-gif.svg';
import { ReactComponent as AddEmoji } from 'assets/svg/add-emoji.svg';
import selfImage from 'assets/images/self.jpg';
import ronaldoImage from 'assets/images/ronaldo.png';

const COLORS = {
  GRAY: 'hsl(0, 0%, 96%)',
  GRAY_DARK: 'hsl(0, 0%, 20%)',
  PRIMARY: '#0084ff',
  GREEN: '#5ad539'
};

const CONTACT_LIST = Array.from(Array(30).keys()).map(index => {
  return {
    id: index,
    name: `Contact ${index}`,
    message: `This is message ${index + 1}. Your chat message will stay here.`,
  }
})

function Avatar({ src, size }) {
  return (
    <div>
      <AvatarImg src={src} size={size} />
    </div>
  )
}

function App() {
  return (
    <Wrapper>
      <Sidebar>
        <Header>
          <Avatar
            size={40}
            src={selfImage}
          />

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
                  size={55}
                  src={`https://icotar.com/avatar/${contact.id}`}
                />
                <ContactInforWrarpper>
                  <ContactName>{contact.name}</ContactName>
                  <ContacMessageWrapper>
                    <ContactMessage>
                      {contact.message}
                    </ContactMessage>
                    <LastSeen>
                      1h
                    </LastSeen>
                  </ContacMessageWrapper>
                </ContactInforWrarpper>

              </Contact>
            )
          })}
        </ChatList>
      </Sidebar>
      <ConversationWrapper>
        <ConversationHeader>
          <RelativeWrapper>
            <Avatar
              size={40}
              src={ronaldoImage}
            />
            <ActiveDot />
          </RelativeWrapper>
          <ReceiverInfo>
            <ReceiverName href="https://www.facebook.com/Cristiano">Ronaldo</ReceiverName>
            <LastSeen>Active 1h ago</LastSeen>
          </ReceiverInfo>
          <FunctionButtons>
            <Button>
              📞
            </Button>
            <Button>🎥</Button>
            <Button>
              <MoreActions>
                ...
              </MoreActions>
            </Button>
          </FunctionButtons>
        </ConversationHeader>
        <ConversationBody>
          <div style={{ marginTop: 'auto' }}></div>
          {Array.from(Array(30).keys()).map((index) => {
            if (!(index % 2)) {
              return (
                <SenderChatMessage
                  key={index}
                >
                  {`This is message ${index + 1}`}
                </SenderChatMessage>
              )
            }
            return (
              <ReceiverChatMessage
                key={index}
              >
                {`This is message ${index + 1}`}
              </ReceiverChatMessage>
            )
          }
          )}
        </ConversationBody>
        <ComposerWrapper>
          <IconWrapper>
            <PlusMore />
          </IconWrapper>
          <IconWrapper>
            <AddImage />
          </IconWrapper>
          <IconWrapper>
            <AddStickers />
          </IconWrapper>
          <IconWrapper>
            <AddGIF />

          </IconWrapper>
          <ComposerInputWrapper>
            <ComposerInput
              placeholder="Aa"
            />
            <IconWrapper>
              <AddEmoji />
            </IconWrapper>
          </ComposerInputWrapper>
          <EmojiWrapper>👍</EmojiWrapper>
        </ComposerWrapper>
      </ConversationWrapper>
      <ChatDetailWrapper>
        <ReceiverDetails>
          <Avatar
            size={80}
            src={ronaldoImage}
          />
          <ReceiverName>Ronaldo</ReceiverName>
          <LastSeen>Active 1h ago</LastSeen>
          <CollapsableWrapper>
            {/* TODO: can we name following component better? */}
            <CollapsableTextWrapper>
              <CollapsableText>
                Customize Chat
              </CollapsableText>
              <CollapseIcon>^</CollapseIcon>
            </CollapsableTextWrapper>

            <CollapsableTextWrapper>
              <CollapsableText>
                Privacy & Support
              </CollapsableText>
              <CollapseIcon>^</CollapseIcon>
            </CollapsableTextWrapper>

            <CollapsableTextWrapper>
              <CollapsableText>
                Shared Files
              </CollapsableText>
              <CollapseIcon>^</CollapseIcon>
            </CollapsableTextWrapper>

            <CollapsableTextWrapper>
              <CollapsableText>
                Shared Media
              </CollapsableText>
              <CollapseIcon>^</CollapseIcon>
            </CollapsableTextWrapper>
          </CollapsableWrapper>
        </ReceiverDetails>
      </ChatDetailWrapper>
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
  flex: 0 5 360px;
  max-width: 360px;
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  padding: 16px;
  display: flex;
  gap: 16px;
  align-items: center;
`

const AvatarImg = styled.img`
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid ${COLORS.GRAY};
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

const Input = styled.input`
  border: 0;
  background-color: ${COLORS.GRAY};
  outline: none;
`

const SearchInput = styled(Input)`
  flex: 1;
`

const ChatList = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-top: 16px;
  padding-top: 0;
`

const Contact = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 4px;
  border-radius: 16px;
  cursor: pointer;
  :hover {
    background-color: ${COLORS.GRAY};
  }
`
const ContactInforWrarpper = styled.div`
  overflow: hidden;
  display: flex;
  gap: 5px;
  flex-direction: column;
`

const ContactName = styled.div`
`

const ContacMessageWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`

const ContactMessage = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${COLORS.GRAY_DARK};
  font-size: 0.8rem;
`

const LastSeen = styled.div`
  font-size: 0.8rem;
  color: ${COLORS.GRAY_DARK};
`

const ConversationWrapper = styled.div`
  border: 1px solid ${COLORS.GRAY};
  flex: 1 1 500px;
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
`

const ConversationHeader = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px 0;
  border-bottom: 1px solid ${COLORS.GRAY};
  box-shadow: 0px 3px 4px ${COLORS.GRAY};
`
const RelativeWrapper = styled.div`
  position: relative;
`

const ActiveDot = styled.div`
  width: 14px;
  height: 14px;
  background-color: ${COLORS.GREEN};
  border-radius: 50%;
  border: 2px solid white;
  position: absolute;
  bottom: 1px;
  right: 1px;
`

const ReceiverInfo = styled.div`
  padding: 0 8px;
  display: flex;
  gap: 4px;
  flex-direction: column;
`

const ReceiverName = styled.a`
  font-weight: 600;
  color: black;
  text-decoration: none;
`

const ComposerWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

const ComposerInputWrapper = styled.div`
  padding: 4px 8px;
  border-radius: 32px;
  flex: 1;
  display: flex;
  justify-content: space-between;
  background-color: ${COLORS.GRAY};
`

const ComposerInput = styled(Input)`

`

const IconWrapper = styled.div`
  cursor: pointer;
`;

const EmojiWrapper = styled(IconWrapper)`
  font-size: 1.5rem;
`

const ConversationBody = styled.div`
  overflow: auto;
  display: flex;
  justify-content: flex-start;
  margin-top: aut;
  flex-direction: column;
  flex: 1 1 700px;
  padding: 8px;
  gap: 8px;
  white-space: nowrap;
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

const ChatDetailWrapper = styled.div`
  border: 1px solid ${COLORS.GRAY};
  flex: 0 2 380px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  padding: 16px 8px;
  overflow: auto;

  @media ${props => props.theme.queries.tabletAndDown} {
    display: none;
  }
`

const ReceiverDetails = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
`

const CollapsableWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
`

const CollapsableTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 16px 8px;
  border-radius: 16px;
  &:hover {
    background-color: ${COLORS.GRAY};
  }
`
const CollapsableText = styled.div`
  font-weight: 500;
`
const CollapseIcon = styled.div`
  font-weight: 800;
  margin-top: 2px;
  transform: scale(-1, -1);
  color: ${COLORS.GRAY_DARK};
`

export default App;