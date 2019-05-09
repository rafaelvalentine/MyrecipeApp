import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'
export default class Navbar extends Component {

  static defaultProps = {
onNewRecipe(){}
  }
  static propTypes = {
    onNewRecipe:PropTypes.func
  }
  render() {
    return (
      <div className='navbar'>
        <p>Recipe App</p>
        <ul className='navbar-list'>
        <li onClick={this.props.onNewRecipe}>New Recipes</li>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    )
  }
}
