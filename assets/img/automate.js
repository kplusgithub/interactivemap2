var extractSvg = require(‘extract-svg-styles’);
extractSvg.extract({
    src: './*.svg',
    out: {
        style: './css',
        svg: './svg'
    },
    classPrefix: 'icon-'
});