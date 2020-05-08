module.exports = {
  'pre-commit': 'lint-staged',
  'pre-push': 'lint-staged && npm test',
};
