import { createHmac, randomUUID } from 'crypto';
import Razorpay from 'razorpay';
import { z } from 'zod';
import { env } from '../../env/client.mjs';
import { createProtectedRouter } from './protected-router';

export const paymentRouter = createProtectedRouter()
    .mutation('finalize', {
        input: z.object({
            paymentId: z.string(),
            orderId: z.string(),
            amount: z.number(),
            currency: z.string(),
            type: z.string(),
        }),

        async resolve({ ctx, input }) {
            return ctx.prisma.payment.create({
                data: {
                    id: randomUUID(),
                    paymentId: input.paymentId,
                    orderId: input.orderId,
                    amount: input.amount,
                    currency: input.currency,
                    description: input.type,
                    user: {
                        connect: {
                            id: ctx.session?.user?.id,
                        },
                    },
                },
            });
        },
    })
    .mutation('generateOrderID', {
        input: z.object({
            amount: z.number(),
        }),
        async resolve({ input }) {
            const razorpay = new Razorpay({
                key_id: env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                key_secret: env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET,
            });
            const payment_capture = 1;
            const currency = 'INR';

            const options = {
                amount: input.amount * 100,
                currency,
                receipt: randomUUID(),
                payment_capture,
            };

            const response = await razorpay.orders.create(options);
            console.log(response);

            return {
                id: response.id,
                currency: response.currency,
                amount: response.amount,
            };
        },
    })
    .mutation('verifySignature', {
        input: z.object({
            razorpay_payment_id: z.string(),
            razorpay_order_id: z.string(),
            razorpay_signature: z.string(),
        }),
        async resolve({ input }) {
            const generatedSignature = createHmac(
                'sha256',
                process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET ?? ''
            )
                .update(
                    `${input.razorpay_order_id}|${input.razorpay_payment_id}`
                )
                .digest('hex');

            return {
                verified: input.razorpay_signature === generatedSignature,
            };
        },
    });
