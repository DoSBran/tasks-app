export interface entry{
    _id: string;
    description: string;
    createAt: number;
    status: EntryStatus;
};

export type EntryStatus = 'pending' | 'inProgress' | 'finish';