import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Popup, Icon, Segment } from 'semantic-ui-react';

const ContentOne = () => {
  return(
    <div>
    <p> 2017년 1월 1일 ~ 9월 31일 한국 페이스북 페이지 </p>
  <BootstrapTable version='4' data={facebookpage} selectRow={selectRowProp} pagination hover search searchPlaceholder='페이스북 기업페이지를 검색해보세요. (ex. 롯데)'>
    <TableHeaderColumn dataAlign="center" width='70' dataField="rank" dataSort={true} isKey={true}>순위</TableHeaderColumn>
    <TableHeaderColumn dataAlign="center" width='60' dataField="image" dataFormat={imageFormatter} >섬네일</TableHeaderColumn>
    <TableHeaderColumn dataAlign="center" width='150' dataField="pagename" dataSort={true}>페이지 이름</TableHeaderColumn>
    <TableHeaderColumn dataAlign="center" width='150' dataField="follower" dataSort={true}>팔로워</TableHeaderColumn>
    <TableHeaderColumn dataAlign="center" width='150' dataField="contentsform" dataSort={true}>주 컨텐츠 형태</TableHeaderColumn>
    <TableHeaderColumn dataAlign="center" width='150' dataField="engagement" dataSort={true} ><Popup trigger={<Button>평균 REACTION</Button>} content='평균 리엑션: 좋아요, 사랑, 웃음, 놀람, 슬픔, 분노를 반영합니다.' /></TableHeaderColumn>
    <TableHeaderColumn dataAlign="center" width='150' dataField="viralindex" dataSort={true} ><Popup trigger={<Button>VIRAL 지표</Button>} content='전체 게시물 중 (리엑션, 댓글, 공유 종합시) 상위 2% 게시물의 비율(%)입니다.' /></TableHeaderColumn>
    <TableHeaderColumn dataAlign="center" width='150' dataField="totalscore" dataSort={true} ><Popup trigger={<Button>KCTICS SCORE</Button>} content='상위 페이지들의 팔로워, 평균 REACTION, VIRAL 지표를 종합한 후 1-100으로 스케일링 한 점수입니다.' /></TableHeaderColumn>
  </BootstrapTable>
    </div>
  );
}
const ContentTwo = () => {
  return(
    <div>
    <p> 2017년 1월 1일 ~ 9월 31일 KCENT 소속 인스타그램 인플루언서 </p>
  <BootstrapTable version='4' data={facebookpage} selectRow={selectRowProp} pagination hover search searchPlaceholder='인스타그램 인플루언서를 검색해보세요.'>
    <TableHeaderColumn dataAlign="center" width='70' dataField="rank" dataSort={true} isKey={true}>순위</TableHeaderColumn>
    <TableHeaderColumn dataAlign="center" width='60' dataField="image" dataFormat={imageFormatter} >섬네일</TableHeaderColumn>
    <TableHeaderColumn dataAlign="center" width='150' dataField="pagename" dataSort={true}>인플루언서 이름</TableHeaderColumn>
    <TableHeaderColumn dataAlign="center" width='150' dataField="follower" dataSort={true}>팔로워</TableHeaderColumn>
    <TableHeaderColumn dataAlign="center" width='150' dataField="contentsform" dataSort={true}># 해쉬태그</TableHeaderColumn>
    <TableHeaderColumn dataAlign="center" width='150' dataField="engagement" dataSort={true} ><Popup trigger={<Button>RED FLAG</Button>} content='좋아요, 팔로잉을 한 유저들 중 (추정)가짜계정 비율을 1-5스케일로 변환합니다.' /></TableHeaderColumn>
    <TableHeaderColumn dataAlign="center" width='150' dataField="engagement" dataSort={true} ><Popup trigger={<Button>참여도</Button>} content='팔로워 대비 평균 좋아요와 댓글을 계산합니다.' /></TableHeaderColumn>
    <TableHeaderColumn dataAlign="center" width='150' dataField="viralindex" dataSort={true} ><Popup trigger={<Button>VIRAL 지표</Button>} content='전체 게시물 중 (좋아요, 댓글) 상위 2% 게시물의 비율(%)입니다.' /></TableHeaderColumn>
    <TableHeaderColumn dataAlign="center" width='150' dataField="totalscore" dataSort={true} ><Popup trigger={<Button>KCTICS SCORE</Button>} content='상위 페이지들의 RED FLAG, 팔로워, 참여도, VIRAL 지표를 종합한 후 1-100으로 스케일링 한 점수입니다.' /></TableHeaderColumn>
  </BootstrapTable>
    </div>
  );
}
const ContentThree = () => {
  return(
    <div>
    <p> 2017년 1월 1일 ~ 9월 31일 한국 유튜브 인플루언서 채널</p>
  <BootstrapTable version='4' data={facebookpage} selectRow={selectRowProp} pagination hover search searchPlaceholder='인스타그램 인플루언서를 검색해보세요.'>
    <TableHeaderColumn dataAlign="center" width='70' dataField="rank" dataSort={true} isKey={true}>순위</TableHeaderColumn>
    <TableHeaderColumn dataAlign="center" width='60' dataField="image" dataFormat={imageFormatter} >섬네일</TableHeaderColumn>
    <TableHeaderColumn dataAlign="center" width='150' dataField="pagename" dataSort={true}>채널 이름</TableHeaderColumn>
    <TableHeaderColumn dataAlign="center" width='150' dataField="follower" dataSort={true}>구독자 수</TableHeaderColumn>
    <TableHeaderColumn dataAlign="center" width='150' dataField="contentsform" dataSort={true}>메인 주제</TableHeaderColumn>
    <TableHeaderColumn dataAlign="center" width='150' dataField="engagement" dataSort={true} ><Popup trigger={<Button>평균 재생 횟수</Button>} content='좋아요, 팔로잉을 한 유저들 중 (추정)가짜계정 비율을 1-5스케일로 변환합니다.' /></TableHeaderColumn>
    <TableHeaderColumn dataAlign="center" width='150' dataField="engagement" dataSort={true} ><Popup trigger={<Button>참여도</Button>} content='팔로워 대비 평균 좋아요와 댓글을 계산합니다.' /></TableHeaderColumn>
    <TableHeaderColumn dataAlign="center" width='150' dataField="viralindex" dataSort={true} ><Popup trigger={<Button>VIRAL 지표</Button>} content='전체 게시물 중 (좋아요, 댓글) 상위 2% 게시물의 비율(%)입니다.' /></TableHeaderColumn>
    <TableHeaderColumn dataAlign="center" width='150' dataField="totalscore" dataSort={true} ><Popup trigger={<Button>KCTICS SCORE</Button>} content='상위 페이지들의 RED FLAG, 팔로워, 참여도, VIRAL 지표를 종합한 후 1-100으로 스케일링 한 점수입니다.' /></TableHeaderColumn>
  </BootstrapTable>
    </div>
  );
}


