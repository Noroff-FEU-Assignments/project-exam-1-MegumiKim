const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal-container");

export async function modalFunc(figures) {
  figures.forEach(function (figure) {
    figure.onclick = function () {
      console.log(figure);
      const modalImage = figure.firstChild.src;
      modalContainer.src = modalImage;
      toggleModal();
    };
  });
}

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}
window.addEventListener("click", windowOnClick);
