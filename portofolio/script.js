window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 50) {
      document.querySelector("header").style.opacity = ".95"; 
  } else {
      document.querySelector("header").style.opacity = "1";
  }

  if(document.documentElement.scrollTop > 80) {
    document.querySelector(".break-right").style.transform = "rotate(45deg)";
    document.querySelector("h1").style.color = "var(--job-name-color)";
    document.querySelector(".break-right").style.color = "#fff";
  } else {
    document.querySelector(".break-right").style.transform = "rotate(0)";
    document.querySelector("h1").style.color = "#fff"; 
  }
}