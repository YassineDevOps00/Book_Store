module.exports = {
    plugins: [
        require('autoprefixer')({
            overrideBrowserslist: [
                '>0.2%',
                'not dead',
                'not op_mini all'
            ],
        }),
        // You can add other PostCSS plugins here if needed
    ],
};