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
  var postcode_comp = "($5::text is null or postcode ilike $5) and ";
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
  if(page && size){
    var offset = (page-1) * size;
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


var getEvent = async function(id){
  var result = null;

  var stem = 'select * from events where';
  var id_comp = '($1::text is null or id = $1)';
  
  

  var query = 
    stem + 
    id_comp + ";"; 
    

  var parameters = [id];
  try{
    var response = await thePool.query(query,parameters);
    result = response.rows;
  }catch(e){
    throw(createError(errors.PARAMETER_ERROR,e.message));
  }

  return result;
}

var deleteEvent = async function(id){
  var result = null;

  var stem = 'delete from events where';
  var id_comp = ' id = $1';
  
  var query = 
    stem + 
    id_comp + ";"; 
    

  var parameters = [id];
  try{
    var response = await thePool.query(query,parameters);
    result = response.rowCount;
  }catch(e){
    throw(createError(errors.PARAMETER_ERROR,e.message));
  }

  return result;
}



var getThings = async function(id, name, $page, $size, $sort){
  var result = null;

  var stem = 'select * from things where';
  var id_comp = '($1::text is null or id = $1) and ';
  var name_comp = '($2::text is null or name ilike $2)';


  var page = 0;
  var size = 0;
  var sort = "";

  if(name){
    name = "%" + name + "%"; //wildcards addition
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
    sort = ' order by ' + $sort; // expecting something like "name ASC". Will throw on error. 
  }

  var pagination_comp = "";
  
  if(page && size){
    var offset = (page-1) * size;
    pagination_comp = " OFFSET " + offset + " LIMIT " + size; 
  }


  var query = 
    stem + 
    id_comp +
    name_comp +
    sort + 
    pagination_comp + ";"; 
    

  var parameters = [id, name];
  try{
    var response = await thePool.query(query,parameters);
    result = response.rows;
  }catch(e){
    throw(createError(errors.PARAMETER_ERROR,e.message));
  }

  return result;
}

var getThing = async function(id){
  var result = null;

  var stem = 'select * from things where';
  var id_comp = '($1::text is null or id = $1)';
  
  

  var query = 
    stem + 
    id_comp + ";"; 
    

  var parameters = [id];
  try{
    var response = await thePool.query(query,parameters);
    result = response.rows;
  }catch(e){
    throw(createError(errors.PARAMETER_ERROR,e.message));
  }

  return result;
}


var deleteThing = async function(id){ 
  var result = null;

  var stem = 'delete from things where';
  var id_comp = ' id = $1';
  
  var query = 
    stem + 
    id_comp + ";"; 
    

  var parameters = [id];
  try{
    // the foreign key set-up in the DB ensures we delete all associated events.
    var response = await thePool.query(query,parameters);
    result = response.rowCount;
  }catch(e){
    throw(createError(errors.PARAMETER_ERROR,e.message));
  }

  return result;
}

var postThing = async function(name){ 
  var result = null;

  var query = 'INSERT INTO things("name") VALUES($1) RETURNING "id", "name";';
    
  var parameters = [name];
  try{
    // the foreign key set-up in the DB ensures we delete all associated events.
    var response = await thePool.query(query,parameters);
    result = response.rows[0];
  }catch(e){
    throw(createError(errors.PARAMETER_ERROR,e.message));
  }

  return result;
}



var postEvent = async function(date, lat, lon, postcode, thing){ 
  var result = null;

  var query = 'INSERT INTO events("date","lat","lon","postcode","thing") VALUES($1, $2 , $3, $4, $5) RETURNING "id", "date","lat","lon","postcode","thing";';
    
  var parameters = [date,lat,lon,postcode,thing];
  try{
    // the foreign key set-up in the DB ensures we delete all associated events.
    var response = await thePool.query(query,parameters);
    result = response.rows[0];
  }catch(e){
    throw(createError(errors.PARAMETER_ERROR,e.message));
  }

  return result;
}


var putThing = async function(id, name){ 
  var result = null;

  
  var query = 'UPDATE things SET "name"= $2::text WHERE "id"= $1::text RETURNING "id", "name";';


  var parameters = [id,name];
  try{
    // the foreign key set-up in the DB ensures we delete all associated events.
    var response = await thePool.query(query,parameters);
    result = response.rows[0];

  }catch(e){
    throw(createError(errors.PARAMETER_ERROR,e.message));
  }
  if(!result){
    throw(createError(errors.PARAMETER_ERROR,"no result: perhaps the id was incorrect."));
  }
  return result;
}



var putEvent = async function(id, date, lat, lon, postcode, thing){ 
  var result = null;

  var query = 'UPDATE events SET "date"= $2::bigint, "lat"= $3::real, "lon"= $4::real, "postcode"= $5::text, "thing"= $6::text WHERE "id"= $1::text RETURNING "id", "date", "lat", "lon", "postcode", "thing";';  
  var parameters = [id,date,lat,lon,postcode,thing];
  try{
    // the foreign key set-up in the DB ensures we delete all associated events.
    var response = await thePool.query(query,parameters);
    result = response.rows[0];

  }catch(e){
    throw(createError(errors.PARAMETER_ERROR,e.message));
  }
  if(!result){
    throw(createError(errors.PARAMETER_ERROR,"no result: perhaps the id was incorrect."));
  }
  return result;
}

  module.exports = {
    errors:errors,
    initialise: initialise,
    getEvents:getEvents,
    getEvent:getEvent,
    getThings:getThings,
    getThing,getThing,
    deleteEvent:deleteEvent,
    deleteThing:deleteThing,
    postEvent:postEvent,
    postThing:postThing,
    putEvent: putEvent,
    putThing: putThing
  };