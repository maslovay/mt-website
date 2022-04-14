import React, { Component } from "react";
import {
  Container,
  Row
} from "reactstrap";
import i18next from 'i18next';

import SectionTitle from "../Shared/SectionTitle";
import ProcessBox from "../Shared/ProcessBox";


class MainHowItWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      processes: [
        {
          id: 1,
          title: i18next.t('home.howItWork.step1'),
          desc: i18next.t('home.howItWork.step1Description'),  
        },
        {
          id: 2,
          title: i18next.t('home.howItWork.step2'),
          desc: i18next.t('home.howItWork.step2Description'),  
        },
        {
          id: 3,
          title: i18next.t('home.howItWork.step3'),
          desc: i18next.t('home.howItWork.step3Description'),  
        },
      ],
      works: [
      ],
      isOpen: false,
    };
    this.openModal.bind(this);
  }

  openModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            <SectionTitle
              title={i18next.t('home.howItWork.title')}
            />

            <Row>
              <ProcessBox processes={this.state.processes} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default MainHowItWork;