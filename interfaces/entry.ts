export interface entry{
    style: any;
    _id: string;
    description: string;
    createdAt: number;
    status: EntryStatus;
};

export type EntryStatus = 'pending' | 'inProgress' | 'finish';