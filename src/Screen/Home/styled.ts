import { styled } from "styled-components";

export const Container = styled.div `

  width: 100vw;
  height: 100vh;
`

export const Header = styled.header`
  width: 100%;
  height: 20%;

  background-color: #0D0D0D;
`
export const Main = styled.main`
 width: 100%;
 height: 80%;
 

 background-color: #1A1A1A;

 display: flex;

 align-items: flex-start;
 justify-content: center;
`

export const Form = styled.form`
  width: 50%;
  height: 54px;

  display: flex;
  gap: 8px;

  margin-top: -27px;
`
export const Input = styled.input`
  width: 100%;

  background-color: #262626;

  border: 1px solid #0D0D0D;
  border-radius: 8px;
  
  padding: 16px;

  font-size: 16px;
  font-weight: 400;
  color: #ffffff;

`
export const Button = styled.button`

  background-color: #1E6F9F;
  
  border: none;
  border-radius: 8px;
  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Text = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;


`