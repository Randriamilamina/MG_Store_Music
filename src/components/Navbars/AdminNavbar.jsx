import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Modal
} from "reactstrap";
import _ from 'lodash'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import { AlbumAPI } from "../../api";
import PropTypes from "prop-types"; 

let  nouveauGroupe={}
nouveauGroupe.membres = [];
let arrayFinal=[];
class AdminNavbar extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }
  
  constructor(props,context) {
  super(props, context);
    this.state = {
      collapseOpen: false,
      modalSearch: false, value: '' ,
      sources:[],titre:[], isLoading: false,
      isError: false,
      results: [],_isMounted:false,  source : _.times(5, () => ({
        title: '',
        description: '',
        image: '',
        price: '',
      })),
      color: "navbar-transparent"
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateColor);
 

  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateColor);
  }

  getResultTitre =  async(value) =>{
    let arrayFinal=[];
    if(value !== null){
      value.map((m,index)=> {
        arrayFinal.push(m.title);
      })
      return  arrayFinal;
    }
  }

  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  updateColor = () => {
    if (window.innerWidth < 993 && this.state.collapseOpen) {
      this.setState({
        color: "bg-white"
      });
    } else {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  // this function opens and closes the collapse on small devices
  toggleCollapse = () => {
    if (this.state.collapseOpen) {
      this.setState({
        color: "navbar-transparent"
      });
    } else {
      this.setState({
        color: "bg-white"
      });
    }
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  // this function is to open the Search modal
  toggleModalSearch = () => {
    this.setState({
      modalSearch: !this.state.modalSearch
    });
  };
  
handleResultSelect = (e, { result }) => {
  
  this.setState({ value: result.title})
  console.log("name selectionner  "+result.title);
  if(result.title != null){
   // this.props.history.push(`/admin/metalica/${result.title}`);
    this.props.history.push({
      pathname: '/admin/metalica/',
      search: '?query=abc',
      state: { paramsIDName: result.title }
    })
  }
}



handleSearchChange =  (e, { value }) => {
  this.setState({ isLoading: true, value })

  this.setState({ _isMounted: false})
  console.log("valeur recherche "+value)
  let obj = {newName: ''};
 
  setTimeout(() => {
    if (this.state.value.length < 1) return this.setState(this.state)

    const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
    const isMatch = (result) => re.test(result.title)

    const getDataPromise = () => new Promise((resolve, reject) => {  
      setTimeout(function() {
        resolve(AlbumAPI.getAllSearchFullText(value));
      }, 200);
      });  
    const processDataAsycn = async () => {  
      let data = await getDataPromise();  
      data = await getDataPromise(data);  
      return data;  
    };  
    processDataAsycn().then((data) => {  
     // console.log('Data from processDataAsycn() with async( When promise gets resolved ): ' + JSON.stringify(data));  
      if(nouveauGroupe.membres.length>0){
        nouveauGroupe.membres.splice(0,nouveauGroupe.membres.length);
      }
      //console.log('taille  from processDataAsycn() nouveauGroupe.membres.length ' +nouveauGroupe.membres.length);  

      data.map((m,index)=> {
        let membre = {};     
        //console.log('objet result name  returned: ' +m.name);
 
        membre.title = m.name
        membre.image=m.picture;
        membre.price='';
        membre.description='';
      //membre.picture = m.picture
      nouveauGroupe.membres.push(membre);
         if(data.length===nouveauGroupe.membres.length-1){
        console.log('  fin promise returned:----------- ');

      }
      
       });
      this.setState({source:nouveauGroupe.membres});
     /* console.log('taillupdatedNums v  returned: ' +this.state.source.length);
      console.log('type : ' + Object.values(JSON.stringify(this.state.source)));

      console.log('returned: ' + JSON.stringify(_.filter(this.state.source, isMatch)));
      console.log('JSON ---------- : ' + JSON.stringify(this.state.source)); 
 */
      this.state._isMounted=true;
      console.log('created promise '+this.state._isMounted);
      this.state._isMounted && this.setState(prevState => {
        const newHobbiesList = _.filter(prevState.source, isMatch);
        //console.log('objet newHobbiesList '+this.newHobbiesList);
  
        return { isLoading: false,results: newHobbiesList };
      });

    
    }).finally((function() {
   })).catch((error) => {  
      console.log('Error from processDataAsycn() with async( When promise gets rejected ): ' + error);  
    });
   
   

   
   
  }, 300)

  

}

  render() {

    const { source,_isMounted} = this.state
    if(_isMounted){
     
    }

    const { isLoading, value, results} = this.state

    //const [ isLoading, value, results ] = initialState)
    return (
      <>
        <Navbar
          className={classNames("navbar-absolute", this.state.color)}
          expand="lg"
        >
          <Container fluid>
            <div className="navbar-wrapper">
              <div
                className={classNames("navbar-toggle d-inline", {
                  toggled: this.props.sidebarOpened
                })}
              >
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={this.props.toggleSidebar}
                >
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                {this.props.brandText}
              </NavbarBrand>
            </div>
            <button
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navigation"
              data-toggle="collapse"
              id="navigation"
              type="button"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <Collapse navbar isOpen={this.state.collapseOpen}>
              <Nav className="ml-auto" navbar>
                <InputGroup className="search-bar">
                  <Button
                    color="link"
                    data-target="#searchModal"
                    data-toggle="modal"
                    id="search-button"
                    onClick={this.toggleModalSearch}
                  >
                    <i className="tim-icons icon-zoom-split" />
                    <span className="d-lg-none d-md-block">Search</span>
                  </Button>
                </InputGroup>
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    caret
                    color="default"
                    data-toggle="dropdown"
                    nav
                  >
                    <div className="notification d-none d-lg-block d-xl-block" />
                    <i className="tim-icons icon-sound-wave" />
                    <p className="d-lg-none">Notifications</p>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-navbar" right tag="ul">
                    <NavLink tag="li">
                      <DropdownItem className="nav-item">
                        Mike John responded to your email
                      </DropdownItem>
                    </NavLink>
                    <NavLink tag="li">
                      <DropdownItem className="nav-item">
                        You have 5 more tasks
                      </DropdownItem>
                    </NavLink>
                    <NavLink tag="li">
                      <DropdownItem className="nav-item">
                        Your friend Michael is in town
                      </DropdownItem>
                    </NavLink>
                    <NavLink tag="li">
                      <DropdownItem className="nav-item">
                        Another notification
                      </DropdownItem>
                    </NavLink>
                    <NavLink tag="li">
                      <DropdownItem className="nav-item">
                        Another one
                      </DropdownItem>
                    </NavLink>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    caret
                    color="default"
                    data-toggle="dropdown"
                    nav
                    onClick={e => e.preventDefault()}
                  >
                    <div className="photo">
                      <img alt="..." src={require("assets/img/anime3.png")} />
                    </div>
                    <b className="caret d-none d-lg-block d-xl-block" />
                    <p className="d-lg-none">Log out</p>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-navbar" right tag="ul">
                    <NavLink tag="li">
                      <DropdownItem className="nav-item">{results.title}</DropdownItem>
                    </NavLink>
                    <NavLink tag="li">
                      <DropdownItem className="nav-item">Settings</DropdownItem>
                    </NavLink>
                    <DropdownItem divider tag="li" />
                    <NavLink tag="li">
                      <DropdownItem className="nav-item">Log out</DropdownItem>
                    </NavLink>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <li className="separator d-lg-none" />
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        <Modal
          modalClassName="modal-search"
          isOpen={this.state.modalSearch}
          toggle={this.toggleModalSearch}
        >
          <div className="modal-header">
            
          <Search
            fluid
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            value={value}
            {...this.props}
          />
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={this.toggleModalSearch}
            >
              <i className="tim-icons icon-simple-remove" />
            </button>
          </div>
        </Modal>
      </>
    );
  }
}

export default AdminNavbar;
