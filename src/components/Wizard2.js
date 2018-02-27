import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { reset, updateAddress, updateCity, updateState, updateZip } from '../ducks/reducer.js';

class Wizard2 extends Component {

    componentDidMount() {
        if (!this.props.user.username) {
            this.props.history.push('/');
        }
    }

    render() {

        const { user, address, city, stateA, zip, reset, updateAddress, updateCity, updateState, updateZip } = this.props;

        return (
            <div className="dashboard">
                <Header />
                <div className="wizardHeader">
                    <span> Add new listing </span>
                    <button onClick={() => { reset(user); this.props.history.push('/dashboard'); }}> Cancel </button>
                </div>

                <div className="wizNav">
                    <h3>Step 2</h3>
                    <div className="circleBox">
                        <div className="circle active"><i className="fas fa-check"></i></div>
                        <div className="circle active"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                </div>

                <div className="wizWrap wiz2">
                    <div className="propTitle">
                        <span>Address</span>
                    </div>
                    <input className="propInput" onChange={(e) => updateAddress(e.target.value)} value={address} />
                    
                    <div className="addressMiddle">
                        <div className="middleHalf">
                            <div className="propTitle">
                                <span>City</span>
                            </div>
                            <input className="propInput" onChange={(e) => updateCity(e.target.value)} value={city} />
                        </div>
                        <div className="middleHalf">
                            <div className="propTitle">
                                <span>State</span>
                            </div>
                            <input className="propInput" onChange={(e) => updateState(e.target.value)} value={stateA} />
                        </div>
                    </div>
                    <div className="addressMiddle">
                        <div className="middleHalf">
                            <div className="propTitle">
                                <span>Zip</span>
                            </div>
                            <input className="propInput" onChange={(e) => updateZip(e.target.value)} value={zip} />
                        </div>
                    </div>
                    <div className="nextBox prevBox">
                        <Link to="/wizard/1"><button>Previous Step</button></Link>
                        <Link to="/wizard/3"><button>Next Step</button></Link>
                    </div>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    const { address, city, stateA, zip, user } = state;
    return {
        address,
        city,
        stateA,
        zip,
        user
    }
}

let actions = {
    updateAddress,
    updateCity,
    updateState,
    updateZip,
    reset
}

export default connect(mapStateToProps, actions)(Wizard2);
