let btn = document.getElementById("modebtn");
let icon1 = document.getElementById("modeic");
let icon2 = document.getElementById("modeichover");
let icon11 = document.getElementById("icon11");
let icon12 = document.getElementById("icon12");

btn.addEventListener("mouseover", () => {
  icon1.style.opacity = 0;
  icon2.style.opacity = 1;
  icon1.style.transition = "1.5s";
  icon2.style.transition = "1.5s";
  btn.style.color = " #222731";
  btn.style.transition = "1.5s";
});
btn.addEventListener("mouseleave", () => {
  icon2.style.opacity = 0;
  icon1.style.opacity = 1;
  btn.style.color = " #697C9A";
  btn.style.transition = "1.5s";
});

let searchbtn = document.getElementById("searchbutton");
searchbtn.addEventListener("mouseover", () => {
  searchbtn.style.background = "#60ABFF";
});
searchbtn.addEventListener("mouseleave", () => {
  searchbtn.style.background = "#0079FF";
});

let boddy = document.getElementById("lightbody");
let headerh1 = document.getElementById("headerH1");
let darkbtn = document.getElementById("darkbutton");
let searchdiv = document.getElementById("lightsearchdiv");
let search = document.getElementById("input");
let searchplaceholder = document.getElementById("input").placeholder;
let maindiv = document.getElementById("lightmaindiv");
let name = document.getElementById("user");
let date = document.getElementById("datee");
let bio = document.getElementById("biio");
let followersdiv = document.getElementById("divfollowers");
let repos = document.getElementById("repo");
let reposnumber = document.getElementById("numberrepos");
let followers = document.getElementById("followers");
let followersnumber = document.getElementById("followersnumber");
let following = document.getElementById("following");
let followingnumber = document.getElementById("followingnumber");
let locationicon = document.getElementById("locationicondark");
let blogicon = document.getElementById("blogicondark");
let buildingicon = document.getElementById("buildingicondark");
let locationn = document.getElementById("locationn");
let blogg = document.getElementById("blogg");
let build = document.getElementById("build");
let twitter = document.getElementById("twitter1");
let twittericon = document.getElementById("darktwittericon1");

let x = 0;
if (localStorage.getItem("task") % 2 == 1) {
  x++;
}
btn.addEventListener("click", () => {
  x++;
  localStorage.setItem("task", x);
  boddy.className = "darkbody";
  headerh1.className = "darkheaderh1";
  darkbtn.style.opacity = 1;
  darkbtn.style.zIndex = 1;
  btn.style.display = "none";
  searchdiv.className = "darksearchdiv";
  search.className = "darksearch";
  maindiv.className = "darkmaindiv";
  name.className = "darkname";
  date.className = "darkdate";
  bio.className = "darkbio";
  followersdiv.className = "darkfollowersdiv";
  repos.className = "darkrepos";
  reposnumber.className = "darkreposnumber";
  followers.className = "darkrepos";
  followersnumber.className = "darkreposnumber";
  following.className = "darkrepos";
  followingnumber.className = "darkreposnumber";
  locationicon.style.opacity = 1;
  blogicon.style.opacity = 1;
  buildingicon.style.opacity = 1;
  locationn.className = "darklocation";
  blogg.className = "darkblog";
  build.className = "darkbuilding";
  darkbtn.style.transition = "none";
});

darkbtn.addEventListener("click", () => {
  x++;
  localStorage.setItem("task", x);
  boddy.className = "body";
  headerh1.className = "headerh1";
  darkbtn.style.opacity = 0;
  darkbtn.style.zIndex = -1;
  darkbtn.style.transition = "none";
  btn.style.display = "flex";
  searchdiv.className = "searchdiv";
  search.className = "search";
  maindiv.className = "maindiv";
  name.className = "name";
  date.className = "date";
  bio.className = "bio";
  followersdiv.className = "followersdiv";
  repos.className = "repos";
  reposnumber.className = "reposnumber";
  followers.className = "repos";
  followersnumber.className = "reposnumber";
  following.className = "repos";
  followingnumber.className = "reposnumber";
  locationicon.style.opacity = 0;
  blogicon.style.opacity = 0;
  buildingicon.style.opacity = 0;
  locationn.className = "location";
  blogg.className = "blog";
  build.className = "building";
});

