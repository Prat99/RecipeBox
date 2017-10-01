// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCAOjdk_Ze5bT6Xf7NeX8vW7Wp0CN_IbV0",
    authDomain: "recipebox-1b77a.firebaseapp.com",
    databaseURL: "https://recipebox-1b77a.firebaseio.com",
    projectId: "recipebox-1b77a",
    storageBucket: "recipebox-1b77a.appspot.com",
    messagingSenderId: "705292108870"
  }
};