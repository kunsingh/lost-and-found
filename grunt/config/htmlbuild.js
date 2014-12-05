module.exports = {
    options: {
        beautify: true,
        relative: true,
        parseTag: 'generate'
    },

    devDe: {
        // replace: true,
        src : '<%= config.dir.temp %>/html/index_de.html',
        dest: '<%= config.dir.temp %>/',

        options: {
            scripts: {
                app   : [ '<%= config.files.app.js %>', '<%= html2js.build.dest %>' ],
                i18n  : '<%= config.files.i18n.de %>',
                vendor: '<%= config.files.vendor.js %>'
            },
            styles : {
                app: '<%= config.dir.temp %>/styles/*.css'
            }
        }
    },

    devEn: {
        // replace: true,
        src : '<%= config.dir.temp %>/html/index_en.html',
        dest: '<%= config.dir.temp %>/',

        options: {
            scripts: {
                app   : [ '<%= config.files.app.js %>', '<%= html2js.build.dest %>' ],
                i18n  : '<%= config.files.i18n.en %>',
                vendor: '<%= config.files.vendor.js %>'
            },
            styles : {
                app: '<%= config.dir.temp %>/styles/*.css'
            }
        }
    },

    distDe: {
        src    : '<%= config.dir.temp %>/html/index_de.html',
        dest   : '<%= config.dir.dist %>/',
        options: {
            scripts: {
                app   : '<%= config.dir.dist %>/scripts/app.*.js',
                vendor: '<%= config.dir.dist %>/scripts/vendor.*.js',
                i18n  : '<%= config.dir.dist %>/<%= config.files.i18n.de %>'
            },
            styles : {
                app: '<%= config.dir.dist %>/styles/*.css'
            }
        }
    },

    distEn: {
        src    : '<%= config.dir.temp %>/html/index_en.html',
        dest   : '<%= config.dir.dist %>/',
        options: {
            scripts: {
                app   : '<%= config.dir.dist %>/scripts/app.*.js',
                vendor: '<%= config.dir.dist %>/scripts/vendor.*.js',
                i18n  : '<%= config.dir.dist %>/<%= config.files.i18n.en %>'
            },
            styles : {
                app: '<%= config.dir.dist %>/styles/*.css'
            }
        }
    }
};