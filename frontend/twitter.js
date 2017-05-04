const FollowToggle = require("./follow_toggle.js");
const UsersSearch = require("./users_search.js");
// document ready
$(() => {
  console.log("Document loaded");
  $("button.follow-toggle").each((idx, el) => {
    new FollowToggle($(el));
  });
  console.log(new UsersSearch($("nav.users-search")));
});
