// Kung Fu Panda Character Look Up

// Event Listener For Enter KeyDown
const html = document.documentElement;
html.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    searchClicked();
  }
});

// Users array
let characterInfo = [
  { name: "po", quote: "Buddy, I am the Dragon Warrior", imageSource: "po" },
  {
    name: "dragon warrior",
    quote: "Buddy, I am the Dragon Warrior",
    imageSource: "po",
  },
  {
    name: "master tigress",
    quote: "That was pretty hardcore!",
    imageSource: "tigress",
  },
  { name: "master mantis", quote: "Fear the bug!", imageSource: "mantis" },
  { name: "master monkey", quote: "We should hang out", imageSource: "monkey" },
  {
    name: "master crane",
    quote: "You can chain my body, but you will never chain my warrior spirit!",
    imageSource: "crane",
  },
  {
    name: "master viper",
    quote: "I don't need to bite to fight!",
    imageSource: "viper",
  },
  {
    name: "master shifu",
    quote: "There is now a Level Zero.",
    imageSource: "shifu",
  },
  {
    name: "mr. ping",
    quote: "We are noodle folk, broth runs through our veins!",
    imageSource: "mr-ping",
  },
];

// verifying info typed by user, as a function
function toVerifyInfo(content) {
  // checking if the name inputed matches the name within characterInfo, with both master and the specific character name, or just the name itself (without the word master)
  if (name === content.name || name === content.name.split(" ")[1]) {
    document.getElementById("character-name").textContent = `${content.name
      .split(" ")[0]
      .charAt(0)
      .toUpperCase()}${content.name
      .split(" ")[0]
      .slice(1, content.name.split(" ")[0].length + 1)} ${
      content.name.split(" ")[1] === undefined
        ? ""
        : content.name.split(" ")[1].charAt(0).toUpperCase() +
          content.name
            .split(" ")[1]
            .slice(1, content.name.split(" ")[1].length + 1)
    }`;
    document.getElementById("main-img").src = `img/${content.imageSource}.png`;
    document.getElementById("quote").innerHTML = content.quote;
    verifiedStatus = true;
    return;
  }
}

// event listener onto search button
document.getElementById("search").addEventListener("click", searchClicked);

// Event Function
function searchClicked() {
  verifiedStatus = false;
  // Get Input Value (what character to look for?)
  name = document.getElementById("input-name").value.toLowerCase().trim();
  // checking to see if the name typed in by user matches
  characterInfo.forEach((item) => toVerifyInfo(item));
  if (!verifiedStatus) {
    document.getElementById("character-name").textContent = "?????";
    document.getElementById("main-img").src = `img/question-mark.png`;
    document.getElementById("quote").innerHTML = "Character Not Found";
  }
}
