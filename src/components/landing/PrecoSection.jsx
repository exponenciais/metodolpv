import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Check, AlertCircle } from 'lucide-react';

const PrecoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const valueItems = [
    { name: "Método LPV", value: "R$ 297,00" },
    { name: "Lissa AI", value: "R$ 127,00" },
    { name: "CDIEA$Y + CDIEA$Y AI", value: "R$ 97,00" },
    { name: "Imersão Latam", value: "R$ 49,00" },
    { name: "Grupo VIP", value: "Incalculável" }
  ];

  return (
    <section id="preco-section" className="py-20 md:py-32 bg-[#00204E]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-16 font-heading">
            Quanto vale sua liberdade de viajar?
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl p-6 md:p-12 mb-8"
          >
            {/* Logo area */}
            <div className="flex justify-center mb-8">
               <img 
                 src="https://horizons-cdn.hostinger.com/b1e1b536-ff25-478e-ba49-dc458727b349/c564d460aa69a6070fd5e490bc0bb28e.png" 
                 alt="LPV Logo" 
                 className="w-32 md:w-48 h-auto"
               />
            </div>

            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#00204E] mb-6 text-center font-heading">
                Veja o que você está levando:
              </h3>
              <div className="space-y-4">
                {valueItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + (0.1 * index), duration: 0.4 }}
                    className="flex items-center justify-between py-3 border-b border-gray-200"
                  >
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                      <span className="text-sm md:text-lg text-[#00204E] font-medium">{item.name}</span>
                    </div>
                    <span className="text-sm md:text-lg font-bold text-[#00204E] line-through">{item.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="border-t-2 border-[#B59459] pt-6">
              <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-2">
                <span className="text-lg md:text-xl font-bold text-gray-600">Valor Total:</span>
                <span className="text-2xl md:text-3xl font-bold text-gray-400 line-through">R$ 570,00</span>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="bg-gradient-to-r from-[#B59459] to-[#d4a76a] rounded-xl p-6 md:p-8 text-center relative overflow-hidden"
              >
                <p className="text-white text-lg md:text-xl mb-2 font-semibold">HOJE POR APENAS</p>
                <div className="text-white text-3xl md:text-5xl font-bold mb-4 font-heading">
                  12x R$15,20
                </div>
                <p className="text-white text-xl md:text-2xl mb-6">ou R$147,00 à vista</p>
                
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-green-500 hover:bg-green-600 text-white text-sm xs:text-base md:text-xl px-4 xs:px-6 md:px-16 py-3 xs:py-4 md:py-8 rounded-full font-bold shadow-2xl w-full min-w-0 md:w-auto md:min-w-[300px] h-auto whitespace-normal"
                  >
                    <a href="https://pay.kiwify.com.br/N3pvQQd" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      QUERO GARANTIR MINHA LIBERDADE
                    </a>
                  </Button>
                </motion.div>

              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-center"
          >
             {/* Limited Time Badge moved outside */}
            <div className="inline-block mb-6">
               <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 md:p-4 mb-4">
                  <p className="text-white font-bold text-base md:text-lg">
                    🎁 Economia de mais de R$ 420,00
                  </p>
                </div>
                
                <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm md:text-base font-bold animate-pulse mx-auto inline-block shadow-lg">
                  POR TEMPO LIMITADO
                </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-300">
              <AlertCircle className="w-5 h-5" />
              <p className="text-xs md:text-sm">Vagas limitadas • Preço pode subir a qualquer momento</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrecoSection;
