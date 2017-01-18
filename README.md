# Sample app using redux-saga

### Dependencies
- [React](https://facebook.github.io/react/)
- [React Router](https://github.com/ReactTraining/react-router)
- [Immutable JS](https://facebook.github.io/immutable-js/)
- [Redux](http://redux.js.org/)
- [React Redux](https://github.com/reactjs/react-redux)
- [Redux Actions](https://github.com/acdlite/redux-actions)
- [Redux Saga](https://github.com/redux-saga/redux-saga)
- [Redux Immutable](https://github.com/gajus/redux-immutable)

### Server dependency

I used [Sinatra](http://www.sinatrarb.com/), make sure you have it installed (`gem install sinatra`).

### Saga data flow

Component will dispatch an action, Saga will intercept the action (depending on type), Saga will "put" other actions, which the reducer will process (change the app state -- new state).

### How to run

#### Backend
Just run `ruby backend/server.rb`.

_NOTE: Make sure you meet the dependencies expectations._

#### Frontend
Simply use the `react-scripts` that comes with `create-react-app`. `yarn start` (or `npm run start`)
