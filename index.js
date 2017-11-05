var App = require('ghost-app')
  , GhostMdImgur;

GhostMdImgur = App.extend({
  filters: {
    prePostsRender: 'handlePrePostsRender'
  },
  handlePrePostsRender: function handlePrePostsRender(payload) {
    let modified = Object.assign({},payload);
    modified.html = modified.html.replace(
      /<img src="https?:\/\/(www.)?imgur.com\/(gallery\/)?([a-zA-Z0-9]{7})\/?" alt="(.*)">/g,
      '<blockquote class="imgur-embed-pub" lang="en" data-id="$3"><a href="//imgur.com/$3">$4</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>'
    ).replace(
      /<img src="https?:\/\/(www.)?imgur.com\/(gallery\/|a\/)?([a-zA-Z0-9]{5})\/?" alt="(.*)">/g,
      '<blockquote class="imgur-embed-pub" lang="en" data-id="a/$3"><a href="//imgur.com/a/$3">$4</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>'
    );

    return modified;
  }
});

module.exports = GhostMdImgur;
