import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import i18next from 'i18next';

class EcoinTrial extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <div className="rounded bg-primary bg-gradient p-lg-5 p-4">
            <Row className="align-items-end">
              <Col md="8">
                <div className="section-title text-md-start text-center">
                  <h4 className="title mb-3 text-white title-dark">
                    {i18next.t('ecoin_trial.header')}
                  </h4>
                  <p className="text-white-50 mb-0">
                    {i18next.t('ecoin_trial.description')}
                  </p>
                </div>
              </Col>

              <Col md="4" className="mt-4 mt-sm-0">
                <div className="text-md-end text-center">
                  <Link to="/ecoin" className="btn btn-light">
                    {i18next.t('common.details')}
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default EcoinTrial;
