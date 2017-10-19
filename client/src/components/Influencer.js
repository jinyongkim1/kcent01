import React, { Component } from "react";
import {
  Button,
  Icon,
  Card,
  Image,
  Header,
  Dimmer,
  Container,
  Grid
} from "semantic-ui-react";
import ModelSearch from "./ModelSearch";
import { Link } from "react-router-dom";

class Leejina extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          LEE JINA
        </Header>
        <br></br>
        <br></br>
        <h4>너무너무 귀여운 우리 예콩이</h4>
        <a href="https://www.instagram.com/leejina.angel">
          <Button color="instagram">
            <Icon name="instagram" /> Instagram
          </Button>
        </a>
      </div>
    );

    return (
      <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size="medium"
          src="./img/people/leejina.jpg"
        />
      </Grid.Column>
    );
  }
}

class KimJina extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          KIM JINA
        </Header>
        <br></br>
        <br></br>
        <h4>너무너무 귀여운 우리 예콩이</h4>
        <a href="https://www.instagram.com/kimgnaa">
          <Button color="instagram">
            <Icon name="instagram" /> Instagram
          </Button>
        </a>
      </div>
    );

    return (
      <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size="medium"
          src="./img/people/kimjina.jpg"
        />
      </Grid.Column>
    );
  }
}

class Leebomyi extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          LEE BOMYI
        </Header>
        <br></br>
        <br></br>
        <h4>너무너무 귀여운 우리 예콩이</h4>
        <a href="https://www.instagram.com/lee_bomyi">
          <Button color="instagram">
            <Icon name="instagram" /> Instagram
          </Button>
        </a>
      </div>
    );

    return (
      <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size="medium"
          src="./img/people/leebomyi.jpg"
        />
      </Grid.Column>
    );
  }
}

class Yoonjinyong extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          YOON JINYONG
        </Header>
        <br></br>
        <br></br>
        <h4>너무너무 귀여운 우리 예콩이</h4>
        <a href="https://www.instagram.com/jinyong.yoon.12">
          <Button color="instagram">
            <Icon name="instagram" /> Instagram
          </Button>
        </a>
      </div>
    );

    return (
      <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size="medium"
          src="./img/people/yoonjinyong.jpg"
        />
      </Grid.Column>
    );
  }
}

class Hwangjihyeon extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          HWANG JIHYEON
        </Header>
        <br></br>
        <br></br>
        <h4>너무너무 귀여운 우리 예콩이</h4>
        <a href="https://www.instagram.com/jihyun_0411_">
          <Button color="instagram">
            <Icon name="instagram" /> Instagram
          </Button>
        </a>
      </div>
    );

    return (
      <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size="medium"
          src="./img/people/hwangjihyeon.jpg"
        />
      </Grid.Column>
    );
  }
}

class Leesunghyun extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          LEE SUNGHYUN
        </Header>
        <br></br>
        <br></br>
        <h4>#VOCAL TRAINER #BJ</h4>

        <a href="https://www.instagram.com/olosoho">
          <Button color="instagram">
            <Icon name="instagram" /> Instagram
          </Button>
        </a>

      </div>
    );

    return (
      <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size="medium"
          src="./img/people/leesunghyun.jpg"
        />
      </Grid.Column>
    );
  }
}

class Chahaerim extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          CHA HAERIM
        </Header>
        <br></br>
        <br></br>
        <h4>너무너무 귀여운 우리 예콩이</h4>
        <a href="https://www.instagram.com/hyerimcha">
          <Button color="instagram">
            <Icon name="instagram" /> Instagram
          </Button>
        </a>
      </div>
    );

    return (
      <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size="medium"
          src="./img/people/chahaerim.jpg"
        />
      </Grid.Column>
    );
  }
}

class Kimenji extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
      <Header as="h2" inverted>
        KIM ENJI
      </Header>
      <br></br>
      <br></br>
      <h4>#VOCAL TRAINER #BJ</h4>
        <a href="https://www.instagram.com/eunccis2">
          <Button color="instagram">
            <Icon name="instagram" /> Instagram
          </Button>
        </a>
      </div>
    );

    return (
      <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size="medium"
          src="./img/people/kimenji.jpg"
        />
      </Grid.Column>
    );
  }
}

class Kimkyungtae extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          KIM KYUNGTAE
        </Header>
        <br></br>
        <br></br>
        <h4>너무너무 귀여운 우리 예콩이</h4>
        <a href="https://www.instagram.com/kikyu_tae">
          <Button color="instagram">
            <Icon name="instagram" /> Instagram
          </Button>
        </a>
      </div>
    );

    return (
      <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size="medium"
          src="./img/people/kimkyungtae.jpg"
        />
      </Grid.Column>
    );
  }
}


class Junghaneul extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          JUNG HANEUL
        </Header>
        <br></br>
        <br></br>
        <h4>너무너무 귀여운 우리 예콩이</h4>
        <a href="https://www.instagram.com/sekaowa_sky">
          <Button color="instagram">
            <Icon name="instagram" /> Instagram
          </Button>
        </a>
      </div>
    );

    return (
      <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size="medium"
          src="./img/people/junghaneul.jpg"
        />
      </Grid.Column>
    );
  }
}


