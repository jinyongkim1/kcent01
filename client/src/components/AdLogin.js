import React from 'react';
import { Button, Container, Form, Segment, Icon, Grid } from 'semantic-ui-react';

const AdLogin = () => {
  return (
    <div className='copawrap'>
    <Grid.Column className='copa'  style={{ maxWidth: 550 }}>
    <div>
    <h2> 광고주 로그인 </h2>
    <br></br>
    <br></br>
    <form method="POST" class="form-horizontal">
<input type="hidden" name="_csrf"/>
<div class="form-group">
  <label for="email" class="col-sm-3 control-label">이메일</label>
  <div class="col-sm-7">
    <input type="email" name="email" id="email" placeholder="Email" autofocus="autofocus" required="required" class="form-control"/>
  </div>
</div>
<div class="form-group">
  <label for="password" class="col-sm-3 control-label">패스워드</label>
  <div class="col-sm-7">
    <input type="password" name="password" id="password" placeholder="Password" required="required" class="form-control"/>
  </div>
</div>
<div class="form-group">
  <div class="col-sm-offset-3 col-sm-7">
    <button type="submit" class="col-sm-3 btn btn-primary"><i class="fa fa-user"></i>로그인</button><a href="/forgot" class="btn btn-link">비밀번호를 잊으셨나요?</a>
  </div>
</div>
</form>
    </div>
    </Grid.Column>
    </div>

  );
};

export default AdLogin;
