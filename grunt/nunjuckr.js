
/**
 *  * Grunt nunjuckr plugin
 *   * https://github.com/denkwerk/grunt-nunjuckr
 *    */

module.exports = function( grunt, options ) {
    return {
        beispiel: {
            options: {
                data: grunt.file.readJSON( options.srcPath + '_data/data.json' ),
                ext: '.html',
                searchPaths: options.srcPath + 'components',
                setUp: function( env ) {

                    env.addGlobal( 'globalFunction', function() {
                        return 'I am a global function';
                    } );

                    env.addFilter( 'shorten', function( content, count ) {
                        return content.slice(0, count || 5);
                    } );

                    return env;
                }
            },
            files: [
                {
                    expand: true,
                    cwd: '<%= srcPath %>components/site/templates',
                    src: '**/*.njs',
                    dest: '<%= distPath %>',
                    ext: '.html'
                }
            ]
        }
    };
};
