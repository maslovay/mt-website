
import React, { Component } from "react";
import { Container, Row, Col, Media } from "reactstrap";
import i18next from 'i18next';
import SectionTitle from "./SectionTitle";

class Industries extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
          <Container>
            <SectionTitle
              title={i18next.t('home.industries.title')}
              desc={i18next.t('home.industries.description')}
            />
            <Row>

              
            <Col lg={4} md={6} className="mt-4 pt-2">
              {/* <a href="/industries/manufactoring"> */}
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle me-3">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"  
                    strokeLinejoin="round" 
                    className="feather feather-bold fea icon-ex-md text-primary">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6">
                        </line>
                        <path d="M16 10a4 4 0 0 1-8 0">
                          </path>
                  </svg>
                  </div>
                  <Media body style={{paddingLeft: "20px"}}>
                    <h4 className="title mb-0" style={{color: "#000000"}}>{i18next.t('home.industries.delivery')}</h4>
                  </Media>
                </div>
              {/* </a> */}
              </Col>
            

              <Col lg={4} md={6} className="mt-4 pt-2">
              {/* <a href="/industries/manufactoring"> */}
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle me-3">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="feather feather-bold fea icon-ex-md text-primary">
                      <circle cx="12" cy="12" r="3">
                        </circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                        </path>
                      </svg>
                  </div>
                  <Media body style={{paddingLeft: "20px"}}>
                    <h4 className="title mb-0" style={{color: "#000000"}}>{i18next.t('home.industries.manufacturing')}</h4>
                  </Media>
                </div>
              {/* </a> */}
              </Col>

              <Col lg={4} md={6} className="mt-4 pt-2">
              {/* <a href="/industries/oilgas"> */}
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle me-3">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="feather feather-bold fea icon-ex-md text-primary">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                  </svg>
                  </div>
                  <Media body style={{paddingLeft: "20px"}}>
                    <h4 className="title mb-0" style={{color: "#000000"}}>{i18next.t('home.industries.oilgas')}</h4>
                  </Media>
                </div>
              {/* </a> */}
              </Col>

              <Col lg={4} md={6} className="mt-4 pt-2">
              {/* <a href="/industries/other"> */}
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle me-3">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="feather feather-git-merge fea icon-ex-md text-primary">
                      <rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>
                  </svg>
                  </div>
                  <Media body style={{paddingLeft: "20px"}}>
                    <h4 className="title mb-0" style={{color: "#000000"}}>{i18next.t('home.industries.agriculture')}</h4>
                  </Media>
                </div>
                {/* </a> */}
              </Col>

              <Col lg={4} md={6} className="mt-4 pt-2">
              {/* <a href="/industries/other"> */}
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle me-3">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="feather feather-git-merge fea icon-ex-md text-primary">
                      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>
                  </svg>
                  </div>
                  <Media body style={{paddingLeft: "20px"}}>
                    <h4 className="title mb-0" style={{color: "#000000"}}>{i18next.t('home.industries.landscaping')}</h4>
                  </Media>
                </div>
                {/* </a> */}
              </Col>

              <Col lg={4} md={6} className="mt-4 pt-2">
              {/* <a href="/industries/other"> */}
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle me-3">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="feather feather-git-merge fea icon-ex-md text-primary">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  </div>
                  <Media body style={{paddingLeft: "20px"}}>
                    <h4 className="title mb-0" style={{color: "#000000"}}>{i18next.t('home.industries.security')}</h4>
                  </Media>
                </div>
              </Col>
            </Row>
          </Container>
      </React.Fragment>
    );
  }
}

export default Industries;
