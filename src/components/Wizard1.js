import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { reset, updateName, updateDescription } from '../ducks/reducer.js';

class Wizard1 extends Component {

    componentDidMount() {
        if (!this.props.user.username) {
            this.props.history.push('/');
        }
    }
    
    render() {

        const {user, reset, updateDescription, updateName, name, description} = this.props;

        return (
            <div className="dashboard">
                <Header />
                <div className="wizardHeader">
                    <span> Add new listing </span>
                    <button onClick={() => { reset(user); this.props.history.push('/dashboard'); }}> Cancel </button>
                </div>

                <div className="wizNav">
                    <h3>Step 1</h3>
                    <div className="circleBox">
                        <div className="circle active"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                </div>

                <div className="wizWrap">
                    <div className="propTitle">
                        <span>Property Name</span>
                    </div>

                    <input className="propInput" onChange={(e) => updateName(e.target.value)} value={name}/>
                    <div className="propTitle propDescr">
                        <span>Property Description</span>
                    </div>
                    <textarea className="propText" onChange={(e) => updateDescription(e.target.value)} value={description}></textarea>
                    <div className="nextBox">
                        <Link to="/wizard/2"><button>Next Step</button></Link>
                    </div>
                </div>
            </div>
            
        )
    }
}

function mapStateToProps(state) {
    const { name, description, user } = state;
    return {
        name, 
        description, 
        user
    }
}

let actions = {
    updateName,
    updateDescription,
    reset
}

export default connect(mapStateToProps, actions)(Wizard1);