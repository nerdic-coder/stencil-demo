exports.config = {
  bundles: [
    { components: ['my-name', 'my-first-component', 'todo-list'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
