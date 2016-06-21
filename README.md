# React Redux Firebase Chat
A simple web-based Chat App with Google Firebase, React and Redux. This project is under active development so
don't expect any kind of special output yet but the development environment is good :relieved:

## Instructions

To use the app you need to create a Firebase account and replace the configuration in `config.js` 
with your own config variables. For authentication you would also need to signup in Facebook developer
and and get an app ID and App Secret. Furthermore, you should enter these info in your Firebase console
to activate authentication with Facebook. Fore more info read [this part of Firebase docs](https://firebase.google.com/docs/auth/web/facebook-login).

After having the basics, clone this repository and simply use npm to install and run the project:

```bash
npm install
npm run watch
```
And for tests (for now only for reducers):

```bash
npm run test
```
