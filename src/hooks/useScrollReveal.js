import { useInView } from "framer-motion";
import { useRef } from "react";

const useScrollReveal = (once = true, margin = "-50px") => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once, margin });

   return [ref, isInView];
};

export default useScrollReveal;

export const fadeUp = {
   hidden: { opacity: 0, y: 30 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export const staggerContainer = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.08
      }
   }
};
