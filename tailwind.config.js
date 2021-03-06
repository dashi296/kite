/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    colors: {
      primary: '#07889B',
      secondary: '#E37222',
      accent: '#EEAA7B',
      base: '#F6F6F4',
      gray: '#999',
      lightgray: '#DDD',
      facebook: '#3B5998',
      twitter: '#1DA1F2',
      github: '#171515',
      linkedin: '#2867B2',
      qiita: '#55C500',
      white: '#FFFFFF',
      black: '#1C1C1C'
    },
    inset: {
      '0': 0,
      auto: 'auto',
      '1/2': '50%',
      '1/5': '20%',
      '1/3': '33%',
    }
  },
  variants: ['hover', 'group-hover', 'responsive'],
  plugins: [],
  purge: {
    enabled: false,
  }
}
