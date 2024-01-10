import React, { useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState } from 'react'
import * as Yup from "yup"
import axios from 'axios'

import FileBase64 from 'react-file-base64';

//CARD
import "./App.css"
import Switcher from './components/Switcher'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import Card3 from './components/Card3'
import Card4 from './components/Card4'
import Card5 from './components/Card5'
import Card6 from './components/Card6'
import Card7 from './components/Card7'

//
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

//mui   

//
//modal
import { Box, TextField, Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// table
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



//satyle 
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const api = "http://localhost:3000/data"

function App() {

  const initialValues = {
    username: "",
    password: "",
  }
  
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is reguired"),
    password: Yup.string().required("Password is reguired"),
  })
  
  const onSubmit = (values, { resetForm, setSubmitting }) => {
    try {
      const { initialValues } = axios.post()
    } catch (error) {
      console.log(error);
    }
    console.log(values);
    resetForm();
    setSubmitting(false)
  }


  const [base64F, setBase64F] = useState(null)
  const [base64F1, setBase64F1] = useState(null)

  const handleImg = (file) => {
    setBase64F(file.base64)
  }

  const handleImg1 = (file) => {
    setBase64F1(file.base64)
  }

  //modal 
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //modal  add
  const [openAdd, setOpenAdd] = useState(false);

  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };


  const [todo, setTodo] = useState([])
  const [addName, setAddName] = useState("")
  const [addCity, setAddCity] = useState("")
  const [addNumber, setAddNumber] = useState("")

  const [editName, setEditName] = useState("")
  const [editCity, setEditCity] = useState("")
  const [editNumber, setEditNumber] = useState("")
  const [idx, setIdx] = useState(null)


  // function get
  async function get() {
    try {
      let { data } = await axios.get(api)
      setTodo(data)
    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    get()
  }, [])


  // Delete user
  async function deleteUser(id) {
    try {
      let { data } = await axios.delete(`${api}/${id}`)
      get()
    } catch (error) {
      console.log(error);
    }
  }

  // Edit user
  async function editUser(id, user) {
    try {
      let { data } = await axios.put(`${api}/${id}`, user);
      get()
    } catch (error) {
      console.log(error);
    }
  }

  // Add user
  async function addUser(user) {
    try {
      let { data } = await axios.post(api, user)
      get()
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>

      <div className='w-[100%]'>

        {/* header */}
        <header className='nav dark:bg-none dark:bg-[#232323]'>
          <nav className='flex items-center justify-between lg:px-[80px] lg:py-[20px] sm:p-[24px]'>
            <div className='flex items-center gap-[10px]'>
              <img src="src/assets/header/logo-img.png" alt="" />
              <div className='text-[rgb(39,85,83)] dark:text-[#fff]'>
                <h1>DREAMKAM</h1>
                <p>TOUR</p>
              </div>
            </div>

            <div className='text-[rgb(39,85,83)] dark:text-[white] flex items-center gap-[56px]'>
              <div className='lg:flex sm:hidden items-center gap-[56px]'>
                <p>Расписание тура</p>
                <p>Как записаться</p>
                <p>Команда</p>
              </div>
              <div className='flex items-center gap-[20px]'>
                <button className='lg:block sm:hidden md:block rounded-[10px] p-[12px] border-[rgb(39,85,83)] border-[2px] dark:border-[#fff]'>Забронировать</button>
                <Switcher />
                <img src="src/assets/header/card1/menu (1).png" className="lg:hidden sm:block" />
              </div>
            </div>
          </nav>

          <section>
            <aside className='lg:px-[80px] lg:pt-[60px] flex flex-col items-start gap-[26px] sm:p-[24px]'>
              <h1 className='lg:text-[64px] lg:w-[700px] text-white font-[800] sm:text-[32px] md:text-[62px]'>Мечты о далекой Камчатке - близко</h1>
              <button className='btn lg:text-[40px] py-[5px] px-[24px] font-[700] sm:text-[22px] md:text-[32px] text-[white]'>23.06 - 04.07  DREAM TOUR</button>
              <p className='lg:w-[384px] text-[white] lg:text-[20px]'>Тур перевернет ваш мир с ног на голову и оставит впечатления на всю жизнь. </p>
              <div className='flex items-center gap-[18px]'>
                <p className='flex flex-col items-start text-[#FFF]'>Расписание тура</p>
                <div className='bg-[#fff0] border-[1px] border-[#fff] w-[64px]  h-[64px] rounded-[50%] flex justify-center items-center'>
                  <img src="src/assets/header/right-arrow 5.png" alt="" />
                </div>
              </div>
            </aside>

            <aside className='lg:py-[60px] sm:py-[40px]'>
              <Card1
                img1={"src/assets/header/card1/IMG_20201121_180903_719 1.png"}
                img={"src/assets/header/card1/image 107.png"}
                img2={"src/assets/header/card1/image 108.png"}
                img3={"src/assets/header/card1/image 100.png"}
                img4={"src/assets/header/card1/image 107.png"} />
            </aside>
          </section>


        </header>


        {/* main */}
        <main>

          {/* section1 */}
          <section >
            <aside className='flex flex-col gap-[30px] lg:pt-[120px] lg:px-[120px] sm:py-[40px] sm:px-[24px] dark:bg-[#232323] dark:text-white'>
              <h1 className='lg:text-[72px] font-[700] md:text-[42px] sm:text-[22px]'>Путешествие на край света начинается</h1>
              <h2 className='lg:w-[571px] lg:text-[24px] md:text-[22px] sm:text-[18px]'>Ваша мечта осуществилась, вы приняли решение, и вам предстоит путешествие на край света.</h2>
              <p className='lg:w-[613px] sm:text-[12px] md:text-[16px] lg:text-[16px]'>Этот маршрут лучший вариант для тех, кто хочет ощутить, как живёт самая молодая земля нашей планеты, многое увидеть, испытать на себе и полюбить, увезти целый рюкзак незабываемых чувств и впечатлений. Каждый день вы будете выезжать на радиальные маршруты, а проживать в комфортабельных двухместных номерах. </p>
            </aside>
          </section>

          {/* section 2 */}
          <section className='sec2 dark:bg-none dark:bg-[#232323]'>
            <div className='sec1'>
              <aside className='flex items-center lg:gap-[56px] lg:py-[80px] lg:px-[120px] sm:flex-wrap sm:gap-[20px] sm:px-[24px] sm:py-[40px] dark:bg-[#232323] dark:text-white md:gap-[40px]'>
                <Card2 img={"src/assets/main/card2/level 1.png"} h1={"Сложность"} p={"Для семейного отдыха"} />
                <Card2 img={"src/assets/main/card2/calendar 1.png"} h1={"Период"} p={"Июль - сентябрь"} />
                <Card2 img={"src/assets/main/card2/wall-clock 1.png"} h1={"Длительность"} p={"7 дней / 6 ночей"} />
                <Card2 img={"src/assets/main/card2/hotels 1.png"} h1={"Проживание"} p={"Отель, без палаток"} />
              </aside>

              <div className='bl '>
                <div className='v lg:ml-[280px] dark:bg-none dark:bg-[#232323] dark:text-white'>
                  <div className='flex justify-end'>
                    <img src="src/assets/main/pngwing 2.png" alt="" />
                  </div>
                </div>
                <aside className='lg:px-[120px] dark:bg-none dark:bg-[#232323] sm:p-[24px] text-white flex flex-col items-start gap-[30px]'>
                  <h1 className='lg:w-[600px] text-[24px] font-[600]'>Камчатка – земля великолепной заснеженной природы, действующих вулканов и диких мест, где ещё не ступала нога человека. </h1>
                  <div className='flex flex-col items-start gap-[10px] '>
                    <p className='lg:w-[299px] text-[rgb(155,155,155)]'>“Когда мы подлетали к Камчатке, у меня захватило дух от увиденного. Это за гранью реальности. Невероятно!”</p>
                    <span>Максим, @max_max</span>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          {/* section 3 */}
          <section className='fj dark:bg-[#232323] dark:bg-none'>
            <div className='jf dark:bg-[#232323] dark:bg-none'>
              <div className='lg:py-[60px]'>
                {/* left */}
                <aside className='flex flex-col gap-[40px] lg:p-[120px] sm:p-[24px]'>
                  <h1 className='text-white sm:text-[32px] lg:text-[40px] lg:w-[458px]'><span className='text-[#F47648] font-[700]'>День 1.</span> Прибытие. Встреча в аэропорту и размещение</h1>
                  <div className='text-[rgb(155,155,155)] lg:w-[461px] text-[15px] flex flex-col gap-[20px]'>
                    <p>С высоты птичьего полета вы увидите знаменитые «домашние»  вулканы – Корякский, Авачинский и Козельский. У выхода в аэропорту <span className='text-[#fff]'>вас встретят с табличкой «ДРИМ ТУР». </span></p>
                    <p><span className='text-[#fff]'>По пути в гостиницу сбор средств</span> с членов группы, инструктаж по программе этого дня (бассейн с термальной водой, шашлык, знакомство с группой, алкоголь, фейерверк не раньше 20:00). </p>
                    <p>После выезд (вид транспорта зависит от величины группы) на базу отдыха в курортный поселок Паратунка. </p>
                    <p><span className='text-[#fff]'>Вечером</span>,после прибытия на Камчатку всех участников (если рейсы разные),<span className='text-[#fff]'>общая встреча</span>, проверка снаряжения,  обсуждение программы завтрашнего дня.</p>
                  </div>
                </aside>

                {/* right */}
                <aside className='lg:pl-[120px] lg:mt-[-80px] lg:ml-[300px] pb-[40px]'>
                  <div>
                    <Card3 h1={"Паратунка"} p={"Какой-то вспомогательный текст, в котором кратко описывается что на картинке."} />
                  </div>
                </aside>
              </div>
            </div>
          </section>

          {/* section 4 */}
          <section className='j2 dark:bg-none dark:bg-[#232323] dark:text-[white]'>
            <div className='lg:py-[120px] lg:px-[80px] flex flex-col gap-[40px] sm:p-[24px]'>
              <h1 className='lg:text-[46px] sm:text-[22px] md:text-[32px] lg:w-[856px]'><span className='text-[#F47648] font-[700]'>День 2.</span> Вилючинский водопад, вулкан и Верхне-Паратунские термальные источники</h1>
              <div className='lg:w-[548px] flex flex-col gap-[20px]'>
                <p>Инструктаж перед поездкой (передвижение и поведение группы в лесу, общение с медведями, форма одежды, ), снаряжение, (взять тару для воды при заезде на Зайкин ключ, купальные принадлежности).</p>
                <p> Сбор участников на Роуп Джамп для прыжков с высоты над водопадом. Заранее решаем кто прыгает.</p>
              </div>
            </div>

            <div className='lg:pr-[440px] lg:py-[80px]'>
              <Card4 h1={"Памятник “Здесь начинается Россия”"} p={"Гости Камчатки по традиции делают фото в начале и в конце путешествий."} />
            </div>
          </section>

          {/* section 5 */}
          <section className='bg-[#F1F1F1] dark:bg-[#232323] lg:py-[80px] lg:px-[120px] sm:p-[50px]'>
            <h1 className='lg:text-[36px] font-[700] sm:text-[22px]'>На протяжении маршрута вас ожидает:</h1>
            <div className='flex justify-between items-center lg:pt-[50px] sm:flex-wrap sm:gap-[40px] sm:pt-[20px]'>
              <Card5 img={"src/assets/main/card5/image 86.png"} h1={"Аудиосопровождение"} p={"Новый способ увидеть и услышать, то место, где вы находитесь. С помощью аудиогида вы сможете совершить увлекательную экскурсию по городу."} />
              <Card5 img={"src/assets/main/card5/image 104.png"} h1={"Разнообразное питание"} p={"Новый способ увидеть и услышать, то место, где вы находитесь. С помощью аудиогида вы сможете совершить увлекательную экскурсию по городу."} />
              <Card5 img={"src/assets/main/card5/image 105.png"} h1={"Безопасность на маршруте"} p={"Новый способ увидеть и услышать, то место, где вы находитесь. С помощью аудиогида вы сможете совершить увлекательную экскурсию по городу."} />
              <Card5 img={"src/assets/main/card5/eDjmwwUcP0U 1.png"} h1={"Потрясающие фото"} p={"Новый способ увидеть и услышать, то место, где вы находитесь. С помощью аудиогида вы сможете совершить увлекательную экскурсию по городу."} />
            </div>
          </section>

          {/* section 6 */}
          <section className='lg:py-[40px] sm:py-[40px] dark:bg-[#232323]'>
            <div className='flex justify-end'>
              <div className='lg:py-[40px] lg:px-[80px] flex flex-col gap-[40px] sm:p-[24px]'>
                <h1 className='lg:text-[46px] sm:text-[32px] md:text-[32px] lg:w-[506px]'><span className='text-[#F47648] font-[700]'>День 3. </span>Горные цирки и водопады вулкана Вачкажец</h1>
                <div className='lg:w-[548px] flex flex-col gap-[20px]'>
                  <p>Инструктаж перед поездкой (передвижение и поведение группы в лесу, общение с медведями, форма одежды, ), снаряжение, (взять тару для воды при заезде на Зайкин ключ, купальные принадлежности).</p>
                  <p> Сбор участников на Роуп Джамп для прыжков с высоты над водопадом. Заранее решаем кто прыгает.</p>
                </div>
              </div>
            </div>
          </section>

          {/* section 7*/}
          <section className='jl dark:bg-none dark:bg-[#232323] dark:text-white'>
            <div className='lg:pr-[440px] lg:py-[93px]'>
              <Card3 h1={"Памятник “Здесь начинается Россия”"} p={"Гости Камчатки по традиции делают фото в начале и в конце путешествий."} />
            </div>
          </section>

          {/* section 8*/}
          <section className='bg-[#000] lg:py-[80px] text-white dark:bg-none dark:bg-[#232323] dark:text-white'>
            <div className='flex justify-between items-center lg:px-[80px]'>
              <div className='lg:py-[40px] flex flex-col gap-[40px] sm:p-[24px]'>
                <h1 className='lg:text-[46px] sm:text-[32px] md:text-[32px] lg:w-[506px]'><span className='text-[#F47648] font-[700]'>День 4. </span>Экскурсия к подножию Авачинского вулкана</h1>
                <div className='lg:w-[548px] flex flex-col gap-[20px] text-[#ACACAC]'>
                  <p>Инструктаж по поведению группы в горах. Проверка снаряжения.Выезд на автомашине на вулканическое плато (высота 900 м) к подножию Авачинского вулкана (2 часа).</p>
                  <p>Пешеходная экскурсия к горе Верблюд, представляющую собой вулканическую экструзию. Находится в седловине между Корякским и Авачинским вулканами, относительная высота 100-150 м, ширина - около 100 м и по длине она протягивается на 500 м., состоит из трех сросшихся блоков.</p>
                  <p>Обед.  Поездка в Паратунку с купанием. </p>
                  <p>Продолжительность – 8 часов. Трансфер в гостиницу.</p>
                </div>
              </div>
              <div>
                <img src="src/assets/main/pngegg 1.png" alt="" />
              </div>
            </div>
            <div className='lg:pl-[440px] lg:py-[80px]'>
              <Card4 h1={"Памятник “Здесь начинается Россия”"} p={"Гости Камчатки по традиции делают фото в начале и в конце путешествий."} />
            </div>
          </section>

          {/* section 9 */}
          <section className='sec8 lg:py-[40px] text-white dark:bg-none dark:bg-[#232323] dark:text-white'>
            <div className='flex justify-end'>
              <div className='lg:py-[40px] lg:px-[80px] flex flex-col gap-[40px] sm:p-[24px]'>
                <h1 className='lg:text-[46px] sm:text-[32px] md:text-[32px] lg:w-[506px]'><span className='text-[#F47648] font-[700]'>День 5. </span>Морская прогулка к острову Старичков</h1>
                <div className='lg:w-[548px] flex flex-col gap-[20px]'>
                  <p>Инструктаж по поведению группы при передвижении на плавсредствах, приему таблеток от морской болезни.</p>
                  <p>Выезд на причал.  Морская прогулка по Авачинской бухте. Осмотр панорамы города Петропавловска-Камчатского, Авачинской губы и Авачинского залива. Маршрут пролегает мимо бухты Тихая, острова Бабушкин камень, мыса Станицкого, камней «Три брата». Увлекательная возможность донной рыбалки на терпуга, ленка, камбалу у «Трех братьев», мыса Безымянный, у острова Старичков.</p>
                  <p>Осмотр птичьих базаров - смешанных колонии кайр, моевок и бакланов. Трансфер в гостиницу.</p>
                  <p>Продолжительность 6 часов.</p>
                </div>
              </div>
            </div>
            <div className='lg:pr-[420px]'>
              <Card6 h1={"Памятник “Здесь начинается Россия”"} p={"Гости Камчатки по традиции делают фото в начале и в конце путешествий."} />
            </div>

            <div className='lg:pt-[200px] lg:px-[80px] flex flex-col gap-[40px] sm:p-[24px]'>
              <h1 className='lg:text-[46px] sm:text-[32px] md:text-[32px] lg:w-[506px]'><span className='text-[#F47648] font-[700]'>День 6. </span>Берег Тихого океана, экскурсия по городу</h1>
              <div className='lg:w-[548px] flex flex-col gap-[20px]'>
                <p>Поездка на берег Тихого океана, в район Халактырского пляжа. Прогулка. Обед в городе. Обзорная экскурсия по г. Петропавловску-Камчатскому с посещением смотровых площадок. Рыбный рынок. </p>
                <p>Продолжительность -5 часов.  Трансфер в гостиницу.</p>
              </div>

              <div className='flex flex-col gap-[40px]'>
                <h1>Дополнительные услуги</h1>
                <div className='lg:w-[481px] md:w-[481px] flex flex-col gap-[20px]'>
                  <div className='flex items-center justify-between'>
                    <h1>Серфинг</h1>
                    <p className='w-[228px] text-[14px] text-[#BABABA]'>Прыжки с высоты над водопадом. Записываться заранее. </p>
                  </div>
                  <hr />
                </div>
                <div className='lg:w-[481px] md:w-[481px] flex flex-col gap-[20px]'>
                  <div className='flex items-center justify-between'>
                    <h1>SUP борды</h1>
                    <p className='w-[228px] text-[14px] text-[#BABABA]'>Прыжки с высоты над водопадом. Записываться заранее. </p>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
            <div className='lg:pl-[420px] lg:pb-[80px]'>
              <Card6 h1={"Памятник “Здесь начинается Россия”"} p={"Гости Камчатки по традиции делают фото в начале и в конце путешествий."} />
            </div>
          </section>

          {/* section 10 */}
          <section className='dark:bg-none dark:bg-[#232323] dark:text-white'>
            <aside className='flex justify-between items-center lg:py-[80px] sm:flex-wrap'>
              <div className='lg:px-[80px] flex flex-col gap-[40px] sm:p-[24px]'>
                <h1 className='lg:text-[46px] sm:text-[32px] md:text-[32px] lg:w-[600px]'><span className='text-[#F47648] font-[700]'>День 7. </span>Вертолетная экскурсия в Долину Гейзеров и кальдеру вулкана Узон / свободный день</h1>
                <div className='lg:w-[548px] flex flex-col gap-[20px]'>
                  <p>Экскурсия проводится в содружестве с «ВИТЯЗЬ-ТРЕВЕЛ», крупнейшим оператором вертолётных туров на Камчатке. Выезд в аэропорт «Витязь –Аэро». К вашим услугам –современный аэропортовый комплекс, включающий в себя удобный зал ожидания, кафетерий, сувенирный магазин.</p>
                  <p>Перелёт до Долины гейзеров занимает 1 час 10 минут. По пути, при благоприятных условиях, вы осмотрите два действующих вулкана – Карымский и Малый Семячик из окон вертолёта. </p>
                  <p>Перелёт и посадка в кальдере Узон. Кальдера образовалась в результате обрушения стенок древнего вулкана около 40 тысяч лет назад, на её дне очень ярко проявляется гидротермальная деятельность.Сотни столбов пара вырываются здесь из жёлтых фумарольных полей. Осмотр термальных полей.</p>
                  <p>Перелёт и посадка в Налычевской долине. Купание в горячих источниках. Здесь же вам предложат обед - горячее, чай и камчатский морс. Трансфер в гостиницу. </p>
                </div>
                <div className='flex flex-col gap-[40px]'>
                  <h1 className='font-[800] text-[20px]'>Дополнительные услуги</h1>
                  <div className='lg:w-[481px] md:w-[481px] flex flex-col gap-[20px]'>
                    <div className='flex items-center justify-between'>
                      <h1 className='font-[800]'>Серфинг</h1>
                      <p className='w-[228px] text-[14px] text-[#BABABA]'>Прыжки с высоты над водопадом. Записываться заранее. </p>
                    </div>
                    <hr />
                  </div>
                  <div className='lg:w-[481px] md:w-[481px] flex flex-col gap-[20px]'>
                    <div className='flex items-center justify-between'>
                      <h1 className='font-[800]'>SUP борды</h1>
                      <p className='w-[228px] text-[14px] text-[#BABABA]'>Прыжки с высоты над водопадом. Записываться заранее. </p>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
              <img src="src/assets/Снимок экрана 2024-01-10 122014.png" />
            </aside>

            <div className='lg:pl-[420px]'>
              <Card7 h1={"Памятник “Здесь начинается Россия”"} p={"Гости Камчатки по традиции делают фото в начале и в конце путешествий."} />
            </div>
          </section>

          {/* section 11 */}
          <section className='violet lg:py-[240px] dark:bg-none dark:bg-[#232323] dark:text-white'>
            <div className='lg:pt-[100px] lg:px-[80px] flex items-center flex-col gap-[40px] sm:p-[24px] text-[white]'>
              <h1 className='lg:text-[46px] sm:text-[32px] md:text-[32px] lg:w-[506px]'><span className='text-[#F47648] font-[700]'>День 8. </span>Отъезд с Камчатки. Трансфер в аэропорт</h1>
              <div className='lg:w-[548px] flex flex-col gap-[20px]'>
                <p>Заезд на рынок, прощальное посещение «медведей», фото на память. Возвращайтесь следующим летом!</p>
              </div>
            </div>
          </section>

          {/* section 12 */}
          <section className='lg:py-[80px] dark:bg-[] dark:text-white lg:px-[100px] sm:p-[24px]  dark:bg-none dark:bg-[#232323] '>
            <h1 className='lg:text-[64px] font-[700] sm:text-[32px]'>Стоимость участия</h1>
            <main className='lg:py-[60px] flex justify-between items-center sm:flex-wrap sm:pt-[40px] sm:gap-[40px]'>
              <div className='flex flex-col gap-[40px]'>
                <div className='lg:w-[800px] flex flex-col gap-[40px]'>
                  <div className='lg:text-[24px] flex justify-between items-center'>
                    <h1>Базовый (для камчадал)</h1>
                    <h1 className='font-[700]'>79 000 руб</h1>
                  </div>
                  <hr />
                </div>
                <div className='lg:w-[801px]  flex flex-col gap-[40px]'>
                  <div className='lg:text-[24px] flex justify-between items-center'>
                    <h1>Базовый + проживание</h1>
                    <h1 className='font-[700]'>99 000 руб</h1>
                  </div>
                  <hr />
                </div>
                <div className='lg:w-[801px]  flex flex-col gap-[40px]'>
                  <div className='lg:text-[24px] flex justify-between items-center'>
                    <h1>Базовый + проживание + долина гейзеров</h1>
                    <h1 className='font-[700]'>179 000 руб</h1>
                  </div>
                  <hr />
                </div>
              </div>

              <aside className='flex flex-col gap-[20px]'>
                <p className='flex flex-col  gap-[5px] text-[#F47648] font-[700]'>Информация о бронях <hr className='border-[#F47648]' /></p>
                <p className='flex flex-col  gap-[5px] text-[#F47648] font-[700]'>Важная информация <hr className='border-[#F47648]' /></p>
                <p className='flex flex-col gap-[5px] text-[#F47648] font-[700]'>Условия договора и возврата<hr className='border-[#F47648]' /></p>
              </aside>
            </main>

            <div className='flex items-start lg:gap-[80px] sm:flex-wrap sm:gap-[40px] sm:pt-[40px] lg:pt-[0]'>
              <aside className='flex flex-col items-start gap-[16px]'>
                <h1 className='text-[#275553] font-[700] flex items-center gap-[10px] lg:text-[24px]'><img src="src/assets/check-mark 1.png" alt="" />В стоимость входит</h1>
                <p>• встреча и проводы в аэропорту   </p>
                <p>• питание: обеды во время экскурсий</p>
                <p>• услуги гида </p>
                <p>• все транспортные услуги ( автобусы, <br></br>джипы-вездеходы 4WD)</p>
                <p>• все указанные в программе экскурсии</p>
              </aside>

              <aside className='flex flex-col items-start gap-[16px]'>
                <h1 className='font-[700] flex items-center gap-[10px] lg:text-[24px]'><img src="src/assets/check-mark 2.png" alt="" />За дополнительную плату</h1>
                <p>• вертолётная экскурсия в Долину Гейзеров и <br />кальдеру Узона, оплачивается в день вылета  </p>
                <p>• дополнительные экскурсии и опции</p>
                <p>• размещение в гостинице</p>
                <p>• питание(кроме обедов во время экскурсий)</p>
                <p>• личные расходы</p>
              </aside>
            </div>
            <hr className='border-[2px] border-[black] lg:mt-[80px]' />
          </section>

          {/* section 13 */}
          <section className='lg:px-[80px] sm:p-[24px]  dark:bg-none dark:bg-[#232323] dark:text-white'>
            <main className='flex justify-between items-start sm:flex-wrap sm:gap-[20px] '>
              <aside className='flex flex-col gap-[20px]'>
                <h1 className='font-[700] text-[36px]'>Онлайн-заявка</h1>
                <div className='flex items-center gap-[15px]'>
                  <img src="src/assets/vk 1.png" alt="" />
                  <img src="src/assets/instagram (5) 1.png" alt="" />
                  <img src="src/assets/facebook 1.png" alt="" />
                </div>
              </aside>
              <aside className='flex flex-col gap-[40px]'>
                <div className='flex gap-[40px] sm:flex-wrap'>
                  <div className='flex flex-col gap-[10px]'>
                    <p>Имя участника</p>
                    <input type="text" placeholder='Name' className='border-b-[2px] p-[5px] placeholder:font-[700]' />
                  </div>
                  <div className='flex flex-col gap-[10px]'>
                    <p>Количество человек</p>
                    <input type="text" placeholder='1                                   -  +' className='border-b-[2px] p-[5px] placeholder:font-[700]' />
                  </div>
                </div>

                <div className='flex flex-col gap-[20px]'>
                  <h1>Тариф</h1>
                  <div className='flex justify-between items-center'>
                    <h1 className='flex items-center gap-[8px]'><img src="src/assets/Ellipse 26.png" alt="" />Базовый (для камчадал)</h1>
                    <h2 className='font-[700]'>79 000руб</h2>
                  </div>
                  <div className='flex justify-between items-center'>
                    <h1 className='flex items-center gap-[8px]'><img src="src/assets/Group 221.png" alt="" />Базовый + проживание</h1>
                    <h2 className='font-[700]'>99 000руб</h2>
                  </div>
                  <div className='flex justify-between items-center'>
                    <h1 className='flex items-center gap-[8px]'><img src="src/assets/Ellipse 26.png" alt="" />Базовый + проживание + долина гейзеров</h1>
                    <h2 className='font-[700]'>179 000 руб</h2>
                  </div>
                </div>
              </aside>
            </main>

          </section>

          {/* section 14 */}
          <section className='end lg:py-[80px] lg:px-[80px] sm:p-[24px] dark:bg-none dark:bg-[#232323] dark:text-white'>
            <div className='flex lg:justify-end lg:px-[180px] sm:justify-start'>
              <div className='flex flex-col gap-[40px]'>
                <div className='flex-col gap-[20px] flex'>
                  <h1>Даты тура</h1>
                  <div className='lg:w-[260px] flex flex-col gap-[10px]'>
                    <p className='flex items-center justify-between'>23.06 - 04.07 <img src="src/assets/Frame (33).png" alt="" /></p>
                    <hr />
                  </div>
                </div>

                <div className='flex-col gap-[5px] flex'>
                  <h1>Комментарий</h1>
                  <input type="text" placeholder='Напишите ваш комментарий здесь' className='border-b-[1px] p-[8px] bg-[#ff000000]' />
                </div>
                <div className='flex justify-end'>
                  <button className='rounded-[8px] p-[12px] text-[white] bg-[#F47648] lg:block sm:hidden'>Отправить заявку</button>
                </div>
              </div>
            </div>


            <main className='flex items-center lg:gap-[120px] lg:py-[60px] lg:pt-[160px] sm:flex-wrap sm:gap-[40px]'>
              <aside>
                <img src="src/assets/magazine-kamchatka 1.png" alt="" />
              </aside>
              <aside className='text-white flex flex-col gap-[20px]'>
                <div>
                  <h1 className='font-[700] lg:text-[36px] sm:text-[22px]'>Что нужно знать отправляясь на Камчатку?</h1>
                  <p>Получите памятку туриста просто оставив свой e-mail.</p>
                </div>
                <div className='flex items-center gap-[15px]'>
                  <input type="text" placeholder='Ваш e-mail' className='border-b-[1px] lg:w-[500px] p-[8px] bg-[#ff000000]' />
                  <button className='rounded-[8px] p-[12px] text-[white] bg-[#F47648]'>Получить</button>
                </div>
              </aside>
            </main>
          </section>


          {/* section 15 TODOLIST*/}
          <section className='lg:py-[80px] lg:px-[80px] dark:bg-[#232323] sm:p-[24px]'>
          <TableContainer
            sx={{
              width: "95%",
              margin: "0 auto",
              paddingBottom: "50px",
              paddingTop: "10px",
            }}
          >
            <button
              className="bg-[black] py-[5px] px-[15px] rounded-[5px] text-white mb-[20px]"
              onClick={() => {
                handleClickOpenAdd();
              }}
            >
             ADD
            </button>
            <Table sx={{ minWidth: 400 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="right" sx={{ textAlign: "start" }}>Img</StyledTableCell>
                  <StyledTableCell align="right" sx={{ textAlign: "center" }}>Name</StyledTableCell>
                  <StyledTableCell align="right" sx={{ textAlign: "center" }}>City</StyledTableCell>
                  <StyledTableCell align="right" sx={{ textAlign: "center" }}>Phone</StyledTableCell>
                  <StyledTableCell align="right" sx={{ textAlign: "center" }}>Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {todo.map((e) => (
                  <StyledTableRow>
                    <StyledTableCell align="right" sx={{ textAlign: "center" }}>
                      {<img src={e.file} className="rounded-[50%] h-[100px] w-[100px]" />}
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      sx={{ textAlign: "center" }}
                    >
                      {e.name}
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      sx={{ textAlign: "center" }}
                    >
                      {e.city}
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      sx={{ textAlign: "center" }}
                    >
                      {e.number}
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      sx={{ textAlign: "center" }}
                    >
                      <Box className="flex justify-center items-center gap-[20px]">
                        <button
                          className="bg-[#bf8080] px-[25px] text-[white] p-[8px] rounded-[10px]"
                          onClick={() => deleteUser(e.id)}
                        >
                          Delete
                        </button>
                        <button
                          className="bg-[#6a6a9e] px-[20px] text-[white] p-[8px] rounded-[10px]"
                          onClick={() => {
                            handleClickOpen();
                            setIdx(e.id);
                            setEditName(e.name);
                            setBase64F(e.file);
                            setEditCity(e.city);
                            setEditNumber(e.number);
                          }}
                        >
                          Edit
                        </button>
                      </Box>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </section>

        </main>

        {/* footer */}
        <footer className='bg-[#232323] lg:py-[60px] lg:px-[80px] sm:p-[24px]'>
          <main className='flex justify-between items-start sm:flex-wrap sm:gap-[40px]'>
            <aside className='flex flex-col gap-[50px]'>
              <div className='flex items-center gap-[10px]'>
                <img src="src/assets/logo-img (1).png" alt="" />
                <div className='text-[#fff]'>
                  <h1>DREAMKAM</h1>
                  <p>TOUR</p>
                </div>
              </div>
              <ul className='text-white flex flex-col gap-[16px]'>
                <li>Расписание тура</li>
                <li>Стоимость</li>
                <li>Как записаться</li>
                <li>Команда</li>
              </ul>
            </aside>
            <img src="src/assets/Line 25.png" className="lg:block sm:hidden" />

            <aside className='flex flex-col gap-[20px]'>
              <div className='text-white flex justify-between items-center'>
                <p>@dreamkamtour</p>
                <button className='border-[#fff] border-[1px] text-white rounded-[10px] p-[8px]'>Подписаться</button>
              </div>
              <div className='flex flex-wrap gap-[8px]'>
                <img src="src/assets/footer/image 90.png" alt="" />
                <img src="src/assets/footer/image 91.png" alt="" />
                <img src="src/assets/footer/image 92.png" alt="" />
              </div>
              <div className='flex flex-wrap gap-[8px]'>
                <img src="src/assets/footer/GH011048_Moment 1 1.png" alt="" />
                <img src="src/assets/footer/image 95.png" alt="" />
                <img src="src/assets/footer/image 90.png" alt="" />
              </div>
            </aside>

            <img src="src/assets/Line 25.png" className="lg:block sm:hidden" />

            <aside className='flex flex-col gap-[46px]'>
              <div className='flex items-center gap-[10px] text-[white]'>
                <img src="src/assets/footer/Group 182.png" alt="" />
                <div>
                  <p>Смотрите видео отзывы наших клиентов</p>
                  <p>Перейти в Instagram</p>
                </div>
              </div>
              <div className='text-[white]'>
                <p>Социальные сети</p>
                <div className='flex items-center gap-[15px]'>
                  <img src="src/assets/footer/instagram (5) 2.png" alt="" />
                  <img src="src/assets/footer/vk 2.png" alt="" />
                  <img src="src/assets/footer/facebook 3.png" alt="" />
                </div>
              </div>
            </aside>

            <img src="src/assets/Line 25.png" className="lg:block sm:hidden" />

            <aside className='text-white flex flex-col gap-[40px]'>
              <div>
                <h1 className='font-[700]'>+ 7 (760) 354-23-23</h1>
                <p className='text-[#BABABA]'>Работаем с 9:00 до 18:00</p>
              </div>
              <div>
                <p className='flex items-center gap-[8px]'><img src="src/assets/footer/email 1.png" alt="" />info@dreamkamtour.ru</p>
                <p className='flex items-center gap-[8px]'><img src="src/assets/footer/placeholder 1.png" alt="" />ул. Рубиннштерна, 41</p>
              </div>
            </aside>
          </main>

          <hr className='lg:mt-[80px] sm:mt-[40px]' />
          <p className='text-white mt-[30px]'>2021 © Dreamkam Tour</p>
        </footer>


      </div>

       {/* //modal Edit*/}
       <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Edit User"}</DialogTitle>
          <DialogContent>
            <DialogContentText
              sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
              id="alert-dialog-description"
            >
              <TextField
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              ></TextField>
              <TextField
                value={editNumber}
                onChange={(e) => setEditNumber(e.target.value)}
              ></TextField>
              <TextField
                value={editCity}
                onChange={(e) => setEditCity(e.target.value)}
              ></TextField>
              <FileBase64 multiple={false} onDone={handleImg} />
              <img src={base64F} className="rounded-[50%] w-[50px] h-[50px]" />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Concel</Button>
            <Button
              onClick={() => {
                let obj = {
                  name: editName,
                  number: editNumber,
                  city: editCity,
                  file: base64F,
                };
                console.log(editNumber);
                editUser(idx, obj);
                handleClose();
              }}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>

      {/* modal add */}
      <React.Fragment>
        <Dialog
          open={openAdd}
          onClose={handleCloseAdd}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Add User"}</DialogTitle>
          <DialogContent>
            <DialogContentText
              sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
              id="alert-dialog-description"
            >
              <TextField
                value={addName}
                onChange={(e) => setAddName(e.target.value)}
              ></TextField>
              <TextField
                value={addNumber}
                onChange={(e) => setAddNumber(e.target.value)}
              ></TextField>
              <TextField
                value={addCity}
                onChange={(e) => setAddCity(e.target.value)}
              ></TextField>
              <FileBase64 multiple={false} onDone={handleImg1} />
              <img src={base64F1} className="rounded-[50%] w-[50px] h-[50px]" />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseAdd}>Concel</Button>
            <Button
              onClick={() => {
                let user = {
                  name: addName,
                  city: addCity,
                  number: addNumber,
                  file: base64F1,
                };
                setAddName("");
                setAddCity("");
                setAddNumber("");
                addUser(user);
                handleCloseAdd();
              }}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </>
  )
}

export default App




