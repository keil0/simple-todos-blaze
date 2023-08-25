import { Meteor } from "meteor/meteor";
import { ExportsCollection } from "../../db/Exports/ExportsCollection";

Meteor.publish("exports", function publishExports() {
  return ExportsCollection.find({});
});
