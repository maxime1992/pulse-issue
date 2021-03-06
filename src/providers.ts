import { IssuesProvider } from './issues/issues.interface';

export const PROVIDERS: { [key: string]: IssuesProvider } = {
  GITHUB: {
    name: 'Github',
    baseUrl: 'https://github.com',
    regexStr: 'https://github.com/([a-zA-Z0-9_-]+)/([a-zA-Z0-9_-]+)/issues/([0-9]+)',
    prepareLink: 'https://github.com/{{owner}}/{{repo}}/issues/{{id}}',
  },
  GITLAB: {
    name: 'Gitlab',
    baseUrl: 'https://gitlab.com',
    regexStr: 'https://gitlab.com/([a-zA-Z0-9_-]+)/([a-zA-Z0-9_-]+)/issues/([0-9]+)',
    prepareLink: 'https://gitlab.com/{{owner}}/{{repo}}/issues/{{id}}',
  },
};
