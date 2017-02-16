app.factory('videoFactory', function () {
  var videos = {
    en: {
      placeholder: 'video-placeholder.png',
      video: 'https://www.youtube.com/watch?v=maJeke0folw&feature=youtu.be'
    },
    ru: {
      placeholder: 'video-placeholder-ru.png',
      video: 'https://www.youtube.com/watch?v=CqA9SPMf-V0&feature=youtu.be'
    },
    zh: {
      placeholder: 'video-placeholder-zh.png',
      video: 'https://www.youtube.com/watch?v=kw6gMhtqss8&feature=youtu.be'
    },
    'de': {
      placeholder: 'video-placeholder.png',
      video: 'https://www.youtube.com/watch?v=maJeke0folw&feature=youtu.be'
    },
    'fr': {
      placeholder: 'video-placeholder.png',
      video: 'https://www.youtube.com/watch?v=maJeke0folw&feature=youtu.be'
    },
    'ph': {
      placeholder: 'video-placeholder.png',
      video: 'https://www.youtube.com/watch?v=maJeke0folw&feature=youtu.be'
    },
    'pt': {
      placeholder: 'video-placeholder.png',
      video: 'https://www.youtube.com/watch?v=maJeke0folw&feature=youtu.be'
    },
    'es': {
      placeholder: 'video-placeholder.png',
      video: 'https://www.youtube.com/watch?v=maJeke0folw&feature=youtu.be'
    },
    'tl': {
      placeholder: 'video-placeholder.png',
      video: 'https://www.youtube.com/watch?v=maJeke0folw&feature=youtu.be'
    },
    'nl': {
      placeholder: 'video-placeholder.png',
      video: 'https://www.youtube.com/watch?v=maJeke0folw&feature=youtu.be'
    },
    'sv': {
      placeholder: 'video-placeholder.png',
      video: 'https://www.youtube.com/watch?v=maJeke0folw&feature=youtu.be'
    },
    'uk': {
      placeholder: 'video-placeholder.png',
      video: 'https://www.youtube.com/watch?v=CqA9SPMf-V0&feature=youtu.be'
    },
    'ro': {
      placeholder: 'video-placeholder.png',
      video: 'https://www.youtube.com/watch?v=maJeke0folw&feature=youtu.be'
    },
    'id': {
      placeholder: 'video-placeholder.png',
      video: 'https://www.youtube.com/watch?v=maJeke0folw&feature=youtu.be'
    }
  }


  function getVideo(lang) {
    return videos[lang];
  }

  return {
    getVideo: getVideo
  }
});