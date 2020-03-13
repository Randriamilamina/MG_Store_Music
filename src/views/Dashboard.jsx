/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  UncontrolledTooltip
} from "reactstrap";
import VerticalTab from './VerticalTab';

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "variables/charts.jsx";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1",
      withIcons: 1
    };
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };

  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <h5 className="card-category">Total Shipments</h5>
                      <CardTitle tag="h2">Menu</CardTitle>
                    </Col>
                    <Col sm="6">
                    <Nav
          className="nav-pills-primary nav-pills-icons"
          pills
          role="tablist"
        >
          {/* color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger" */}
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.withIcons === 1
              })}
              onClick={e => this.toggleTabs(e, "withIcons", 1)}
              href="#pablo"
            >
              <i className="tim-icons icon-laptop" />
              Artistes
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.withIcons === 2
              })}
              onClick={e => this.toggleTabs(e, "withIcons", 2)}
              href="#pablo"
            >
              <i className="tim-icons icon-settings-gear-63" />
              Albums
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.withIcons === 3
              })}
              onClick={e => this.toggleTabs(e, "withIcons", 3)}
              href="#pablo"
            >
              <i className="tim-icons icon-calendar-60" />
              Song
            </NavLink>
          </NavItem>
        </Nav>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                  <TabContent className="tab-space" activeTab={"withIcons" + this.state.withIcons}>
          <TabPane tabId="withIcons1">
         < VerticalTab></VerticalTab>
          </TabPane>
          <TabPane tabId="withIcons2">
            Efficiently unleash cross-media information without cross-media
            value. Quickly maximize timely deliverables for real-time schemas.{" "}
            <br />
            <br />
            Dramatically maintain clicks-and-mortar solutions without
            functional solutions.
          </TabPane>
          <TabPane tabId="withIcons3">
            Completely synergize resource taxing relationships via premier
            niche markets. Professionally cultivate one-to-one customer
            service with robust ideas. <br />
            <br />
            Dynamically innovate resource-leveling customer service for state
            of the art customer service.
          </TabPane>
        </TabContent>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Total Shipments</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-bell-55 text-info" />{" "}
                    763,215
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample2.data}
                      options={chartExample2.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Daily Sales</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                    3,500€
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={chartExample3.data}
                      options={chartExample3.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Completed Tasks</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-send text-success" /> 12,100K
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample4.data}
                      options={chartExample4.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
