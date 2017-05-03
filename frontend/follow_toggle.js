class FollowToggle {
  constructor($el) {
    this.userId = $el.data("user-id");
    this.followState = $el.data("initial-follow-state");
    this.$el = $el;
    this.$el.on("click", this.handleClick.bind(this));
    this.render();
  }

  render() {
    this.$el.html((this.followState === "followed") ? "Unfollow!" : "Follow!");
  }

  handleClick(e) {
    e.preventDefault();
    const followMethod = (this.followState === "followed") ? "DELETE" : "POST";
    $.ajax({
      url: `/users/${this.userId}/follow`,
      method: followMethod,
      dataType: 'JSON',
      data: {
        followee_id: this.userId
      },
      success: ((res) => {
        console.log(res);
        this.toggleFollowState();
        this.render();
      }),
      error: (res) => {
        console.error(res);
      }
    });
  }

  toggleFollowState() {
    this.followState = (this.followState === "followed") ? "unfollowed" : "followed";
  }

}

module.exports = FollowToggle;
