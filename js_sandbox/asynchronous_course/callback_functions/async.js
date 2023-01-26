window.onload = function () {

  function handleError(jqXHR, textstatus, error) {
    console.log(error);
  }

  $.ajax({
    type: "GET",
    url: "../data/tweets.json",
    success: cbTweets,
    error: handleError
  });

  function cbTweets(data) {
    console.log(data);


    $.ajax({
      type: "GET",
      url: "../data/friends.json",
      success: cbFriends,
      error: handleError
    })


    function cbFriends(data) {
      console.log(data);

      $.ajax({
        type: "GET",
        url: "../data/videos.json",
        success: function (data) {
          console.log(data);



        },
        error: handleError
      })


    }
  }




  // function callback(data) {
  //   console.log(data);
  // }

  // $.get("../data/tweets.json", callback);


  // $.get("../data/tweets.json", function (data) {
  //   console.log(data);
  // });



  // function callback(company) {
  //   console.log(company);
  // }
  // var fruits = ["sony", "microsoft", "nintendo"];

  // fruits.forEach(callback);
  // console.log("done");
}