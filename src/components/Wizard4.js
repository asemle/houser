import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { reset, updateLoan, updateMortgage } from '../ducks/reducer.js';

class Wizard4 extends Component {

    componentDidMount() {
        if (!this.props.user.username) {
            this.props.history.push('/');
        }
    }

    render() {

        const { user, reset, loan, updateLoan, mortgage, updateMortgage } = this.props;

        return (
            <div className="dashboard">
                <Header />
                <div className="wizardHeader">
                    <span> Add new listing </span>
                    <button onClick={() => { reset(user); this.props.history.push('/dashboard'); }}> Cancel </button>
                </div>

                <div className="wizNav">
                    <h3>Step 4</h3>
                    <div className="circleBox">
                        <div className="circle active"><i class="fas fa-check"></i></div>
                        <div className="circle active"><i class="fas fa-check"></i></div>
                        <div className="circle active"><i class="fas fa-check"></i></div>
                        <div className="circle active"></div>
                        <div className="circle"></div>
                    </div>
                </div>

                <div className="wizWrap wiz2">

                    <div className="propTitle">
                        <span>Loan Amount</span>
                    </div>
                    <input className="propInput" type="number" onChange={(e) => updateLoan(e.target.value)} value={loan} />

                    <div className="propTitle mortgage">
                        <span>Monthly Mortgage</span>
                    </div>
                    <input className="propInput" type="number" onChange={(e) => updateMortgage(e.target.value)} value={mortgage} />


                    <div className="nextBox prevBox">
                        <Link to="/wizard/3"><button>Previous Step</button></Link>
                        <Link to="/wizard/5"><button>Next Step</button></Link>
                    </div>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    const { loan, mortgage, user } = state;
    return {
        loan, 
        mortgage, 
        user
    }
}

let actions = {
    updateLoan,
    updateMortgage,
    reset
}

export default connect(mapStateToProps, actions)(Wizard4);


