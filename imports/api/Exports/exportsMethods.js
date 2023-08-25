import { ExportsCollection } from "../../db/Exports/ExportsCollection";

Meteor.methods({
  "exports.start"() {
    ExportsCollection.insert({
      createdAt: new Date(),
      progress: 0,
    });
  },
});
