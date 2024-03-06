document.addEventListener("DOMContentLoaded", function() {
    let links = document.querySelectorAll(".headers");

    links.forEach(function(link) {
        link.addEventListener("click", function() {
            localStorage.setItem("activeLinkId", link.id);
            updateActiveLinkStyle();
        });
    });

    function updateActiveLinkStyle() {
        let activeLinkId = localStorage.getItem("activeLinkId");
        if (activeLinkId) {
            links.forEach(function(link) {
                if (link.id === activeLinkId) {
                    link.classList.remove("link-secondary");
                    link.classList.add("link-danger");
                } else {
                    link.classList.remove("link-danger");
                    link.classList.add("link-secondary");
                }
            });
        }
    }

    updateActiveLinkStyle();
});
