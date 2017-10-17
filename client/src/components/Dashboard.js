import React from "react";
import { Link } from 'react-router-dom';
import { Button, Container, Checkbox, Icon, Table, Header, Image } from 'semantic-ui-react';
import InfluencerChart from './InfluencerChart';

const Dashboard = () => {
  return (
    <Container>
      <TableExampleFullWidth/>
    </Container>
  );
};

const TableExampleFullWidth = () => (
  <div>
  <Table celled definition>
    <Table.Header fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell>인플루언서</Table.HeaderCell>
        <Table.HeaderCell>광고 시작일</Table.HeaderCell>
        <Table.HeaderCell>광고형태</Table.HeaderCell>
        <Table.HeaderCell>인스타그램</Table.HeaderCell>
        <Table.HeaderCell>통계</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Checkbox toggle />
        </Table.Cell>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='/img/people/elonmusk.jpg' shape='rounded' size='mini' />
            <Header.Content>
                예콩이
              <Header.Subheader>유아 인플루언서</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>10월 14일, 2017</Table.Cell>
        <Table.Cell>광고컨텐츠 게시</Table.Cell>
        <Table.Cell>
        <a href="https://www.instagram.com/agijagimin">
        <Button color='instagram'>
          <Icon name='instagram' /> /agijagimin
        </Button>
        </a>
        </Table.Cell>
        <Table.Cell>
        <Button icon color='teal'>
          <Icon name='area chart'/>
        </Button>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Checkbox toggle />
        </Table.Cell>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='/img/people/elonmusk.jpg' shape='rounded' size='mini' />
            <Header.Content>
                기용이
              <Header.Subheader>유아 인플루언서</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>10월 7일, 2017</Table.Cell>
        <Table.Cell>광고컨텐츠 게시</Table.Cell>
        <Table.Cell>
        <a href="https://www.instagram.com/yong_mom">
        <Button color='instagram'>
          <Icon name='instagram' /> /yong_mom
        </Button>
        </a>
        </Table.Cell>
        <Table.Cell>
        <Button icon color='teal'>
          <Icon name='area chart'/>
        </Button>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Checkbox toggle />
        </Table.Cell>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='/img/people/elonmusk.jpg' shape='rounded' size='mini' />
            <Header.Content>
                강지수
              <Header.Subheader>미스코리아</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>10월 14일, 2017</Table.Cell>
        <Table.Cell>컨텐츠 공동제작</Table.Cell>
        <Table.Cell>
        <a href="https://www.instagram.com/yong_mom">
        <Button color='instagram'>
          <Icon name='instagram' /> /jiisookang
        </Button>
        </a>
        </Table.Cell>
        <Table.Cell>
        <Button icon color='teal'>
          <Icon name='area chart'/>
        </Button>
        </Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell colSpan='5'>
        <Link to="/ads/new">
          <Button floated='right' primary size='small' content='새 인플루언서 등록' icon='plus' labelPosition='left' />
        </Link>
          <Button size='small'>완료표시 하기</Button>
          <Button disabled size='small'>전부 완료하기</Button>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
  <InfluencerChart />
  </div>

)

export default Dashboard;
