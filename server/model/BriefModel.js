import query from '../utils/query'
import eacape from '../utils/eacape'
class briefs{
    async getBrief(){

            return await query(`SELECT * FROM ABOUT`)
        }

        async updateBrief(id,content){
        return await  query(eacape ` UPDATE ABOUT SET content=${content}WHERE id=${id}`)
        }

}
export default new briefs()