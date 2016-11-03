# The Bouncing Ball

This repository has been done for learning purposes.

## Description

It is a simple simulation of a ball being thrown and bouncing off the browser borders with applied mechanisms such as gravity, elasticity and friction.

## Installation

To install the application, clone the repository, then run command:

    npm install

## Starting The Application

To start the application use command:

    npm run app:start

If it executes properly, go in the browser to the address `localhost:3000` and you will see empty canvas. Each click creates and throws the ball.

## Building

To rebuild the project, use:

    npm run dev:rollup

**WARNING** By default the building does not uglify the scripts, to change this behaviour edit `dev:rollup` option in `package.json` and change build environment to `BUILD:production`.

## Tests

To run tests, use:

    npm run dev:test

## Licensing

This repository contains code licensed under the MIT license.
