var ghpages = require('gh-pages');

ghpages.publish(
  'public', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/abhi-abhinav/webapp', // Update to point to your repository
    user: {
      name: 'Abhinav', // update to use your name
      email: 'acyadav805@gmail.com' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);