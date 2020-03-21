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
  TabContent,CardTitle,
  TabPane
} from "reactstrap";
import ListeAlbums from "./ListeAlbums";
import { AlbumAPI } from "../api/index";
import { Placeholder,Container,Table,Label,Icon} from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import LoaderApp from "./LoaderApp";
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      withIcons: 1,loading:true,
      paramsKey:'',color:'purple',
      descriptionInfo:{},
    };
  }

  componentWillMount() {
    if(this.props != undefined  && this.props !== null && this.props.location.state !=null){
      const { paramsIDName } = this.props.location.state
    this.setState({paramsKey:paramsIDName})
    if(paramsIDName!==null){
      setTimeout(() => {
        const getDataDetailPromise = () => new Promise((resolve, reject) => {  
          setTimeout(function() {
            resolve(AlbumAPI.getSongByNameFullText(paramsIDName));
          }, 200);
          });  
        const processDataAsycn = async () => {  
          let data = await getDataDetailPromise();  
          data = await getDataDetailPromise(data);  
          return data;  
        };  
        
        let description = {}; 
        description.listeassociatedMusicalArtist=[]   
        description.listeGenre=[]
        description.listeAlbum=[]   
        description.listeMember=[] 
        description.listeLabels=[]
        description.listePictures=[]
        processDataAsycn().then((data) => {            
        //console.log('objet result name  returned: ' +m.name);        
        description.id = data._id
        description.name = data.name

        description.urlWikipedia = data.urlWikipedia
        description.urlFacebook = data.urlFacebook
        description.urlTwitter = data.urlTwitter
        description.urlAmazon = data.urlAmazon
        description.urlITunes = data.urlITunes
        description.urlAllmusic = data.urlAllmusic
        description.urlDiscogs = data.urlDiscogs
        description.urlYouTube = data.urlYouTube
        description.urlInstagram = data.urlInstagram
        description.urlWikidata = data.urlWikidata
        description.dateNaissance = data.lifeSpan.begin
        description.deezerFans = data.deezerFans
        description.abstract = data.abstract
        description.picture= data.picture.standard
        description.listeassociatedMusicalArtist=data.associatedMusicalArtist
          description.listeAlbums=data.albums
          description.listeGenre=data.genres
          description.listeGenreDBP=data.dbp_genre
          description.listeLabels=data.labels
          description.listeLabelsrecordLabel=data.recordLabel
          description.listeMember=data.members
        
            this.setState({descriptionInfo: description,loading:false})

        }).finally((function() {
       })).catch((error) => {  
          console.log('Error from processDataAsycn() with async( When promise gets rejected ): ' + error);  
        });

      }, 300)
    }
    }else{
      this.props.history.push({
        pathname: '/admin/dashboard/'
      })
    }   
    
}

