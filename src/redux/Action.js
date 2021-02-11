export const setRawList = (list) => {
    return {
        type: 'SET_LIST',
        payload: list    
    }
};

export const setSortingSpeed = (number) => {
    return {
        type: 'SET_SPEED',
        payload: number    
    }
};