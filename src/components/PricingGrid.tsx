"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardTitle, CardDescription, CardContent, CardFooter, CardHeader } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Básico",
    description: "Perfecto para empezar a organizar tus finanzas",
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      "Hasta 100 transacciones/mes",
      "3 cuentas bancarias",
      "5 presupuestos básicos",
      // "Sincronización offline",
      "Soporte por email"
    ],
    buttonText: "Comenzar gratis",
    variant: "glass" as const,
    popular: false
  },
  {
    name: "Pro",
    description: "Para usuarios que quieren control total",
    monthlyPrice: 9,
    annualPrice: 95,
    features: [
      "Transacciones ilimitadas",
      "Cuentas bancarias ilimitadas",
      "Presupuestos avanzados ilimitados",
      "Recomendaciones con IA",
      "Transacciones recurrentes",
      "Exportación de datos",
      "Soporte prioritario 24/7"
    ],
    buttonText: "Iniciar plan Pro",
    variant: "elevated" as const,
    popular: true
  }
];

export const PricingGrid = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="w-full">
      {/* Toggle */}
      <div className="flex items-center justify-center gap-4 mb-16">
        <span className={`text-sm font-bold transition-apple ${!isAnnual ? 'text-text-primary' : 'text-text-tertiary'}`}>Mensual</span>
        <button
          onClick={() => setIsAnnual(!isAnnual)}
          className="relative w-14 h-8 bg-surface-secondary rounded-full p-1 transition-apple border border-border-secondary ring-1 ring-inset ring-black/5"
        >
          <motion.div
            className="w-6 h-6 bg-white rounded-full shadow-apple-sm border border-black/10"
            animate={{ x: isAnnual ? 24 : 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </button>
        <span className={`text-sm font-bold transition-apple ${isAnnual ? 'text-text-primary' : 'text-text-tertiary'}`}>
          Anual
          <Badge variant="success" size="sm" className="ml-2 bg-status-success/20 text-status-success border-none">-20%</Badge>
        </span>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            variant={plan.variant}
            hoverable
            padding="lg"
            className={`flex flex-col relative overflow-hidden transition-apple-slow ${plan.popular ? 'border-accent-blue/50 ring-2 ring-accent-blue/10 bg-surface-primary' : 'border-border-secondary/50'
              }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0">
                <div className="bg-accent-blue text-white text-[10px] font-black uppercase tracking-widest px-8 py-2 rotate-45 translate-x-10 translate-y-2 shadow-apple-sm">
                  Popular
                </div>
              </div>
            )}

            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                {plan.popular && <Badge variant="primary" size="sm" dot>RECOMENDADO</Badge>}
              </div>
              <CardDescription className="text-sm leading-relaxed mb-6">
                {plan.description}
              </CardDescription>

              <div className="flex items-baseline gap-1 mb-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={isAnnual ? 'annual' : 'monthly'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-5xl font-extrabold text-text-primary tracking-tight"
                  >
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </motion.span>
                </AnimatePresence>
                <span className="text-text-tertiary font-bold text-sm uppercase tracking-widest">
                  / {isAnnual ? 'año' : 'mes'}
                </span>
              </div>
              {isAnnual && plan.annualPrice > 0 && (
                <p className="text-[10px] font-bold text-status-success uppercase tracking-widest mb-4">
                  Ahorras ${(plan.monthlyPrice * 12) - plan.annualPrice} al año
                </p>
              )}
            </CardHeader>

            <CardContent className="flex-1 space-y-4 my-6">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-status-success/10 flex items-center justify-center text-status-success shrink-0">
                    <Check className="w-3 h-3 stroke-3" />
                  </div>
                  <span className="text-sm text-text-secondary font-medium leading-tight">{feature}</span>
                </div>
              ))}
            </CardContent>

            <CardFooter className="mt-auto">
              <Button
                variant={plan.popular ? "primary" : "secondary"}
                className="w-full font-bold shadow-apple-sm"
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
