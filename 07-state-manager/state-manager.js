let StateManager = (() => {
    let _currentState = undefined,
        _subscribers = [],
        _reducer = undefined;
        _init_action = { type : '@@INIT_ACTION' }

    function getState(){
        return _currentState;
    }

    function subscribe(callbackFn){
        _subscribers.push(callbackFn)
    }

    // private utility function
    function triggerChange(){
        _subscribers.forEach(fn => fn())
    }

    function dispatch(action){
        let newState = _reducer(_currentState, action)
        if (newState === _currentState) return;
        _currentState = newState
        triggerChange()
    }

    function createStore(reducer){
        if (typeof reducer !== 'function')
            throw new Error("reducer required to create a store")
        _reducer = reducer;
        _currentState = reducer(undefined, _init_action);
        const store = { getState, dispatch, subscribe }
        return store;
    }

    return { createStore }
})()