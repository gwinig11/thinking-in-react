import React, { Component } from 'react';
import './App.css';
import SummaryItem from './SummaryItem';
import Total from './Total';


class Summary extends Component {


    render() {
        const summary = Object.keys(this.props.selected)
        .map(key => {
            return (
                <SummaryItem 
                theKey = {key}
                summaryItem = {this.props.selected[key]}
                />          
                )
            }
        )    
        const total = Object.keys(this.props.selected)
        .reduce((acc, curr) => acc + this.props.selected[curr].cost, 0); 

        return (
            
            <section className="main__summary">
                <h3>NEW GREENLEAF 2018</h3>
                {summary}
                <Total total={total} />
            </section>
        )
    }
}

export default Summary;