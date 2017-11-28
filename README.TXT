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
