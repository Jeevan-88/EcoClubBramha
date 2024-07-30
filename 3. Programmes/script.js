document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const target = tab.getAttribute("data-tab");
            tabContents.forEach(content => {
                content.classList.remove("active");
                if (content.getAttribute("id") === target) {
                    content.classList.add("active");
                }
            });
        });
    });
});
