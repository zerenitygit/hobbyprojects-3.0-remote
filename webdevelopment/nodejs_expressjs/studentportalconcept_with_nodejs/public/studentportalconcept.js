flexregions = document.getElementById("flexregions");

selectlanguage = document.getElementById("selectlanguage");
usersettingspicarrow = document.getElementById("usersettingspicarrow");

selectlanguage.addEventListener("click", selectLanguageMenu);
usersettingspicarrow.addEventListener("click", userSettingsMenu);

function userSettingsMenu() {
  x = document.getElementById("usersettingsul");
  document.getElementById("usersettingsul").classList.toggle("active");

  y = document.querySelectorAll("#usersettingsul li");

  y.forEach((option) => {
    option.addEventListener("click", () => {
      x.classList.remove("active");
    });
  });

  x.addEventListener("mouseleave", () => {
    x.classList.remove("active");
  });
}

selectlanguageul = document.getElementById("selectlanguageul");

function selectLanguageMenu() {
  x = document.getElementById("selectlanguageul");
  x.classList.toggle("active");

  x.addEventListener("mouseleave", () => {
    x.classList.remove("active");
  });
}

let flexregion1children = region1.children;
let flexregion2children = region2.children;
let flexregion3children = region3.children;
let flexregion4children = region4.children;
let flexregion5children = region5.children;
let flexregion6children = region6.children;

flexregionlivechildren = flexregions.children;

liveregion1 = flexregionlivechildren[0];
liveregion2 = flexregionlivechildren[1];
liveregion3 = flexregionlivechildren[2];
liveregion4 = flexregionlivechildren[3];
liveregion5 = flexregionlivechildren[4];
liveregion6 = flexregionlivechildren[5];

midbox1 = document.getElementById("midbox1");
midbox2 = document.getElementById("midbox2");
midbox3 = document.getElementById("midbox3");
midbox4 = document.getElementById("midbox4");
midbox5 = document.getElementById("midbox5");
midbox6 = document.getElementById("midbox6");

region1 = document.getElementById("region1");
region2 = document.getElementById("region2");
region3 = document.getElementById("region3");
region4 = document.getElementById("region4");
region5 = document.getElementById("region5");
region6 = document.getElementById("region6");

pen = document.getElementById("pen");
tasks = document.getElementById("tasks");
megaphone = document.getElementById("megaphone");
group = document.getElementById("group");
deadline = document.getElementById("deadline");
inbox = document.getElementById("inbox");

allRegions = document.querySelectorAll(".region");

allSideBarRegionAdders = document.querySelectorAll(".sidebar i");

arraySideBarAdders = [...allSideBarRegionAdders];

arraySideBarAdders.shift();

document.getElementById("menutoggle").addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("active");

  const closesidebar = document.getElementById("closesidebar");
  closesidebar.addEventListener("click", function () {
    document.getElementById("sidebar").classList.remove("active");
  });
});

navuloptions = document.querySelectorAll("#navul li");

navuloptionsArray = [];

for (i = 0; i < navuloptions.length; i++) {
  if (navuloptions[i].hasAttribute("id") == true) {
    navuloptionsArray.push(navuloptions[i]);
  }
}

navuloptionsArray.shift();

navuloptionsArray.forEach((option) => {
  option.addEventListener("click", () => {
    optionid = option.id;
    abc = document.querySelector("#" + optionid + "ul");
    abc.classList.toggle("active");
  });

  option.addEventListener("mouseleave", () => {
    optionid = option.id;
    abc = document.querySelector("#" + optionid + "ul");
    abc.classList.remove("active");
  });
});

const regions = document.querySelectorAll(".region");

const midboxes = document.querySelectorAll(".midbox");

const regionsArray = [...regions];

const midboxesArray = [...midboxes];

let draggable;

draggableBoxRegionLogger = [];

