/* eslint-disable no-console */
import express from 'express';
import path from 'path';

import foodServiceRoutes from './foodServiceRoutes.js';
import sqlDemoRoutes from './sqlDemoRoutes.js'; // this is included in case you want to use a database of your own for the group project

const router = express.Router();

const __dirname = path.resolve();

// localhost:3000/api when developing locally
// This is the first API you touch in the HTML Forms lab, using a Get request
router.route('/')
  .get((req, res) => { // .get is the HTTP method for retrieving a resource using a URL
    try { // here we "try" to do some code
      console.log('You touched the default route!');
  

      res.sendFile(path.join(__dirname, '/server/templates/demo.html'));
    } catch (err) { // and here we catch any errors that happen
      // then print a message to you on the server as to what went wrong
      console.log('Something went wrong:', err);
      // and resolve the request with a message to the client about what happened.
      res.json({message: 'TemplateDemo failed', error: err});
    }
  });

router.use('/foodServicePG', foodServiceRoutes);


router.use('/sqlDemo', sqlDemoRoutes);

export default router;
