import { useLottie } from "lottie-react";

const LottieView = (props: any) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: props.animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    const { View } = useLottie(defaultOptions);

    return View;
};

export default LottieView;
