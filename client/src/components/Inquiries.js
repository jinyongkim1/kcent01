import React, { Component } from "react";
import {
  Button,
  Grid,
  Image,
  Dimmer,
  Card,
  Form,
  Input,
  TextArea,
  Container,
  Checkbox,
  Radio,
  Select,
  Segment
} from "semantic-ui-react";

const options = [
  { key: "m", text: "인플루언서 SNS 광고게시 문의", value: "male" },
  { key: "f", text: "인플루언서 광고컨텐츠 제작 문의", value: "female" },
  { key: "d", text: "컨텐츠 제작 제휴문의", value: "another value" },
  { key: "s", text: "기타 제휴문의", value: "final value" }
];

const optionstwo = [
  { key: "a", text: "KCENT", value: "male" },
  { key: "b", text: "SNOW", value: "female" }
];

class ContentOne extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <div>
        <Form>
          <Form.Group widths="equal">
            <Form.Field control={Input} label="성함" placeholder="성함" />
            <Form.Field control={Input} label="소속" placeholder="회사 이름" />
            <Form.Field
              control={Input}
              label="이메일"
              placeholder="jinkim@k-cent.com"
            />
          </Form.Group>
          <Form.Field
            control={Select}
            label="문의"
            options={options}
            placeholder="문의사항 선택"
          />
          <Form.Field
            control={TextArea}
            label="기타 요구사항"
            placeholder="기타 요구사항을 적어주세요"
          />
          <Form.Field>
            <Checkbox label='개인정보 이용약관에 동의합니다.' />
          </Form.Field>
          <Form.Field control={Button}>Submit</Form.Field>
        </Form>
      </div>
    );
  }
}

class ContentTwo extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <div>
        <Form>
          <Form.Group widths="equal">
            <Form.Field control={Input} label="이름" placeholder="꼭 본명으로 기록해주세요!" />
            <Form.Field control={Input} label="방송날짜와 시간" placeholder="ex. 5일 6시-8시" />
            <Form.Field control={Input} label="최고 동시 시청자" placeholder="ex. 162 (인사이트에서 확인할 수 있습니다)"/>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field control={Input} label="오늘 방송컨텐츠" placeholder="ex.운동 후 먹방" />
            <Form.Field control={Input} label="한줄 피드백" placeholder="소통이 편해짐" />
            <Form.Field control={Input} label="성장 기록" placeholder="악플 대처가 능숙해짐"/>
          </Form.Group>
          <Form.Field
            control={Select}
            label="케이센트 / SNOW에 피드백 전달"
            options={optionstwo}
            placeholder="회사 선택"
          />
          <Form.Field
            control={TextArea}
            label="피드백"
            placeholder="피드백 및 요청사항을 적어주세요"
          />
          <Form.Field control={Checkbox} label="솔직하게 답변했습니다." />
          <Form.Field control={Button}>Submit</Form.Field>
        </Form>
      </div>
    );
  }
}
const ContentThree = () => {
  return <div>This is third Content</div>;
};
class Inquiries extends Component {
  constructor() {
    super();

    this.state = {
      option_number: "one",
      oneactive: true,
      twoactive: false,
      threeactive: false
    };
  }

  changeContentOne() {
    this.setState({
      option_number: "one",
      oneactive: !this.state.oneactive,
      twoactive: false,
      threeactive: false
    });
  }
  changeContentTwo() {
    this.setState({
      option_number: "two",
      twoactive: !this.state.twoactive,
      oneactive: false,
      threeactive: false
    });
  }
  changeContentThree() {
    this.setState({
      option_number: "three",
      threeactive: !this.state.threeactive,
      oneactive: false,
      twoactive: false
    });
  }

  render() {
    const { oneactive } = this.state.oneactive;
    const { twoactive } = this.state.twoactive;
    const { threeactive } = this.state.threeactive;

    return (
      <Container>
        <div className="inquiries-container">
        <Button.Group attached='top'>
          <Button
            active={this.state.oneactive}
            className="inquiries-category focus"
            onClick={this.changeContentOne.bind(this)}
          >
            광고 및 제휴문의
          </Button>
          <Button
            active={this.state.twoactive}
            className="inquiries-category"
            onClick={this.changeContentTwo.bind(this)}
          >
            인플루언서
          </Button>
          <Button
            active={this.state.threeactive}
            className="inquiries-category"
            onClick={this.changeContentThree.bind(this)}
          >
            기타 문의
          </Button>
          </Button.Group>
        </div>
        <Segment attached>
            {(() => {
              switch (this.state.option_number) {
                case "one":
                  return <ContentOne />;
                case "two":
                  return <ContentTwo />;
                case "three":
                  return <ContentThree />;
                default:
                  return <ContentOne />;
              }
            })()}
          </Segment>
      </Container>
    );
  }
}

export default Inquiries;
