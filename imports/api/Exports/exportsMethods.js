import { ExportsCollection } from "../../db/Exports/ExportsCollection";
import { check } from "meteor/check";

Meteor.methods({
  "exports.start"() {
    ExportsCollection.insert({
      createdAt: new Date(),
      progress: 0,
    });
  },

  "exports.remove"(exportId) {
    check(exportId, String);

    const exportItem = ExportsCollection.findOne({ _id: exportId });

    if (!exportItem) {
      throw new Meteor.Error("Export not found.");
    }

    ExportsCollection.remove(exportId);
  },
});