midboxesArray.forEach((midbox) => {
  midbox.addEventListener("dragstart", () => {
    itemDraggedRegion = midbox.parentElement;
    itemBeingDragged = midbox;

    itemDraggedRegion.classList.add("dragOriginRegion");
    itemBeingDragged.classList.add("draggedBox");
  });

  midbox.addEventListener("dragend", () => {
    itemDraggedRegion.classList.remove("dragOriginRegion");
    itemBeingDragged.classList.remove("draggedBox");
  });
});

regionsArray.forEach((region) => {
  region.addEventListener("mousedown", () => {
    clickedregion = region;
  });

  region.addEventListener("dragstart", () => {
    draggable = document.querySelector(".draggedBox");
  });
  region.addEventListener("dragover", () => {
    draggedoverregion = region;
  });
  region.addEventListener("dragend", () => {
    draggedoverregion.appendChild(draggable);
    clickedregion.appendChild(draggedoverregion.children[0]);

    flexregionschildren = flexregions.children;

    flexregion1children = region1.children;
    flexregion2children = region2.children;
    flexregion3children = region3.children;
    flexregion4children = region4.children;
    flexregion5children = region5.children;
    flexregion6children = region6.children;

    midbox1withcurreg = midbox1.parentElement;
    midbox2withcurreg = midbox2.parentElement;
    midbox3withcurreg = midbox3.parentElement;
    midbox4withcurreg = midbox4.parentElement;
    midbox5withcurreg = midbox5.parentElement;
    midbox6withcurreg = midbox6.parentElement;

    liveregion1 = flexregionlivechildren[0];
    liveregion2 = flexregionlivechildren[1];
    liveregion3 = flexregionlivechildren[2];
    liveregion4 = flexregionlivechildren[3];
    liveregion5 = flexregionlivechildren[4];
    liveregion6 = flexregionlivechildren[5];
  });
});

trashIcons = document.querySelectorAll(".fa-trash-alt");

trashIconsArray = [...trashIcons];

trashIconsArray.forEach((icon) => {
  icon.addEventListener("click", () => {
    removeRegion(icon);
  });
});

function removeRegion(icon) {
  x = icon.parentElement;
  y = x.parentElement;

  y.remove();
  adjustMidboxSize();

  emptyStateContainer = document.createElement("div");

  emptyStateContainer.id = "emptyStateContainer";
  emptyStateContainerID = emptyStateContainer.id;

  div2 = document.createElement("div");
  div3 = document.createElement("div");

  emptyStateContainer.style.height = "80%";
  emptyStateContainer.style.width = "80%";
  emptyStateContainer.style.border = "8px #e3e3e3 solid";
  emptyStateContainer.style.display = "flex";
  emptyStateContainer.style.justifyContent = "center";
  emptyStateContainer.style.alignItems = "center";
  emptyStateContainer.style.flexDirection = "column";
  emptyStateContainer.style.margin = "auto";

  div2.innerText = "Empty Canvas. Add Interfaces To the Canvas.";
  div2.style.marginBottom = "20px";

  div3.style.padding = "20px 40px";
  div3.style.border = "1px black solid";
  div3.innerText = "Open Sidebar";
  div3.style.cursor = "pointer";
  div3.style.borderRadius = "10px";

  emptyStateContainer.appendChild(div2);
  emptyStateContainer.appendChild(div3);

  if (
    flexregions.contains(midbox1) === false &&
    flexregions.contains(midbox2) === false &&
    flexregions.contains(midbox3) === false &&
    flexregions.contains(midbox4) === false &&
    flexregions.contains(midbox5) === false &&
    flexregions.contains(midbox6) === false
  ) {
    flexregions.appendChild(emptyStateContainer);
    midSectionOpenSidebar(div3);
  }
}

flexregionlivechildren[0].classList.add("flexbasis33");
flexregionlivechildren[1].classList.add("flexbasis33");
flexregionlivechildren[2].classList.add("flexbasis33");
flexregionlivechildren[3].classList.add("flexbasis33");
flexregionlivechildren[4].classList.add("flexbasis33");
flexregionlivechildren[5].classList.add("flexbasis33");

