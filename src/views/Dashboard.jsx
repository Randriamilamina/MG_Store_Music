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
import { Container} from 'semantic-ui-react'

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
             
              <Card className="all-icons">
                <CardHeader>
                  <Row>
                    <Col sm="12">
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
        </TabContent>
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
