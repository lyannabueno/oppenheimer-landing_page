module.exports = function(grunt) {
    // Projeto e configuração de tarefas.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Tarefa para compilar SASS
        sass: {
            options: {
                style: 'compressed'
            },

            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/styles',
                    src: ['*.scss'],
                    dest: 'dist/styles',
                    ext: '.css'
                }]
            }
        },

        // Tarefa para minificar imagens
        imagemin: {
            dynamic: {
            files: [{
                expand: true,
                cwd: 'src/images/',
                src: ['**/*.{png,jpg,gif,mp4}'],
                dest: 'dist/images/'
            }]
            }
        },

        // Tarefa para minificar JavaScript
        uglify: {
            my_target: {
            files: {
                'dist/script/main.js': ['src/script/*.js']
            }
            }
        },
        
        // Tarefa para observar mudanças nos arquivos
        watch: {
            styles: {
            files: ['src/styles/*.scss'],
            tasks: ['sass'],
            options: {
                spawn: false,
            },
            },
            scripts: {
            files: ['src/scripts/*.js'],
            tasks: ['uglify'],
            options: {
                spawn: false,
            },
            },
            images: {
            files: ['src/images/**/*.{png,jpg,gif,mp4}'],
            tasks: ['imagemin'],
            options: {
                spawn: false,
            },
            }
        }
    });
    
    // Carrega os plugins que fornecem as tarefas.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Tarefas padrão.
    grunt.registerTask('default', ['sass', 'imagemin', 'uglify']);
    
    // Tarefa de observação
    grunt.registerTask('watch', ['watch']);
};