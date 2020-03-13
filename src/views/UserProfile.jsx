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
import classnames from "classnames";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  NavItem,
  NavLink,
  Nav,
  TabContent,  Table,Label,
  TabPane
} from "reactstrap";
import ListeAlbums from "./ListeAlbums";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      withIcons: 1
    };
  }

  
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
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Liste Albums</h5>
                </CardHeader>
                <CardBody>
                 <ListeAlbums></ListeAlbums>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit">
                    Save
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={require("assets/img/emilyz.jpg")}
                      />
                      <h5 className="title">Mike Andrew</h5>
                    </a>
                    <p className="description">Description</p>
                  </div>
                  <div className="card-description">
                    Do not be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens’ bed design but the back is...
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button className="btn-icon btn-round" color="google">
                      <i className="fab fa-google-plus" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Members</h5>
                </CardHeader>
                <CardBody>
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
              Listes des Membres
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
              Listes des Membres format
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className="tab-space" activeTab={"withIcons" + this.state.withIcons}>
          <TabPane tabId="withIcons1">
            Collaboratively administrate empowered markets via plug-and-play
            networks. Dynamically procrastinate B2C users after installed base
            benefits. <br />
            <br />
            Dramatically visualize customer directed convergence without
            revolutionary ROI.
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
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                     
                      <h5 className="title">Details du Groupe</h5>
                    </a>
                  </div>
                  <div className="card-description">
                  <Col lg="12" md="12">
                  <Card className="card-tasks">
                <CardBody>
                  <div className="table-full-width table-responsive">
                    <Table>
                      <tbody>
              <NavItem>
              <NavLink
                className={classnames({
                  active: this.state.vertical === 1
                })}
                onClick={e => this.toggleTabs(e, "vertical", 1)}
                href="#pablo"
              >
               
               <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                              Name
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <FormGroup check>
                              <Label check>
                                arzearezrzerzer
                              </Label>
                            </FormGroup>
                          </td>
                  </tr>
                  <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                              Name
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <FormGroup check>
                              <Label check>
                                arzearezrzerzer
                              </Label>
                            </FormGroup>
                          </td>
                  </tr>
                  <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                              Name
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <FormGroup check>
                              <Label check>
                                arzearezrzerzer
                              </Label>
                            </FormGroup>
                          </td>
                  </tr>
                  <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                              Name
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <FormGroup check>
                              <Label check>
                                arzearezrzerzer
                              </Label>
                            </FormGroup>
                          </td>
                  </tr>
                  <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                              Name
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <FormGroup check>
                              <Label check>
                                arzearezrzerzer
                              </Label>
                            </FormGroup>
                          </td>
                  </tr>
                  <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                              Name
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <FormGroup check>
                              <Label check>
                                arzearezrzerzer
                              </Label>
                            </FormGroup>
                          </td>
                  </tr>
              </NavLink>
            </NavItem>
          
                    
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
              </Col>
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button className="btn-icon btn-round" color="google">
                      <i className="fab fa-google-plus" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default UserProfile;
