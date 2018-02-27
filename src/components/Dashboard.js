import React, { Component } from 'react';
import Header from './Header.js';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateProperties } from "../ducks/reducer";
import Property from './Property.js';


class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            desiredRent: 0
        }
    }

    componentDidMount() {
        if (!this.props.user.username) {
            this.props.history.push('/');
        }
        this.getProperties();
    }
    getProperties() {
        axios.get('/api/properties')
            .then(res => {
                this.props.updateProperties(res.data)
            })
    }
    getFiltered() {
        axios.get(`/api/properties?rent=${this.state.desiredRent}`)
        .then(res => {
                this.props.updateProperties(res.data)

            })
    }

    filterChange(x) {
        this.setState({
            desiredRent: x
        })
    }
    render() {

        const { properties } = this.props;

        const propertyListings = properties.map(prop => (
            <Property
                key={prop.propid}
                id={prop.propid}
                address={prop.address}
                city={prop.city}
                description={prop.propdescription}
                desired_rent={prop.desiredrent}
                image={prop.image}
                loan={prop.loanamount}
                monthly_mortgage={prop.monthlymortgage}
                name={prop.propname}
                state={prop.state}
                zip={prop.zip}
            />
        ));


        return (
            <div className="dashboard">
                <Header/>
                <Link to="/wizard/1"><button className="addNew">Add new property</button></Link>

                <div className="filterBox">
                    <span>List properties with "desired rent" greater than: $</span>
                    <input onChange={(e) => this.filterChange(e.target.value)} value={this.state.desiredRent}/>
                    <button onClick={() => this.getFiltered()} className="filterBtn"> Filter </button>
                    <button onClick={() => this.getProperties()}className="resetBtn"> Reset </button>
                </div>

                <div className="listingBox">
                    <span> Home Listings </span>
                    <div className="listings">
                        {propertyListings}
                    </div>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    const { user,
        properties } = state;
    return {
        user,
        properties

    }
}

let actions = {
    updateProperties,
}

export default connect(mapStateToProps, actions)(Dashboard);
