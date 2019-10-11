1. What problem does the context API help solve?
    -Global. No need to pass props.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    -Actions: Objects that desribes to reducer what event happened.
    -Reducers: Updates state based on actions.
    -Store: A single point where everything is located and accessed.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    -Component state is stored and used locally. Best for small projects.
    App state is in one global location. Best for large projects.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    -Middleman. Intercepts data and determines proper action: pass the data on, stop the data...

1. What is your favorite state management system you've learned and this sprint? Please explain why!
    -Redux. Last one we learned, only one I remember.
