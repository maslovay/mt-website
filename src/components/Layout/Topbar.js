import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import {
  Container
} from "reactstrap";
import i18next from 'i18next';

import logodark from "../../assets/images/logo-dark.png";
//import logolight from "../../assets/images/logo-light.png";

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpenShop: false,
      navLinks: [
        
        {
          id: 1,
          title: i18next.t('header.features'),
          link: "/#",
          isMegaMenu: false,
          isOpenSubMenu: false,
          child: [
            { id: 1, title: i18next.t('header.feature1'), link: "/features/remote-expert" },
            { id: 2, title: i18next.t('header.feature2'), link: "/features/time-tracking" },
            { id: 3, title: i18next.t('header.feature3'), link: "/features/location-tracking" },
            { id: 4, title: i18next.t('header.feature4'), link: "/features/online-timesheet" },
            { id: 5, title: i18next.t('header.feature5'), link: "/features/client-service-control" },
            { id: 6, title: i18next.t('header.feature6'), link: "/features/tags-tracking" },
          ],
        },
        // {
        //   id: 2,
        //   title: i18next.t('header.industries'),
        //   link: "/#",
        //   isMegaMenu: false,
        //   isOpenSubMenu: false,
        //   child: [
        //     { id: 1, title: i18next.t('header.industry1'), link: "/industries/constructing" },
        //     { id: 2, title: i18next.t('header.industry2'), link: "/industries/landscaping" },
        //     { id: 3, title: i18next.t('header.industry3'), link: "/industries/courier" },
        //     { id: 4, title: i18next.t('header.industry4'), link: "/industries/oil-gas" },
        //     { id: 5, title: i18next.t('header.industry5'), link: "/industries/manufacturing" },
        //     { id: 6, title: i18next.t('header.industry6'), link: "/industries/cleaning" },
        //     { id: 7, title: i18next.t('header.industry7'), link: "/industries/other-industries" }
        //   ],
        // },
        { id: 3, title: i18next.t('header.industries'), link: "/industries/inpres-industries" },
        { id: 4, title: i18next.t('header.glasses'), link: "/inpres-glasses" },
        { id: 5, title: i18next.t('header.pricing'), link: "/pricing" },
      ],
      wishlistModal: false,
      dropdownIsOpen: false,
    }
    this.toggleLine = this.toggleLine.bind(this);
    this.openBlock.bind(this);
    this.openNestedBlock.bind(this);
    this.toggleDropdownShop.bind(this);
    this.toggleWishlistModal.bind(this);
    this.toggleDropdownIsOpen.bind(this);
  }

  _setLanguage(value){
    if (i18next.language !== value)
    {
      i18next.changeLanguage(value, (err, t) => {
        if (err) return console.log('something went wrong loading', err);
      });  
      this.setState({language: value});
    }
  }

  toggleWishlistModal = () => {
    this.setState((prevState) => ({
      wishlistModal: !prevState.wishlistModal,
    }));
  };

  toggleDropdownShop = () => {
    this.setState({
      dropdownOpenShop: !this.state.dropdownOpenShop,
    });
  };

  toggleDropdownIsOpen = () => {
    this.setState({
      dropdownIsOpen: !this.state.dropdownIsOpen,
    });
  };

  toggleLine() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  componentDidMount() {
    var matchingMenuItem = null;
    var ul = document.getElementById("top-menu");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem);
    }
    const { location } = this.props;
    const query = new URLSearchParams(location.search);
    
    const lng = query.get('lng');
    //console.log(lng)
    if (lng != null)
      this._setLanguage(lng)
  }

  activateParentDropdown = (item) => {
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active"); // li
      const parent1 = parent.parentElement;
      parent1.classList.add("active"); // li
      if (parent1) {
        const parent2 = parent1.parentElement;
        parent2.classList.add("active"); // li
        if (parent2) {
          const parent3 = parent2.parentElement;
          parent3.classList.add("active"); // li
          if (parent3) {
            const parent4 = parent3.parentElement;
            parent4.classList.add("active"); // li
          }
        }
      }
    }
  };

  openBlock = (level2_id) => {
    var tmpLinks = this.state.navLinks;
    tmpLinks.map((tmpLink) =>
      //Match level 2 id
      tmpLink.id === level2_id
        ? (tmpLink.isOpenSubMenu = !tmpLink.isOpenSubMenu)
        : false
    );
    this.setState({ navLinks: tmpLinks });
  };

  openNestedBlock = (level2_id, level3_id) => {
    var tmpLinks = this.state.navLinks;
    tmpLinks.map((tmpLink) =>
      //Match level 2 id
      tmpLink.id === level2_id
        ? tmpLink.child.map((tmpchild) =>
            //if level1 id is matched then match level 3 id
            tmpchild.id === level3_id
              ? //if id is matched then update status(level 3 sub menu will be open)
                (tmpchild.isOpenNestedSubMenu = !tmpchild.isOpenNestedSubMenu)
              : (tmpchild.isOpenNestedSubMenu = false)
          )
        : false
    );
    this.setState({ navLinks: tmpLinks });
  };

  render() {
    return (
      <React.Fragment>
      {this.props.tagline ? this.props.tagline : null}

      <header id="topnav" className="defaultscroll sticky">
        <Container>
          <div>
            <Link className="logo" to="/">
                <img src={logodark} id="brandLogo" height="24" alt="Inpres logo" />
              </Link>
            {/* <a className="logo" href="/">
              <img src={logodark} height="24" className="logo-light-mode" alt="INPRES logo" />
            </a> */}
            {/* {this.props.hasDarkTopBar ? (
                <a className="logo" href="/">
                  <img src={logodark} height="24" className="logo-light-mode" alt="" />
                  <img src={logolight} height="24" className="logo-dark-mode" alt="" />
                </a>
              ) :
                <a className="logo" href="/l">
                  <span className="logo-light-mode">
                    <img src={logodark} className="l-dark" height="24" alt="" />
                    <img src={logolight} className="l-light" height="24" alt="" />
                  </span>
                  <img src={logolight} height="24" className="logo-dark-mode" alt="" />
                </a>
              } */}
          </div>
          {(() => {
              return (
                
                <div className="buy-button">
                  <a
                    href="https://portal.inpres.com/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="buyButton"
                    className="btn btn-outline-primary btn-sm"
                  >
                    {i18next.t('header.trial')}
                  </a>
                  &nbsp;
                  <a
                    href="https://portal.inpres.com/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="buyButton"
                    className="btn btn-primary btn-sm"
                  >
                    {i18next.t('header.signin')}
                  </a>
                </div>
              );
            }
          )()}

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

          <div
            id="navigation"
            style={{ display: this.state.isOpen ? "block" : "none" }}
          >
            <ul className="navigation-menu" id="top-menu">
              {this.state.navLinks.map((navLink, key) =>
                navLink.child ? (
                  <li className="has-submenu" key={key}>
                    {/* child item(menu Item) - Level 1 */}
                    <Link
                      to={navLink.link}
                      onClick={(event) => {
                        event.preventDefault();
                        this.openBlock(navLink.id);
                      }}
                    >
                      {navLink.title}
                    </Link>
                    {/* <i className="mdi mdi-chevron-right me-1"></i> */}
                    <span className="menu-arrow"></span>
                    {navLink.isMegaMenu ? (
                      // if menu is mega menu(2 columns grid)
                      <ul
                        className={
                          navLink.isOpenSubMenu
                            ? "submenu megamenu open"
                            : "submenu megamenu"
                        }
                      >
                        <li>
                          <ul>
                            {navLink.child.map((item, childKey) =>
                              item.id < 12 ? (
                                <li key={childKey}>
                                  <Link to={item.link}>
                                    {item.title}
                                  </Link>
                                </li>
                              ) : null
                            )}
                          </ul>
                        </li>
                        <li>
                          <ul>
                            {navLink.child.map((item, childKey) =>
                              item.id < 23 && item.id > 11 ? (
                                <li key={childKey}>
                                  <Link to={item.link}>
                                    {item.title}
                                    {item.isNew ? (
                                      <span className="badge bg-danger rounded ms-2">
                                        new
                                      </span>
                                    ) : null}
                                  </Link>
                                </li>
                              ) : null
                            )}
                          </ul>
                        </li>
                        <li>
                          <ul>
                            {navLink.child.map((item, childKey) =>
                              item.id < 34 && item.id > 22 ? (
                                <li key={childKey}>
                                  <Link to={item.link}>
                                    {item.title}
                                  </Link>
                                </li>
                              ) : null
                            )}
                          </ul>
                        </li>
                        <li>
                          <ul>
                            {navLink.child.map((item, childKey) =>
                              item.id < 45 && item.id > 33 ? (
                                <li key={childKey}>
                                  <Link to={item.link}>
                                    {item.title}
                                  </Link>
                                </li>
                              ) : null
                            )}
                          </ul>
                        </li>
                        <li>
                          <ul>
                            {navLink.child.map((item, childKey) =>
                              item.id < 56 && item.id > 44 ? (
                                <li key={childKey}>
                                  <Link to={item.link}>
                                    {item.title}
                                  </Link>
                                </li>
                              ) : null
                            )}
                          </ul>
                        </li>
                      </ul>
                    ) : (
                      // if menu is not mega menu(1grid)
                      <ul
                        className={
                          navLink.isOpenSubMenu ? "submenu open" : "submenu"
                        }
                      >
                        {navLink.child.map((childArray, childKey) =>
                          childArray.nestedChild ? (
                            // sub menu item - Level 2
                            <li className="has-submenu" key={childKey}>
                              <Link
                                to={childArray.link}
                                onClick={(event) => {
                                  event.preventDefault();
                                  this.openNestedBlock(
                                    navLink.id,
                                    childArray.id
                                  );
                                }}
                              >
                                {childArray.title}{" "}
                                {childArray.isNew ? (
                                  <span className="badge badge-pill badge-success">
                                    Added
                                  </span>
                                ) : null}
                              </Link>
                              <span className="submenu-arrow"></span>
                              <ul
                                className={
                                  childArray.isOpenNestedSubMenu
                                    ? "submenu open"
                                    : "submenu"
                                }
                              >
                              </ul>
                            </li>
                          ) : (
                            <li key={childKey}>
                              <Link to={childArray.link}>
                                {childArray.title}
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={key}>
                    <Link to={navLink.link}>{navLink.title}</Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </Container>
      </header>
    </React.Fragment>
    );
  }
}

export default withRouter(Topbar);
