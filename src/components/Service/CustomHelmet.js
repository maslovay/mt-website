import React, { Component } from "react";
import {Helmet} from "react-helmet";
import i18next from 'i18next';

class CustomHelmet extends Component {

    render() {
        return (
              <Helmet>
                  <title>{i18next.t('pageData.appName') + " - "+ i18next.t('pageData.'+this.props.name+'.main')}</title>
                  <meta name="description" content={i18next.t('pageData.'+this.props.name+'.description')} />
                  <meta name="keywords" content={i18next.t('pageData.'+this.props.name+'.keywords')} />
                  <meta name="author" content="Inpres" />
                  <meta name="version" content="v1.0" />
              </Helmet>
        )}
}

export default CustomHelmet;