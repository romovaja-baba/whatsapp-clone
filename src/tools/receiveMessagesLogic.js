import { chatApi } from '../api/api'

export const receiveMessagesLogic = async (onMessageReceive, authData) => {
    try {
        const response = await chatApi.receiveNotification(authData)
        if (!response) return receiveMessagesLogic(onMessageReceive, authData)

        const { receiptId, body } = response

        if (body.typeWebhook === 'incomingMessageReceived') {
            const idMessage = body.idMessage
            const chatId = body.senderData?.chatId
            const messageText = body.messageData.textMessageData?.textMessage

            await chatApi.deleteNotification(receiptId, authData)
            return onMessageReceive(chatId, idMessage, messageText)
        } else {
            await chatApi.deleteNotification(receiptId, authData)
        }
    } catch (error) {
        alert('Неправильные данные входа')
    }
}
