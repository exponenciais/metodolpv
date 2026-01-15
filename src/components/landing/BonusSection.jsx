
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';

const BonusSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const bonuses = [
    {
      title: "Lissa AI - Sua Mentora de Bolso",
      description: "Acesso exclusivo à inteligência artificial treinada por mim para tirar suas dúvidas 24/7",
      value: "R$ 127,00",
      image: "https://horizons-cdn.hostinger.com/b1e1b536-ff25-478e-ba49-dc458727b349/f8c95e251a527c6472cc5cea83cba07e.png",
      strikethrough: true
    },
    {
      title: "Curso CDIEA$Y + CDIEA$Y AI",
      description: "Método completo de educação financeira, fundado pelo especialista em finanças Theo Lima, com IA personalizada",
      value: "R$ 97,00",
      image: "https://horizons-cdn.hostinger.com/b1e1b536-ff25-478e-ba49-dc458727b349/ae46741edde24271dcf32b9b1babe813.png",
      strikethrough: true
    },
    {
      title: "Imersão Descomplicando a Tabela Fixa (Latam)",
      description: "Masterclass exclusiva sobre como maximizar seus pontos Latam Pass",
      value: "R$ 49,00",
      image: "https://horizons-cdn.hostinger.com/b1e1b536-ff25-478e-ba49-dc458727b349/b2c56a1423422ef9125dd242d7a3583c.png",
      strikethrough: true
    },
    {
      title: "Acesso ao Grupo VIP",
      description: "Comunidade exclusiva de alunos com suporte e networking constante",
      value: "Incalculável",
      image: "https://horizons-cdn.hostinger.com/b1e1b536-ff25-478e-ba49-dc458727b349/ff4f9083a5092e62c848e402cc5ca9d6.png",
      strikethrough: false
    }
  ];

  return (
    <section id="bonus" className="py-20 md:py-32 bg-white text-[#00204E]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block bg-[#B59459] text-white px-6 py-2 rounded-full font-bold text-sm mb-6"
            >
              BÔNUS PREMIUM
            </motion.div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 font-heading">
              Adquirindo HOJE, você ganha presentes exclusivos:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
            {bonuses.map((bonus, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  className="flex flex-col h-full bg-gradient-to-br from-[#00204E] to-[#003366] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300"
                >
                  {/* Increased height by approx 15% from h-64/h-80 to h-72/h-96 */}
                  <div className="bg-gray-100 p-8 flex items-center justify-center h-72 md:h-96 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5" />
                    <img
                      src={bonus.image}
                      alt={bonus.title}
                      className="w-auto h-full max-h-[120%] object-contain drop-shadow-xl transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-heading leading-tight">
                        {bonus.title}
                      </h3>
                      <p className="text-gray-300 mb-4 text-base leading-relaxed">
                        {bonus.description}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-white/10">
                      <p className={`text-[#B59459] font-bold text-lg md:text-xl ${bonus.strikethrough ? 'line-through opacity-80' : ''}`}>
                        Valor: {bonus.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#B59459] hover:bg-[#9d7d4a] text-white rounded-full font-bold shadow-xl transform hover:scale-105 transition-all duration-300 min-w-[300px]"
            >
              <a href="#preco-section">
                QUERO TODOS OS BÔNUS
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BonusSection;
