import React, { Component } from "react";
import AOS from "aos";
import "../../../../node_modules/aos/dist/aos.css";
import {
  Container,
  Col,
  Row
} from "reactstrap";
import MainIndustries from "../../../components/SharedElements/MainIndustries"
import Trial2 from "../../../components/SharedElements/Trial2"
import CommonOpportunities from "../../../components/SharedElements/CommonOpportunities"
import RemoteExpertBenefits from "../../../components/SharedElements/RemoteExpertBenefits"
import img from "../../../assets/images/landscaping.jpg";
import "flatpickr/dist/themes/material_blue.css";
import i18next from 'i18next';
import CustomHelmet from "../../../components/Service/CustomHelmet";

import ReactGA from 'react-ga';
ReactGA.initialize('G-PSG8RPDW3G');
ReactGA.pageview(window.location.pathname + window.location.search);

class Index extends Component {
  constructor(props, context) {
    super(props, context);
    AOS.init();
    this.state ={
      activeTab: "1",
    }
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

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
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
        <CustomHelmet name="industriesCommon" />
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
                    {i18next.t('commonIndustries.main.title')}
                  </h2>
                </div>
              </Col>
            </Row>
          </Container>
          </section>
          <MainIndustries />
          <CommonOpportunities /> 
          <RemoteExpertBenefits />
          <Trial2 />
      </React.Fragment>
    );
  }
}

export default Index;
