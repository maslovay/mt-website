import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import i18next from 'i18next';
import img from "../../../assets/images/emotions_banner.png";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-half-170 d-table w-100"
          style={{ background: `url(${img}) center center` }}
          id="home"
        >
          <Container>
            <Row className="position-relative align-items-center pt-4">
              <Col lg={{ size: 7, offset: 5 }}>
                <div className="title-heading studio-home bg-white rounded shadow mt-5">
                  <h1 className="heading mb-3">
                    {i18next.t('clientService.main.title')}
                  </h1>
                  <p className="para-desc text-muted">
                    {i18next.t('clientService.main.description')}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Header;
