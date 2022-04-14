import React, { Component } from "react";
import { Container } from "reactstrap";
import i18next from 'i18next';
import SectionTitle from "./SectionTitle";
import Feature from "./Feature";

class Features extends Component {
  state = {
    features: [
      {
        id: 1,
        icon: 'uil uil-edit-alt h1 text-primary',
        title: i18next.t('home.features.feature1'),
        description: i18next.t('home.features.description1')
      },
      {
        id: 2,
        icon: 'uil uil-vector-square h1 text-primary',
        title: i18next.t('home.features.feature2'),
        description: i18next.t('home.features.description2')
      },
      {
        id: 3,
        icon: 'uil uil-file-search-alt h1 text-primary',
        title: i18next.t('home.features.feature3'),
        description: i18next.t('home.features.description3')     
      },
      {
        id: 4,
        icon: 'uil uil-airplay h1 text-primary',
        title: i18next.t('home.features.feature4'),
        description: i18next.t('home.features.description4') 
      },
      {
        id: 5,
        icon: 'uil uil-calendar-alt h1 text-primary',
        title: i18next.t('home.features.feature5'),
        description: i18next.t('home.features.description5')       
      },
      {
        id: 6,
        icon: 'uil uil-clock h1 text-primary',
        title: i18next.t('home.features.feature6'),
        description: i18next.t('home.features.description6')      
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          <SectionTitle
            title={i18next.t('home.features.title')}
            desc={i18next.t('home.features.description')}
          />
          <Feature featureArray={this.state.features} />
        </Container>
      </React.Fragment>
    );
  }
}

export default Features;
