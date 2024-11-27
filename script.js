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
let locationicon = document.getElementById("iconlocation");
let darklocationicon = document.getElementById("locationicondark");
let locationn = document.getElementById("locationn");
let blogg = document.getElementById("blogg");
let blogicon = document.getElementById("iconblog");
let darkblogicon = document.getElementById("blogicondark");
let companyicon = document.getElementById("iconbuilding");
let darkcompanyicon = document.getElementById("buildingicondark");
let company1 = document.getElementById("build");
let twitter1 = document.getElementById("twitter1");
let twitericon = document.getElementById("icontwitter");
let form = document.getElementById("forma");
let serch = document.getElementById("search");
let twitterdiv = document.getElementById("divtwitter");
let datee = document.getElementById("datee");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let error1 = document.querySelector(".errorp");
  if (error1) {
    error1.remove();
  }
  async function getAllProducts() {
    try {
      let data = await fetch(`https://api.github.com/users/${input.value}`);
      if (!data.ok) {
        let errorp = document.createElement("p");
        errorp.className = "errorp";
        errorp.textContent = "No results";
        let searchdiv = document.getElementById("lightsearchdiv");
        searchdiv.appendChild(errorp);
      } else {
        let ouruser = await data.json();
        console.log(ouruser);
        let img = document.getElementById("pic");
        img.src = ouruser.avatar_url;
        let userdate = new Date(ouruser.created_at);
        let months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        let day = userdate.getDate();
        let month = months[userdate.getMonth()];
        let year = userdate.getFullYear();
        let lastdate = `Joined ${day} ${month} ${year}`;
        datee.textContent = lastdate;
        let name1 = document.getElementById("user");
        name1.textContent = ouruser.name;
        let username1 = document.getElementById("nameuser");
        username1.textContent = `@${ouruser.login}`;
        let following1 = document.getElementById("followingnumber");
        following1.textContent = ouruser.following;
        let followers1 = document.getElementById("followersnumber");
        followers1.textContent = ouruser.followers;
        let repos1 = document.getElementById("numberrepos");
        repos1.textContent = ouruser.public_repos;
        let bio1 = document.getElementById("biio");
        if (ouruser.location) {
          locationn.textContent = ouruser.location;
          locationn.style.opacity = 1;
          if (locationn.className == "location") {
            locationicon.style.opacity = 1;
          } else {
            darklocationicon.style.opacity = 1;
          }
        } else {
          locationn.textContent = "Not Available";
          locationn.style.opacity = 0.5;
          if (locationn.className == "location") {
            locationicon.style.opacity = 0.5;
          } else {
            darklocationicon.style.opacity = 0.5;
          }
        }
        if (ouruser.company) {
          company1.textContent = ouruser.company;
          company1.style.opacity = 1;
          if (company1.className == "building") {
            companyicon.style.opacity = 1;
          } else {
            darkcompanyicon.style.opacity = 1;
          }
        } else {
          company1.textContent = "Not Available";
          company1.style.opacity = 0.5;
          if (company1.className == "building") {
            companyicon.style.opacity = 0.5;
          } else {
            darkcompanyicon.style.opacity = 0.5;
          }
        }
        if (ouruser.blog) {
          blogg.textContent = ouruser.blog;
          blogg.style.opacity = 1;
          if (blogg.className == "blog") {
            blogicon.style.opacity = 1;
          } else {
            darkblogicon.style.opacity = 1;
          }
        } else {
          blogg.textContent = "Not Available";
          blogg.style.opacity = 0.5;
          if (blogg.className == "blog") {
            blogicon.style.opacity = 0.5;
          } else {
            darkblogicon.style.opacity = 0.5;
          }
        }
        if (ouruser.bio) {
          bio1.textContent = ouruser.bio;
        } else {
          bio1.textContent =
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.";
        }
        if (bio1.textContent.length > 100) {
          bio1.style.fontSize = "13px";
        } else {
          bio1.style.fontSize = "15px";
        }
        if (company1.style.fontWeight == 111) {
          company1.style.fontSize = "13px";
        }
        if (ouruser.blog && ouruser.blog.length > 0) {
          blogg.textContent = ouruser.blog;
          blogg.style.opacity = 1;
          if (blogg.className == "blog") {
            blogicon.style.opacity = 1;
          } else {
            darkblogicon.style.opacity = 1;
          }
        } else {
          blogg.textContent = "Not Available";
          blogg.style.opacity = 0.5;
          if (blogg.className == "blog") {
            blogicon.style.opacity = 0.5;
          } else {
            darkblogicon.style.opacity = 0.5;
          }
        }
        if (ouruser.twitter_username != null) {
          twitter1.textContent = ouruser.twitter_username;
          twitterdiv.style.opacity = 1;
        } else {
          twitter1.textContent = "Not Available";
          twitterdiv.style.opacity = 0.5;
        }
      }
    } catch (error) {
      console.log(error);
    }
    input.value = "";
  }
  getAllProducts();
});

