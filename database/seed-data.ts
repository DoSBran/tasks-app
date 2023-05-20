interface SeedData {
    entries: SeedEntries[];
}

interface SeedEntries {
    description: string,
    status: string,
    createAt: number
}

export const seedData: SeedData = {
    entries: [
        {
            description: 'Pendientes',
            status: 'pending',
            createAt: Date.now(),
        },
        {
            description: 'En Proceso',
            status: 'inProgress',
            createAt: Date.now() - 1000000,
        },
        {
            description: 'Finalizadas',
            status: 'finish',
            createAt: Date.now() - 100000,
        }
    ],
}