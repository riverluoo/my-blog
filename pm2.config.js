const npm = 'npm'

module.exports = {
    apps: [{
        name: 'blog',
        script: 'npm',
        args: [
            'run',
            'dev',
        ],
    }, ]
}