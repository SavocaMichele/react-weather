

export interface NewsData {
    meta: {
        found: number
        returned: number
        limit: number
        page: number
    }
    data: {
        uuid: string
        title: string
        description: string
        keywords: string[]
        snippet: string
        url: string
        image_url: string
        language: string
        published_at: string
        source: string
        categories: string[]
        relevance_score: number
        locale: string
    }[]
}