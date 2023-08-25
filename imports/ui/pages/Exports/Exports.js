import { Template } from "meteor/templating";

import { ExportsCollection } from "../../../db/Exports/ExportsCollection";

import "./Exports.html";
import "./Exports.css";
import "../../components/Export/Export";

Template.Exports_index.events({
  "click .export"(event) {
    event.preventDefault();

    Meteor.call("exports.start");
  },
});

Template.Exports_index.helpers({
  exports() {
    return ExportsCollection.find({}, { sort: { createdAt: -1 } }).fetch();
  },
});

Template.Exports_index.onCreated(function mainContainerOnCreated() {
  Meteor.subscribe("exports");
});
