(function(){
  const el = document.getElementById('globe');
  if (typeof Globe === 'undefined') {
    el.innerHTML = '<p style="padding:40px;text-align:center">Globe could not load (offline?). Use the field cards below.</p>';
    return;
  }
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const g = Globe()(el)
    .globeImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg')
    .bumpImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png')
    .backgroundColor('rgba(0,0,0,0)').atmosphereColor('#8fa58a')
    .pointsData(fieldSites).pointLat('lat').pointLng('lng').pointColor(()=>'#e0894a').pointAltitude(.04).pointRadius(.35)
    .ringsData(fieldSites).ringLat('lat').ringLng('lng').ringColor(()=>t=>`rgba(224,137,74,${1-t})`).ringMaxRadius(2.2).ringPropagationSpeed(1.5).ringRepeatPeriod(1800)
    .labelsData(fieldSites).labelLat('lat').labelLng('lng').labelText('name').labelSize(.55).labelDotRadius(0).labelColor(()=>'#f4efe6').labelAltitude(.05).labelResolution(2)
    .onPointClick(p=>openField(p.id)).onLabelClick(p=>openField(p.id))
    .pointLabel(p=>`<div style="background:#1d2f23;color:#f4efe6;padding:6px 10px;border-radius:8px;font:13px sans-serif"><b>${p.name}</b><br>${p.short}</div>`);

  const size = () => g.width(el.clientWidth).height(el.clientHeight);
  size();
  addEventListener('resize', size);

  // Instead of hardcoding lat/lng, use the first site in fieldSites
  if (fieldSites.length > 0) {
    const first = fieldSites[0];
    g.pointOfView({lat:first.lat, lng:first.lng, altitude:0.55}, 0);
  }

  const c = g.controls();
  c.autoRotate = !reduce;
  c.autoRotateSpeed = .5;

  const focusGlobeOnField = (id, ms=1000) => {
    const f = fieldSites.find(x => x.id === id);
    if (!f) return;
    c.autoRotate = false;
    g.pointOfView({lat:f.lat, lng:f.lng, altitude:.55}, ms);
  };
  window.focusGlobeOnField = focusGlobeOnField;

  el.addEventListener('mouseenter', () => c.autoRotate = false);
  el.addEventListener('mouseleave', () => c.autoRotate = !reduce);

})();
