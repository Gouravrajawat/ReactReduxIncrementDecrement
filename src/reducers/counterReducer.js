const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 2
    }
    switch (action.type) {
        case 'DECREMENT':
            return state - 2

        default:
            return state
    }
}
export default reducer