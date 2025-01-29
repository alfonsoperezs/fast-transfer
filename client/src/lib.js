function buildSticker(type, name) {
    const div = document.createElement("div");
    div.classList.add("content-sticker");

    const img = document.createElement("img");
    img.src = "assets/folder.png";
    img.alt = "Directory";

    const p = document.createElement("p");
    p.textContent = name;

    const button = document.createElement("button");
    button.classList.add("btn-download");
    button.textContent = "Download";

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(button);

    return div;
}