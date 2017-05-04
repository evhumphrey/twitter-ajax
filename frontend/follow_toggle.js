const APIUtil = require("./api_util.js");

class FollowToggle {
  constructor($el, options) {
    this.userId = $el.data("user-id") || options.userId;
    this.followState = $el.data("initial-follow-state") ||
                                options.followState;
    this.$el = $el;
    this.$el.on("click", this.handleClick.bind(this));
    this.render();
  }

  render() {
    this.$el.prop('disabled', false);
    this.$el.html((this.followState === "followed") ? "Unfollow!" : "Follow!");
  }

  handleClick(e) {
    e.preventDefault();

    this.$el.prop('disabled', true);
    if (this.followState === "unfollowed") {
      APIUtil.followUser(this.userId)
        .then((res) => this.successful(res), (res) => this.error(res));

    } else {
      APIUtil.unfollowUser(this.userId)
        .then((res) => this.successful(res), (res) => this.error(res));
    }
  }

  toggleFollowState() {
    this.followState = (this.followState === "followed") ? "unfollowed" : "followed";
  }

  successful(res) {
    this.toggleFollowState();
    this.render();
  }

  error(res) {
    console.error(res);
  }

}

module.exports = FollowToggle;
