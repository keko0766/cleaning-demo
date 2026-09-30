// Казахский словарь. Русский текст берётся прямо из HTML (хорошо для SEO).
const KK = {
  nav_services:"Қызметтер",nav_prices:"Бағалар",nav_biz:"Бизнеске",nav_reviews:"Пікірлер",nav_faq:"Сұрақтар",nav_contact:"Байланыс",
  live:"Ертең 3 бригада бос",
  hero_h1:"Алматыда пәтерді <em>3 сағатта</em> жинаймыз. Баға келгенге дейін бекітіледі",
  hero_p:"Тексерілген клинерлер, өз құралдарымыз бен жабдықтарымыз. Нәтиже ұнамаса — тегін қайта жинаймыз.",
  c_h:"Бағасын 30 секундта біліңіз",promo:"Алғашқы тапсырысқа −15%",
  c_type:"Жинау түрі",c_area:"Аудан",c_btn:"Осы бағаға тапсырыс беру",
  s1t:"Пәтер жинау",s2t:"Күрделі жинау",s3t:"Жөндеуден кейін",s4t:"Кеңсе жинау",s5t:"Жиһазды химиялық тазалау",s6t:"Терезе жуу",
  ph_hero:"Фото: клинер жұмыс үстінде",ph_team:"Фото: логотипі бар форма киген бригада",
  t1:"2GIS рейтингі, 120 пікір",t2:"мүлікті сақтандыру",t3:"клинерлер тексеруден өтеді",t4:"Алматы нарығында",yrs:"жыл",
  sv_h:"Нені жинаймыз",sv_p:"Кез келген жинау түрі: тазалықты қолдаудан жөндеуден кейінгі жинауға дейін.",
  s1p:"Бөлмелер, асүй және жуынатын бөлмені дымқыл жинау, қоқысты шығару.",s1f:"550 ₸/м²-ден",
  s2p:"Терең тазалау: беттер, плита, тоңазытқыш, қолжетімсіз жерлер.",s2f:"900 ₸/м²-ден",
  s3p:"Құрылыс шаңы, бояу, жапсырма және үлдір іздері.",s3f:"1 300 ₸/м²-ден",
  s4p:"Бір реттік және кесте бойынша тұрақты жинау, жұмысты тоқтатпай.",s4f:"500 ₸/м²-ден",
  s5p:"Диван, матрас, кілем: дақ пен иісті кетіреміз.",s5f:"6 000 ₸-ден",
  s6p:"Терезе, балкон және витриналар дақсыз.",s6f:"1 500 ₸/терезеден",
  w_h:"Нәтижеге және мүлкіңізге өзіміз жауап береміз",
  w1t:"24 сағаттық кепілдік",w1p:"Ұнамаса — келіп, тегін қайта жинаймыз.",
  w2t:"Қауіпсіз химия",w2p:"Балалар, жануарлар және аллергиктерге жарамды.",
  w3t:"Тексерілген персонал",w3p:"Тапсырысқа шыққанға дейін құжаттар тексеріледі, оқу өтеді.",
  w4t:"Бекітілген баға",w4p:"Сома келгенге дейін айтылады және орында өзгермейді.",
  h_h:"Бұл қалай өтеді",h1t:"Өтінім",h1p:"Телефон қалдырыңыз немесе WhatsApp-қа жазыңыз.",
  h2t:"Келісу",h2p:"Егжей-тегжейін нақтылап, түпкілікті бағаны айтамыз.",
  h3t:"Жинау",h3p:"Бригада қажеттінің бәрімен келеді.",
  h4t:"Қабылдау",h4p:"Нәтижені тексересіз және содан кейін ғана төлейсіз.",
  p_h:"Тарифтер",p_p:"Жасырын қосымша төлемсіз. Алғашқы тапсырысқа 15% жеңілдік.",
  p1t:"Базалық",p1d:"Қолдау жинауы",p1a:"Барлық бөлмеде шаң мен едендер",p1b:"Асүй және жуынатын бөлме",p1c:"Қоқысты шығару",order:"Тапсырыс беру",
  pop:"Жиі таңдалады",p2t:"Күрделі",p2d:"Барлығын терең тазалау",p2a:"Базалық тарифтегінің бәрі",p2b:"Тоңазытқыш, пеш, шкафтар",p2c:"Терезе мен балкон жуу",
  p3t:"Жөндеуден кейін",p3d:"Құрылыс іздерін кетіру",p3a:"Құрылыс шаңы мен қалдықтар",p3b:"Бояу мен жапсырма іздері",p3c:"Барлық беттерді жуу",
  b_e:"Бизнеске",b_h:"Кеңсе, дүкен және клиникаларды тұрақты жинау",
  b_p:"Шарт бойынша жұмыс істейміз, жұмыс күнінен бұрын немесе кейін шығамыз. Қолма-қол ақшасыз төлем, әр ай сайын жабушы құжаттар.",
  b_btn:"Ұсыныс алу",b1:"Шарт және жабушы құжаттар",b2:"Сізге лайық кесте: күн сайын, аптасына 3 рет",b3:"Бекітілген бригада және менеджер",b4:"Қолма-қол ақшасыз төлем, шот және акт",
  n1:"Айгүл",n2:"Ерлан",n3:"Светлана",
  ba_h:"Бұрын және қазір",ba_p:"Жүгірткіні жылжытыңыз. Мұнда нысандардағы нақты фотолар болады.",before:"Бұрын",after:"Қазір",
  tm_h:"Сізге кім келеді",tm_p:"Бригадирді және оның тәжірибесін алдын ала көресіз.",
  r1r:"Бригадир, 6 жыл тәжірибе",r2r:"Жиһаз тазалау, 4 жыл",r3r:"Жөндеуден кейін, 5 жыл",
  r_h:"Клиенттер не жазады",r_p:"WhatsApp-тағы нақты хабарламалар. Мұнда сіздің скриншоттарыңыз болады.",
  c1s:"жөндеуден кейін, 74 м²",c1:"Сәлеметсіз бе! Уақытында келді, бәрін жуды, тіпті құтқара алмаймын деген балконды да. Рахмет 🙏",c1a:"Сізге рахмет! Тағы көргенімізге қуанамыз",
  c2s:"кеңсе, 180 м²",c2:"Әр сәрсенбіде жинау, жарты жылдан бері ескерту жоқ. Шот пен акт уақытында келеді.",c2a:"Керемет, келесі жылға шартты ұзартамыз",
  c3s:"диван тазалау",c3:"Шарап дағы екі жыл тұрды, енді жоқ. Иіс те жоқ.",c3a:"Қуаныштымыз, сәтті болды!",
  f_h:"Жиі қойылатын сұрақтар",
  q1:"Пәтер жинау қанша тұрады?",a1:"Қолдау жинауы 550 ₸/м²-ден, күрделі жинау 900 ₸/м²-ден. Баға келгенге дейін бекітіледі.",
  q2:"Үйде болуым керек пе?",a2:"Жоқ, кілттерді консьержке қалдыруға немесе курьермен жіберуге болады. Барлық қызметкерлер тексерілген.",
  q3:"Өз құралдарыңызды әкелесіздер ме?",a3:"Иә, қажеттінің бәрін өзіміз әкелеміз. Құралдар қауіпсіз, сертификатталған.",
  q4:"Жинау қанша уақыт алады?",a4:"60 м² пәтер — екі адамнан тұратын бригада шамамен 3–4 сағат.",
  q5:"Нәтиже ұнамаса ше?",a5:"24 сағат ішінде хабарлаңыз — ұнамағанды тегін қайта жинаймыз.",
  k_h:"10 минутта қоңырау шаламыз",k_p:"Телефон қалдырыңыз, менеджер бағаны және ыңғайлы уақытты растайды.",
  k1:"Күн сайын 8:00-ден 22:00-ге дейін",k2t:"Алматы",k2:"Үлгі көшесі, 1 (демо мекенжай)",k3:"Бір сағат ішінде жауап береміз",
  k_calc:"Сіздің есебіңіз:",ph_phone:"Телефоныңыз, +7",ph_name:"Аты (міндетті емес)",
  send:"WhatsApp-қа жазу",fine:"WhatsApp дайын хабарламамен ашылады, «Жіберу» батырмасын басу жеткілікті.",
  ok:"WhatsApp ашылуда. Ашылмаса, батырманы қайта басыңыз.",ph_addr:"Мекенжай: көше, үй, пәтер",ph_date:"Жинау күні",ph_time:"Ыңғайлы уақыт",ph_time_e:"мысалы, 14:00-ден кейін",demo:"Демонстрациялық сайт",call:"Қоңырау шалу"
};
const TITLE = {ru:document.title,kk:"Алматыдағы клининг — жинау 550 ₸/м²-ден | Таза Үй"};
const DESC  = {ru:document.querySelector('meta[name=description]').content,kk:"Алматыда пәтер, кеңсе және үйлерді кәсіби жинау. Баға келгенге дейін бекітіледі, 550 ₸/м²-ден. Алғашқы тапсырысқа 15% жеңілдік."};

