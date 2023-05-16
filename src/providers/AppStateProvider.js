import { createContext, useState, useEffect, useContext } from 'react'
import { AuthDataContext } from './AuthDataProvider'
import { chatApi } from '../api/api'

export const AppStateContext = createContext({})

const AppStateProvider = ({ children }) => {
    const [state, setState] = useState({ chats: [] })
    const authData = useContext(AuthDataContext).authData

    const numberToId = (phoneNumber) => `${phoneNumber}@c.us`

    useEffect(() => {
        let ignore = false

        const receiveMessagesLogic = async () => {
            if (ignore) return

            try {
                const response = await chatApi.receiveNotification(authData)
                if (!response) return receiveMessagesLogic()

                const { receiptId, body } = response

                if (body.typeWebhook === 'incomingMessageReceived') {
                    const messageId = body.idMessage
                    const chatId = body.senderData?.chatId
                    const messageText = body.messageData.textMessageData?.textMessage

                    if (ignore) return

                    await chatApi.deleteNotification(receiptId, authData)
                    setMessage({ chatId: chatId }, messageId, messageText, false)
                } else {
                    await chatApi.deleteNotification(receiptId, authData)
                }
            } catch (error) {
                alert('Неправильные данные входа')
            }
        }

        receiveMessagesLogic()

        return () => {
            ignore = true
        }
    }, [state])

    const getChat = (user) => {
        return state.chats.find((chat) => chat.chatId === numberToId(user?.phoneNumber))
    }

    const getAllChats = () => {
        return state.chats
    }

    const setChat = (user) => {
        if (getChat(user)) return
        let newChat = {
            chatId: numberToId(user.phoneNumber),
            phoneNumber: user.phoneNumber,
            messages: [],
        }
        let newState = { ...state, chats: [...state.chats, newChat] }
        setState(newState)
    }

    const setMessage = (user, messageId, messageText, isMe) => {
        let newMessage = { id: messageId, text: messageText, isMe: isMe }
        let newState = {
            ...state,
            chats: state.chats.map((chat) => {
                if (chat.chatId === user.chatId) {
                    return { ...chat, messages: [...chat.messages, newMessage] }
                }
                return chat
            }),
        }
        setState(newState)
    }

    return (
        <AppStateContext.Provider value={{ getChat, getAllChats, setChat, setMessage }}>
            {children}
        </AppStateContext.Provider>
    )
}

export default AppStateProvider
