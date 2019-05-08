import React, { Component } from 'react';
class ProductListItem extends Component {
    render() {
        const options = this.props.feature.map((item, index) => {
            const selectedClass = item.name === this.props.selected[this.props.key] ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass;
            return <li key={index} className="feature__item">
                <div className={featureClass}

                    onClick={e => this.props.updateFeature(this.props.key, item)}>
                    {item.name}
                    ({new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                        .format(item.cost)})
          </div>
            </li>
        })
        return <div className="feature" key={this.props.key}>
            <div className="feature__name">{this.props.key}</div>
            <ul className="feature__list">
                {options}
            </ul>
        </div>
    }
}

export default ProductListItem;