import { chatApi } from '../api/api'

export const sendMessageLogic = async (chatId, onMessageSend, messageText, authData) => {
    try {
        const result = await chatApi.sendMessage(chatId, messageText, authData)
        onMessageSend(result.idMessage, messageText)
    } catch (e) {
        alert('Не удалось отправить сообщение')
    }
}
