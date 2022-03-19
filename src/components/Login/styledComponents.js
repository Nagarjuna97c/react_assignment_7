import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.dark ? 'rgb(33,33,33)' : '#f9f9f9')};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.form`
  height: 450px;
  width: 450px;
  background-color: ${props => (props.dark ? 'rgb(15,15,15)' : '#ffffff')};
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 7px;
  gap: 5px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.12);
`

export const Logo = styled.img`
  height: 50px;
  align-self: center;
  margin-bottom: 40px;
`

export const Label = styled.label`
  color: ${props => (props.dark ? '#ffffff' : '#475569')};
  font-size: 16px;
`

export const Input = styled.input`
  outline: none;
  font-size: 20px;
  padding: 6px 10px;
  color: #94a3b8;
  background-color: none;
  border: 1px solid #94a3b8;
  border-radius: 5px;
  margin-bottom: 10px;
`

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
`

export const CheckboxInput = styled(Input)`
  width: 30px;
  padding: 0;
  margin: 0;
`

export const CheckBoxLabel = styled(Label)`
  color: 0f0f0f;
  font-weight: 500;
  color: ${props => (props.dark ? '#ffffff' : '#1e293b')};
`

export const LoginButton = styled.button`
  margin-top: 20px;
  outline: none;
  border: none;
  background-color: #3b82f6;
  font-size: 20px;
  border-radius: 8px;
  color: #ffffff;
  padding: 7px 14px;
`

export const Error = styled.p`
  color: #ff0b37;
  font-size: 15px;
  margin-top: 5px;
`
