import React, { useRef, useState, Fragment } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Magnetic = (props) => {
  const tgRef = useRef();
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = tgRef.current.getBoundingClientRect();

    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    setPosition({ x, y });
  };

  const { x, y } = position;

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  if (props.isLink) {
    return (
      <motion.a
        ref={tgRef}
        href={props.href}
        target="_blank"
        rel="noreferrer"
        className={props.className}
        onMouseMove={mouseMove}
        onMouseLeave={mouseLeave}
        animate={{ x: x, y: y }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        {props.children}
      </motion.a>
    );
  } else {
    return (
      <motion.div
        ref={tgRef}
        className={props.className}
        onMouseMove={mouseMove}
        onMouseLeave={mouseLeave}
        animate={{ x: x, y: y }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        {props.children}
      </motion.div>
    );
  }
};

export default Magnetic;

Magnetic.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  className: PropTypes.any,
  isLink: PropTypes.bool,
};
