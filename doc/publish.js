const ghpages = require('gh-pages');

const args = process.env.npm_config_argv ? JSON.parse(process.env.npm_config_argv).remain : [];
const branch = args.length > 0 ? args[0] : '.';

ghpages.publish('storybook', {
  dest: branch,
  repo: 'https://' + process.env.GH_TOKEN + '@github.com/crazyfactory/react-general-components.git',
  silent: true
});
