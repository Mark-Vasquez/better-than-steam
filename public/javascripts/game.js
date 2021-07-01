window.addEventListener("DOMContentLoaded", (event) => {
	const postCommentButton = document.getElementById("post-comment-button");
	const commentField = document.querySelector(".comment-content");
	const errorUl = document.getElementById("errors-ul");
	const commentContainer = document.querySelector(".comment-container");

	postCommentButton.addEventListener("click", async (e) => {
		e.preventDefault();
		const url = document.URL;
		const urlSplit = url.split("/");
		const gameId = urlSplit[urlSplit.length - 1];

		const content = commentField.value;
		const resJson = await fetch("/comments", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ content, gameId }),
		});
		const res = await resJson.json();
		if (res.errors) {
			errorUl.innerHTML = "";
			res.errors.forEach((error) => {
				const newError = document.createElement("li");
				newError.innerHTML = error;
				errorUl.appendChild(newError);
			});
		} else {
			commentContainer.innerHTML = "";
			res.comments.forEach((comment) => {
				const newComment = document.createElement("div");
				const newEditButton = document.createElement("button");
				const newDeleteButton = document.createElement("button");
				const newDivContainer = document.createElement("div");

				newComment.innerHTML = comment.content;
				newEditButton.class = "edit";
				newEditButton.innerText = "Edit";
				newEditButton.value = comment.id;
				newDeleteButton.class = "delete";
				newDeleteButton.innerText = "Delete";
				newDeleteButton.value = comment.id;

				newDivContainer.appendChild(newComment);
				newDivContainer.appendChild(newEditButton);
				newDivContainer.appendChild(newDeleteButton);
				commentContainer.appendChild(newDivContainer);
			});
		}
	});
});
