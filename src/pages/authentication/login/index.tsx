import React, { useState } from 'react'
import styled from 'styled-components'
import { apiAuthentication } from '../../../api/apiAuthentication'
import { useForm } from 'react-hook-form'
import { IUser } from '../../../types'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { setUser } from '../../../functions'

const SMainContainer = styled.div`
    background: ${(props) => props.theme.colors.background.primary};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 15px;
    padding: 20px;
`

const SHeader = styled.div`
    font-size: 32px;
    font-weight: bold;
    text-align: left;
    width: 100%;
    color: ${(props) => props.theme.colors.text.h1};
    margin-bottom: 10px;
`
const SForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const SInput = styled.input<{ hasError: boolean }>`
    border: 1px solid ${(props) => (props.hasError ? props.theme.colors.error : props.theme.colors.border)};
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 10px;
    /* box-shadow: 3px 3px 3px 0px ${(props) => props.theme.colors.boxShadow}; */
`
const SErrorContainer = styled.div`
    color: ${(props) => props.theme.colors.error};
`
const SButton = styled.button`
    background: ${(props) =>
        `linear-gradient(50deg, ${props.theme.colors.background.tertiary} 26%, ${props.theme.colors.background.quaternary} 100%)`};
    padding: 10px;
    border: none;
    border-radius: 8px;
    color: ${(props) => props.theme.colors.text.secondary};
`
const SSignUpContainer = styled.div`
    margin-top: 5px;
    color: ${(props) => props.theme.colors.text.primary};
`
const SToSignUp = styled.span``
const SSignUpLink = styled(Link)`
    color: ${(props) => props.theme.colors.accent};
    text-decoration: underline;
`
const LoginPage: React.FC = () => {
    const { register, errors, handleSubmit } = useForm({})
    const [error, setError] = useState('')
    const history = useHistory()
    const logIn = async (user: IUser) => {
        try {
            const response = await apiAuthentication.loginUser(user)
            setUser(response.data)
            history.push('/')
        } catch (err) {
            setError(err)
            console.log('login error', err)
        }
    }
    const onSubmit = async (data: any) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        }
        logIn(userInfo)
    }

    return (
        <SMainContainer>
            <SHeader>Log in</SHeader>
            <SForm onSubmit={(e) => e.preventDefault()}>
                <SInput
                    type="text"
                    name="email"
                    placeholder="Email"
                    ref={register({
                        required: 'Email is reqired',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email',
                        },
                    })}
                    hasError={errors.email}
                />

                <SInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    ref={register({
                        required: 'Password is required',
                    })}
                    hasError={errors.password}
                />
                <SErrorContainer>
                    {errors.email && <div>{errors.email.message}</div>}
                    {errors.password && <div>{errors.password.message}</div>}
                </SErrorContainer>

                <SButton type="submit" onClick={handleSubmit(onSubmit)}>
                    Log in
                </SButton>
            </SForm>
            <SSignUpContainer>
                New user?
                <SToSignUp>
                    <SSignUpLink to={`/signup`}>Sign up for free.</SSignUpLink>
                </SToSignUp>
            </SSignUpContainer>
        </SMainContainer>
    )
}

export default LoginPage
