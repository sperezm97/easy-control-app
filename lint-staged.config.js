// eslint-disable-next-line import/no-commonjs
module.exports = {
  '*{.js}': ['prettier --write', 'eslint  --fix', 'git add .'],
};
