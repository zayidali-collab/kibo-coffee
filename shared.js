/* ============================================
   KIBO COFFEE — SHARED JS (Final)
   Persistent Arabic toggle + all interactions
============================================ */

const AR = {
  'Home':'الرئيسية','Our Story':'قصتنا','Collection':'المجموعة','Collection ▾':'المجموعة ▾',
  'Our Farms':'مزارعنا','Process':'العملية','Export':'التصدير','Sustainability':'الاستدامة',
  'Gallery':'المعرض','Press':'الصحافة','Contact':'تواصل معنا',
  'Summit Reserve':'سمت ريزيرف','Midnight Bloom':'بلوم منتصف الليل','Golden Mist':'الضباب الذهبي',
  'Kenya · AA Grade · Single Origin · Gulf Export':'كينيا · درجة AA · أصل واحد · تصدير الخليج',
  "Where Africa's roof meets the world's finest cup.":'حيث سقف أفريقيا يلتقي بأرقى كوب في العالم.',
  'Explore the Collection':'استكشف المجموعة','Export Inquiry':'استفسار تصدير',
  'Maximum Altitude':'أقصى ارتفاع','Hand-Picked':'قطف يدوي',
  'Source Regions':'مناطق المصدر','Gulf Markets':'أسواق الخليج',
  'Who We Are':'من نحن','The Collection':'المجموعة',
  'Export & Wholesale':'التصدير والجملة','From Cherry to Cup':'من الكرز إلى الكوب',
  'Kibo · Philosophy':'فلسفة كيبو','Our Mission':'مهمتنا','Our Journey':'رحلتنا','The Team':'الفريق',
  'Ready to Work Together?':'هل أنت مستعد للعمل معاً؟','Altitude Comparison':'مقارنة الارتفاع',
  'Direct Partnerships':'شراكات مباشرة','The Journey':'الرحلة','Roast Options':'خيارات التحميص',
  'Quality Assessment':'تقييم الجودة','Our Markets':'أسواقنا','How It Works':'كيف يعمل',
  'Private Label':'العلامة التجارية الخاصة','FAQ':'الأسئلة الشائعة','Begin Your Order':'ابدأ طلبك',
  'Three Pillars':'ثلاثة ركائز','Farmer Impact':'تأثير على المزارع','Our Pledges':'تعهداتنا',
  'Brand Facts':'حقائق العلامة','Brand Overview':'نظرة عامة','Talking Points':'نقاط الحديث',
  'Media Resources':'موارد الإعلام','Our Details':'تفاصيلنا','Send an Enquiry':'إرسال استفسار',
  'At a Glance':'لمحة سريعة','Visit the Source':'زيارة المصدر','Ready to Order':'جاهز للطلب',
  'More About Kibo':'المزيد عن كيبو','Get in Touch':'تواصل معنا','Add Your Content':'أضف محتواك',
  "Kenya's Most Ambitious Coffee Export House":'أكثر دور تصدير قهوة طموحاً في كينيا',
  'Three Extraordinary Single-Origin Lots':'ثلاثة أصناف استثنائية أحادية المصدر',
  'From Nairobi to the Gulf':'من نيروبي إلى الخليج',
  'Three Regions. One Standard.':'ثلاث مناطق. معيار واحد.',
  'Higher Means Better':'الارتفاع الأعلى يعني جودة أفضل',
  'Five Steps to Perfection':'خمس خطوات نحو الكمال',
  'Choose Your Roast':'اختر تحميصك','Every Step Matters':'كل خطوة مهمة',
  'Good for the Earth. Good for the Farmer.':'جيد للأرض. جيد للمزارع.',
  "The Kibo Brand Story":'قصة علامة كيبو','Kibo at a Glance':'كيبو في لمحة',
  'Why Kibo Matters':'لماذا تهم كيبو','Press Resources':'موارد الصحافة',
  "Let's Talk Coffee":'لنتحدث عن القهوة','Start a Conversation':'ابدأ محادثة',
  'Contact Kibo':'تواصل مع كيبو','Kibo Through the Lens':'كيبو من خلال العدسة',
  'Kibo in Motion':'كيبو في الحركة',
  'Explore Lot →':'استكشف الصنف →',
  'Kirinyaga':'كيرينياغا',"Nyeri":'نيري',"Murang'a":'مورانغا',
  'Slopes of Mount Kenya · Intense, vibrant acidity':'منحدرات جبل كينيا · حموضة مكثفة',
  'Red volcanic soils · Wine-like depth':'التربة البركانية الحمراء · عمق كالنبيذ',
  'Southern slopes · Delicate floral sweetness':'المنحدرات الجنوبية · حلاوة زهرية',
  'United Arab Emirates':'الإمارات العربية المتحدة','Kingdom of Saudi Arabia':'المملكة العربية السعودية',
  'Qatar':'قطر','Kuwait':'الكويت','Bahrain':'البحرين','Oman':'سلطنة عمان',
  'Cultivation':'الزراعة','Hand-Picking':'القطف اليدوي','Wet Processing':'المعالجة الرطبة',
  'Raised-Bed Drying':'التجفيف على الأسرة المرتفعة','Grading & Export':'التصنيف والتصدير',
  'Green Bean':'حبة خضراء','Light Roast':'تحميص خفيف','Medium Roast':'تحميص متوسط','Dark Roast':'تحميص غامق',
  'Unroasted · Raw':'غير محمص · خام','Farmer First':'المزارع أولاً','Land Stewardship':'رعاية الأرض',
  'Zero Waste':'صفر نفايات','Direct Trade':'تجارة مباشرة',
  'Full Name':'الاسم الكامل','Company':'الشركة','Email Address':'البريد الإلكتروني',
  'Country':'الدولة','Type of Enquiry':'نوع الاستفسار','Estimated Volume':'الحجم المقدر',
  'Message':'الرسالة','Send Enquiry →':'إرسال الاستفسار →',
  'Export / Wholesale Order':'طلب تصدير / جملة','Sample Request':'طلب عينة',
  'Private Label Programme':'برنامج العلامة الخاصة','Press / Media':'الصحافة / الإعلام',
  'General Enquiry':'استفسار عام',
  'All':'الكل','Farms':'المزارع','Coffee Cherries':'كرز القهوة','People':'الناس',
  'Beans & Roasts':'الحبوب والتحميص','Video':'فيديو',
  'Want to Add Your Own Videos?':'هل تريد إضافة مقاطع الفيديو الخاصة بك؟',
  'Request Sample':'طلب عينة','Export Pricing':'أسعار التصدير',
  'View Full Catalogue':'عرض الكتالوج الكامل','Explore the Farms':'استكشف المزارع',
  'Export Information':'معلومات التصدير','Learn the Full Process':'تعرف على العملية',
  'Our Commitment':'التزامنا','View the Collection':'عرض المجموعة',
  'See the Full Process':'اطلع على العملية','Contact Us':'اتصل بنا',
  'Request a Sample':'اطلب عينة','Request Samples':'اطلب عينات',
  'Enquire About Private Label':'الاستفسار عن العلامة الخاصة',
  'Full Brand Story':'القصة الكاملة للعلامة','Visit Our Farms':'زر مزارعنا',
  'Return to Home':'العودة للرئيسية','Back to Home':'العودة للرئيسية',
  'View Collection':'عرض المجموعة','Chat on WhatsApp':'تحدث عبر واتساب',
  'Navigate':'التنقل',"Kenya's Most Luxurious Coffee Export":'أفخم صادرات قهوة كينيا',
  'We use cookies. ':'نستخدم ملفات تعريف الارتباط. ','Learn more':'اعرف المزيد',
  'Accept':'قبول','Decline':'رفض','Scroll':'مرر',
  'Compare the Lots':'قارن الأصناف','Born in the Highlands.':'وُلد في المرتفعات.',
  'The Kibo Process':'عملية كيبو','The Kibo Story':'قصة كيبو','Kibo in Motion':'كيبو في الحركة',
  'What We Stand For':'ما نؤمن به','The People Behind Kibo':'الأشخاص وراء كيبو',
  'Begin Your Partnership':'ابدأ شراكتك','From These Farms to Your Cup':'من هذه المزارع إلى كوبك',
  'Compare the Lots':'قارن الأصناف',
  'Your Brand. Our Coffee.':'علامتك التجارية. قهوتنا.',
  'Common Questions':'الأسئلة الشائعة',
  'Sustainability at Kibo':'الاستدامة في كيبو','The People Who Grow Kibo':'الأشخاص الذين يزرعون كيبو',
  'What We Commit To':'ما نلتزم به','Learn More About Our Work':'تعرف أكثر على عملنا',
  'Kibo at a Glance':'كيبو في لمحة','The Kibo Story':'قصة كيبو','Why Kibo Matters':'لماذا تهم كيبو',
  'Press Enquiries':'استفسارات الصحافة','A Day on the Farm':'يوم في المزرعة',
  'Hand-Picked Excellence':'تميز بالقطف اليدوي','Cherry to Cup':'من الكرز إلى الكوب',
  'SCA Scoring':'تقييم SCA','Single Origin':'أصل واحد','Hand-Selected':'مختار يدوياً','GrainPro Packed':'معبأ في GrainPro',
  'Lot 01 · Kirinyaga · 1,900m':'الصنف 01 · كيرينياغا · 1,900م',
  'Lot 02 · Nyeri · 1,850m':'الصنف 02 · نيري · 1,850م',
  "Lot 03 · Murang'a · 1,800m":'الصنف 03 · مورانغا · 1,800م',
  'Region 01':'المنطقة 01','Region 02':'المنطقة 02','Region 03':'المنطقة 03',
  'Step One':'الخطوة الأولى','Step Two':'الخطوة الثانية','Step Three':'الخطوة الثالثة',
  'Step Four':'الخطوة الرابعة','Step Five':'الخطوة الخامسة',
  'Sales Enquiries':'استفسارات المبيعات','Export Desk':'قسم التصدير','WhatsApp':'واتساب','Headquarters':'المقر الرئيسي',
};

