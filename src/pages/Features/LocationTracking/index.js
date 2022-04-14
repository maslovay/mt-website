
import React, { Component } from "react";
import "../../../../node_modules/react-modal-video/scss/modal-video.scss";
import LocationTrackingBenefits from "../../../components/SharedElements/LocationTrackingBenefits";
import LocationTrackingRoutes from "../../../components/SharedElements/LocationTrackingRoutes";
import LocationTrackingAlerts from "../../../components/SharedElements/LocationTrackingAlerts";
import CommonOpportunities from "../../../components/SharedElements/CommonOpportunities";
import Contact from "../../../components/SharedElements/Contact";
import Header from "./Header";
import LocationTrackingHeatMap from "../../../components/SharedElements/LocationTrackingHeatMap";
import CustomHelmet from "../../../components/Service/CustomHelmet";

import ReactGA from 'react-ga';
ReactGA.initialize('G-PSG8RPDW3G');
ReactGA.pageview(window.location.pathname + window.location.search);

class Index extends Component {
  componentDidMount() {
    document.body.classList = "";
    document.getElementById("top-menu").classList.add("nav-light");
    window.addEventListener("scroll", this.scrollNavigation, true);
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
        <CustomHelmet name="locationTracking" />
        <Header />
        <LocationTrackingRoutes />
        <LocationTrackingHeatMap />
        <LocationTrackingAlerts />
        <br/><br/>
        <CommonOpportunities />  
        <LocationTrackingBenefits />
        <Contact />
        <br/><br/>
      </React.Fragment>
    );
  }
}

export default Index;
