import React, { ChangeEvent, useRef, useState } from 'react'
import styled from 'styled-components'
import { apiAuthentication } from '../../../api/apiAuthentication'
import { useForm } from 'react-hook-form'
interface IPasswordError {
    error: string
}
const SMainContainer = styled.div`
    background: ${(props) => props.theme.colors.background.secondary};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const SButton = styled.button`
    background: ${(props) =>
        `linear-gradient(90deg, ${props.theme.colors.background.tertiary} 26%, ${props.theme.colors.background.quaternary} 100%)`};
    padding: 10px;
    border: none;
    border-radius: 25px;
    color: ${(props) => props.theme.colors.text.secondary};
`
const SErrorContainer = styled.div`
    color: ${(props) => props.theme.colors.error};
`
const SForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 70%;
`
const SInput = styled.input<{ hasError: boolean }>`
    border: 1px solid ${(props) => (props.hasError ? props.theme.colors.error : 'transparent')};
    border-radius: 25px;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 3px 3px 3px 0px ${(props) => props.theme.colors.boxShadow};
`

const SignUpPage: React.FC = () => {
    const { register, errors, handleSubmit, watch } = useForm({})
    const password = useRef({})
    password.current = watch('password', '')
    const [error, setError] = useState('')
    const [username, setUsername] = useState('')
    const isValidForm = () => {
        //todo: add in more fields for form
        // return username.length > 0 && passwordAuth()
    }

    const signUp = async (email: string, password: string) => {
        try {
            const response = await apiAuthentication.createUser(email, password)
            console.log(response)
        } catch (err) {
            setError(err)
        }
    }
    // const inputUsername = (e: ChangeEvent<HTMLInputElement>): void => {
    //     setUsername(e.target.value)
    // }
    const onSubmit = async (data: any) => {
        signUp(data.email, data.password)
        alert(JSON.stringify(data))
    }
    return (
        <SMainContainer>
            <SForm onSubmit={(e) => e.preventDefault()}>
                <SInput
                    type="text"
                    name="email"
                    placeholder="email"
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
                    placeholder="password"
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
                    placeholder="confirm password"
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
                    Create User
                </SButton>
                {/* <input type="submit" onClick={handleSubmit(onSubmit)} /> */}
            </SForm>
        </SMainContainer>
    )
}

export default SignUpPage
