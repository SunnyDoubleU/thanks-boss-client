import React, { ChangeEvent, useRef, useState } from 'react'
import styled from 'styled-components'
import { apiAuthentication } from '../../../api/apiAuthentication'
import { useForm } from 'react-hook-form'
import { IUser } from '../../../types'
import { Link } from 'react-router-dom'
interface IPasswordError {
    error: string
}

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
const SButton = styled.button`
    background: ${(props) =>
        `linear-gradient(50deg, ${props.theme.colors.background.tertiary} 26%, ${props.theme.colors.background.quaternary} 100%)`};
    padding: 10px;
    border: none;
    border-radius: 8px;
    color: ${(props) => props.theme.colors.text.secondary};
`
const SErrorContainer = styled.div`
    color: ${(props) => props.theme.colors.error};
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
`
const SLogInContainer = styled.div`
    margin-top: 5px;
    color: ${(props) => props.theme.colors.text.primary};
`
const SToLogIn = styled.span``
const SLogInLink = styled(Link)`
    color: ${(props) => props.theme.colors.accent};
    text-decoration: underline;
`

const SignUpPage: React.FC = () => {
    const { register, errors, handleSubmit, watch } = useForm({})
    const password = useRef({})
    password.current = watch('password', '')
    const [error, setError] = useState('')

    const signUp = async (user: IUser) => {
        try {
            const response = await apiAuthentication.createUser(user)
            console.log(response)
        } catch (err) {
            setError(err)
            console.log(err)
        }
    }

    const onSubmit = async (data: any) => {
        const userInfo = {
            firstName: data.firstName,
            surname: data.surname,
            email: data.email,
            password: data.password,
        }
        signUp(userInfo)
    }
    return (
        <SMainContainer>
            <SHeader>Create your account</SHeader>
            <SForm onSubmit={(e) => e.preventDefault()}>
                <SInput
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    ref={register({
                        required: 'First name is reqired',
                    })}
                    hasError={errors.firstName}
                />
                <SInput
                    type="text"
                    name="surname"
                    placeholder="Surname"
                    ref={register({
                        required: 'Surname is reqired',
                    })}
                    hasError={errors.lastName}
                />
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
                        required: 'You must specify a password',
                        minLength: {
                            value: 8,
                            message: 'Password must have at least 8 characters',
                        },
                    })}
                    hasError={errors.password}
                />

                <SInput
                    type="password"
                    name="password_repeat"
                    placeholder="Confirm password"
                    ref={register({
                        validate: (value: any) => value === password.current || 'The passwords do not match',
                    })}
                    hasError={errors.password_repeat}
                />
                <SErrorContainer>
                    {errors.email && <div>{errors.email.message}</div>}
                    {errors.password && <div>{errors.password.message}</div>}
                    {errors.password_repeat && <div>{errors.password_repeat.message}</div>}
                </SErrorContainer>

                <SButton type="submit" onClick={handleSubmit(onSubmit)}>
                    Sign up
                </SButton>
            </SForm>
            <SLogInContainer>
                Already have an account?{' '}
                <SToLogIn>
                    <SLogInLink to={`/login`}>Sign In</SLogInLink>
                </SToLogIn>
            </SLogInContainer>
        </SMainContainer>
    )
}

export default SignUpPage
