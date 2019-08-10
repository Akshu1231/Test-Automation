const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./src/swagger/swagger.json');

// Importing routes
const usersRoutes = require('./src/app/controllers/users');
const studentsRoutes = require('./src/app/controllers/studentController');
const enterprisesRoutes = require('./src/app/controllers/enterpriseController');
const instituteRoutes = require('./src/app/controllers/instituteController');
const postingRoutes = require('./src/app/controllers/postingController');



var options = {
    explorer: true
  };
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Handling CROS origin error
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     if(req.method === 'OPTIONS'){
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//         return res.status(200).json({});
//     }
// });



// Calling routes
app.use('/users', usersRoutes);
app.use('/students', studentsRoutes);
app.use('/enterprises', enterprisesRoutes);
app.use('/institutes', instituteRoutes);
app.use('/postings', postingRoutes);



// Ignore favicon.ico 
function ignoreFavicon(req, res, next) {
    if (req.originalUrl === '/favicon.ico') {
        res.status(204).json({nope: true});
    } else {
        next();
    }
}
app.use(ignoreFavicon);

// Handling unidentified APIs
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status(404);
    next(error);
});

// Handling server errors
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;


/******************************************
 * I am using multer here to upload files
 * to check that how we can use it in our
 * API please see the upload API which is 
 * an unused API here. The purpose creating 
 * of this to understand the multer library,
 * not more then that.
 * ****************************************/