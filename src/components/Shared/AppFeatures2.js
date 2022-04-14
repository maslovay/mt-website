import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import SectionTitle from "./SectionTitle";
import FeatureBox from "./feature-box";
import featureImg from "../../assets/images/app/classic02.png";
import i18next from 'i18next';

class AppFeatures2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        {
          icon: "navigation",
          title: i18next.t('app_features.feature1'),
          desc: i18next.t('app_features.feature1description')
        },
        {
          icon: "dollar-sign",
          title: i18next.t('app_features.feature2'),
          desc: i18next.t('app_features.feature2description')     
        },
        {
          icon: "eye",
          title: i18next.t('app_features.feature3'),
          desc: i18next.t('app_features.feature3description')
        },
        {
          icon: "map-pin",
          title: i18next.t('app_features.feature4'),
          desc: i18next.t('app_features.feature4description')
       },
        {
          icon: "smartphone",
          title: i18next.t('app_features.feature5'),
          desc: i18next.t('app_features.feature5description')
        },
        {
          icon: "credit-card",
          title: i18next.t('app_features.feature6'),
          desc: i18next.t('app_features.feature6description')
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            <SectionTitle
              title={i18next.t('app_features.title')}
              desc={i18next.t('app_features.subtitle')}
            />

            <Row className="justify-content-center align-items-center">
              <Col lg="8" md="8">
                <Row>
                  <FeatureBox features={this.state.features} />
                </Row>
              </Col>
              <Col
                lg="4"
                md="4"
                xs="12"
                className="mt-4 pt-2 text-center text-md-right"
              >
                <img src={featureImg} className="img-fluid" alt="" />
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default AppFeatures2;
