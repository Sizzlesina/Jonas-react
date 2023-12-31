/*
* React Query:
@ What? 
- A library for fetching data in a React application
@ Why?
1 - Since React is a UI library there is no specific pattern for data fetching
2 - useEffect hook for data fetching and useState hook to maintain component state like loading,error and resulting data
3 - If the data is needed throughout the app, we need to use state management libraries
4 - Most of state management libraries are good for working with client state. Ex: "theme" for the application / whether a modal is open 
5 - State management libraries are not great for working with asynchronous or server state

* Client VS Server state:
@ Client state:
- Persisted in your app memory and accessing or uploading is synchronous
@ Server state:
1 - Persisted remotely and requires asynchronous API's for fetching or updating 
2 - Has shared ownership
3 - Data can be updated by someone else without your knowledge
4 - UI data may not be in sync with the remote data
5 - Challenging when you have to deal with caching, deduping multiple requests for the same data, updating stale data in the background, performance optimizations etc.

*/