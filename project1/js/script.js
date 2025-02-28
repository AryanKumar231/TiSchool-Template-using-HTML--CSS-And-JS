const domTree = document.body.innerHTML;

const updateDOM = () => {
    if (window.innerWidth < 1200) {
        if (document.body.innerHTML !== "Site is not available below this dimension") {
            document.body.innerHTML = "Site is not available below this dimension";
        }
    } else if (document.body.innerHTML !== domTree) {
        document.body.innerHTML = domTree;
    }
};

window.addEventListener("resize", updateDOM);

// Initial check to handle page load
updateDOM();
