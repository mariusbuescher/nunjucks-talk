module.exports = function( grunt ) {

    var path = require( 'path' );

    // Load all grunt tasks listed in package.json and load grunt configs
    require( 'load-grunt-config' )( grunt, {

        // Path to task.js files, defaults to grunt dir
        configPath: path.join( process.cwd(), 'grunt' ),

        // Auto grunt.initConfig
        init: true,

        // Global variables for Grunt plugins
        // example: <%= srcPath %>
        data: {

            // Paths to src, dist and test folders
            srcPath: 'src/',
            distPath: 'dist/',
            testResultPath: 'artifacts/test/',
            gruntPath: 'grunt/',

            // Package
            pkg: grunt.file.readJSON( 'package.json' )

        },

        // Can optionally pass options to load-grunt-tasks.
        // If you set to false, it will disable auto loading tasks.
        loadGruntTasks: {

            pattern: 'grunt-*',
            config: require( './package.json' ),
            scope: [ 'dependencies', 'devDependencies' ]
        }

    } );

};

