import React, { Component } from 'react';
import './App.css';
import ProductListItem from  './ProductListItem.js';


class Features extends Component {

updateFeature(key, item){
    console.log(key)
    console.log(item)
    this.props.updateFeature(key,item)
}

  render() {
    const features = Object.keys(this.props.features)
    // console.log(features)
    .map(key => {
      return (
        <ProductListItem 
        updateFeature={this.updateFeature.bind(this)}
        feature = {this.props.features[key]}
        key = {key}
        selected = {this.props.selected}/>)
      });
      
    
    return (
        <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        { features }
      </section>
    );
  }
}

Features.defaultProps = {
    selected: {}
}

export default Features;