const APIUtil = require("./api_util.js");
const FollowToggle = require("./follow_toggle.js");

class UsersSearch {
  constructor($el) {
    this.input = $el.find("input");
    this.ul = $el.find("ul.users");
    this.$el = $el;
    this.$el.on("keyup", this.handleInput.bind(this));
  }

  handleInput(e) {
    // e.preventDefault();
    APIUtil.searchUsers(this.input.serializeJSON()).then((res) => {
    this.renderResults(res);
    });
  }

  renderResults (res) {
    $(this.ul).html("");
    res.forEach ( (user) => {
      const followed = (user.followed) ? "followed" : "unfollowed";
      const $button = $("<button class='follow-toggle'></button>");
      const $li = $(`<li><a href="${user.id}">${user.username}</a></li>`);
      console.log($li);
      $li.append($button);
      $(this.ul).append($li);
      new FollowToggle(
        $button,
        { userId: user.id, followState: followed}
      );
    });
  }

}

module.exports = UsersSearch;
