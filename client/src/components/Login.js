import React from 'react';
import { Button, Container, Form, Segment, Icon, Grid } from 'semantic-ui-react';

const Login = () => {
  return (
    <div className='copawrap'>
    <Grid.Column className='copa'  style={{ maxWidth: 550 }}>
    <div>
    <h2> KCTICS 로그인 </h2>
    <br></br>
    <br></br>
      <Form size='large'>
         <Segment>
           <Form.Input
             fluid
             icon='user'
             iconPosition='left'
             placeholder='이메일 아이디'
           />
           <Form.Input
             fluid
             icon='lock'
             iconPosition='left'
             placeholder='비밀번호'
             type='password'
           />
           <Button color='teal' fluid size='large'>로그인</Button>
         </Segment>

       </Form>
       <br></br>
       <Button color='facebook'>
       <Icon name='facebook' /> 페이스북
     </Button>
     <Button color='twitter'>
       <Icon name='twitter' /> 트위터
     </Button>
     <a href='/auth/google'>
     <Button color='google plus'>
       <Icon name='google plus' /> 구글
     </Button>
     </a>
     <Button color='instagram'>
       <Icon name='instagram' /> 인스타그램
     </Button>
    </div>
    </Grid.Column>
    </div>

  );
};

export default Login;
