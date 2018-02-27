let initialState = {
    user: {},
    name: '',
    description: '',
    address: '',
    city: '',
    stateA: '',
    zip: '',
    image: '',
    loan: 0,
    mortgage: 0,
    desiredRent: 0,
    properties: [],
}

const UPDATE_USER = "UPDATE_USER";
const LOGOUT = "LOGOUT";

const RESET = "RESET";
const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_DESCRIPTION = "UPDATE_DESCRIPTION";


const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIP = "UPDATE_ZIP";
const UPDATE_IMAGE = "UPDATE_IMAGE";
const UPDATE_LOAN = "UPDATE_LOAN";
const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
const UPDATE_DESIRED_RENT = "UPDATE_DESIRED_RENT";

const UPDATE_PROPERTIES = "UPDATE_PROPERTIES";


export default function (state = initialState, action) {
    let { payload } = action;
    switch (action.type) {

        case UPDATE_USER:
            return Object.assign({}, state, { user: Object.assign({}, payload) });
        case LOGOUT:
            return Object.assign({}, state, { user: {}});
        case RESET:
            return Object.assign({}, payload);
        case UPDATE_NAME:
            return Object.assign({}, state, { name: payload });
        case UPDATE_DESCRIPTION:
            return Object.assign({}, state, { description: payload })
        case UPDATE_ADDRESS:
            return Object.assign({}, state, { address: payload })
        case UPDATE_CITY:
            return Object.assign({}, state, { city: payload })
        case UPDATE_STATE:
            return Object.assign({}, state, { stateA: payload })
        case UPDATE_ZIP:
            return Object.assign({}, state, { zip: payload })
        case UPDATE_IMAGE:
            return Object.assign({}, state, { image: payload })
        case UPDATE_LOAN:
            return Object.assign({}, state, { loan: payload })
        case UPDATE_MORTGAGE:
            return Object.assign({}, state, { mortgage: payload })
        case UPDATE_DESIRED_RENT:
            return Object.assign({}, state, { desiredRent: payload })
        case UPDATE_PROPERTIES:
            return Object.assign({}, state, { properties: payload })
        default: return state;
    }
}


export function updateUser(user) {
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export function logout() {
    return {
        type: LOGOUT,
        payload: {}
    }
}

export function reset(user) {
    return {
        type: RESET,
        payload: {
            user: user,
            name: '',
            description: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            image: '',
            loan: 0,
            mortgage: 0,
            desiredRent: 0,
            properties: []

        }
    }
}

export function updateName(name) {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}

export function updateDescription(description) {
    return {
        type: UPDATE_DESCRIPTION,
        payload: description
    }
}

export function updateAddress(address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateState(stateA) {
    return {
        type: UPDATE_STATE,
        payload: stateA
    }
}

export function updateZip(zip) {
    return {
        type: UPDATE_ZIP,
        payload: zip
    }
}

export function updateImage(image) {
    return {
        type: UPDATE_IMAGE,
        payload: image
    }
}

export function updateLoan(loan) {
    return {
        type: UPDATE_LOAN,
        payload: loan
    }
}

export function updateMortgage(mortgage) {
    return {
        type: UPDATE_MORTGAGE,
        payload: mortgage
    }
}

export function updateDesiredRent(rent) {
    return {
        type: UPDATE_DESIRED_RENT,
        payload: rent
    }
}

export function updateProperties(properties) {
    return {
        type: UPDATE_PROPERTIES,
        payload: properties
    }
}


