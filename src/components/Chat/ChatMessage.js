import '../../styles/ChatWindow.css'

const ChatMessage = ({ id, text, isMe }) => {
    let isMeStyle = isMe ? 'message-me' : 'message-other'
    return <div className={`message-container ${isMeStyle}`}>{text}</div>
}

export default ChatMessage
