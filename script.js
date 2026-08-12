function initAccordion() {
    document.addEventListener("click", function (event) {
        const title = event.target.closest(".accordion .acc-title");
        if (!title) {
            return;
        }

        const accordion = title.closest(".accordion");
        const container = title.closest(".acc-container");
        const isActive = container.classList.contains("acc-active");

        if (accordion.classList.contains("acc-single-open")) {
            accordion.querySelectorAll(".acc-container").forEach(function (item) {
                item.classList.remove("acc-active", "section-clicked");
            });
            accordion.querySelectorAll(".acc-title").forEach(function (item) {
                item.classList.remove("active", "highlight");
            });
        }

        if (!isActive) {
            container.classList.add("acc-active", "section-clicked");
            title.classList.add("active", "highlight");
        }
    });
}

function toggleDarkLight() { var e = document.getElementById("resume"), t = e.className; e.className = "dark-mode" == t ? "light-mode" : "dark-mode" }
initAccordion(); var scroll = new SmoothScroll('a[href*="#"]'); document.addEventListener("DOMContentLoaded", (() => { let salaryBtn = document.getElementById("show"); if (salaryBtn) { salaryBtn.addEventListener("click", (() => { salaryBtn.style.display = "none", document.getElementById("salary").style.display = "inline-block" })); } const e = document.getElementById("so-reputation"); if (e) { fetch("https://api.stackexchange.com/2.2/users/4971859?site=stackoverflow.com").then((e => e.json())).then((t => { t.items.length > 0 ? (e.innerText = `(${t.items[0].reputation})`, e.style.display = "inline-block") : e.style.display = "none" })).catch((e => console.error(e))); } })), window.onbeforeprint = function () { var e = document.querySelector(".accordion.acc-single-open"); e && e.removeAttribute("id") };

function showTooltip(event) {
    let tooltip = document.getElementById("tooltip");

    // Position tooltip near the clicked help icon
    tooltip.style.left = event.pageX + "px";
    tooltip.style.top = event.pageY + 20 + "px";

    tooltip.style.display = "block";

    // Hide tooltip after 2 seconds
    setTimeout(() => {
        tooltip.style.display = "none";
    }, 2000);
}

// POC Modal Handler - using event delegation for robustness
document.addEventListener('click', function (e) {
    if (e.target && e.target.id === 'openPocModal') {
        e.preventDefault();
        e.stopPropagation();
        var modal = document.getElementById('pocModal');
        if (modal) {
            modal.style.display = 'block';
        }
    }
    if (e.target && (e.target.id === 'closePocModal' || e.target.id === 'closePocModalBtn')) {
        var modal = document.getElementById('pocModal');
        if (modal) {
            modal.style.display = 'none';
        }
    }
});

// Close modal when clicking outside of it
document.addEventListener('click', function (event) {
    var modal = document.getElementById('pocModal');
    if (modal && event.target === modal) {
        modal.style.display = 'none';
    }
});