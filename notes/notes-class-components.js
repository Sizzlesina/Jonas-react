/*
*  Function component VS class component::
@ - Function component :
- How to create : JavaScript function (any type) 
- Reading props : Destructing or props.X 
- Local state : useState hook 
- Side effects/lifecycle : useEffect hook 
- Event handlers : functions
- Returning JSX : return JSX from function
++ 🏆 Advantages :
1 - Lifecycle might be easier to understand for beginners 
@ - Class components:
- How to create : ES6 classes,extending React.component
- Reading props : this.props.X
- Localstate : this.setState()
- side effects/lifecycle : Lifecycle methods
- Event handlers : class methods
- Returning JSX : return JSX from render method
++ 🏆 Advantages : 
1 - Easier to build (less boilerplate code) 
2 - Cleaner code: useEffect combines all lifecycle-related code in a single place
3 - Easier to share stateful logic
4 - We dont need this keyword anymore
*/