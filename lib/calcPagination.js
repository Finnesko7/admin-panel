const paginate = ({ page, pageSize }) => {
    const offset = Number((page - 1) * pageSize);
    const limit = Number(pageSize);

    return {
        offset,
        limit,
    };
};

export default paginate