module.exports = {
  'eslint.workingDirectories': [
    { directory: 'client/', changeProcessCWD: true },
    { directory: 'server/', changeProcessCWD: true }
  ],
  rules: {
    'no-undef': 'error'
  }
}
