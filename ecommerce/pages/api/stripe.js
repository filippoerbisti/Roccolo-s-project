const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    //console.log(re.body.cartItems);

    try {
        const params = {
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_options: [
                { shipping_rate: 'shr_1L5tXOGVmHSjXlXx8rsvS6iD' },
                { shipping_rate: 'shr_1L5tYFGVmHSjXlXxEqRMQPQx' },
            ],
            line_items: req.body.cartItems.map((item) => {
                const img = item.image[0].asset._ref;
                const newImage = img.replace('image-', 'https://cdn.sanity.io/images/2ognk6zd/production/').replace('-webp', '.webp');

                return {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: item.name,
                            images: [newImage],
                        },
                        unit_amount: item.price * 100,
                    }
                }
            }),
            mode: 'payment',
            success_url: `€{req.headers.origin}/?success=true`,
            cancel_url: `€{req.headers.origin}/?canceled=true`,
        }
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create(params);
        res.redirect(303, session.url);
    } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
    }
  } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
  }
}