class Skyla extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          SKYLA
        </Header>
        <br></br>
        <br></br>
        <h4>너무너무 귀여운 우리 예콩이</h4>
        <a href="https://www.instagram.com/skylacho">
          <Button color="instagram">
            <Icon name="instagram" /> Instagram
          </Button>
        </a>
      </div>
    );

    return (
      <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size="medium"
          src="./img/people/skyla.jpg"
        />
      </Grid.Column>
    );
  }
}


class Bongahhyeon extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          BONG AHHYEON
        </Header>
        <br></br>
        <br></br>
        <h4>너무너무 귀여운 우리 예콩이</h4>
        <a href="https://www.instagram.com/undefined">
          <Button color="instagram">
            <Icon name="instagram" /> Instagram
          </Button>
        </a>
      </div>
    );

    return (
      <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size="medium"
          src="./img/people/bongahhyeon.jpg"
        />
      </Grid.Column>
    );
  }
}


class Chosoyoung extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          CHO SOYOUNG
        </Header>
        <br></br>
        <br></br>
        <h4>너무너무 귀여운 우리 예콩이</h4>
        <a href="https://www.instagram.com/undefined">
          <Button color="instagram">
            <Icon name="instagram" /> Instagram
          </Button>
        </a>
      </div>
    );

    return (
      <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size="medium"
          src="./img/people/chosoyoung.jpg"
        />
      </Grid.Column>
    );
  }
}


class Haseungwon extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          HA SEUNGWON
        </Header>
        <br></br>
        <br></br>
        <h4>너무너무 귀여운 우리 예콩이</h4>
        <a href="https://www.instagram.com/undefined">
          <Button color="instagram">
            <Icon name="instagram" /> Instagram
          </Button>
        </a>
      </div>
    );

    return (
      <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size="medium"
          src="./img/people/haseungwon.jpg"
        />
      </Grid.Column>
    );
  }
}


class Kimdawon extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          KIM DAWON
        </Header>
        <br></br>
        <br></br>
        <h4>너무너무 귀여운 우리 예콩이</h4>
        <a href="https://www.instagram.com/undefined">
          <Button color="instagram">
            <Icon name="instagram" /> Instagram
          </Button>
        </a>
      </div>
    );

    return (
      <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size="medium"
          src="./img/people/kimdawon.jpg"
        />
      </Grid.Column>
    );
  }
}


class Kimjion extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          KIM JION
        </Header>
        <br></br>
        <br></br>
        <h4>너무너무 귀여운 우리 예콩이</h4>
        <a href="https://www.instagram.com/undefined">
          <Button color="instagram">
            <Icon name="instagram" /> Instagram
          </Button>
        </a>
      </div>
    );

    return (
      <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size="medium"
          src="./img/people/kimjion.jpg"
        />
      </Grid.Column>
    );
  }
}


class Kimminji extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          KIM MINJI
        </Header>
        <br></br>
        <br></br>
        <h4>너무너무 귀여운 우리 예콩이</h4>
        <a href="https://www.instagram.com/undefined">
          <Button color="instagram">
            <Icon name="instagram" /> Instagram
          </Button>
        </a>
      </div>
    );

    return (
      <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size="medium"
          src="./img/people/kimminji.jpg"
        />
      </Grid.Column>
    );
  }
}

class Kimsungbin extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          KIM SUNGBIN
        </Header>
        <br></br>
        <br></br>
        <h4>너무너무 귀여운 우리 예콩이</h4>
        <a href="https://www.instagram.com/undefined">
          <Button color="instagram">
            <Icon name="instagram" /> Instagram
          </Button>
        </a>
      </div>
    );

    return (
      <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size="medium"
          src="./img/people/kimsungbin.jpg"
        />
      </Grid.Column>
    );
  }
}

class Kimtaehoon extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          KIM TAEHOON
        </Header>
        <br></br>
        <br></br>
        <h4>너무너무 귀여운 우리 예콩이</h4>
        <a href="https://www.instagram.com/undefined">
          <Button color="instagram">
            <Icon name="instagram" /> Instagram
          </Button>
        </a>
      </div>
    );

    return (
      <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size="medium"
          src="./img/people/kimtaehoon.jpg"
        />
      </Grid.Column>
    );
  }
}

class Kimyoungseok extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          KIM YOUNGSEOK
        </Header>
        <br></br>
        <br></br>
        <h4>너무너무 귀여운 우리 예콩이</h4>
        <a href="https://www.instagram.com/undefined">
          <Button color="instagram">
            <Icon name="instagram" /> Instagram
          </Button>
        </a>
      </div>
    );

    return (
      <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size="medium"
          src="./img/people/kimyoungseok.jpg"
        />
      </Grid.Column>
    );
  }
}

