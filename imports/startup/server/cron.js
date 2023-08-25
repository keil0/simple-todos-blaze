import { ExportsCollection } from "../../db/Exports/ExportsCollection";

const randomResultUrl = () => {
  const urls = [
    "https://www.lempire.com",
    "https://www.lemlist.com",
    "https://www.lemverse.com",
    "https://www.lemstash.com",
  ];

  const randomIndex = Math.floor(Math.random() * urls.length);
  return urls[randomIndex];
};

// Refresh exports progression
export const refreshExportsProgression = () => {
  // This meteor instance use Mongo 1.16.5 and doesn't support
  // $set: {
  //   progress: { $add: ["$progress", 5] },
  // }
  // This is why we need to perform 2 operations

  // Fetch exports not completed
  const exportsNotCompleted = ExportsCollection.find({
    progress: { $lt: 100 },
  }).fetch();

  // Update these exports
  exportsNotCompleted.forEach((item) => {
    // Update operation
    let updateOperation = { progress: item.progress + 5 };

    // Random choose the result url
    if (item.progress + 5 === 100) {
      updateOperation = { ...updateOperation, result: randomResultUrl() };
    }

    ExportsCollection.update(
      {
        _id: item._id,
      },
      {
        $set: updateOperation,
      },
    );
  });

  // console.log(`LOG: ${exportsNotCompleted.length} exports processed`);
};

Meteor.startup(() => {
  Meteor.setInterval(refreshExportsProgression, 1000);
});
