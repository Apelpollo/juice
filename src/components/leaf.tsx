import { motion } from "framer-motion";
import { leaf, leafWrapper } from "../../variants";

const Leaf = ({  className = "", imageUrl = "", animationSpeed = 1.8 }) => {
  return (
    <motion.div variants={leafWrapper} className={className}>
      <motion.img custom={animationSpeed} variants={leaf} className="leaf" src={imageUrl} />
    </motion.div>
  );
};

export default Leaf;