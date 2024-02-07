import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useActiveSectionContext } from "../context/active-section-context";

export const useSectionInView = (sectionName, threshold = 0.5) => {
  const { ref, inView } = useInView({
    threshold,
  });

  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      console.log("section in view", sectionName);
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, sectionName, timeOfLastClick]);

  return {
    ref,
  };
};
