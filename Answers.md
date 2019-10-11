1. What problem does the context API help solve?

    Context API solves the problem of prop-drilling for commonly used values by creating a global data store which can be accessed by individual components, obviating the need for the Parent --> child -> grandchild construct of passing props.


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    actions: actions are objects that specify an action type held in the respective reducer, and also pass a payload value or object to the reducer which applies the updated state to the store. 

    reducers: reducers are like buffers that stand between the action creator and the state held in the store. Reducers accept a changed state object payload, and then based on the specified action type, applies the changes to state held in the payload, and then returns a new object as the updated state in the store. 

    store: the store is the single source of truth. It is a single object that contains the application state. action creators manipulate state data and pass that changed piece of state along with an action type to the reducer, which applies the change to state in a specified way, and then returns that updated object to the store. The single source of truth object in the store isn't   mutated, but replaced by a cloned and updated state object, which is then accessed by the application. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    application state is the 'global' state held in the store. This is the most current version of state data that is actively consumed by the applications components. 

    Component state is the 'local' state. It exists within that component, but is not passed around or accessed elsewhere in the app (unless that local state is sent as an action to update the global state in the store). It allows the storage and updating of component specific data (like change handlers for form data).

    Global state should be used when there is a larger/complex state object or multiple state objects, and components need to access specific slices of that larger state object. Local state is sufficient for smaller apps with manageable/simple state objects that can easily be passed around via props, or when the state is only consumed and not manipulated/updated.


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux reducers are synchronous. In order to do asynchronous operations before the action is passed to the reducer, thunk can be implemented. It allows asynchronous operations by sitting between the action creator and the reducer, intercepting calls to action creators and assessing what has been returned. When the object returned is data, thunk connects the action to the action type like a normal synchronous operation. If the object returned is a function, thunk simulates a promise, invokes the function and passes the dispatch function to the called thunk function. 



1. What is your favorite state management system you've learned and this sprint? Please explain why!


    I personally like redux for state management. While the initial setup requires more effort than implementing local parent state or using context API, I think it also scales pretty well. I also like the concept of having an external store in a separate file that acts as a single point of control/single point of truth. My opinion is that being able to connect directly to the store at the component level is more manageable than creating individual contexts for different component groups. 
