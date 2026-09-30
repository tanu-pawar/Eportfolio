const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

const profileImg=$('#profilePhoto');
if(profileImg){
  const profileCandidates=['assets/images/field/Profile.jpg'];
  let profileIndex=0;
  const tryNextProfile=()=>{
    if(profileIndex>=profileCandidates.length){
      profileImg.remove();
      const figure=profileImg.closest('.portrait');
      if(figure) figure.classList.add('noimg');
      return;
    }
    profileImg.src=profileCandidates[profileIndex++];
  };
  profileImg.onerror=tryNextProfile;
  profileImg.onload=()=>profileImg.parentElement?.classList.remove('noimg');
  tryNextProfile();
}

/* config-driven bits */
$$('[data-src]').forEach(a=>{a.href=SITE+a.dataset.src+q;a.target='_blank';a.rel='noopener';a.textContent='View original evidence ↗'});
const mail=$('#mail');mail.href='mailto:'+portfolioConfig.email;mail.textContent=portfolioConfig.email;
$('#li').href=portfolioConfig.linkedin;
$('#updated').textContent=portfolioConfig.lastUpdated;
const ghOK=portfolioConfig.github&&!portfolioConfig.github.includes('YOUR_');
if(ghOK){const g=$('#ghLink');g.href=portfolioConfig.github;g.target='_blank';g.textContent='GitHub profile ↗';$('#ghFoot').innerHTML='<a href="'+portfolioConfig.github+'" target="_blank" rel="noopener">GitHub</a>'}else $('#ghLink').classList.add('dis');
if(portfolioConfig.repo){const r=$('#repoLink');r.href=portfolioConfig.repo;r.textContent=portfolioConfig.repo}
$$('a[download]').forEach(a=>a.href=portfolioConfig.resume);

/* skills */
$('#skillGrid').innerHTML=skillGroups.map((g,i)=>`<button class="skill r" aria-expanded="false" aria-controls="sk${i}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${g.icon}"/></svg><h3>${g.name}</h3><span class="hint">${g.items.length} items · click to open</span><div class="more" id="sk${i}"><div class="tags">${g.items.map(x=>`<span>${x}</span>`).join('')}</div></div></button>`).join('');
$$('.skill').forEach(b=>b.onclick=()=>{const o=b.classList.toggle('open');b.setAttribute('aria-expanded',o)});

/* education */
$('#eduTimeline').innerHTML=education.map(e=>`<li class="r ${e.now?'now':''}"><span class="lvl">${e.lvl}</span><span class="yr">${e.yr}</span><h3>${e.t}</h3><p class="muted">${e.i}</p><p>${e.h}</p></li>`).join('');

