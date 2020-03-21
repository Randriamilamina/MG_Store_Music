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
  TabContent,
  TabPane
} from "reactstrap";
import { AlbumAPI } from "../api/index";
import { Placeholder,Embed ,Label,Table,Icon} from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import LoaderApp from "./LoaderApp";
class DetailSong extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      withIcons: 1,loading:true,
      paramsKey:'',
      descriptionSongInfo:{},paramsKeysearchTextArtistName:'',paramsKeysearchTextAlbumName:'',paramsKeysearchTextSongName:'',paramsKeysearchImageAlbum:'',paramsKeysearchTextArtiste:''
    };
  }

  componentWillMount() {

    if(this.props != undefined  && this.props !== null && this.props.location.state !=null){

      const { searchTextArtistName,searchTextAlbumName,searchTextSongName ,imagealbum,imageartiste} = this.props.location.state

  
      this.setState({paramsKeysearchTextArtistName:searchTextArtistName})
      this.setState({paramsKeysearchTextAlbumName:searchTextAlbumName})
      this.setState({paramsKeysearchTextSongName:searchTextSongName})
  
      this.setState({paramsKeysearchImageAlbum:imagealbum})
      this.setState({paramsKeysearchIamgeArtiste:imageartiste})
  
      if(searchTextArtistName !== null && searchTextAlbumName !== null && searchTextSongName!== null){
          setTimeout(() => {
              const getDataDetailSongPromise = () => new Promise((resolve, reject) => {  
                setTimeout(function() {
                  resolve(AlbumAPI.getDetailSongByNameFullText(searchTextArtistName,searchTextAlbumName,searchTextSongName));
                }, 200);
                });  
              const processDataAsycn = async () => {  
                let data = await getDataDetailSongPromise();  
                data = await getDataDetailSongPromise(data);  
                return data;  
              };  
              
              let descriptionSong = {}; 
              descriptionSong.listeformat=[]   
              descriptionSong.listeGenre=[]
              descriptionSong.listeProducer=[]   
              descriptionSong.listeMember=[] 
              descriptionSong.listeLRecordsabels=[]
              descriptionSong.listewWriter=[]
              descriptionSong.listeRuntime=[]
              descriptionSong.listeRecorded=[]
  
              processDataAsycn().then((data) => {            
              //console.log('objet result name  returned: ' +m.name);        
              descriptionSong.id = data._id
              descriptionSong.name = data.albums.songs.title
              descriptionSong.nameArtiste = data.name
              descriptionSong.description = data.albums.songs.abstract
              descriptionSong.rank =data.albums.songs.rank
              descriptionSong.bpm =data.albums.songs.bpm
              descriptionSong.gain = data.albums.songs.gain
              descriptionSong.language =data.albums.songs.language
              descriptionSong.begin = data.albums.songs.begin
              descriptionSong.end = data.albums.songs.end
              descriptionSong.publicationDateAlbum = data.albums.songs.publicationDate
              descriptionSong.lengthAlbum = data.albums.songs.lengthAlbum
              descriptionSong.urlSong = data.albums.songs.urlSong
              descriptionSong.lyrics = data.albums.songs.lyrics
              descriptionSong.listeRecorded = data.albums.songs.recorded
              descriptionSong.releaseDate = data.albums.songs.releaseDate
              descriptionSong.listeRuntime = data.albums.songs.runtime
              descriptionSong.subject = data.albums.songs.subject
  
              descriptionSong.urlITunes = data.albums.songs.urlITunes
              descriptionSong.urlAmazon = data.albums.songs.urlAmazon
              descriptionSong.urlWikipedia = data.albums.songs.urlWikipedia
              descriptionSong.urlSpotify = data.albums.songs.urlSpotify
              descriptionSong.urlAllmusic = data.albums.songs.urlAllmusic
              descriptionSong.urlYouTube = data.albums.songs.urlYouTube
              descriptionSong.urlDeezer = data.albums.songs.urlDeezer   
              
              descriptionSong.listeformat =data.albums.songs.format
              descriptionSong.listeGenre =data.albums.songs.genre
              descriptionSong.listeProducer= data.albums.songs.producer
              descriptionSong.listeLRecordsabels= data.albums.songs.recordLabel
              descriptionSong.listewWriter =data.albums.songs.writer
              
                  this.setState({descriptionSongInfo: descriptionSong,loading:false})
      
      
              }).finally((function() {
             })).catch((error) => {  
                console.log('Error from processDataAsycn() with async( When promise gets rejected ):  DETAIL SONG' + error);  
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
backDetail=(value)=>{
  if(value != null){
    // this.props.history.push(`/admin/metalica/${result.title}`);
     this.props.history.push({
       pathname: '/admin/metalica/',
       search: '?query=abc',
       state: { paramsIDName: value }
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
    const {loading,descriptionSongInfo} = this.state;
    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">

            <Embed
                id={descriptionSongInfo.urlYouTube ? descriptionSongInfo.urlYouTube:'O6Xo21L0ybE'}
                placeholder='/images/image-16by9.png'
                source='youtube'
            />           
   </Col>
            <Col md="4">
            <Card className="card-user">

              {!loading &&  descriptionSongInfo  ?
              <div>
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => this.backDetail(descriptionSongInfo.nameArtiste)}>
                      <img
                        alt="..."
                        className="avatar"
                        src={this.state.paramsKeysearchIamgeArtiste}
                      />
                          <img
                        alt="..."
                        className="avatar"
                        src={this.state.paramsKeysearchImageAlbum}
                      />
                      <h5 className="title">{descriptionSongInfo.name}</h5>
                      <h5 className="title">{descriptionSongInfo.id}</h5>
                    </a>
                    <p className="descriptionSong">Decription</p>
                    <p className="descriptionSong">Publication Date  : {descriptionSongInfo. publicationDateAlbum} </p>
                   
                  </div>
                  <div className="card-descriptionSong">
                      { descriptionSongInfo.description && !descriptionSongInfo.lyrics ?descriptionSongInfo.description:<div>{descriptionSongInfo.lyrics}</div>}
                  </div>
                </CardBody>
                <CardFooter> 
                  <div className="button-container">
                  <a href={descriptionSongInfo.urlITunes}><Icon circular inverted color='blue' name='itunes'  size='big' /></a>
                  <a href={descriptionSongInfo.urlAmazon}><Icon circular inverted color='blue' name='amazon'  size='big' /></a>
                  <a href={descriptionSongInfo.urlWikipedia}><Icon circular inverted color='blue' name='wikipedia w'  size='big' /></a>
                  <a href={descriptionSongInfo.urlSpotify}><Icon circular inverted color='blue' name='spotify'  size='big' /></a>
                  <a href={descriptionSongInfo.urlAllmusic}><Icon circular inverted color='blue' name='music'  size='big' /></a>
                  <a href={descriptionSongInfo.urlYouTube}><Icon circular inverted color='blue' name='youtube'  size='big' /></a>
                  <a href={descriptionSongInfo.urlDeezer}><Icon circular inverted color='blue' name='feed'  size='big' /></a>

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
            <Col md="12">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                     
                      <h5 className="title">Details du Song</h5>
                    </a>
                  </div>
                  <div className="card-descriptionSong">
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
               {!loading && descriptionSongInfo ?
               <div>
               <tr>
               <td>
                 <FormGroup check>
                   <Label check>
                   Duration
                   </Label>
                 </FormGroup>
               </td>
               <td>
                 <FormGroup check>
                  
                   <Label as='a' color='red' tag>
                   {descriptionSongInfo.rank}
                  </Label>
                 </FormGroup>
               </td>
             </tr>
             <tr>
               <td>
                 <FormGroup check>
                   <Label check>
                   Rank
                   </Label>
                 </FormGroup>
               </td>
               <td>
                 <FormGroup check>
                  
                   <Label as='a' color='red' tag>
                   {descriptionSongInfo.rank}

                  </Label>
                 </FormGroup>
               </td>
             </tr>
             <tr>
               <td>
                 <FormGroup check>
                   <Label check>
                   Release Date
                   </Label>
                 </FormGroup>
               </td>
               <td>
                 <FormGroup check>
                   
                   <Label as='a' color='red' tag>
                   {descriptionSongInfo.releaseDate}


                  </Label>
                 </FormGroup>
               </td>
             </tr>
             <tr>
               <td>
                 <FormGroup check>
                   <Label check>
                   Begin Date
                   </Label>
                 </FormGroup>
               </td>
               <td>
                 <FormGroup check>
                   <Label as='a' color='red' tag>
                   {descriptionSongInfo.begin}


                  </Label>
                 </FormGroup>
               </td>
             </tr>
             <tr>
               <td>
                 <FormGroup check>
                   <Label check>
                   End Date
                   </Label>
                 </FormGroup>
               </td>
               <td>
                 <FormGroup check>
                   <Label as='a' color='red' tag>
                   {descriptionSongInfo.end}

                  </Label>
                 </FormGroup>
               </td>
             </tr>
             <tr>
               <td>
                 <FormGroup check>
                   <Label check>
                   Recorded
                   </Label>
                 </FormGroup>
               </td>
               <td>
                 <FormGroup check>
                   { descriptionSongInfo && descriptionSongInfo.listeRecorded && descriptionSongInfo.listeRecorded.map((objetRecord, index) => (
                 
                    <Label as='a' color='red' tag>
                    {objetRecord} 
 
                   </Label>
                     ))}
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
                
                   { descriptionSongInfo && descriptionSongInfo.listeGenre && descriptionSongInfo.listeGenre.map((objetGenre, index) => (
                  
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
                   Format
                   </Label>
                 </FormGroup>
               </td>
               <td>
                 <FormGroup check>
                  
                   { descriptionSongInfo && descriptionSongInfo.listeformat &&  descriptionSongInfo.listeformat.map((objetFormat, index) => (
                  
                   <Label as='a' color='red' tag>
                   {objetFormat}  

                </Label>
                     ))}
                 </FormGroup>
               </td>
             </tr>
             <tr>
               <td>
                 <FormGroup check>
                   <Label check>
                   Writer
                   </Label>
                 </FormGroup>
               </td>
               <td>
                 <FormGroup check>
                
                   { descriptionSongInfo && descriptionSongInfo.listewWriter && descriptionSongInfo.listewWriter.map((objetWriter, index) => (
                   
                   <Label as='a' color='red' tag>
                   {objetWriter}  
                </Label>
                     ))}
                 </FormGroup>
               </td>
             </tr>
             <tr>
               <td>
                 <FormGroup check>
                   <Label check>
                   producers
                   </Label>
                 </FormGroup>
               </td>
               <td>
                 <FormGroup check>
                 
                   { descriptionSongInfo && descriptionSongInfo.listeProducer && descriptionSongInfo.listeProducer.map((objetProducer, index) => (
                  
                    <Label as='a' color='red' tag>
                     {objetProducer}   
                 </Label>
                     ))}
                 </FormGroup>
               </td>
             </tr>
             <tr>
               <td>
                 <FormGroup check>
                   <Label check>
                   RecordLabel
                   </Label>
                 </FormGroup>
               </td>
               <td>
                 <FormGroup check>
                   
                   {  descriptionSongInfo && descriptionSongInfo.listeLRecordsabels &&  descriptionSongInfo.listeLRecordsabels.map((objetRecord, index) => (
                   
                    <Label as='a' color='red' tag>
                     {objetRecord}   
                </Label>
                     ))}
                 </FormGroup>
               </td>
             </tr>
             <tr>
               <td>
                 <FormGroup check>
                   <Label check>
                   Language
                   </Label>
                 </FormGroup>
               </td>
               <td>
                 <FormGroup check>
                   <Label as='a' color='red' tag>
                   {descriptionSongInfo.language}
                </Label>
                 </FormGroup>
               </td>
             </tr>
             <tr>
               <td>
                 <FormGroup check>
                   <Label check>
                   BPM
                   </Label>
                 </FormGroup>
               </td>
               <td>
                 <FormGroup check>
                  
                   <Label as='a' color='red' tag>
                   {descriptionSongInfo.bpm}
                </Label>
                 </FormGroup>
               </td>
             </tr>
             <tr>
               <td>
                 <FormGroup check>
                   <Label check>
                   Gain
                   </Label>
                 </FormGroup>
               </td>
               <td>
                 <FormGroup check>
                  
                   <Label as='a' color='red' tag>
                   {descriptionSongInfo.gain}

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
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default withRouter(DetailSong);
