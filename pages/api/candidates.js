import HrCandidates from '../../models/HrCandidates'
import HrCadidatesCatigories from '../../models/HrCadidatesCatigories'
import paginate from "../../lib/calcPagination";


export default async (req, res) => {

    const {query: {page, pageSize}} = req;
    const candidates = await HrCandidates.findAll({
        order: [['id', 'DESC']],
        ...paginate({page, pageSize}),
        include: HrCadidatesCatigories
    })

    const total = await HrCandidates.count()
    const countPages = Math.ceil(Number(total/pageSize));


    res.json({countPages, candidates})
}