function adjustMidboxSize() {
  livenumberofregions = document.querySelectorAll(".region");

  region1childsid = flexregion1children[0].id;
  region2childsid = flexregion2children[0].id;
  region3childsid = flexregion3children[0].id;
  region4childsid = flexregion4children[0].id;
  region5childsid = flexregion5children[0].id;
  region6childsid = flexregion6children[0].id;

  livemidbox1 = document.getElementById(region1childsid);
  livemidbox2 = document.getElementById(region2childsid);
  livemidbox3 = document.getElementById(region3childsid);
  livemidbox4 = document.getElementById(region4childsid);
  livemidbox5 = document.getElementById(region5childsid);
  livemidbox6 = document.getElementById(region6childsid);

  if (livenumberofregions.length === 5) {
    if (
      flexregions.contains(liveregion1) === false ||
      flexregions.contains(liveregion2) === false ||
      flexregions.contains(liveregion3) === false
    ) {
      flexregionlivechildren[0].classList.add("flexbasis50");
      flexregionlivechildren[1].classList.add("flexbasis50");
    } else if (
      flexregions.contains(liveregion4) === false ||
      flexregions.contains(liveregion5) === false ||
      flexregions.contains(liveregion6) === false
    ) {
      flexregionlivechildren[4].classList.add("flexbasis50");
      flexregionlivechildren[3].classList.add("flexbasis50");
    }
  }

  if (livenumberofregions.length === 4) {
    if (
      (flexregions.contains(liveregion1) === false &&
        flexregions.contains(liveregion2) === false) ||
      (flexregions.contains(liveregion1) === false &&
        flexregions.contains(liveregion3) === false) ||
      (flexregions.contains(liveregion2) === false &&
        flexregions.contains(liveregion3) === false)
    ) {
      flexregionlivechildren[0].classList.remove("flexbasis50");

      flexregionlivechildren[0].classList.add("flexbasis100");
    } else if (
      (flexregions.contains(liveregion4) === false &&
        flexregions.contains(liveregion5) === false) ||
      (flexregions.contains(liveregion4) === false &&
        flexregions.contains(liveregion6) === false) ||
      (flexregions.contains(liveregion5) === false &&
        flexregions.contains(liveregion6) === false)
    ) {
      flexregionlivechildren[3].classList.remove("flexbasis50");

      flexregionlivechildren[3].classList.add("flexbasis100");
    } else if (
      (flexregions.contains(liveregion1) === false &&
        flexregions.contains(liveregion4) === false) ||
      (flexregions.contains(liveregion1) === false &&
        flexregions.contains(liveregion5) === false) ||
      (flexregions.contains(liveregion1) === false &&
        flexregions.contains(liveregion6) === false) ||
      (flexregions.contains(liveregion2) === false &&
        flexregions.contains(liveregion4) === false) ||
      (flexregions.contains(liveregion2) === false &&
        flexregions.contains(liveregion5) === false) ||
      (flexregions.contains(liveregion2) === false &&
        flexregions.contains(liveregion6) === false) ||
      (flexregions.contains(liveregion3) === false &&
        flexregions.contains(liveregion4) === false) ||
      (flexregions.contains(liveregion3) === false &&
        flexregions.contains(liveregion5) === false) ||
      (flexregions.contains(liveregion3) === false &&
        flexregions.contains(liveregion6) === false)
    ) {
      flexregionlivechildren[0].classList.remove("flexbasis33");
      flexregionlivechildren[1].classList.remove("flexbasis33");
      flexregionlivechildren[2].classList.remove("flexbasis33");
      flexregionlivechildren[3].classList.remove("flexbasis33");

      flexregionlivechildren[0].classList.add("flexbasis50");
      flexregionlivechildren[1].classList.add("flexbasis50");
      flexregionlivechildren[2].classList.add("flexbasis50");
      flexregionlivechildren[3].classList.add("flexbasis50");
    }
  }

  if (livenumberofregions.length === 3) {
    if (flexregionlivechildren[0].classList.contains("flexbasis100") === true) {
      flexregionlivechildren[1].classList.add("flexbasis50");
      flexregionlivechildren[2].classList.add("flexbasis50");
    } else if (
      flexregionlivechildren[0].classList.contains("flexbasis50") === true
    ) {
      flexregionlivechildren[2].classList.add("flexbasis100");
    } else if (
      (flexregions.contains(liveregion1) === false &&
        flexregions.contains(liveregion2) === false &&
        flexregions.contains(liveregion3) === false) ||
      (flexregions.contains(liveregion4) === false &&
        flexregions.contains(liveregion5) === false &&
        flexregions.contains(liveregion6) === false)
    ) {
      flexregionlivechildren[0].classList.add("flexbasis33");
      flexregionlivechildren[1].classList.add("flexbasis33");
      flexregionlivechildren[2].classList.add("flexbasis33");
    } else if (
      flexregionlivechildren[0].classList.contains("flexbasis33") === true
    ) {
      flexregionlivechildren[0].classList.add("flexbasis50");
      flexregionlivechildren[1].classList.add("flexbasis50");
    }
  }

  if (livenumberofregions.length === 2) {
    if (flexregionlivechildren[1].classList.contains("flexbasis33") === true) {
      flexregionlivechildren[0].classList.add("flexbasis50");
      flexregionlivechildren[1].classList.add("flexbasis50");
    }
    if (flexregionlivechildren[0].classList.contains("flexbasis100") === true) {
      flexregionlivechildren[1].classList.add("flexbasis100");
    }
    if (flexregionlivechildren[1].classList.contains("flexbasis100") === true) {
      flexregionlivechildren[0].classList.add("flexbasis100");
    }
  }

  if (livenumberofregions.length === 1) {
    flexregionlivechildren[0].classList.add("flexbasis100");
  }
}

