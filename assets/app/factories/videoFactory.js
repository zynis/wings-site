app.factory('videoFactory', function () {
  var videos = {
    en: {
      placeholder: 'video-placeholder.png',
      video: 'https://www.youtube.com/watch?v=jjOvpr1gyDc&feature=youtu.be'
    },
    ru: {
      placeholder: 'video-placeholder-ru.png',
      video: 'https://www.youtube.com/watch?v=h9x1fdl07a0&feature=youtu.be'
    },
    zh: {
      placeholder: 'video-placeholder-zh.png',
      video: 'http://player.youku.com/embed/XMTgyMDI3OTA2OA=='
    },
    'de': {
      placeholder: 'video-placeholder.png',
      video: 'https://www.youtube.com/watch?v=jjOvpr1gyDc&feature=youtu.be'
    },
    'fr': {
      placeholder: 'video-placeholder.png',
      video: 'https://www.youtube.com/watch?v=jjOvpr1gyDc&feature=youtu.be'
    },
    'ph': {
      placeholder: 'video-placeholder.png',
      video: 'https://www.youtube.com/watch?v=jjOvpr1gyDc&feature=youtu.be'
    },
    'pt': {
      placeholder: 'video-placeholder.png',
      video: 'https://www.youtube.com/watch?v=jjOvpr1gyDc&feature=youtu.be'
    },
    'es': {
      placeholder: 'video-placeholder.png',
      video: 'https://www.youtube.com/watch?v=jjOvpr1gyDc&feature=youtu.be'
    },
    'tl': {
      placeholder: 'video-placeholder.png',
      video: 'https://www.youtube.com/watch?v=jjOvpr1gyDc&feature=youtu.be'
    },
    'nl': {
      placeholder: 'video-placeholder.png',
      video: 'https://www.youtube.com/watch?v=jjOvpr1gyDc&feature=youtu.be'
    },
    'sv': {
      placeholder: 'video-placeholder.png',
      video: 'https://www.youtube.com/watch?v=jjOvpr1gyDc&feature=youtu.be'
    },
    'uk': {
      placeholder: 'video-placeholder.png',
      video: 'https://www.youtube.com/watch?v=jjOvpr1gyDc&feature=youtu.be'
    },
    'ro': {
      placeholder: 'video-placeholder.png',
      video: 'https://www.youtube.com/watch?v=jjOvpr1gyDc&feature=youtu.be'
    },
    'id': {
      placeholder: 'video-placeholder.png',
      video: 'https://www.youtube.com/watch?v=jjOvpr1gyDc&feature=youtu.be'
    }
  }


  function getVideo(lang) {
    return videos[lang];
  }

  return {
    getVideo: getVideo
  }
});