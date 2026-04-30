# Session 4: Safety

## Learning Objectives

By the end of this session, you will:

1. Understand the key risks associated with operating a biogas plant.
2. Know the safety precautions to prevent hazards.
3. Be aware of the built-in safety features of the CREATIVenergie system.
4. Have good operational habits to ensure safe and effective use.

---

## Introduction

Like electricity, bottled gas, and wood fires, biogas **can be dangerous if not handled with care**. By understanding the risks and following the precautions in this session, you can use biogas safely and effectively.

```{figure} ../assets/safety-overview.png
:alt: Session 4 Safety overview infographic — risks, mitigations, EAT acronym, and safe stove use
:width: 100%

Overview of the key safety topics in this session: fire and explosion risks, asphyxiation, toxic gas (H₂S), disease risk, keeping others safe, the EAT daily checklist, and safe stove use.
```

---

## Main Risks and Mitigations

### 🔥 Fire or Explosion Risk

Biogas contains methane, which is **highly flammable** and explosive under certain conditions.

| Precaution | Requirement |
|---|---|
| Distance from buildings | At least **3 m** |
| Exclusion zone | **3 m** — no ignition sources |
| No smoking / fires / electrical equipment | Within **5 m** of the digester |
| Metal tools | Avoid near the plant (spark risk) |

### 😮 Asphyxiation Risk

Biogas can displace oxygen, creating a risk of suffocation.

- Keep the digester **outside and well ventilated**.
- Do **not** cover the inlet or outlet with plastic sheeting.
- Install a **1 m fenced exclusion zone** to prevent access by children and animals.

### ☠️ Toxic Gas Risk (H₂S)

Biogas contains small amounts of **hydrogen sulfide (H₂S)**, which is toxic and corrosive to metals.

- Ensure **good ventilation** around the plant.
- **Never enter the digester** — even if recently emptied. Gases linger inside.
- Use a **H₂S filter** (steel wool works as a cheap option) in the pipe before the stove. Replace monthly.

### 🦠 Disease Risk

The slurry contains bacteria that may carry disease.

- Avoid direct contact with digester contents.
- **Use gloves** when loading dung.
- **Wash hands thoroughly** after working with the system.
- Protect cuts and scratches.
- **Keep children away** from the plant.

```{danger}
**Under no circumstances should you enter the digester.** This is highly dangerous — risk of gas poisoning (H₂S), asphyxiation from lack of oxygen, and infection from slurry. People have died from entering digesters.
```

### 👥 Keeping Others Safe

Once built, make sure others are not harmed:

1. **Cover the inlet and outlet** — they are deep and people could fall in and drown.
2. Put a **fence around the digester**.
3. **Cover the digester bag** to prevent damage and puncturing.
4. Check valves operate correctly regularly.
5. Ensure the **cookstove is in good repair** and not leaking.
6. If you detect a leak (digester depressurising or rotten egg smell), **get it fixed immediately**.

---

