module.exports = {
    standardversion: {
        files: [
            {expand: true, src: "**", cwd: 'bower_components/bootstrap/fonts', dest: "standardversion/assets/fonts"},
            {expand: true, src: "**", cwd: 'bower_components/font-awesome/fonts', dest: "standardversion/assets/fonts"},
            {expand: true, src: "**", cwd: 'bower_components/themify-icons/fonts', dest: "standardversion/assets/css/fonts"},
            {expand: true, src: "**", cwd: 'STANDARD/templates',     dest: "standardversion/templates"},
            {expand: true, src: "**", cwd: 'STANDARD/assets/api',     dest: "standardversion/assets/api"},
            {expand: true, src: "**", cwd: 'STANDARD/assets/i18n',    dest: "standardversion/assets/i18n"},
            {expand: true, src: "**", cwd: 'STANDARD/assets/images',     dest: "standardversion/assets/images"},
            {expand: true, src: "**", cwd: 'STANDARD/assets/js/config',      dest: "standardversion/assets/js/config"},
            {expand: true, src: "**", cwd: 'STANDARD/assets/js/directives',      dest: "standardversion/assets/js/directives"},
            {expand: true, src: "**", cwd: 'STANDARD/assets/js/controllers',      dest: "standardversion/assets/js/controllers"},
            {expand: true, src: "**", cwd: 'STANDARD/assets/js/filters',      dest: "standardversion/assets/js/filters"},
            {expand: true, src: "**", cwd: 'STANDARD/assets/views',     dest: "standardversion/assets/views"},
            {expand: true, src: "**", cwd: 'STANDARD/assets/css/themes',     dest: "standardversion/assets/css/themes"},
            {src: 'STANDARD/master/_index.min.html', dest : 'standardversion/index.html'},
            {src: 'STANDARD/upload.php', dest : 'standardversion/upload.php'}
        ]
    },
    rtlversion: {
        files: [
            {expand: true, src: "**", cwd: 'bower_components/bootstrap/fonts', dest: "rtlversion/assets/fonts"},
            {expand: true, src: "**", cwd: 'bower_components/font-awesome/fonts', dest: "rtlversion/assets/fonts"},
            {expand: true, src: "**", cwd: 'bower_components/themify-icons/fonts', dest: "rtlversion/assets/css/fonts"},
            {expand: true, src: "**", cwd: 'RTL/templates',     dest: "rtlversion/templates"},
            {expand: true, src: "**", cwd: 'RTL/assets/api',     dest: "rtlversion/assets/api"},
            {expand: true, src: "**", cwd: 'RTL/assets/i18n',    dest: "rtlversion/assets/i18n"},
            {expand: true, src: "**", cwd: 'RTL/assets/images',     dest: "rtlversion/assets/images"},
            {expand: true, src: "**", cwd: 'RTL/assets/js/config',      dest: "rtlversion/assets/js/config"},
            {expand: true, src: "**", cwd: 'RTL/assets/js/directives',      dest: "rtlversion/assets/js/directives"},
            {expand: true, src: "**", cwd: 'RTL/assets/js/controllers',      dest: "rtlversion/assets/js/controllers"},
            {expand: true, src: "**", cwd: 'RTL/assets/js/filters',      dest: "rtlversion/assets/js/filters"},
            {expand: true, src: "**", cwd: 'RTL/assets/views',     dest: "rtlversion/assets/views"},
            {expand: true, src: "**", cwd: 'RTL/assets/css/themes',     dest: "rtlversion/assets/css/themes"},
            {src: 'RTL/master/_index.min.html', dest : 'rtlversion/index.html'},
            {src: 'RTL/upload.php', dest : 'rtlversion/upload.php'}
        ]
    }

};
