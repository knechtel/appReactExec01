import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: 'Por favor, escreva uma dissertação sobre o seu elemento DOM favorito.',
            string:'test'
          };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({string: event.target.value});
    }
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                <hr />
                <CounterOutput value={this.props.str} />
                <br/>
                <input value={this.props.string} onChange={this.handleChange} />
                <br/>
                <button onClick={() => this.props.onStoreResult1(this.state.string)}>Store Result1</button>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        str: state.res.string,
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(10)),
        onSubtractCounter: () => dispatch(actionCreators.subtract(15)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)),
        onStoreResult1: (result) => dispatch(actionCreators.storeResult1(result))

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);