module.exports = (plugin) => {
    plugin.controllers.user.updateMe = async (ctx) => {
        if (!ctx.state.user || !ctx.state.user.id) {
            return ctx.response.status = 401;
        }
        await strapi.query('plugin::users-permissions.user').update({
            where: {id: ctx.state.user.id},
            data: ctx.request.body
        }).then((res) => {
            ctx.response.status = 200;
            console.log(res);
            ctx.response.body = res
        })
    }

    plugin.controllers.user.favCloths = async (ctx) => {
        if (!ctx.state.user || !ctx.state.user.id) {
            return ctx.response.status = 401;
        }

        await strapi
        .query('plugin::users-permissions.user')
        .findOne({
            select: [],
            where: {id: ctx.state.user.id},
            populate: { 
                cloths: {
                    select: ['*'],
                    populate: {
                        img: {
                            select: ['url']
                        },
                        sizes: true
                    }
                  }
            },
        })
        .then((res) => {
            ctx.response.status = 200;
            ctx.response.body = res
        });
    }

    plugin.routes['content-api'].routes.push(
        {
            method: "PUT",
            path: "/user/me",
            handler: "user.updateMe",
            config: {
                prefix: "",
                policies: []
            }
        },
        {
            method: "GET",
            path: "/user/me/fav_cloths",
            handler: "user.favCloths",
            config: {
                prefix: "",
                policies: []
            }
        }
    )

    return plugin;
}