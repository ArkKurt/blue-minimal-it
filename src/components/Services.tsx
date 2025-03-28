
import React from "react";
import { Code, Coffee, Database, Globe, Server, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="card-shadow hover:border-lightblue-300 transition-all duration-300">
      <CardHeader className="pb-2">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-lightblue-100 text-lightblue-700 mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Web3 разработка",
      description: "Разработка децентрализованных приложений на блокчейне, смарт-контрактов и DeFi решений для бизнеса."
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Java разработка",
      description: "Создание надежных корпоративных приложений на Java, включая Spring, Hibernate и микросервисную архитектуру."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "PHP разработка",
      description: "Разработка высоконагруженных веб-приложений на PHP с использованием Laravel, Symfony и других фреймворков."
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Time & Material",
      description: "Гибкая модель оплаты, при которой вы платите только за фактическое время работы и затраченные ресурсы."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Аутстаффинг",
      description: "Предоставление квалифицированных IT-специалистов, которые работают над вашими проектами как часть вашей команды."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Разработка баз данных",
      description: "Проектирование и оптимизация высоконагруженных баз данных, миграция и интеграция с существующими системами."
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="section-title">Наши услуги</h2>
          <p className="section-subtitle">
            Мы предлагаем полный спектр услуг по разработке программного обеспечения для среднего и крупного бизнеса
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
