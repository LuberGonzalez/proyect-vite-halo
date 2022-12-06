const addClass = (element) =>
  document.querySelector(element).classList.toggle("active");

const renderCurrentVideo = (container, id) => {
  container.innerHTML = `
        <iframe 
            width="750" height="400" src="https://www.youtube.com/embed/${id}" 
            title="YouTube video player" 
            frameborder="0" allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
    `;
};

const renderVideos = (container) => {
    const html = videos.map((video,index) => {
        return `
            <a href="#" class="item" data-id="${index}">
              <img src="https://i3.ytimg.com/vi/${video.id}/mqdefault.jpg" />
            </a>
        `;
    });

    container.innerHTML = html.join("");

}
 
const videos = [
  {
    id: "PyMlV5_HRWk",
  },
  {
    id: "XCbMVbeKlCg",
  },
  {
    id: "Fmdb-KmlzD8",
  },
  {
    id: "lOthvD1rMbQ",
  },
  {
    id: "nXDk86lQhto",
  },
];

const $sliderContainer = document.querySelector(".slider");
const $currentContainer = document.querySelector(".current");
const $videosContainer = document.querySelector(".container-videos");
const $btnNext = document.querySelector(".button-next");
const $btnPrev = document.querySelector(".button-prev");

let count = 0;

document.addEventListener("DOMContentLoaded", (e) => {
    renderCurrentVideo($currentContainer, videos[count].id);
    renderVideos($videosContainer);

});

document.addEventListener("click", (e) => {

  if (
    e.target.matches(".button-toggle") ||
    e.target.matches(".button-toggle .material-symbols-outlined")
  ) {
    e.preventDefault();
    addClass(".links");
  }

  if (e.target.matches(".link-more")) {
    e.preventDefault();
    addClass(".submenu");
  }

  if (e.target.matches(".button-next") || e.target.matches(".button-next .material-symbols-outlined")) {
    let changed = count;
    count = count + 1 < videos.length ? count + 1 : count;
    if(count !== changed) {
        renderCurrentVideo($currentContainer, videos[count].id);
    }
  }

  if (e.target.matches(".button-prev") || e.target.matches(".button-prev .material-symbols-outlined")) {
    let changed = count;
    count = count - 1 >= 0 ? count - 1 : count;
    if(count !== changed) {
        renderCurrentVideo($currentContainer, videos[count].id);
    }
  }


  if(e.target.matches(".item img")) {
    e.preventDefault();
    const id = +e.target.parentElement.getAttribute("data-id");
    count = id;
    renderCurrentVideo($currentContainer, videos[count].id);
  }
});
