import push from 'git-push';

const remote = {
    name: 'production',
    url: 'https://github.com/jmcmillar/youtube-api-search',
    branch: 'master'
};

export default async () => {
    await build();
    await new Promise(resolve => push('./build', remote, resolve));
});