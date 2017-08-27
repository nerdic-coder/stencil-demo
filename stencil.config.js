exports.config = {
  bundles: [
    { components: ['my-name', 'my-first-component', 'todo-list', 'button-alert'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
