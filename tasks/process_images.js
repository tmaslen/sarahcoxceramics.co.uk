module.exports = function (grunt) {
  function process_images(sizes) {
    grunt.loadNpmTasks('grunt-responsive-images');
      grunt.loadNpmTasks('grunt-contrib-imagemin');
      grunt.config('responsive_images', {
        dev: {
          options: {
            engine: 'gm',
            sizes: sizes,
            maintain_directory_structure: true
          },
          files: [{
            expand: true,
            src: ['**/*.{jpg,gif,png}'],
            cwd: 'source/img/resp-img/',
            custom_dest: 'img/{%= width %}/{%= path %}/'
          }]
        }
      });
      sizes.forEach(function(size) {
        grunt.config(['imagemin', ""+size.width ], {
          resp: {
            files: [{
              expand: true,
              cwd: 'img/' + size.width + '/',
              src: ['**/*.{png,jpg,gif}'],
              dest: 'img/'
            }]
          }
        });
      });
      grunt.task.run('responsive_images', 'imagemin');
  }

  grunt.registerTask('process_image_size', [], function () {
    var size = grunt.option('size');
    if (typeof size === "undefined") {
      grunt.log.warn('Please provide an option for this command, e.g. "grunt process_image_size --size=736"');
    }
    else {
      process_images([{
          width: size
      }]);
    }
  });
  grunt.registerTask('process_images', [], function () {
    process_images([{
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
      }]);
  });
};