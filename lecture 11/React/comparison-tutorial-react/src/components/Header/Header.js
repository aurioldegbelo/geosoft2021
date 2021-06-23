import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component
{

    constructor(props)
    {
      super(props);
      this.state =  {isToggleOn:false};
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick()
    {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }


    render() {

      let menuActive = this.state.isToggleOn ? 'is-active':'';

        return (
          
      <div className="navbar has-shadow">
      <div className="container">
        <div className="navbar-start">
          <a className="navbar-item"> My Company </a> 
         </div>   
         <span className={"navbar-burger "+menuActive} onClick={this.handleClick}>
           <span></span>
           <span></span>
           <span></span>
          </span> 

        <div className={"navbar-end navbar-menu "+menuActive}>

            <Link to="/" className="navbar-item r-item"> Home </Link>
            <Link to="/" class="navbar-item r-item"> Features </Link>
            <Link to="test" class="navbar-item r-item"> About </Link>
            <Link to="faq" class="navbar-item r-item"> FAQ </Link>

          <div className="navbar-item">
              <p className="control">
                <a className="button is-primary is-outlined"> 
                  <span className="icon">
                      <i className="fas fa-download"></i>
                  </span> 
                  <span> Join now</span>
                </a>
              </p>
          </div>
      </div> 
      </div>
    </div>



        );
      }

}

export default Header;