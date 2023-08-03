import { styled } from "styled-components";

export const Container = styled.div `
  width: 100vw;
  height: 100vh;
`

// HEADER

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
 flex-direction: column;
 align-items: center;
 justify-content: flex-start;
`

// FORM

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

// CONTENT

export const Content = styled.div`
  width: 50%;
  margin-top: 64px; 
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;

  margin-bottom: 25px;
`

export const TasksHeaderContainer = styled.div`
  display: flex; 
  flex-direction: row;
  align-items: center;

  gap: 8px;
`

export const TasksCreatedText = styled.p`
  color:#4EA8DE;
  font-size: 14px;
  font-weight: 700;
`

export const FinishedTasksText = styled.p`
  color:#8284FA;
  font-size: 14px;
  font-weight: 700;
`

export const TasksValueContainer = styled.div`
  padding: 2px 8px;
  background-color: #333;
  border-radius: 999px;
`

export const TasksValueText = styled.p`
  color: #D9D9D9;
  font-size: 12px;
  font-weight: 700;
`

export const TaskContainer = styled.div`
  background-color: #262626;

  padding: 16px; 

  border-radius: 8px;
  border: 1px solid #333;

  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`

export const TaskTitle = styled.p`
  display: flex;
  flex: 2;

  color: #F2F2F2;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
`

