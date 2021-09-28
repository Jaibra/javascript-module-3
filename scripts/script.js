window.onload = () => {
  let rootEpisodes = document.getElementById("root");
  let episodesList = document.createElement("ul");
  rootEpisodes.appendChild(episodesList);
  fetch("https://rickandmortyapi.com/api/episode")
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((episode) => {
        let episodeLi = document.createElement("li");
        let episodeName = document.createTextNode(episode.name);
        episodeLi.appendChild(episodeName);
        episodesList.appendChild(episodeLi);
        episodeLi.onclick = () => {
          showEpisode(episode.id);
        };
        return episodesList;
      });
    });

  let mainContainer = document.createElement("div");
  mainContainer.id = "containermain";
  rootEpisodes.appendChild(mainContainer);
  let episodeNode = document.createElement("article");
  mainContainer.appendChild(episodeNode);

  let showEpisode = (id) => {
    fetch(`https://rickandmortyapi.com/api/episode/${id}`)
      .then((response) => response.json())
      .then((data) => {
        let episodeInfo = data;
        console.log(episodeInfo);
        episodeNode.innerHTML = `Episode id: ${episodeInfo.id} / Episode: ${episodeInfo.episode} Name: ${episodeInfo.name} / Air date: ${episodeInfo.air_date} /`;
      });
  };
};

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".sidebar .nav-link").forEach(function (element) {
    element.addEventListener("click", function (e) {
      let nextEl = element.nextElementSibling;
      let parentEl = element.parentElement;

      if (nextEl) {
        e.preventDefault();
        let mycollapse = new bootstrap.Collapse(nextEl);

        if (nextEl.classList.contains("show")) {
          mycollapse.hide();
        } else {
          mycollapse.show();
          // find other submenus with class=show
          var opened_submenu =
            parentEl.parentElement.querySelector(".submenu.show");
          // if it exists, then close all of them
          if (opened_submenu) {
            new bootstrap.Collapse(opened_submenu);
          }
        }
      }
    }); // addEventListener
  }); // forEach
});
// DOMContentLoaded  end