const els = document.querySelectorAll('[data-i18n],[data-i18n-html],[data-i18n-ph]');
els.forEach(el=>{
  if(el.dataset.i18n) el._ru = el.textContent;
  if(el.dataset.i18nHtml) el._ru = el.innerHTML;
  if(el.dataset.i18nPh) el._ru = el.placeholder;
});

function setLang(l){
  els.forEach(el=>{
    const k = el.dataset.i18n || el.dataset.i18nHtml || el.dataset.i18nPh;
    const v = l==='kk' && KK[k] ? KK[k] : el._ru;
    if(el.dataset.i18nHtml) el.innerHTML = v;
    else if(el.dataset.i18nPh) el.placeholder = v;
    else el.textContent = v;
  });
  document.documentElement.lang = l;
  document.title = TITLE[l];
  document.querySelector('meta[name=description]').content = DESC[l];
  document.querySelectorAll('.lang button').forEach(b=>b.classList.toggle('on',b.dataset.lang===l));
  const ft=document.getElementById('ftype'),tp=document.getElementById('type');
  if(ft) [...ft.options].forEach((o,i)=>o.textContent=tp.options[i].textContent);
  try{localStorage.setItem('lang',l)}catch(e){}
}
document.querySelectorAll('.lang button').forEach(b=>b.onclick=()=>setLang(b.dataset.lang));
let saved; try{saved=localStorage.getItem('lang')}catch(e){}
if(saved==='kk') setLang('kk');

