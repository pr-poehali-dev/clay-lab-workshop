import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

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

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">ГлинLab</h1>
          <div className="flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
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

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <div className="flex justify-center mb-12">
            <img 
              src="https://cdn.poehali.dev/projects/276a28b1-a7c6-43d5-8167-72006a1cbf30/files/bfebf273-2a72-438c-9d72-b2ccc906e849.jpg" 
              alt="Pottery process" 
              className="w-48 h-48 object-cover rounded-full shadow-lg"
            />
          </div>
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
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-8">Контакты</h2>
          <div className="space-y-4 text-lg">
            <p className="flex items-center justify-center gap-2">
              <Icon name="MapPin" className="text-primary" size={24} />
              г. Москва, ул. Гончарная, д. 15
            </p>
            <p className="flex items-center justify-center gap-2">
              <Icon name="Phone" className="text-primary" size={24} />
              +7 (495) 123-45-67
            </p>
            <p className="flex items-center justify-center gap-2">
              <Icon name="Mail" className="text-primary" size={24} />
              info@glinlab.ru
            </p>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" size="icon">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="outline" size="icon">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="outline" size="icon">
              <Icon name="MessageCircle" size={20} />
            </Button>
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