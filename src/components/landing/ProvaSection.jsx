import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const ProvaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    { id: 1, image: "/depoimento1.jpeg", alt: "Depoimento: Lissa nós estamos impressionados..." },
    { id: 2, image: "/depoimento2.jpeg", alt: "Depoimento: Nossa que aulas incríveeeeeeis!" },
    { id: 3, image: "/depoimento3.jpeg", alt: "Depoimento: Lissa queria te agradecer..." },
    { id: 4, image: "/depoimento4.jpeg", alt: "Depoimento: Obrigado Lissa pela elaboração..." },
    { id: 5, image: "/depoimento5.jpeg", alt: "Depoimento: Olá Lissa! Boa noite..." },
    { id: 6, image: "/depoimento6.jpeg", alt: "Depoimento: Muito satisfeito com esse curso..." }
  ];

  return (
    <section id="prova-social" className="py-20 md:py-32 bg-[#00204E]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-16 font-heading">
            Veja o que nossos alunos estão falando
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="bg-white rounded-xl p-4 shadow-lg border-2 border-gray-200 hover:border-[#B59459] transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex-grow flex items-center justify-center mb-4 overflow-hidden rounded-lg bg-gray-50">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.alt} 
                    className="w-full h-auto object-contain max-h-[300px]"
                  />
                </div>
                
                <div className="flex justify-center mt-auto pt-2 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-[#B59459] text-[#B59459]" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
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
                QUERO COMEÇAR AGORA
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProvaSection;
