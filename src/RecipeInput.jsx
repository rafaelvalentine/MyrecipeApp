import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  './RecipeInput.css'
export default class RecipeInput extends Component {
 static defaultProps ={
   onClose(){},
   onSave(){}
 }
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      instructions: '',
      ingredients: [''],
      img: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleNewIngredients = this.handleNewIngredients.bind(this)
    this.handleChangeIngredients = this.handleChangeIngredients.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e){
    this.setState({[e.target.name]:e.target.value})
  }
  handleNewIngredients(e){
    const {ingredients}= this.state
     this.setState({ingredients:[...ingredients,'']})
  }
  handleChangeIngredients(e){
    const index= Number(e.target.name.split('-')[1])
    const ingredients = this.state.ingredients.map((ing, i)=>(
      i === index ? e.target.value:ing
    ))
    this.setState({ingredients})
  }
  handleSubmit(e){
    e.preventDefault()
    this.props.onSave({...this.state})
    this.setState({
      title: '',
      instructions: '',
      ingredients: [''],
      img: ''
    })
  }
  static PropTypes={
    onSave:PropTypes.func,
    onClose:PropTypes.func
  }
  render () {
    const{onClose}=this.props
    const { title, instructions, ingredients, img } = this.state
    let input = ingredients.map((ingredient, index)=>(
<div className='recipe-form-line'
key={`ingredient-${index}`}
>
  <label>{index+1}.
    <input
    type='text'
    autoComplete='off' 
    name={`ingredient-${index}`}
    value={ingredient}
    size={45}
    placeholder='Ingredient'
    onChange={this.handleChangeIngredients}
    />
  </label>
</div>
    ))
    return (
      <div className='recipe-form-container'>
<form className='recipe-form' onSubmit={this.handleSubmit}>
<button 
type='button'
className='close-button' 
onClick={onClose}
>
  X
  </button>
  <div className='recipe-form-line'>
  <label htmlFor="recipe-title-input">Title</label>
      <input type="text"
      id='title'
      key='title'
      name='title'
      value={title}
      size={42}
      autoComplete='off'
      onChange={this.handleChange}
      />
  </div>
  <label 
  htmlFor="recipes-instructions-input" 
  style={{margin:'5px'}}
  >
  instructions 
  </label>
  <textarea
  key='instructions'
   name="instructions" 
   id="instructions" 
   type="instructions"
   cols="50"
   rows="8" 
   autoComplete='off'
   value={instructions}
   onChange={this.handleChange}
    />
  {input}
  <button 
  type='button'
  onClick={this.handleNewIngredients}
  className='buttons'
  >
  +
  </button>
  <div className="recipe-form-line">
  <label htmlFor="recipe-img-input">Image Url</label>
  <input 
  id="recipe-img-input"
  name="img"
  type="text"
  value={img}
  autoComplete="off"
  size="36"
  placeholder=""
  onChange={this.handleChange}
  />
  </div>
  <button
  className='buttons'
  type='submit'
  style={{alignSelf:'flex-end', marginRight:'0'}}
  >
  SAVE
  </button>
</form>
      </div>
    )
  }
}
