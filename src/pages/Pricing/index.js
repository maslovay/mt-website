import React, { Component } from "react";
import AOS from "aos";
import "../../../node_modules/aos/dist/aos.css";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  Badge,
  CardBody,
  Card,
} from "reactstrap";
import classnames from "classnames";
import SectionTitle from "../../components/Shared/SectionTitle";
import SmartGlassesGallery from "../../components/SharedElements/SmartGlassesGallery"
import Contact from "../../components/SharedElements/Contact"
import "flatpickr/dist/themes/material_blue.css";

import CustomHelmet from "../../components/Service/CustomHelmet";
import ReactGA from 'react-ga';
import i18next from 'i18next';
ReactGA.initialize('G-PSG8RPDW3G');

class Pricing extends Component {
  constructor(props, context) {
    super(props, context);
    AOS.init();
    this.state = {
      test: "pricing",
      pricings: 
      [
        {
          id: 1,
          title: i18next.t('pricing.cloudProduct'),
          priceMonth: 15,
          durationMonth: i18next.t('pricing.month'),
          priceYear: 12.75,
          durationYear: i18next.t('pricing.year'),
          buttonText: i18next.t('pricing.button1'),
          btnLink: "https://portal.inpres.com/register",
          features: [
            { title: i18next.t('pricing.feature1')},
            { title: i18next.t('pricing.feature2')},
            { title: i18next.t('pricing.feature3')},
            { title: i18next.t('pricing.feature4')},
            { title: i18next.t('pricing.feature5')},
            { title: i18next.t('pricing.feature6')},
            { title: i18next.t('pricing.feature7')},
            { title: i18next.t('pricing.feature8')},
          ],
        },
        {
          id: 2,
          title: i18next.t('pricing.onPremisesProduct'),
          titleSpecialPrice: i18next.t('pricing.onPremisesCaption'),
          priceMonth: 0,
          durationMonth: i18next.t('pricing.month'),
          priceYear: 0,
          durationYear: i18next.t('pricing.year'),
          buttonText: i18next.t('pricing.button2'),
          btnLink: "mailto:info@inpres.com?subject=On-premises solution",
          features: [
            { title: i18next.t('pricing.feature1')},
            { title: i18next.t('pricing.feature2')},
            { title: i18next.t('pricing.feature3')},
            { title: i18next.t('pricing.feature4')},
            { title: i18next.t('pricing.feature5')},
            { title: i18next.t('pricing.feature6')},
            { title: i18next.t('pricing.feature7')},
            { title: i18next.t('pricing.feature9')},
          ],
        },
      ],
      activeTab: "1",
    }
  }

  componentDidMount() {
    AOS.refresh();
    document.getElementById("top-menu").classList.add("nav-dark");
    document.body.classList = "";
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };

  render() {
    return (
      <React.Fragment>
          <CustomHelmet name="pricing" />
          <Container className="mt-100 mt-60">
            <SectionTitle
              title={i18next.t('pricing.header')}
              desc={i18next.t('pricing.description')}
            />
            <Row className="align-items-center">
              <Col xs="12" className="mt-4 pt-2">
                <div className="text-center">
                  <Nav
                    pills
                    className="rounded-pill justify-content-center d-inline-block border py-1 px-2"
                  >
                    <NavItem className="d-inline-block">
                      <NavLink
                        className={classnames(
                          { active: this.state.activeTab === "1" },
                          "px-3",
                          "rounded-pill",
                          "monthly"
                        )}
                        onClick={() => {
                          this.toggleTab("1");
                        }}
                      >
                        {i18next.t('pricing.monthly')}
                      </NavLink>
                    </NavItem>{" "}
                    <NavItem className="d-inline-block">
                      <NavLink
                        className={classnames(
                          { active: this.state.activeTab === "2" },
                          "px-3",
                          "rounded-pill",
                          "yearly"
                        )}
                        onClick={() => {
                          this.toggleTab("2");
                        }}
                      >
                        {i18next.t('pricing.yearly')}{" "}
                        <Badge className="rounded-pill bg-success">
                        {i18next.t('pricing.discount')}{" "}
                        </Badge>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
            </Row>
            <Row>
            {this.state.pricings.map((pricing) => 
            <Col
              name="pricing"
              lg="6"
              md="6"
              xs="12"
              className="mt-4 pt-2"
              key={pricing.id}
            >
            <Card
              name="pricingbox"
              className={
                pricing.isActive
                  ? "pricing-rates business-rate shadow bg-white border-0 rounded"
                  : "pricing-rates business-rate shadow bg-light border-0 rounded"
              }
            >
              {/* {pricing.isActive && (
                <div className="ribbon ribbon-right ribbon-warning overflow-hidden">
                  <span className="text-center d-block shadow small h6">
                    Best
                  </span>
                </div>
              )} */}
              <CardBody>
                <h6
                  className={
                    pricing.isActive
                      ? "title font-weight-bold text-uppercase text-primary mb-4"
                      : "title font-weight-bold text-uppercase text-primary mb-4"
                  }
                >
                  {pricing.title}
                </h6>
                <div className="d-flex mb-4" name="pricingsection">
                  {pricing.id === 2
                  ? <span className="price h3 mb-0">{pricing.titleSpecialPrice}</span>
                  :
                  <>
                  <span className="h4 mb-0 mt-2">$</span>
                  <span className="price h1 mb-0">{this.state.activeTab === "1" ? pricing.priceMonth : pricing.priceYear}</span>
                  <span className="h4 align-self-end mb-1">
                    /{pricing.durationMonth}
                  </span>
                  </>}
                </div>

                <ul className="list-unstyled mb-0 pl-0">
                  {pricing.features.map((feature, key) => (
                    <li key={key} className="h6 text-muted mb-0">
                      <span className="text-primary h5 mr-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      {feature.title}
                    </li>
                  ))}
                </ul>
                <a href={pricing.btnLink} className="btn btn-primary mt-4">
                  {pricing.buttonText}
                </a>
              </CardBody>
            </Card>
            </Col>
            )}
            </Row>
            <SmartGlassesGallery />
            <Contact />
            <br/><br/>
          </Container>
      </React.Fragment>
    );
  }
}

export default Pricing;
