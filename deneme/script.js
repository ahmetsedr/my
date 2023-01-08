function showImage(element) {
  // Get the src attribute of the image that was clicked
  var imgUrl = element.src;
  // Show the popup with the clicked image
  showPopup(imgUrl);
}

function showImage(element) {
  // Check if the element has the "popup-trigger" class
  if (element.classList.contains("popup-trigger")) {
    // Get the src attribute of the image that was clicked
    var imgUrl = element.src;
    // Show the popup with the clicked image
    showPopup(imgUrl);
  }
}

function showPopup(imgUrl) {
  // Popup'ı oluşturun
  var popup = document.createElement("div");
  popup.classList.add("popup");
  // Fotoğrafı ekleyin
  var img = document.createElement("img");
  img.src = imgUrl;
  img.style.width = "40rem";
  popup.appendChild(img);
  // X butonunu ekleyin
  var button = document.createElement("button");
  button.innerHTML = "X";
  button.style.color = "black";
  button.style.padding = "0.5rem";
  button.style.position = "relative";
  button.style.bottom = "47%";
  button.style.left = "5%";
  button.onclick = hidePopup;
  popup.appendChild(button);
  // Popup'ı sayfaya ekleyin
  document.body.appendChild(popup);
}
function hidePopup() {
  // Popup'ı kapatın
  var popup = document.querySelector(".popup");
  popup.parentNode.removeChild(popup);
}