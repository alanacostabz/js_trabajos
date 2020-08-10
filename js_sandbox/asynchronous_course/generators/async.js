window.onload = function () {

  genWrap(function* () {

    let tweets = yield $.get("../data/tweets.json");
    console.log(tweets);

    let friends = yield $.get("../data/friends.json");
    console.log(friends);

    let videos = yield $.get("../data/videos.json");
    console.log(videos);
  });

  function genWrap(generator) {
    let gen = generator();

    function handle(yielded) {
      if (!yielded.done) {
        yielded.value.then(function (data) {
          return handle(gen.next(data));
        })
      }
    }

    return handle(gen.next());
  }







  /*GENERATORS EXAMPLE*/

  // function* gen() {
  //   let x = yield 10;
  //   console.log(x);
  // }

  // let myGen = gen();
  // console.log(myGen.next());
  // console.log(myGen.next(10));
}