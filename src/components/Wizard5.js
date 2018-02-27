import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router';

import { reset, updateDesiredRent } from '../ducks/reducer.js';

class Wizard5 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }

        this.addToDatabase = this.addToDatabase.bind(this);
    }
    componentDidMount() {
        if (!this.props.user.username) {
            this.props.history.push('/');
        }
    }
    addToDatabase() {
        const { user, name, description, address,
            city, stateA, zip, image, loan,
            mortgage, desiredRent } = this.props;
        const userid = user.id;

        axios.post('/api/properties', {
            name,
            description,
            address,
            city,
            stateA,
            zip,
            image,
            loan,
            mortgage,
            desiredRent,
            userid
        }).then(res => {

        })
        this.props.reset(this.props.user);
    }

    render() {

        console.log(this.props.user.id)
        const { user, reset, desiredRent, updateDesiredRent, mortgage } = this.props;

        const recommended = parseInt(mortgage, 10) * 1.25;

        return (
            <div className="dashboard">
                <Header />
                <div className="wizardHeader">
                    <span> Add new listing </span>
                    <button onClick={() => {reset(user); this.props.history.push('/dashboard');}}> Cancel </button>
                </div>

                <div className="wizNav">
                    <h3>Step 5</h3>
                    <div className="circleBox">
                        <div className="circle active"><i class="fas fa-check"></i></div>
                        <div className="circle active"><i class="fas fa-check"></i></div>
                        <div className="circle active"><i class="fas fa-check"></i></div>
                        <div className="circle active"><i class="fas fa-check"></i></div>
                        <div className="circle active"></div>
                    </div>
                </div>

                <div className="wizWrap wiz2">

                    <span className="reco">Recommended Rent ${recommended}</span>
                    <div className="propTitle rent">
                        <span>Desired Rent</span>
                    </div>
                    <input className="propInput" type="number" onChange={(e) => updateDesiredRent(e.target.value)} value={desiredRent} />

                    <div className="nextBox prevBox">
                        <Link to="/wizard/4"><button>Previous Step</button></Link>
                        <button className="complete" onClick={() => {this.addToDatabase; this.props.history.push('/dashboard')}}>Complete</button>
                    </div>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    const { user, name, description, address,
        city, stateA, zip, image, loan,
        mortgage, desiredRent } = state;
    return {
        user,
        name,
        description,
        address,
        city,
        stateA,
        zip,
        image,
        loan,
        mortgage,
        desiredRent,
    }
}

let actions = {
    reset,
    updateDesiredRent
}

export default connect(mapStateToProps, actions)(Wizard5);
