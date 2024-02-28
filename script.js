const dropFiles = document.querySelector('.dropFiles');
const filePath = document.querySelector('#filePath');
const fileDropped = document.querySelector('.fileDropped')
// console.log(fileDropped);
// console.log(filePath.innerText);
// console.log(dropFiles);
const dropZone = document.querySelector('.dropzone');
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    if (!dropZone.classList.contains('dragged')) {
        dropZone.classList.add('dragged')
        console.log('dragging over element');
    }
})

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragged');
})

const fileInput = document.querySelector('#inputFile');


dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    ondDrop(e);

    dropZone.classList.remove('dragged');
    dropFiles.classList.add('d-none');
    fileDropped.classList.remove('d-none');
    filePath.innerText = `${e.dataTransfer.files[0].name}`;

    const crossBtn = document.createElement('span');
    crossBtn.classList.add('crossBtn');
    filePath.appendChild(crossBtn)

    crossBtn.addEventListener('click', () => {
        console.log('cross Clicked');
        dropFiles.classList.remove('d-none');
        fileDropped.classList.add('d-none');
        fileInput.value = '';
    })

})


const browseBtn = document.querySelector('.browseBtn');

browseBtn.addEventListener('click', () => {
    fileInput.click();
})

document.getElementById('inputFile').onchange = function (e) {
    e.preventDefault();
    console.log(e.target.files[0].name);
    filePath.innerText = `${e.target.files[0].name}`;

    const crossBtn = document.createElement('span');
    crossBtn.classList.add('crossBtn');
    filePath.appendChild(crossBtn);

    fileDropped.classList.remove('d-none');
    dropFiles.classList.add('d-none');

    crossBtn.addEventListener('click', () => {
        console.log('cross Clicked');
        dropFiles.classList.remove('d-none');
        fileDropped.classList.add('d-none');
        fileInput.value = '';
    })
};

// MIRACLE MIRACLE MIRACLE MIRACLE
// MOJ KAR DI BETE 
// YAHA WAHA SAARE JAHA ME TERA RAAJ HAI JIJA JI...

function ondDrop(e) {
    fileInput.files = e.dataTransfer.files;
    const event = new Event('change', { bubbles: true });
    fileInput.dispatchEvent(event);
}
