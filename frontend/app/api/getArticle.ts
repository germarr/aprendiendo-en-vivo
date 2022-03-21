
export async function getPosts() {
    const response = await fetch(`https://cms.gmarr.me/posts/`)
    const films = await response.json()

    let articleList = await films.map((f) => [f.slug, f.id])
    
    return articleList;
} 

export async function getSerie() {
    const response = await fetch(`https://cms.gmarr.me/serie-nuevas/`)
    const serie = await response.json()

    let articleList = await serie.map((f) => [f.slug, f.id])
    
    return articleList;
} 