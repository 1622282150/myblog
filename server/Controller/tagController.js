import Tag from '../model/tags'

class TagsController {
    async updateTag(ctx) {
        ctx.body = await Tag.updateTag(ctx.params.id, ctx.request.body.tags)
    }
}

export default new TagsController()
