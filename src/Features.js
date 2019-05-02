import React, { Component } from 'react';
import './App.css';

class Features extends Component {

updateFeature(key, item){
    console.log(key)
    console.log(item)
    console.log(this.props)
    this.props.updateFeature(key,item)
}

  render() {
    const features = Object.keys(this.props.features)
    .map(key => {
      const options = this.props.features[key].map((item, index) => {
        const selectedClass = item.name === this.props.selected[key] ? 'feature__selected' : '';
        const featureClass = 'feature__option ' + selectedClass;
        return <li key={index} className="feature__item">
          <div className={featureClass}
            
            onClick={e => this.updateFeature(key, item)}>
              { item.name }
              ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(item.cost) })
          </div>
        </li>
      });

      return <div className="feature" key={key}>
        <div className="feature__name">{key}</div>
        <ul className="feature__list">
          { options }
        </ul>
      </div>
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