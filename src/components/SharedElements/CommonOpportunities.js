import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import i18next from 'i18next';
import SectionTitle from "../Shared/SectionTitle";

export default class CommonOpportunities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyfeatures: [
        {
          id: 1,
          icon: "uil uil-chart-line d-block rounded h3 mb-0",
          hoverIcon: "uil uil-chart-line text-primary full-img",
          title: i18next.t('commonComponents.givesYou.bullit1'),
          description: i18next.t('commonComponents.givesYou.bullit1description'),
        },
        {
          id: 2,
          icon: "uil uil-calendar-alt d-block rounded h3 mb-0",
          hoverIcon: "uil uil-calendar-alt text-primary full-img",
          title: i18next.t('commonComponents.givesYou.bullit2'),
          description: i18next.t('commonComponents.givesYou.bullit2description'),
        },
        {
          id: 3,
          icon: "uil uil-data-sharing d-block rounded h3 mb-0",
          hoverIcon: "uil uil-data-sharing text-primary full-img",
          title: i18next.t('commonComponents.givesYou.bullit3'),
          description: i18next.t('commonComponents.givesYou.bullit3description'),
        },
        {
          id: 4,
          icon: "uil uil-fast-mail d-block rounded h3 mb-0",
          hoverIcon: "uil uil-fast-mail text-primary full-img",
          title: i18next.t('commonComponents.givesYou.bullit4'),
          description: i18next.t('commonComponents.givesYou.bullit4description'),
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
              title={i18next.t('commonComponents.givesYou.title')}
              // desc={i18next.t('locationtracking.howItWork.description')}
            />
          <Row className=" align-items-center">
            {this.state.keyfeatures.map((keyfeatures, key) => (
              <Col lg={3} md={6} className="mt-4 pt-2" key={key}>
                <Card className="border-0 features feature-clean course-feature p-4 overflow-hidden shadow" style={{color: "grey"}}>
                  <div className="icons text-primary text-center">
                    <i className={keyfeatures.icon}></i>
                  </div>
                  <CardBody className="p-0 mt-4">
                    <Link to="#" className="title h5 text-dark">
                      {keyfeatures.title}
                    </Link>
                    <p className="text-muted mt-2">
                      {keyfeatures.description}
                  </p>
                    <i className={keyfeatures.hoverIcon}></i>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        </section>
      </React.Fragment>
    );
  }
}
