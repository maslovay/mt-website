import React, { Component } from "react";
import AOS from "aos";
import "../../../../node_modules/aos/dist/aos.css";
import Trial2 from "../../../components/SharedElements/Trial2";
import OnlineTimesheetAlerts from "../../../components/SharedElements/OnlineTimesheetAlerts";
import OnlineTimeSheetHowItWork from "../../../components/SharedElements/OnlineTimeSheetHowItWork";
import TimeTrackingIndicators from "../../../components/SharedElements/TimeTrackingIndicators";
import "flatpickr/dist/themes/material_blue.css";
import Section from "./Section";
import CustomHelmet from "../../../components/Service/CustomHelmet";

import ReactGA from 'react-ga';
ReactGA.initialize('G-PSG8RPDW3G');
ReactGA.pageview(window.location.pathname + window.location.search);

class TimeTracking extends Component {
  constructor(props, context) {
    super(props, context);
    AOS.init();
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
          <CustomHelmet name="onlineTimesheet" />
          <Section />
          <OnlineTimeSheetHowItWork />
          <OnlineTimesheetAlerts />
          <br/><br/>
          <Trial2/>
          <TimeTrackingIndicators />
          <br/><br/>
      </React.Fragment>
    );
  }
}

export default TimeTracking;
