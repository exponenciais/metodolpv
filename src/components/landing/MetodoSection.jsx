
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Settings, Coins, Target, TrendingUp, Map } from 'lucide-react';

const MetodoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const modules = [
    {
      number: "01",
      icon: Settings,
      title: "O Setup do Viajante",
      description: "Configure sua estrutura de cartões e programas de milhas de forma estratégica"
    },
    {
      number: "02",
      icon: Coins,
      title: "A Fábrica de Milhas",
      description: "Aprenda a acumular milhas no piloto automático, mesmo sem viajar"
    },
    {
      number: "03",
      icon: Target,
      title: "O Preço Justo",
      description: "Descubra quanto realmente vale pagar por uma passagem e quando usar milhas"
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "O Multiplicador",
      description: "Estratégias avançadas para multiplicar suas milhas rapidamente"
    },
    {
      number: "05",
      icon: Map,
      title: "O Mapa da Mina",
      description: "Rotas e datas estratégicas para maximizar o valor das suas milhas"
    }
  ];

  return (
    <section id="metodo" className="py-20 md:py-32 bg-white text-[#00204E]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-16 font-heading">
            Conheça os 5 pilares do Método LPV
          </h2>
          
          <div className="space-y-16 mb-16">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  className="relative bg-gradient-to-r from-[#00204E] to-[#003366] rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 mt-12"
                >
                  <div className="absolute -top-10 left-8 md:left-12">
                    <div className="bg-[#B59459] w-20 h-20 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  <div className="pt-8 pl-2">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-[#B59459] text-2xl md:text-3xl font-bold font-heading">{module.number}</span>
                      <h3 className="text-xl md:text-2xl font-bold text-white font-heading">
                        {module.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-base md:text-lg">
                      {module.description}
                    </p>
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
                QUERO ACESSAR O MÉTODO COMPLETO
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MetodoSection;