// мобильное меню
const menu=document.getElementById('menu');
document.getElementById('burger').onclick=()=>menu.classList.toggle('open');
menu.querySelectorAll('a').forEach(a=>a.onclick=()=>menu.classList.remove('open'));

// калькулятор (скидка 15% на первый заказ)
const WA='77007392350';
const type=document.getElementById('type'),area=document.getElementById('area'),
      areaV=document.getElementById('areaV'),sum=document.getElementById('sum'),
      old=document.getElementById('old'),chip=document.getElementById('chipSum');
const fmt=n=>Math.round(n).toLocaleString('ru-RU').replace(/[\s ,]/g,' ')+' ₸';
function calc(){
  const full=(+type.value)*(+area.value), disc=full*0.85;
  areaV.textContent=area.value;
  old.textContent=fmt(full); sum.textContent=fmt(disc); chip.textContent=fmt(disc);
  ftype.value=type.value; if(document.activeElement!==farea) farea.value=area.value;
}
const ftype=document.getElementById('ftype'),farea=document.getElementById('farea');
type.querySelectorAll('option').forEach(o=>{const c=document.createElement('option');c.value=o.value;c.textContent=o.textContent;ftype.appendChild(c);});
[type,area].forEach(e=>e.addEventListener('input',calc));
ftype.addEventListener('input',()=>{type.value=ftype.value;calc();});
farea.addEventListener('input',()=>{const v=Math.min(300,Math.max(20,+farea.value||20));area.value=v;calc();});
calc();

// до/после
const baR=document.getElementById('baR'),baH=document.getElementById('baH'),after=document.querySelector('.ba .after');
baR.addEventListener('input',()=>{
  after.style.clipPath=`inset(0 0 0 ${baR.value}%)`;
  baH.style.left=baR.value+'%';
});

// форма -> WhatsApp с готовым сообщением
const MSG={
  ru:{hi:'Здравствуйте! Хочу заказать уборку.',type:'Тип',calc:'Расчёт',disc:'скидка 15% на первый заказ',addr:'Адрес',date:'Дата',time:'Время',name:'Имя',phone:'Телефон'},
  kk:{hi:'Сәлеметсіз бе! Жинауға тапсырыс бергім келеді.',type:'Түрі',calc:'Есеп',disc:'алғашқы тапсырысқа 15% жеңілдік',addr:'Мекенжай',date:'Күні',time:'Уақыты',name:'Аты',phone:'Телефон'}
};
document.getElementById('form').addEventListener('submit',e=>{
  e.preventDefault();
  const m=MSG[document.documentElement.lang==='kk'?'kk':'ru'], v=id=>document.getElementById(id).value.trim();
  const opt=type.options[type.selectedIndex].textContent;
  const lines=[m.hi,
    `${m.type}: ${opt}, ${area.value} м²`,
    `${m.calc}: ${sum.textContent} (${m.disc})`,
    `${m.addr}: ${v('fa')}`];
  const d=v('fd'); if(d){const [y,mo,da]=d.split('-'); lines.push(`${m.date}: ${da}.${mo}.${y}`);}
  if(v('ft')) lines.push(`${m.time}: ${v('ft')}`);
  if(v('fn')) lines.push(`${m.name}: ${v('fn')}`);
  lines.push(`${m.phone}: ${v('fp')}`);
  document.getElementById('ok').style.display='block';
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(lines.join('\n'))}`,'_blank');
});
