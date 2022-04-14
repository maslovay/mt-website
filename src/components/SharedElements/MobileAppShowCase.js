
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import i18next from 'i18next';
import SectionTitleLeft from "../Shared/SectionTitleLeft";

import app1 from "../../assets/images/app.png";

class MobileAppShowCase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        { title: i18next.t('mobileapp.main.feature1') },
        { title: i18next.t('mobileapp.main.feature2') },
        { title: i18next.t('mobileapp.main.feature3') },
      ]
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    this.setState({ activeTab: tab });
  }

  render() {
    return (
      <React.Fragment>
        <section className="section pt-0 bg-light">
          <Container>
            <Row className="align-items-center">
              <Col lg="5" md="6" className="mt-4 pt-2">
                <img src={app1} className="img-fluid mx-auto d-block" alt="" />
              </Col>

              <Col lg={7} md={6} className="mt-4 pt-2">
                <div className="section-title ms-lg-5">
                  <SectionTitleLeft
                    desc={i18next.t('mobileapp.main.description')}
                    features={this.state.features}
                  >
                    <h4 className="title mb-4">
                      {i18next.t('mobileapp.main.title')}
                    </h4>
                  </SectionTitleLeft>
                  {/* <Link to="#" className="mt-3 h6 text-primary">
                    Find Out More <i className="uil uil-angle-right-b"></i>
                  </Link> */}
                  <div className="mt-4">
                    <Link to="#" className="btn btn-outline-primary mt-2">
                      <i className="mdi mdi-google-play"></i> Play Store
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default MobileAppShowCase;
