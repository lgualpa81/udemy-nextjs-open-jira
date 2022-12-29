export interface Entry {
    _id: string,
    description: string,
    createdAt: number,
    status: EntryStatus
}

//usar un type cuando los tipos no va a expandir
export type EntryStatus = 'pending' | 'in-progress' | 'finished'