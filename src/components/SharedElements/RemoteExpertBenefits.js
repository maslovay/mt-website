// React Basic and Bootstrap
import React, { Component } from "react";
import { Container } from "reactstrap";

import i18next from 'i18next';
import SectionTitle from "../../components/Shared/SectionTitle";
import Feature from "../../components/Shared/Feature";

class RemoteExpertBenefits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        {
          id: 1,
          icon: 'uil uil-user h1 text-primary',
          title: i18next.t('remoteExpert.benefits.benefit1'),
          description: i18next.t('remoteExpert.benefits.benefit1description'),
        },
        {
          id: 2,
          icon: 'uil uil-clock h1 text-primary',
          title: i18next.t('remoteExpert.benefits.benefit2'),
          description: i18next.t('remoteExpert.benefits.benefit2description'),
        },
        {
          id: 3,
          icon: 'uil uil-data-sharing h1 text-primary',
          title: i18next.t('remoteExpert.benefits.benefit3'),
          description: i18next.t('remoteExpert.benefits.benefit3description'),
        },
        {
          id: 4,
          icon: 'uil uil-shield-check h1 text-primary',
          title: i18next.t('remoteExpert.benefits.benefit4'),
          description: i18next.t('remoteExpert.benefits.benefit4description'),
        },
        {
          id: 5,
          icon: 'uil uil-cog h1 text-primary',
          title: i18next.t('remoteExpert.benefits.benefit5'),
          description: i18next.t('remoteExpert.benefits.benefit5description'),
        },
        {
          id: 6,
          icon: 'uil uil-cloud-computing h1 text-primary',
          title: i18next.t('remoteExpert.benefits.benefit6'),
          description: i18next.t('remoteExpert.benefits.benefit6description'),
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            <SectionTitle
              title={i18next.t('remoteExpert.benefits.title')}
              desc={i18next.t('remoteExpert.benefits.description')}
            />
            <Feature featureArray={this.state.features} />
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default RemoteExpertBenefits;
