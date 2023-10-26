function tabs() {
    // Sayfa yüklendiğinde mevcut yorumları görüntülemek için kullanılan kodlar
    function displayComments() {
      const commentList = document.querySelector(".comment-list");
      const comments = JSON.parse(localStorage.getItem("comments")) || [];
  
      commentList.innerHTML = "";
  
      comments.forEach(comment => {
        const commentItem = document.createElement("li");
        commentItem.classList.add("flex", "items-center", "gap-4");
  
        const commentAvatar = document.createElement("div");
        commentAvatar.innerHTML = '<img class="rounded-full flex" src="img/avatars/avatar1.jpg" alt="">';
  
        const commentTextContainer = document.createElement("div");
        commentTextContainer.classList.add("flex", "flex-col", "gap-1");
  
        const starRatingContainer = document.createElement("ul");
        starRatingContainer.classList.add("flex");
  
        for (let i = 0; i < comment.rating; i++) {
          const star = document.createElement("li");
          star.innerHTML = '<i class="bi bi-star-fill text-vege-gold text-xs"></i>';
          starRatingContainer.appendChild(star);
        }
  
        const commentMeta = document.createElement("div");
        commentMeta.classList.add("text-xs");
        commentMeta.innerHTML = `
          <strong>${comment.author}</strong>
          <span>-</span>
          <time>${comment.date}</time>
        `;
  
        const commentDescription = document.createElement("p");
        commentDescription.classList.add("text-sm");
        commentDescription.textContent = comment.text;
  
        commentTextContainer.appendChild(starRatingContainer);
        commentTextContainer.appendChild(commentMeta);
        commentTextContainer.appendChild(commentDescription);
  
        commentItem.appendChild(commentAvatar);
        commentItem.appendChild(commentTextContainer);
  
        commentList.appendChild(commentItem);
      });
    }
  
    displayComments();
  
    document.addEventListener("DOMContentLoaded", function () {
      const starGroups = document.querySelectorAll(".star-group");
      let selectedStarGroup = null;
  
      starGroups.forEach(starGroup => {
        starGroup.addEventListener("click", function (event) {
          event.preventDefault();
  
          if (selectedStarGroup) {
            selectedStarGroup.querySelectorAll("i.bi-star-fill").forEach(star => {
              star.style.color = "#d6e4e5";
            });
          }
  
          starGroup.classList.add("selected");
          starGroup.querySelectorAll("i.bi-star-fill").forEach(star => {
            star.style.color = "gold";
          });
  
          selectedStarGroup = starGroup;
        });
      });
  
      const commentList = document.querySelector(".comment-list");
  
      starGroups.forEach(starGroup => {
        starGroup.addEventListener("click", function (event) {
          event.preventDefault();
          starGroups.forEach(group => group.classList.remove("selected"));
          starGroup.classList.add("selected");
        });
      });
  
      const submitButton = document.querySelector("input[type='submit']");
  
      submitButton.addEventListener("click", function (event) {
        event.preventDefault();
  
        const selectedStar = document.querySelector(".star-group.selected");
  
        if (!selectedStar) {
          alert("Please select a star rating.");
          return;
        }
  
        const starRating = selectedStar.querySelectorAll(".bi-star-fill").length;
        const commentText = document.getElementById("comment").value;
        const authorName = document.getElementById("author").value;
        const email = document.getElementById("email").value;
  
        const currentDate = new Date();
        const dateString = currentDate.toDateString();
  
        const commentItem = document.createElement("li");
        commentItem.classList.add("flex", "items-center", "gap-4");
  
        const commentAvatar = document.createElement("div");
        commentAvatar.innerHTML = '<img class="rounded-full flex" src="img/avatars/avatar1.jpg" alt="">';
  
        const commentTextContainer = document.createElement("div");
        commentTextContainer.classList.add("flex", "flex-col", "gap-1");
  
        const starRatingContainer = document.createElement("ul");
        starRatingContainer.classList.add("flex");
  
        for (let i = 0; i < starRating; i++) {
          const star = document.createElement("li");
          star.innerHTML = '<i class="bi bi-star-fill text-vege-gold text-xs"></i>';
          starRatingContainer.appendChild(star);
        }
  
        const commentMeta = document.createElement("div");
        commentMeta.classList.add("text-xs");
        commentMeta.innerHTML = `
          <strong>${authorName}</strong>
          <span>-</span>
          <time>${dateString}</time>
        `;
  
        const commentDescription = document.createElement("p");
        commentDescription.classList.add("text-sm");
        commentDescription.textContent = commentText;
  
        commentTextContainer.appendChild(starRatingContainer);
        commentTextContainer.appendChild(commentMeta);
        commentTextContainer.appendChild(commentDescription);
  
        commentItem.appendChild(commentAvatar);
        commentItem.appendChild(commentTextContainer);
  
        commentList.appendChild(commentItem);
  
        const comment = {
          author: authorName,
          rating: starRating,
          date: dateString,
          text: commentText,
        };
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments.push(comment);
        localStorage.setItem("comments", JSON.stringify(comments));
  
        document.getElementById("comment").value = "";
        document.getElementById("author").value = "";
        document.getElementById("email").value = "";

        selectedStar.querySelectorAll("i.bi-star-fill").forEach(star => {
          star.style.color = "#d6e4e5";
        });
  
        selectedStar.classList.remove("selected");
      });
    });
  }
  
  export default tabs;
  