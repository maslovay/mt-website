import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

import i18next from 'i18next';

import img1 from "../../assets/images/city_1.png";
import img2 from "../../assets/images/city_2.png";
import img3 from "../../assets/images/city_3.png";

export default class TimeTrackingHowItWork extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg={6} md={6}>
              <img
                src={img1}
                className="img-fluid shadow rounded-md"
                alt=""
              />
            </Col>

            <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title ml-lg-5">
                <h1 className="text-primary">
                  <i className="uil uil-user-plus"></i>
                </h1>
                <h4 className="title mb-4">{i18next.t('city.title1')}</h4>
                <p className="text-muted">
                  {i18next.t('city.description1')}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg={6} md={6} className="order-1 order-md-2">
              <img src={img2} className="img-fluid shadow rounded-md" alt="" />
            </Col>

            <Col
              lg={6}
              md={6}
              className="mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1"
            >
              <div className="section-title mr-lg-5">
                <h1 className="text-primary">
                  <i className="uil uil-thumbs-up"></i>
                </h1>
                <h4 className="title mb-4">
                  {i18next.t('city.title2')}
                </h4>
                <p className="text-muted">
                  {i18next.t('city.description2')}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg={6} md={6}>
              <img
                src={img3}
                className="img-fluid shadow rounded-md"
                alt=""
              />
            </Col>

            <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title ml-lg-5">
                <h1 className="text-primary">
                  <i className="uil uil-refresh"></i>
                </h1>
                <h4 className="title mb-4">{i18next.t('city.title3')}</h4>
                <p className="text-muted">
                  {i18next.t('city.description3')}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