```{raw} html
<div style="background:#fff8e1;border:2px solid #ffcc80;border-radius:10px;padding:1.25rem;margin:1.25rem 0;">
  <h4 style="margin:0 0 0.5rem;color:#e65100;font-size:1rem;">⚠️ Safety Zone Diagram — click each zone</h4>
  <p style="margin:0 0 1rem;font-size:0.875rem;color:#666;">Each coloured ring represents a different safety requirement around the digester.</p>
  <div style="display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap;">
    <div style="flex:0 0 auto;">
      <svg width="260" height="260" viewBox="0 0 260 260" style="display:block;">
        <circle cx="130" cy="130" r="120" fill="#ffebee" stroke="#ef9a9a" stroke-width="2" onclick="szZone(3)" style="cursor:pointer;"/>
        <circle cx="130" cy="130" r="75"  fill="#fff8e1" stroke="#ffe082" stroke-width="2" onclick="szZone(2)" style="cursor:pointer;"/>
        <circle cx="130" cy="130" r="40"  fill="#e8f5e9" stroke="#a5d6a7" stroke-width="2" onclick="szZone(1)" style="cursor:pointer;"/>
        <ellipse cx="130" cy="130" rx="22" ry="14" fill="#4e342e" style="pointer-events:none;"/>
        <text x="130" y="134" text-anchor="middle" font-size="9" fill="white" font-weight="bold" style="pointer-events:none;">DIGESTER</text>
        <text x="130" y="99"  text-anchor="middle" font-size="10" fill="#1b5e20" font-weight="700" style="pointer-events:none;">1 m</text>
        <text x="130" y="63"  text-anchor="middle" font-size="10" fill="#e65100" font-weight="700" style="pointer-events:none;">3 m</text>
        <text x="130" y="18"  text-anchor="middle" font-size="10" fill="#b71c1c" font-weight="700" style="pointer-events:none;">5 m</text>
      </svg>
    </div>
    <div style="flex:1;min-width:180px;">
      <div id="sz-info" style="padding:0.7rem 0.9rem;border-radius:7px;font-size:0.875rem;background:#f5f5f5;border:1px solid #e0e0e0;color:#555;line-height:1.5;">
        👆 Click a zone to see its rules.
      </div>
    </div>
  </div>
</div>
<script>
function szZone(n){
  var el=document.getElementById('sz-info');
  var d=[
    {bg:'#e8f5e9',c:'#1b5e20',b:'#a5d6a7',h:'<strong>🟢 1 m — Exclusion Zone</strong><br>Fence off this area. No children or animals. Prevents falls into the open inlet/outlet and physical damage to the bag.'},
    {bg:'#fff8e1',c:'#e65100',b:'#ffe082',h:'<strong>🟡 3 m — No Buildings</strong><br>The digester must be at least 3 m from any building. Gas leaks near walls can accumulate indoors and create an explosion hazard.'},
    {bg:'#ffebee',c:'#b71c1c',b:'#ef9a9a',h:'<strong>🔴 5 m — No Ignition Sources</strong><br>No smoking, open fires, or electrical equipment within 5 m. Avoid metal tools that could spark near the digester.'},
  ][n-1];
  el.style.cssText='padding:0.7rem 0.9rem;border-radius:7px;font-size:0.875rem;line-height:1.5;background:'+d.bg+';border:1px solid '+d.b+';color:'+d.c+';';
  el.innerHTML=d.h;
}
</script>
```

