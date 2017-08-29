exports.config = {
  bundles: [
    { components: ['my-name', 'my-first-component', 'todo-list', 'button-alert', 'input-listener', 'random-number', 'button-update'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
