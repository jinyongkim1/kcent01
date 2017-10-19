import _ from 'lodash'
import React, { Component } from 'react'
import { Search, Grid, Header } from 'semantic-ui-react'

const source = [
	{
		"title": "조서연",
		"나이": "30",
		"성별": "여",
		"description": "연합뉴스 아나운서",
		"image": "unaversea",
		"price": "23.1K",
		"컨텐츠": "뷰티 / 패션"
	},
	{
		"title": "이지나",
		"나이": "-",
		"성별": "여",
		"description": "레이싱모델",
		"image": "leejina.angel",
		"price": "249K",
		"컨텐츠": "뷰티 / 패션"
	},
	{
		"title": "김지나",
		"나이": "-",
		"성별": "여",
		"description": "레이싱모델",
		"image": "kimgnaa",
		"price": "94K",
		"컨텐츠": "뷰티 / 패션"
	},
	{
		"title": "제바",
		"나이": "-",
		"성별": "여",
		"description": "레이싱모델",
		"image": "hellojeba",
		"price": "34K",
		"컨텐츠": "뷰티 / 패션"
	},
	{
		"title": "이봄이",
		"나이": "-",
		"성별": "여",
		"description": "레이싱모델",
		"image": "lee_bomyi",
		"price": "48K",
		"컨텐츠": "뷰티 / 패션"
	},
	{
		"title": "강이나",
		"나이": "-",
		"성별": "여",
		"description": "레이싱모델",
		"image": "inaheeme",
		"price": "55K",
		"컨텐츠": "뷰티 / 패션"
	},
	{
		"title": "차혜림",
		"나이": "-",
		"성별": "여",
		"description": "레이싱모델",
		"image": "hyerimcha",
		"price": "17K",
		"컨텐츠": "뷰티 / 패션"
	},
	{
		"title": "정하늘",
		"나이": "25",
		"성별": "여",
		"description": "피팅모델",
		"image": "BJ",
		"price": "sekaowa_sky",
		"컨텐츠": "3119"
	},
	{
		"title": "스카일라",
		"나이": "-",
		"성별": "여",
		"description": "모델/TFC걸/BJ",
		"image": "skylacho",
		"price": "21k",
		"컨텐츠": "뷰티 / 패션 / 운동"
	},
	{
		"title": "조소영",
		"나이": "26",
		"성별": "여",
		"description": "모델/BJ",
		"image": "sj_jjjjj",
		"price": "2426",
		"컨텐츠": "뷰티"
	},
	{
		"title": "박에스더",
		"나이": "26",
		"성별": "여",
		"description": "모델 / 유튜버",
		"image": "esther__park",
		"price": "27K",
		"컨텐츠": "뷰티 / 패션"
	},
	{
		"title": "이송희",
		"나이": "29",
		"성별": "여",
		"description": "댄서",
		"image": "l__ssong",
		"price": "519",
		"컨텐츠": " 댄스"
	},
	{
		"title": "윤지연",
		"나이": "20",
		"성별": "여",
		"description": "대학생",
		"image": "1_0.8",
		"price": "66K",
		"컨텐츠": "뷰티 "
	},
	{
		"title": "한재희",
		"나이": "21",
		"성별": "여",
		"description": "대학생",
		"image": "hee.ec",
		"price": "1544",
		"컨텐츠": "뷰티 / 패션"
	},
	{
		"title": "이수빈(열매)",
		"나이": "28",
		"성별": "여",
		"description": "모델 / BJ",
		"image": "baby_bin47",
		"price": "522K",
		"컨텐츠": "뷰티 / 패션"
	},
	{
		"title": "박지빈",
		"나이": "21",
		"성별": "여",
		"description": "피트니스모델",
		"image": "jjxjjxyo",
		"price": "2134",
		"컨텐츠": "운동"
	},
	{
		"title": "박진영",
		"나이": "26",
		"성별": "여",
		"description": "타투이스트",
		"image": "92jinyoung",
		"price": "12.4K",
		"컨텐츠": "뷰티 / 운동"
	},
	{
		"title": "이미미",
		"나이": "24",
		"성별": "여",
		"description": "유치원교사/BJ",
		"image": "mimvely1",
		"price": "29.3K",
		"컨텐츠": "뷰티"
	},
	{
		"title": "황지현",
		"나이": "-",
		"성별": "여",
		"description": "댄서",
		"image": "jihyun_0411_",
		"price": "6360",
		"컨텐츠": "뷰티"
	},
	{
		"title": "차유",
		"나이": "-",
		"성별": "여",
		"description": "가수",
		"image": "chayou_0531",
		"price": "11K",
		"컨텐츠": "뷰티 / 패션"
	},
	{
		"title": "빈",
		"나이": "-",
		"성별": "여",
		"description": "가수",
		"image": "binny_latte",
		"price": "5837",
		"컨텐츠": "뷰티 / 패션"
	},
	{
		"title": "건예",
		"나이": "20",
		"성별": "여",
		"description": "가수",
		"image": "1000geon_ye",
		"price": "1358",
		"컨텐츠": "뷰티 / 패션"
	},
	{
		"title": "스카일라",
		"나이": "-",
		"성별": "여",
		"description": "모델",
		"image": "skylacho",
		"price": "18K",
		"컨텐츠": "운동 / 뷰티"
	},
	{
		"title": "서효원",
		"나이": "-",
		"성별": "여",
		"description": "탁구선수",
		"image": "seohyowon_",
		"price": "21K",
		"컨텐츠": "운동"
	},
	{
		"title": "이대훈",
		"나이": "-",
		"성별": "남",
		"description": "태권도선수",
		"image": "lee.dae.hoon",
		"price": "38K",
		"컨텐츠": "운동"
	},
	{
		"title": "정영식",
		"나이": "-",
		"성별": "남",
		"description": "탁구선수",
		"image": "jungyoungsik",
		"price": "8500",
		"컨텐츠": "운동"
	},
	{
		"title": "우창범",
		"나이": "25",
		"성별": "남",
		"description": "가수",
		"image": "c_bum1007",
		"price": "42K",
		"컨텐츠": "뷰티 / 패션"
	},
	{
		"title": "홍정빈",
		"나이": "27",
		"성별": "남",
		"description": "직장인",
		"image": "2jb_jb",
		"price": "92.4K",
		"컨텐츠": "뷰티 / 패션"
	},
	{
		"title": "이영석(석2)",
		"나이": "24",
		"성별": "남",
		"description": "댄서/크리에이터",
		"image": "seokiiiii_",
		"price": "205",
		"컨텐츠": " 개그 / 패션(힙합)"
	},
	{
		"title": "이춘성",
		"나이": "-",
		"성별": "남",
		"description": "학생",
		"image": "lee_chxn",
		"price": "6344",
		"컨텐츠": "패션"
	},
	{
		"title": "윤진용",
		"나이": "27",
		"성별": "남",
		"description": "모델",
		"image": "jinyong.yoon.12",
		"price": "2623",
		"컨텐츠": "패션"
	},
	{
		"title": "이성현",
		"나이": "25",
		"성별": "남",
		"description": "BJ",
		"image": "olosoho",
		"price": "2258",
		"컨텐츠": "음악"
	},
	{
		"title": "김태훈",
		"나이": "21",
		"성별": "남",
		"description": "학생",
		"image": "hon.ec",
		"price": "57.1K",
		"컨텐츠": "뷰티 / 패션"
	},
	{
		"title": "서민준",
		"나이": "-",
		"성별": "남",
		"description": "모델",
		"image": "seo_bro",
		"price": "11.5K",
		"컨텐츠": "뷰티 / 패션"
	},
	{
		"title": "이요한",
		"나이": "27",
		"성별": "남",
		"description": "BJ",
		"image": "s_jhon3",
		"price": "143K",
		"컨텐츠": "뷰티 / 패션"
	},
	{
		"title": "권선명(권파랑)",
		"나이": "27",
		"성별": "남",
		"description": "모델",
		"image": "model7777",
		"price": "12K",
		"컨텐츠": "뷰티 / 패션"
	},
	{
		"title": "이기용",
		"나이": "6",
		"성별": "남",
		"description": "키즈인플루언서",
		"image": "yong_mom",
		"price": "195K",
		"컨텐츠": "뷰티 / 패션 / 육아"
	}
]

export default class ModelSearch extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 500)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Grid container stretched>
				<Grid.Column width={4}>
				<h3 className="gdd">KCTICS 인플루언서 검색 (Beta):</h3>
				</Grid.Column>
        <Grid.Column textAlign="left" width={8}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={results}
            value={value}
            fluid
            input={{icon: 'search', iconPosition: 'left'}}
            {...this.props}
          />
        </Grid.Column>
      </Grid>
    )
  }
}

/*
<Grid.Column width={8}>
  <Header>State</Header>
  <pre>{JSON.stringify(this.state, null, 2)}</pre>
  <Header>Options</Header>
  <pre>{JSON.stringify(source, null, 2)}</pre>
</Grid.Column>
 */