class Kwonsunmyung extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          KWON SUNMYUNG
        </Header>
        <br></br>
        <br></br>
        <h4>너무너무 귀여운 우리 예콩이</h4>
        <a href="https://www.instagram.com/undefined">
          <Button color="instagram">
            <Icon name="instagram" /> Instagram
          </Button>
        </a>
      </div>
    );

    return (
      <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size="medium"
          src="./img/people/Kwonsunmyung.jpg"
        />
      </Grid.Column>
    );
  }
}

class Leesonghee extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          LEE SONGHEE
        </Header>
        <br></br>
        <br></br>
        <h4>너무너무 귀여운 우리 예콩이</h4>
        <a href="https://www.instagram.com/undefined">
          <Button color="instagram">
            <Icon name="instagram" /> Instagram
          </Button>
        </a>
      </div>
    );

    return (
      <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size="medium"
          src="./img/people/leesonghee.jpg"
        />
      </Grid.Column>
    );
  }
}

class Parkesther extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          PARK ESTHER
        </Header>
        <br></br>
        <br></br>
        <h4>너무너무 귀여운 우리 예콩이</h4>
        <a href="https://www.instagram.com/undefined">
          <Button color="instagram">
            <Icon name="instagram" /> Instagram
          </Button>
        </a>
      </div>
    );

    return (
      <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size="medium"
          src="./img/people/parkesther.jpg"
        />
      </Grid.Column>
    );
  }
}

class Parkjibin extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          PARK JIBIN
        </Header>
        <br></br>
        <br></br>
        <h4>너무너무 귀여운 우리 예콩이</h4>
        <a href="https://www.instagram.com/undefined">
          <Button color="instagram">
            <Icon name="instagram" /> Instagram
          </Button>
        </a>
      </div>
    );

    return (
      <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size="medium"
          src="./img/people/parkjibin.jpg"
        />
      </Grid.Column>
    );
  }
}

class Parkyoonjung extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          PARK YOONJUNG
        </Header>
        <br></br>
        <br></br>
        <h4>너무너무 귀여운 우리 예콩이</h4>
        <a href="https://www.instagram.com/undefined">
          <Button color="instagram">
            <Icon name="instagram" /> Instagram
          </Button>
        </a>
      </div>
    );

    return (
      <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size="medium"
          src="./img/people/parkyoonjung.jpg"
        />
      </Grid.Column>
    );
  }
}

class Parksanghoon extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          PARK SANGHOON
        </Header>
        <br></br>
        <br></br>
        <h4>너무너무 귀여운 우리 예콩이</h4>
        <a href="https://www.instagram.com/undefined">
          <Button color="instagram">
            <Icon name="instagram" /> Instagram
          </Button>
        </a>
      </div>
    );

    return (
      <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size="medium"
          src="./img/people/parksanghoon.jpg"
        />
      </Grid.Column>
    );
  }
}

class Woochangbum extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          WOO CHANGBUM
        </Header>
        <br></br>
        <br></br>
        <h4>너무너무 귀여운 우리 예콩이</h4>
        <a href="https://www.instagram.com/undefined">
          <Button color="instagram">
            <Icon name="instagram" /> Instagram
          </Button>
        </a>
      </div>
    );

    return (
      <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size="medium"
          src="./img/people/woochangbum.jpg"
        />
      </Grid.Column>
    );
  }
}

class Yohan extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          YOHAN
        </Header>
        <br></br>
        <br></br>
        <h4>너무너무 귀여운 우리 예콩이</h4>
        <a href="https://www.instagram.com/undefined">
          <Button color="instagram">
            <Icon name="instagram" /> Instagram
          </Button>
        </a>
      </div>
    );

    return (
      <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size="medium"
          src="./img/people/yohan.jpg"
        />
      </Grid.Column>
    );
  }
}

class Yoonjiyeon extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          YOON JIYEON
        </Header>
        <br></br>
        <br></br>
        <h4>너무너무 귀여운 우리 예콩이</h4>
        <a href="https://www.instagram.com/undefined">
          <Button color="instagram">
            <Icon name="instagram" /> Instagram
          </Button>
        </a>
      </div>
    );

    return (
      <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size="medium"
          src="./img/people/yoonjiyeon.jpg"
        />
      </Grid.Column>
    );
  }
}

class Influencer extends Component {
  render() {
    return (
      <div>
        <Grid container columns={4}>
          <Leejina />
          <Yoonjinyong />
          <Leesunghyun />
          <Kimenji />
          <Kimkyungtae />
          <Haseungwon />
          <Kimsungbin />
          <Kimtaehoon />
          <Kimyoungseok />
          <Parkesther />
          <Yoonjiyeon />
          <Bongahhyeon />
          <Chosoyoung />
          <Kimdawon />
          <Hwangjihyeon />
          <Parksanghoon />
          <Woochangbum />
          <Skyla />
          <Parkjibin />
          <Leesonghee />
          <Kwonsunmyung />
          <Chahaerim />
          <Kimjion />
          <Kimminji />
          <Junghaneul />

          <Parkyoonjung />
          <Yohan />
          <Leebomyi />
        </Grid>
        <ModelSearch />
      </div>
    );
  }
}

export default Influencer;
