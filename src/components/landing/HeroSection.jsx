
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#00204E] via-[#001533] to-[#00204E]"
    >
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#B59459]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#B59459]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 flex flex-col justify-center h-full">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 mt-4 lg:mt-0">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center z-20"
          >
             <motion.img 
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.5 }}
               src="https://horizons-cdn.hostinger.com/b1e1b536-ff25-478e-ba49-dc458727b349/545f7dcd25c3d7e54d8cd7c130616256.png" 
               alt="LPV Logo" 
               className="w-32 md:w-64 h-auto mb-8 mx-auto"
             />

            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 leading-snug md:leading-tight font-heading">
              Viaje para qualquer lugar do mundo, <motion.span 
                initial={{ color: '#ffffff' }}
                animate={{ color: '#B59459' }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-[#B59459] font-extrabold"
              >reduzindo até 96% das despesas</motion.span> de passagens aéreas, sem aumentar os seus gastos pessoais.
            </h1>
            
            <p className="text-sm md:text-lg text-gray-200 mb-8 md:mb-10 max-w-xl mx-auto">
              Descubra o método mais fácil e rápido que pessoas comuns estão usando para transformar compras do dia-a-dia em viagens nacionais ou internacionais todos os anos usando milhas e pontos.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-[#B59459] hover:bg-[#9d7d4a] text-white rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 w-auto min-w-[300px]"
              >
                <a href="#preco-section">
                  QUERO VIAJAR MAIS BARATO ESSE ANO
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
             <div className="relative w-full max-w-md lg:max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#B59459]/20 to-transparent rounded-2xl transform rotate-3 scale-105"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 backdrop-blur-sm bg-white/5">
                   <img 
                      src="https://horizons-cdn.hostinger.com/b1e1b536-ff25-478e-ba49-dc458727b349/2d8d01d6048c449e0c0f99c9eea7ad21.jpg" 
                      alt="Lissa Ramos" 
                      className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0"
                   />
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
