import React, { Component } from 'react';

class SummaryItem extends Component {
    render() {
        
        return(
            <div className="summary__option" key={this.props.theKey}>
            <div className="summary__option__label">{this.props.theKey} </div>
            <div className="summary__option__value">{this.props.summaryItem.name}</div>
            <div className="summary__option__cost">
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                    .format(this.props.summaryItem.cost)}
            </div>
        </div>
        )
    }
}

export default SummaryItem;