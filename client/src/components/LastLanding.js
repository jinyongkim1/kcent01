import React, { Component } from "react";
import Slider from 'react-slick';
import { Button, Icon, Grid } from 'semantic-ui-react'

class ContentOne extends Component {
  render() {
    const settings = {
          customPaging(i) {
            return <a><img alt="model" src={`img/model/model0${i+1}.PNG`}/></a>
          },
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          lazyLoad: true,
          centerMode: true,
          adaptiveHeight: true,
          fade: true,
          arrows: true,
          autoplaySpeed: 2000,
          className: 'slides'
        };
        return (
          <div>
            <Slider {...settings}>
              <div><img className="carousel-model" alt="model 01" src='./img/model/model01.PNG' /></div>
              <div><img className="carousel-model" alt="model 02" src='./img/model/model02.PNG' /></div>
              <div><img className="carousel-model" alt="model 03" src='./img/model/model03.PNG'  /></div>
              <div><img className="carousel-model" alt="model 04" src='./img/model/model04.PNG'  /></div>
            </Slider>
          </div>
        )
      }
}

const ContentTwo = () => {
  return (
    <div>
      This is second Content
    </div>
  );
};
const ContentThree = () => {
  return (
    <div>
      This is third Content
    </div>
  );
};
class LastLanding extends Component {
  constructor(){
    super();

    this.state = {
        option_number: "one",
        oneactive: false,
        twoactive: false,
        threeactive: false
      }
    }

    changeContentOne(){
      this.setState({option_number: "one", oneactive: !this.state.oneactive, twoactive: false, threeactive: false })
    }
    changeContentTwo(){
      this.setState({option_number: "two", twoactive: !this.state.twoactive, oneactive: false, threeactive: false})
    }
    changeContentThree(){
      this.setState({option_number: "three", threeactive: !this.state.threeactive, oneactive: false, twoactive: false})
    }


  render() {
    const { oneactive } = this.state.oneactive
    const { twoactive } = this.state.twoactive
    const { threeactive } = this.state.threeactive
    return(
      <section>
        <div className="last-landing">
          <div className="main-container-title-one">
            <img src="./img/man.svg" alt="entertainment man" height="87px" width="100px" />

            <br />
            <br />
            <b>종합 엔터테인먼트</b>
          </div>
          <div className="main-container-title-two">
            <p>
              모든 분야를 선도하는 종합 엔터테인먼트 회사 KCENT 입니다.
            </p>
            <br />
          </div>
          <Grid>
              <Grid.Column width={8}>

            <p>
              {(() => {
                switch(this.state.option_number){
                  case "one": return <ContentOne />;
                  case "two": return <ContentTwo />;
                  case "three": return <ContentThree />;
                  default: return <ContentOne />;
                }
              })()}
            </p>
            </Grid.Column>
            <Grid.Column width={8}>
              <Button.Group vertical>
                <Button active={this.state.oneactive} className="landing-category focus" onClick={this.changeContentOne.bind(this)}>MODEL</Button>
                <Button active={this.state.twoactive} className="landing-category" onClick={this.changeContentTwo.bind(this)}>BJ</Button>
                <Button active={this.state.threeactive} className="landing-category" onClick={this.changeContentThree.bind(this)}>BEAUTY</Button>
              </Button.Group>
            </Grid.Column>
            </Grid>
        </div>
      </section>
    );
  }
}

export default LastLanding;
