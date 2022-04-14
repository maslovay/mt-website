import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";


import i18next from 'i18next';
import img2 from "../../assets/images/app/main_screen2.png";

class MainAppOneFeature extends Component {

  state = {
    features1: [
      { title: i18next.t('home.bullitMobileApp1')},
      { title: i18next.t('home.bullitMobileApp2')},
      { title: i18next.t('home.bullitMobileApp3')},
      { title: i18next.t('home.bullitMobileApp4')},
      { title: i18next.t('home.bullitMobileApp5')},
      { title: i18next.t('home.bullitMobileApp6')},
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
                <h4 className="title mb-4">{i18next.t('home.titleMobileApp')}</h4>
                <p className="text-muted"> {i18next.t('home.descriptionMobileApp')} </p>
                <ul
                  className="list-unstyled feature-list text-muted"
                  name="featurelines"
                >
                  {this.state.features1.map((feature, key) => (
                    <li key={key} className="mb-0">
                      <span className="text-primary h5 mr-2">
                        <i
                          // className="uil uil-check-circle align-middle"
                          className={
                            "uil uil-check-circle align-middle" + this.props.class
                          }
                        ></i>
                      </span>
                      {feature.title}
                      
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Link to="/person" className="mt-3 text-primary">
                      {i18next.t('common.details')} <i className="mdi mdi-chevron-right"></i>
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

export default MainAppOneFeature;