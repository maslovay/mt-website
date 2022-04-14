import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import img from "../../assets/images/screenshot_alerts.png";
import SectionTitleLeft from "../Shared/SectionTitleLeft";
import i18next from 'i18next';

class LocationTrackingAlerts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        { title: i18next.t('locationtracking.alerts.bullit1') },
        { title: i18next.t('locationtracking.alerts.bullit2') },
        { title: i18next.t('locationtracking.alerts.bullit3') },
        { title: i18next.t('locationtracking.alerts.bullit4') }
      ]
    };
  }
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg={6} md={6}>
              <img src={img} className="img-fluid shadow rounded" alt="" />
            </Col>
            <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title ms-lg-5">
                <SectionTitleLeft
                  title={i18next.t('locationtracking.alerts.title')}
                  desc={i18next.t('locationtracking.alerts.description')}
                  features={this.state.features}
                  class=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default LocationTrackingAlerts;