function midSectionOpenSidebar(div3) {
  div3.addEventListener("click", () => {
    document.getElementById("sidebar").classList.add("active");
  });
}

let flexregionschildren;

midbox1withcurreg = midbox1.parentElement;
midbox2withcurreg = midbox2.parentElement;
midbox3withcurreg = midbox3.parentElement;
midbox4withcurreg = midbox4.parentElement;
midbox5withcurreg = midbox5.parentElement;
midbox6withcurreg = midbox6.parentElement;

arraySideBarAdders.forEach((adder) => {
  adder.addEventListener("click", () => {
    if (adder === document.getElementById("pen")) {
      if (flexregions.contains(midbox1) === false) {
        flexregions.appendChild(midbox1withcurreg);
      } else {
        document.getElementById("adderror1").classList.add("activeerror");

        setTimeout(function () {
          document.getElementById("adderror1").classList.remove("activeerror");
        }, 3000);
      }
    } else if (adder === document.getElementById("tasks")) {
      if (flexregions.contains(midbox2) === false) {
        flexregions.appendChild(midbox2withcurreg);
      } else {
        document.getElementById("adderror2").classList.add("activeerror");

        setTimeout(function () {
          document.getElementById("adderror2").classList.remove("activeerror");
        }, 3000);
      }
    } else if (adder === document.getElementById("megaphone")) {
      if (flexregions.contains(midbox3) === false) {
        flexregions.appendChild(midbox3withcurreg);
      } else {
        document.getElementById("adderror3").classList.add("activeerror");

        setTimeout(function () {
          document.getElementById("adderror3").classList.remove("activeerror");
        }, 3000);
      }
    } else if (adder === document.getElementById("group")) {
      if (flexregions.contains(midbox4) === false) {
        flexregions.appendChild(midbox4withcurreg);
      } else {
        document.getElementById("adderror4").classList.add("activeerror");

        setTimeout(function () {
          document.getElementById("adderror4").classList.remove("activeerror");
        }, 3000);
      }
    } else if (adder === document.getElementById("deadline")) {
      if (flexregions.contains(midbox5) === false) {
        flexregions.appendChild(midbox5withcurreg);
      } else {
        document.getElementById("adderror5").classList.add("activeerror");

        setTimeout(function () {
          document.getElementById("adderror5").classList.remove("activeerror");
        }, 3000);
      }
    } else if (adder === document.getElementById("inbox")) {
      if (flexregions.contains(midbox6) === false) {
        flexregions.appendChild(midbox6withcurreg);
      } else {
        document.getElementById("adderror6").classList.add("activeerror");

        setTimeout(function () {
          document.getElementById("adderror6").classList.remove("activeerror");
        }, 3000);
      }
    }

    flexregion1children = region1.children;
    flexregion2children = region2.children;
    flexregion3children = region3.children;
    flexregion4children = region4.children;
    flexregion5children = region5.children;
    flexregion6children = region6.children;

    liveregion1 = flexregionlivechildren[0];
    liveregion2 = flexregionlivechildren[1];
    liveregion3 = flexregionlivechildren[2];
    liveregion4 = flexregionlivechildren[3];
    liveregion5 = flexregionlivechildren[4];
    liveregion6 = flexregionlivechildren[5];

    emptyStateContainer = document.getElementById("emptyStateContainer");

    if (flexregions.contains(emptyStateContainer) === true) {
      emptyStateContainerRemover(emptyStateContainer);
    }
    adjustMidboxSizeAfterMidboxAddition();
  });
});

