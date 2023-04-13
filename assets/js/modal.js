const modBtn = document.querySelector(".mod-btn");

modBtn.addEventListener("click", function () {
  let textStream = "";
  let projectsModal = new bootstrap.Modal("#projectsModal", {
    keyboard: false,
  });

  let modalWindow = document.getElementById("projectsModal");
  let modalContent = document.getElementById("modalContent");
  let modalBody = modalContent.querySelector(".modal-body");
  console.log(modalBody);

  let link = this.getAttribute("data-mod-content");
  console.log(link);

  let xhr = new XMLHttpRequest();
  xhr.open("GET", link, true);
  xhr.setRequestHeader("content-type", "text/html");
  xhr.send();
  xhr.onreadystatechange = function (e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // textStream = xhr.responseText;
      modalBody.innerHTML = this.responseText;
    }
  };

  projectsModal.show();
  let closeButton = document.getElementById("closeModal");
  closeButton.addEventListener("click", function () {
    projectsModal.hide();
  });
});
