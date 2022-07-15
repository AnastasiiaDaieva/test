'use strict';

/**
 * spa-program router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::spa-program.spa-program');
