// eslint-disable-next-line import/no-commonjs
module.exports = {
  '*.{js, jsx}': ['prettier --write', 'eslint  --fix', 'git add .'],
};
