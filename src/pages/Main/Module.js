import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import i18next from 'i18next';
import img from "../../assets/images/hardware_module.png"

class Module extends Component {

  state = {
    features1: [
      { title: i18next.t('home.hardware.benefit1')},
      { title: i18next.t('home.hardware.benefit2')},
      { title: i18next.t('home.hardware.benefit3')},
      { title: i18next.t('home.hardware.benefit4')},
      { title: i18next.t('home.hardware.benefit5')},
      { title: i18next.t('home.hardware.benefit6')},
      { title: i18next.t('home.hardware.benefit7')}
    ]
  };

  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg="6" md="7" className="mt-5 mt-sm-0">
              <div className="section-title">
                <h4 className="title mb-4">{i18next.t('home.hardware.title')}</h4>
                <p className="text-muted"> {i18next.t('home.hardware.description')} </p>
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
              </div>
            </Col>
            <Col lg="6" md="5">
              <div className="position-relative">
                <div className="text-center text-md-left">
                  <img src={img} className="img-fluid shadow rounded" alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Module;
