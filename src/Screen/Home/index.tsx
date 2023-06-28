import { Button, Container, Form, Header, Input, Main, Text } from "./styled";

export function Home(){
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
      </Main>

    </Container>
  )  
}