function applyLanguage(lang) {
  const isAr = lang === 'ar';
  document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', isAr ? 'ar' : 'en');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = (isAr && AR[key]) ? AR[key] : key;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    el.setAttribute('placeholder', (isAr && AR[key]) ? AR[key] : key);
  });
  const btn = document.getElementById('lang-btn');
  if (btn) {
    btn.textContent = isAr ? 'English' : 'عربي';
    btn.style.fontFamily = isAr ? '"Noto Serif Arabic",serif' : 'inherit';
  }
}

function tagAll() {
  // Tag leaf text nodes
  document.querySelectorAll('a,button,span,p,h1,h2,h3,h4,div,li,label,option').forEach(el => {
    if (el.children.length > 0) return;
    const txt = el.textContent.trim();
    if (txt && AR[txt] && !el.dataset.i18n) {
      el.dataset.i18n = txt;
    }
  });
  // Tag placeholders
  document.querySelectorAll('[placeholder]').forEach(el => {
    const ph = el.getAttribute('placeholder');
    if (AR[ph]) el.dataset.i18nPh = ph;
  });
}

document.addEventListener('DOMContentLoaded', () => {

  /* PAGE TRANSITION */
  const overlay = document.querySelector('.page-transition');
  if (overlay) {
    overlay.classList.remove('in');
    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (href && !href.startsWith('#') && !href.startsWith('http') && !href.startsWith('mailto') && !href.startsWith('tel') && !href.includes('wa.me')) {
        link.addEventListener('click', e => {
          e.preventDefault();
          overlay.classList.add('in');
          setTimeout(() => { window.location.href = href; }, 420);
        });
      }
    });
  }

  /* PROGRESS */
  const prog = document.getElementById('progress');
  if (prog) window.addEventListener('scroll', () => {
    const max = document.body.scrollHeight - window.innerHeight;
    prog.style.width = (max > 0 ? window.scrollY / max * 100 : 0) + '%';
  }, {passive:true});

  /* CURSOR */
  const cur = document.getElementById('cur'), ring = document.getElementById('cur-ring');
  if (cur && ring && window.matchMedia('(hover:hover)').matches) {
    let cx=0,cy=0,rx=0,ry=0;
    document.addEventListener('mousemove', e => { cx=e.clientX; cy=e.clientY; cur.style.left=cx+'px'; cur.style.top=cy+'px'; });
    (function loop(){ rx+=(cx-rx)*.28; ry+=(cy-ry)*.28; ring.style.left=rx+'px'; ring.style.top=ry+'px'; requestAnimationFrame(loop); })();
    document.querySelectorAll('a,button').forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('hover'));
      el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
    });
  }

  /* NAV */
  const nav = document.getElementById('mainnav');
  if (nav) {
    window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 40), {passive:true});
    const page = window.location.pathname.split('/').pop() || 'index.html';
    nav.querySelectorAll('.nav-item > a').forEach(a => {
      if (a.getAttribute('href') === page) a.closest('.nav-item').classList.add('active');
    });
  }

  /* MOBILE MENU */
  const hbg = document.getElementById('nav-hbg'), mob = document.getElementById('mob-menu');
  if (hbg && mob) {
    hbg.addEventListener('click', () => { hbg.classList.toggle('open'); mob.classList.toggle('open'); });
    mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { hbg.classList.remove('open'); mob.classList.remove('open'); }));
  }

  /* REVEAL */
  const ro = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }), {threshold:.08});
  document.querySelectorAll('.rv,.rv-l,.rv-r').forEach(el => ro.observe(el));

  /* COUNTERS */
  const co = new IntersectionObserver(es => es.forEach(e => {
    if(e.isIntersecting) {
      const el=e.target, t=+el.dataset.target; let v=0; const step=t/70;
      const timer=setInterval(()=>{ v+=step; if(v>=t){v=t;clearInterval(timer);} el.textContent=Math.round(v).toLocaleString(); },20);
      co.unobserve(el);
    }
  }), {threshold:.5});
  document.querySelectorAll('.counter').forEach(el => co.observe(el));

  /* BACK TO TOP */
  const btt = document.getElementById('back-top');
  if(btt){ window.addEventListener('scroll',()=>btt.classList.toggle('show',scrollY>600),{passive:true}); btt.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'})); }

  /* COOKIE */
  const cookie = document.getElementById('cookie');
  if(cookie){
    try{ if(!localStorage.getItem('kibo-cookie')) cookie.classList.remove('hidden'); else cookie.classList.add('hidden'); }catch(e){ cookie.classList.add('hidden'); }
    document.getElementById('cookie-accept')?.addEventListener('click',()=>{ try{localStorage.setItem('kibo-cookie','1');}catch(e){} cookie.classList.add('hidden'); });
    document.getElementById('cookie-decline')?.addEventListener('click',()=>cookie.classList.add('hidden'));
  }

  /* FAQ */
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item=q.closest('.faq-item'), wasOpen=item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
      if(!wasOpen) item.classList.add('open');
    });
  });

  /* ROAST SELECTOR */
  document.querySelectorAll('.roast-opts').forEach(g => g.querySelectorAll('.roast-opt').forEach(b => b.addEventListener('click',()=>{ g.querySelectorAll('.roast-opt').forEach(x=>x.classList.remove('active')); b.classList.add('active'); })));

  /* FLAVOUR / ALTITUDE / CUPPING BARS */
  const barObserver = (cls) => new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting) e.target.querySelectorAll('.'+cls).forEach(b=>b.classList.add('on')); }), {threshold:.3});
  document.querySelectorAll('.flavour-wheel').forEach(el => barObserver('fw-bar-fill').observe(el));
  document.querySelectorAll('.alt-bars').forEach(el => barObserver('alt-bar-fill').observe(el));
  document.querySelectorAll('.cupping-scores').forEach(el => barObserver('cs-fill').observe(el));

  /* ===== ARABIC LANGUAGE — PERSISTENT ===== */
  tagAll();
  let lang = 'en';
  try { lang = localStorage.getItem('kibo-lang') || 'en'; } catch(e){}
  if (lang === 'ar') applyLanguage('ar');

  const langBtn = document.getElementById('lang-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      lang = lang === 'en' ? 'ar' : 'en';
      try { localStorage.setItem('kibo-lang', lang); } catch(e){}
      applyLanguage(lang);
    });
  }

  /* LOADER */
  const loader = document.getElementById('loader');
  if(loader){ window.addEventListener('load',()=>setTimeout(()=>loader.style.opacity='0',1600)); setTimeout(()=>{if(loader)loader.style.display='none';},2400); }

  /* PARTICLES */
  const pc = document.getElementById('particles');
  if(pc){ for(let i=0;i<16;i++){ const p=document.createElement('div'); p.className='particle'; p.style.cssText=`left:${Math.random()*100}%;width:${1+Math.random()*2}px;height:${1+Math.random()*2}px;animation-duration:${14+Math.random()*18}s;animation-delay:${Math.random()*15}s`; pc.appendChild(p); } }

});
