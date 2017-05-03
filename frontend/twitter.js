const FollowToggle = require("./follow_toggle.js");

// document ready
$(() => {
  console.log("Document loaded");
  $("button.follow-toggle").each((idx, el) => {
    new FollowToggle($(el));
  });
});
