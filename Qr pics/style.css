document.getElementById('fileInput').addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
    const files = event.target.files;
    const gallery = document.getElementById('gallery');

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function (e) {
            const card = createImageCard(e.target.result);
            gallery.appendChild(card);
        };

        reader.readAsDataURL(file);
    }
}

function createImageCard(src) {
    const card = document.createElement('div');
    card.className = 'image-card';

    const image = document.createElement('img');
    image.src = src;
    image.style.width = '200px';
    image.style.height = '150px';

    const downloadBtn = document.createElement('button');
    downloadBtn.className = 'download-btn';
    downloadBtn.innerHTML = 'Download';

    downloadBtn.addEventListener('click', function () {
        downloadImage(src);
    });

    card.appendChild(image);
    card.appendChild(document.createElement('br'));
    card.appendChild(downloadBtn);

    return card;
}

function downloadImage(src) {
    const link = document.createElement('a');
    link.href = src;
    link.download = 'wedding_photo.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
