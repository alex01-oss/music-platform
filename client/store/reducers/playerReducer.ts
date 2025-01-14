import { PlayerAction, PlayerActionTypes, playerState } from "@/types/player"

const initionalState: playerState = {
    pause: true,
    active: null,
    duration: 0,
    currentTime: 0,
    volume: 50
}

export const playerReducer = (state = initionalState, action: PlayerAction): playerState => {
    switch (action.type) {
        case PlayerActionTypes.PLAY:
            return {...state, pause: false}
        case PlayerActionTypes.PAUSE:
            return {...state, pause: true}
        case PlayerActionTypes.SET_ACTIVE:
            return {...state, active: action.payload, duration: 0, currentTime: 0}
        case PlayerActionTypes.SET_DURATION:
            return {...state, duration: action.payload}
        case PlayerActionTypes.SET_CURRENT_TIME:
            return {...state, currentTime: action.payload}
        case PlayerActionTypes.SET_VOLUME:
            return {...state, volume: action.payload}
        case PlayerActionTypes.DELETE_TRACK:
            return {...state, active: state.active?._id === action.payload ? null : state.active}
        default:
            return state
    }
}