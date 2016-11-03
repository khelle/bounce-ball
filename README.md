# The Bouncing Ball

This repository has been done for learning purposes.

## Description

It is a simple simulation of ball being thrown and bouncing off the browser browsers with applied such mechanisms as gravity, elasticiy and friction.

## Installation

To install the application, clone the repository, then run command:

    npm install

## Running Application

To run the application run command:

    npm run app:start

If the command executes properly, go in the browser to the address `localhost:3000` and you will see empty canvas. Each click creates and throws the ball.

## Building

To rebuild the project, use:

    npm run dev:rollup

By default the building does not uglify the scripts, to change this behaviour edit `dev:rollup` option in `package.json` and change build environment to `BUILD:debug`.

## Tests

To run tests, use:

    npm run dev:test
