import RealtyComplex from '../../models/RealtyComplex'
import RealtyComplexDeveloper from '../../models/RealtyComplexDeveloper'
import paginate from "../../lib/calcPagination";
import {Op} from "sequelize";

export default async (req, res) => {
    const {query: {page, pageSize, rcName , devName, address, active}} = req;
    const devWhere = {};
    const rcWhere = {};

    if (devName) devWhere['name_ru'] = {[Op.like]: `${devName}%`};
    if (rcName) rcWhere['name_ru'] = {[Op.like]: `${rcName}%`};
    if (address) rcWhere['name_ru'] = {[Op.like]: `%${address}%`};

    switch (active) {
        case 'active': rcWhere['is_active'] = 1; break;
        case 'not-active': rcWhere['is_active'] = 0; break;
    }

    const rcList = await RealtyComplex.findAndCountAll({
        order: [['id', 'DESC']],
        where: {...rcWhere},
        ...paginate({page, pageSize}),
        include: [
            {
                model: RealtyComplexDeveloper,
                where: {...devWhere}
            }
        ]
    })

    res.json(rcList)
}