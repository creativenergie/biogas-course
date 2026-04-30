# Session 1: Principles of Biogas

## Learning Objectives

By the end of this session, you should be able to:

1. Understand how airtightness, temperature, and the Carbon/Nitrogen ratio affect biogas production.
2. Understand the design of the CREATIVenergie Expanding Bag Digester and how it works.
3. Compare different types of biodigesters and their advantages and disadvantages.

---

## Case Study: Overview of a Biogas Digester

*Elvis introduces how a biogas digester works and its many uses.*

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;max-width:100%;margin-bottom:1rem;">
  <iframe src="https://www.youtube.com/embed/g9RhO4622rI"
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
</div>

---

## Biogas Production Basics

Biogas is produced when micro-organisms break down organic matter in an **anaerobic** (oxygen-free) environment. This is the same natural process that occurs inside a cow's stomach, where microbes digest food and release methane gas.

There are four key principles you must understand to run a successful biogas digester.

---

### 1. Airtightness is Essential

Biogas production only occurs **without oxygen** — this process is called **Anaerobic Digestion (AD)**. If the digester is not completely sealed, microbes will not produce methane effectively.

Airtightness is achieved two ways:
- Ensuring the bag is properly sealed.
- Maintaining the correct balance of input and output so the slurry always covers the throat, preventing gas escaping.

```{figure} ../assets/image3.png
:alt: Sealed vs unsealed digester — airtightness comparison
:width: 90%

A properly sealed digester retains all gas for cooking and productive use.
```

Before a bag digester is filled with slurry it must be tested for leaks — even a small hole in the seam will let gas escape and waste your energy. In **Session 7 (Building)** you will go through the full installation process step by step; this simulation shows you the testing method so you already understand what good airtightness looks and feels like before you get there.

