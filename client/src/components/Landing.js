import React from "react";
import { Link } from "react-router-dom";
import {
  Code,
  CustomerQuote, CustomerQuotes,
  DropdownMenu, DropdownToggle,
  Footer, FooterAddress,
  Hero,
  HorizontalSplit,
  ImageList, ImageListItem,
  Navbar, NavItem,
  Page,
  PricingPlan, PricingTable,
  Section,
  SignupInline, SignupModal,
  Stripe,
  Team,
  TeamMember,
} from "neal-react";
import '../css/style.css';

const brandName = "KCTICS";
const brand = <span>{brandName}</span>;

const onSignup = ({ name: name, email: email, password: password }) => Stripe.StripeHandler.open({
  name: "Stripe Integration Included",
  description: "Like this? Donate $5 <3",
  panelLabel: "Donate {{amount}}",
  email: email,
  amount: 500,
});

const businessAddress = (
  <address>
    <strong>{brandName}</strong><br/>
    서울시 강남구 역삼동 832-20 제이플러스 빌딩 5층<br/>
    Seoul, Korea<br/>
    +82 (10) 9173-9157
  </address>
);

const pricingPlan1 = {
  name: "Personal",
  description: "Describe your plans with easy-to-use pricing tables. Each plan provides callbacks to handle visitor clicks.",
  price: "$99",
  features: {
    "Describe pricing plans as JSON": true,
    "Features can be active/inactive": true,
    "Works on mobile": true,
    "Custom callbacks": true,
    "Extra Feature 1": false,
    "Extra Feature 2": false,
  },
  onClick: onSignup,
};

const pricingPlan2 = Object.assign({}, pricingPlan1, {
  price: "$499",
  name: "Startup",
  features: Object.assign({}, pricingPlan1.features, {
    "Extra Feature 1": true,
  }),
});

const pricingPlan3 = Object.assign({}, pricingPlan2, {
  price: "$999",
  name: "Enterprise",
  features: Object.assign({}, pricingPlan2.features, {
    "Extra Feature 2": true,
  }),
});

export default (props) => {
  return (
    <Page>


      <Hero backgroundImage="img/hero-bg-01.jpg"
        className="text-center">
        <h1 className="display-4"> Influencer Analytics & Management </h1>
        <p className="lead"> KCTICS는 마케팅이 필요한 기업과 인플루언서들을 연결하는 인플루언서 플랫폼입니다</p>
        <p>
          <a href="/influencer"  className="btn btn-white">
            더 알아보기
          </a>
        </p>
      </Hero>

      <Section className="subhero">
        <ImageList centered>
          <ImageListItem src="img/press/snow.png" url="http://www.cnn.com"/>
          <ImageListItem src="img/press/bigo-live.jpg" url="http://forbes.com/"/>
          <ImageListItem src="img/press/up-live.jpg" url="http://www.theverge.com/"/>
          <ImageListItem src="img/press/sbs.png" url="http://techcrunch.com/"/>
          <ImageListItem src="img/press/cjem.png" url="http://techcrunch.com/"/>
        </ImageList>
      </Section>

      <Section>
        <div className="landing-01">
          <div className="card">
            <div className="card-image">
              <img src="img/people/boo.jpg"></img>
              <span className="card-title"><a href="/sns-ranking">인플루언서 랭킹</a></span>
            </div>
            <div className="card-content">
              <p> SNS도달률, 관계 밀접도, 안정성 및 퀄리티, 네트워크 효과를 고려해 가장 <b>영향력 있는 인플루언서</b>를 한 눈에 볼 수 있습니다.  </p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="img/people/boo.jpg"></img>
              <span className="card-title"><a href="/sns-ranking">광고 캠페인</a></span>
            </div>
            <div className="card-content">
              <p> 예산에 맞는 가장 효율적인 광고를 진행하세요. 회사의 브랜드 이미지아 가장 잘 맞는 인플루언서를 추천해드립니다. <a href="/inquiries">광고문의</a>를 하시거나, <a href="/login">로그인</a>하여 더 정확한 추천을 받으세요. </p>
            </div>
          </div>
        <div className="card">
          <div className="card-image">
            <img src="img/people/boo.jpg"></img>
            <span className="card-title"><a href="/sns-ranking">제휴 문의</a></span>
          </div>
          <div className="card-content">
            <p> 파트너쉽이나 컨텐츠 제작, 광고, 소속 인플루언서에 대해 궁금한 점이 있으면 언제든지 연락주세요. </p>
          </div>
        </div>
      </div>
      </Section>

      <Section heading="Inline and Modal Signup components" className="gray">
        <p>Use these components to capture user data, display a payment dialog and/or send them to your own backend for handling. Of course, you could also just use a Typeform to collect user emails. </p>
        <SignupInline onSubmit={onSignup}/>
        <SignupModal modalId="signup-modal" onSubmit={onSignup}/>
        <p>
          <a className="btn btn-primary btn-ghost" data-toggle="modal" data-target="#signup-modal">Show Signup modal</a>
        </p>
      </Section>

      <Section>
        <PricingTable>
          <PricingPlan {... pricingPlan1} />
          <PricingPlan {... pricingPlan2} />
          <PricingPlan {... pricingPlan3} />
        </PricingTable>
      </Section>

      <Section>
        <CustomerQuotes>
          <CustomerQuote name="Paul Graham" title="YC" imageUrl="img/people/paulgraham.jpg">
            <p>What I tell founders is not to sweat the business model too much at first. The most important task at first is to build something people want. If you don't do that, it won't matter how clever your business model is.</p>
          </CustomerQuote>
          <CustomerQuote name="Elon Musk" imageUrl="img/people/elonmusk.jpg">
            <p>I came to the conclusion that we should aspire to increase the scope and scale of human consciousness in order to better understand what questions to ask. Really, the only thing that makes sense is to strive for greater collective enlightenment.</p>
          </CustomerQuote>
          <CustomerQuote name="Reid Hoffman" title="Linkedin" imageUrl="img/people/reidhoffman.jpg">
            <p>If you are not embarrassed by the first version of your product, youve launched too late.</p>
          </CustomerQuote>
        </CustomerQuotes>
      </Section>


      <Footer brandName={brandName}

        address={businessAddress}>
      </Footer>
    </Page>
  );
};
