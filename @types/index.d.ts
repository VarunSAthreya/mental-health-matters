import { IconType } from 'react-icons/lib';

interface IBlog {
    url: string;
    title: string;
    description: string;
    id: number;
    link: string;
}

interface ISocialMedia {
    icon: IconType;
    url: string;
    text: string;
}

interface IBasicCard {
    title: string;
    description: string;
    icon: IconType;
}

interface ITestimonial {
    heading: string;
    review: string;
    name: string;
    designation: string;
    imageUrl: string;
}

interface IService {
    title: string;
    description: string;
    imageUrl: string;
}

interface IFeature {
    text: string;
    iconBg: string;
    icon: IconType;
    color: string;
}
