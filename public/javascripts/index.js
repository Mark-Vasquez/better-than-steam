window.addEventListener("load", (event)=>{
    console.log("hello from javascript!")


    const voteBtns =  document.querySelectorAll('.game__vote-button')
    voteBtns.forEach( (btn => {
      btn.addEventListener('click', async(e) => {
        // const gameId = e.target.value

        const gameId = e.target.value

        const res = await fetch('/users/testroute', {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'post',
          body: JSON.stringify({
            gameId
          })
        })

        const data = await res.json()
        console.log(data);
        //ajax to update... tdb

      })
    }));

})
