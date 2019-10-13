import React, {Component} from 'react';
import AOS from 'aos'
import Background from "../logo/back.jpg"
import Phone from "../logo/phone.svg"
import Form from "../logo/form.png"
import {Animated} from "react-animated-css";
import Slider from "react-slick";
import CountUp, {startAnimation} from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import img01  from "../logo/img01.jpg"
import img02  from "../logo/img02.jpg"
import img03  from "../logo/img03.jpg"
import logo  from "../logo/logo.svg"
import slider1 from '../logo/sliders/slider1.jpeg'
import slider2 from '../logo/sliders/slider2.jpeg'
import slider3 from '../logo/sliders/slider3.jpeg'
import slider4 from '../logo/sliders/slider4.jpeg'
import slider5 from '../logo/sliders/slider5.jpeg'
import slider6 from '../logo/sliders/slider6.jpeg'
import slider7 from '../logo/sliders/slider7.jpeg'
import slider8 from '../logo/sliders/slider8.jpeg'
import sec_back from '../logo/sec_back.jpg'
import upakovka from '../logo/sliders/upakovka.png'
import slider9 from '../logo/sliders/slider9.jpg'
import stanok from '../logo/sliders/stanok.png'
import building from '../logo/sliders/assort.png'
import img0 from '../logo/sliders/img_s0.jpg'
import img1 from '../logo/sliders/img_s1.jpg'
import img2 from '../logo/sliders/img_s2.jpg'
import img3 from '../logo/sliders/img_s3.jpg'
import s1 from '../logo/sliders/s1.jpeg'
import s2 from '../logo/sliders/s2.jpeg'
import s3 from '../logo/sliders/s3.jpeg'
import s4 from '../logo/sliders/s4.jpeg'



export default class Home extends Component {
  state={
    start : false,
    buildingvisible: false,
    history: false,
    ads : false,
    title :false,
    title2 : false,
    instructure: false,
    width: '',
    heigth:''
  }
  onVisibilitytitle2 =(isVisible)=> {
      if (isVisible) {
          this.setState({title2: true})

    }
  }
  onVisibilityinstructure =(isVisible)=> {
      if (isVisible) {
          this.setState({instructure: true})

    }
  }
  onVisibilityhistory =(isVisible)=> {
      if (isVisible) {
          this.setState({history: true})
    }
  }
  onVisibilitytitle =(isVisible)=> {
      if (isVisible) {
          this.setState({title: true})
    }
  }

  onVisibilitybuilding =(isVisible)=> {
      if (isVisible) {
          this.setState({buildingvisible: true})
    }
  }

  onVisibilityChange =(isVisible)=> {
      if (isVisible) {
          this.setState({start: true})
    }
  }
  onVisibilityads =(isVisible)=> {
      if (isVisible) {
          this.setState({ads: true})
    }
  }

  updatewindowsdimensions=()=>{
    this.setState({width: window.innerWidth, height: window.innerHeight})

  }



componentDidMount(){
  this.updatewindowsdimensions();
  window.addEventListener('resize', this.updatewindowsdimensions)

    AOS.init({
      duration : 2000
    })

  }


