import React, { Component } from "react";
import axios from 'axios';
import { connect } from 'react-redux';
import { updateProperties } from "../ducks/reducer";

class Property extends Component {

    deleteProperty(id) {
        axios.delete(`/api/properties/${id}`).then(response => {
            console.log(response.data);
            this.props.updateProperties(response.data)
        });
    }

    render() {

        const { id, address, city, description, desired_rent, image, loan, monthly_mortgage, name, recommended_rent, state, zip} = this.props;
        return (
            <div className="propertyBox">
                <div className="imageBox">
                    <img src={image} alt="home" />
                </div>

                <div className="propProps">
                    <div className="descriptionWrap">
                        <div className="description">
                            <span className="descName">{name}</span>
                            <span className="descdesc">{description}</span>
                        </div>
                    </div>

                    <div className="detailWrap">
                        <div className="details">
                            <span>Loan: ${loan}</span>
                            <span>Monthly Mortgage: ${monthly_mortgage}</span>
                            <span>Recommended Rent: ${recommended_rent}</span>
                            <span>Desired Rent: ${desired_rent}</span>
                            <span>Address: {address}</span>
                            <span>City: {city}</span>
                            <span>State: {state}</span>
                            <span>Zip: {zip}</span>
                            <span className="delete" onClick={() => this.deleteProperty(id)} alt="delete"><i className="fas fa-times"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        )
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

export default connect(mapStateToProps, actions)(Property);