```{raw} html
<div style="background:#fff3e0;border:2px solid #ffcc80;border-radius:12px;padding:1.5rem;margin:1.5rem 0;font-family:sans-serif;">
  <h4 style="margin:0 0 0.2rem;color:#e65100;font-size:1.05rem;">🔍 Spot the Hazards — click each marker to reveal the risk</h4>
  <p style="margin:0 0 0.5rem;color:#555;font-size:0.85rem;">Six hazards are hidden in this scene. Click the orange circles to find them.</p>
  <div style="font-size:0.82rem;color:#e65100;margin-bottom:0.75rem;font-weight:600;">Found: <span id="hz-count">0</span> / 6</div>

  <div style="max-width:540px;margin:0 auto;">
  <svg viewBox="0 0 540 285" style="width:100%;display:block;border-radius:8px;">
    <!-- Field -->
    <rect width="540" height="285" fill="#b2dfdb"/>
    <!-- Ground strip -->
    <rect x="0" y="210" width="540" height="75" fill="#a5d6a7"/>

    <!-- House -->
    <rect x="22" y="95" width="100" height="90" fill="#90a4ae" rx="4" stroke="#607d8b" stroke-width="1.5"/>
    <polygon points="18,95 72,55 126,95" fill="#78909c" stroke="#546e7a" stroke-width="1"/>
    <rect x="30" y="110" width="26" height="20" fill="#fff9c4" rx="2" stroke="#f9a825" stroke-width="1"/>
    <rect x="78" y="152" width="20" height="33" fill="#8d6e63" rx="2"/>
    <!-- Stove in kitchen -->
    <rect x="32" y="145" width="30" height="20" fill="#546e7a" rx="2"/>
    <circle cx="40" cy="151" r="4" fill="#78909c"/>
    <circle cx="52" cy="151" r="4" fill="#78909c"/>
    <text x="72" y="193" text-anchor="middle" font-size="8.5" fill="#37474f" font-weight="600">house</text>

    <!-- Gas pipe -->
    <line x1="122" y1="163" x2="252" y2="168" stroke="#424242" stroke-width="3" stroke-linecap="round"/>
    <circle cx="150" cy="164" r="3.5" fill="#616161"/>
    <circle cx="205" cy="166" r="3.5" fill="#616161"/>
    <!-- Gas valve -->
    <rect x="168" y="158" width="13" height="10" rx="2" fill="#c62828"/>
    <text x="174" y="153" text-anchor="middle" font-size="7" fill="#444">valve</text>

    <!-- Digester -->
    <ellipse cx="355" cy="168" rx="82" ry="58" fill="#4db6ac" stroke="#00796b" stroke-width="2.5"/>
    <text x="355" y="162" text-anchor="middle" font-size="11" fill="white" font-weight="700">DIGESTER</text>
    <text x="355" y="177" text-anchor="middle" font-size="9" fill="#e0f7fa">gas bag</text>

    <!-- Inlet -->
    <ellipse cx="283" cy="210" rx="10" ry="6" fill="#4e342e" stroke="#3e2723" stroke-width="1.5"/>
    <text x="283" y="223" text-anchor="middle" font-size="7.5" fill="#4e342e">inlet</text>

    <!-- Trees -->
    <circle cx="490" cy="75" r="24" fill="#81c784" stroke="#4caf50" stroke-width="1"/>
    <rect cx="490" y="93" x="486" width="8" height="14" fill="#795548"/>
    <circle cx="510" cy="245" r="18" fill="#81c784" stroke="#4caf50" stroke-width="1"/>
    <rect cx="510" y="261" x="506" width="7" height="11" fill="#795548"/>

    <!-- HAZARD 1: Open inlet -->
    <g id="hz-g0" onclick="hzClick(0)" style="cursor:pointer;">
      <circle cx="283" cy="208" r="15" fill="#f44336" opacity="0.88">
        <animate attributeName="r" values="15;18;15" dur="2s" repeatCount="indefinite"/>
      </circle>
      <text x="283" y="213" text-anchor="middle" font-size="13" style="pointer-events:none;">⚠️</text>
    </g>

    <!-- HAZARD 2: Child on bag -->
    <g id="hz-g1" onclick="hzClick(1)" style="cursor:pointer;">
      <text x="370" y="118" text-anchor="middle" font-size="16" style="pointer-events:none;">👦</text>
      <circle cx="370" cy="110" r="15" fill="#ff9800" opacity="0.82">
        <animate attributeName="r" values="15;18;15" dur="2.3s" repeatCount="indefinite"/>
      </circle>
      <text x="370" y="115" text-anchor="middle" font-size="13" style="pointer-events:none;">⚠️</text>
    </g>

    <!-- HAZARD 3: Smoking near digester -->
    <g id="hz-g2" onclick="hzClick(2)" style="cursor:pointer;">
      <text x="450" y="183" text-anchor="middle" font-size="16" style="pointer-events:none;">🚬</text>
      <circle cx="450" cy="195" r="15" fill="#f44336" opacity="0.88">
        <animate attributeName="r" values="15;18;15" dur="1.8s" repeatCount="indefinite"/>
      </circle>
      <text x="450" y="200" text-anchor="middle" font-size="13" style="pointer-events:none;">⚠️</text>
    </g>

    <!-- HAZARD 4: Entering digester -->
    <g id="hz-g3" onclick="hzClick(3)" style="cursor:pointer;">
      <text x="295" y="160" text-anchor="middle" font-size="15" style="pointer-events:none;">🧗</text>
      <circle cx="283" cy="168" r="15" fill="#b71c1c" opacity="0.9">
        <animate attributeName="r" values="15;18;15" dur="1.6s" repeatCount="indefinite"/>
      </circle>
      <text x="283" y="173" text-anchor="middle" font-size="13" style="pointer-events:none;">⚠️</text>
    </g>

    <!-- HAZARD 5: Gas before match at stove -->
    <g id="hz-g4" onclick="hzClick(4)" style="cursor:pointer;">
      <circle cx="55" cy="148" r="15" fill="#f44336" opacity="0.88">
        <animate attributeName="r" values="15;18;15" dur="2.1s" repeatCount="indefinite"/>
      </circle>
      <text x="55" y="153" text-anchor="middle" font-size="13" style="pointer-events:none;">⚠️</text>
    </g>

    <!-- HAZARD 6: No fence around digester -->
    <g id="hz-g5" onclick="hzClick(5)" style="cursor:pointer;">
      <circle cx="355" cy="240" r="15" fill="#ff9800" opacity="0.85">
        <animate attributeName="r" values="15;18;15" dur="2.4s" repeatCount="indefinite"/>
      </circle>
      <text x="355" y="245" text-anchor="middle" font-size="13" style="pointer-events:none;">⚠️</text>
    </g>

    <!-- Scene labels -->
    <text x="355" y="268" text-anchor="middle" font-size="8" fill="#555">no fence visible</text>
    <text x="450" y="215" text-anchor="middle" font-size="8" fill="#555">5 m zone</text>
    <text x="55" y="168" text-anchor="middle" font-size="8" fill="#555">stove</text>
    <text x="295" y="190" text-anchor="middle" font-size="8" fill="#555">digester edge</text>
  </svg>
  </div>

  <div id="hz-info" style="margin-top:0.85rem;padding:0.8rem 1rem;border-radius:8px;font-size:0.875rem;background:#fff8e1;border:1.5px solid #ffcc80;color:#555;line-height:1.6;">
    👆 Click any pulsing marker on the diagram above to reveal the hazard.
  </div>
</div>
<script>
var hzData=[
  {t:'⚠️ Open inlet — fall risk',
   b:'The inlet and outlet pits are deep. Without covers, people or animals can fall in and drown. Always keep them covered when not loading the digester, and fence off the area.',
   bg:'#fff8e1',bc:'#ffb300',tc:'#e65100'},
  {t:'⚠️ Child on digester bag — damage and injury',
   b:'Children sitting or playing on the gas bag can puncture it, causing dangerous gas leaks. They are also exposed to slurry and toxic gas. Enforce a strict 1 m exclusion zone — no children near the digester.',
   bg:'#fce4ec',bc:'#ef9a9a',tc:'#b71c1c'},
  {t:'⚠️ Smoking within 5 m — explosion risk',
   b:'Methane is highly flammable. A cigarette, open flame, or spark within 5 m can ignite escaping gas and cause an explosion. No smoking, fires, or electrical equipment allowed within the 5 m zone.',
   bg:'#ffebee',bc:'#ef9a9a',tc:'#c62828'},
  {t:'⚠️ Entering the digester — LIFE-THREATENING',
   b:'Never enter the digester under any circumstances — even when recently emptied. Pockets of H₂S (hydrogen sulfide) and CO₂ remain inside. H₂S is toxic at very low concentrations. CO₂ causes asphyxiation. People have died doing this.',
   bg:'#b71c1c',bc:'#7f0000',tc:'white'},
  {t:'⚠️ Gas on before match — fire risk',
   b:'Always light the match first, then open the gas. Never turn gas on to an unlit burner — methane accumulates in the air instantly. When the match is finally applied, the gas-air mixture can ignite explosively.',
   bg:'#fff3e0',bc:'#ffb74d',tc:'#bf360c'},
  {t:'⚠️ No exclusion zone — unauthorized access',
   b:'Without a fence, children and animals can access the digester freely — risking falls into the inlet, puncturing the bag, or exposure to slurry. Install a 1 m fence around the digester before commissioning.',
   bg:'#fff8e1',bc:'#ffe082',tc:'#e65100'},
];
var hzFound=0;
function hzClick(i){
  var g=document.getElementById('hz-g'+i);
  if(!g.dataset.found){
    g.dataset.found='1';
    hzFound++;
    document.getElementById('hz-count').textContent=hzFound;
    var circ=g.querySelector('circle');
    circ.setAttribute('fill','#2e7d32');
    circ.setAttribute('opacity','0.9');
    var warn=g.querySelector('text');
    warn.textContent='✅';
    circ.querySelectorAll('animate').forEach(function(a){a.remove();});
  }
  var d=hzData[i];
  var el=document.getElementById('hz-info');
  el.style.background=d.bg; el.style.borderColor=d.bc; el.style.color=d.tc;
  el.innerHTML='<strong>'+d.t+'</strong><br>'+d.b;
}
</script>
```

