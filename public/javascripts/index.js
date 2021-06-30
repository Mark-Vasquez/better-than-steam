window.addEventListener("load", (event)=>{
    console.log("hello from javascript!")


    const voteBtns =  document.querySelectorAll('.game__vote-button')
    voteBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        // const gameId = e.target.value

        const userId = sessionStorage.getItem('auth')
        console.log(userId);



      })
    });

})