let x = 0;
if (localStorage.getItem("task") % 2 == 1) {
  x++;
}
btn.addEventListener("click", () => {
  x++;
  localStorage.setItem("task", x);
  locationicon.style.opacity = 0;
  if (locationn.textContent == "Not Available") {
    darklocationicon.style.opacity = 0.5;
  } else {
    darklocationicon.style.opacity = 1;
  }
  companyicon.style.opacity = 0;
  if (company1.textContent == "Not Available") {
    darkcompanyicon.style.opacity = 0.5;
  } else {
    darkcompanyicon.style.opacity = 1;
  }
  blogicon.style.opacity = 0;
  if (blogg.textContent == "Not Available") {
    darkblogicon.style.opacity = 0.5;
  } else {
    darkblogicon.style.opacity = 1;
  }
  twitericon.src = "./images/004-twitter.png";
  twitter1.className = "darktwitter";
  if (twitter1.textContent != "Not Available") {
    twitterdiv.style.opacity = 1;
  } else {
    twitterdiv.style.opacity = 0.5;
  }
  blogg.className = "darkblog";
  company1.className = "darkbuilding";
  locationn.className = "darklocation";
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
  darkbtn.style.transition = "none";
});

darkbtn.addEventListener("click", () => {
  x++;
  localStorage.setItem("task", x);
  if (locationn.textContent == "Not Available") {
    locationicon.style.opacity = 0.5;
  } else {
    locationicon.style.opacity = 1;
  }
  darklocationicon.style.opacity = 0;
  darkcompanyicon.style.opacity = 0;
  if (company1.textContent == "Not Available") {
    companyicon.style.opacity = 0.5;
  } else {
    companyicon.style.opacity = 1;
  }
  darkblogicon.style.opacity = 0;
  if (blogg.textContent == "Not Available") {
    blogicon.style.opacity = 0.5;
  } else {
    blogicon.style.opacity = 1;
  }
  company1.className = "building";
  blogg.className = "blog";
  locationn.className = "location";
  twitericon.src = "./images/004-twitter.svg";
  twitter1.className = "twitter";
  if (twitter1.textContent != "Not Available") {
    twitterdiv.style.opacity = 1;
  } else {
    twitterdiv.style.opacity = 0.5;
  }
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
});

let y = localStorage.getItem("task");
if (y % 2 == 0) {
  if (locationn.textContent == "Not Available") {
    locationicon.style.opacity = 0.5;
  } else {
    locationicon.style.opacity = 1;
  }
  darklocationicon.style.opacity = 0;
  darkcompanyicon.style.opacity = 0;
  if (company1.textContent == "Not Available") {
    companyicon.style.opacity = 0.5;
  } else {
    companyicon.style.opacity = 1;
  }
  darkblogicon.style.opacity = 0;
  if (blogg.textContent == "Not Available") {
    blogicon.style.opacity = 0.5;
  } else {
    blogicon.style.opacity = 1;
  }
  company1.className = "building";
  blogg.className = "blog";
  locationn.className = "location";
  twitericon.src = "./images/004-twitter.svg";
  twitter1.className = "twitter";
  if (twitter1.textContent != "Not Available") {
    twitterdiv.style.opacity = 1;
  } else {
    twitterdiv.style.opacity = 0.5;
  }
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
}
if (y % 2 == 1) {
  locationicon.style.opacity = 0;
  if (locationn.textContent == "Not Avaliable") {
    darklocationicon.style.opacity = 0.5;
  } else {
    darklocationicon.style.opacity = 1;
  }
  companyicon.style.opacity = 0;
  if (company1.textContent == "Not Avaliable") {
    darkcompanyicon.style.opacity = 0.5;
  } else {
    darkcompanyicon.style.opacity = 1;
  }
  blogicon.style.opacity = 0;
  if (blogg.textContent == "Not Avaliable") {
    darkblogicon.style.opacity = 0.5;
  } else {
    darkblogicon.style.opacity = 1;
  }
  blogicon.style.opacity = 0;
  if (blogg.textContent == "Not Available") {
    darkblogicon.style.opacity = 0.5;
  } else {
    darkblogicon.style.opacity = 1;
  }
  twitericon.src = "./images/004-twitter.png";
  twitter1.className = "darktwitter";
  if (twitter1.textContent != "Not Available") {
    twitterdiv.style.opacity = 1;
  } else {
    twitterdiv.style.opacity = 0.5;
  }
  blogg.className = "darkblog";
  company1.className = "darkbuilding";
  locationn.className = "darklocation";
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
  darkbtn.style.transition = "none";
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