---

## Safety Features of the CREATIVenergie System

| Feature | Purpose |
|---|---|
| **Biogas Plant Cover** | Protects against physical damage and UV exposure |
| **Main Gas Valve** | Quick gas shutoff — **must be shut off at night** and between each use |
| **Bubbler** | Prevents flame flashback from reaching the digester |
| **Pressure Release** | Excess slurry overflows through inlet/outlet at high pressure — prevents dangerous over-pressurisation |
| **Inlet/Outlet Covers** | Prevents people and animals falling in |

```{figure} ../assets/safety2.png
:alt: Safety features and safe stove use guide — gas valve, bubbler, H2S filter, and stove lighting procedure
:width: 100%

Key safety components of the CREATIVenergie system and the correct procedure for safe stove use.
```

---

## Daily Safe Operation: The EAT Acronym

To ensure safe operation, remember **EAT**:

- **E** — Establish a **1 m exclusion zone** around the plant
- **A** — Assess the system regularly for **damage or leaks**
- **T** — Turn off the **gas valve after use**

```{raw} html
<div style="background:#f8fffe;border:2px solid #c8e6c9;border-radius:10px;padding:1.25rem;margin:1rem 0;">
  <h4 style="margin:0 0 0.75rem;color:#1b5e20;font-size:1rem;">🧠 EAT — Daily Safety Checklist</h4>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:0.75rem;">
    <div style="background:#e8f5e9;border:2px solid #4caf50;border-radius:8px;padding:0.9rem;text-align:center;">
      <div style="font-size:2.5rem;font-weight:900;color:#1b5e20;line-height:1;">E</div>
      <div style="font-weight:700;color:#1b5e20;margin:0.3rem 0 0.2rem;">Establish</div>
      <div style="font-size:0.8rem;color:#2e7d32;">Fence off a 1 m exclusion zone — no children or animals</div>
    </div>
    <div style="background:#fff3e0;border:2px solid #ff9800;border-radius:8px;padding:0.9rem;text-align:center;">
      <div style="font-size:2.5rem;font-weight:900;color:#e65100;line-height:1;">A</div>
      <div style="font-weight:700;color:#e65100;margin:0.3rem 0 0.2rem;">Assess</div>
      <div style="font-size:0.8rem;color:#bf360c;">Check regularly for damage, leaks, or rotten-egg smell</div>
    </div>
    <div style="background:#ffebee;border:2px solid #f44336;border-radius:8px;padding:0.9rem;text-align:center;">
      <div style="font-size:2.5rem;font-weight:900;color:#b71c1c;line-height:1;">T</div>
      <div style="font-weight:700;color:#b71c1c;margin:0.3rem 0 0.2rem;">Turn Off</div>
      <div style="font-size:0.8rem;color:#7f0000;">Shut the gas valve at night and after every single use</div>
    </div>
  </div>
</div>
```

