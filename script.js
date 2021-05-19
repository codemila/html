async function load() {
    const headerel = document.getElementsByTagName("header")[0];
    const footerel = document.getElementsByTagName("footer")[0];

    const [headercontent, footercontent] = await Promise.all([
        fetch("/header.html"),
        fetch("/footer.html")
    ]);
    

    if (headercontent.ok && headerel) {
        headerel.innerHTML = await headercontent.text();
    }
    if (footercontent.ok && footerel) {
        footerel.innerHTML = await footercontent.text();
    }
}

window.addEventListener('DOMContentLoaded', () => {
    load();
  });