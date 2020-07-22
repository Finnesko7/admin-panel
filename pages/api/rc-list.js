import RealtyComplex from '../../models/RealtyComplex'
import RealtyComplexDeveloper from '../../models/RealtyComplexDeveloper'
import paginate from "../../lib/calcPagination";

export default async (req, res) => {
    const {query: {page, pageSize}} = req;
    const rcList = await RealtyComplex.findAll({
        order: [['id', 'DESC']],
        ...paginate({page, pageSize}),
        include: RealtyComplexDeveloper
    })

    const total = await RealtyComplex.count()
    const countPages = Math.ceil(Number(total/pageSize));

    res.json({countPages, rcList})
}