module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options: {
          keepalive: true,
          port: 8000,
          base: {
            path: './',
            options: {
              index: 'index.html'
            }
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', [
    'connect'
  ]);
};
