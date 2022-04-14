import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import FeatherIcon from "feather-icons-react";
import i18next from 'i18next';


class FooterWithoutMenuLightSocialOnly extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <footer className={"footer footer-bar " + this.props.class}>
          <Container className="text-center">
            <Row className="align-items-center">
              <Col sm="6">
                <div className="text-sm-left">
                  <p className="mb-0">
                   {i18next.t('footer.about')}
                  </p>
                </div>
              </Col>

              <Col sm="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <ul className="list-unstyled social-icon social text-sm-right mb-0">
                {/* <li className="list-inline-item mb-0 ml-1">
                    <a href="https://www.youtube.com/channel/UC_d8J05AN0-ThyoGfWW8S3g" className="rounded mr-1">
                      <i>
                        <FeatherIcon
                          icon="youtube"
                          className="fea icon-sm fea-social"
                        />
                      </i>
                    </a>
                  </li>
                  <li className="list-inline-item mb-0 ml-1">
                    <a href="https://www.instagram.com/trash_back_" className="rounded mr-1">
                      <i>
                        <FeatherIcon
                          icon="instagram"
                          className="fea icon-sm fea-social"
                        />
                      </i>
                    </a>
                  </li> */}
                  <li className="list-inline-item mb-0 ml-1">
                    <a href="mailto:info@inpres.com" className="rounded mr-1">
                      <i>
                        <FeatherIcon
                          icon="at-sign"
                          className="fea icon-sm fea-social"
                        />
                      </i>
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </footer>
      </React.Fragment>
    );
  }
}

export default FooterWithoutMenuLightSocialOnly;
