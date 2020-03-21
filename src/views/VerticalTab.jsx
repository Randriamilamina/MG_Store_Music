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

import {Header, Icon, Image, Modal,Grid } from 'semantic-ui-react'
import { AlbumAPI } from "../api/index";
import LoaderApp from "./LoaderApp";

class VerticalTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vertical: 1,loading:true,descriptionInfo:[],loadingClikAlphabet:false,
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
      'V','W','X','Y','Z']
    };
  }
  toggleTabs = (e, stateName, index,valeur) => {
    this.setState({loadingClikAlphabet:true})
    e.preventDefault();
    this.setState({
      [stateName]: index
    });

    setTimeout(() => {
      const getDataArtistePromise = () => new Promise((resolve, reject) => {  
        setTimeout(function() {
          resolve(AlbumAPI.getArtisteByAlphabetFullText(valeur));
        }, 200);
        });  
      const processDataAsycn = async () => {  
        let data = await getDataArtistePromise();  
        data = await getDataArtistePromise(data);  
        return data;  
      };  
      
      let description = {}; 
      description.listeArtiste=[]
      processDataAsycn().then((data) => {            
      //console.log('objet result name  returned: ' +m.name);        
      description.limit = data.limit
      description.listeArtiste = data.artists
          this.setState({descriptionInfo: description,loading:false})
         
          console.log('Data from processDataAsycn() with async( When promise gets resolved ) DETAIL ALPHABET: ' + JSON.stringify(this.state.descriptionInfo.listeAlbums));

      }).finally((function() {
     })).catch((error) => {  
        console.log('Error from processDataAsycn() with async( When promise gets rejected ): ' + error);  
      });

    }, 300)

    setTimeout(() => {
      this.setState({
          loadingClikAlphabet:false
      });
  }, 2500);
  };
  componentDidMount() {
    setTimeout(() => {
        this.setState({
            loading: false
        });
    }, 4000);
    
}
  genrateTab=()=>{

  }
  render() {
    let {tabNomAlphabet,descriptionInfo,loading,loadingClikAlphabet}=this.state;
        return (
          <>
          
            <Row>
              <Col md="4">
                <Nav className="nav-pills-primary flex-column" pills>
              
                <Col lg="12" md="12">
                  <Card className="all-icons">
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
                onClick={e => this.toggleTabs(e, "vertical", index,el)}
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
                  <TabPane tabId={"vertical" + this.state.vertical}>
                  <Grid relaxed columns={4}>

                  {loadingClikAlphabet ? <LoaderApp ></LoaderApp>: 
                  
                  !loading && descriptionInfo &&  descriptionInfo.listeArtiste && descriptionInfo.listeArtiste.map((objetArtiste, index) => (
                    objetArtiste.name ?
                  <Grid.Column>
                   <Button primary><h5>{objetArtiste.name}</h5></Button>
                  </Grid.Column>
                  :
                  <LoaderApp ></LoaderApp>
                     ))
                     }}

                  
               

                  </Grid>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </>
          

        );
    
  }
  
}

export default VerticalTab;
