import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";
import { SearchCard } from "./SearchCard.js";
import { ContactForm } from "./ContactForm.js";

export async function Router() {
  const $main = document.getElementById("main");
  let { hash } = location;

  // console.log("hash", hash);

  $main.innerHTML = null;

  if (!hash || hash === "#/") {
    await ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        // console.log(posts);
        let html = "";
        posts.forEach((post) => (html += PostCard(post)));
        //document.querySelector(".loader").style.display = "none";
        $main.innerHTML = html;
      },
    });
  } else if (hash.includes("#/search")) {
    let query = localStorage.getItem("wpSearch");

    if (!query) {
      document.querySelector(".loader").style.display = "none";
      return false;
    }

    await ajax({
      url: `${api.SEARCH}${query}`,
      cbSuccess: (search) => {
        let html = "";

        if (search.length === 0) {
          html = `
            <p class="error">
              No existen resultados de búsqueda para el término
              <mark>${query}</mark>
            </p>
          `;
        } else {
          search.forEach((post) => (html += SearchCard(post)));
        }

        $main.innerHTML = html;
      },
    });
  } else if (hash.includes("#/contact")) {
    $main.appendChild(ContactForm());
  } else {
    await ajax({
      url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
      cbSuccess: (post) => {
        // console.log(post);
        $main.innerHTML = Post(post);
      },
    });
  }

  document.querySelector(".loader").style.display = "none";
}
