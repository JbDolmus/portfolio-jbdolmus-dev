"use client"

import { fadeIn } from "@/utils/motion-transition";
import { motion } from "framer-motion";

interface TransitionComponentProps {
    children: React.ReactNode
    position: 'bottom' | 'right'
    className?: string

}

export default function TransitionComponent(props: TransitionComponentProps) {
    const { children, position, className } = props;
    return (
        <motion.div
            variants={fadeIn(position)}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={className}
        >
            {children}
        </motion.div>
    )
}
