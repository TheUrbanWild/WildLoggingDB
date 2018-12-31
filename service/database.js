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

  function equals(arg1, arg2){
    var result = false;
    if(typeof(arg1) == 'string' && typeof(arg2) == 'string' ){
      result =  (new String(arg1).valueOf() == new String(arg2).valueOf());
    }
    return result;
  }


var getEvents = async function(id, date, lat, lon, postcode, thing, $page, $size, $sort){
  var result = null;

  var stem = 'select * from events where';
  var id_comp = '($1::text is null or id = $1) and ';
  var date_comp = '($2::bigint is null or date = $2) and ';
  var lat_comp = '($3::real is null or lat = $3) and '; // practically useless. Included for completeness
  var lon_comp = '($4::real is null or lon = $4) and '; // practically useless. Included for completeness
  var postcode_comp = "($5::text is null or postcode like $5) and ";
  var thing_comp = '($6::text is null or thing = $6) ';
  

  var page = 0;
  var size = 0;
  var sort = "";

  if(postcode){
    postcode = "%" + postcode + "%"; //wildcards addition
  }


  if($page){
    try{
      page = parseInt($page);
    }catch(e){}

  }
  if($size){
    try{
      size = parseInt($size);
    }catch(e){}
  }
  if($sort){
    sort = ' order by ' + $sort; // expecting something like "postcode ASC, date DESC". Will throw on error. 
  }

  var pagination_comp = "";
  var offset = page * size;
  if(offset){
    pagination_comp = " OFFSET " + offset + " LIMIT " + size; 
  }


  var query = 
    stem + 
    id_comp +
    date_comp +
    lat_comp +
    lon_comp +
    postcode_comp +
    thing_comp +
    sort + 
    pagination_comp + ";"; 
    

  var parameters = [id, date, lat, lon, postcode, thing];
  try{
    var response = await thePool.query(query,parameters);
    result = response.rows;
  }catch(e){
    throw(createError(errors.PARAMETER_ERROR,e.message));
  }

  return result;
}


  module.exports = {
    errors:errors,
    initialise: initialise,
    getEvents:getEvents
  };