This notes for tutorial from the https://app.pluralsight.com/player?course=react-flux-building-applications&author=cory-house&name=react-flux-building-applications-m1&clip=0&mode=live  
 
 
1. NodeJS 
2. Npm 
3. React 0.13.3 
4. React-Route 0.13.3 
5. Flux 2.0.3 
6. ES2015 (ES6) 
____ 
7. I have now node --version => v6.11.0 
8. Win.powershell: cd to proper folder with project and then run cmdlet: npm init  
The result of fun => the file package.json in the folder with all input values 
{ 
  "name": "psadmin", 
  "version": "1.0.0", 
  "description": "", 
  "main": "index.js", 
  "scripts": { 
    "test": "echo \"Error: no test specified\" && exit 1" 
  }, 
  "repository": { 
    "type": "git", 
    "url": "git+https://github.com/VulcanMaster/ReactRedux.git" 
  }, 
  "author": "VulcanMaster", 
  "license": "ISC", 
  "bugs": { 
    "url": "https://github.com/VulcanMaster/ReactRedux/issues" 
  }, 
  "homepage": "https://github.com/VulcanMaster/ReactRedux#readme" 
} 

9. Install the Gulp: npm install --save gulp@3.9.0 gulp-connect@2.2.0 gulp-open@1.0.0 
In the result we have changes into package.json with the just installed the packages of Gulp 
{ 
  "name": "psadmin", 
  "version": "1.0.0", 
  "description": "", 
  "main": "index.js", 
  "scripts": { 
    "test": "echo \"Error: no test specified\" && exit 1" 
  }, 
  "repository": { 
    "type": "git", 
    "url": "git+https://github.com/VulcanMaster/ReactRedux.git" 
  }, 
  "author": "VulcanMaster", 
  "license": "ISC", 
  "bugs": { 
    "url": "https://github.com/VulcanMaster/ReactRedux/issues" 
  }, 
  "homepage": "https://github.com/VulcanMaster/ReactRedux#readme", 
  "dependencies": { 
    "gulp": "^3.9.0", 
    "gulp-connect": "^2.2.0", 
    "gulp-open": "^1.0.0" 
  } 
} 
 
10. Cmd: cat package.json 
Result => appearing the content of the file 
11. Composition of Gulp file with the dependencies and tasks 
12. Cmd: ls  
=> observ the folder content 
13. Cmd: gulp 
=> builds all in accordande with the configuration from gulpfile.js 

14. Add support for js files and bundle them: 
    npm install --save browserify@11.0.1 reactify@1.1.1 vinyl-source-stream@1.1.0

15. Add support of bootstrap, jquery and gulp-concat
    npm install --save bootstrap@3.3.5 jquery@2.1.4 gulp-concat@2.6.0

16. Add esLint JS to handle the messages from JavaScript

 npm install --save gulp-eslint@0.15.0

 17. Add to the project the react router and flux support
 
    npm install --save react@0.13.3 react-router@0.13.3 flux@2.0.3
____________________________________________________________________

17. JSX - "HTML" that compiles to JS

18. Install functionality for WebApi - lodash . Looks this is a MAC Api.
    npm install --save lodash

19. Install the toaster
    npm install --save toastr@2.1.0

20. Flux. 
    1) Action => Delete User (payload - specific type of data format)
        Payload example:

        {
            type: USER_SAVED
            data: {
              firstName: "John",
              lastName: "Johnson"
            }
        }

    2) Dispatcher => Notify everyone who cares (cental hub + callback + send actions to store)
    3) Store => Hold app state + logic + data retrieval + register callback with dispatcher + user Node`s EventEmitter
        + extend EventEmitter
        + addChangeListener and removeChangeListener
        + emitChange

    4) React View => call the Action loop 
        + top level component 
        + interact with stores, 
        + holds data in state 
        + sends data to children as props

21. Flux could be multiply stores

    Dispatcher => Payload =>  | => User Store
                              | => Address Store
                              | => Product Store

22. Flux workflow example;
    React - Hey CourseAction, someone clicked this "Save Course" button;

    Action - Thanks React! I registered an action creator with the dispatcher, so the dispatcher should take care of notifying all the stores that care;

    Dispatcher - Let me see who cares about a course being saved. Ah! Looks like the CourseStore has registered a callback with me, so I`ll let her know.

    Store - Hi dispatcher! Thanks for the update! I`ll update my data with the payload you sent. Then I`ll emit an event for the React component that care.

    React - Ooo! Shiny new data from the store! I`ll update the UI to reflect this!

23. Flux API. Contains only 5 items:
    
    - register(function callback) - "Hey dispatcher, run me when action happen. - Store" 
    
    - unregister(string id) - "Hey dispatcher, stop worrying about this action. - Store"

    - waitFor(array<string> ids) - "Update this store first. - Store"

    - dispatch(object payload) - "Hey dispatcher, tell the stores about this action. - Action"

    - isDispatching() - "I`m busy dispatching callback right now."

24. Object-assign - npm library that glue different objects in one.

    npm install --save object-assign

    Example: 
    objectAssign({foo: 0}, {bar: 1});  //=> {foo: 0, bar: 1} 