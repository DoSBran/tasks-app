interface SeedData {
    entries: SeedEntries[];
}

interface SeedEntries {
    description: string,
    status: string,
    createdAt: number
}

export const seedData: SeedData = {
    entries: [
        {
            description: 'Pendientes',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            description: 'En Proceso',
            status: 'inProgress',
            createdAt: Date.now() - 1000000,
        },
        {
            description: 'Finalizadas',
            status: 'finish',
            createdAt: Date.now() - 100000,
        }
    ],
}