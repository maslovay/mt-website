import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";


import SectionTitleLeft from "../Shared/SectionTitleLeft";

import i18next from 'i18next';
import img2 from "../../assets/images/app/classic02.png";

class MainDescription extends Component {

  state = {
    features1: [
      { title: i18next.t('home.howItWork.bullit1') },
      { title: i18next.t('home.howItWork.bullit2') },
      { title: i18next.t('home.howItWork.bullit3') },
    ]
  };

  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg="6" md="5">
              <div className="app-feature-shape-left position-relative">
                <div className="text-center text-md-left">
                  <img src={img2} className="img-fluid" alt="" />
                </div>
              </div>
            </Col>

            <Col lg="6" md="7" className="mt-5 mt-sm-0">
              <div className="section-title">
                <SectionTitleLeft
                  desc={i18next.t('home.howItWork.description')}
                  features={this.state.features1}
                  class=""
                >
                  <h1 className="title mb-3">
                    {i18next.t('home.howItWork.title')}
                  </h1>
                </SectionTitleLeft>
                <div className="mt-4">
                  <Link to="" className="mt-3 text-primary">
                      {i18next.t('home.howItWork.details')} <i className="mdi mdi-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default MainDescription;
