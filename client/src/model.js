const url = 'http://172.24.204.97';
const port = '8000';

async function getFiles(){
    const response = await fetch(`${url}:${port}/files`);
    return await response.json();
}

async function uploadFiles(formData){
    const response = await fetch(`${url}:${port}/upload`, {
        method: "POST",
        body: formData,
    });
}