export const reduce = (state, action) => {
    switch(action.type){
        case "INC": return state = state + 1;
        case "DEC": return state = state - 1;
        default: return state
    }
}