const postCommentButton = document.getElementById("post-comment-button");
const commentField = document.querySelector(".comment-content");
const errorUl = document.getElementById("errors-ul");
const commentContainer = document.querySelector(".comments-container");

function populateComments(res) {
	if (res.errors) {
		errorUl.innerHTML = "";
		res.errors.forEach((error) => {
			const newError = document.createElement("li");
			newError.innerHTML = error;
			errorUl.appendChild(newError);
		});
	} else {
		errorUl.innerHTML = "";
		commentContainer.innerHTML = "";
		res.comments.forEach((comment) => {
			const contentWrapper = document.createElement("div");
			contentWrapper.classList.add("comments__content-wrapper");

			const contentUser = document.createElement("div");
			contentUser.classList.add("comments__content__user");

			const avatar = document.createElement("img");
			avatar.classList.add("comments__content__user-avatar");
			avatar.src =
				"https://www.pikpng.com/pngl/b/279-2797047_user-avatar-icon-portable-network-graphics-clipart.png";

			const textWrapper = document.createElement("div");
			textWrapper.classList.add("comments__content__text-wrapper");

			const textUsername = document.createElement("p");
			textUsername.classList.add("comments__content__text-username");
			textUsername.innerHTML = comment.User.username;

			const text = document.createElement("p");
			text.classList.add("comments__content__text");
			text.innerHTML = comment.content;

			const newEditButton = document.createElement("button");
			newEditButton.classList.add("edit");
			newEditButton.innerText = "Edit";
			newEditButton.value = comment.id;

			const newDeleteButton = document.createElement("button");
			newDeleteButton.classList.add("delete");
			newDeleteButton.innerText = "Delete";
			newDeleteButton.value = comment.id;

			if (
				textUsername.innerHTML !== res.username &&
				res.username !== "DemoUser"
			) {
				newEditButton.disabled = true;
				newDeleteButton.disabled = true;
			}

			commentContainer.appendChild(contentWrapper);
			contentWrapper.appendChild(contentUser);
			contentUser.appendChild(avatar);
			contentWrapper.appendChild(textWrapper);
			textWrapper.appendChild(textUsername);
			textWrapper.appendChild(text);
			textWrapper.appendChild(newEditButton);
			textWrapper.appendChild(newDeleteButton);

			newEditButton.addEventListener("click", async (e) => {
				e.preventDefault();
				const url = document.URL;
				const urlSplit = url.split("/");
				const gameId = urlSplit[urlSplit.length - 1];

				const content = commentField.value;

				const commentId = e.target.value;
				const resJson = await fetch(`/comments/${commentId}`, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ gameId, content }),
				});
				const res = await resJson.json();
				populateComments(res);
			});

			newDeleteButton.addEventListener("click", async (e) => {
				e.preventDefault();
				const url = document.URL;
				const urlSplit = url.split("/");
				const gameId = urlSplit[urlSplit.length - 1];

				const commentId = e.target.value;
				const resJson = await fetch(`/comments/${commentId}`, {
					method: "DELETE",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ gameId }),
				});
				const res = await resJson.json();
				populateComments(res);
			});
		});
		commentField.value = "";
	}
}

window.addEventListener("DOMContentLoaded", (event) => {
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
		populateComments(res);
	});

	let editButtons = document.querySelectorAll(".edit");

	Array.from(editButtons).forEach((editButton) => {
		editButton.addEventListener("click", async (e) => {
			e.preventDefault();
			const url = document.URL;
			const urlSplit = url.split("/");
			const gameId = urlSplit[urlSplit.length - 1];

			const content = commentField.value;

			const commentId = e.target.value;
			const resJson = await fetch(`/comments/${commentId}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ gameId, content }),
			});
			const res = await resJson.json();
			populateComments(res);
		});
	});

	let deleteButtons = document.querySelectorAll(".delete");

	Array.from(deleteButtons).forEach((deleteButton) => {
		deleteButton.addEventListener("click", async (e) => {
			e.preventDefault();
			const url = document.URL;
			const urlSplit = url.split("/");
			const gameId = urlSplit[urlSplit.length - 1];

			const commentId = e.target.value;
			const resJson = await fetch(`/comments/${commentId}`, {
				method: "DELETE",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ gameId }),
			});
			const res = await resJson.json();
			populateComments(res);
		});
	});
});
