import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState, useEffect, useRef } from "react";

const masters = [
  {
    name: "Елена Керамова",
    experience: "12 лет",
    specialization: "Посуда и декор",
    description: "Работаю с высокотемпературной керамикой. Учу создавать функциональную посуду с авторским дизайном.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
  },
  {
    name: "Дмитрий Глинский",
    experience: "8 лет",
    specialization: "Скульптура",
    description: "Специализируюсь на керамической скульптуре и арт-объектах. Помогу раскрыть творческий потенциал.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
  {
    name: "Мария Гончарова",
    experience: "15 лет",
    specialization: "Традиционная керамика",
    description: "Работаю в традициях русской народной керамики. Обучаю классическим техникам гончарного дела.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  }
];

const materials = [
  { name: "Глина белая", price: "450₽/кг", stock: "В наличии" },
  { name: "Глина красная", price: "350₽/кг", stock: "В наличии" },
  { name: "Глазурь прозрачная", price: "800₽/л", stock: "В наличии" },
  { name: "Глазурь цветная", price: "950₽/л", stock: "Под заказ" },
  { name: "Набор стеков", price: "1200₽", stock: "В наличии" },
  { name: "Проволока для резки", price: "150₽", stock: "В наличии" },
  { name: "Губки для работы", price: "200₽/набор", stock: "В наличии" },
  { name: "Ангобы цветные", price: "600₽/набор", stock: "В наличии" }
];

const schedule = [
  { day: "Понедельник", time: "18:00-20:00", class: "Основы гончарного дела", spots: 3 },
  { day: "Вторник", time: "10:00-12:00", class: "Создание посуды", spots: 5 },
  { day: "Среда", time: "18:00-20:00", class: "Керамическая скульптура", spots: 2 },
  { day: "Четверг", time: "14:00-16:00", class: "Глазурование и декор", spots: 4 },
  { day: "Пятница", time: "18:00-20:00", class: "Свободная практика", spots: 6 },
  { day: "Суббота", time: "11:00-13:00", class: "Семейный мастер-класс", spots: 8 },
  { day: "Воскресенье", time: "14:00-16:00", class: "Интенсив выходного дня", spots: 4 }
];

export default function Index() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).ymaps && mapRef.current) {
      (window as any).ymaps.ready(() => {
        const map = new (window as any).ymaps.Map(mapRef.current, {
          center: [55.7558, 37.6173],
          zoom: 15,
          controls: ['zoomControl', 'fullscreenControl']
        });

        const placemark = new (window as any).ymaps.Placemark([55.7558, 37.6173], {
          balloonContent: '<strong>ГлинLab</strong><br/>г. Москва, ул. Гончарная, д. 15',
          hintContent: 'Гончарная мастерская ГлинLab'
        }, {
          preset: 'islands#brownCircleDotIcon'
        });

        map.geoObjects.add(placemark);
      });
    }
  }, []);

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/projects/276a28b1-a7c6-43d5-8167-72006a1cbf30/files/cfe70793-a9c9-40b3-b03e-035c28791e58.jpg" 
              alt="ГлинLab" 
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-2xl font-bold text-primary">ГлинLab</h1>
          </div>
          <div className="flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#gallery" className="hover:text-accent transition-colors">Галерея</a>
            <a href="#masters" className="hover:text-primary transition-colors">Мастера</a>
            <a href="#materials" className="hover:text-primary transition-colors">Материалы</a>
            <a href="#schedule" className="hover:text-primary transition-colors">Расписание</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/276a28b1-a7c6-43d5-8167-72006a1cbf30/files/47668228-76cf-484d-aef9-a2d2852448e7.jpg" 
            alt="Pottery workshop" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        </div>
        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <h2 className="text-6xl font-bold mb-6 text-primary">Гончарная мастерская ГлинLab</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Откройте для себя древнее искусство керамики. Создавайте уникальные изделия своими руками под руководством опытных мастеров.
          </p>
          <Button size="lg" className="text-lg" onClick={() => setBookingOpen(true)}>
            <Icon name="Calendar" className="mr-2" size={20} />
            Записаться на мастер-класс
          </Button>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-accent/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Наши работы</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Каждое изделие уникально и создано вручную нашими мастерами и учениками
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow animate-scale-in group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/276a28b1-a7c6-43d5-8167-72006a1cbf30/files/5a7965e8-5e90-41c7-8f80-21329280f26d.jpg" 
                  alt="Керамическая чаша" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 right-4 bg-accent">Новинка</Badge>
              </div>
              <CardContent className="pt-4">
                <h3 className="font-semibold text-lg mb-2">Чаша с зеленой глазурью</h3>
                <p className="text-muted-foreground text-sm">Ручная работа, натуральные материалы</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow animate-scale-in group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/276a28b1-a7c6-43d5-8167-72006a1cbf30/files/26f049cc-98be-4f04-9cc9-f0f0fd89bf06.jpg" 
                  alt="Керамические кружки" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="pt-4">
                <h3 className="font-semibold text-lg mb-2">Набор керамических кружек</h3>
                <p className="text-muted-foreground text-sm">Авторская коллекция, земляные оттенки</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow animate-scale-in group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/276a28b1-a7c6-43d5-8167-72006a1cbf30/files/6190b825-7f65-44c6-88a4-9d343390c56b.jpg" 
                  alt="Керамическая ваза" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="pt-4">
                <h3 className="font-semibold text-lg mb-2">Минималистичная ваза</h3>
                <p className="text-muted-foreground text-sm">Современный дизайн, ручное глазурование</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Palette" className="text-primary" size={24} />
                </div>
                <CardTitle>Мастер-классы</CardTitle>
                <CardDescription>От 1500₽</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Обучение гончарному делу для начинающих и опытных. Групповые и индивидуальные занятия.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="ShoppingBag" className="text-primary" size={24} />
                </div>
                <CardTitle>Продажа материалов</CardTitle>
                <CardDescription>Всё для творчества</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Широкий ассортимент глины, глазурей, инструментов и расходных материалов для керамики.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Home" className="text-primary" size={24} />
                </div>
                <CardTitle>Аренда места</CardTitle>
                <CardDescription>От 500₽/час</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Рабочее место с гончарным кругом, доступ к печи для обжига и всем необходимым инструментам.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="masters" className="py-20 px-4 bg-accent/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Наши мастера</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Профессионалы с многолетним опытом, готовые поделиться своими знаниями
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {masters.map((master, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img src={master.image} alt={master.name} className="w-full h-full object-cover" />
                  </div>
                  <CardTitle className="text-2xl">{master.name}</CardTitle>
                  <CardDescription className="text-base">
                    <Badge variant="secondary" className="mt-2">{master.specialization}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-3">
                    <Icon name="Award" className="inline mr-1" size={16} />
                    Опыт: {master.experience}
                  </p>
                  <p className="text-muted-foreground">{master.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="materials" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Каталог материалов</h2>
          <Tabs defaultValue="all" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="all">Все материалы</TabsTrigger>
              <TabsTrigger value="clay">Глина</TabsTrigger>
              <TabsTrigger value="tools">Инструменты</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="grid md:grid-cols-2 gap-4">
                {materials.map((item, idx) => (
                  <Card key={idx}>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <Badge variant={item.stock === "В наличии" ? "default" : "secondary"}>
                        {item.stock}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-primary">{item.price}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="clay">
              <div className="grid md:grid-cols-2 gap-4">
                {materials.filter(m => m.name.includes('Глина') || m.name.includes('Глазурь') || m.name.includes('Ангобы')).map((item, idx) => (
                  <Card key={idx}>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <Badge variant={item.stock === "В наличии" ? "default" : "secondary"}>
                        {item.stock}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-primary">{item.price}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="tools">
              <div className="grid md:grid-cols-2 gap-4">
                {materials.filter(m => m.name.includes('Набор') || m.name.includes('Проволока') || m.name.includes('Губки')).map((item, idx) => (
                  <Card key={idx}>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <Badge variant={item.stock === "В наличии" ? "default" : "secondary"}>
                        {item.stock}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-primary">{item.price}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="schedule" className="py-20 px-4 bg-accent/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Расписание занятий</h2>
          <div className="space-y-4">
            {schedule.map((item, idx) => (
              <Card key={idx} className="hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div>
                    <CardTitle className="text-xl">{item.day}</CardTitle>
                    <CardDescription className="text-base mt-1">{item.time}</CardDescription>
                  </div>
                  <Badge variant={item.spots > 3 ? "default" : "secondary"}>
                    {item.spots} {item.spots === 1 ? 'место' : 'места'}
                  </Badge>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <p className="font-medium">{item.class}</p>
                  <Button onClick={() => setBookingOpen(true)}>Записаться</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4 text-lg">
                    <p className="flex items-start gap-3">
                      <Icon name="MapPin" className="text-primary mt-1 flex-shrink-0" size={24} />
                      <span>г. Москва, ул. Гончарная, д. 15</span>
                    </p>
                    <p className="flex items-center gap-3">
                      <Icon name="Phone" className="text-primary flex-shrink-0" size={24} />
                      <a href="tel:+74951234567" className="hover:text-primary transition-colors">+7 (495) 123-45-67</a>
                    </p>
                    <p className="flex items-center gap-3">
                      <Icon name="Mail" className="text-primary flex-shrink-0" size={24} />
                      <a href="mailto:info@glinlab.ru" className="hover:text-primary transition-colors">info@glinlab.ru</a>
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-4">Часы работы</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex justify-between">
                      <span>Пн-Пт:</span>
                      <span>10:00 - 21:00</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Сб-Вс:</span>
                      <span>11:00 - 19:00</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="hover-scale">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="hover-scale">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="hover-scale">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
            <div className="h-[400px] md:h-full min-h-[300px] rounded-lg overflow-hidden shadow-lg animate-fade-in">
              <div ref={mapRef} className="w-full h-full"></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary/5 py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 ГлинLab. Все права защищены.</p>
        </div>
      </footer>

      <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">Запись на мастер-класс</DialogTitle>
            <DialogDescription>
              Заполните форму, и мы свяжемся с вами для подтверждения записи
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div>
              <Label htmlFor="name">Ваше имя</Label>
              <Input id="name" placeholder="Иван Иванов" />
            </div>
            <div>
              <Label htmlFor="phone">Телефон</Label>
              <Input id="phone" placeholder="+7 (___) ___-__-__" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="example@mail.ru" />
            </div>
            <div>
              <Label htmlFor="message">Комментарий</Label>
              <Textarea id="message" placeholder="Укажите желаемую дату и время занятия" />
            </div>
            <Button className="w-full" size="lg">Отправить заявку</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}