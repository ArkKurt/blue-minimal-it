
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Flag, Users } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  number: string;
  label: string;
}

const StatCard = ({ icon, number, label }: StatCardProps) => {
  return (
    <Card className="border-none bg-white/80 backdrop-blur-sm shadow-md">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-lightblue-100 text-lightblue-600">
            {icon}
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">{number}</p>
            <p className="text-gray-600">{label}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding gradient-bg relative overflow-hidden">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="section-title">О компании</h2>
          <p className="section-subtitle">
            Более 10 лет мы создаем высококачественные IT-решения для бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Почему нам доверяют</h3>
              <p className="text-gray-600">
                Мы специализируемся на разработке корпоративных приложений для среднего и крупного бизнеса.
                Наша команда состоит из опытных специалистов в области Web3, Java и PHP разработки, 
                которые готовы решать самые сложные задачи.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Наш подход</h3>
              <p className="text-gray-600">
                Мы работаем по гибкой модели Time & Material, что позволяет нашим клиентам 
                контролировать бюджет и оптимизировать затраты на разработку. Аутстаффинг 
                позволяет быстро масштабировать вашу команду без затрат на найм и обучение персонала.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Технологическая экспертиза</h3>
              <p className="text-gray-600">
                Наши разработчики имеют глубокие знания в области Web3, блокчейн-технологий, 
                Java-разработки и PHP. Мы постоянно следим за новыми технологиями и 
                инструментами, чтобы предлагать нашим клиентам самые современные решения.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StatCard 
                icon={<Users className="h-6 w-6" />} 
                number="80+" 
                label="Специалистов" 
              />
              <StatCard 
                icon={<Award className="h-6 w-6" />} 
                number="150+" 
                label="Успешных проектов" 
              />
              <StatCard 
                icon={<Flag className="h-6 w-6" />} 
                number="10+" 
                label="Лет опыта" 
              />
              <StatCard 
                icon={<Users className="h-6 w-6" />} 
                number="30+" 
                label="Крупных клиентов" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
