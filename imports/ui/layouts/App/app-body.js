import { Template } from "meteor/templating";

import "./app-body.html";

// User session
const getUser = () => Meteor.user();
const isUserLogged = () => !!getUser();

Template.App_body.helpers({
  isUserLogged() {
    return isUserLogged();
  },
  getUser() {
    return getUser();
  },
});

Template.App_body.events({
  "click .logout"(event) {
    event.preventDefault();

    Meteor.logout();
  },
});
