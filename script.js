const tabsBox = document.querySelector(".tabs-box");
const arrowIcons = document.querySelectorAll(".icon i"),
  allTabs = document.querySelectorAll(".tab");

let isDragging = false;
const handeIcons = () => {
  let scrolVal = Math.round(tabsBox.scrollLeft);
  let maxScrollWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
  arrowIcons[0].parentElement.style.display = scrolVal > 0 ? "flex" : "none";
  arrowIcons[1].parentElement.style.display =
    maxScrollWidth > scrolVal ? "flex" : "none";
};
arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    console.log(icon.id);
    tabsBox.scrollLeft += icon.id === "left" ? -350 : 350;
    setTimeout(() => handeIcons(), 50);
  });
});
allTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabsBox.querySelector(".active").classList.remove("active");
    tab.classList.add("active");
  });
});
const dragging = (e) => {
  tabsBox.scrollLeft -= e.movementX;
  tabsBox.classList.add("dragging");
  if (!isDragging) return;
  handeIcons();
};

const dragStop = () => {
  isDragging = false;
  tabsBox.classList.remove("dragging");
};
tabsBox.addEventListener("mousedown", () => (isDragging = true));
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
