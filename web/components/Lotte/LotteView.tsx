import { useLottie } from 'lottie-react';
import animationData from '../../public/lotte/brain.json';

const LottieView = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    const { View } = useLottie(defaultOptions);

    return View;
};

export default LottieView;
