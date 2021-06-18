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

function checkhash(e) {
  if (location.hash?.length > 1) {
    console.log("redirect");
    // redirect();
  } else {
    console.log("hello");
    // generatelink();
  }
}
