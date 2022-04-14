import React, { Component } from "react";
// import SmartGlassesDescription from "../../components/SharedElements/SmartGlassesDescription";
import SmartGlassesGallery from "../../components/SharedElements/SmartGlassesGallery";
import CustomHelmet from "../../components/Service/CustomHelmet";
import MobileAppShowCase from "../../components/SharedElements/MobileAppShowCase";
import RemoteExpertEffect from "../../components/SharedElements/RemoteExpertEffect";

import ReactGA from 'react-ga';
ReactGA.initialize('G-PSG8RPDW3G');
ReactGA.pageview(window.location.pathname + window.location.search);

class Index extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
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
        <CustomHelmet name="glasses" />
        {/* <Section />*/}
        {/* <SmartGlassesDescription /> */}
        <SmartGlassesGallery />
        <MobileAppShowCase /> 
        <RemoteExpertEffect />
      </React.Fragment>
    );
  }
}

export default Index;
