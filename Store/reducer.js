const initialState = {
    screen:'Home',
}



 const setScreen = (state=initialState,action)=>{


    switch (action.type) {
        case 'setCurrentScreen':
            return{
            ...state,
            screen:action.val
        };
        break;

        default:
            return{
                ...state
            }
            break;
    }
}

export default setScreen;