function emptyStateContainerRemover(emptyStateContainer) {
  if (
    flexregions.contains(midbox1) === true ||
    flexregions.contains(midbox2) === true ||
    flexregions.contains(midbox3) === true ||
    flexregions.contains(midbox4) === true ||
    flexregions.contains(midbox5) === true ||
    flexregions.contains(midbox6) === true
  ) {
    emptyStateContainer.remove();
  }
}

function adjustMidboxSizeAfterMidboxAddition() {
  regionsOnDisplay = flexregions.children;

  secondLastItem = regionsOnDisplay[regionsOnDisplay.length - 2];

  if (flexregions.children.length === 1) {
    firstChild = flexregions.children[0];

    firstChild.classList.remove("flexbasis50");

    firstChild.classList.remove("flexbasis33");

    firstChild.classList.add("flexbasis100");
  } else if (flexregions.children.length === 2) {
    firstChild = flexregions.children[0];
    secondChild = flexregions.children[1];

    if (secondLastItem.classList.contains("flexbasis100") === true) {
      firstChild.classList.remove("flexbasis100");

      firstChild.classList.remove("flexbasis33");

      secondChild.classList.remove("flexbasis100");

      secondChild.classList.remove("flexbasis33");

      firstChild.classList.add("flexbasis50");
      secondChild.classList.add("flexbasis50");
    }
  } else if (flexregions.children.length === 3) {
    firstChild = flexregions.children[0];
    secondChild = flexregions.children[1];
    thirdChild = flexregions.children[2];

    if (secondLastItem.classList.contains("flexbasis50") === true) {
      firstChild.classList.remove("flexbasis50");
      firstChild.classList.remove("flexbasis100");

      secondChild.classList.remove("flexbasis50");
      secondChild.classList.remove("flexbasis100");

      thirdChild.classList.remove("flexbasis50");
      thirdChild.classList.remove("flexbasis100");

      firstChild.classList.add("flexbasis50");
      secondChild.classList.add("flexbasis50");
      thirdChild.classList.add("flexbasis100");
    } else if (secondLastItem.classList.contains("flexbasis100") === true) {
      firstChild.classList.remove("flexbasis50");
      firstChild.classList.remove("flexbasis100");

      secondChild.classList.remove("flexbasis50");
      secondChild.classList.remove("flexbasis100");

      thirdChild.classList.remove("flexbasis50");
      thirdChild.classList.remove("flexbasis100");

      firstChild.classList.add("flexbasis50");
      secondChild.classList.add("flexbasis50");
      thirdChild.classList.add("flexbasis100");
    }
  } else if (flexregions.children.length === 4) {
    fourthChild = flexregions.children[3];

    if (secondLastItem.classList.contains("flexbasis100") === true) {
      fourthChild.classList.remove("flexbasis100");
      fourthChild.classList.remove("flexbasis33");

      fourthChild.classList.add("flexbasis50");

      flexregionlivechildren[2].classList.remove("flexbasis100");
      flexregionlivechildren[2].classList.add("flexbasis50");
    } else if (secondLastItem.classList.contains("flexbasis50") === true) {
      regionsOnDisplay[0].classList.remove("flexbasis100");
      regionsOnDisplay[1].classList.remove("flexbasis100");
      regionsOnDisplay[2].classList.remove("flexbasis100");
      regionsOnDisplay[3].classList.remove("flexbasis100");

      regionsOnDisplay[0].classList.remove("flexbasis33");
      regionsOnDisplay[1].classList.remove("flexbasis33");
      regionsOnDisplay[2].classList.remove("flexbasis33");
      regionsOnDisplay[3].classList.remove("flexbasis33");

      regionsOnDisplay[0].classList.add("flexbasis50");
      regionsOnDisplay[1].classList.add("flexbasis50");

      regionsOnDisplay[2].classList.add("flexbasis50");
      regionsOnDisplay[3].classList.add("flexbasis50");
    } else if (secondLastItem.classList.contains("flexbasis33") === true) {
      regionsOnDisplay[3].classList.remove("flexbasis50");
      regionsOnDisplay[3].classList.remove("flexbasis33");
      regionsOnDisplay[3].classList.add("flexbasis100");
    }
  } else if (flexregions.children.length === 5) {
    if (secondLastItem.classList.contains("flexbasis100") === true) {
      flexregionlivechildren[3].classList.remove("flexbasis100");
      flexregionlivechildren[4].classList.remove("flexbasis100");

      flexregionlivechildren[3].classList.add("flexbasis50");
      flexregionlivechildren[4].classList.add("flexbasis50");
    } else if (secondLastItem.classList.contains("flexbasis50") === true) {
      regionsOnDisplay[0].classList.remove("flexbasis100");
      regionsOnDisplay[1].classList.remove("flexbasis100");
      regionsOnDisplay[2].classList.remove("flexbasis100");
      regionsOnDisplay[3].classList.remove("flexbasis100");
      regionsOnDisplay[4].classList.remove("flexbasis100");

      regionsOnDisplay[0].classList.remove("flexbasis50");
      regionsOnDisplay[1].classList.remove("flexbasis50");
      regionsOnDisplay[2].classList.remove("flexbasis50");

      regionsOnDisplay[0].classList.add("flexbasis33");
      regionsOnDisplay[1].classList.add("flexbasis33");
      regionsOnDisplay[2].classList.add("flexbasis33");
      regionsOnDisplay[3].classList.add("flexbasis50");
      regionsOnDisplay[4].classList.add("flexbasis50");
    } else if (secondLastItem.classList.contains("flexbasis33") === true) {
      regionsOnDisplay[0].classList.remove("flexbasis100");
      regionsOnDisplay[1].classList.remove("flexbasis100");
      regionsOnDisplay[2].classList.remove("flexbasis100");
      regionsOnDisplay[3].classList.remove("flexbasis100");
      regionsOnDisplay[4].classList.remove("flexbasis100");

      regionsOnDisplay[2].classList.remove("flexbasis50");
      regionsOnDisplay[3].classList.remove("flexbasis50");
      regionsOnDisplay[4].classList.remove("flexbasis50");

      regionsOnDisplay[0].classList.add("flexbasis50");
      regionsOnDisplay[1].classList.add("flexbasis50");
      regionsOnDisplay[2].classList.add("flexbasis33");
      regionsOnDisplay[3].classList.add("flexbasis33");
      regionsOnDisplay[4].classList.add("flexbasis33");
    }
  } else if (flexregions.children.length === 6) {
    regionsOnDisplay[0].classList.remove("flexbasis100");
    regionsOnDisplay[1].classList.remove("flexbasis100");
    regionsOnDisplay[2].classList.remove("flexbasis100");
    regionsOnDisplay[3].classList.remove("flexbasis100");
    regionsOnDisplay[4].classList.remove("flexbasis100");
    regionsOnDisplay[5].classList.remove("flexbasis100");

    regionsOnDisplay[0].classList.remove("flexbasis50");
    regionsOnDisplay[1].classList.remove("flexbasis50");
    regionsOnDisplay[2].classList.remove("flexbasis50");
    regionsOnDisplay[3].classList.remove("flexbasis50");
    regionsOnDisplay[4].classList.remove("flexbasis50");
    regionsOnDisplay[5].classList.remove("flexbasis50");

    regionsOnDisplay[0].classList.add("flexbasis33");
    regionsOnDisplay[1].classList.add("flexbasis33");
    regionsOnDisplay[2].classList.add("flexbasis33");
    regionsOnDisplay[3].classList.add("flexbasis33");
    regionsOnDisplay[4].classList.add("flexbasis33");
    regionsOnDisplay[5].classList.add("flexbasis33");
  }
}