---

```{raw} html
<div style="background:#fff8e1;border:2px solid #ffcc80;border-radius:10px;padding:1.25rem;margin:1.25rem 0;">
  <h4 style="margin:0 0 0.5rem;color:#e65100;font-size:1rem;">🔍 Suspected Gas Leak? Follow these steps</h4>
  <p style="margin:0 0 1rem;font-size:0.875rem;color:#666;">Click each step as you complete it. If you find a leak, follow the action below.</p>
  <div id="leak-steps" style="display:flex;flex-direction:column;gap:0.6rem;"></div>
  <div id="leak-verdict" style="display:none;margin-top:1rem;padding:0.75rem 1rem;border-radius:8px;font-size:0.9rem;"></div>
</div>
<script>
(function(){
  var steps=[
    {icon:'👃',label:'Smell check',detail:'Step outside the kitchen. A rotten-egg smell near the digester or pipes means H₂S — a gas leak warning sign.'},
    {icon:'👁️',label:'Visual check',detail:'Is the digester bag fully inflated? A flat or partially deflated bag means gas is escaping somewhere.'},
    {icon:'🔴',label:'Close the gas valve',detail:'Turn the main shutoff valve to the OFF position. Do not light any flames until the leak is found and fixed.'},
    {icon:'🧼',label:'Make soapy water',detail:'Mix 1 teaspoon of dish soap in 500 ml of water in a cup or bowl.'},
    {icon:'💧',label:'Test the digester fittings',detail:'Brush or pour soapy water onto all pipe entry/exit points on the bag. Watch closely — bubbles forming means a leak here.'},
    {icon:'🔗',label:'Test all pipe joints',detail:'Work along the full gas pipe from the digester to the stove, checking every joint, union, and valve. Mark any spot that bubbles.'},
    {icon:'🫧',label:'Test the bubbler',detail:'Apply soapy water around the bubbler water seal and the pipe connections at each end.'},
  ];
  var done={};
  var container=document.getElementById('leak-steps');
  var verdict=document.getElementById('leak-verdict');

  steps.forEach(function(s,i){
    var row=document.createElement('div');
    row.id='lstep-'+i;
    row.style.cssText='display:flex;align-items:flex-start;gap:0.75rem;padding:0.6rem 0.8rem;border-radius:8px;border:1px solid #ffe082;background:#fffde7;cursor:pointer;transition:background 0.2s;';
    row.innerHTML='<span style="font-size:1.3rem;line-height:1.4;flex-shrink:0;">'+s.icon+'</span>'
      +'<div><div style="font-weight:700;font-size:0.875rem;color:#e65100;">'+s.label+'</div>'
      +'<div style="font-size:0.8rem;color:#555;margin-top:0.15rem;">'+s.detail+'</div></div>'
      +'<span id="lstick-'+i+'" style="margin-left:auto;font-size:1.1rem;line-height:1.4;flex-shrink:0;">⬜</span>';
    row.addEventListener('click',function(){
      done[i]=!done[i];
      document.getElementById('lstick-'+i).textContent=done[i]?'✅':'⬜';
      row.style.background=done[i]?'#f1f8e9':'#fffde7';
      row.style.borderColor=done[i]?'#a5d6a7':'#ffe082';
      checkAll();
    });
    container.appendChild(row);
  });

  function checkAll(){
    var n=Object.values(done).filter(Boolean).length;
    if(n===steps.length){
      verdict.style.display='block';
      verdict.style.cssText='display:block;margin-top:1rem;padding:0.75rem 1rem;border-radius:8px;font-size:0.875rem;background:#ffebee;border:1px solid #ef9a9a;color:#b71c1c;';
      verdict.innerHTML='<strong>Leak found?</strong> Mark the spot, dry the area, apply PVC glue or sealant, allow to cure fully, then re-inflate and re-test. <strong>No leak found?</strong> Re-open the valve — the bag may have been flat due to cold temperatures or low feed. Monitor over the next 24 hours.';
    }
  }
})();
</script>
```

