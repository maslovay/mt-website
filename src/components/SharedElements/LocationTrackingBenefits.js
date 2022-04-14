// React Basic and Bootstrap
import React, { Component } from "react";
import { Container } from "reactstrap";

import i18next from 'i18next';
import SectionTitle from "../Shared/SectionTitle";
import Feature from "../Shared/Feature";

class LocationTrackingBenefits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        {
          id: 1,
          icon: 'uil uil-clock-eight h1 text-primary',
          title: i18next.t('locationtracking.benefits.benefit1'),
          description: i18next.t('locationtracking.benefits.benefit1description'),
        },
        {
          id: 2,
          icon: 'uil uil-dollar-alt h1 text-primary',
          title: i18next.t('locationtracking.benefits.benefit2'),
          description: i18next.t('locationtracking.benefits.benefit2description'),
        },
        {
          id: 3,
          icon: 'uil uil-location-arrow h1 text-primary',
          title: i18next.t('locationtracking.benefits.benefit3'),
          description: i18next.t('locationtracking.benefits.benefit3description'),
        }
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            <SectionTitle
              title={i18next.t('locationtracking.benefits.title')}
              desc={i18next.t('locationtracking.benefits.description')}
            />
            <Feature featureArray={this.state.features} />
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default LocationTrackingBenefits;
