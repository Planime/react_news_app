export function createConfigTopHeadlines({country, category, q} = {}) {

    return {
        country,
        category,
        q
    };
}


export function createConfigEverything({q, from, to, language, sortBy} = {}) {
    return {
        q,
        from,
        to,
        language,
        sortBy,

    }
}

export function createConfigUrl(config={}) {
    return Object.entries(config)
        .filter(obj => obj[1].length >= 1)
        .map(obj => obj.join("="))
        .join("&")
}
