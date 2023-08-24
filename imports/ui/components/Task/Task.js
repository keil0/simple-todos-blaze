import { Template } from "meteor/templating";

import "./Task.html";

Template.task.events({
  "click .toggle-checked"() {
    Meteor.call("tasks.setIsChecked", this._id, !this.isChecked);
  },
  "click .delete"() {
    Meteor.call("tasks.remove", this._id);
  },
});

Template.add_task.events({
  "submit .task-form"(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;

    // Insert a task into the collection
    Meteor.call("tasks.insert", text);

    // Clear form
    target.text.value = "";
  },
});
