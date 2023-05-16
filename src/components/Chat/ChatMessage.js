import '../../styles/ChatWindow.css'

const ChatMessage = ({ message }) => {
    const isMeStyle = message.isMe ? 'message-me' : 'message-other'

    return <div className={`message-container ${isMeStyle}`}>{message.text}</div>
}

export default ChatMessage
