const { cdktf } = require('projen');
const project = new cdktf.ConstructLibraryCdktf({
  author: 'hasan aburayyan',
  authorAddress: 'hasanaburayyan21@gmail.com',
  cdktfVersion: '^0.11.2',
  defaultReleaseBranch: 'main',
  name: '@hasanaburayyan/cdktf-demo-lib-p',
  repositoryUrl: 'git@github.com:hasanaburayyan/cdktf-demo.git',
  github: false,
  constructsVersion: '^10.1.46',
  catalog: {
    twitter: false,
    announce: false,
  },
  deps: [
    '@cdktf/provider-aws@^8.0.17',
  ],
});
project.synth();