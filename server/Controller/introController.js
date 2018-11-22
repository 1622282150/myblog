import IntroController from '../model/introductions'
class IntroControllers{
    async getIntroductions(ctx){
        ctx.body=await IntroController.getIntroductions()
    }
}
export default new IntroControllers()