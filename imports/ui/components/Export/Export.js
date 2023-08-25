import { Template } from "meteor/templating";

import "./Export.html";
import "./Export.css";

Template.export.events = {
  "click .export__item .delete"(e) {
    e.preventDefault();
    Meteor.call("exports.remove", this._id);
  },
};
