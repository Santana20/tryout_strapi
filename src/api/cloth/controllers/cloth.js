'use strict';

/**
 * cloth controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::cloth.cloth', ({strapi}) => ({
    async listClothes(ctx) {
        try {
            const data = await strapi.entityService.findMany('api::cloth.cloth', {
                fields: ['*'],
                populate: {
                    img: {
                        fields: ['url']
                    },
                    sizes: true
                }

            })
            ctx.body = data
        }
        catch(err) {
            console.log(err);
            ctx.body = err;
        }
    }
}));