```{raw} html
<div style="background:#e0f7fa;border:2px solid #80cbc4;border-radius:12px;padding:1.5rem;margin:1.5rem 0;font-family:sans-serif;">
  <h4 style="margin:0 0 0.2rem;color:#006064;font-size:1.05rem;">🫧 Interactive: Airtightness Test Simulation</h4>
  <p style="margin:0 0 1rem;color:#555;font-size:0.85rem;">A new bag has just been glued and is ready to install. Follow the steps below to test it for leaks <em>before</em> lowering it into the pit.</p>

  <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:1rem;">
    <div id="at2-s1" style="padding:0.35rem 0.85rem;border-radius:20px;font-size:0.8rem;font-weight:700;background:#00838f;color:white;">1. Close valve</div>
    <div id="at2-s2" style="padding:0.35rem 0.85rem;border-radius:20px;font-size:0.8rem;font-weight:400;background:#e0e0e0;color:#888;">2. Apply soapy water</div>
    <div id="at2-s3" style="padding:0.35rem 0.85rem;border-radius:20px;font-size:0.8rem;font-weight:400;background:#e0e0e0;color:#888;">3. Find &amp; mark the leak</div>
  </div>

  <div style="max-width:540px;margin:0 auto;position:relative;">
    <svg id="at2-svg" viewBox="0 0 520 230" style="width:100%;display:block;border-radius:8px;cursor:crosshair;"
         onmousemove="at2Move(event)" onclick="at2Click(event)"
         ontouchmove="at2Touch(event)" ontouchstart="at2Touch(event)">
      <!-- Sky -->
      <rect width="520" height="172" fill="#b3e5fc"/>
      <!-- Ground -->
      <rect y="172" width="520" height="58" fill="#c8e6c9"/>
      <line x1="0" y1="172" x2="520" y2="172" stroke="#4caf50" stroke-width="2"/>

      <!-- Clip: only show bag above ground -->
      <defs>
        <clipPath id="at2-clip">
          <rect x="0" y="0" width="520" height="173"/>
        </clipPath>
      </defs>

      <!-- Bag body -->
      <ellipse id="at2-bag" cx="260" cy="150" rx="148" ry="92"
               fill="#b2dfdb" stroke="#00796b" stroke-width="2.5" clip-path="url(#at2-clip)"/>
      <!-- Seam -->
      <line x1="112" y1="150" x2="408" y2="150" stroke="#00695c" stroke-width="1"
            stroke-dasharray="5,3" clip-path="url(#at2-clip)"/>
      <text x="260" y="143" text-anchor="middle" font-size="11" fill="#004d40" font-weight="700">GAS BAG</text>
      <text x="260" y="159" text-anchor="middle" font-size="9" fill="#00695c">expanding bag digester</text>

      <!-- Soap trail (dots added by moveBrush — must be after bag so they render on top) -->
      <g id="at2-trail" clip-path="url(#at2-clip)" style="pointer-events:none;"></g>

      <!-- Gas pipe -->
      <rect x="251" y="12" width="18" height="55" fill="#78909c" rx="3"/>

      <!-- Gas valve (clickable) -->
      <g id="at2-valve" onclick="at2ValveClick(event)" style="cursor:pointer;">
        <rect id="at2-pulse" x="229" y="1" width="62" height="40" rx="9" fill="none" stroke="#f44336" stroke-width="4"/>
        <rect id="at2-vbody" x="236" y="8" width="48" height="26" rx="5" fill="#f44336" stroke="#b71c1c" stroke-width="2"/>
        <text x="260" y="23" text-anchor="middle" font-size="9" fill="white" font-weight="700">VALVE</text>
        <text id="at2-vstate" x="260" y="31" text-anchor="middle" font-size="7.5" fill="#ff8a80">● OPEN</text>
      </g>
      <!-- Valve click hint (hidden after valve closed) -->
      <g id="at2-valve-hint" style="pointer-events:none;">
        <text x="260" y="52" text-anchor="middle" font-size="9" fill="#c62828" font-weight="700">▲ click to close</text>
      </g>

      <!-- Inlet -->
      <rect x="86" y="142" width="28" height="32" rx="3" fill="#78909c"/>
      <text x="100" y="161" text-anchor="middle" font-size="7.5" fill="white" font-weight="bold">IN</text>
      <!-- Outlet -->
      <rect x="406" y="142" width="28" height="32" rx="3" fill="#78909c"/>
      <text x="420" y="161" text-anchor="middle" font-size="7.5" fill="white" font-weight="bold">OUT</text>

      <!-- Stress mark at leak (revealed when found) -->
      <line id="at2-crack" x1="370" y1="90" x2="382" y2="82" stroke="#ef9a9a"
            stroke-width="3" stroke-linecap="round" opacity="0"/>

      <!-- Soap brush cursor -->
      <circle id="at2-brush" cx="-60" cy="-60" r="18" fill="rgba(224,247,250,0.55)"
              stroke="#0097a7" stroke-width="1.5" opacity="0" style="pointer-events:none;"/>
      <text id="at2-brush-icon" x="-60" y="-53" text-anchor="middle" font-size="15"
            opacity="0" style="pointer-events:none;">🧼</text>

      <!-- Bubbles at leak -->
      <g id="at2-bubbles" opacity="0" style="pointer-events:none;">
        <circle cx="376" cy="86" r="9" fill="rgba(255,235,238,0.75)" stroke="#e53935" stroke-width="1.5">
          <animate attributeName="r" values="9;14;9" dur="0.7s" repeatCount="indefinite"/>
        </circle>
        <circle cx="391" cy="78" r="5" fill="rgba(255,235,238,0.6)" stroke="#e53935" stroke-width="1">
          <animate attributeName="r" values="5;9;5" dur="0.9s" repeatCount="indefinite"/>
        </circle>
        <circle cx="362" cy="79" r="4" fill="rgba(255,235,238,0.6)" stroke="#e53935" stroke-width="1">
          <animate attributeName="r" values="4;7;4" dur="1.1s" repeatCount="indefinite"/>
        </circle>
        <text x="376" y="69" text-anchor="middle" font-size="9" fill="#b71c1c" font-weight="700">BUBBLES!</text>
      </g>

      <!-- Wrong-click flash -->
      <rect id="at2-flash" x="0" y="0" width="520" height="230" fill="rgba(220,50,50,0.35)"
            opacity="0" style="pointer-events:none;"/>
    </svg>
  </div>

  <div id="at2-status" style="margin-top:0.85rem;padding:0.75rem 1rem;border-radius:8px;
       font-size:0.875rem;font-weight:600;background:#e0f7fa;border:1.5px solid #80cbc4;
       color:#006064;line-height:1.5;">
    Step 1 — Click the <strong>red VALVE</strong> to close it before inflating the bag.
  </div>
  <div id="at2-soap-wrap" style="display:none;margin-top:0.75rem;">
    <button onclick="at2Soap()"
            style="background:#0097a7;color:white;border:none;padding:0.5rem 1.3rem;
                   border-radius:7px;font-size:0.875rem;font-weight:700;cursor:pointer;">
      🧼 Apply Soapy Water →
    </button>
  </div>
  <div id="at2-reset-wrap" style="display:none;margin-top:0.75rem;">
    <button onclick="at2Reset()"
            style="background:#e53935;color:white;border:none;padding:0.5rem 1.3rem;
                   border-radius:7px;font-size:0.875rem;font-weight:700;cursor:pointer;">
      ↺ Start Again
    </button>
  </div>
</div>
<style>
@keyframes at2pr{0%,100%{opacity:.8}50%{opacity:.1}}
@keyframes at2hb{0%,100%{opacity:1}50%{opacity:.2}}
#at2-pulse{animation:at2pr 1s ease-in-out infinite}
#at2-valve-hint{animation:at2hb 1s ease-in-out infinite}
</style>
<script>
(function(){
  var step=1, soapOn=false;
  var LX=376, LY=86, LR=32;
  var _ltx=-999, _lty=-999;
  var svg=document.getElementById('at2-svg');

  function svgPt(e){
    var r=svg.getBoundingClientRect();
    var sx=520/r.width, sy=230/r.height;
    var src=e.touches?e.touches[0]:e;
    return {x:(src.clientX-r.left)*sx, y:(src.clientY-r.top)*sy};
  }

  function status(msg,bg,bc,tc){
    var el=document.getElementById('at2-status');
    el.style.background=bg; el.style.borderColor=bc; el.style.color=tc;
    el.innerHTML=msg;
  }

  function stepStyle(n){
    [1,2,3].forEach(function(i){
      var el=document.getElementById('at2-s'+i);
      if(i<n){el.style.background='#2e7d32';el.style.color='white';el.style.fontWeight='700';}
      else if(i===n){el.style.background='#00838f';el.style.color='white';el.style.fontWeight='700';}
      else{el.style.background='#e0e0e0';el.style.color='#888';el.style.fontWeight='400';}
    });
  }

  window.at2ValveClick=function(e){
    e.stopPropagation();
    if(step!==1) return;
    document.getElementById('at2-pulse').style.display='none';
    document.getElementById('at2-valve-hint').style.display='none';
    document.getElementById('at2-vbody').setAttribute('fill','#2e7d32');
    document.getElementById('at2-vbody').setAttribute('stroke','#1b5e20');
    document.getElementById('at2-vstate').textContent='● CLOSED';
    document.getElementById('at2-vstate').setAttribute('fill','#a5d6a7');
    step=2; stepStyle(2);
    status('✅ Valve closed. Inflate the bag slightly, then click <strong>Apply Soapy Water</strong>.','#e8f5e9','#a5d6a7','#1b5e20');
    document.getElementById('at2-soap-wrap').style.display='block';
  };

  window.at2Soap=function(){
    if(step!==2) return;
    step=3; soapOn=true; stepStyle(3);
    document.getElementById('at2-soap-wrap').style.display='none';
    document.getElementById('at2-brush').setAttribute('opacity','1');
    document.getElementById('at2-brush-icon').setAttribute('opacity','1');
    svg.style.cursor='none';
    status('🧼 Move the soap over the bag surface — watch for <strong>bubbles</strong>, then click on them.','#e0f7fa','#0097a7','#006064');
  };

  function moveBrush(p){
    document.getElementById('at2-brush').setAttribute('cx',p.x);
    document.getElementById('at2-brush').setAttribute('cy',p.y);
    document.getElementById('at2-brush-icon').setAttribute('x',p.x);
    document.getElementById('at2-brush-icon').setAttribute('y',p.y+5);
    var d=Math.sqrt(Math.pow(p.x-LX,2)+Math.pow(p.y-LY,2));
    document.getElementById('at2-bubbles').setAttribute('opacity',d<LR?'1':'0');
    var dx=p.x-_ltx, dy=p.y-_lty;
    if(dx*dx+dy*dy>64){
      var tr=document.getElementById('at2-trail');
      var c=document.createElementNS('http://www.w3.org/2000/svg','circle');
      c.setAttribute('cx',p.x); c.setAttribute('cy',p.y); c.setAttribute('r','11');
      c.setAttribute('fill','rgba(224,247,250,0.45)');
      tr.appendChild(c);
      if(tr.childNodes.length>120) tr.removeChild(tr.firstChild);
      _ltx=p.x; _lty=p.y;
    }
  }

  window.at2Move=function(e){ if(soapOn&&step===3) moveBrush(svgPt(e)); };
  window.at2Touch=function(e){ if(soapOn&&step===3){e.preventDefault();moveBrush(svgPt(e));} };

  window.at2Click=function(e){
    if(step!==3||!soapOn) return;
    var p=svgPt(e);
    var onBag=Math.pow((p.x-260)/148,2)+Math.pow((p.y-150)/92,2)<=1&&p.y<172;
    if(!onBag) return;
    var d=Math.sqrt(Math.pow(p.x-LX,2)+Math.pow(p.y-LY,2));
    if(d<LR+12){
      // Correct!
      step=4; soapOn=false; svg.style.cursor='default';
      [1,2,3].forEach(function(i){var el=document.getElementById('at2-s'+i);el.style.background='#2e7d32';el.style.color='white';});
      document.getElementById('at2-brush').setAttribute('opacity','0');
      document.getElementById('at2-brush-icon').setAttribute('opacity','0');
      document.getElementById('at2-bubbles').setAttribute('opacity','1');
      document.getElementById('at2-crack').setAttribute('opacity','1');
      status('🎉 <strong>Leak found and marked!</strong> Dry the area, apply PVC sealant or glue, allow to cure fully, then re-inflate and re-test before installation.','#e8f5e9','#4caf50','#1b5e20');
      document.getElementById('at2-reset-wrap').style.display='block';
    } else {
      // Wrong — flash red and reset
      var f=document.getElementById('at2-flash');
      f.setAttribute('opacity','0.4');
      status('❌ Those are not bubbles — keep moving the soap. Any bubbles means a leak. Starting again…','#ffebee','#ef9a9a','#b71c1c');
      setTimeout(function(){f.setAttribute('opacity','0');at2Reset();},1800);
    }
  };

  window.at2Reset=function(){
    step=1; soapOn=false; svg.style.cursor='crosshair'; stepStyle(1);
    document.getElementById('at2-vbody').setAttribute('fill','#f44336');
    document.getElementById('at2-vbody').setAttribute('stroke','#b71c1c');
    document.getElementById('at2-vstate').textContent='● OPEN';
    document.getElementById('at2-vstate').setAttribute('fill','#ff8a80');
    ['at2-brush','at2-brush-icon','at2-bubbles','at2-crack'].forEach(function(id){
      document.getElementById(id).setAttribute('opacity','0');
    });
    document.getElementById('at2-soap-wrap').style.display='none';
    document.getElementById('at2-reset-wrap').style.display='none';
    var tr=document.getElementById('at2-trail');
    while(tr.firstChild) tr.removeChild(tr.firstChild);
    _ltx=-999; _lty=-999;
    document.getElementById('at2-pulse').style.display='';
    document.getElementById('at2-valve-hint').style.display='';
    status('Step 1 — Click the <strong>red VALVE</strong> to close it before inflating the bag.','#e0f7fa','#80cbc4','#006064');
  };
})();
</script>
```

