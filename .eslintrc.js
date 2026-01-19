module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',                    // базовые рекомендуемые правила
    'plugin:jest/recommended'             // правила для тестов Jest
  ],
  plugins: ['jest'],                         // подключаем плагин jest
  overrides: [
    {
      files: ['**/*/*.test.js'],
      rules: {
        'jest/prefer-expect-assertions': 'off',
        'jest/no-identical-title': 'error' // пример дополнительного правила для тестов
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    // Базовые правила для улучшения качества кода
    'no-console': 'warn',                  // разрешаем console, но с предупреждением
    'no-unused-vars': 'error',            // ошибка, если переменная не используется
    'no-undef': 'error',                   // ошибка, если используется необъявленная переменная
    'eqeqeq': ['error', 'always'],        // требовать === вместо ==
    'curly': 'error',                     // требовать фигурные скобки для блоков
    'quotes': ['error', 'single'],        // использовать одинарные кавычки
    'semi': ['error', 'always'],          // всегда ставить точку с запятой
    'indent': ['error', 2],             // отступ — 2 пробела
    'line-comment-position': 'off',       // отключить проверку позиции комментариев
    'max-len': ['warn', { code: 100 }] // предупреждение, если строка длиннее 100 символов
  }
};
