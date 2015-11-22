
/**
 *  * Grunt nunjuckr plugin
 *   * https://github.com/denkwerk/grunt-nunjuckr
 *    */

module.exports = function( grunt, options ) {
    return {
        beispiel: {
            options: {
                data: grunt.file.readJSON( options.srcPath + '_data/data.json' ),
                ext: '.html'
            },
            files: [
                {
                    expand: true,
                    cwd: '<%= srcPath %>components/site/templates',
                    src: '**/*.njs',
                    dest: '<%= distPath %>'
                }
            ]
        }
    };
};
