import { BlazeLayout } from "meteor/kadira:blaze-layout";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";

// Layout
import "../../ui/layouts/App/app-body.js";

// Pages
import "../../ui/pages/Tasks/Tasks.js";
import "../../ui/pages/Exports/Exports.js";

FlowRouter.route("/", {
  name: "Tasks.index",
  action() {
    BlazeLayout.render("App_body", { main: "Tasks_index" });
  },
});

FlowRouter.route("/exports", {
  name: "Export.index",
  action() {
    BlazeLayout.render("App_body", { main: "Exports_index" });
  },
});
