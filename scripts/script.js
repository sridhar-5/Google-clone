//selecting the search bar here
const searchtext = document.querySelector(".search-text");

//selecting the search button here
const searchbutton = document.querySelector(".Google-search");

//the typing effect comes from this function
// thye idea behind this function is to insert all the characters
//one afetr the other with some sleep time to bring in the effect of typing

async function typingeffect(input_text) {
  let delay = 300 + Math.floor(Math.random() * 50);
  for (let letter of input_text) {
    searchtext.textContent = searchtext.textContent + letter;
    await sleep(delay);
  }
  await sleep(1000);
}

function sleep(delay) {
  //i can't find any reason to reject this promise so resolved everything
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

window.addEventListener("load", checkhash);
//we check if the has for that page exist or not if it exists we redirect
//if not we assume the user wants to generate a new link

async function checkhash(e) {
  if (location.hash?.length > 1) {
    console.log("redirect");
    query = atob(location.hash);
    await typingeffect(query);
    location.replace(
      `https://google.com/search?q=${encodeURIComponent(query)}`
    );
    // redirect();
  } else {
    // generatelink();
    console.log("hello");
    generateLink();
  }
}

function generateLink() {
  searchtext.addEventListener("input", (e) => {
    location.hash = btoa(e.target.value);
    searchbutton.textContent = "Copy Link";
  });

  searchbutton.addEventListener("click", CopyLinkClipBoard);
}

async function CopyLinkClipBoard(e) {
  await navigator.clipboard.writeText(location.href);
  let oritext = searchbutton.textContent;
  searchbutton.textContent = "Copied!";
  setTimeout(() => {
    searchbutton.textContent = oritext;
  }, 1000);
}
