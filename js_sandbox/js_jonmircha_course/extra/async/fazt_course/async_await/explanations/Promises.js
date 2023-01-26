/*
  PROMISES
*/

function resquestHandler(req, res) {
  User.findById(req.userId)
    .then(function (user) {
      return Tasks.findById(user.tasksId);
    })
    .then(function (tasks) {
      tasks.completed = true;
      tasks.save();
    })
    .then(function () {
      res.send("Tasks Completed");
    })
    .catch(function (err) {
      res.send(err);
    });
}
