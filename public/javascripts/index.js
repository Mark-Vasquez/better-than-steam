window.addEventListener("load", async (event)=>{
    console.log("hello from javascript!")

    const voteBtns =  document.querySelectorAll('.game__vote-button');

    voteBtns.forEach( (btn => {
      btn.addEventListener('click', async(e) => {
        e.preventDefault();

        const gameId = e.target.value;
        // console.log(e.target)

        const res = await fetch('/users/testroute', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            gameId
          })
        });



        let voteCount = parseInt(e.target.innerText)
        console.log(voteCount);
        if (res.status === 200) {
          voteCount++
          e.target.innerText = voteCount.toString()

          const triangle = document.querySelector('.game__vote-button > span > .triangle__icon');
          triangle.classList.add('triangle__icon-voted')
        }

        // const data = await res.json()
        // console.log(data);
        // //ajax to update... tdb

      })
    }));

})
