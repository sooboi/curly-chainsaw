(function () {
  const bookMarkBar = document.getElementById("bookmark-bar");
  const bookMarkBtn = document.getElementById("bookmark-btn");

  const bookmarkBarToggle = () => {
    let isBookMarkBarOpen = localStorage.getItem("isBookMarkBarOpen");
    if (isBookMarkBarOpen === "close") {
      localStorage.setItem("isBookMarkBarOpen", "open");
      bookMarkBar.style.right = "0";
      bookMarkBtn.style.color = "white";
      return;
    }
    localStorage.setItem("isBookMarkBarOpen", "close");
    bookMarkBar.style.right = "-340px";
  };

  document
    .getElementById("bookmark-btn")
    .addEventListener("click", bookmarkBarToggle);
})();
