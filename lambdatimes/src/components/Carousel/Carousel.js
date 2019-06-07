import React, { Component } from 'react';
import { carouselData } from '../../data'

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
        photos: [],
        selectedImage: ''
    }
  }
  componentDidMount(){
    this.setState(prevState => ({
        photos: carouselData,
        selectedImage: carouselData[0]
    }))
  }

  Click = (event) => {
    let newIndex = 0;
    if(event.target === <div className = "left-button">{"<"}</div>)
        newIndex = this.state.photos.indexOf(this.state.selectedImage) === 0 ? this.state.photos.length -1 : this.state.photos.indexOf(this.state.selectedImage)-1;
    else
        newIndex = this.state.photos.indexOf(this.state.selectedImage) === this.state.photos.length-1 ? 0 : this.state.photos.indexOf(this.state.selectedImage)+1;
    
    this.setState(prevState => ({
        selectedImage: this.state.photos[newIndex]
    }))
  }
  
  selectedImage = () => {
    return <img src={`${this.state.selectedImage}`} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.Click}>{"<"}</div>
        <div className="right-button" onClick={this.Click}>{">"}</div>
        {this.selectedImage()}
      </div>
    )
  }
}