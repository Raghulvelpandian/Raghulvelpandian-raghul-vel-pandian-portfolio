const body=document.body, toggle=document.getElementById('themeToggle'), menu=document.getElementById('menuBtn'), links=document.getElementById('navLinks'), progress=document.getElementById('progress');
const saved=localStorage.getItem('raghul-theme'); if(saved==='dark') body.classList.add('dark');
toggle?.addEventListener('click',()=>{body.classList.toggle('dark');localStorage.setItem('raghul-theme',body.classList.contains('dark')?'dark':'light')});
menu?.addEventListener('click',()=>links.classList.toggle('open'));
links?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12}); document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(window.scrollY/Math.max(h,1)*100)+'%'});
const sections=[...document.querySelectorAll('main section[id]')], nav=[...document.querySelectorAll('.nav-links a')];
window.addEventListener('scroll',()=>{let current='home';sections.forEach(s=>{if(scrollY>=s.offsetTop-160)current=s.id});nav.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current))},{passive:true});
