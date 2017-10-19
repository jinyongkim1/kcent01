import React from 'react';

const Signup = () => {
  return (
    <div>
    <div class="page-header">
  <h3>회원가입</h3>
</div>
<form id="signup-form" method="POST" class="form-horizontal">
  <input type="hidden" name="_csrf"/>
  <div class="form-group">
    <label for="email" class="col-sm-3 control-label">이메일</label>
    <div class="col-sm-7">
      <input type="email" name="email" id="email" placeholder="Email" autofocus="autofocus" required="required" class="form-control"/>
    </div>
  </div>
  <div class="form-group">
    <label for="password" class="col-sm-3 control-label">비밀번호</label>
    <div class="col-sm-7">
      <input type="password" name="password" id="password" placeholder="Password" required="required" class="form-control"/>
    </div>
  </div>
  <div class="form-group">
    <label for="confirmPassword" class="col-sm-3 control-label">비밀번호 확인</label>
    <div class="col-sm-7">
      <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" required="required" class="form-control"/>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-3 col-sm-7">
      <button type="submit" class="btn btn-success"><i class="fa fa-user-plus"></i>회원가입</button>
    </div>
  </div>
</form>
</div>
  );
}

export default Signup;
