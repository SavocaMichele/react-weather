

export type Location = {
    name: string
    lat: number
    lon: number
    country: string
    state?: string
}


export interface LocationState {
    source: "current" | "search" | null
    coords: {
        lat: number
        lon: number
    } | null
}