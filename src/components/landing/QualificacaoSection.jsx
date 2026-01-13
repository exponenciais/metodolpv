
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Wallet, TrendingDown, Plane, BookOpen, Zap } from 'lucide-react';

const QualificacaoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const qualifications = [
    {
      icon: Wallet,
      title: "Ganha a partir de R$ 2.000",
      description: "E sonha em viajar com mais frequência sem comprometer seu orçamento"
    },
    {
      icon: TrendingDown,
      title: "Cansado de pagar caro em viagens",
      description: "Está farto de ver aqueles preços absurdos de passagens aéreas"
    },
    {
      icon: Plane,
      title: "Quer viajar quantas vezes suas férias permitirem",
      description: "Sem precisar economizar por anos para realizar esse sonho"
    },
    {
      icon: BookOpen,
      title: "Tentou aprender sobre milhas",
      description: "Mas achou tudo muito complicado e desistiu no meio do caminho"
    },
    {
      icon: Zap,
      title: "Quer método definitivo",
      description: "Sem enrolação, sem precisar virar um especialista em milhas"
    }
  ];

  return (
    <section id="qualificacao" className="py-20 md:py-32 bg-[#00204E]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-10 font-heading">
            O Método LPV é para você se...
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {qualifications.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-[#B59459] w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#00204E] mb-3 text-center font-heading">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-center text-sm">
                    {item.description}
                  </p>
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
                SIM, ESSE SOU EU!
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default QualificacaoSection;
