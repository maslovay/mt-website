// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import SectionTitle from "../Shared/SectionTitle";
import KeyFeatureBox from "../Shared/KeyFeatureBox1";
import i18next from 'i18next';

import drone from "../../assets/images/single/drone.gif";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

class SmartGlassesDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyfeatures: [
        { icon: "camera", title: i18next.t('smartGlasses.features.feature1') },
        { icon: "settings", title: i18next.t('smartGlasses.features.feature2') },
        { icon: "box", title: i18next.t('smartGlasses.features.feature3') },
        { icon: "video", title: i18next.t('smartGlasses.features.feature4')},
        { icon: "cpu", title: i18next.t('smartGlasses.features.feature5')},
        { icon: "battery", title: i18next.t('smartGlasses.features.feature6')}
      ],
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            <Row>
              <Col xs="12" className="text-center">
                <img src={drone} className="img-fluid" alt="" />
              </Col>
            </Row>
            <SectionTitle
              title={i18next.t('smartGlasses.features.title')}
              desc={i18next.t('smartGlasses.features.description')}
            />
            <Row>
              <KeyFeatureBox keyfeatures={this.state.keyfeatures} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default SmartGlassesDescription;
