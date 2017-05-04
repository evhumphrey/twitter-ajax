const APIUtil = {
  followUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: "POST",
      dataType: "JSON",
      data: {
        followee_id: id
      }
    });
  },

  unfollowUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: "DELETE",
      dataType: "JSON",
      data: {
        followee_id: id
      },
    });
  },

  searchUsers: (queryVal) => {
    return $.ajax({
      url: "/users/search",
      method: "GET",
      dataType: "JSON",
      data: queryVal,
    });
  }
};


module.exports = APIUtil;
