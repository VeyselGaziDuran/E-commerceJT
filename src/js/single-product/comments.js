submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    const selectedStar = document.querySelector(".star-group.selected");

    if (!selectedStar) {
        alert("Lütfen bir yıldız derecesi seçin.");
        return;
    }

    const authorName = document.getElementById("author").value;
    const email = document.getElementById("email").value;
    const commentText = document.getElementById("comment").value;

    if (!authorName || !email || !commentText) {
        alert("Lütfen tüm alanları doldurun.");
        return;
    }
    if (selectedStar.classList.contains("added")) {
        addComment();
    } else {
        selectedStar.classList.add("added");
        addComment();
    }
});


function addComment() {
    const selectedStar = document.querySelector(".star-group.selected");

    if (!selectedStar) {
        return; // Yıldız derecesi seçilmediyse işlemi sonlandır
    }

    const authorName = document.getElementById("author").value;
    const email = document.getElementById("email").value;
    const commentText = document.getElementById("comment").value;

    if (!authorName || !email || !commentText) {
        alert("Lütfen tüm alanları doldurun.");
        return;
    }

    const starRating = selectedStar.querySelectorAll("i.bi-star-fill").length;
    const currentDate = new Date();
    const dateString = currentDate.toDateString();

    const commentItem = document.createElement("li");
    // ... Diğer yorum ekleme kodu ...

    // Şimdi yorumu listeye ekleyebilirsiniz
    commentList.appendChild(commentItem);

    document.getElementById("comment").value = "";
    document.getElementById("author").value = "";
    document.getElementById("email").value = "";
    selectedStar.classList.remove("selected");
}
