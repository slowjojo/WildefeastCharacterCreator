    interface iRankData{
        id: string
        rank: number
    }

    interface nameAndDescription{
        name: string
        description: string
    }
    
    interface styleSpread{
        mighty: number
        precise: number
        swift: number
        tricky:number
    }

    export type {
        iRankData,
        nameAndDescription,
        styleSpread
    }