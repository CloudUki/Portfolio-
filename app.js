//Function to display the other links if you click on the hamburger or not
function myFunction() {
  const links = document.getElementById("myLinks");
  if (links.style.display === "flex") {
    links.style.display = "none";
  } else {
    links.style.display = "flex";
  }
}