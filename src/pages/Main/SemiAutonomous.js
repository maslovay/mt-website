// React Basic and Bootstrap
import React, { Component } from "react";
import { Container } from "reactstrap";

import i18next from 'i18next';
import SectionTitle from "./SectionTitle";
import Feature from "./Feature";

class SemiAutonomous extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        {
          id: 1,
          icon: 'uil uil-car-sideview h1 text-primary',
          title: i18next.t('home.semiautonomous.benefit1'),
          description: i18next.t('home.semiautonomous.benefit1description'),
        },
        {
          id: 2,
          icon: 'uil uil-location-arrow-alt h1 text-primary',
          title: i18next.t('home.semiautonomous.benefit2'),
          description: i18next.t('home.semiautonomous.benefit2description'),
        },
        {
          id: 3,
          icon: 'uil uil-sign-alt h1 text-primary',
          title: i18next.t('home.semiautonomous.benefit3'),
          description: i18next.t('home.semiautonomous.benefit3description'),
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
              title={i18next.t('home.semiautonomous.title')}
              desc={i18next.t('home.semiautonomous.description')}
            />
            <Feature featureArray={this.state.features} />
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default SemiAutonomous;
