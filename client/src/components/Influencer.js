import React, { Component } from "react";
import { Button, Icon, Card, Image, Header, Dimmer, Container, Grid} from 'semantic-ui-react'
import ModelSearch from './ModelSearch';
import { Link } from 'react-router-dom';

class Influencer extends Component {
  state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  render() {

    const { active } = this.state
    const content = (
      <div>
        <Header as='h2' inverted>예콩이</Header>
        <h4>너무너무 귀여운 우리 예콩이</h4>
        <a href="https://www.instagram.com/yong_mom">
        <Button color='instagram'>
          <Icon name='instagram' /> 인스타그램
        </Button>
        </a>
        <Link to='/'>
        <Button icon color='teal'>
          <Icon name='area chart'/> 통계
        </Button>
        </Link>
      </div>
    )



    return(
      <div>
      <Grid container columns={4}>
        <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size='medium'
          src='./img/people/elonmusk.jpg'
        />
        </Grid.Column>
        <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size='medium'
          src='./img/people/elonmusk.jpg'
        />
        </Grid.Column>
        <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size='medium'
          src='./img/people/elonmusk.jpg'
        />
        </Grid.Column>
        <Grid.Column>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          size='medium'
          src='./img/people/elonmusk.jpg'
        />
        </Grid.Column>
      </Grid>
      <ModelSearch />
      </div>
    );
  }
}

export default Influencer;
