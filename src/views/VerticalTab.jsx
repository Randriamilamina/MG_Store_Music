import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
  Button,
  ButtonGroup,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  UncontrolledTooltip
} from "reactstrap";

class VerticalTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vertical: 1,
      tabNomAlphabet:[
    'A',
    'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V']
    };
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  genrateTab=()=>{

  }
  render() {
    let {tabNomAlphabet}=this.state;
        return (
          <>
          
            <Row>
              <Col md="4">
                <Nav className="nav-pills-primary flex-column" pills>
              
                <Col lg="12" md="12">
                  <Card className="card-tasks">
                <CardHeader>
                  <h6 className="title d-inline">Liste Premier Letres</h6>
                </CardHeader>
                <CardBody>
                  <div className="table-full-width table-responsive">
                    <Table>
                      <tbody>
                      {tabNomAlphabet.map((el, index) => (
              <NavItem>
              <NavLink
                className={classnames({
                  active: this.state.vertical === index
                })}
                onClick={e => this.toggleTabs(e, "vertical", index)}
                href="#pablo"
              >
               
               <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <h1>{el}</h1>
                              </Label>
                            </FormGroup>
                          </td>
                        </tr>
              </NavLink>
            </NavItem>
          ))}
                    
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
              </Col>
                  
                </Nav>
              </Col>
              <Col md="8">
                <TabContent activeTab={"vertical" + this.state.vertical}>
                  <TabPane tabId="vertical1">
                  
                  </TabPane>
                  <TabPane tabId="vertical2">
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas. <br />
                    <br />
                    Dramatically maintain clicks-and-mortar solutions without
                    functional solutions.
                  </TabPane>
                  <TabPane tabId="vertical3">
                    Completely synergize resource taxing relationships via premier
                    niche markets. Professionally cultivate one-to-one customer
                    service with robust ideas. <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </>
          

        );
    
  }
  
}

export default VerticalTab;
