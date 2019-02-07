// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //Config DialogFlow
  urlbase: 'https://api.dialogflow.com/v1/query?v=20150910',
  token: 'dfa1ea7056d34f3e8f6c22f602ddc09a',
  firebase: {
    apiKey: "AIzaSyCkZZzYhvt_8Epa6f83PZ_IpAIQz4xqElU",
    authDomain: "guia-tour-ef0e3.firebaseapp.com",
    databaseURL: "https://guia-tour-ef0e3.firebaseio.com",
    projectId: "guia-tour-ef0e3",
    storageBucket: "guia-tour-ef0e3.appspot.com",
    messagingSenderId: "704486868895"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
