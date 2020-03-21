import React from "react";
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

import LoaderApp from '../views/LoaderApp';
import CardAlbum from "../views/CardAlbum";
import DetailAlbum from '../views/DetailAlbum'

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
    const {loading, nameArtiste,imageArtiste, listeAlbumsDescription} = this.props;

    const extra = (
      <a>
        <DetailAlbum/>
      </a>
    )
    return (
      <>
         <Row>

         <Card className="card-tasks">
                <CardHeader>
                  <h5 className="title">Liste Albums</h5>
                </CardHeader>
                <CardBody>
                <div className="chart-area">
                  {!loading && listeAlbumsDescription ?  
                  <CardAlbum  nameArtiseGlobale={nameArtiste} iamgeartiste={imageArtiste} listeAlbum={listeAlbumsDescription}></CardAlbum>
                 :
                 <LoaderApp></LoaderApp>
                   }
                   </div>
                </CardBody>
              </Card>

         </Row>
           
      </>
    );
  }
}

export default ListeAlbums;
