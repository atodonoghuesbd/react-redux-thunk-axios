# Thunk
A thunk is a function that wraps an expression to delay its evaluation.
#### anonmymous thunk
```
let foo = () => 1 + 2;
```

#### non-anonymous thunk

```
const mapStateToProps = state => {
    return { 
        articles: state.articles 
    };
};
```