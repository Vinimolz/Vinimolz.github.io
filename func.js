let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`nav li a[href*='${id}']`).classList.add('active');
            return; // Exit the loop once the active section is found
        }
    });
};

function copyToClipboard(element) {
    // Create a range to select the text within the email element
    var range = document.createRange();
    range.selectNode(element);

    // Create a selection to select the range
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    // Execute the copy command
    document.execCommand("copy");

    // Clear the selection
    selection.removeAllRanges();

    // Optionally, provide user feedback
    alert("Email copied to clipboard: " + element.innerText);
}
