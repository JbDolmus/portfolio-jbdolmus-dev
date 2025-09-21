import { Variants, Transition } from "framer-motion";

export const transitionVariantsPage = {
    initial: {
        x: "100%",
        width: "100%",
    },
    animate: {
        x: "0%",
        width: "0%",
    },
    exit: {
        x: ["0%", "100%"],
        width: ["0%", "100%"],
    },
};

export const motionTransitionsAbout = {
    initial: {
        opacity: 0,
        bottom: "5rem",
        transform: "translateY(200px)",
    },
    transition: {
        duration: 2.3,
        type: "tween",
        ease: [0.25, 0.6, 0.3, 0.8],
    },
    animate: {
        opacity: 1,
        transform: "translateY(0px)",
    },
};




export const fadeIn = (position: string): Variants => {
    const commonTransition: Transition = {
        type: "tween",
        duration: 1.4,
        delay: 0.5,
        ease: [0.25, 0.25, 0.25, 0.75],
    };

    return {
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: commonTransition,
        },
        hidden: {
            y: position === "bottom" ? -80 : 0,
            x: position === "right" ? 80 : 0,
            opacity: 0,
            transition: {
                ...commonTransition,
                duration: 0.5,
                ease: [0.25, 0.25, 0.25, 0.25],
            },
        },
    };
};

