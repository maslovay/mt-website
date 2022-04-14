import React, { Component, Suspense } from "react";
import { withRouter } from "react-router-dom";
import { withTranslation } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';
import i18n from './../../i18n'

const Topbar = React.lazy(() => import("./Topbar"));
const FooterWithoutMenuLightSocialOnly = React.lazy(() =>
  import("./FooterWithoutMenuLightSocialOnly")
);

class Layout extends Component {
  Loader = () => {
    return (
      <div id="preloader">
        <div id="status">
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <I18nextProvider i18n={i18n}>
      <React.Fragment>
        <Suspense fallback={this.Loader()}>
          <Topbar hasDarkTopBar={this.props.hasDarkTopBar} />
          {this.props.children}
          <FooterWithoutMenuLightSocialOnly className="border-0 bg-light text-dark" />
        </Suspense>
      </React.Fragment>
      </I18nextProvider>
    );
  }
}

export default withTranslation()(withRouter(Layout));
