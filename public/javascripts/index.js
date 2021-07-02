window.addEventListener("load", async (event)=>{
    console.log("hello from javascript!")

    const voteBtns =  document.querySelectorAll('.game__vote-button');

    voteBtns.forEach( (btn => {
      btn.addEventListener('click', async(e) => {
        e.preventDefault();
        console.log(e.target);
        console.log(e.currentTarget);

        // console.log('inside');
        // console.log(e.target);
        const gameId = e.currentTarget.value;
        // console.log(gameId);

        const res = await fetch('/users/testroute', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            gameId
          })
        });


        let voteCount = document.querySelector(`#vote__count-id${gameId}`)

        // console.log(voteCount);
        if (res.status === 200) {
          voteCount.innerText = parseInt(voteCount.innerText, 10)++

          const triangle = document.querySelector('.game__vote-button > span > .triangle__icon');
          triangle.classList.add('triangle__icon-voted')
        }



        // const data = await res.json()
        // console.log(data);
        // //ajax to update... tdb

      })
    }));

})
