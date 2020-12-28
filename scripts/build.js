const { spawnSync } = require('child_process');

const prep = () => {
    return spawnSync('yarn', ['build', '--scope', 'todo-lib', '--stream'], { stdio: 'inherit'});
}

const build = (app) => {
    return spawnSync('yarn', ['build', '--scope', app, '--stream'], { stdio: 'inherit' })
};

const copy = async (app) => {
    await spawnSync('mkdir', ['dist'], { stdio: 'inherit' });
    return spawnSync('cp', ['-R', `packages/${app}/.next`, `dist/${app}`], { stdio: 'inherit'});
}

(async () => {
    const [appName] = process.argv.slice(2);
    await prep();
    await build(appName);
    await copy(appName);
})();
