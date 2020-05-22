# Auth0 integration for React + TS + .NET Core

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The project was implemented based on the [Auth0 documentation](https://auth0.com/docs/quickstart/spa/react). At the time of writing this code, the Auth0 doc doesn't contain any example for TypeScript, which has been implemented in this repo.

## Installation

Client app

1. [Configure Auth0](https://auth0.com/docs/quickstart/spa/react#configure-auth0). Create a new application in Auth0 and update `.env` file with your domain, client_id and audience([create API in Auth0](https://auth0.com/docs/getting-started/set-up-api)).

2. Run

```
cd client
npm install
npm start
```

API

1. Make sure you have created API in Auth0
2. Configure Auth0 authority and audience in appsettings.json

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
