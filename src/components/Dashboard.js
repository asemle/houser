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

    this.state = ({
        got: false
    })
}
    componentDidMount() {
        if (!this.props.user.username) {
            this.props.history.push('/');
        }
        axios.get('/api/properties')
        .then(res => {
            console.log(res.data)
            this.props.updateProperties(res.data)
                this.setState({
                    got: true
                })
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

                {/* <div className="filterBox">
                    <span>List properties with "desired rent" greator than: $</span>
                    <input placeholder="0" value=""/>
                    <button className="filterBtn"> Filter </button>
                    <button className="resetBtn"> Reset </button>
                </div> */}

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
