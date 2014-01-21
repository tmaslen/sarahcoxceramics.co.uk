module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          sizes: [{
              width: 96
          },{
              width: 130
          },{
              width: 165
          },{
              width: 200
          },{
              width: 235
          },{
              width: 270
          },{
              width: 304
          },{
              width: 340
          },{
              width: 375
          },{
              width: 410
          },{
              width: 445
          },{
              width: 485
          },{
              width: 520
          },{
              width: 555
          },{
              width: 590
          },{
              width: 625
          },{
              width: 660
          },{
              width: 695
          },{
              width: 736,
              quality: 5
          }],
          maintain_directory_structure: true
        },
        files: [{
          expand: true,
          src: ['**/*.{jpg,gif,png}'],
          cwd: '_assets/resp-img/',
          custom_dest: 'img/{%= width %}/'
        }]
      }
    },
    imagemin: {                       
      resp: {                         
        files: [{
          expand: true,               
          cwd: 'img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'img/'                
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('process-images', ['responsive_images', 'imagemin']);
  grunt.registerTask('create-images',  ['responsive_images']);
  grunt.registerTask('minify-images',  ['imagemin']);
};