---

## Safe Use of a Gas Stove

For those new to gas cooking:

1. Light a **match first**, then turn on the gas.
2. Ensure the **flame ignites properly**.
3. Adjust to a **blue, steady flame** — no smell or excessive noise.
4. Turn the gas **off after cooking**.

---

## 🎯 Practice: Identify the Hazards

```{raw} html
<div style="background:#fff8e1;border:2px solid #ffe082;border-radius:12px;padding:1.5rem;margin:1.5rem 0;font-family:sans-serif;">
  <h4 style="margin:0 0 0.2rem;color:#e65100;font-size:1.05rem;">⚠️ Click on the Hazards</h4>
  <p style="margin:0 0 1.1rem;color:#555;font-size:0.85rem;">Six situations are shown below. Click the ones you think are <strong>hazardous</strong> — then check your answers.</p>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:0.75rem;margin-bottom:1rem;" id="hz-cards"></div>
  <button onclick="hzCheck()" style="background:#e65100;color:white;border:none;padding:0.55rem 1.4rem;border-radius:7px;font-size:0.95rem;font-weight:700;cursor:pointer;margin-bottom:0.75rem;">Check My Answers</button>
  <div id="hz-result" style="display:none;padding:0.75rem 1rem;border-radius:8px;font-size:0.875rem;"></div>
</div>
<script>
(function(){
  var situations=[
    {icon:'🚬',label:'Someone smokes a cigarette 4 m from the digester.',hazard:true,
     explain:'HAZARD — Smoking within 5 m risks igniting escaping methane. The exclusion zone for ignition sources is 5 m.'},
    {icon:'🧤',label:'You wear rubber gloves when loading dung into the inlet.',hazard:false,
     explain:'SAFE — Wearing gloves is the correct practice when handling slurry. It protects against disease.'},
    {icon:'⛔',label:'You enter the digester to inspect it after emptying.',hazard:true,
     explain:'HAZARD — Never enter the digester. H₂S and CO₂ linger inside and can kill within seconds.'},
    {icon:'🔒',label:'You shut the main gas valve after finishing cooking.',hazard:false,
     explain:'SAFE — Turning off the valve after every use is exactly the "T" in EAT.'},
    {icon:'👦',label:'A child sits on top of the gas bag while you work nearby.',hazard:true,
     explain:'HAZARD — Children must not access the digester area. They can puncture the bag or fall into the inlet.'},
    {icon:'🔥',label:'You light a match first, then slowly open the gas valve.',hazard:false,
     explain:'SAFE — Correct procedure: always light the match before opening the gas.'},
    {icon:'🕳️',label:'You leave the inlet open and uncovered overnight.',hazard:true,
     explain:'HAZARD — An uncovered inlet is a fall risk for people and animals, and allows pests to enter.'},
    {icon:'💧',label:'You mix dung 1:1 with water before adding it each day.',hazard:false,
     explain:'SAFE — The 1:1 dung-to-water mixing ratio is the correct feeding procedure.'},
  ];

  var selected={};
  var container=document.getElementById('hz-cards');
  situations.forEach(function(s,i){
    var card=document.createElement('div');
    card.id='hzc-'+i;
    card.style.cssText='background:white;border:2px solid #ffe082;border-radius:8px;padding:0.85rem;cursor:pointer;transition:all 0.2s;';
    card.innerHTML='<div style="font-size:1.8rem;margin-bottom:0.4rem;">'+s.icon+'</div>'
      +'<div style="font-size:0.85rem;color:#333;line-height:1.5;">'+s.label+'</div>';
    card.addEventListener('click',function(){
      selected[i]=!selected[i];
      card.style.background=selected[i]?'#ffebee':'white';
      card.style.borderColor=selected[i]?'#f44336':'#ffe082';
    });
    container.appendChild(card);
  });

  window.hzCheck=function(){
    var correct=0;
    situations.forEach(function(s,i){
      var card=document.getElementById('hzc-'+i);
      var picked=!!selected[i];
      var right=picked===s.hazard;
      if(right) correct++;
      card.style.background=s.hazard?'#ffebee':'#e8f5e9';
      card.style.borderColor=s.hazard?'#f44336':'#4caf50';
      var existing=card.querySelector('.hz-explain');
      if(!existing){
        var exp=document.createElement('div');
        exp.className='hz-explain';
        exp.style.cssText='margin-top:0.5rem;font-size:0.78rem;padding:0.35rem 0.5rem;border-radius:4px;'
          +(right?'background:#e8f5e9;color:#1b5e20;':'background:#fff3e0;color:#bf360c;');
        exp.innerHTML=(right?'✅ ':'❌ ')+s.explain;
        card.appendChild(exp);
      }
    });
    var r=document.getElementById('hz-result');
    r.style.display='block';
    var pct=Math.round(correct/situations.length*100);
    r.style.cssText='display:block;padding:0.75rem 1rem;border-radius:8px;font-size:0.9rem;font-weight:600;'
      +(correct>=6?'background:#e8f5e9;border:1.5px solid #4caf50;color:#1b5e20;':'background:#fff3e0;border:1.5px solid #ffb74d;color:#e65100;');
    r.textContent=correct+' / '+situations.length+' correct ('+pct+'%). '
      +(correct===situations.length?'Excellent — you identified every hazard and safe action correctly!'
        :'Review the highlighted cards above — the green cards are the safe actions, red are the hazards.');
  };
})();
</script>
```

