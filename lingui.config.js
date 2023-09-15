module.exports = {
  catalogs: [
    {
      path: '<rootDir>/locale/{locale}',
      include: ['<rootDir>/src'],
      exclude: ['**/node_modules/**']
    }
  ],
  // compileNamespace: 'cjs',
  // extractBabelOptions: {},
  fallbackLocales: {},
  format: 'minimal',
  formatOptions: { origins: false, lineNumbers: false },
  sourceLocale: 'en',
  locales: [
    'en',
    // 'zh_CN',
    'ko'
    // 'fr'
    //  'zh_TW', 'ko', 'ja', 'fr', 'fa', 'pt_BR', 'hi','de' , 'es', 'it', 'ro', 'ru', 'vi',
  ],
  orderBy: 'messageId',
  pseudoLocale: '',
  rootDir: '.',
  runtimeConfigModule: {
    i18n: ['@lingui/core', 'i18n'],
    Trans: ['@lingui/react', 'Trans']
  }
};