---

### 2. Temperature Control

Temperature has a major impact on biogas production:

| Temperature Range | Effect |
|---|---|
| Below 10°C | Production stops |
| 10–29°C | Slow production |
| **30–40°C** (Mesophilic) | **Ideal range — most common** |
| 40–70°C (Thermophilic) | Higher yield, but sensitive to fluctuation |

Keeping temperature stable within 30–40°C helps maintain efficient, continuous gas production.

```{figure} ../assets/image25.png
:alt: Temperature effect on biogas production — chart showing optimal mesophilic range
:width: 80%

Biogas production rate across the temperature spectrum — the mesophilic range (30–40°C) offers the best balance of yield and stability.
```

```{raw} html
<div style="background:#f8fffe;border:2px solid #c8e6c9;border-radius:10px;padding:1.25rem;margin:1.25rem 0;">
  <h4 style="margin:0 0 0.4rem;color:#1b5e20;font-size:1rem;">🌡️ Temperature Explorer — try it!</h4>
  <p style="margin:0 0 0.9rem;color:#555;font-size:0.875rem;">Drag the slider to see how temperature affects biogas production rate.</p>
  <div style="display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap;">
    <div style="flex:0 0 auto;">
      <svg width="56" height="200" viewBox="0 0 56 200" style="display:block;overflow:visible;">
        <rect x="19" y="16" width="14" height="138" rx="7" fill="#e0e0e0" stroke="#bdbdbd" stroke-width="1"/>
        <rect x="20" y="126" width="12" height="28" rx="1" fill="#90caf9"/>
        <rect x="20" y="71"  width="12" height="55" rx="1" fill="#ffe082"/>
        <rect x="20" y="43"  width="12" height="28" rx="1" fill="#81c784"/>
        <rect x="20" y="16"  width="12" height="27" rx="1" fill="#ef9a9a"/>
        <rect x="23" id="tmerc" y="58" width="6" rx="3" height="96" fill="#e53935"/>
        <circle cx="26" cy="167" r="13" fill="#e53935"/>
        <line x1="33" y1="154" x2="39" y2="154" stroke="#9e9e9e" stroke-width="1.5"/>
        <text x="41" y="158" font-size="9" fill="#757575">0°C</text>
        <line x1="33" y1="126" x2="39" y2="126" stroke="#9e9e9e" stroke-width="1.5"/>
        <text x="41" y="130" font-size="9" fill="#757575">10°C</text>
        <line x1="33" y1="71"  x2="39" y2="71"  stroke="#9e9e9e" stroke-width="1.5"/>
        <text x="41" y="75"  font-size="9" fill="#757575">29°C</text>
        <line x1="33" y1="43"  x2="39" y2="43"  stroke="#9e9e9e" stroke-width="1.5"/>
        <text x="41" y="47"  font-size="9" fill="#757575">40°C</text>
        <line x1="33" y1="16"  x2="39" y2="16"  stroke="#9e9e9e" stroke-width="1.5"/>
        <text x="41" y="20"  font-size="9" fill="#757575">70°C</text>
      </svg>
    </div>
    <div style="flex:1;min-width:180px;">
      <div style="font-weight:700;margin-bottom:0.5rem;font-size:1rem;">Temperature: <span id="tdsp" style="color:#2e7d32;">35</span>°C</div>
      <input type="range" id="tslider" min="0" max="75" value="35" step="1"
             style="width:100%;cursor:pointer;accent-color:#2e7d32;height:6px;"/>
      <div id="tstat" style="margin-top:0.8rem;padding:0.55rem 0.85rem;border-radius:7px;font-size:0.875rem;font-weight:600;background:#e8f5e9;color:#1b5e20;border:1px solid #a5d6a7;">
        ✅ 30–40°C — optimal mesophilic range
      </div>
    </div>
  </div>
</div>
<script>
(function(){
  var sl=document.getElementById('tslider'),dp=document.getElementById('tdsp'),
      st=document.getElementById('tstat'),mc=document.getElementById('tmerc');
  function upd(){
    var t=+sl.value; dp.textContent=t;
    var top=Math.round(154-(t/70)*138); top=Math.max(16,Math.min(154,top));
    mc.setAttribute('y',top); mc.setAttribute('height',154-top);
    if(t<10){st.style.cssText='padding:0.55rem 0.85rem;border-radius:7px;font-size:0.875rem;font-weight:600;background:#e3f2fd;color:#0d47a1;border:1px solid #90caf9;';st.innerHTML='❄️ Below 10°C — microbes dormant, <strong>no gas production</strong>';}
    else if(t<30){st.style.cssText='padding:0.55rem 0.85rem;border-radius:7px;font-size:0.875rem;font-weight:600;background:#fff8e1;color:#e65100;border:1px solid #ffe082;';st.innerHTML='🐢 10–29°C — gas forming but <strong>slowly</strong>';}
    else if(t<=40){st.style.cssText='padding:0.55rem 0.85rem;border-radius:7px;font-size:0.875rem;font-weight:600;background:#e8f5e9;color:#1b5e20;border:1px solid #a5d6a7;';st.innerHTML='✅ 30–40°C — <strong>optimal mesophilic range</strong>';}
    else{st.style.cssText='padding:0.55rem 0.85rem;border-radius:7px;font-size:0.875rem;font-weight:600;background:#ffebee;color:#b71c1c;border:1px solid #ef9a9a;';st.innerHTML='🔥 40–70°C — thermophilic, higher yield but <strong>fragile</strong>';}
  }
  sl.addEventListener('input',upd); upd();
})();
</script>
```

