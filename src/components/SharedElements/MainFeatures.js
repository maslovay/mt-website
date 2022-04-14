import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import SectionTitle from "../Shared/SectionTitle";

import img1 from "../../assets/images/icon/user.svg";
import img2 from "../../assets/images/icon/sand-clock.svg";
import img3 from "../../assets/images/icon/location.svg";
import img4 from "../../assets/images/icon/calendar.svg";
import img5 from "../../assets/images/icon/chat.svg";
import img6 from "../../assets/images/icon/ticket2.svg";

import i18next from 'i18next';

class MainFeatures extends Component {
  state = {
    features: [
      {
        id: 1,
        img: img1,
        title: i18next.t('header.feature1'),
        desc: i18next.t('header.feature1description'),
        link: "/features/remote-expert"
      },
      {
        id: 2,
        img: img2,
        title: i18next.t('header.feature2'),
        desc: i18next.t('header.feature2description'),
        link: "/features/time-tracking"
      },
      {
        id: 3,
        img: img3,
        title: i18next.t('header.feature3'),
        desc: i18next.t('header.feature3description'),
        link: "/features/location-tracking"
      },
      {
        id: 4,
        img: img4,
        title: i18next.t('header.feature4'),
        desc: i18next.t('header.feature4description'),
        link: "/features/tags-tracking"
      },
      {
        id: 5,
        img: img5,
        title: i18next.t('header.feature5'),
        desc: i18next.t('header.feature5description'),
        link: "/features/online-timesheet"
      },
      {
        id: 6,
        img: img6,
        title: i18next.t('header.feature6'),
        desc: i18next.t('header.feature6description'),
        link: "/features/client-service-control"
      }
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
          <Row>
            {this.state.features.map((feature, key) => (
              <Col md="4" xs="12" key={key} className="mt-4 pt-2">
                <Card
                  className={"text-center rounded border-0"}
                >
                  <CardBody>
                    <div
                      className={ "p-3 bg-light rounded shadow d-inline-block"}
                    >
                      <img
                        src={feature.img}
                        className="avatar avatar-small"
                        alt=""
                      />
                    </div>
                    <div className="mt-4">
                      <h5>
                        <Link
                          to=""
                          className={"text-dark"}
                        >
                          {feature.title}
                        </Link>
                      </h5>
                      <p
                        className={"text-muted mt-3 mb-0"}
                      >
                        {feature.desc}
                      </p>
                      <div className="mt-4">
                        <Link to={feature.link} className="mt-3 text-primary">
                            {i18next.t('common.details')} <i className="mdi mdi-chevron-right"></i>
                        </Link>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default MainFeatures;
