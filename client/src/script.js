document.addEventListener("DOMContentLoaded", async () => {
    const section = document.getElementById('view-content')
    const response = await fetch('http://192.168.0.18:8000/files');
    const data = await response.json();
    const dirList = data.content.directories;
    const fileList = data.content.files;

    let sticker;
    for(const dir of dirList){
        sticker = createSticker("directory", dir);
        if(sticker != null){
            section.appendChild(sticker);
        }
        
    }
    for(const file of fileList){
        sticker = createSticker("file", file);
        if(sticker != null){
            section.appendChild(sticker);
        }
    }
});