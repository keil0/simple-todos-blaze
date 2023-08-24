import { Template } from "meteor/templating";

import "./App.html";
import { TasksCollection } from "../api/TasksCollection";

Template.mainContainer.helpers({
  tasks() {
    return TasksCollection.find({});
  },
});