let y = localStorage.getItem("task");
if (y % 2 == 0) {
  boddy.className = "body";
  headerh1.className = "headerh1";
  darkbtn.style.opacity = 0;
  darkbtn.style.zIndex = -1;
  darkbtn.style.transition = "none";
  btn.style.display = "flex";
  searchdiv.className = "searchdiv";
  search.className = "search";
  maindiv.className = "maindiv";
  name.className = "name";
  date.className = "date";
  bio.className = "bio";
  followersdiv.className = "followersdiv";
  repos.className = "repos";
  reposnumber.className = "reposnumber";
  followers.className = "repos";
  followersnumber.className = "reposnumber";
  following.className = "repos";
  followingnumber.className = "reposnumber";
  locationicon.style.opacity = 0;
  blogicon.style.opacity = 0;
  buildingicon.style.opacity = 0;
  locationn.className = "location";
  blogg.className = "blog";
  build.className = "building";
}
if (y % 2 == 1) {
  boddy.className = "darkbody";
  headerh1.className = "darkheaderh1";
  darkbtn.style.opacity = 1;
  darkbtn.style.zIndex = 1;
  btn.style.display = "none";
  searchdiv.className = "darksearchdiv";
  search.className = "darksearch";
  maindiv.className = "darkmaindiv";
  name.className = "darkname";
  date.className = "darkdate";
  bio.className = "darkbio";
  followersdiv.className = "darkfollowersdiv";
  repos.className = "darkrepos";
  reposnumber.className = "darkreposnumber";
  followers.className = "darkrepos";
  followersnumber.className = "darkreposnumber";
  following.className = "darkrepos";
  followingnumber.className = "darkreposnumber";
  locationicon.style.opacity = 1;
  blogicon.style.opacity = 1;
  buildingicon.style.opacity = 1;
  locationn.className = "darklocation";
  blogg.className = "darkblog";
  build.className = "darkbuilding";
}
darkbtn.addEventListener("mouseover", () => {
  darkbtn.style.color = "#90A4D4";
  darkbtn.style.transition = "1.5s";
  icon11.style.opacity = 0;
  icon12.style.opacity = 1;
  icon11.style.transition = "1.5s";
  icon12.style.transition = "1.5s";
});
darkbtn.addEventListener("mouseleave", () => {
  darkbtn.style.color = "white";
  darkbtn.style.transition = "1.5s";
  icon11.style.opacity = 1;
  icon12.style.opacity = 0;
  icon11.style.transition = "1.5s";
  icon12.style.transition = "1.5s";
});

let form = document.getElementById("forma");
let serch = document.getElementById("search");

function fun(a, b) {}

form.addEventListener("submit", (e) => {
  async function getAllProducts() {
    e.preventDefault();
    try {
      let data = await fetch(`https://api.github.com/users/${input.value}`);
      let ouruser = await data.json();
      console.log(ouruser);
      let name1 = document.getElementById("user");
      name1.textContent = ouruser.name;
      let username1 = document.getElementById("nameuser");
      username1.textContent = `@${ouruser.login}`;
      let date1 = document.getElementById("datee");
      // datee1.textContent = `joined ${ouruser.login[8]${ouruser.login[9]}}`
      let following1 = document.getElementById("followingnumber");
      following1.textContent = ouruser.following;
      let followers1 = document.getElementById("followersnumber");
      followers1.textContent = ouruser.followers;
      let location1 = document.getElementById("locationn");
      location1.textContent = ouruser.location;
      if (
        ouruser.location == null ||
        ouruser.location == undefined ||
        ouruser.location.length < 1
      ) {
        location1.textContent = "Not Avaliable";
        location1.style.opacity = 0.5;
        let iconlocation = document.getElementById("iconlocation");
        iconlocation.textContent = "Not Avaliable";
        iconlocation.style.opacity = 0.5;
      }
      let repos1 = document.getElementById("numberrepos");
      repos1.textContent = ouruser.public_repos;
      let blog1 = document.getElementById("blogg");
      blog1.textContent = ouruser.blog;
      if (
        ouruser.blog == null ||
        ouruser.blog == undefined ||
        ouruser.blog.length < 1
      ) {
        blog1.textContent = "Not Avaliable";
        blog1.style.opacity = 0.5;
        let iconblog = document.getElementById("iconblog");
        iconblog.textContent = "Not Avaliable";
        iconblog.style.opacity = 0.5;
      }
      let bio1 = document.getElementById("biio");
      if (ouruser.bio != null) {
        bio1.textContent = ouruser.bio;
      }
      let company = document.getElementById("build");
      if (ouruser.company.length > 40) {
        company.style.fontSize = "12px";
      }
      company.textContent = ouruser.company;
      if (ouruser.twitter_username.length) {
        let twitter1 = document.getElementById("twitter1");
        twitter1.style.opacity = 1;
        let icontwitter = document.getElementById("icontwitter");
        icontwitter.style.opacity = 1;
        twitter1.textContent = ouruser.twitter_username;
      }
    } catch (error) {
      console.log(error);
    }
    input.value = " ";
  }
  getAllProducts();
});
