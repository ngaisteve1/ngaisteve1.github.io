function initAccordion(e, t) { document.addEventListener("click", (function (n) { if (n.target.matches(e + " .acc-title")) if (n.target.parentElement.classList.contains("acc-active")) n.target.parentElement.classList.remove("acc-active"); else { if (1 == t) { var c = document.querySelectorAll(e + " .acc-container"); Array.prototype.forEach.call(c, (function (e) { e.classList.remove("acc-active") })) } n.target.parentElement.classList.add("acc-active") } })) } function toggleDarkLight() { var e = document.getElementById("resume"), t = e.className; e.className = "dark-mode" == t ? "light-mode" : "dark-mode" } initAccordion(".accordion.acc-single-open", !0); var scroll = new SmoothScroll('a[href*="#"]'); let salaryBtn = document.getElementById("show"); salaryBtn.addEventListener("click", (() => { salaryBtn.style.display = "none", document.getElementById("salary").style.display = "inline-block" })), document.addEventListener("DOMContentLoaded", (() => { const e = document.getElementById("so-reputation"); fetch("https://api.stackexchange.com/2.2/users/4971859?site=stackoverflow.com").then((e => e.json())).then((t => { t.items.length > 0 ? (e.innerText = `(${t.items[0].reputation})`, e.style.display = "inline-block") : e.style.display = "none" })).catch((e => console.error(e))) })), window.onbeforeprint = function () { var e = document.querySelector(".accordion.acc-single-open"); e && e.removeAttribute("id") };

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.acc-container');

    sections.forEach(section => {
        section.addEventListener('click', function () {
            // Remove the class from all sections
            sections.forEach(sec => sec.classList.remove('section-clicked'));
            // Add the class to the clicked section
            section.classList.add('section-clicked');
        });
    });
});