import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
    rules: {
      semi: ["error", "always"], 
      quotes: [ "error", "single" ],
      indent: ["error", 4],
     "vue/script-indent": ["error", 4 ],
     "vue/html-indent": ["error", 4 ],
    }
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/lib/**', '**/*.d.ts'],
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
]
