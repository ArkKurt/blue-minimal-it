
import React from "react";
import { Check, Clock, CreditCard, FileCode, Shield, Users } from "lucide-react";

interface AdvantageProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AdvantageItem = ({ icon, title, description }: AdvantageProps) => {
  return (
    <div className="flex space-x-4">
      <div className="flex-shrink-0 mt-1">
        <div className="w-10 h-10 rounded-full bg-lightblue-100 flex items-center justify-center text-lightblue-600">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Advantages = () => {
  const advantages = [
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Гибкая модель оплаты",
      description: "Оплачивайте только фактически затраченное время разработчиков на ваш проект. Контролируйте бюджет и адаптируйте ресурсы под текущие потребности."
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Опытная команда",
      description: "Наши специалисты имеют в среднем более 5 лет опыта в своих технологиях и постоянно совершенствуют свои навыки."
    },
    {
      icon: <FileCode className="h-5 w-5" />,
      title: "Технологическая экспертиза",
      description: "Специализация на Web3, Java и PHP разработке позволяет нам предлагать оптимальные решения для вашего бизнеса."
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Безопасность данных",
      description: "Мы обеспечиваем полную конфиденциальность и защиту ваших данных, следуя лучшим практикам безопасности."
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      title: "Прозрачность работы",
      description: "Регулярная отчетность и доступ к системам контроля задач позволяют следить за прогрессом работы в реальном времени."
    },
    {
      icon: <Check className="h-5 w-5" />,
      title: "Гарантия качества",
      description: "Мы следуем строгим стандартам качества и предоставляем гарантийную поддержку на все разработанные решения."
    }
  ];

  return (
    <section id="advantages" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="section-title">Преимущества работы с нами</h2>
          <p className="section-subtitle">
            Мы создаем не просто программное обеспечение, а надежные и масштабируемые решения для вашего бизнеса
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {advantages.map((advantage, index) => (
            <AdvantageItem
              key={index}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
