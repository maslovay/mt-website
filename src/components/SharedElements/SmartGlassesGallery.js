import React, { Component } from "react";
import {
  Container,
  Row,
  Col
} from "reactstrap";

import Slider from "react-slick";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import single01 from "../../assets/images/glasses/phone_with_camera_white.png";
import single02 from "../../assets/images/glasses/glasses_2.jpeg";
import single03 from "../../assets/images/glasses/glasses_3.jpeg";
import single04 from "../../assets/images/glasses/glasses_3.jpeg";

import i18next from 'i18next';

class SmartGlassesGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      successMsg: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ successMsg: true });
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    var settings = {
      autoplay: true,
      infinite: true,
      autoplaySpeed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      draggable: true,
      pauseOnHover: true,
    };

    return (
      <React.Fragment>
        <section className="section">
          <Container>
            <Row className="align-items-center">
              <Col md="6">
                {/* main slider */}
                <Slider
                  {...settings}
                  asNavFor={this.state.nav2}
                  ref={(slider) => (this.slider1 = slider)}
                >
                  <div>
                    <img
                      src={single01}
                      className="img-fluid rounded"
                      alt="alt"
                    />
                  </div>
                  <div>
                    <img
                      src={single02}
                      className="img-fluid rounded"
                      alt="alt"
                    />
                  </div>
                  <div>
                    <img
                      src={single03}
                      className="img-fluid rounded"
                      alt="alt"
                    />
                  </div>
                  <div>
                    <img
                      src={single04}
                      className="img-fluid rounded"
                      alt="alt"
                    />
                  </div>
         
                </Slider>

                {/* Slider thumbnails */}
                <Slider
                  asNavFor={this.state.nav1}
                  ref={(slider) => (this.slider2 = slider)}
                  slidesToShow={3}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  <div>
                    <img src={single01} className="img-fluid" alt="" />
                  </div>
                  <div>
                    <img src={single02} className="img-fluid" alt="" />
                  </div>
                  <div>
                    <img src={single03} className="img-fluid" alt="" />
                  </div>
                  <div>
                    <img src={single04} className="img-fluid" alt="" />
                  </div>
                </Slider>
              </Col>

              <Col md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title ms-md-4">
                  <h4 className="title mb-4">{i18next.t('smartGlasses.gallery.productName')}</h4>
                  <div className="d-flex justify-content-between my-4">
                    <h4 className="mb-0">
                      <b>${i18next.t('smartGlasses.gallery.price')}</b>
                    </h4>
                    {/* <div className="text-warning">
                      <span className="mdi mdi-star"></span>
                      <span className="mdi mdi-star"></span>
                      <span className="mdi mdi-star"></span>
                      <span className="mdi mdi-star"></span>
                      <span className="mdi mdi-star-half"></span>
                      <span className="text-muted ps-2">23 Reviews</span>
                    </div> */}
                  </div>
                  <p className="text-muted para-desc mx-auto">
                    {i18next.t('smartGlasses.gallery.description')}
                  </p>
                  <ul className="list-unstyled feature-list text-muted">
                    <li>
                      <i className="mdi mdi-check me-2"></i>{i18next.t('smartGlasses.gallery.feature1')}
                    </li>
                    <li>
                      <i className="mdi mdi-check me-2"></i>{i18next.t('smartGlasses.gallery.feature2')}
                    </li>
                    <li>
                      <i className="mdi mdi-check me-2"></i>{i18next.t('smartGlasses.gallery.feature3')}
                    </li>
                    <li>
                      <i className="mdi mdi-check me-2"></i>{i18next.t('smartGlasses.gallery.feature4')}
                    </li>
                    <li>
                      <i className="mdi mdi-check me-2"></i>{i18next.t('smartGlasses.gallery.feature5')}
                    </li>
                    <li>
                      <i className="mdi mdi-check me-2"></i>{i18next.t('smartGlasses.gallery.feature6')}
                    </li>
                    <li>
                      <i className="mdi mdi-check me-2"></i>{i18next.t('smartGlasses.gallery.feature7')}
                    </li>
                  </ul>
                  <div className="mt-4">
                    <a href="mailto:info@inpres.com?subject=Buy smart glasses" className="btn btn-primary">
                    {i18next.t('smartGlasses.gallery.button')}
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default SmartGlassesGallery;
