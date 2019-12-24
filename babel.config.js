module.exports = {
  'presets': [
    [
      '@babel/preset-env',
      {
        'modules': false,
        'targets': 'last 2 versions'
      }
    ],
    '@babel/preset-react'
  ],
  'plugins': [
    // Stage 2
    '@babel/plugin-proposal-object-rest-spread',
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-throw-expressions',

    // Stage 3
    '@babel/plugin-syntax-import-meta',
    ['@babel/plugin-proposal-class-properties', { 'loose': true }],
    '@babel/plugin-proposal-json-strings',
    '@babel/plugin-syntax-dynamic-import'
  ],
  'env': {
    'production': {
      'plugins': [
        '@babel/plugin-transform-react-inline-elements',
        '@babel/plugin-transform-react-constant-elements'
      ]
    }
  }
}
