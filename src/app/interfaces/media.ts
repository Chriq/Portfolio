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
    itchLink: string,

    summary: ProjectSummary
}

export interface ProjectSummary {
    role: string,
    teamSize: string,
    engine: string,
    timeframe: string,
    result: string
}

export interface Track {
    title: string,
    description: string,
    releaseDate: Date,
    featured: boolean,
    sortOrder: number,
    embedUrl: string,
    bancampHref: string
    tags: string[],
    styles: string[]
}