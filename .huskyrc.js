modules.export = {
  hooks: {
    'pre-commit': 'lint-stage',
    'pre-push': 'lint-stage && npm test',
  },
};
