import axios from "axios";

export const loadScript = async () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
};
export const showRazorpay = async ({
    amount,
    window,
    onFinish,
}: {
    amount: number;
    window: Window;
    onFinish: Function;
}) => {
    try {
        await loadScript();
        if ((window as any).Razorpay) {
            console.log("YES");

            const { data } = await axios.post("/api/razorpay", {
                price: amount,
            });

            let options = {
                key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                key_secret: process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET,
                amount: data.amount,
                currency: data.currency,
                name: "Mental Health Matters",
                description: `Monthly Plan`,
                image: "http://localhost:3000/assets/images/logo.png",
                order_id: data.id,
                handler: async (response: any) => {
                    const onSuccess = await axios.post("/api/validate", {
                        order_id: data.id,
                        payment_id: response.razorpay_payment_id,
                        signature: response.razorpay_signature,
                    });

                    const isVerified = onSuccess.data.value;
                    console.log(isVerified);

                    if (isVerified) {
                        // const paymentResult = {
                        //     payment_id: response.razorpay_payment_id,
                        //     order_id: response.razorpay_order_id,
                        //     update_time: Date.now(),
                        //     status: 'paid',
                        // };

                        onFinish(response.razorpay_payment_id);

                        alert("Payment Successful");
                        // TODO: Update the order status in backend
                    } else {
                        console.log("Payment not verified!");
                    }
                },
                handlePaymentSuccess(response: any) {},
                theme: {
                    color: "#0E93A4",
                },
            };

            let rzp1 = new (window as any).Razorpay(options);
            rzp1.open();
        } else {
            console.log("Razorpay not loaded");
        }
    } catch (error) {
        console.log(error);
    }
};