---

## Session 4 Quiz

```{raw} html
<div class="quiz-container" id="quiz-session4">

  <div class="quiz-question" data-question="s4q1" data-type="fill"
       data-answer="eat"
       data-hint="The acronym stands for three actions: E____, A____, T____.">
    <p><strong><span class="q-type-badge fill">Fill in</span> Q1. What is the three-letter safety acronym taught in this session?</strong></p>
    <input type="text" data-fill="s4q1" placeholder="Three letters" maxlength="3">
    <p class="quiz-input-hint">Hint: it relates to what you should do and avoid with your digester.</p>
    <p class="feedback" id="s4q1-feedback"></p>
  </div>

  <div class="quiz-question" data-question="s4q2" data-type="number"
       data-answer="3" data-tolerance="0"
       data-hint="The minimum exclusion zone from a building is 3 metres.">
    <p><strong><span class="q-type-badge num">Number</span> Q2. What is the minimum safe distance (in metres) between a biogas digester and any building?</strong></p>
    <input type="number" data-number="s4q2" placeholder="Enter metres" min="1" max="20">
    <p class="feedback" id="s4q2-feedback"></p>
  </div>

  <div class="quiz-question" data-question="s4q3" data-type="mc" data-answer="b">
    <p><strong><span class="q-type-badge mc">MC</span> Q3. What does H₂S (hydrogen sulfide) smell like, and what makes it dangerous?</strong></p>
    <label><input type="radio" name="s4q3" value="a"> Smells sweet; causes headaches only</label>
    <label><input type="radio" name="s4q3" value="b"> Smells like rotten eggs; toxic and corrosive to metals</label>
    <label><input type="radio" name="s4q3" value="c"> No smell; purely a fire hazard</label>
    <label><input type="radio" name="s4q3" value="d"> Smells like bleach; destroys crops</label>
    <p class="feedback" id="s4q3-feedback"></p>
  </div>

  <div class="quiz-question" data-question="s4q4" data-type="tf" data-answer="false"
       data-hint="You should light the match FIRST — never open gas to an unlit burner.">
    <p><strong><span class="q-type-badge tf">True / False</span> Q4. The correct procedure when lighting a biogas stove is to turn on the gas valve first, then bring the match.</strong></p>
    <label><input type="radio" name="s4q4" value="true"> True</label>
    <label><input type="radio" name="s4q4" value="false"> False</label>
    <p class="feedback" id="s4q4-feedback"></p>
  </div>

  <div class="quiz-question" data-question="s4q5" data-type="mc" data-answer="c">
    <p><strong><span class="q-type-badge mc">MC</span> Q5. What is the purpose of the bubbler in the CREATIVenergie system?</strong></p>
    <label><input type="radio" name="s4q5" value="a"> It heats the gas before use</label>
    <label><input type="radio" name="s4q5" value="b"> It removes water vapour from the gas</label>
    <label><input type="radio" name="s4q5" value="c"> It prevents flame flashback from reaching the digester</label>
    <label><input type="radio" name="s4q5" value="d"> It measures gas pressure</label>
    <p class="feedback" id="s4q5-feedback"></p>
  </div>

  <div class="quiz-question" data-question="s4q6" data-type="mc" data-answer="c">
    <p><strong><span class="q-type-badge mc">MC</span> Q6. When should the main gas valve be shut off?</strong></p>
    <label><input type="radio" name="s4q6" value="a"> Only when a leak is detected</label>
    <label><input type="radio" name="s4q6" value="b"> Once per week as a maintenance routine</label>
    <label><input type="radio" name="s4q6" value="c"> At night and between each use</label>
    <label><input type="radio" name="s4q6" value="d"> Only when filling the digester</label>
    <p class="feedback" id="s4q6-feedback"></p>
  </div>

  <button class="quiz-check-btn"
    onclick="checkQuiz('session4', ['s4q1','s4q2','s4q3','s4q4','s4q5','s4q6'])">
    Check My Answers
  </button>

  <div id="session4-result"></div>
  <div id="session4-submit-section" class="quiz-submit-section" style="display:none;">
    <p>Submit your score to receive credit for this session:</p>
    <a id="session4-form-link" href="#" target="_blank" class="quiz-submit-btn">
      Submit Score via Google Forms →
    </a>
  </div>
</div>
```

---

## Key Reminders

- Always maintain a **1 m exclusion zone** around the digester.
- **Turn off the gas valve** after cooking every time.
- **Regularly inspect** the system for damage.
- **Never enter the digester** for any reason.

Next: **[Session 5: Digestate & Fertiliser](session5-digestate)**
