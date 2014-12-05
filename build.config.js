module.exports.config = {

    // load-grunt-configs path
    src: 'grunt/config/*.js',

    app: {
        name   : 'app-ui',
        version: '1.0.0'
    },

    dir: {
        app    : 'src',
        dist   : 'dist',
        temp   : '.tmp',
        reports: 'reports'
    },

    files: {

        i18n: {
            de: [
                'vendor/angular-i18n/angular-locale_de.js'
            ],
            en: [
                'vendor/angular-i18n/angular-locale_en.js'
            ]
        },

        app: {

            jsAll: [
                'src/app/**/*.js'
            ],

            js: [
                'src/app/**/*.js',
                '!src/app/**/*.spec.js',
                '!src/app/**/*.mocks.js'
            ],

            spec: [
                'src/app/**/*.spec.js',
                'src/app/**/*.mocks.js'
            ],

            translations: [
                'src/i18n/**/*.json'
            ],

            tpls: [
                'src/app/**/*.tpl.html'
            ],

            index: [
                'src/index.tpl.html'
            ],

            styles: {
                all : 'src/styles/**/*.scss'
            }
        },

        vendor: {
            js: [
                'vendor/angular/angular.js',
                'vendor/angular-ui-router/release/angular-ui-router.js',
                'vendor/ng-table/ng-table.js',
                'vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
                'vendor/angular-ui-utils/ui-utils.js'
            ],

            spec: [
                'vendor/angular-mocks/angular-mocks.js'
            ],

            styles: [
                'vendor/font-awesome/css/font-awesome.min.css',
                'vendor/ng-table/ng-table.min.css'

            ],

            font: [
                'vendor/font-awesome/fonts/*'
            ],
            glyphfont: [
                  'vendor/bootstrap-sass-official/assets/fonts/bootstrap/*'
            ]

        }

    }
};
