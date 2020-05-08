module.export = {
  'pre-commit': 'lint-stage',
  'pre-push': 'lint-stage && npm test',
};
