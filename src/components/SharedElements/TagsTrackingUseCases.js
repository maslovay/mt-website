// React Basic and Bootstrap
import React, { Component } from "react";
import { Container } from "reactstrap";

import i18next from 'i18next';
import SectionTitle from "../Shared/SectionTitle";
import Feature from "../Shared/Feature";

class TagsTrackingUseCases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        {
          id: 1,
          icon: 'uil uil-tag-alt h1 text-primary',
          title: i18next.t('tagsTracking.useCases.benefit1'),
          description: i18next.t('tagsTracking.useCases.benefit1description'),
        },
        {
          id: 2,
          icon: 'uil uil-eye h1 text-primary',
          title: i18next.t('tagsTracking.useCases.benefit2'),
          description: i18next.t('tagsTracking.useCases.benefit2description'),
        },
        {
          id: 3,
          icon: 'uil uil-lock-alt h1 text-primary',
          title: i18next.t('tagsTracking.useCases.benefit3'),
          description: i18next.t('tagsTracking.useCases.benefit3description'),
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
              title={i18next.t('tagsTracking.useCases.title')}
            />
            <Feature featureArray={this.state.features} />
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default TagsTrackingUseCases;
