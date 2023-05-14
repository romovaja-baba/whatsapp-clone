import ChatMessage from './ChatMessage'
import '../../styles/ChatWindow.css'
import { useState } from 'react'

const ChatWindow = ({ selectedUser }) => {
    const [messages, setMessages] = useState([])

    if (!selectedUser) {
        return null
    }

    return (
        <div className='chat-container'>
            <div className='chat-userId'>Чат с пользователем {selectedUser.phoneNumber}</div>
            <div className='chat-window-container'>
                <div className='chat-messages-list'>
                    {messages.map((m) => (
                        <ChatMessage id={m.id} key={m.id} text={m.text} isMe={!!m.isMe} />
                    ))}
                </div>
                <div className='chat-messages-input text-input'>
                    <input placeholder='Введите сообщение...' />
                    <button>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default ChatWindow
