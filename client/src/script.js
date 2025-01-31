document.addEventListener("DOMContentLoaded", async () => {
    getAndPrintFiles();
});

async function onSubmitClick(event){
    event.preventDefault();
    const fileInput = document.getElementById("arquivo");
    const files = fileInput.files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
        formData.append("file", files[i]);
    }
    const response = await fetch(`${url}:${port}/upload`, {
        method: "POST",
        body: formData,
    });
    
}

async function getAndPrintFiles(){
    const section = document.getElementById('view-content');
    const response = await fetch(`${url}:${port}/files`);
    if(response.ok){
        const data = await response.json();
        console.log(data);
        const dirList = data.content.directories;
        const fileList = data.content.files;
        let sticker;
        for(const dir of dirList){
            sticker = buildSticker("directory", dir);
            if(sticker != null){
                section.appendChild(sticker);
            }
        }
        for(const file of fileList){
            sticker = buildSticker("file", file);
            if(sticker != null){
                section.appendChild(sticker);
            }
        }
    } else{
        console.log("euy")
        generateError("Cannot connect with the server", "Verify if the server is running")
    }
} 