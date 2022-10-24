import z from 'zod';

export const paymentData = z.object({
    id: z.string().uuid(),
    currency: z.string(),
    amount: z.number(),
});
export const razorpayResponse = z.object({
    razorpay_payment_id: z.string(),
    razorpay_order_id: z.string(),
    razorpay_signature: z.string(),
});

export type PaymentDataType = z.infer<typeof paymentData>;
export type RazorpayResponseType = z.infer<typeof razorpayResponse>;
