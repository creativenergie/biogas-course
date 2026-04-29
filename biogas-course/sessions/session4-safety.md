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