---

### 3. Retention Time

**Retention time** is how long organic material stays inside the digester before it is pushed out. For maximum biogas yield, material needs to stay inside for around **40 days** at 30–40°C.

Things that affect retention time:
- Available digester size
- Temperature
- Type and amount of feedstock

```{note}
The more you feed the digester each day, the faster you push older material out — shortening retention time.
```

```{figure} ../assets/image15.png
:alt: Retention time diagram — material flow through the digester over 40 days
:width: 80%

Material moves through the digester over a 40-day retention period, emerging as nutrient-rich bio-slurry.
```

---

### 4. Carbon-to-Nitrogen (C/N) Ratio

The ideal C/N ratio for biogas production is **20–30** (20–30 parts carbon per 1 part nitrogen).

| Problem | Cause | Effect |
|---|---|---|
| C/N too high | Too much carbon | Very slow decomposition |
| C/N too low | Too much nitrogen | Harms microbes, reduces gas |

#### Common Feedstocks and Their C/N Ratios

| Feedstock | C/N Ratio | Notes |
|---|---|---|
| **Cow Dung** | 20–30 | ✅ Ideal — best feedstock |
| Pig Droppings | 13–20 | Good, may need balancing |
| Chicken Manure | 7–10 | High in nitrogen — mix with straw |
| Kitchen Food Waste | 13–16 | Good, but avoid bones or sharp objects |
| Human Faeces | 6–10 | Usable — extend retention time to 95 days |
| Sawdust | 200–500 | Very high carbon — must mix with nitrogen-rich material |

