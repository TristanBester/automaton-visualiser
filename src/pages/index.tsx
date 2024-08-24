import Head from "next/head";
import Link from "next/link";

import Flow from "./flow";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div style={{ height: '1000px' }}>
        <Flow />

         {/* <AnimatedThing /> */}
         {/* <motion.div animate={{ x: 100, y: 100 }} >Hello</motion.div> */}
      </div >
    </>
  );
}
