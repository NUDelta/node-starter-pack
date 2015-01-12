var Backbone = require("backbone");
var TaskModel = require("../models/TaskModel");

var TaskCollection = Backbone.Collection.extend({
  model: TaskModel,
  id: "id"
});

module.exports = TaskCollection;