import { env } from '../env/client.mjs';
import type {
    PaymentDataType,
    RazorpayResponseType,
} from '../server/schema/user.schema';

export const loadScript = async () => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    document.body.appendChild(script);
};
export const showRazorpay = async ({
    paymentData,
    window,
    onFinish,
}: {
    paymentData: PaymentDataType;
    window: Window;
    onFinish: (responseData: RazorpayResponseType) => void;
}) => {
    try {
        await loadScript();
        if ((window as any).Razorpay) {
            console.log('YES');

            const options = {
                key_id: env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                key_secret: env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET,
                amount: paymentData.amount,
                currency: paymentData.currency,
                name: 'Mental Health Matters',
                description: `Monthly Plan`,
                image: 'http://localhost:3000/assets/images/logo.png',
                order_id: paymentData.id,
                handler: async (response: RazorpayResponseType) => {
                    onFinish(response);
                },
                handlePaymentSuccess(response: any) {
                    console.log(response);
                },
                theme: {
                    color: '#0E93A4',
                },
            };

            const rzp1 = new (window as any).Razorpay(options);
            rzp1.open();
        } else {
            console.log('Razorpay not loaded');
        }
    } catch (error) {
        console.log(error);
    }
};
