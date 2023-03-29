export const GET_DETAILS = "GET_DETAILS";

const initialState = {
    details: [
        {
            id: 1,
            name: "sanjeet",
            email: "sanjeet@gmail.com",
            phone: "7223930688",
            country: "india"
        },
        {
            id: 2,
            name: "mayank",
            email: "mayank@gmail.com",
            phone: "7223930688",
            country: "uk"
        },
        {
            id: 3,
            name: "anjali",
            email: "anjali@gmail.com",
            phone: "81031552365",
            country: "sk"
        },
        {
            id: 4,
            name: "jack",
            email: "jack@gmail.com",
            phone: "9685324351",
            country: "india"
        },
    ]
};



const Reducer = (state = initialState, Action) => {
    switch (Action.type) {
        case GET_DETAILS:
            return state;
        default:
            return state;

    }
};
export default Reducer;