import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_GREEN_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const chatApi = {
    async sendMessage(chatId, message, authData) {
        const response = await instance.post(
            `/waInstance${authData.idInstance}/SendMessage/${authData.apiTokenInstance}`,
            {
                chatId,
                message,
            }
        )
        return response.data
    },
    async receiveNotification(authData) {
        const response = await instance.get(
            `/waInstance${authData.idInstance}/ReceiveNotification/${authData.apiTokenInstance}`
        )
        return response.data
    },
    async deleteNotification(receiptId, authData) {
        const response = await instance.delete(
            `/waInstance${authData.idInstance}/DeleteNotification/${authData.apiTokenInstance}/${receiptId}`
        )
        return response.data
    },
}