```{figure} ../assets/image10.png
:alt: C/N ratio infographic — feedstock comparison chart
:width: 85%

C/N ratios of common feedstocks — the ideal window of 20–30 is where cow dung sits naturally.
```

```{raw} html
<div style="background:#f8fffe;border:2px solid #c8e6c9;border-radius:10px;padding:1.25rem;margin:1.25rem 0;">
  <h4 style="margin:0 0 0.4rem;color:#1b5e20;font-size:1rem;">⚖️ C/N Ratio Explorer — click a feedstock</h4>
  <p style="margin:0 0 0.9rem;color:#555;font-size:0.875rem;">See where each material falls relative to the ideal 20–30 range.</p>
  <div id="cn-cards" style="display:flex;flex-wrap:wrap;gap:0.4rem;margin-bottom:1rem;"></div>
  <!-- Scale bar -->
  <div style="position:relative;margin-bottom:0.4rem;">
    <div style="display:flex;height:28px;border-radius:6px;overflow:hidden;border:1px solid #e0e0e0;">
      <div style="flex:0 0 13%;background:#ffcdd2;" title="0–10 — too low N"></div>
      <div style="flex:0 0 17%;background:#fff9c4;" title="10–19 — borderline"></div>
      <div style="flex:0 0 20%;background:#c8e6c9;border-left:2px solid #4caf50;border-right:2px solid #4caf50;" title="20–30 — ideal"></div>
      <div style="flex:0 0 50%;background:#ffe0b2;" title="30+ — too high C"></div>
    </div>
    <div style="display:flex;justify-content:space-between;font-size:9px;color:#9e9e9e;padding:2px 0;position:relative;">
      <span style="position:absolute;left:0;">0</span>
      <span style="position:absolute;left:13%;">10</span>
      <span style="position:absolute;left:30%;color:#2e7d32;font-weight:700;">20 ✓</span>
      <span style="position:absolute;left:50%;color:#2e7d32;font-weight:700;">30 ✓</span>
      <span style="position:absolute;left:70%;">50</span>
      <span style="position:absolute;right:0;">100+</span>
    </div>
    <!-- Pointer needle -->
    <div id="cn-needle" style="position:absolute;top:0;width:3px;height:28px;background:#1b5e20;border-radius:2px;left:36%;transition:left 0.35s ease;display:none;"></div>
  </div>
  <div id="cn-info" style="margin-top:1rem;padding:0.55rem 0.85rem;border-radius:7px;font-size:0.875rem;font-weight:600;background:#f5f5f5;color:#555;border:1px solid #e0e0e0;">
    Select a feedstock to explore its C/N ratio.
  </div>
</div>
<script>
(function(){
  var feedstocks=[
    {name:'Cow Dung',     cn:[20,30], color:'#2e7d32', advice:'✅ Ideal C/N ratio — perfect feedstock for biogas'},
    {name:'Pig Manure',   cn:[13,20], color:'#388e3c', advice:'👍 Good — slightly low nitrogen, may need mixing'},
    {name:'Chicken Manure',cn:[7,10], color:'#f57f17', advice:'⚠️ High nitrogen — mix with straw to raise C/N ratio'},
    {name:'Kitchen Waste',cn:[13,16], color:'#0288d1', advice:'👍 Good — avoid bones or sharp objects'},
    {name:'Human Waste',  cn:[6,10],  color:'#7b1fa2', advice:'⚠️ High nitrogen — extend retention time to 95 days'},
    {name:'Sawdust',      cn:[200,500],color:'#bf360c',advice:'❌ Very high carbon — must blend with nitrogen-rich material'},
  ];
  var container=document.getElementById('cn-cards');
  var needle=document.getElementById('cn-needle');
  var info=document.getElementById('cn-info');
  var active=null;
  // Scale: 0–100 maps to 0–100% of bar, sawdust capped at 100 for display
  function cnToPercent(cn){ return Math.min(100, (cn/100)*100)+'%'; }
  feedstocks.forEach(function(f,i){
    var btn=document.createElement('button');
    btn.textContent=f.name;
    btn.style.cssText='padding:0.35rem 0.7rem;border-radius:20px;border:2px solid '+f.color+';background:#fff;color:'+f.color+';font-weight:600;font-size:0.8rem;cursor:pointer;transition:all 0.15s;';
    btn.addEventListener('click',function(){
      if(active) active.style.background='#fff';
      btn.style.background=f.color; btn.style.color='#fff'; active=btn;
      var mid=(f.cn[0]+f.cn[1])/2;
      var pct=Math.min(96,Math.max(2,(mid/100)*100));
      needle.style.left=pct+'%'; needle.style.display='block';
      var bg='#e8f5e9',col='#1b5e20',brd='#a5d6a7';
      if(mid<15){bg='#ffebee';col='#b71c1c';brd='#ef9a9a';}
      else if(mid<20){bg='#fff8e1';col='#e65100';brd='#ffe082';}
      else if(mid>30){bg='#fff3e0';col='#bf360c';brd='#ffcc80';}
      info.style.cssText='margin-top:1rem;padding:0.55rem 0.85rem;border-radius:7px;font-size:0.875rem;font-weight:600;background:'+bg+';color:'+col+';border:1px solid '+brd+';';
      info.innerHTML='<strong>'+f.name+'</strong> — C/N ratio: '+f.cn[0]+(f.cn[1]>f.cn[0]?'–'+f.cn[1]:'')+' &nbsp;|&nbsp; '+f.advice;
    });
    container.appendChild(btn);
  });
})();
</script>
```

