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