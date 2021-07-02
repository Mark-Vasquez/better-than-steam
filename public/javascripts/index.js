window.addEventListener("load", async (event) => {
	const voteBtns = document.querySelectorAll(".game__vote-button");

	voteBtns.forEach((btn) => {
		btn.addEventListener("click", async (e) => {
			e.preventDefault();
			console.log(e.target);
			console.log('current');
			console.log(e.currentTarget);

			// console.log('inside');
			// console.log(e.target);
			const gameId = e.currentTarget.value;
			// console.log(gameId);

			const res = await fetch("/users/testroute", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					gameId,
				}),
			});


			let voteCount = document.querySelector(`#vote__count-id${gameId}`);
			if (res.status === 200) {
				voteCount.innerText = parseInt(voteCount.innerText, 10) + 1;

				//selecting the vote__count-id(gameid)'s sibling span
				//that contains the vote count
				const triangle = document.querySelector(`#vote__count-id${gameId} + .triangle__icon`);


				triangle.classList.add("triangle__icon-voted");
			} else {
        // triangle.removeAttribute('triangle__icon-voted')
        // triangle.classList.add("triangle__icon-voted")
      }

			// const data = await res.json()
			// console.log(data);
			// //ajax to update... tdb
		});
	});
});
