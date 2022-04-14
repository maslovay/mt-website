import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import img from "../../assets/images/screenshot_route.png";
import SectionTitleLeft from "../../components/Shared/SectionTitleLeft";
import i18next from 'i18next';

class LocationTrackingRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        { title: i18next.t('locationtracking.routes.bullit1') },
        { title: i18next.t('locationtracking.routes.bullit2') },
        { title: i18next.t('locationtracking.routes.bullit3') }
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
                  title={i18next.t('locationtracking.routes.title')}
                  desc={i18next.t('locationtracking.routes.description')}
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

export default LocationTrackingRoutes;
