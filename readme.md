# Full Stack Drills

## Introduction

Quickly work through all major areas of the full stack so you can see it all come together: 
 - Client-side a.k.a. Frontend (React)
 - Server-side a.k.a Backend (Express, and Database (MySQL).

## Goal

After completing these practice drills, you should be able to quickly build and work in any ExpressJS application. 

Building a basic CRUD app should be mostly muscle memory.

## Getting started

**How to perform this activity:**

Once you have done the setup, you will be working through parts 1-3. You should give yourself a day to work through it all. Once you have finished, you should delete everything and start over.

On the second rebuild: Do not reference code you already wrote for this assignment! Instead, rely on DOCUMENTATION and your CHEATSHEET. If you have completed part 3 in a timely manner, proceed to part 4.

--If you are stuck for more than 15 minutes, open a HELPDESK ticket--

**Setup:**

- Navigate to the root directory
- Run `npm run install-all`
- To start your react app run `npm run start:react`
- Before starting your server make sure to change your database configuration inside of queries.js
- To seed your database run `npm run seed`
- To start your server run `npm run start:server`

**Note:**

If you run in to WEBPACK or BABEL issues please get help. This activity is not designed for you to worry about that right now.

## Part 1: Server API

Objectives _(read this carefully)_:

- Create a server that responds to the specified restful routes
- Each route responds back with **dummy data for now**

Technologies:

- Node
- Express
- NPM
- Git

_ROUTES (PART 1)_

| METHOD | PATH           | DESCRIPTION                                  |
| ------ | -------------- | -------------------------------------------- |
| GET    | /employees     | respond with string "all the employees"      |
| GET    | /employees/:id | respond with string "single employee"        |

## Part 2: MySQL Queries

- Connect your server to your database using MySQLJS (mysql javascript)
- Complete the Routes in the route table (use the queries.js helper functions)

Technologies:

- MySQL
- MySQLJS
- Postman

_ROUTES:_

| METHOD | PATH           | DESCRIPTION                                                |
| ------ | -------------- | ---------------------------------------------------------- |
| GET    | /employees     | respond with all the employees                             |
| GET    | /employees/:id | respond with single employee, based on req.params.id        |

## Part 3a: ReactJS (Using Dummy Data)

In your frontend folder:

**Use the given employees dummy data (exampleEmployees.js)**

- It should allow a users to do the following from their web browser:
  - View all employees
  - View a specific employee  
- Use the provided React components

## Part 3b: ReactJS (Refactor using Data From Your Server API)

In your frontend folder:

**Using the your server api routes**

- Update your React app to:
  - View all employees from the server
  - View a specific employee from the server

**HINT: You will need to use AJAX (Fetch, Axios, etc) to allow your client side code to talk to your server.**

You've already created the endpoints below, now you need to use AJAX to communicate to them and get the info you need to the client-side code:

| METHOD | PATH           | DESCRIPTION                                                |
| ------ | -------------- | ---------------------------------------------------------- |
| GET    | /employees     | respond with all the employees                             |
| GET    | /employees/:id | respond with single employee, based on req.params.id       |



## Part 4: Bonus - Full CRUD  

**(DO THIS ONLY ON THE SECOND RUN)**

Handle these additional routes in your server, they should modify the database accordingly:

| METHOD | PATH           | DESCRIPTION                                 |
| ------ | -------------- | ------------------------------------------- |
| POST   | /employees     | inserts new employeee record from req.body  |
| PATCH  | /employees/:id | update an employee record from req.body     |
| DELETE | /employees/:id | delete an employee record                   |

Create the appropriate interface in your React app so that users can make AJAX (e.g. Axios, Fetch, $.Ajax, etc) requests to the routes above and then see the changes render in their web browser.
