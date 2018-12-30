'use strict';

var { Pool } = require('pg');

var createError = require('../utils/error').createError;
var stall = require('../utils/stall').stall;

var thePool = null;
var theConfig = null;


const errors = {
  PARAMETER_ERROR:-1,
  DATABASE_ERROR:-2,
  INTERNAL_ERROR:-3
}

var initialise = function (url, needsSSL) {
    if (needsSSL == true) {
      url += "?sslmode=require"
    }
  
    if (thePool) {
      thePool.end();
    };
  
    theConfig = null;
  
    theConfig = {
      connectionString: url,
      ssl: needsSSL
    };
  
    thePool = new Pool(theConfig);
  };
  


  var test = async function(arg){

    await stall(500, createError(errors.PARAMETER_ERROR,"bad parameter!"));
    
  }


var getEvents = async function(id, date, lat, lon, postcode, thing, $page, $size, $sort){
  var result = null;
  await test(); // this will throw;
  return result;
}


  module.exports = {
    errors:errors,
    initialise: initialise,
    getEvents:getEvents
  };