const selectRowProp = {
  mode: 'checkbox',
  bgColor: 'skyblue', // you should give a bgcolor, otherwise, you can't regonize which row has been selected
  hideSelectColumn: true,  // enable hide selection column.
  clickToSelect: true,  // you should enable clickToSelect, otherwise, you can't select column.
  columnWidth: '50px'
};

// products will be presented by react-bootstrap-table
var facebookpage = [
 {
   "rank": 1,
   "image": "/img/fbpage/greedeat.png",
   "pagename": "오늘 뭐 먹지?",
   "follower": "4,384,444",
   "contentsform": "VIDEO / PHOTO",
   "engagement": 18332,
   "viralindex": 99.6,
   "totalscore": 96
 },
 {
   "rank": 2,
   "image": "/img/fbpage/cgv.png",
   "pagename": "CGV",
   "follower": "2,427,087",
   "contentsform": "VIDEO / PHOTO",
   "engagement": 11723,
   "viralindex": 86.3,
   "totalscore": 91
 },
 {
   "rank": 3,
   "image": "/img/fbpage/himart.png",
   "pagename": "하이마트",
   "follower": "7,384,802",
   "contentsform": "PHOTO / VIDEO",
   "engagement": 5218,
   "viralindex": 77.5,
   "totalscore": 90
 },
 {
   "rank": 4,
   "image": "/img/fbpage/gmarket.jpg",
   "pagename": "G마켓",
   "follower": "2,610,228",
   "contentsform": "PHOTO / VIDEO",
   "engagement": 6551,
   "viralindex": 87.2,
   "totalscore": 87
 },
 {
   "rank": 5,
   "image": "/img/fbpage/1thek.png",
   "pagename": "원더케이",
   "follower": "2,240,373",
   "contentsform": "VIDEO",
   "engagement": 4246,
   "viralindex": 75.6,
   "totalscore": 83
 },
 {
   "rank": 6,
   "image": "/img/fbpage/lotteworld.png",
   "pagename": "롯데월드",
   "follower": "4,487,795 ",
   "contentsform": "PHOTO / VIDEO",
   "engagement": 2979,
   "viralindex": 54.4,
   "totalscore": 83
 },
 {
   "rank": 7,
   "image": "/img/fbpage/snl.png",
   "pagename": "SNL코리아",
   "follower": "2,616,511",
   "contentsform": "VIDEO / PHOTO",
   "engagement": 3590,
   "viralindex": 52,
   "totalscore": 81
 },
 {
   "rank": 8,
   "image": "/img/fbpage/11street.png",
   "pagename": "11번가",
   "follower": "1,607,241",
   "contentsform": "VIDEO / PHOTO",
   "engagement": 3543,
   "viralindex": 56,
   "totalscore": 79
 },
 {
   "rank": 9,
   "image": "/img/fbpage/lotteria.png",
   "pagename": "롯데리아",
   "follower": "1,440,863",
   "contentsform": "PHOTO / VIDEO",
   "engagement": 3350,
   "viralindex": 54.5,
   "totalscore": 75
 },
 {
   "rank": 10,
   "image": "/img/fbpage/lotte.png",
   "pagename": "롯데",
   "follower": "1,593,568",
   "contentsform": "PHOTO / VIDEO",
   "engagement": 1869,
   "viralindex": 57.6,
   "totalscore": 63
 },
 {
   "rank": 11,
   "image": "/img/fbpage/tmon.png",
   "pagename": "티몬",
   "follower": "1,421,219",
   "contentsform": "PHOTO / VIDEO",
   "engagement": 2293,
   "viralindex": 50.2,
   "totalscore": 62
 },
 {
   "rank": 12,
   "image": "/img/fbpage/dripstorage.png",
   "pagename": "꿀팁 저장소",
   "follower": "813,492",
   "contentsform": "PHOTO / VIDEO",
   "engagement": 2293,
   "viralindex": 45,
   "totalscore": 53
 },
 {
   "rank": 13,
   "image": "/img/fbpage/kantukan.jpg",
   "pagename": "칸투칸",
   "follower": "3,724,140",
   "contentsform": "PHOTO / LINK",
   "engagement": 977,
   "viralindex": 11.2,
   "totalscore": 52
 },
 {
   "rank": 14,
   "image": "/img/fbpage/kkdkorea.png",
   "pagename": "크리스피크림 도넛 코리아",
   "follower": "955,268",
   "contentsform": "PHOTO / VIDEO / STATUS",
   "engagement": 1196,
   "viralindex": 38.9,
   "totalscore": 43
 },
 {
   "rank": 15,
   "image": "/img/fbpage/mercedesbenzkorea.jpg",
   "pagename": "벤츠 코리아",
   "follower": "627,959",
   "contentsform": "PHOTO / VIDEO",
   "engagement": 1336,
   "viralindex": 38.7,
   "totalscore": 42
 },
 {
   "rank": 16,
   "image": "/img/fbpage/samsungnewsroom.png",
   "pagename": "삼성 뉴스룸",
   "follower": "3,328,393 ",
   "contentsform": "PHOTO / VIDEO / LINK",
   "engagement": 432,
   "viralindex": 7.3,
   "totalscore": 41
 },
 {
   "rank": 17,
   "image": "/img/fbpage/ytncokr.png",
   "pagename": "YTN 뉴스",
   "follower": "616,819",
   "contentsform": "VIDEO / LINK",
   "engagement": 1318,
   "viralindex": 24.2,
   "totalscore": 37
 },
 {
   "rank": 18,
   "image": "/img/fbpage/lotteshopping.png",
   "pagename": "롯데 쇼핑",
   "follower": "1,894,815",
   "contentsform": "VIDEO / PHOTO / LINK",
   "engagement": 408,
   "viralindex": 6,
   "totalscore": 34
 },
 {
   "rank": 19,
   "image": "/img/fbpage/mbwkorea.jpg",
   "pagename": "BMW코리아",
   "follower": "408,481",
   "contentsform": "PHOTO / VIDEO",
   "engagement": 864,
   "viralindex": 22.3,
   "totalscore": 32
 },
 {
   "rank": 20,
   "image": "/img/fbpage/thelgstory.png",
   "pagename": "LG",
   "follower": "430,387",
   "contentsform": "VIDEO / LINK / PHOTO",
   "engagement": 656,
   "viralindex": 14.3,
   "totalscore": 28
 },
 {
   "rank": 21,
   "image": "/img/fbpage/natuurpop.png",
   "pagename": "나뚜르 팝",
   "follower": "690,373",
   "contentsform": "VIDEO / PHOTO",
   "engagement": 527,
   "viralindex": 10.7,
   "totalscore": 28
 },
 {
   "rank": 22,
   "image": "/img/fbpage/samsungfashion.png",
   "pagename": "삼성 패션",
   "follower": "459,297 ",
   "contentsform": "STATUS / PHOTO",
   "engagement": 214,
   "viralindex": 2.6,
   "totalscore": 22
 }
];

  function imageFormatter(cell, row){
      return (<img alt="facebook page icon" style={{width:50}} src={cell}/>)
    }

class Ranking extends Component {
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
    <div className="ranking-table">
        <Button active={this.state.oneactive}
        className="inquiries-category focus"
        onClick={this.changeContentOne.bind(this)} color='facebook'>
          <Icon name='facebook' /> Facebook
        </Button>
        <Button active={this.state.twoactive}
        className="inquiries-category"
        onClick={this.changeContentTwo.bind(this)} color='instagram'>
          <Icon name='instagram' /> Instagram
        </Button>
        <Button active={this.state.threeactive}
        className="inquiries-category"
        onClick={this.changeContentThree.bind(this)} color='youtube'>
          <Icon name='youtube' /> YouTube
        </Button>
        <Segment>
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
    </div>

  );
}
}

export default Ranking;
