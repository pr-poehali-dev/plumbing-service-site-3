import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface Service {
  name: string;
  price: string;
  unit?: string;
}

interface ServiceCategory {
  category: string;
  services: Service[];
}

const priceList: ServiceCategory[] = [
  {
    category: 'Установка сантехники',
    services: [
      { name: 'Установка унитаза', price: '2500', unit: 'шт' },
      { name: 'Установка раковины', price: '1800', unit: 'шт' },
      { name: 'Установка ванны', price: '3500', unit: 'шт' },
      { name: 'Установка душевой кабины', price: '4000', unit: 'шт' },
      { name: 'Установка смесителя', price: '1200', unit: 'шт' },
    ],
  },
  {
    category: 'Замена труб',
    services: [
      { name: 'Замена водопроводных труб', price: '800', unit: 'м.п.' },
      { name: 'Замена канализационных труб', price: '900', unit: 'м.п.' },
      { name: 'Замена стояков', price: '5000', unit: 'шт' },
    ],
  },
  {
    category: 'Ремонт и обслуживание',
    services: [
      { name: 'Устранение засора', price: '1500', unit: 'услуга' },
      { name: 'Ремонт смесителя', price: '800', unit: 'шт' },
      { name: 'Замена прокладок', price: '500', unit: 'шт' },
      { name: 'Регулировка сливного бачка', price: '600', unit: 'шт' },
    ],
  },
  {
    category: 'Разводка и подключение',
    services: [
      { name: 'Разводка воды к точкам', price: '1500', unit: 'точка' },
      { name: 'Подключение стиральной машины', price: '1200', unit: 'шт' },
      { name: 'Подключение посудомоечной машины', price: '1200', unit: 'шт' },
      { name: 'Монтаж системы фильтрации', price: '2500', unit: 'шт' },
    ],
  },
];

const advantages = [
  {
    icon: 'Clock',
    title: 'Работаем 24/7',
    description: 'Выезжаем на вызов в любое время, включая выходные',
  },
  {
    icon: 'Award',
    title: 'Опыт 15+ лет',
    description: 'Квалифицированные мастера с подтвержденным опытом',
  },
  {
    icon: 'Shield',
    title: 'Гарантия качества',
    description: 'Официальная гарантия на все виды работ до 2 лет',
  },
  {
    icon: 'Wrench',
    title: 'Свой инструмент',
    description: 'Профессиональное оборудование и расходные материалы',
  },
];

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Droplet" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-foreground">СантехПро</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#prices" className="text-foreground hover:text-primary transition-colors">
              Цены
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              О нас
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>
          <Button asChild>
            <a href="#contact">Вызвать мастера</a>
          </Button>
        </div>
      </header>

      <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Профессиональные сантехнические услуги
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Быстро, качественно, с гарантией. Решаем любые сантехнические задачи в Москве и области.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" asChild>
              <a href="#contact">Оставить заявку</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#prices">Посмотреть цены</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={advantage.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Прайс-лист
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Прозрачные цены на все виды работ. Финальная стоимость рассчитывается после осмотра объекта.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {priceList.map((category, index) => (
              <Card key={index} className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="flex justify-between items-start border-b border-gray-200 pb-3 last:border-0"
                      >
                        <span className="text-foreground flex-1">{service.name}</span>
                        <span className="text-primary font-semibold whitespace-nowrap ml-4">
                          {service.price} ₽
                          {service.unit && (
                            <span className="text-muted-foreground text-sm ml-1">/ {service.unit}</span>
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              * Выезд мастера и диагностика — бесплатно в пределах МКАД
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Оставить заявку
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Заполните форму, и мы свяжемся с вами в течение 10 минут
            </p>
            <Card className="border-gray-200">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Ваше имя
                    </label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Телефон
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Опишите проблему
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите, какая помощь вам нужна..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 text-center">
              <div className="flex items-center gap-2">
                <Icon name="Phone" className="text-primary" size={20} />
                <a href="tel:+74951234567" className="text-foreground hover:text-primary transition-colors">
                  +7 (495) 123-45-67
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" className="text-primary" size={20} />
                <a
                  href="mailto:info@santehpro.ru"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  info@santehpro.ru
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Droplet" size={24} />
            <span className="text-xl font-bold">СантехПро</span>
          </div>
          <p className="text-gray-400">© 2024 СантехПро. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
