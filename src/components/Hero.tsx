
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden gradient-bg pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Разработка корпоративных IT-решений
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 md:mb-10">
            Time & Material модель и аутстаффинг для среднего и крупного бизнеса
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-lightblue-500 hover:bg-lightblue-600 text-white font-medium px-8"
            >
              Обсудить проект
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-lightblue-400 text-lightblue-700 hover:bg-lightblue-50"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
      
      {/* Abstract shapes */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-lightblue-100 opacity-60 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-lightblue-200 opacity-60 blur-3xl"></div>
    </div>
  );
};

export default Hero;
