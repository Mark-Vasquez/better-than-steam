// get userId from req.session.auth.user.userId
// sending a post to Upvote model with userId
//   need a post route for
//     in the route create and save a new instance of Upvote with userid and gameid

const voteBtns =  document.querySelectorAll('.game__vote-button')
voteBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    // const gameId = e.target.value

    const userId = sessionStorage.auth
    console.log(userId);

  })
});
