'use strict';

var utils = require('../utils/writer.js');
var Wildlifelog = require('../service/WildlifelogService');

module.exports.deleteEventsEventid = function deleteEventsEventid (req, res, next) {
  var eventid = req.swagger.params['eventid'].value;
  Wildlifelog.deleteEventsEventid(eventid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteThingsThingid = function deleteThingsThingid (req, res, next) {
  var thingid = req.swagger.params['thingid'].value;
  Wildlifelog.deleteThingsThingid(thingid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEvents = function getEvents (req, res, next) {
  var $page = req.swagger.params['$page'].value;
  var lat = req.swagger.params['lat'].value;
  var lon = req.swagger.params['lon'].value;
  var date = req.swagger.params['date'].value;
  var id = req.swagger.params['id'].value;
  var $size = req.swagger.params['$size'].value;
  var postcode = req.swagger.params['postcode'].value;
  var thing = req.swagger.params['thing'].value;
  var $sort = req.swagger.params['$sort'].value;
  Wildlifelog.getEvents($page,lat,lon,date,id,$size,postcode,thing,$sort)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventsEventid = function getEventsEventid (req, res, next) {
  var eventid = req.swagger.params['eventid'].value;
  Wildlifelog.getEventsEventid(eventid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getThings = function getThings (req, res, next) {
  var $size = req.swagger.params['$size'].value;
  var id = req.swagger.params['id'].value;
  var $sort = req.swagger.params['$sort'].value;
  var name = req.swagger.params['name'].value;
  var $page = req.swagger.params['$page'].value;
  Wildlifelog.getThings($size,id,$sort,name,$page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getThingsThingid = function getThingsThingid (req, res, next) {
  var thingid = req.swagger.params['thingid'].value;
  Wildlifelog.getThingsThingid(thingid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postEvents = function postEvents (req, res, next) {
  var body = req.swagger.params['body'].value;
  Wildlifelog.postEvents(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postThings = function postThings (req, res, next) {
  var body = req.swagger.params['body'].value;
  Wildlifelog.postThings(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putEventsEventid = function putEventsEventid (req, res, next) {
  var eventid = req.swagger.params['eventid'].value;
  var body = req.swagger.params['body'].value;
  Wildlifelog.putEventsEventid(eventid,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putThingsThingid = function putThingsThingid (req, res, next) {
  var thingid = req.swagger.params['thingid'].value;
  var body = req.swagger.params['body'].value;
  Wildlifelog.putThingsThingid(thingid,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
