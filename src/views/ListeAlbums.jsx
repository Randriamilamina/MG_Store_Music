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

class ListeAlbums extends React.Component {
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
            <Col md="12">
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
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default ListeAlbums;
