'use strict';


/**
 * Deletes a Event
 *
 * eventid String Identifier of the Event
 * no response value expected for this operation
 **/
exports.deleteEventsEventid = function(eventid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a Thing
 *
 * thingid String Identifier of the Thing
 * no response value expected for this operation
 **/
exports.deleteThingsThingid = function(thingid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Loads a list of Event
 *
 * $page String Number of the page to retrieve. Integer value. (optional)
 * lat String Allows to filter the collections of result by the value of field lat (optional)
 * lon String Allows to filter the collections of result by the value of field lon (optional)
 * date String Allows to filter the collections of result by the value of field date (optional)
 * id String Allows to filter the collections of result by the value of field id (optional)
 * $size String Size of the page to retrieve. Integer value (optional)
 * postcode String Allows to filter the collections of result by the value of field postcode (optional)
 * thing String Allows to filter the collections of result by the value of field thing (optional)
 * $sort String Order in which to retrieve the results. Multiple sort criteria can be passed. Example: sort=age ASC,height DESC (optional)
 * returns List
 **/
exports.getEvents = function($page,lat,lon,date,id,$size,postcode,thing,$sort) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "{\"id\":\"sample id\",\"postcode\":\"M1 5GD\",\"date\":1511395200000,\"thing\":\"sample thing\",\"lat\":1.1,\"lon\":1.1}", "{\"id\":\"sample id\",\"postcode\":\"M1 5GD\",\"date\":1511395200000,\"thing\":\"sample thing\",\"lat\":1.1,\"lon\":1.1}" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Loads a Event
 *
 * eventid String Identifier of the Event
 * returns Event
 **/
exports.getEventsEventid = function(eventid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"id\":\"sample id\",\"postcode\":\"M1 5GD\",\"date\":1511395200000,\"thing\":\"sample thing\",\"lat\":1.1,\"lon\":1.1}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Loads a list of Thing
 *
 * $size String Size of the page to retrieve. Integer value (optional)
 * id String Allows to filter the collections of result by the value of field id (optional)
 * $sort String Order in which to retrieve the results. Multiple sort criteria can be passed. Example: sort=age ASC,height DESC (optional)
 * name String Allows to filter the collections of result by the value of field name (optional)
 * $page String Number of the page to retrieve. Integer value. (optional)
 * returns List
 **/
exports.getThings = function($size,id,$sort,name,$page) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "{\"id\":\"sample id\",\"name\":\"Jay\"}", "{\"id\":\"sample id\",\"name\":\"Jay\"}" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Loads a Thing
 *
 * thingid String Identifier of the Thing
 * returns Thing
 **/
exports.getThingsThingid = function(thingid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"id\":\"sample id\",\"name\":\"Jay\"}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adds a Event
 *
 * body Event 
 * returns Event
 **/
exports.postEvents = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"id\":\"sample id\",\"postcode\":\"M1 5GD\",\"date\":1511395200000,\"thing\":\"sample thing\",\"lat\":1.1,\"lon\":1.1}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adds a Thing
 *
 * body Thing 
 * returns Thing
 **/
exports.postThings = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"id\":\"sample id\",\"name\":\"Jay\"}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Stores a Event
 *
 * eventid String Identifier of the Event
 * body Event 
 * returns Event
 **/
exports.putEventsEventid = function(eventid,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"id\":\"sample id\",\"postcode\":\"M1 5GD\",\"date\":1511395200000,\"thing\":\"sample thing\",\"lat\":1.1,\"lon\":1.1}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Stores a Thing
 *
 * thingid String Identifier of the Thing
 * body Thing 
 * returns Thing
 **/
exports.putThingsThingid = function(thingid,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"id\":\"sample id\",\"name\":\"Jay\"}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

