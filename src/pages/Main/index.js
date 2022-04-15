import React, { Component } from "react";
import { Container } from "reactstrap";
import AOS from "aos";
import "../../../node_modules/aos/dist/aos.css";

import Section from "./Section";
import Description from "./Description";
import Banner from "./Banner";
import ModalVideoSection from "./ModalVideo";
import Shape from "./Shape";
import HowItWork from "./HowItWork";
import Contact from "./Contact";
import Benefits from "./Benefits";
import Industries from "./Industries";
import Module from "./Module";

import CustomHelmet from "../../components/Service/CustomHelmet";
import ReactGA from 'react-ga';
ReactGA.initialize('G-G3CSMVPNW7');

class Index extends Component {
  constructor(props, context) {
    super(props, context);
    AOS.init();
  }

  componentDidMount() {
    AOS.refresh();

    document.body.classList = "";
    window.addEventListener("scroll", this.scrollNavigation, true);
    var elementsTitle = document.getElementsByName("sectiontitle");
    var elementsDesc = document.getElementsByName("sectiondesc");

    for (var i = 0; i < elementsTitle.length; i++) {
      elementsTitle[i].setAttribute("data-aos", "fade-up");
      elementsTitle[i].setAttribute("data-aos-duration", "1200");
      elementsDesc[i].setAttribute("data-aos", "fade-up");
      elementsDesc[i].setAttribute("data-aos-duration", "1000");
    }

    // var elements = document.getElementsByName("clientsreview");
    // for (var j = 0; j < elements.length; j++) {
    //   elements[j].setAttribute("data-aos", "fade-up");
    //   elements[j].setAttribute("data-aos-duration", "1800");
    // }
    // var features = document.getElementsByName("featurebox");
    // for (var f = 0; f < features.length; f++) {
    //   features[f].setAttribute("data-aos", "fade-up");
    //   features[f].setAttribute("data-aos-duration", "1800");
    // }

    // var pricing = document.getElementsByName("pricing");
    // for (var a = 0; a < pricing.length; a++) {
    //   pricing[a].setAttribute("data-aos", "fade-up");
    //   pricing[a].setAttribute("data-aos-duration", "1400");
    // }
    // var team = document.getElementsByName("team");
    // for (var b = 0; b < team.length; b++) {
    //   team[b].setAttribute("data-aos", "fade-up");
    //   team[b].setAttribute("data-aos-duration", "1200");
    // }
    // var footer = document.getElementsByName("footercolumn");
    // for (var fcol = 0; fcol < footer.length; fcol++) {
    //   footer[fcol].setAttribute("data-aos", "fade-up");
    //   footer[fcol].setAttribute("data-aos-duration", "1400");
    // }
  }

  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
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
        <CustomHelmet name="main" />
        <Section />

        <section className="section pb-0" id="service">
          <Description />
          <Module />
          <Benefits />
          <br/><br/>
          <Banner />
        </section>
          <HowItWork />
          <Shape />

        <section className="section bg-light" id="testimonial">
          <ModalVideoSection />
          <Container className="pt-5">
          </Container>
        </section>

        <section className="section" id="pricing">
          <Industries />
        </section>

        <section className="section pb-0" id="contact">
          <Contact />
          <a href="/page-error"/>
        </section>
        <br/>
      </React.Fragment>
    );
  }
}

export default Index;
