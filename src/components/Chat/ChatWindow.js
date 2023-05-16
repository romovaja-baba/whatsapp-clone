import { useContext } from 'react'
import { AppStateContext } from '../../providers/AppStateProvider'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'
import '../../styles/ChatWindow.css'

const ChatWindow = ({ selectedUser }) => {
    const { getChat, setMessage } = useContext(AppStateContext)
    const selectedUserChat = getChat(selectedUser)
    const messages = selectedUserChat?.messages
    const chatId = selectedUserChat?.chatId

    const onMessageSend = (messageId, messageText) => {
        setMessage(selectedUser, messageId, messageText, true)
    }

    if (!selectedUser) {
        return null
    }

    return (
        <div className='chat-container'>
            <div className='chat-userId'>Чат с пользователем {selectedUser.phoneNumber}</div>
            <div className='chat-window-container'>
                <div className='chat-messages-list'>
                    {messages.map((message) => (
                        <ChatMessage key={message.id} message={message} />
                    ))}
                </div>
                <ChatInput chatId={chatId} onMessageSend={onMessageSend} />
            </div>
        </div>
    )
}

export default ChatWindow
