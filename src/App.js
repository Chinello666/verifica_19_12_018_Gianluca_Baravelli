import React, { Component } from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './components/body.js';
import Footer from './components/footer.js';
import SocialPost from './components/socialPost.js';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      loader: false
    };
    // this.dataFetch();
  }

  componentDidMount() {
    this.setState({ loader: true });
    this.dataFetch();
    this.setState({ loader: false });
  }

  dataFetch() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(json =>
        this.setState({
          post: json
        })
      );
  }

  render() {
    const { loader, post } = this.state
    return (
      <div className="App">
        <h1>Social Post Verifica</h1>
        
          <SocialPost />
          <ul>
            {
            }
          </ul>
      </div>
        );
      }
    }
    
    
    
    export default App;