import { useLottie } from 'lottie-react';
import animationData from '../../public/lotte/brain.json';

const LottieView = (props) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: props.animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    const { View } = useLottie(defaultOptions);

    return View;
};

export default LottieView;
