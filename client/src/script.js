document.addEventListener("DOMContentLoaded", async () => {
    getAndPrintFiles();
});

async function onSubmitClick(event){
    event.preventDefault();
    removeError();
    const fileInput = document.getElementById("arquivo");
    const files = fileInput.files;
    const formData = new FormData();
    if(files.length == 0){
        generateError("No files", "You need to select at least one file.");
    }else{
        for (let i = 0; i < files.length; i++) {
            formData.append("file", files[i]);
        }
        const response = await fetch(`${url}:${port}/upload`, {
            method: "POST",
            body: formData,
        });
    }
}

async function onDownloadClick(event) {
    const fileName = event.target.closest("div").querySelector("p").textContent; // accedemos al elemento
    const blob = await getFilesByName(fileName);
    const urlBlob = URL.createObjectURL(blob); // url temporal para acceder al archivo
    const a = document.createElement("a");
    a.href = urlBlob;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(urlBlob);  // liberamos memoria
}


async function getAndPrintFiles(){
    const section = document.getElementById('view-content');
    const response = await fetch(`${url}:${port}/files`);
    if(response.ok){
        const data = await response.json();
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
    } 
} 

