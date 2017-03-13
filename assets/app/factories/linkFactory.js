app.factory('linkFactory', function () {

  var links = {
    en: {
      blog: 'https://medium.com/wings-ai',
      faq: 'https://wings.zendesk.com/hc/en-us',
      chat: {
        telegram: 'https://telegram.me/wingschat',
        slack: 'https://hi.wings.ai/'
      }
    },
    ru: {
      blog: 'http://ru.blog.wings.ai',
      faq: 'https://wings.zendesk.com/hc/en-us',
      chat: {
        telegram: 'https://telegram.me/wingschatru',
        slack: 'https://hi.wings.ai/'
      }
    },
    uk: {
      blog: 'http://ru.blog.wings.ai',
      faq: 'https://wings.zendesk.com/hc/en-us',
      chat: {
        telegram: 'https://telegram.me/wingschatru',
        slack: 'https://hi.wings.ai/'
      }
    }

  };


  function getLink(lang) {
    return links[lang]
  }

  return {
    getLink: getLink
  }
});