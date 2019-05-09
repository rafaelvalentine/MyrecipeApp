import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Recipe.css'

export default class Recipe extends Component {
   static propTypes = {
      title:PropTypes.string.isRequired,
      ingredients:PropTypes.arrayOf(PropTypes.string).isRequired,
      instructions:PropTypes.string.isRequired,
      img:PropTypes.string.isRequired,
      id:PropTypes.number.isRequired,
      onDelete:PropTypes.func.isRequired
   }
  render () {
    const { title, img, instructions, onDelete, id } = this.props
    const ingredients = this.props.ingredients.map((ing, index) => (
      <li key={index} className='liStyle'>{ing}</li>
    ))
    return (
      <div className='recipe-card'>
        <div className='recipe-card-image'>
          <img src={img} alt={title} />
        </div>
        <div className='recipe-card-content'>
          <h3 className='recipe-card-title'>{title}</h3>
          <h4>Ingredients: </h4>
          <ul className='recipe-card-list'>
            {ingredients}
          </ul>
          <h4>Instructions:</h4>
          <p>{instructions}</p>
          <button onClick={()=>
            { 
               return onDelete(id)
            }} type="button">DETELE</button>
        </div>


      </div>
    )
  }
}
