function createSticker(type, name){
    const div = document.createElement("div");
    div.classList.add("sticker");
    let svg;
    if (type === "directory") {
        svg = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path stroke-dasharray="64" stroke-dashoffset="64" d="M12 7h8c0.55 0 1 0.45 1 1v10c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11Z">
                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/>
                    </path>
                    <path d="M12 7h-9v0c0 0 0.45 0 1 0h6z" opacity="0">
                        <animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M12 7h-9v0c0 0 0.45 0 1 0h6z;M12 7h-9v-1c0 -0.55 0.45 -1 1 -1h6z"/>
                        <set fill="freeze" attributeName="opacity" begin="0.6s" to="1"/>
                    </path>
                </g>
            </svg>
        `;
    } else if (type === "file") {
        svg = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path stroke-dasharray="64" stroke-dashoffset="64" d="M13.5 3l5.5 5.5v11.5c0 0.55 -0.45 1 -1 1h-12c-0.55 0 -1 -0.45 -1 -1v-16c0 -0.55 0.45 -1 1 -1Z">
                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/>
                    </path>
                    <path d="M14.5 3.5l2.25 2.25l2.25 2.25z" opacity="0">
                        <animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M14.5 3.5l2.25 2.25l2.25 2.25z;M14.5 3.5l0 4.5l4.5 0z"/>
                        <set fill="freeze" attributeName="opacity" begin="0.6s" to="1"/>
                    </path>
                </g>
            </svg>
        `;
    }
    div.innerHTML = svg;
    const p = document.createElement("p");
    p.textContent = name;
    div.appendChild(p);
    return div;
}