function buildSticker(type, name) {
    const div = document.createElement("div");
    div.classList.add("content-sticker");

    const img = document.createElement("img");
    if(type == "directory"){
        img.src = "assets/folder.png";
        img.alt = "Directory";
    } else{
        img.src = "assets/file.png";
        img.alt = "File";
    }
    

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

function generateError(header, suggestion) {
    const error = document.getElementById('error');
    const container = document.createElement("div");
    container.className = "notifications-container";
    
    const errorAlert = document.createElement("div");
    errorAlert.className = "error-alert";
    
    const flexDiv = document.createElement("div");
    flexDiv.className = "flex";
    
    const iconDiv = document.createElement("div");
    iconDiv.className = "flex-shrink-0";
    
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("fill", "currentColor");
    svg.setAttribute("viewBox", "0 0 20 20");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.classList.add("error-svg");
    
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("clip-rule", "evenodd");
    path.setAttribute("fill-rule", "evenodd");
    path.setAttribute("d", "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z");
    
    svg.appendChild(path);
    iconDiv.appendChild(svg);
    
    const promptContainer = document.createElement("div");
    promptContainer.className = "error-prompt-container";
    
    const heading = document.createElement("p");
    heading.className = "error-prompt-heading";
    heading.textContent = header;
    
    const promptWrap = document.createElement("div");
    promptWrap.className = "error-prompt-wrap";
    
    const ul = document.createElement("ul");
    ul.className = "error-prompt-list";
    ul.setAttribute("role", "list");
    
    const li1 = document.createElement("li");
    li1.textContent = suggestion;
    
    ul.appendChild(li1);
    promptWrap.appendChild(ul);
    
    promptContainer.appendChild(heading);
    promptContainer.appendChild(promptWrap);
    
    flexDiv.appendChild(iconDiv);
    flexDiv.appendChild(promptContainer);
    
    errorAlert.appendChild(flexDiv);
    container.appendChild(errorAlert);
    
    error.appendChild(err);
}

function removeError() {
    const errorContainer = document.getElementById("error");
    if (errorContainer) {
        errorContainer.innerHTML = "";
    }
}