languageslistitems = document.querySelectorAll(".selectlanguage ul li");

languagetogglebardiv = document.getElementById("languagetogglebar");

languagetogglebarchild1 = languagetogglebardiv.children[0];
languagetogglebarchild2 = languagetogglebardiv.children[1];
languagetogglebarchild3 = languagetogglebardiv.children[2];

currentlanguage = document.getElementById("currentlanguage");
currentimage = document.getElementById("currentimage");
currenticon = document.getElementById("currenticon");

languageElementDatabase = {
  german: {
    p: "Deutsch",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
    i: "",
  },
  english: {
    p: "English",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
    i: "",
  },
  spanish: {
    p: "Español",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png",
    i: "",
  },
  french: {
    p: "Français",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png",
    i: "",
  },
  swahili: {
    p: "Kiswahili",
    img: "https://i.pinimg.com/originals/d3/f3/63/d3f363814e78d82e51562bcee65ace30.png",
    i: "",
  },
  portugese: {
    p: "Português",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/255px-Flag_of_Portugal.svg.png",
    i: "",
  },
  swedish: {
    p: "Svenska",
    img: "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg",
    i: "",
  },
  vietnamese: {
    p: "Tiếng Việt",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1024px-Flag_of_Vietnam.svg.png",
    i: "",
  },
  arabic: {
    p: "العربية",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Arabic-Language-Flag.svg",
    i: "",
  },
  chinese: {
    p: "中文",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1200px-Flag_of_the_People%27s_Republic_of_China.svg.png",
    i: "",
  },
  japanese: {
    p: "日本語",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png",
    i: "",
  },
  korean: {
    p: "한글",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/255px-Flag_of_South_Korea.svg.png",
    i: "",
  },
  thai: {
    p: "ภาษาไทย",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/1200px-Flag_of_Thailand.svg.png",
    i: "",
  },
};

langChoice_p = document.createElement("p");
langChoice_img = document.createElement("img");
langChoice_i = document.createElement("i");

languageslistitems.forEach((language) => {
  language.addEventListener("click", () => {
    languagetogglebarchild1.remove();
    languagetogglebarchild2.remove();
    languagetogglebarchild3.remove();

    languageid = language.id;

    langChoice_p.innerText = languageElementDatabase[languageid]["p"];

    langChoice_img.setAttribute(
      "src",
      `${languageElementDatabase[languageid]["img"]}`
    );

    langChoice_i.setAttribute("class", "fas fa-angle-down");

    languagetogglebardiv.appendChild(langChoice_p);
    languagetogglebardiv.appendChild(langChoice_img);
    languagetogglebardiv.appendChild(langChoice_i);
  });
});
