
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Eu nunca usei milhas. Vou conseguir acompanhar o curso?",
      answer: "Sim. O LPV foi criado para iniciantes absolutos, com explicações simples, passo a passo e foco no essencial para emitir passagens."
    },
    {
      question: "Vou precisar ficar acompanhando promoções o tempo todo?",
      answer: "Não. O método ensina quando agir e quando ignorar promoções, sem depender de sorte ou monitoramento diário."
    },
    {
      question: "Preciso ter cartão de crédito específico ou limite alto?",
      answer: "Não. O curso mostra como usar qualquer cartão e também estratégias que não dependem do cartão."
    },
    {
      question: "Quanto tempo preciso dedicar para aplicar o método?",
      answer: "Pouco tempo. O LPV é direto ao ponto e foi pensado para quem tem rotina corrida e quer praticidade."
    },
    {
      question: "Isso realmente funciona para pessoas comuns?",
      answer: "Sim. O método foi criado e testado por alguém comum, com renda média, e já ajudou dezenas de alunos a economizar."
    },
    {
      question: "E se eu comprar e perceber que o curso não é para mim?",
      answer: "Sem problema. Você tem 7 dias de garantia total. Se achar que o LPV não faz sentido para você, basta enviar um e-mail e receber 100% do seu dinheiro de volta, sem perguntas ou burocracia."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-[#00204E]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-12 font-heading">
            Perguntas Frequentes
          </h2>

          <div className="space-y-4 mb-16">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-base md:text-lg font-bold text-[#00204E] pr-4 font-heading">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-[#B59459] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-gray-700 leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mb-12 flex flex-col items-center justify-center"
          >
            <div className="max-w-2xl mx-auto mb-8 text-white space-y-4">
              <p className="text-lg md:text-xl font-semibold">
                Ao adquirir o LPV, fiz questão de fazer com que você tenha uma Garantia Blindada de 7 dias.
              </p>
              <p className="text-base md:text-lg text-gray-200">
                O reembolso é 100%, sem perguntas ou burocracia. Simples assim. O risco é todo meu.
              </p>
            </div>
            
            <img 
              src="https://horizons-cdn.hostinger.com/b1e1b536-ff25-478e-ba49-dc458727b349/44ba358f6c184172842c1769deb15f9e.webp" 
              alt="Garantia 7 Dias" 
              className="w-48 md:w-56 h-auto mb-6 hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#B59459] hover:bg-[#9d7d4a] text-white text-base md:text-xl px-8 md:px-16 py-6 md:py-8 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 mb-4 w-full md:w-auto min-w-[300px]"
            >
              <a href="#preco-section">
                SIM, QUERO COMEÇAR AGORA!
              </a>
            </Button>
            <p className="text-gray-300 text-xs md:text-sm">
              🔒 Ambiente 100% seguro • Seus dados estão protegidos
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
