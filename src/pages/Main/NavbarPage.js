import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import ScrollspyNav from "./scrollSpy";
import logodark from "../../assets/images/logo.png";
import i18next from 'i18next';

class NavbarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: "home", navheading: i18next.t('pageData.block.home') },
        { id: 3, idnm: "service", navheading: i18next.t('pageData.block.features') },
        { id: 3, idnm: "testimonial", navheading: i18next.t('pageData.block.howitwork') },
        { id: 4, idnm: "pricing", navheading: i18next.t('pageData.block.industries') },
        { id: 6, idnm: "contact", navheading: i18next.t('pageData.block.contact')  },
      ],
      isOpen: false,
      language: 'en'
    };
    this.toggleLine = this.toggleLine.bind(this);
  }

  toggleLine() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  _setLanguage(value){
    //console.log(i18next.language)
    if (i18next.language !== value)
    {
      i18next.changeLanguage(value, (err, t) => {
        if (err) return console.log('something went wrong loading', err);
      });  
      this.setState({language: value});
      //console.log(i18next.language)
    }
  }

  render() {
    //Store all Navigationbar Id into TargetID variable(Used for Scrollspy)
    let targetId = this.state.navItems.map((item) => {
      return item.idnm;
    });
    return (
      <React.Fragment>
        <header id="topnav" className="defaultscroll sticky">
          <Container>
            <div>
              <Link className="logo" to="#">
                <img src={logodark} height="44" alt="" />
              </Link>
            </div>
            <div className="buy-button">
              <a
                to="https://1.envato.market/landrickreactjs"
                //target="_blank"
                className="btn btn-primary"
                href="https://portal.mecht.ai/signin"
              >
                {i18next.t('pageData.block.signin')}
              </a>
            </div>
            <div className="menu-extras">
              <div className="menu-item">
                <Link
                  to="#"
                  onClick={this.toggleLine}
                  className={
                    this.state.isOpen ? "navbar-toggle open" : "navbar-toggle"
                  }
                >
                  <div className="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </Link>
              </div>
            </div>
            <ScrollspyNav
              scrollTargetIds={targetId}
              scrollDuration="800"
              headerBackground="false"
              activeNavClass="active"
            >
              <div
                id="navigation"
                style={{ display: this.state.isOpen ? "block" : "none" }}
              >
                <ul className="navigation-menu">
                  {this.state.navItems.map((item, key) => (
                    <li
                      key={key}
                      className={
                        item.navheading === "Home"
                          ? "has-submenu active"
                          : "has-submenu"
                      }
                    >
                      <a href={"#" + item.idnm}> {item.navheading}</a>
                    </li>
                  ))}
                    <li className="has-submenu">
                      <Link
                        //to={navLink.link}
                        to="#"
                        onClick={(event) => {
                          event.preventDefault();
                          this.setState({isOpenSubMenu3: !this.state.isOpenSubMenu3})
                        }}
                      >{i18next.t('common.language')}
                      </Link>
                      <span className="menu-arrow"></span>
                        <ul
                          className={
                            this.state.isOpenSubMenu3 
                            ? "submenu megamenu open"
                            : "submenu megamenu"
                          }
                        >
                          <li>
                            <ul>
                                  <li >
                                    <Link to="#" onClick={() => this._setLanguage('ru-RU')}> 
                                      RU
                                    </Link>
                                  </li>
                                  <li >
                                  <Link  to="#" onClick={() => this._setLanguage('en')}> 
                                      EN
                                    </Link>
                                  </li>
                            </ul>
                          </li>
                        </ul>
                    </li>
                </ul>
              </div>
            </ScrollspyNav>
          </Container>
        </header>
      </React.Fragment>
    );
  }
}

export default NavbarPage;
