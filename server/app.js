const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./db');
const dbHelpers = require('./helpers/dbHelpers')(db);

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);

// All queries are from the Helper fn -- dbHelpers(db)
/** The logic is:
 * 1. dbHelpers contain the sql queries, so need the db, also the helper fn returns: {getUsers, getUserByEmail, addUser, getUsersPosts,}
 * 2. All the returned fns from dbHelpers are not directly used by routes-users.js, instead they are as variables wrapped in a closure fn in users.js and as default export
 * 3. Below app.use fn has two parameters: user endpoint and usersRouter that contains different users routes, which accepts those variables that come from dbHelpers' returned value
 * 4. Whenever frontend send the http request ('/api/users') to the server, server app.js will check matched route and transfer to usersRouter to find correct route to deal with db
 * 5. e.g: when receiving http request '/api/users', the usersRouter will find the matched route "with" matched dbHelpers fns to communicate with db and return the value: "result.rows"
 * 6. And returned result.rows will be returned to frontend by using ".then((users) => res.json(users))" in the users.js
 **/

app.use('/api/users', usersRouter(dbHelpers));

module.exports = app;
