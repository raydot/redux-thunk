import store from '../store'

/**
 * Here we are making use of action crreators, which are just functions that 
 * return an action object.
 */

 // Start the fetch, show the loading indicator
export const fetch_post = () => {
    return {
        type: "FETCH_USER"
    }
}

// Used when we get data back, obvs
export const receive_post = post => {
    return {
        type: "FETCHED_USER",
        data: post
    }
}

// Used when we get an error back.
export const receive_error = () => {
    return {
        type: "RECEIVE_ERROR"
    }
}

/**
 *  Reducers are pure functions, hence async operations are out. 
 *  Actions are just plain old objects.
 *  Dispatch accepts an action object as its parameter.
 *  What Thunk does is ay that if an action creator returns a function instead of an object then it simply executes that returning function.
 * 
 *  The returning function can accept two parameters: dispatch and getState
 * 
 *  So to add async to the store, all we do is call the relevant action creators when the data comes back, passing that data to the API.
 * 
 *  receive_post will pass this new data in an action object to the reducer which can then update the application state with the new data.
 */
export const thunk_action_creator = username => {
    const  user = username.replace(/\s/g, "")
    store.dispatch(fetch_post())
    return function(dispatch, getState) {
        return fetch (`https://api.github.coom/users/${user}`)
            .then(data => data.json())
            .then(data => {
                if (data.message === "Not Found") {
                    throw new Error("No such user found!")
                } else dispatch(receive_post(data))
            })
            .catch(err => dispatch(receive_error()))
    }
}