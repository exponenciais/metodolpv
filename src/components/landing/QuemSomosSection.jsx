
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';

const QuemSomosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  return (
    <section id="quem-somos" className="py-20 md:py-32 bg-white text-[#00204E]">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} initial={{
        opacity: 0,
        y: 50
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8
      }} className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            {/* Mobile Title - Visible only on small screens */}
            <h2 className="text-2xl font-bold text-center md:hidden mb-4 font-heading">
              Prazer, Lissa Ramos
            </h2>

            <motion.div initial={{
            opacity: 0,
            x: -30
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            delay: 0.2,
            duration: 0.8
          }} className="flex justify-center md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-[#B59459] rounded-2xl transform -rotate-3"></div>
                <img 
                  src="https://horizons-cdn.hostinger.com/b1e1b536-ff25-478e-ba49-dc458727b349/49bbd31153c39ad346338220cbb70711.jpg" 
                  alt="Lissa Ramos" 
                  className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover aspect-[3/4]" 
                />
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 30
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            delay: 0.4,
            duration: 0.8
          }} className="md:w-1/2">
              {/* Desktop Title - Hidden on small screens */}
              <h2 className="text-3xl md:text-5xl font-bold mb-8 hidden md:block font-heading">
                Prazer, Lissa Ramos
              </h2>

              <div className="space-y-6 text-base md:text-lg leading-relaxed">
                <p>
                  Sou especialista em milhas e pontos há mais de 8 anos, e minha missão é fazer pessoas conquistarem a liberdade de realizar suas viagens dos sonhos e não limitarem suas férias.
                </p>
                <p>
                  Há quase uma década ajudo pessoas a economizarem em passagens e desfrutarem de novas experiências, através do conhecimento prático em milhas de forma estratégica e acessível.
                </p>
                <p>Sou nutricionista clínica na multinacional Nutrium Care, e passei anos estudando o mercado de milhas e pontos para criar um método simples, direto e que realmente funciona.</p>
                <p>
                  <strong>Já visitei mais de 30 DESTINOS</strong>, sempre economizando milhares de reais em cada viagem. E o melhor: sem complicação, sem precisar virar especialista, sem dedicar horas do meu dia para isso.
                </p>
                <p className="font-bold text-lg md:text-xl">
                  Criei o Método LPV para que você também possa experimentar essa liberdade.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          delay: 0.6,
          duration: 0.8
        }} className="text-center mt-16">
            <Button asChild size="lg" className="bg-[#B59459] hover:bg-[#9d7d4a] text-white rounded-full font-bold shadow-xl transform hover:scale-105 transition-all duration-300 min-w-[300px]">
              <a href="#preco-section">
                QUERO APRENDER COM A LISSA
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default QuemSomosSection;
