import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { reset, updateImage } from '../ducks/reducer.js';

class Wizard3 extends Component {

    componentDidMount() {
        if (!this.props.user.username) {
            this.props.history.push('/');
        }
    }

    render() {

        const { user, reset, image, updateImage } = this.props;

        return (
            <div className="dashboard">
                <Header />
                <div className="wizardHeader">
                    <span> Add new listing </span>
                    <button onClick={() => { reset(user); this.props.history.push('/dashboard'); }}> Cancel </button>
                </div>

                <div className="wizNav">
                    <h3>Step 3</h3>
                    <div className="circleBox">
                        <div className="circle active"><i class="fas fa-check"></i></div>
                        <div className="circle active"><i class="fas fa-check"></i></div>
                        <div className="circle active"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                </div>

                <div className="wizWrap wiz2">

                    <div className="imagePreview">
                        <img src={image} alt="Preview"/>
                    </div>

                    <div className="propTitle">
                        <span>Image URL</span>
                    </div>
                    <input className="propInput" onChange={(e) => updateImage(e.target.value)} value={image} />

                    
                    <div className="nextBox prevBox">
                        <Link to="/wizard/2"><button>Previous Step</button></Link>
                        <Link to="/wizard/4"><button>Next Step</button></Link>
                    </div>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    const { image, user} = state;
    return {
        image,
        user
    }
}

let actions = {
    updateImage,
    reset
}

export default connect(mapStateToProps, actions)(Wizard3);

