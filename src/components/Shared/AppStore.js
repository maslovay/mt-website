import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import i18next from 'i18next';

class AppStore extends Component {
  render() {
    return (
      <React.Fragment>
         <Container className="mt-100 mt-60">
          <Row className="justify-content-center">
            <Col xs={12}>
              <div className="section-title mb-4 pb-2 text-center">
                <p className="text-muted para-desc mb-0 mx-auto">
                   {i18next.t('app.description')}
                </p>
                <div className="my-12">
                    <a href="https://apps.apple.com/ru/app/inpres/id1481627273" className="btn btn-lg btn-dark mt-2 mr-2">
                      <i className="mdi mdi-apple"></i><span>App Store</span>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.inpres.inpres" className="btn btn-lg btn-dark mt-2 ml-1">
                      <i className="mdi mdi-google-play"></i><span>Google Play</span>
                    </a>
                  </div>
              </div>
            </Col>
          </Row>
          </Container>
      </React.Fragment>
    );
  }
}

export default AppStore;
