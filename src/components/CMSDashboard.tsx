
import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CMSDashboard = () => {
  const { toast } = useToast();
  
  const handleCMSLogin = () => {
    // This would normally redirect to your CMS login page
    window.open('https://app.hygraph.com/login', '_blank');
    
    toast({
      title: "Переход в CMS",
      description: "Выполняется переход в панель управления контентом",
    });
  };
  
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="section-title">Панель управления контентом</h2>
          <p className="section-subtitle">
            Управляйте содержимым вашего сайта через удобную CMS Hygraph
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-md p-8">
          <h3 className="text-xl font-bold mb-4">Что вы можете редактировать:</h3>
          
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Список услуг и их описания</li>
            <li>Преимущества работы с компанией</li>
            <li>Информацию о компании и статистику</li>
            <li>Контактную информацию</li>
          </ul>
          
          <p className="mb-6 text-gray-600">
            Все изменения, внесенные в CMS, автоматически отобразятся на сайте после сохранения.
          </p>
          
          <div className="flex justify-center">
            <Button 
              onClick={handleCMSLogin}
              className="bg-lightblue-500 hover:bg-lightblue-600"
            >
              Войти в панель управления
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CMSDashboard;
