const isUrl = require('is-url');

module.exports = (eleventyConfig, options = {}) => {

    const defaultOptions = {
        script: true,
        class: 'vidyard-player-embed',
        version: 4,
        type: 'inline'
    }

    const globalOptions = { ...defaultOptions, ...options };

    eleventyConfig.addShortcode("vidyard", (videoURL, optionsOrClasses = {}) => {
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

        // Handle 2nd arg: string = extra classes, object = options
        let options = {};
        if (typeof optionsOrClasses === 'string' && optionsOrClasses.trim()) {
            // Liquid-style: {% vidyard "url" "extra-classes" %}
            const defaultClass = globalOptions.class || '';
            options.class = defaultClass ? `${defaultClass} ${optionsOrClasses}` : optionsOrClasses;
        } else if (typeof optionsOrClasses === 'object' && optionsOrClasses !== null) {
            // Nunjucks-style: {% vidyard "url", { class: "custom" } %}
            options = optionsOrClasses;
        }

        options = { ...globalOptions, ...options };

        /**
         * Vidyard Player API
         * @link https://knowledge.vidyard.com/hc/en-us/articles/360019034753-Using-the-Vidyard-Player-API
         */
        const playerUUID = videoURL.split('vidyard.com/watch/')[1].split('?')[0];

        let $return = '';

        if ( options.script )
            $return += '<script src="https://play.vidyard.com/embed/v4.js" type="text/javascript" async></script>';

        $return += `
            <img style="max-width: 100%;"
                 class="${options.class}"
                 src="https://play.vidyard.com/${playerUUID}.jpg"
                 data-uuid="${playerUUID}"
                 data-v="${options.version}"
                 data-type="${options.type}" />
        `;

        return $return;
    });
};