componentDidMount() {
    setTimeout(() => {
        this.setState({
            loading: false
        });
    }, 5000);
    
}
componentWillReceiveProps(nextProps, nextContext) {
  this.setState({loading:true})
  this.setState({descriptionInfo:[]})
  if (nextProps!=null && nextProps.location.state!= undefined  && this.props !== nextProps) {
     
     const { paramsIDName } = nextProps.location.state
    this.setState({paramsKey:paramsIDName})
    if(paramsIDName!==null){
      setTimeout(() => {
        const getDataDetailPromise = () => new Promise((resolve, reject) => {  
          setTimeout(function() {
            resolve(AlbumAPI.getSongByNameFullText(paramsIDName));
          }, 200);
          });  
        const processDataAsycn = async () => {  
          let data = await getDataDetailPromise();  
          data = await getDataDetailPromise(data);  
          return data;  
        };  
        
        let description = {}; 
        description.listeassociatedMusicalArtist=[]   
        description.listeGenre=[]
        description.listeAlbum=[]   
        description.listeMember=[] 
        description.listeLabels=[]
        description.listePictures=[]
        processDataAsycn().then((data) => {            
        //console.log('objet result name  returned: ' +m.name);        
        description.id = data._id
        description.name = data.name

        description.urlWikipedia = data.urlWikipedia
        description.urlFacebook = data.urlFacebook
        description.urlTwitter = data.urlTwitter
        description.urlAmazon = data.urlAmazon
        description.urlITunes = data.urlITunes
        description.urlAllmusic = data.urlAllmusic
        description.urlDiscogs = data.urlDiscogs
        description.urlYouTube = data.urlYouTube
        description.urlInstagram = data.urlInstagram
        description.urlWikidata = data.urlWikidata
        description.dateNaissance = data.lifeSpan.begin
        description.deezerFans = data.deezerFans
        description.abstract = data.abstract
        description.picture= data.picture.standard
        description.listeassociatedMusicalArtist=data.associatedMusicalArtist
          description.listeAlbums=data.albums
          description.listeGenre=data.genres
          description.listeGenreDBP=data.dbp_genre
          description.listeLabels=data.labels
          description.listeLabelsrecordLabel=data.recordLabel
          description.listeMember=data.members
        
            this.setState({descriptionInfo: description,loading:false})


        }).finally((function() {
       })).catch((error) => {  
          console.log('Error from processDataAsycn() with async( When promise gets rejected ): ' + error);  
        });

      }, 300)
    }
    }else{
      this.props.history.push({
        pathname: '/admin/dashboard/'
      })
  }
}
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    const {loading,descriptionInfo,color} = this.state;
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
              Liste mebres
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
              Liste mebres format
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
          <div>
            
          <Table color={color} key={color} inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>name</Table.HeaderCell>
            <Table.HeaderCell>nameVariations</Table.HeaderCell>
            <Table.HeaderCell>gender</Table.HeaderCell>
            <Table.HeaderCell>instruments</Table.HeaderCell>
            <Table.HeaderCell>birthDate</Table.HeaderCell>

          </Table.Row>
        </Table.Header>

        <Table.Body>
        { descriptionInfo &&  descriptionInfo.listeMember && descriptionInfo.listeMember.map((objetMember, index) => (
                <Table.Row>
                <Table.Cell>{!objetMember.ended && objetMember.name}</Table.Cell>
                <Table.Cell>{!objetMember.ended && objetMember.nameVariations}</Table.Cell>
                <Table.Cell>{!objetMember.ended  && objetMember.gender}</Table.Cell>
                <Table.Cell>{!objetMember.ended  && objetMember.instruments}</Table.Cell>
                <Table.Cell>{!objetMember.ended  && objetMember.birthDate}</Table.Cell>
              </Table.Row>
                     ))}
          
        </Table.Body>
        
      </Table>
      </div>
          </TabPane>
          <TabPane tabId="withIcons2">
            <div>
          <Table color={color} key={color} inverted>
          <Table.Header>
          <Table.Row>
            <Table.HeaderCell>name</Table.HeaderCell>
            <Table.HeaderCell>nameVariations</Table.HeaderCell>
            <Table.HeaderCell>gender</Table.HeaderCell>
            <Table.HeaderCell>instruments</Table.HeaderCell>
            <Table.HeaderCell>birthDate</Table.HeaderCell>

          </Table.Row>
        </Table.Header>

        <Table.Body>
        { descriptionInfo &&  descriptionInfo.listeMember && descriptionInfo.listeMember.map((objetMember, index) => (
                <Table.Row>
                <Table.Cell>{objetMember.ended && objetMember.name}</Table.Cell>
                <Table.Cell>{objetMember.ended && objetMember.nameVariations}</Table.Cell>
                <Table.Cell>{ objetMember.ended  && objetMember.gender}</Table.Cell>
                <Table.Cell>{ objetMember.ended  && objetMember.instruments}</Table.Cell>
                <Table.Cell>{objetMember.ended  && objetMember.birthDate}</Table.Cell>
              </Table.Row>
                     ))}
          
        </Table.Body>
      </Table>
      </div>
          </TabPane>
        </TabContent>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="8">
            <Container>
            <ListeAlbums  loading={loading} nameArtiste={descriptionInfo.name} imageArtiste={descriptionInfo.picture}  listeAlbumsDescription={descriptionInfo.listeAlbums}></ListeAlbums>
          </Container>
            </Col>
            <Col md="4">
            <Card className="card-user">

              {!loading && descriptionInfo  ?
              <div>
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
                        src={descriptionInfo.picture}
                      />
                      <h5 className="title">{descriptionInfo.name}</h5>
                      <h5 className="title">{descriptionInfo.id}</h5>
                    </a>
                    <p className="description">Description</p>
                  </div>
                  <div className="card-description">
                    {descriptionInfo.abstract}
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                  <a href={descriptionInfo.urlFacebook}><Icon circular inverted color='blue' name='facebook'  size='big' /></a>
                  <a href={descriptionInfo.urlTwitter}><Icon circular inverted color='blue' name='twitter'  size='big' /></a>
                  <a href={descriptionInfo.urlDiscogs}><Icon circular inverted color='blue' name='discord'  size='big' /></a>
                  
                  </div>
                </CardFooter>
                </div>
              :
             <LoaderApp></LoaderApp>
              }
            </Card>

            </Col>
          </Row>
          <Row>
            <Col md="8">
            </Col>
            <Col md="4">
              <Card className="card-user">
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <h5 className="title">Details du Groupe</h5>
                  </div>
                  <div className="card-description">
                  <Col lg="12" md="12">
                  <Card className="card-tasks">
                <CardBody>
                  <div className="table-full-width table-responsive">
                    <Table color={color}>
                      <tbody>
              <NavItem>
              <NavLink
                className={classnames({
                  active: this.state.vertical === 1
                })}
                onClick={e => this.toggleTabs(e, "vertical", 1)}
                href="#pablo"
              >
               {!loading && descriptionInfo ?
               <div>
               <tr>
               <td>
                 <FormGroup check>
                   <Label check>
                   Birthday
                   </Label>
                 </FormGroup>
               </td>
               <td>
                 <FormGroup check>
                   
                   <Label as='a' color='red' tag>
                   {descriptionInfo.dateNaissance}
                  </Label>
                 </FormGroup>
               </td>
       </tr>
       <tr>
               <td>
                 <FormGroup check>
                   <Label check>
                   Location
                   </Label>
                 </FormGroup>
               </td>
               <td>
                 <FormGroup check>
                   <Label check>
                   </Label>
                 </FormGroup>
               </td>
       </tr>
       <tr>
               <td>
                 <FormGroup check>
                  <Label check>
                    Genre
                   </Label>
                 </FormGroup>
               </td>
               <td>
                 <FormGroup check>                              
               {descriptionInfo && descriptionInfo.listeGenre && descriptionInfo.listeGenre.map((objetGenre, index) => (
                
                    <Label as='a' color='red' tag>
                      {objetGenre}   
                  </Label>
                     ))}
                 </FormGroup>
               </td>
       </tr>
       <tr>
               <td>
                 <FormGroup check>
                   <Label check>
                   Genre (DBpedia)
                   </Label>
                 </FormGroup>
               </td>
               <td>
                 <FormGroup check>
                 {descriptionInfo && descriptionInfo.listeGenreDBP && descriptionInfo.listeGenreDBP.map((objetGenreDBP, index) => (
                    <Label as='a' color='red' tag>
                    {objetGenreDBP}   
                </Label>
                     ))}
                 </FormGroup>
               </td>
       </tr>
       <tr>
               <td>
                 <FormGroup check>
                   <Label check>
                   Label
                   </Label>
                 </FormGroup>
               </td>
               <td>
                 <FormGroup check>
                 {descriptionInfo && descriptionInfo.listeLabels && descriptionInfo.listeLabels.map((objetLabels, index) => (
                  <Label as='a' color='red' tag>
                  {objetLabels}   
              </Label>
                     ))}
                 </FormGroup>
               </td>
       </tr>

       <tr>
               <td>
                 <FormGroup check>
                   <Label check>
                   Label (DBpedia)
                   </Label>
                 </FormGroup>
               </td>
               <td>
                 <FormGroup check>
                   {descriptionInfo && descriptionInfo.listeLabelsrecordLabel && descriptionInfo.listeLabelsrecordLabel.map((objetLabelsrecordLabel, index) => (
                  <Label as='a' color='red' tag>
                  {objetLabelsrecordLabel}   
              </Label>
                     ))}
                 </FormGroup>
               </td>
       </tr>
       <tr>
               <td>
                 <FormGroup check>
                   <Label check>
                   Number of Deezer fans 
                   </Label>
                 </FormGroup>
               </td>
               <td>
                 <FormGroup check>
                   <Label as='a' color='red' tag>
                   {descriptionInfo.deezerFans}
                </Label>
                 </FormGroup>
               </td>
       </tr>
       </div>
            :
            <LoaderApp></LoaderApp>
              }
                  
              </NavLink>
            </NavItem>
          
                    
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
              </Col>
                  </div>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default withRouter(UserProfile);
