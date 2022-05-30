// Accordion
const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

const panelConfidentiality = document.getElementById('panel-confidentiality');
if(window.location.href === 'https://rocket-science.pro/contract/contract.html#confidentiality') {
    panelConfidentiality.style.display = 'block'
}
