const VIDEO_LINK =
  'https://www.youtube.com/embed/9TZXsZItgdw?si=USUF2s1-47GvuEu-';

const IFRAME_ATTRIBUTES = {
  title: 'YouTube video player',
  frameBorder: '0',
  allow:
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
  referrerPolicy: 'strict-origin-when-cross-origin',
  allowFullscreen: true,
};

const playButton = document.getElementById('play-button');
const videoPreview = document.querySelector('.about__prewiew');

const initVideoLoader = () => {
  if (!playButton) {
    return;
  }

  playButton.addEventListener('click', () => {
    const videoIframe = document.createElement('iframe');
    videoIframe.src = VIDEO_LINK;

    Object.assign(videoIframe, IFRAME_ATTRIBUTES);
    videoIframe.classList.add('about__video-iframe');

    videoPreview.replaceWith(videoIframe);
    playButton.remove();
  });
};

export default initVideoLoader;
