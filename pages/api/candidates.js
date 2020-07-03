import HrCandidates from '../../models/HrCandidates'

const paginate = ({ page, pageSize }) => {
    const offset = (page - 1) * pageSize;
    const limit = pageSize;

    return {
        offset,
        limit,
    };
};



export default async (req, res) => {

    const candidates = await HrCandidates.findAll({
        ...paginate({page: 1, pageSize: 10})
    })

    res.json({candidates})
}