/* field cards + modal */
const modal=$('#modal');let lastFocus;
function openField(id){
  const f=fieldSites.find(x=>x.id===id); if(!f)return;
  lastFocus=document.activeElement;
  if(window.focusGlobeOnField) window.focusGlobeOnField(id, 1200);
  const photo=f.photo ? `<img class="modal-photo" src="assets/images/field/${f.photo}" alt="${esc(f.photoAlt||('Field photograph from '+f.name))}">` : '';
  $('#mBody').innerHTML=`<p class="eyebrow">${esc(f.date)}</p><h2 id="mTitle">${esc(f.name)}</h2><p class="muted">${esc(f.loc)}</p>${photo}
  <h4>Purpose</h4><p>${esc(f.purpose)}</p><h4>What I did</h4><p>${esc(f.did)}</p><h4>GIS relevance</h4><p>${esc(f.gis)}</p><h4>Data / observations</h4><p>${esc(f.obs)}</p>
  <h4>Skills used</h4><div class="tags">${f.skills.map(s=>`<span>${esc(s)}</span>`).join('')}</div><h4>Key learning</h4><p>${esc(f.learn)}</p>
  <a class="src" target="_blank" rel="noopener" href="${SITE}field-work${q}">View original fieldwork entry ↗</a>`;
  modal.hidden=false;$('.close',modal).focus();
  $$('.fc').forEach(c=>c.classList.toggle('hl',c.dataset.site===id));
}
function openFieldGroup(groupId){
  const g=fieldGroups.find(x=>x.id===groupId); if(!g)return;
  lastFocus=document.activeElement;
  const sites=g.siteIds.map(id=>fieldSites.find(x=>x.id===id)).filter(Boolean);
  if(sites[0] && window.focusGlobeOnField) window.focusGlobeOnField(sites[0].id, 1200);
  const gallery=g.photos?.length ? `<div class="modal-gallery">${g.photos.map((ph,i)=>`<img class="modal-photo" src="assets/images/field/${ph}" alt="${esc(g.title)} field photograph ${i+1}">`).join('')}</div>` : '';
  $('#mBody').innerHTML=`<p class="eyebrow">${esc(g.subtitle)}</p><h2 id="mTitle">${esc(g.title)}</h2>${gallery}<p>${esc(g.summary)}</p>` + sites.map(f=>`<div class="field-detail"><p class="muted"><strong>${esc(f.name)}</strong> · ${esc(f.loc)}</p><h4>Purpose</h4><p>${esc(f.purpose)}</p><h4>What I did</h4><p>${esc(f.did)}</p><h4>GIS relevance</h4><p>${esc(f.gis)}</p><h4>Observations</h4><p>${esc(f.obs)}</p><h4>Skills used</h4><div class="tags">${f.skills.map(x=>`<span>${esc(x)}</span>`).join('')}</div><h4>Key learning</h4><p>${esc(f.learn)}</p></div>`).join('') + `<a class="src" target="_blank" rel="noopener" href="${SITE}field-work${q}">View original fieldwork entry ↗</a>`;
  modal.hidden=false;$('.close',modal).focus();
  $$('.fc').forEach(c=>c.classList.toggle('hl',c.dataset.group===groupId));
}
const closeM=()=>{modal.hidden=true;lastFocus&&lastFocus.focus()};
$('.close').onclick=closeM;modal.onclick=e=>{if(e.target===modal)closeM()};addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.hidden)closeM()});
$('#fieldCards').innerHTML=fieldGroups.map(g=>{
  const photo=(g.photos||[]).map(ph=>`<div class="fc-photo" style="background-image:url('assets/images/field/${ph}')" aria-hidden="true"></div>`).join('');
  const bullets=g.bullets.slice(0,3).map(x=>`<span>${esc(x)}</span>`).join('');
  return `<button class="fc r" data-group="${g.id}" data-site="${g.siteIds[0]}">${photo}<div class="fc-content"><small>${esc(g.subtitle)}</small><h3>${esc(g.title)}</h3><p>${esc(g.summary)}</p><div class="fc-bullets">${bullets}</div></div></button>`;
}).join('');
$$('.fc').forEach(c=>c.addEventListener('mouseenter',()=>{ if(window.focusGlobeOnField) window.focusGlobeOnField(c.dataset.site,700); }));
$$('.fc').forEach(c=>c.onclick=()=>{
  const g=fieldGroups.find(x=>x.id===c.dataset.group); if(g){
    if(g.siteIds.length===1) openField(g.siteIds[0]);
    else openField(g.siteIds[0]);
  }
});

