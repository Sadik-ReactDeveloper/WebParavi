import React from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import LayoutOne from "../../../layouts/LayoutOne";
import astrologinbg from "../../../assets/img/astrologin-bg.jpg";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
    };
  }
  componentDidMount() {
    console.log(window.innerHeight - 20);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  render() {
    return (
      <div>
        <LayoutOne headerTop="visible">
          <div className="container p-2 mt-5 ">
            <div className="pt-1 d-flex justify-content-center">
              <h3
                className="headingaboutus"
                style={{ fontWeight: "600", fontSize: "28px" }}
              >
                {" "}
                Over 3000+ Entrepreneur Nationwide Benefitted
              </h3>
            </div>
            <div className="d-flex justify-content-center mb-2">
              <p
                style={{ fontSize: "17px", fontWeight: "500" }}
                className="textheadingaoutus"
              >
                We will bring you the best mentor to uplift your skills
              </p>
            </div>
            <div
              style={{
                borderRight: "1px solid black",
                borderLeft: "1px solid black",
                borderBottom: "1px solid black",
                // height: `${window.innerHeight - 200}px`,
              }}
              className="mainheadingaboutus"
            >
              <Nav
                style={{ display: "flex", justifyContent: "space-between" }}
                tabs
              >
                <NavItem style={{ width: "20%", border: "1px solid black" }}>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "1",
                    })}
                    onClick={() => {
                      this.toggle("1");
                    }}
                  >
                    OVERVIEW
                  </NavLink>
                </NavItem>
                <NavItem style={{ width: "20%", border: "1px solid black" }}>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "2",
                    })}
                    onClick={() => {
                      this.toggle("2");
                    }}
                  >
                    WHO WE ARE
                  </NavLink>
                </NavItem>
                <NavItem style={{ width: "20%", border: "1px solid black" }}>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "3",
                    })}
                    onClick={() => {
                      this.toggle("3");
                    }}
                  >
                    WHAT WE DO
                  </NavLink>
                </NavItem>
                <NavItem style={{ width: "20%", border: "1px solid black" }}>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "4",
                    })}
                    onClick={() => {
                      this.toggle("4");
                    }}
                  >
                    OUR VISION
                  </NavLink>
                </NavItem>
                <NavItem style={{ width: "20%", border: "1px solid black" }}>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "5",
                    })}
                    onClick={() => {
                      this.toggle("5");
                    }}
                  >
                    OUR MISSION
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col sm="7" lg="7" md="7" xs="12">
                      <div className="container mt-2 p-4">
                        <h5>ABOUT MMBAIC</h5>
                        <h2 style={{ fontWeight: "500" }}>
                          We will bring you to the next level of business
                          training.
                        </h2>
                        <p>
                          The MMBAIC is designed to develop powerful personal,
                          business & finance skills through a combination of
                          modern e-courses live seminars, a virtual investment
                          platform, an entrepreneurial project, and business
                          meet and forum to exchange business and Ideas.
                        </p>
                      </div>
                    </Col>
                    <Col sm="5" lg="5" md="5" xs="12">
                      <div className="container p-3" style={{ width: "100%" }}>
                        <img
                          style={{ borderRadius: "12px" }}
                          width="100%"
                          src={astrologinbg}
                          alt="image"
                        />
                      </div>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col sm="7" lg="7" md="7" xs="12">
                      <div className="container mt-2 p-4">
                        <h5>ABOUT MMBAIC</h5>
                        <h2 style={{ fontWeight: "500" }}>
                          We will bring you to the next level of business
                          training.
                        </h2>
                        <p>
                          The MMBAIC is designed to develop powerful personal,
                          business & finance skills through a combination of
                          modern e-courses live seminars, a virtual investment
                          platform, an entrepreneurial project, and business
                          meet and forum to exchange business and Ideas.
                        </p>
                      </div>
                    </Col>
                    <Col sm="5" lg="5" md="5" xs="12">
                      <div className="container p-3" style={{ width: "100%" }}>
                        <img
                          style={{ borderRadius: "12px" }}
                          width="100%"
                          src={astrologinbg}
                          alt="image"
                        />
                      </div>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="3">
                  <Row>
                    <Col sm="7" lg="7" md="7" xs="12">
                      <div className="container mt-2 p-4">
                        <h5>ABOUT MMBAIC</h5>
                        <h2 style={{ fontWeight: "500" }}>
                          We will bring you to the next level of business
                          training.
                        </h2>
                        <p>
                          The MMBAIC is designed to develop powerful personal,
                          business & finance skills through a combination of
                          modern e-courses live seminars, a virtual investment
                          platform, an entrepreneurial project, and business
                          meet and forum to exchange business and Ideas.
                        </p>
                      </div>
                    </Col>
                    <Col sm="5" lg="5" md="5" xs="12">
                      <div className="container p-3" style={{ width: "100%" }}>
                        <img
                          style={{ borderRadius: "12px" }}
                          width="100%"
                          src={astrologinbg}
                          alt="image"
                        />
                      </div>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="4">
                  <Row>
                    <Col sm="7" lg="7" md="7" xs="12">
                      <div className="container mt-2 p-4">
                        <h5>ABOUT MMBAIC</h5>
                        <h2 style={{ fontWeight: "500" }}>
                          We will bring you to the next level of business
                          training.
                        </h2>
                        <p>
                          The MMBAIC is designed to develop powerful personal,
                          business & finance skills through a combination of
                          modern e-courses live seminars, a virtual investment
                          platform, an entrepreneurial project, and business
                          meet and forum to exchange business and Ideas.
                        </p>
                      </div>
                    </Col>
                    <Col sm="5" lg="5" md="5" xs="12">
                      <div className="container p-3" style={{ width: "100%" }}>
                        <img
                          style={{ borderRadius: "12px" }}
                          width="100%"
                          src={astrologinbg}
                          alt="image"
                        />
                      </div>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="5">
                  <Row>
                    <Col sm="7" lg="7" md="7" xs="12">
                      <div className="container mt-2 p-4">
                        <h5>ABOUT MMBAIC</h5>
                        <h2 style={{ fontWeight: "500" }}>
                          We will bring you to the next level of business
                          training.
                        </h2>
                        <p>
                          The MMBAIC is designed to develop powerful personal,
                          business & finance skills through a combination of
                          modern e-courses live seminars, a virtual investment
                          platform, an entrepreneurial project, and business
                          meet and forum to exchange business and Ideas.
                        </p>
                      </div>
                    </Col>
                    <Col sm="5" lg="5" md="5" xs="12">
                      <div className="container p-3" style={{ width: "100%" }}>
                        <img
                          style={{ borderRadius: "12px" }}
                          width="100%"
                          src={astrologinbg}
                          alt="image"
                        />
                      </div>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </div>
          </div>
        </LayoutOne>
      </div>
    );
  }
}
