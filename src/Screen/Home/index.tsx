import { useState, useEffect } from "react";

import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FiTrash } from "react-icons/fi";

import { 
  Button,
  Container, 
  Content, 
  FinishedTasksText, 
  Form, 
  Header, 
  HeaderContent, 
  Input, 
  Main, 
  TaskContainer, 
  TaskTitle, 
  TasksCreatedText, 
  TasksHeaderContainer, 
  TasksValueContainer, 
  TasksValueText, 
  Text 
} from "./styled";

interface TasksProps {
  id: number;
  title: string;
  isCompleted: boolean;
}

const DATA_TASK = [
  {
    id: 1,
    title: "Ir à academia",
    isCompleted: true,
  },
  {
    id: 2,
    title: "Fazer as compras",
    isCompleted: true,
  },
  {
    id: 3,
    title: "Ir à formatura do Moisés",
    isCompleted: true,
  },
]

export function Home(){
  const [ tasks, setTasks ] = useState<TasksProps[]>([])

  function fetchTasks(){
    setTasks(DATA_TASK)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <Container>
      <Header/>
      <Main>
        <Form>
          <Input name="task" placeholder="Adicione uma nova tarefa"/>
          <Button type="submit">
            <Text> Criar </Text>
          </Button>
        </Form>

        <Content>
          <HeaderContent>
            <TasksHeaderContainer>
              <TasksCreatedText>Tarefas criadas</TasksCreatedText>
              <TasksValueContainer>
                <TasksValueText>5</TasksValueText>
              </TasksValueContainer>
            </TasksHeaderContainer>

            <TasksHeaderContainer>
              <FinishedTasksText>Concluídas</FinishedTasksText>
              <TasksValueContainer>
                <TasksValueText>2 de 5</TasksValueText>
              </TasksValueContainer>  
            </TasksHeaderContainer>
          </HeaderContent>

          {tasks.map((task) => (
            <TaskContainer key={task.id}>
              <MdCheckBoxOutlineBlank size={24} color="#4EA8DE"/>
              <TaskTitle>{task.title}</TaskTitle>
              <FiTrash size={20}  color="#808080"/>
            </TaskContainer>
          ))}
          
        </Content>
      </Main>

    </Container>
  )  
}