export const GET_POSITIONS = (state) => {
    return state.positions
}
export const GET_POSITION_BY_ID = (state) => (id) => {
    return state.positions.find(position => position.id === id)
}
