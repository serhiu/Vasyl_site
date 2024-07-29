document.getElementById('play-btn').addEventListener('click', function() {
    const videoContainer = document.getElementById('video-main');
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/KCJ4pdavu-g?autoplay=1';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    iframe.style.position = 'absolute';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';

    videoContainer.appendChild(iframe);
    this.style.display = 'none';
});