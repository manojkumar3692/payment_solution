import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse, NextRequest } from "next/server";
import { redirect } from "next/navigation"
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(request: NextRequest, response: Response) {

    let reqBody = await request.json()
    let session;
    try {
        // Create Checkout Sessions from body params.
        session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    price: reqBody.productPriceId,
                    quantity: 1,
                },
            ],
            phone_number_collection: {
                enabled: true,
            },
            mode: 'payment',
            success_url: `${request.headers.get('origin')}/?success=true`,
            cancel_url: `${request.headers.get('origin')}/?canceled=true`,
        });
        // console.log("url ", session.url)


    } catch (err: any) {
        return NextResponse.json({ error: err.message });
    }
    // NextResponse.redirect(session.url);
    return NextResponse.json({ data: { url: session.url } }, { status: 200 });
}


