export function roleSearchParam(searchParam) {
    let query = '?';
    if (searchParam.keyword !== '') {
        query = `${query}keyword=${searchParam.keyword}&&`
    }
    query = `${query}per_page=${searchParam.per_page}&&page=${searchParam.current}`
    return query;
}