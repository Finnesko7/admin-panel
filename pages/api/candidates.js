import HrCandidates from '../../models/HrCandidates'

const paginate = ({ page, pageSize }) => {
    console.log(" >>>>>>>>> ", page, pageSize)
    const offset = (page - 1) * pageSize;
    const limit = pageSize;

    return {
        offset,
        limit,
    };
};



export default async (req, res) => {

    // const {query: {page, pageSize}} = req;
    const candidates = await HrCandidates.findAll({
        order: [['id', 'DESC']],
        ...paginate({page: 1, pageSize: 10})
    })

    res.json({candidates})
}