import HrCandidates from '../../models/HrCandidates'
import HrCadidatesCatigories from '../../models/HrCadidatesCatigories'

const paginate = ({ page, pageSize }) => {
    const offset = Number((page - 1) * pageSize);
    const limit = Number(pageSize);

    return {
        offset,
        limit,
    };
};


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