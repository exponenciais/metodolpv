
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';

const ProblemaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problema" className="py-20 md:py-32 bg-white text-[#00204E]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 font-heading">
            Deixa eu te fazer uma pergunta honesta...
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="space-y-6 text-base md:text-lg leading-relaxed">
                <p>
                  <strong>Quantas vezes você já deixou de viajar porque as passagens estavam muito caras?</strong>
                </p>
                <p>
                  Eu sei como é frustrante. Você trabalha duro o ano inteiro, economiza cada centavo, mas quando vai pesquisar passagens... BAM! Aqueles preços absurdos que parecem uma piada de mau gosto.
                </p>
                <p>
                  Durante anos, eu fui essa pessoa. Sonhava em conhecer o mundo, mas sempre esbarrava no mesmo problema: <strong>passagens caríssimas</strong> que tomavam todo o orçamento da viagem.
                </p>
                <p>
                  Até que descobri um segredo que as companhias aéreas não querem que você saiba...
                </p>
                <p>
                  <strong>Existe um jeito de viajar praticamente de graça</strong>, usando milhas e pontos que você já acumula sem perceber. Não é magia, não é sorte, é simplesmente conhecimento.
                </p>
                <p>
                  Desde então, já viajei para mais de 30 destinos, sempre pagando muito menos do que deveria. E o melhor: sem complicação, sem virar especialista, sem precisar de uma fortuna.
                </p>
                <p className="font-bold text-lg md:text-xl">
                  Criei o Método LPV exatamente para isso: ensinar você a realizar suas viagens dos sonhos, para qualquer destino, <motion.span 
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-[#B59459] font-extrabold inline-block"
                  >reduzindo até 96% das despesas</motion.span>, ou apenas a taxa de embarque.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#B59459] rounded-2xl transform rotate-3"></div>
                <img
                  src="https://horizons-cdn.hostinger.com/b1e1b536-ff25-478e-ba49-dc458727b349/ec440b5625d388cef87fad1da7df5cda.jpg"
                  alt="Lissa Ramos"
                  className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover aspect-[3/4]"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mt-12 md:mt-16"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#B59459] hover:bg-[#9d7d4a] text-white rounded-full font-bold shadow-xl transform hover:scale-105 transition-all duration-300 min-w-[300px]"
            >
              <a href="#preco-section">
                QUERO APRENDER O MÉTODO LPV
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemaSection;
