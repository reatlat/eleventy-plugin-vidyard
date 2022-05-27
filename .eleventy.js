const isUrl = require('is-url');

module.exports = (eleventyConfig, options = {}) => {

    const defaultOptions = {
        mainScript: true,
        class: 'vidyard-player-embed',
        version: 4,
        type: 'inline'
    }

    const globalOptions = { ...defaultOptions, ...options };

    eleventyConfig.addShortcode("vidyard", (videoURL, options = {}) => {
        if (!videoURL) {
            throw new Error(
                "[eleventy-plugin-vidyard] the videoURL must be specified"
            );
        }

        if (!isUrl(videoURL) || !videoURL.match('vidyard.com\/watch\/')) {
            throw new Error(
                `[eleventy-plugin-vidyard] the videoURL "${videoURL}" is not valid url`
            );
        }

        options = { ...globalOptions, ...options };

        const UUID = videoURL.split('vidyard.com/watch/')[1].split('?')[0];

        let $return = '';

        if ( options.mainScript )
            $return += '<script src="https://play.vidyard.com/embed/v4.js" type="text/javascript" async></script>';

        $return += `
            <img style="max-width: 100%;"
                 class="${options.class}"
                 src="https://play.vidyard.com/${UUID}.jpg"
                 data-uuid="${UUID}"
                 data-v="${options.version}"
                 data-type="${options.type}" />
        `;

        return $return;
    });
};
