# NODEJS
NODE JS CODE BASE

Adding Node Code Here


npm install -g npm

node -v
npm -v

-> Node.js?  

-> Local Environment Setup

->The Node.js Runtime

-> Creating Node.js Application

-> Online REPL Terminal

-> Installing Modules using NPM

-> Callback?

-> Event-Driven Programming

->EventEmitter Class

-> Creating Buffers

-> Streams?

-> Synchronous vs Asynchronous

-> Web Server?

-> Web Application Architecture

-> REST architecture?

->child_process ?


->Packaging the Code

-> Debugging in Node.js
Installing dependencies

npm install --save-dev nodemon ts-node tsconfig-paths

Adding a package.json script

"scripts": {
  "debug:watch": "nodemon --inspect src/index.ts"
}

Configuring nodemon for ESM and CommonJS

{
  "type": "module"
}

For CommonJS:


{
  "watch": [
    "src"
  ],
  "ext": "ts",
  "execMap": {
    "ts": "node -r ts-node/register -r tsconfig-paths/register"
  },
  "ignore": [
    "src/**/*.spec.ts"
  ]
}


