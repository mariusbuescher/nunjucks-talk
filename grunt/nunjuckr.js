
/**
 *  * Grunt nunjuckr plugin
 *   * https://github.com/denkwerk/grunt-nunjuckr
 *    */

module.exports = function( grunt, options ) {
    return {
        beispiel: {
            options: {
                data: {},
                ext: '.html',
                searchPaths: options.srcPath + 'components',
                contentDimensions: {
                    lang: [ 'de', 'en' ]
                },
                setUp: function( env ) {

                    env.addGlobal( 'globalFunction', function() {
                        return 'I am a global function';
                    } );

                    env.addFilter( 'shorten', function( content, count ) {
                        return content.slice(0, count || 5);
                    } );

                    return env;
                },
                preprocessData: function( data, file, contentDimensions ) {
                    data = grunt.file.readJSON( options.srcPath + '_data/' + contentDimensions.lang + '.json' );
                    return data;
                }
            },
            files: [
                {
                    src: '<%= srcPath %>components/site/templates/**/*.njs',
                    dest: '<%= distPath %>',
                    ext: '.html'
                }
            ]
        }
    };
};
