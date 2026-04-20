import React from 'react';
import { Zap, ShieldCheck } from 'lucide-react';

const FinancingBanner = () => {
  return (
    <section className="bg-gradient-to-r from-brand-navy to-brand-metal py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <Zap className="w-6 h-6 text-white" />
            <span className="text-white font-bold text-lg">Financiamiento en menos de 24 horas</span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-white" />
            <span className="text-white/90">Aprobación rápida • Sin complicaciones</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancingBanner;
