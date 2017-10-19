import React, { Component } from "react";
import Slider from 'react-slick';
import { Button, Icon, Grid } from 'semantic-ui-react'

class ContentOne extends Component {
  render() {
    const settings = {
          infinite: true,
          speed: 2000,
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
              <div><img className="carousel-model" alt="model 04" src='./img/creator/creator04.JPG' /></div>
              <div><img className="carousel-model" alt="model 05" src='./img/creator/creator05.JPG' /></div>
              <div><img className="carousel-model" alt="model 06" src='./img/creator/creator06.JPG' /></div>
              <div><img className="carousel-model" alt="model 01" src='./img/creator/creator01.JPG' /></div>
              <div><img className="carousel-model" alt="model 02" src='./img/creator/creator02.JPG' /></div>
              <div><img className="carousel-model" alt="model 03" src='./img/creator/creator03.JPG' /></div>
            </Slider>
          </div>
        )
      }
}

class ContentTwo extends Component {
  render() {
    const settings = {
          customPaging(i) {
            return <a><img alt="model" src={`img/model/model0${i+1}.PNG`}/></a>
          },
          dots: true,
          infinite: true,
          speed: 2000,
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
            <div><img className="carousel-model" alt="model 04" src='./img/actor/actor01.JPG' /></div>
            <div><img className="carousel-model" alt="model 05" src='./img/actor/actor02.JPG' /></div>
            <div><img className="carousel-model" alt="model 06" src='./img/actor/actor03.JPG' /></div>
            <div><img className="carousel-model" alt="model 06" src='./img/actor/actor04.JPG' /></div>
            </Slider>
          </div>
        )
      }
}
class ContentFour extends Component {
  render() {
    const settings = {
          customPaging(i) {
            return <a><img alt="model" src={`img/model/model0${i+1}.PNG`}/></a>
          },
          dots: true,
          infinite: true,
          speed: 2000,
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
              <div><img className="carousel-model" alt="model 01" src='./img/snsstar/snsstar01.JPG' /></div>
              <div><img className="carousel-model" alt="model 02" src='./img/snsstar/snsstar02.JPG' /></div>
              <div><img className="carousel-model" alt="model 03" src='./img/snsstar/snsstar03.JPG'  /></div>
              <div><img className="carousel-model" alt="model 04" src='./img/snsstar/snsstar04.JPG'  /></div>
            </Slider>
          </div>
        )
      }
}
class ContentFive extends Component {
  render() {
    const settings = {
          customPaging(i) {
            return <a><img alt="model" src={`img/model/model0${i+1}.PNG`}/></a>
          },
          dots: true,
          infinite: true,
          speed: 2000,
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
            <div><img className="carousel-model" alt="model 01" src='./img/group/group01.JPG' /></div>
            <div><img className="carousel-model" alt="model 02" src='./img/group/group02.JPG' /></div>
            <div><img className="carousel-model" alt="model 03" src='./img/group/group03.JPG' /></div>
            <div><img className="carousel-model" alt="model 04" src='./img/group/group04.JPG' /></div>
            </Slider>
          </div>
        )
      }
}
class ContentThree extends Component {
  render() {
    const settings = {
          customPaging(i) {
            return <a><img alt="model" src={`img/model/model0${i+1}.PNG`}/></a>
          },
          dots: true,
          infinite: true,
          speed: 2000,
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
              <div><img className="carousel-model" alt="model 01" src='./img/model2/model01.PNG' /></div>
              <div><img className="carousel-model" alt="model 02" src='./img/model2/model02.PNG' /></div>
              <div><img className="carousel-model" alt="model 03" src='./img/model2/model03.PNG'  /></div>
              <div><img className="carousel-model" alt="model 04" src='./img/model2/model04.PNG'  /></div>
            </Slider>
          </div>
        )
      }
}
class LastLanding extends Component {
  constructor(){
    super();

    this.state = {
        option_number: "one",
        oneactive: true,
        twoactive: false,
        threeactive: false,
        fouractive: false,
        fiveactive: false
      }
    }

    changeContentOne(){
      this.setState({option_number: "one", oneactive: true, twoactive: false, threeactive: false, fouractive: false, fiveactive: false })
    }
    changeContentTwo(){
      this.setState({option_number: "two", twoactive: true, oneactive: false, threeactive: false, fouractive: false, fiveactive: false })
    }
    changeContentThree(){
      this.setState({option_number: "three", threeactive: true, oneactive: false, twoactive: false, fouractive: false, fiveactive: false})
    }
    changeContentFour(){
      this.setState({option_number: "four", fouractive: true, oneactive: false, twoactive: false, threeactive: false, fiveactive: false})
    }
    changeContentFive(){
      this.setState({option_number: "five", fiveactive: true, oneactive: false, twoactive: false, fouractive: false, threeactive: false})
    }


  render() {
    const { oneactive } = this.state.oneactive
    const { twoactive } = this.state.twoactive
    const { threeactive } = this.state.threeactive
    const { fouractive } = this.state.fouractive
    const { fiveactive } = this.state.fiveactive

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
              종합 엔터테인먼트 회사 KCENT 입니다.
            </p>
            <br />
          </div>
          <Grid>
              <Grid.Column width={12}>
            <p className="carousel-main">
              {(() => {
                switch(this.state.option_number){
                  case "one": return <ContentOne />;
                  case "two": return <ContentTwo />;
                  case "three": return <ContentThree />;
                  case "four": return <ContentFour />;
                  case "five": return <ContentFive />;
                  default: return <ContentOne />;
                }
              })()}
            </p>
            </Grid.Column>
            <Grid.Column width={4}>
              <Button.Group vertical>
                <Button active={this.state.oneactive} className="landing-category focus" onClick={this.changeContentOne.bind(this)}>CREATOR</Button>
                <Button active={this.state.twoactive} className="landing-category" onClick={this.changeContentTwo.bind(this)}>ACTOR</Button>
                <Button active={this.state.threeactive} className="landing-category" onClick={this.changeContentThree.bind(this)}>MODEL</Button>
                <Button active={this.state.fouractive} className="landing-category" onClick={this.changeContentFour.bind(this)}>SNS STAR</Button>
                <Button active={this.state.fiveactive} className="landing-category" onClick={this.changeContentFive.bind(this)}>YOUNG IDOL</Button>
              </Button.Group>
            </Grid.Column>
            </Grid>
        </div>
      </section>
    );
  }
}

export default LastLanding;
