/* import PropTypes from 'prop-types' */
import React, { Component } from 'react'
import './Navbar.css';
import { Link } from "react-router-dom";
export class Navbar extends Component {
  /* static propTypes = {} */
  
  render() {
    let count = 1;
    //const NavLink = document.querySelector('.Nav');
    const func = ()=>{
      let NavLink = document.querySelector('.Nav');
      if(count === 1)
      {
        NavLink.classList.add('active')
        count = 0
      }
      else
      {
        NavLink.classList.remove('active')
        count = 1
      }
    }
    return (
      <div className='Navbar'>
        <h2 className='Title my-2'><Link to="/">Khabriwala</Link></h2>
        <button onClick={func}  className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <nav className='Nav' id='Nav'>
          <ul className='Lists mx-5 my-2'>
            <li><Link to="/general">General</Link></li>
            <li><Link to="/health">Health</Link></li>
            <li><Link to="/business">Business</Link></li>
            <li><Link to="/entertainment">Entertainment</Link></li>
            <li><Link to="/science">Science</Link></li>
            <li><Link to="/technology">Technology</Link></li>
            <li><Link to="/sports">Sports</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar