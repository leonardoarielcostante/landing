import { motion } from "motion/react";
import { useState } from "react";

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  //#0e15a3
  return (
    <section className="flex flex-col justify-center items-center">
      <motion.div
        className="bg-[#0e15a3] relative text-white rounded-lg text-center max-w-3xl w-1/2 py-10 shadow-lg shadow-gray-400 -translate-y-40 scroll-mt-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        id="aboutus"
      >
        <h2 className="text-xl">Sobre nosotros</h2>
        <div className="max-w-4xl flex justify-evenly items-center text-sm py-6 text-start">
          <p className="max-w-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            reiciendis doloremque voluptatibus temporibus minima distinctio
            recusandae eius quam, tenetur quae excepturi esse, rem modi aliquid
            quidem dolorum. Quasi, distinctio rerum. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Ad rerum, quis obcaecati itaque
            quibusdam voluptate dolor aliquid quas fugiat molestias veritatis
            libero nobis beatae officiis aspernatur, accusamus, nesciunt
            reiciendis autem.
          </p>
          <p className="max-w-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            reiciendis doloremque voluptatibus temporibus minima distinctio
            recusandae eius quam, tenetur quae excepturi esse, rem modi aliquid
            quidem dolorum. Quasi, distinctio rerum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dolore consequatur, aut quod pariatur
            ipsa ea temporibus accusantium nesciunt reiciendis saepe maiores
            porro qui, ad explicabo dolores possimus excepturi harum corrupti.
          </p>
        </div>
        <a
          className="px-8 py-2 border-2 rounded-full cursor-pointer hover:bg-white hover:text-[#0e15a3] transition-all ease-in-out my-2"
          onClick={() => setIsVisible(!isVisible)}
          href="#vision"
        >
          Ver mas
        </a>
      </motion.div>
      {isVisible && (
        <motion.div
          id="vision"
          className="flex max-w-4xl w-full -translate-y-30 justify-evenly items-center scroll-mt-50"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h3 className="text-2xl font-semibold pb-2">Mision</h3>
            <p className="max-w-72 border-t-2 text-justify ps-2 text-sm text-gray-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
              quaerat fugit laboriosam maxime consequuntur placeat nesciunt ad
              repellendus voluptas ex distinctio exercitationem, minus expedita?
              Sunt aut adipisci odio repellat quidem!
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold pb-2">Vision</h3>
            <p className="max-w-72 border-t-2 text-justify ps-2 text-sm text-gray-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
              quaerat fugit laboriosam maxime consequuntur placeat nesciunt ad
              repellendus voluptas ex distinctio exercitationem, minus expedita?
              Sunt aut adipisci odio repellat quidem!
            </p>
          </div>
        </motion.div>
      )}
    </section>
  );
}
