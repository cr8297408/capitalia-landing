import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/Accordion';

const faqs = [
  {
    value: "item-1",
    question: "¿Puedo cambiar de plan en cualquier momento?",
    answer: "Sí, puedes actualizar o cambiar tu plan cuando quieras. Los cambios se aplican inmediatamente y se prorratean en tu facturación."
  },
  {
    value: "item-2",
    question: "¿Mis datos están seguros?",
    answer: "Absolutamente. Usamos cifrado de 256 bits y nunca almacenamos información bancaria sensible. Tus datos están protegidos por estándares de seguridad financiera."
  },
  {
    value: "item-3",
    question: "¿Qué formas de pago aceptan?",
    answer: "Aceptamos todas las tarjetas principales (Visa, Mastercard, AMEX), PayPal y Apple Pay."
  },
  {
    value: "item-4",
    question: "¿Hay descuentos para estudiantes?",
    answer: "Sí, ofrecemos un 50% de descuento en el plan Pro para estudiantes verificados. Contáctanos con tu email institucional para aplicar."
  }
];

export const FAQSection: React.FC = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq) => (
        <AccordionItem key={faq.value} value={faq.value} className="border-border-secondary/50">
          <AccordionTrigger className="text-left font-bold text-text-primary hover:text-accent-blue py-6 transition-apple">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-text-secondary text-base leading-relaxed pb-8">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQSection;
