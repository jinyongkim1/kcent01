import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import LastLanding from "./LastLanding";
import CustomerLanding from './CustomerLanding';
import { Button, Grid, Image, Dimmer, Card } from "semantic-ui-react";

export default props => {
  return (
    <div>
      <div className="wrapper-mapa">
      <section className="text-center landing-section-01">
        <h1 className="display-4"> Influencer Analytics & Management </h1>
        <p className="lead"> KCTICS는 마케팅이 필요한 기업과 인플루언서들을 연결하는 인플루언서 플랫폼입니다</p>
        <p>
          <Link to="/influencer">
            <Button className="landing-mainbutton" primary>
              더 알아보기
            </Button>
          </Link>
        </p>
      </section>
      </div>
      <section>
        <Grid>
            <Grid.Column width={8}>
              <div className="main-container-title-one">
                <i className="fa fa-list-ol" aria-hidden="true" />
                <br />
                <br />
                <b>인플루언서 랭킹</b>
              </div>

              <div className="main-container-title-two">
                <p className="common-BodyText">
                  SNS도달률, 관계 밀접도, 안정성 및 퀄리티, 네트워크 효과를 고려해 가장 <b>영향력 있는 인플루언서</b>를
                  한 눈에 볼 수 있습니다. <Link to="/beauty">뷰티</Link>,{" "}
                  <Link to="/game">게임</Link>, <Link to="/enter">종합엔터</Link> 분야의
                  인플루언서를 만나세요.
                </p>
                <br />
                <Link to="/sns-ranking" className="link-to-url">
                  바로가기 &nbsp;
                  <i className="fa fa-arrow-right" aria-hidden="true" />
                </Link>
              </div>
            </Grid.Column>
            <Grid.Column width={8}>
              <div className="main-container-title-one">
                <i className="fa fa-handshake-o" aria-hidden="true" />
                <br />
                <br />
                <b>광고 캠페인</b>
              </div>
              <div className="main-container-title-two">
                <p className="common-BodyText">
                  예산에 맞는 가장 효율적인 광고를 진행하세요. 회사의 브랜드 이미지아 가장 잘 맞는 인플루언서를 추천해드립니다.{" "}
                  <Link to="/inquiries">광고문의</Link>를 하시거나,{" "}
                  <Link to="/login">로그인</Link>하여 더 정확한 추천을 받으세요.
                </p>
                <br />
                <Link to="/sns-ranking" className="link-to-url">
                  바로가기 &nbsp;
                  <i className="fa fa-arrow-right" aria-hidden="true" />
                </Link>
              </div>
            </Grid.Column>
        </Grid>
      </section>

      <CustomerLanding />

      <LastLanding />

      {/*
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
*/}

    </div>
  );
};
