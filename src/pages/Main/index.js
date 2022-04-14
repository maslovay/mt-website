import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import AOS from "aos";
import img from "../../assets/images/worker_banner.png";

import MainHowItWork from "../../components/SharedElements/MainHowItWork";
import MainIndustries from '../../components/SharedElements/MainIndustries'
import MainFeatures from '../../components/SharedElements/MainFeatures'
import Trial2 from '../../components/SharedElements/Trial2'

import CustomHelmet from "../../components/Service/CustomHelmet";
import i18next from 'i18next';
import ReactGA from 'react-ga';
ReactGA.initialize('G-PSG8RPDW3G');


class Main extends Component {
  constructor(props, context) {
    super(props, context);
    AOS.init();
  }

  componentDidMount() {
    AOS.refresh();
    document.getElementById("top-menu").classList.add("nav-light");
    document.body.classList = "";
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };
  
  render() {
    return (
      <React.Fragment>
        <CustomHelmet name="main" />
        <section
          className="bg-half-170 d-table w-100"
          style={{ background: `url("${img}") center center` }}

        >
          <div className="bg-overlay"></div>
          <Container>
            <Row className="align-items-center">
              <Col lg={7} md={6}>
                <div className="title-heading mt-4">
                  <h2 className="display-5 font-weight-bold text-white title-dark mb-3">
                    {i18next.t('home.main.title')}
                  </h2>
                  <p className="para-desc text-light">
                    {i18next.t('home.main.description')}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          </section>
          <br/><br/>
          <MainFeatures /> 
          <MainHowItWork />
          <MainIndustries />
          <Trial2 /> 
          <a href="/page-error"></a>
      </React.Fragment>
    );
  }
}

export default Main;
