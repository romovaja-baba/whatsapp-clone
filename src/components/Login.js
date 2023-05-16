import { useContext } from 'react'
import { AuthDataContext } from '../providers/AuthDataProvider'
import { useForm } from 'react-hook-form'
import '../styles/Login.css'

const AuthCheck = ({ children }) => {
    const authData = useContext(AuthDataContext)
    if (Object.keys(authData.authData).length) return children
    return <Login />
}

const Login = () => {
    const authData = useContext(AuthDataContext)
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        authData.setAuthData(data)
    }

    return (
        <div className='login-container'>
            <h2>Введите данные</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
                <input
                    className='login-form-elem'
                    placeholder='Введите свой ID Instance'
                    {...register('idInstance', { required: true })}
                />
                <input
                    className='login-form-elem'
                    placeholder='Введите свой API Token'
                    {...register('apiTokenInstance', { required: true })}
                />
                <button className='login-form-button login-form-elem' type='submit'>
                    Войти
                </button>
            </form>
        </div>
    )
}

export default AuthCheck
