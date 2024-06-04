import Header from "@/components/header";
import Leaf from "@/components/leaf";
import TextContainer from "@/components/TextContainer";
import { motion } from "framer-motion";
import { bottle, bottleWrapper, leavesContainer } from "../../variants";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        {/* texts wrapper */}
        <TextContainer />

        {/* juice bottle image */}
        <motion.div variants={bottleWrapper} initial="initial" animate="animate" className="bottleWrapper">
          <motion.img src="/juice.png" variants={bottle} className="bottle" />
        </motion.div>

        {/* leaves images */}
        <motion.div variants={leavesContainer} initial="initial" animate="animate">
          <Leaf animationSpeed={1.8} className="leafWrapper-1" imageUrl="/leaf01.png" />
          <Leaf animationSpeed={1.6} className="leafWrapper-2" imageUrl="/leaf02.png" />
          <Leaf animationSpeed={1.5} className="leafWrapper-3" imageUrl="/leaf03.png" />
          <Leaf animationSpeed={1.7} className="leafWrapper-4" imageUrl="/leaf04.png" />
          <Leaf animationSpeed={1.8} className="leafWrapper-5" imageUrl="/leaf05.png" />
        </motion.div>
      </main>
    </div>
  );
}