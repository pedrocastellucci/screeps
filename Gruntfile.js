module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-screeps');

    grunt.initConfig({
        screeps: {
            options: {
                email: 'pedrocastellucci@hotmail.com',
                token: '6d4dc737-8e60-4cdf-b49e-ed94d9cfe8cd',
                branch: 'default',
                //server: 'season'
            },
            dist: {
                src: ['*.js']
            }
        }
    });
}
