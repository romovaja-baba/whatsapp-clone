import { useForm } from 'react-hook-form'

const UsersInput = ({ onPhoneSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        clearErrors,
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        clearErrors('userPhoneNumber')
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='users-input text-input'>
                <input
                    {...register('userPhoneNumber', {
                        required: true,
                        pattern: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                    })}
                    placeholder='Введите номер в формате 7XXXXXXXX'
                />
                <button type='submit'>Добавить</button>
            </div>
            {errors?.userPhoneNumber && <div className='input-error'>Укажите корректный номер</div>}
        </form>
    )
}

export default UsersInput