---

## Case Study: Feeding the Digester

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;max-width:100%;margin-bottom:1rem;">
  <iframe src="https://www.youtube.com/embed/60IjQEaZsZs"
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
</div>

---

## Common Types of Biodigester

Now that you understand the principles, here are the two most common digester designs:

| Feature | Bag Digester | Fixed Dome Digester |
|---|---|---|
| Cost | Low | Higher |
| Construction | Easy | Requires skilled technicians |
| Gas pressure | Low | High |
| Durability | Moderate | High |
| Best for | Small-scale / household | Larger-scale / long-term |

### The CREATIVenergie Expanding Bag Digester

This course focuses on the **CREATIVenergie Expanding Bag Digester** — a design that combines the strengths of both types.

How it works:
1. Organic waste (e.g. cow dung + water) enters a sealed plastic/rubber bag.
2. Microbes break it down, producing biogas, and the bag expands.
3. Gas is piped for cooking and other uses.
4. After 30–40 days, fully digested material flows out as **bio-slurry** — a valuable fertiliser.

---

## Session 1 Quiz

```{raw} html
<div class="quiz-container" id="quiz-session1">

  <div class="quiz-question" data-question="s1q1" data-type="mc" data-answer="b">
    <p><strong><span class="q-type-badge mc">MC</span> Q1. What does <em>anaerobic digestion</em> mean?</strong></p>
    <label><input type="radio" name="s1q1" value="a"> Breaking down organic matter <em>using</em> oxygen</label>
    <label><input type="radio" name="s1q1" value="b"> Breaking down organic matter <em>without</em> oxygen</label>
    <label><input type="radio" name="s1q1" value="c"> Burning organic matter to release gas</label>
    <label><input type="radio" name="s1q1" value="d"> Drying organic matter into fertiliser</label>
    <p class="feedback" id="s1q1-feedback"></p>
  </div>

  <div class="quiz-question" data-question="s1q2" data-type="tf" data-answer="false"
       data-hint="Microbes become dormant but recover when temperatures rise again.">
    <p><strong><span class="q-type-badge tf">True / False</span> Q2. If a digester cools below 10°C, the microbes die permanently and the digester must be restarted from scratch.</strong></p>
    <label><input type="radio" name="s1q2" value="true"> True</label>
    <label><input type="radio" name="s1q2" value="false"> False</label>
    <p class="feedback" id="s1q2-feedback"></p>
  </div>

  <div class="quiz-question" data-question="s1q3" data-type="mc" data-answer="c">
    <p><strong><span class="q-type-badge mc">MC</span> Q3. Which feedstock has the ideal C/N ratio (20–30) for biogas production?</strong></p>
    <label><input type="radio" name="s1q3" value="a"> Sawdust (C/N: 200–500)</label>
    <label><input type="radio" name="s1q3" value="b"> Chicken manure (C/N: 7–10)</label>
    <label><input type="radio" name="s1q3" value="c"> Cow dung (C/N: 20–30)</label>
    <label><input type="radio" name="s1q3" value="d"> Human faeces (C/N: 6–10)</label>
    <p class="feedback" id="s1q3-feedback"></p>
  </div>

  <div class="quiz-question" data-question="s1q4" data-type="fill"
       data-answer="airtightness|air tightness|anaerobic|airtight"
       data-hint="Think about what 'anaerobic' literally requires.">
    <p><strong><span class="q-type-badge fill">Fill in</span> Q4. Biogas production requires the complete absence of oxygen — this property of the digester is called ___.</strong></p>
    <input type="text" data-fill="s1q4" placeholder="Type your answer…">
    <p class="quiz-input-hint">One word. (Hint: the gas can only form in a sealed, oxygen-free environment.)</p>
    <p class="feedback" id="s1q4-feedback"></p>
  </div>

  <div class="quiz-question" data-question="s1q5" data-type="number"
       data-answer="35" data-tolerance="5"
       data-hint="The mesophilic sweet spot is 30–40°C — the midpoint is 35°C.">
    <p><strong><span class="q-type-badge num">Number</span> Q5. What is the midpoint of the ideal mesophilic temperature range for biogas production? (°C)</strong></p>
    <input type="number" data-number="s1q5" placeholder="Enter °C" min="0" max="100">
    <p class="quiz-input-hint">Acceptable range: 30–40°C. Enter the midpoint value.</p>
    <p class="feedback" id="s1q5-feedback"></p>
  </div>

  <div class="quiz-question" data-question="s1q6" data-type="number"
       data-answer="40" data-tolerance="2"
       data-hint="The retention time pipeline diagram shows 40 days.">
    <p><strong><span class="q-type-badge num">Number</span> Q6. How many days does cow dung typically need to stay in the digester for optimal biogas production?</strong></p>
    <input type="number" data-number="s1q6" placeholder="Enter days" min="1" max="365">
    <p class="quiz-input-hint">Enter the retention time in days.</p>
    <p class="feedback" id="s1q6-feedback"></p>
  </div>

  <div class="quiz-question" data-question="s1q7" data-type="match"
       data-answer="cow-dung:cn-ideal,chicken:cn-low,sawdust:cn-high"
       data-hint="Cow dung = 20–30 (ideal), Chicken manure = 7–10 (too much N), Sawdust = 200–500 (too much C).">
    <p><strong><span class="q-type-badge match">Match</span> Q7. Drag each feedstock to its correct C/N ratio category.</strong></p>
    <p style="font-size:0.85rem;color:#666;margin-top:0;">Drag items from the right column and drop them onto the matching category on the left.</p>
    <div style="display:flex;gap:1rem;margin-top:0.5rem;flex-wrap:wrap;">
      <ul class="match-left" style="list-style:none;padding:0;margin:0;flex:1;min-width:150px;">
        <li data-id="cow-dung"
            style="padding:0.5rem 0.75rem;margin:0.35rem 0;border:2px dashed #a5d6a7;border-radius:8px;min-height:2.4rem;background:#f9fffe;">
          🌿 Cow Dung
        </li>
        <li data-id="chicken"
            style="padding:0.5rem 0.75rem;margin:0.35rem 0;border:2px dashed #ffcc80;border-radius:8px;min-height:2.4rem;background:#fffdf5;">
          🐔 Chicken Manure
        </li>
        <li data-id="sawdust"
            style="padding:0.5rem 0.75rem;margin:0.35rem 0;border:2px dashed #ffab91;border-radius:8px;min-height:2.4rem;background:#fff8f6;">
          🪵 Sawdust
        </li>
      </ul>
      <ul class="match-right" style="list-style:none;padding:0;margin:0;flex:1;min-width:150px;">
        <li data-id="cn-ideal"
            style="padding:0.5rem 0.75rem;margin:0.35rem 0;border:1px solid #4caf50;border-radius:8px;background:#e8f5e9;cursor:grab;font-weight:600;font-size:0.875rem;">
          C/N 20–30 — Ideal
        </li>
        <li data-id="cn-low"
            style="padding:0.5rem 0.75rem;margin:0.35rem 0;border:1px solid #ef9a9a;border-radius:8px;background:#ffebee;cursor:grab;font-weight:600;font-size:0.875rem;">
          C/N 7–10 — Too nitrogen-rich
        </li>
        <li data-id="cn-high"
            style="padding:0.5rem 0.75rem;margin:0.35rem 0;border:1px solid #ffcc80;border-radius:8px;background:#fff3e0;cursor:grab;font-weight:600;font-size:0.875rem;">
          C/N 200–500 — Too carbon-rich
        </li>
      </ul>
    </div>
    <p class="feedback" id="s1q7-feedback"></p>
  </div>

  <button class="quiz-check-btn"
    onclick="checkQuiz('session1', ['s1q1','s1q2','s1q3','s1q4','s1q5','s1q6','s1q7'])">
    Check My Answers
  </button>

  <div id="session1-result"></div>
  <div id="session1-submit-section" class="quiz-submit-section" style="display:none;">
    <p>Submit your score to receive credit for this session:</p>
    <a id="session1-form-link" href="#" target="_blank" class="quiz-submit-btn">
      Submit Score via Google Forms →
    </a>
  </div>
</div>
```

---

## Summary

The four key principles of biogas production are:
1. **Airtightness** — no oxygen allowed
2. **Temperature** — keep it 30–40°C
3. **Retention time** — 40 days for optimal breakdown
4. **C/N Ratio** — aim for 20–30; cow dung is ideal

In the next session we will learn how to **size** your digester correctly.

Next: **[Session 2: Sizing](session2-sizing)**
