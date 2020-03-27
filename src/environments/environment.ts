// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseURL: 'https://api.yelp.com/v3/businesses',
  todoUrl: 'http://jsonplaceholder.typicode.com/todos',
  todoLimit: '?_limit=15',
  usersUrl: 'https://randomuser.me/api?results=',
  // tslint:disable-next-line: max-line-length
  headers: 'Bearer i-OGw1skw1sXrNvAek1BlDtKHNUaEQI194u11NnGvOR0BE7IDRG2NWwkgbfgYVoVqfsSvb3pp1Xdjv6Oy16b344Z5YKbYutPqpbpqq04_J9dRG749T1IUB5i2ohpXXYx'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
