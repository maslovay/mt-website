import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import i18next from 'i18next';

import homeShape from "../../../assets/images/saas/home-shape.png";
import homeImg from "../../../assets/images/saas/home.png";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-home d-flex align-items-center"
          style={{
            background: `url(${homeShape})`,
            backgroundPosition: "center center",
            height: "auto",
          }}
          id="home"
        >
          <Container>
            <Row className="justify-content-center">
              <Col lg="12" className="text-center mt-0 mt-md-5 pt-0 pt-md-5">
                <div className="title-heading margin-top-100">
                  <h1 className="heading mb-3">
                    {i18next.t('onlineTimesheet.main.title')}
                  </h1>
                  <p className="para-desc mx-auto text-muted">
                    {i18next.t('onlineTimesheet.main.description')}
                  </p>
                  {/* <div className="mt-4 pt-2">
                    <a href="https://portal.inpres.com/register" className="btn btn-primary">
                      {i18next.t('onlineTimesheet.main.button')} <i className="mdi mdi-chevron-right"></i>
                    </a>
                  </div> */}
                </div>
                <div className="home-dashboard">
                  <img src={homeImg} alt="" className="img-fluid" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
