import _ from 'lodash'
import React from 'react'
import { Button, Header, Icon, Image, Modal ,List,Label,Grid } from 'semantic-ui-react'
import  {BrowserRouter,Link} from "react-router-dom";

class DetailAlbum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      withIcons: 1
    };
  }

  componentDidMount() {
   /* const {listeSongAlbum} = this.props;

    if(listeSongAlbum.length>0){
      listeSongAlbum.splice(0,listeSongAlbum.length);
    }*/

  }
  render() {
    const {nameAlbum,imageAlbum,listeSongAlbum,nameArtiste,imageArtiste} = this.props;

    return (
      <Modal trigger={
      
        <Button as='div' labelPosition='right'>
        <Button color='red'>
          <Icon name='heart' />
          Voir
        </Button>
        <Label as='a' basic color='red' pointing='left'>
        { nameAlbum}
        </Label>
      </Button>}>
    <Modal.Header>Detail Album { nameAlbum} </Modal.Header>
    <Modal.Content image scrolling>
      <Image size='medium' src={imageAlbum} wrapped />

      <Modal.Description>
        <Header>Toutes les listes</Header>
       
        <List animated verticalAlign='middle'>

          {listeSongAlbum &&  listeSongAlbum.map((listeSong, index) => (

       listeSong ?
            <List.Item>
            <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
            <List.Content>
              <List.Header>   <Link to={{
                                pathname: '/admin/detailSong',
                                search: '?query=detailSong/'+nameArtiste+'/'+nameAlbum+'/'+listeSong.title ,
                                state: { searchTextArtistName: nameArtiste,searchTextAlbumName:nameAlbum,searchTextSongName:listeSong.title ,imagealbum:imageAlbum,imageartiste:imageArtiste}
                              }}>{listeSong.title}</Link>
                               </List.Header>
            </List.Content>
            </List.Item> 
            :
            <div>
             <Image
                src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                style={{ paddingBottom: 5 }}
              />
              <Image
                src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                style={{ paddingBottom: 5 }}
              />
              <Image
                src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                style={{ paddingBottom: 5 }}
              />
              <Image
                src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                style={{ paddingBottom: 5 }}
              />
              <Image
                src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                style={{ paddingBottom: 5 }}
              />
              <Image
                src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                style={{ paddingBottom: 5 }}
              />
              <Image
                src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                style={{ paddingBottom: 5 }}
              />
              <Image
                src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                style={{ paddingBottom: 5 }}
              />
              <Image
                src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                style={{ paddingBottom: 5 }}
              />
              <Image
                src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                style={{ paddingBottom: 5 }}
              />
              </div>
            ))}

          
          
       
   
  </List>

  
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      
      <Button primary>
        fermer <Icon name='chevron right' />
      </Button>
    </Modal.Actions>
  </Modal>
    )
  }

}

export default DetailAlbum