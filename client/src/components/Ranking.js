import React from "react";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const selectRowProp = {
  mode: 'checkbox',
  bgColor: 'skyblue', // you should give a bgcolor, otherwise, you can't regonize which row has been selected
  hideSelectColumn: true,  // enable hide selection column.
  clickToSelect: true,  // you should enable clickToSelect, otherwise, you can't select column.
  columnWidth: '50px'
};

// products will be presented by react-bootstrap-table
var products = [
 {
   "rank": 1,
   "image": "/img/fbpage/greedeat.png",
   "pagename": "오늘 뭐 먹지?",
   "follower": "4384444",
   "contentsform": "VIDEO / PHOTO",
   "engagement": 18332,
   "viralindex": 99.6,
   "totalscore": 96
 },
 {
   "rank": 2,
   "image": "/img/fbpage/cgv.png",
   "pagename": "CGV",
   "follower": "2427087",
   "contentsform": "VIDEO / PHOTO",
   "engagement": 11723,
   "viralindex": 86.3,
   "totalscore": 91
 },
 {
   "rank": 3,
   "image": "/img/fbpage/himart.png",
   "pagename": "하이마트",
   "follower": "7384802",
   "contentsform": "PHOTO / VIDEO",
   "engagement": 5218,
   "viralindex": 77.5,
   "totalscore": 90
 },
 {
   "rank": 4,
   "image": "/img/fbpage/gmarket.jpg",
   "pagename": "G마켓",
   "follower": "2610228",
   "contentsform": "PHOTO / VIDEO",
   "engagement": 6551,
   "viralindex": 87.2,
   "totalscore": 87
 },
 {
   "rank": 5,
   "image": "/img/fbpage/1thek.png",
   "pagename": "원더케이",
   "follower": "2240373",
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
   "follower": "2616511",
   "contentsform": "VIDEO / PHOTO",
   "engagement": 3590,
   "viralindex": 52,
   "totalscore": 81
 },
 {
   "rank": 8,
   "image": "/img/fbpage/11street.png",
   "pagename": "11번가",
   "follower": "1607241",
   "contentsform": "VIDEO / PHOTO",
   "engagement": 3543,
   "viralindex": 56,
   "totalscore": 79
 },
 {
   "rank": 9,
   "image": "/img/fbpage/lotteria.png",
   "pagename": "롯데리아",
   "follower": "1440863",
   "contentsform": "PHOTO / VIDEO",
   "engagement": 3350,
   "viralindex": 54.5,
   "totalscore": 75
 },
 {
   "rank": 10,
   "image": "/img/fbpage/lotte.png",
   "pagename": "롯데",
   "follower": "1593568",
   "contentsform": "PHOTO / VIDEO",
   "engagement": 1869,
   "viralindex": 57.6,
   "totalscore": 63
 },
 {
   "rank": 11,
   "image": "/img/fbpage/tmon.png",
   "pagename": "티몬",
   "follower": "1421219",
   "contentsform": "PHOTO / VIDEO",
   "engagement": 2293,
   "viralindex": 50.2,
   "totalscore": 62
 },
 {
   "rank": 12,
   "image": "/img/fbpage/dripstorage.png",
   "pagename": "꿀팁 저장소",
   "follower": "813492",
   "contentsform": "PHOTO / VIDEO",
   "engagement": 2293,
   "viralindex": 45,
   "totalscore": 53
 },
 {
   "rank": 13,
   "image": "/img/fbpage/kantukan.jpg",
   "pagename": "칸투칸",
   "follower": "3724140",
   "contentsform": "PHOTO / LINK",
   "engagement": 977,
   "viralindex": 11.2,
   "totalscore": 52
 },
 {
   "rank": 14,
   "image": "/img/fbpage/kkdkorea.png",
   "pagename": "크리스피크림 도넛 코리아",
   "follower": "955268",
   "contentsform": "PHOTO / VIDEO / STATUS",
   "engagement": 1196,
   "viralindex": 38.9,
   "totalscore": 43
 },
 {
   "rank": 15,
   "image": "/img/fbpage/mercedesbenzkorea.jpg",
   "pagename": "벤츠 코리아",
   "follower": "627959",
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
   "follower": "616819",
   "contentsform": "VIDEO / LINK",
   "engagement": 1318,
   "viralindex": 24.2,
   "totalscore": 37
 },
 {
   "rank": 18,
   "image": "/img/fbpage/lotteshopping.png",
   "pagename": "롯데 쇼핑",
   "follower": "1894815",
   "contentsform": "VIDEO / PHOTO / LINK",
   "engagement": 408,
   "viralindex": 6,
   "totalscore": 34
 },
 {
   "rank": 19,
   "image": "/img/fbpage/mbwkorea.jpg",
   "pagename": "BMW코리아",
   "follower": "408481",
   "contentsform": "PHOTO / VIDEO",
   "engagement": 864,
   "viralindex": 22.3,
   "totalscore": 32
 },
 {
   "rank": 20,
   "image": "/img/fbpage/thelgstory.png",
   "pagename": "LG",
   "follower": "430387",
   "contentsform": "VIDEO / LINK / PHOTO",
   "engagement": 656,
   "viralindex": 14.3,
   "totalscore": 28
 },
 {
   "rank": 21,
   "image": "/img/fbpage/natuurpop.png",
   "pagename": "나뚜르 팝",
   "follower": "690373",
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

const Ranking = () => {
  return (
    <div className="ranking-table">
      <BootstrapTable data={products} selectRow={selectRowProp} pagination hover search searchPlaceholder='찾는 업체를 검색해보세요.'>
        <TableHeaderColumn dataField="rank" dataSort={true} isKey={true}>순위</TableHeaderColumn>
        <TableHeaderColumn dataField="image" dataFormat={imageFormatter} >페이스북</TableHeaderColumn>
        <TableHeaderColumn dataField="pagename" dataSort={true}>페이지</TableHeaderColumn>
        <TableHeaderColumn dataField="follower" dataSort={true}>팔로워</TableHeaderColumn>
        <TableHeaderColumn dataField="contentsform" dataSort={true}>컨텐츠 형태</TableHeaderColumn>
        <TableHeaderColumn dataField="engagement" dataSort={true} >참여도</TableHeaderColumn>
        <TableHeaderColumn dataField="viralindex" dataSort={true} >VIRAL INDEX</TableHeaderColumn>
        <TableHeaderColumn dataField="totalscore" dataSort={true} >KCTICS SCORE</TableHeaderColumn>
      </BootstrapTable>
    </div>

  );
};

export default Ranking;