  render () {
    const settings = this.state.width > 660 ? {
                              dots: true,
                              fade: true,
                              infinite: true,
                              speed: 200,
                              slidesToShow: 1,
                              slidesToScroll: 1,
                              arrows: false,
                              autoplay: true,
                            } :
                            {
                              dots: false,
                              fade: true,
                              infinite: true,
                              speed: 200,
                              slidesToShow: 1,
                              slidesToScroll: 1,
                              arrows: false,
                              autoplay: true,
                            }

    const second_setting = {
                            dots: true,
                            fade: true,
                            infinite: true,
                            speed: 1000,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: true,
                            arrows: false  }

    const third_settings = this.state.width > 660 ? {
                            className: "center",
                            centerMode: true,
                            arrows: false,
                            infinite: true,
                            dots: true,
                            autoplay: true,
                            slidesToShow: 3,
                            speed: 500 } :
                            {
                            className: "center",
                            centerMode: true,
                            arrows: false,
                            infinite: true,
                            dots: true,
                            autoplay: true,
                            slidesToShow: 3,
                            speed: 500 }

    const bar =
                      <div className='home'>
                        <div className='home-bar-cont'>
                          <div className='bar'>
                              <div className='bar-cont'>
                                  <div className='bar-cont-logo'>
                                      <img src={logo} />
                                  </div>
                                </div>

                         <div className='bar-details'>
                              <ul>
                              <div className='bar-details-first-child'>
                                  <li> Infrastructure </li>
                                  <li> company </li>
                              </div>
                              <div className='bar-details-second-container'>
                                <div style=
                                    {{
                                     marginRight:"35px",
                                     fontSize: "1.1vw",
                                     fontWeight: 'bold',
                                   }}>
                                    <li> +7 (977) 825 7666 </li>
                                    <li> +7 (977) 825 7666 </li>
                                </div>
                              <div style={{
                                    fontSize: "1.1vw",
                                    fontWeight: 'bold',
                                  }}>
                                  <li> +7 (977) 825 7626 </li>
                                  <li> minasamy823@gmail.com </li>
                              </div>
                              <li>  <button> закать звонок </button> </li>

                              </div>
                            </ul>
                         </div>
                      </div>
                       <div   className='bar-menu_container'>
                          <ul>
                              <li > компании</li>
                              <li > Продукция</li>
                              <li > Прайс</li>
                              <li  className="dropdown">
                                  <span>Блог</span>
                                  <div className="down">
                                    <ul>
                                        <li>1</li>
                                        <li>2</li>
                                        <li>3</li>
                                    </ul>
                                  </div>
                               </li>
                              <li> Гарантии</li>
                              <li className="dropdown">
                                  <span>Oбъекты</span>
                                  <div className="down">
                                    <ul>
                                        <li>1</li>
                                        <li>2</li>
                                        <li>3</li>
                                        <li>3</li>
                                        <li>3</li>
                                        <li>3</li>
                                        <li>3</li>
                                    </ul>
                                  </div>
                              </li>
                              <li > Документы</li>
                              <li > Контакты</li>
                          </ul>
                          </div>
                      </div>
                  </div>

        const mobile_bar =

        <div>
          <div className='home_mobile'>
            <div className='home_mobile-bar_mobile'>
                <div className='call'>
                  <p className='call-text'> Call Us </p>
                </div>
                <div className='home_mobile-bar_mobile-icon'>
                  <div className="lines">
                    <span className='line'> </span>
                    <span className='line'> </span>
                    <span className='line'> </span>
                  </div>

                </div>
                <div className=' menu'>
                  <div className='links'>
                      <p> <a href='#'> компании </a> </p>
                      <p> <a href='#'> Продукция </a> </p>
                      <p> <a href='#'> Прайс </a> </p>
                      <p> <a href='#'> Блог </a> </p>
                  </div>
                </div>
            </div>
          </div>

        </div>
    return(
      <div>
      <div>
      {this.state.width > 600 ? bar : mobile_bar}
      </div>


    <div>
      <div className='second_ground'>
          <div className='second_ground-container'>
          <Animated animationIn="bounceInRight" animationOut='' isVisible={true}>

          <div className='second_ground-container-first'>
              <p>
                   Стеновые и кровельные сэндвич-панели получайте скидку, уже со 2-го заказа:
              </p>

          </div>
          </Animated>
          <div className='second_ground-container-second'>


              <div  style={{display: "flex", marginBottom: "40px"}}>
                <Animated animationIn="zoomInRight" animationOut='' isVisible={true}>
                  <h style={{marginRight:"auto"}}>
                      Реализуем также небольшие партии от 100 м2
                  </h>
                  </Animated>
                  <Animated animationIn="zoomInRight" animationOut='' isVisible={true}>
                      <h> Гарантируем соблюдение обязательств по договору </h>
                  </Animated>
              </div>


              <div  style={{display: "flex"}}>
                <Animated animationIn="zoomInLeft" animationOut='' isVisible={true}>
                    <h style={{marginRight:"auto"}}>
                        Характеристики панелей четко соответствуют запросу клиента
                    </h>
                </Animated>
                <Animated animationIn="zoomInLeft" animationOut='' isVisible={true}>
                    <h>
                        Предоставляем специальные условия для постоянных партнеров
                    </h>
                </Animated>

              </div>
         </div>
         <Animated animationIn="zoomInLeft" animationOut='' isVisible={true}>
          <div className='second_ground-container-third'>
            <div>
                   <p className='second_ground-container-third-first_line'>
                      Мы пришлем Вам на почту информацию о том,то такое сэндвич-панели
                   </p>
                  <div className='second_ground-container-third-second_line'>
                  <ul >
                      <li style={{marginRight: "auto"}}>
                      Каталог: цветные фото, характеристики, оптовые цены
                      </li>

                      <li>
                          Технические условия ТУ 5284-001-76808259-2013
                      </li>
                  </ul>
                </div>
                <div className='second_ground-container-third-third_line'>
                  <input placeholder='ваш имя'/>
                  <input placeholder='ваш телефон'/>
                  <input placeholder='ваш e-mail'/>
                  <div>
                    <button> получить </button>
                 </div>
              </div>
            </div>
          </div>
          </Animated>
        </div>
      </div>
    </div>
    <VisibilitySensor onChange={this.onVisibilityhistory}
    delayedCall>
      <div className='history'>
         <div className='history-writings'>
          <p data-aos="fade-down" className = 'history-writings-company'> История компании </p>
          <div className='history-writings-paragraphs'>
            <p data-aos="fade-right"> История компании началась в 2005 году на Дальнем Востоке.
            В городе Благовещегске, Амурской области была основана компания «Фасады и Кровля»
            и открыт завод по производству профнастила и металлических сэндвич-панелей. А в 2013 году году
            запущена автоматическая линия (DUEMAS, Великобритания) для производства стеновых и кровельных сэндвич-панелей. </p>
            <p data-aos="fade-right"> Особой ценностью компании являются люди, которые трудятся в компании со дня основания фирмы.
             Это высококвалифицированный инженерно-технический персонал, а также сотрудники отдела продаж,
             имеющие многолетний опыт работы в области строительной индустрии.
             Наши специалисты имеют большой опыт организации поставок сэндвич-панелей
             в рамках крупных инфраструктурных государственных и коммерческих проектов с широкой
             географией присутствия и сложной логистикой. </p>
            <p data-aos="fade-right"> Поэтому решение об открытии второго завода в Липецкой области,
            поселке Лев Толстой стало логичным продолжением успешной работы компании. Была закуплена и запущена еще
            одна новейшая автоматизированная линия DUEMAS. Открытие второго завода, как обособленного подразделения,
            позволило решить многие сложные задачи по обеспечению оптимальной логистики.</p>
            <p data-aos="fade-right">  С открытием второго завода в Липецкой области
             производительность увеличилась до 1 000 000 кв.м. сэндвич-панелей в год. </p>
            <p data-aos="fade-right"> У нового завода появились постоянные Заказчики
             из Центральной России и Черноземья.
             Для удобства работы с нашими Заказчиками руководством компании было
             принято решение о выводе обособленного подразделения в отдельную компанию,
             с названием ООО «ФЕРРУМ». </p>
          </div>
          </div>
          <div className='history-photos'>
          <ul >
            <div data-aos="flip-left" style={{display: "inline"}}>
              <li> <img data-aos="flip-up" src={img01}/> </li>
              <li> <img data-aos="flip-left" src={img02}/> </li>
             </div>
             <div style={{display: "inline"}}>
              <li> <img data-aos="flip-up" src={img03}/> </li>
              <li data-aos="flip-left" style={{height: this.state.width < 481 ? '63.5vw' : '10.5vw'}}> <iframe width="100%" height= "100%" src="https://www.youtube.com/embed/ooJSgsB5fIE?modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='allowfullscreen'></iframe> </li>
             </div>
          </ul>
          </div>

      </div>
      </VisibilitySensor>
      <VisibilitySensor onChange={this.onVisibilityads}
      delayedCall>
        <div className='ads'>
          <div className='ads-left'>
          <Animated animationIn="bounceInLeft" animationOut='' isVisible={this.state.ads}>
              <div className='ads-left-wrinting'>
                  <h> News </h>
                  <p> У нового завода появились постоянные Заказчики
                   из Центральной России и Черноземья. Для удобства работы
                    с нашими Заказчиками руководством компании
                   было принято решение о выводе обособленного  </p>
              </div>
          </Animated>
              <div className='ads-left-slider'>
                <Slider {...settings}>
                    <div>
                      <img src={slider1}/>
                    </div>
                    <div>
                      <img src={slider2}/>
                    </div>
                    <div>
                      <img src={slider3}/>
                    </div>
                    <div>
                      <img src={slider4}/>
                    </div>
                </Slider>
             </div>
         </div>
     <div className='ads-right'>
     <Animated animationIn="bounceInLeft" animationOut='' isVisible={this.state.ads}>
          <div className='ads-right-wrinting'>
            <h> News </h>
            <p> Поэтому решение об открытии второго завода в
             Липецкой области, поселке Лев Толстой стало логичным
              продолжением успешной работы компании.
            Была закуплена и запущена еще одна новейшая  </p>
          </div>
    </Animated>
          <div className='ads-right-secslider'>
            <Slider {...settings}>
                <div>
                  <img src={slider5}/>
                </div>
                <div>
                  <img src={slider6}/>
                </div>
                <div>
                  <img src={slider7}/>
                </div>
                <div>
                  <img src={slider8}/>
                </div>
            </Slider>
          </div>
     </div>
  </div>
</VisibilitySensor>

  <div className='counters_cont'>
  <VisibilitySensor onChange={this.onVisibilitytitle} delayedCall>
  <Animated animationIn="bounceInLeft" animationOut='' isVisible={this.state.title}>
    <div className="counters_cont-title" >
      <h> Наши достижения как гарантии
       надежных партнерских отношений </h>
    </div>
    </Animated>
  </VisibilitySensor>
    <div className='counters_cont-container'>
      <div className='counters_cont-container-boxes'>
        <ul>
            <div>
              <li>
              <VisibilitySensor
                onChange={this.onVisibilityChange}
                delayedCall // Prevents react apps triggering elements as visible before styles are loaded
                >
                   <CountUp
                      end={this.state.start ? 100 : 0}
                      // suffix= " лет"
                      start={0}
                      duration={4}
                   />
              </VisibilitySensor>
                <p> квалифицированных сотрудников </p>
              </li>
              <li>
              <VisibilitySensor
                onChange={this.onVisibilityChange}
                delayedCall // Prevents react apps triggering elements as visible before styles are loaded
                >
                   <CountUp
                      end={this.state.start ? 10 : 0}
                      suffix= " лет"
                      start={0}
                      duration={4}
                   />
              </VisibilitySensor>
                <p> производим строительные</p>
              </li>
              <li>
              <VisibilitySensor
                onChange={this.onVisibilityChange}
                delayedCall // Prevents react apps triggering elements as visible before styles are loaded
                >
                   <CountUp
                      end={this.state.start ? 1800 : 0}
                      suffix= " м2"
                      start={0}
                      duration={4}
                   />
              </VisibilitySensor>
                <p> панелей смену материалы</p>
              </li>
            </div>


            <div>
            <li>
            <VisibilitySensor
              onChange={this.onVisibilityChange}
              delayedCall // Prevents react apps triggering elements as visible before styles are loaded
              >
                 <CountUp
                    end={this.state.start ? 32000 : 0}
                    suffix= " м2"
                    start={0}
                    duration={4}
                 />
            </VisibilitySensor>
              <p> производим строительные</p>
            </li>
            <li>
            <VisibilitySensor
              onChange={this.onVisibilityChange}
              delayedCall // Prevents react apps triggering elements as visible before styles are loaded
              >
                 <CountUp
                    end={this.state.start ? 85000 : 0}
                    suffix= " м2"
                    start={0}
                    duration={4}
                 />
            </VisibilitySensor>
              <p> панелей смену материалы</p>
              </li>
              <li>
              <VisibilitySensor
                onChange={this.onVisibilityChange}
                delayedCall // Prevents react apps triggering elements as visible before styles are loaded
                >
                   <CountUp
                      end={this.state.start ? 90000 : 0}
                      suffix= " м2"
                      start={0}
                      duration={4}
                   />
              </VisibilitySensor>



                <p> производим строительные</p>
              </li>
          </div>
        </ul>
      </div>
    </div>
  </div>

  <div className='garantee'>
     <div className='garantee-title'>
       <div >
       <VisibilitySensor delayedCall onChange={this.onVisibilitytitle2}>
         <h data-aos="fade-up">
           Холдинг «Фасады и Кровля» гарантирует высокое качество продукции и услуг
         </h>
        </VisibilitySensor>
       </div>
    </div>


      <div className='garantee-blocks'>
          <ul>
            <li>
                <p data-aos="fade-right"
                   data-aos-duration="500"
                   style={{display: 'flex'}}>
                      <div className='numbers'>
                        01
                      </div>
                      <div>
                          <h> Соответствие требованиям заказчиков </h>
                          <div> Толщина профилированного металлического листа и плотность используемого утеплителя полностью соответствует заявленным параметрам.Уточнить данные можно на производстве после изучения технической документации и сертификатов.
                          </div>
                      </div>
                  </p>
                  <p data-aos="fade-right"
                     data-aos-duration="1500"
                     style={{display: 'flex'}}>
                      <div className='numbers'>
                        02
                      </div>
                      <div>
                          <h> Нестандартная продукция </h>
                          <div> Опыт в работе позволяет принимать заказы на производство панелей в уникальном цвете из каталога Ral, а также с разным покрытием металла: полиэстер, pural, prisma и PVDF.
                          </div>
                      </div>
                  </p>
                  <p data-aos="fade-right"
                     data-aos-duration="2500"
                     style={{display: 'flex'}}>
                     <div className='numbers'>
                        03
                    </div>
                    <div>
                        <h> Соответствие требованиям заказчиков </h>
                        <div> Производство организовано на автоматизированной линии, отличающейся технологичностью и высокой производительностью.
                        </div>
                    </div>
                  </p>
            </li>
            <li>
                <p data-aos="fade-right"
                data-aos-duration="2500"
                 style={{display: 'flex'}}>
                 <div className='numbers'>
                      04
                    </div>
                    <div>
                        <h> Соответствие требованиям заказчиков </h>
                        <div> Толщина профилированного металлического листа и плотность используемого утеплителя полностью соответствует заявленным параметрам. Уточнить данные можно на производстве после изучения технической документации и сертификатов.
                        </div>
                    </div>
                  </p>
                  <p data-aos="fade-right"
                  data-aos-duration="2000"
                   style={{display: 'flex'}}>
                   <div className='numbers'>
                      05
                    </div>
                    <div>
                        <h> Соответствие требованиям заказчиков </h>
                        <div> Принимаются на договорной основе и оперативно обрабатываются заказы по изготовлению и своевременной доставке панелей объемом от 50 кв. м.
                        </div>
                    </div>
                  </p>
                  <p data-aos="fade-right"
                  data-aos-duration="3000"
                   style={{display: 'flex'}}>
                   <div className='numbers'>
                      06
                    </div>
                    <div>
                        <h> Соответствие требованиям заказчиков </h>
                        <div> Персональный менеджер контролирует последовательность и оперативность выполнения заказа. Своевременно информирует при изменениях.

                        </div>
                    </div>
                 </p>
             </li>
           </ul>
       </div>
   </div>


    <div className='buildings'>
          <div className='buildings-title'>
              <h data-aos="fade-right"> Кровельные и стеновые сэндвич-панели крайне востребованный на рынке продукт </h>
          </div>
      <div className='buildings-description'>
        <div data-aos="fade-right" className='buildings-description-flex'>
          <div className='buildings-description-flex-photos'>
            <Slider {...settings}>
                <img src='/static/media/upakovka.440f3151.png'/>
                <img src='/static/media/slider9.05900033.jpg'/>
                <img src='/static/media/stanok.127be9a7.png'/>
            </Slider>
         </div>
        <p >
          Предлагаемые компанией сэндвич-панели для крыш и стен представляют собой готовый для монтажа стройматериал, не требующий дополнительной подготовки и обслуживания.
          <br/>
          <br/>
          Конструкции востребованы на строительстве складских помещений, торговых центров, общественных зданий и производственных объектов.
          <div  className='buildings-description-box'>
            <div data-aos="fade-up" className='buildings-description-box-title'>
              <h > Преимущества многослойных панелей:</h>
              <br/>
              <br/>

              <p> Высокая антикоррозионная устойчивость</p>
              <p> Малый вес, если сравнивать с аналогами</p>
              <p> Возможность быстрого монтажа без специального оборудования</p>
              <p> Повышенные теплосберегающие и звукоизоляционные свойства</p>
            </div>
          </div>

         </p>



        </div>

            <p> Применение многослойных изделий для сооружения крыш и стен позволяет получить теплые помещения, при этом сократить бюджет и время строительства. Преимущество панелей для строителей - легкий и удобный монтаж. Период эксплуатации материала составляет более 20 лет, а гарантия выдается на 1,5 года со дня отгрузки на производстве.</p>
        </div>

   </div>


<VisibilitySensor onChange={this.onVisibilityinstructure}
  delayedCall // Prevents react apps triggering elements as visible before styles are loaded
>
   <div className='instructure'>

      <div className='instructure-cont'>
          <div  className='instructure-cont-photo'>

              <img  data-aos="fade-left" src={building}/>
              <img src={img0}/>
              <img src={img1}/>
              <img src={img2}/>
              <img src={img3}/>

          </div>
              <h data-aos="fade-right"> Ознакомьтесь с нашим ассортиментом более подробно </h>
            <div className='instructure-cont-paragraphs'>
                <Animated animationIn="bounceInLeft" animationOut='' isVisible={this.state.instructure}>
                    <p> 1. Кровельные сэндвич-панели </p>
                    <p> 2. Стеновые сэндвич-панели </p>
                    <p> 3. Фасонные элементы </p>
                    <p> 4. Доборные элементы </p>
                </Animated>
            </div>
      </div>
   </div>
   </VisibilitySensor>
   <div className='gallery'>
   <Slider {...third_settings}>
            <div className='container'>
                <img src={'/static/media/s1.e1524b02.jpeg'}/>
                  <div className='overlay'> <p className='text'>1</p></div>
            </div>
            <div className='container'>
                <img src={'/static/media/s2.0eddd685.jpeg'}/>
                <div className='overlay'> <p className='text'>2</p></div>
            </div>
            <div className='container'>
                <img src={'/static/media/s3.d4f7f8e4.jpeg'}/>
                <div className='overlay'> <p className='text'>3</p></div>
            </div>
            <div className='container'>
                <img src={'/static/media/s4.01f9111a.jpeg'}/>
                <div className='overlay'> <p className='text'>4</p></div>
            </div>
   </Slider>

   </div>
</div>




  )
 }
}
