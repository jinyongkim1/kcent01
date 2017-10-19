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
       </Form>
       <br></br>
       <a href='/auth/facebook'>
       <Button color='facebook'>
       <Icon name='facebook' /> 페이스북
     </Button>
     </a>
     <a href='auth/twitter'>
     <Button color='twitter'>
       <Icon name='twitter' /> 트위터
     </Button>
     </a>
     <a href='/auth/google'>
     <Button color='google plus'>
       <Icon name='google plus' /> 구글
     </Button>
     </a>
     <a href='/auth/instagram'>
     <Button color='instagram'>
       <Icon name='instagram' /> 인스타그램
     </Button>
     </a>
    </div>
    </Grid.Column>
    </div>

  );
};

export default Login;
