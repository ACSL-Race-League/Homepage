const upcoming = document.querySelectorAll(".upcoming");
const passed = document.querySelectorAll(".passed");

passed.forEach(el => el.style.display = "none");

function showHideUpcomingEvents() {
    upcoming.forEach(el => el.style.display = "flex");
    passed.forEach(el => el.style.display = "none");
}

function showHidePassedEvents() {
    upcoming.forEach(el => el.style.display = "none");
    passed.forEach(el => el.style.display = "flex");
}

function showHideAllEvents() {
    upcoming.forEach(el => el.style.display = "flex");
    passed.forEach(el => el.style.display = "flex");
}
