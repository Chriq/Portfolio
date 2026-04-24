export interface Project {
    id: string,
    title: string,
    releaseDate: Date,
    developer: string,
    genres: string[],
    
    shortDescription: string,
    coverImage: string,
    embedUrl: string
    steamLink: string,
    itchLink: string
}

export interface Track {
    title: string,
    description: string,
    releaseDate: Date,
    featured: boolean,
    embedUrl: string,
    bancampHref: string
    tags: string[],
    styles: string[]
}