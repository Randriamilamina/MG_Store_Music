import React from 'react'
import { Card,Modal,Button,Image ,Label} from 'semantic-ui-react'
import DetailAlbum from './DetailAlbum'

const src = 'http://e-cdn-images.deezer.com/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/250x250-000000-80-0-0.jpg'


class CardAlbum extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        withIcons: 1
      };
    }

 extra = (name,urlImage,listeSong,nameartiste,urlImageArtiste) => (
      <a>
        <DetailAlbum  nameAlbum={name} imageAlbum={urlImage} imageArtiste={urlImageArtiste} nameArtiste={nameartiste} listeSongAlbum={listeSong}/>
      </a>
    )
    render() {
      const {listeAlbum,nameArtiseGlobale,iamgeartiste} = this.props;
  
      return (
        
      <Card.Group itemsPerRow={4}>
        {listeAlbum.map((objetAlbums, index) => (
                <Card color='red' image={ objetAlbums.cover &&  objetAlbums.cover.medium ? objetAlbums.cover.medium :'https://react.semantic-ui.com/images/wireframe/image.png'}
                 extra={this.extra(objetAlbums.title,objetAlbums.cover &&  objetAlbums.cover.medium ? objetAlbums.cover.medium :'https://react.semantic-ui.com/images/wireframe/image.png',objetAlbums.songs ? objetAlbums.songs:undefined,nameArtiseGlobale,iamgeartiste)}/>
              ))}
      </Card.Group>
      )
    }

}

export default CardAlbum