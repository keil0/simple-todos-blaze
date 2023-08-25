// Refresh exports progression
export const refreshExportsProgression = () => {
  console.log("REFRESH EXPORT");
};

Meteor.startup(() => {
  // Meteor.setInterval(refreshExportsProgression, 1000);
});
