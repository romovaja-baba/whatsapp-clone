import { useForm } from 'react-hook-form'
import { sendMessageLogic } from '../../tools/sendMessageLogic'
import { useContext } from 'react'
import { AuthDataContext } from '../../providers/AuthDataProvider'

const ChatInput = ({ chatId, onMessageSend }) => {
    const authData = useContext(AuthDataContext).authData
    const {
        register,
        handleSubmit,
        formState: { errors },
        clearErrors,
        reset,
    } = useForm()

    const onSubmit = (data) => {
        sendMessageLogic(chatId, onMessageSend, data.message, authData)
        clearErrors('message')
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {errors?.message && <div className='input-error'>Пустое сообщение</div>}
            <div className='chat-messages-input text-input'>
                <input
                    placeholder='Введите сообщение...'
                    {...register('message', { required: true })}
                />
                <button type='submit'>Отправить</button>
            </div>
        </form>
    )
}

export default ChatInput
