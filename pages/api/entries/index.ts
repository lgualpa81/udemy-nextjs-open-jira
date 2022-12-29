import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { Entry, IEntry } from '../../../models'

type Data =
    | { message: string }
    | IEntry
    | IEntry[]

const getEntries = async (res: NextApiResponse<Data>) => {
    await db.connect()
    const entries = await Entry.find().sort({ createdAt: 'asc' })
    await db.disconnect()

    res.status(200).json(entries)
}

const addEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { description = '' } = req.body
    const newEntry = new Entry({
        description,
        createdAt: Date.now()
    })
    try {
        await db.connect()
        await newEntry.save()
        await db.disconnect()

        res.status(201).json(newEntry)
    } catch (error) {
        console.log(error)
        await db.disconnect()
        res.status(500).json({ message: 'Algo salio mal, revisar consola del servidor' })
    }
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getEntries(res)
        case 'POST':
            return addEntry(req, res)
        default:
            res.status(400).json({ message: 'Endpoint no existe' })
    }


}