/* projects */
const linkBtns=p=>p.links.length?p.links.map(l=>`<a class="btn ghost" href="${l.url}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join(''):'<span class="hint">Project link to be added</span>';
$('#projGrid').innerHTML=projects.map(p=>`<article class="proj" data-cats="${p.cats.join(' ')}"><div class="pv" aria-hidden="true">${p.tech}</div><div class="pb"><h3>${p.title}</h3><dl>
<dt>Objective</dt><dd>${p.objective}</dd><dt>Data</dt><dd>${p.data}</dd><dt>Method</dt><dd>${p.method}</dd><dt>My contribution</dt><dd>${p.contribution}</dd><dt>Output</dt><dd>${p.output}</dd><dt>Key learning</dt><dd>${p.learning}</dd></dl><div class="links">${linkBtns(p)}</div></div></article>`).join('');
$('#filters').innerHTML=filters.map(([k,l],i)=>`<button data-f="${k}" aria-pressed="${i==0}" class="${i==0?'on':''}">${l}</button>`).join('');
$$('#filters button').forEach(b=>b.onclick=()=>{$$('#filters button').forEach(x=>{x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b)});
 $$('.proj').forEach(c=>{const s=b.dataset.f==='all'||c.dataset.cats.split(' ').includes(b.dataset.f);c.classList.toggle('hide',!s);if(s){c.classList.remove('fade');void c.offsetWidth;c.classList.add('fade')}})});

/* interactive maps: lazy iframes */
$('#mapGrid').innerHTML=interactiveMaps.map((m,i)=>`<article class="mcard r"><div class="mframe" data-url="${esc(m.url)}" data-i="${i}">${m.url?'Loading map…':'<span>Interactive map coming soon</span>'}</div><div class="pb"><h3>${esc(m.title)}</h3><span class="chip" style="width:fit-content">${esc(m.category)}</span><p>${esc(m.description)}</p>${m.url?`<a class="btn primary" target="_blank" rel="noopener" href="${esc(m.url)}">Open interactive map</a>`:'<span class="hint">Add URL in js/projects.js</span>'}</div></article>`).join('');
const lazy=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const f=e.target,u=f.dataset.url;if(u){f.innerHTML=`<iframe src="${esc(u)}" title="Interactive map ${f.dataset.i*1+1}" loading="lazy"></iframe>`}lazy.unobserve(f)}}),{rootMargin:'200px'});
$$('.mframe').forEach(f=>lazy.observe(f));

/* achievements */
const ach=a=>`<div class="ach r"><small>${a.n}</small><h3 style="font-size:1.05rem">${a.t}</h3><p>${a.o}</p></div>`;
$('#achGrid').innerHTML=achievements.map(ach).join('');$('#beyond').innerHTML=beyond.map(ach).join('');

/* GitHub repos (optional, fails silently) */
if(GITHUB_USERNAME&&!GITHUB_USERNAME.includes('YOUR_'))fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`).then(r=>r.ok?r.json():[]).then(rs=>{$('#repos').innerHTML=rs.filter(r=>!r.fork).map(r=>`<li><a href="${r.html_url}" target="_blank" rel="noopener">${esc(r.name)}</a> <small>${esc(r.description||'')}</small></li>`).join('')}).catch(()=>{});

/* nav */
const burger=$('.burger'),nav=$('.nav nav');
burger.onclick=()=>{const o=nav.classList.toggle('open');burger.setAttribute('aria-expanded',o)};
$$('#menu a').forEach(a=>a.onclick=()=>{nav.classList.remove('open');burger.setAttribute('aria-expanded',false)});
const secs=$$('main section[id]');
const spy=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)$$('#menu a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
secs.forEach(s=>spy.observe(s));

/* reveal + counters */
const rev=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');rev.unobserve(e.target);$$('[data-count]',e.target).forEach(count)}}),{threshold:.12});
$$('.r').forEach((el,i)=>{el.style.transitionDelay=(i%4)*70+'ms';rev.observe(el)});
function count(el){const t=+el.dataset.count;if(reduce){el.textContent=t;return}let n=0;const id=setInterval(()=>{n++;el.textContent=n;if(n>=t)clearInterval(id)},900/t)}

/* parallax */
const par=$('[data-parallax]');if(par&&!reduce)addEventListener('scroll',()=>{par.style.transform=`translateY(${Math.min(scrollY*.08,40)}px)`},{passive:true});

/* cursor (fine pointers only) */
if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!reduce){
 document.body.classList.add('cur-on');const d=$('.cur-dot'),r=$('.cur-ring');let x=0,y=0,rx=0,ry=0;
 addEventListener('mousemove',e=>{x=e.clientX;y=e.clientY;d.style.transform=`translate(${x}px,${y}px)`});
 (function loop(){rx+=(x-rx)*.16;ry+=(y-ry)*.16;r.style.transform=`translate(${rx}px,${ry}px)`;requestAnimationFrame(loop)})();
 document.addEventListener('mouseover',e=>{const t=e.target;r.classList.toggle('map',!!t.closest('#globe,.mframe'));r.classList.toggle('link',!!t.closest('a,button')&&!t.closest('#globe'))});
}
