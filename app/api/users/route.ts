import { NextApiRequest, NextApiResponse } from 'next'

export async function GET(req: Request) {
    return new Response(JSON.stringify({ name: "manoj" }))
}