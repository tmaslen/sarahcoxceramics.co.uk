module.exports = function (grunt) {
  grunt.registerTask('html', [], function () {
    grunt.loadNpmTasks('grunt-multi-lang-site-generator');
    grunt.config('multi_lang_site_generator', {
        default: {
            options: {
                vocabs:             ['output'],
                vocab_directory:    'source',
                template_directory: 'source/tmpl',
                data: {
                    "version": 1.0
                }
            },
            files: {
                "archive.html":            "archive.html.tmpl",
                "commissions.html":        "commissions.html.tmpl",
                "contact.html":            "contact.html.tmpl",
                "exhibitions.html":        "exhibitions.html.tmpl",
                "gallery_pieces.html":     "gallery_pieces.html.tmpl",
                "in_the_workshop.html":    "in_the_workshop.html.tmpl",
                "index.html":              "index.html.tmpl",
                "outdoor_sculptures.html": "outdoor_sculptures.html.tmpl"
            }
        },
    });
    grunt.task.run('multi_lang_site_generator');
  });
};