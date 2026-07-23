document.getElementById("btn").addEventListener("click", function () {
    alert("Thanks for visiting our website!");
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent successfully!");
    this.reset();
});
