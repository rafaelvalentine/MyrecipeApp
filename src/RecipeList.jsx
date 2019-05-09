import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Recipe from './Recipe'
import './RecipeList.css'
export default class RecipeList extends Component {

  static defaultProps = {
    recipes: [],
    onDelete() {}
  }
static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete:PropTypes.func.isRequired
}

  
  render () {
    const { heading } = this.props
    const recipes = this.props.recipes.map(recipe => (
      <Recipe
      key={recipe.id}
      id={recipe.id}
      title={recipe.title}
      instructions={recipe.instructions}
      ingredients={recipe.ingredients}
      img={recipe.img}
      onDelete={this.props.onDelete}
      />
  ))
    return (
      <div className='recipe-app-div'>
        <h1 className='heading'>{heading}</h1>
        <p className='text'>Hello from the recipe side of life</p>
        <div className='recipe-content-div'>
        {recipes}
        </div>
      
      </div>
    )
  }
}
