# React
This framework essentially provides object-oriented programming for UI elements. Each component may be configurable with 
a set of passed parameters `props`. The UI is composed of these reusable objects. They are immutable, so you can think 
of the `props` and class type as parameters passed to a React `Component` factory

# Redux
A global state store. You can think of this as the application context.

# Thunk
A `Thunk` is a function that wraps an expression to delay its evaluation. This allows the function to be used repeatedly 
and asynchronously.
#### anonmymous thunk

```let foo = () => 1 + 2;```

#### non-anonymous thunk

```
const mapStateToProps = state => {
    return { 
        articles: state.articles 
    };
};
```

# Axios
This framework provides async HTTP calls accomplished with promises.

**note:** in single page applications this is where you usually latch token refresh calls, mix in API keys).