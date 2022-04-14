import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
import i18next from 'i18next';

class Trial2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      successMsg: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ successMsg: true });
  }
  render() {
    return (
      <React.Fragment>
        <section className="section bg-primary bg-gradient">
          <div className="bg-overlay bg-overlay-white"></div>
          <Container className="position-relative">
            <Row>
              {/* <Col lg="5" md="6">
                <div className="app-subscribe text-center text-md-start">
                  <img src={imgbg} className="img-fluid" alt="" />
                </div>
              </Col> */}

              <Col lg="12" md="12" className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="section-title text-center text-md-start">
                  <h1 className="title text-white title-dark mb-2">
                    {i18next.t('trial.title')}
                  </h1>
                  <p className="text-light para-dark">
                    {i18next.t('trial.description')}
                  </p>
                  <Button
                        type="submit"
                        color="primary"
                        className="btn-pills"
                      >
                        {i18next.t('trial.button')}
                      </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Trial2;
