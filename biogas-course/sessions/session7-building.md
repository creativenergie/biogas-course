# Session 7: Building the CE Expanding Bag Digester

## Introduction

This session is the practical step-by-step guide to constructing the **CREATIVenergie Expanding Bag Digester**. Work through each step carefully and refer to the sizing tables from Session 2 to confirm your dimensions before you begin.

```{note}
Three standard sizes are available: **5 m³, 8 m³, and 13 m³**. Downloadable CAD drawings for each size are available on the CREATIVenergie website.
```

---

## Case Study: Overview of a Working Digester

*Sanile gives an overview of how a completed CREATIVenergie digester looks and works.*

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;max-width:100%;margin-bottom:1rem;">
  <iframe src="https://www.youtube.com/embed/YOUR_OVERVIEW_VIDEO_ID"
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
</div>

---

## Case Study: Uses of Biogas Demo

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;max-width:100%;margin-bottom:1rem;">
  <iframe src="https://www.youtube.com/embed/YOUR_USES_DEMO_VIDEO_ID"
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
</div>

---

## Tools and Materials Checklist

Before starting, confirm you have:

- [ ] Sizing table for your chosen digester size
- [ ] CAD drawing for your size
- [ ] String line and posts (for reference line)
- [ ] Tape measure
- [ ] Spade and pick
- [ ] Cement, sand, and aggregate (for base)
- [ ] Bricks and mortar (for inlet and outlet chambers)
- [ ] Pond liner / digester bag
- [ ] PVC gas pipe, valves, and fittings
- [ ] Inlet and outlet covers (hinged to prevent wind damage)
- [ ] Steel wool (for H₂S filter — replace monthly)
- [ ] Bubbler
- [ ] Rock salt or caustic soda solution (if tree roots present)

---

## Step-by-Step Construction

### Step 1: Set Up the Reference Line

Establish a horizontal reference line across the site using posts and string. All depth measurements during construction will be taken from this line.

```{tip}
The reference line is your single most important measurement tool. Set it level and keep it in place throughout the build.
```

```{figure} ../assets/image16.jpg
:alt: Reference line set up across the construction site
:width: 85%

Step 1 in the field: string line and posts marking the horizontal datum for all subsequent depth measurements.
```

### Step 2: Mark the Excavation Area

Using the reference line and your CAD drawing, mark out the full footprint of the pit, inlet, and outlet positions on the ground.

```{figure} ../assets/image28.jpg
:alt: Excavation area marked out on the ground
:width: 85%

Step 2: The full pit footprint marked on the ground before excavation begins.
```

### Step 3: Dig the Pit

Excavate the pit to the dimensions specified in your sizing table. Use the reference line to check depth at multiple points.

- Remove all roots from the sides and base of the pit.
- If roots are present nearby, apply rock salt or caustic soda solution and allow to dry before proceeding.

```{figure} ../assets/image21.jpg
:alt: Completed pit excavation — clean walls and base ready for concrete
:width: 85%

Step 3 complete: a clean, root-free excavated pit ready for the concrete base.
```

### Step 4: Lay the Concrete Base

Pour and level a concrete base for the inlet and outlet chambers. Allow to cure fully before building brickwork on top.

- Use the reference line to verify that the base level matches your drawing.

### Step 5: Build the Brick Inlet and Outlet Chambers

Construct the inlet and outlet chambers in brick up to the specified height. Include the **throat bricks** that keep slurry level correct relative to gas pressure.

**Key dimensions to verify against your drawing:**
- Height of outlet (Ho) — must be below the gas pipe outlet height
- Height of inlet (Hi) — must be higher than Ho to ensure slurry flows from inlet to outlet

```{figure} ../assets/image1.jpg
:alt: Brick inlet chamber under construction
:width: 85%

Step 5a: Building the brick inlet chamber — throat bricks visible at the correct height.
```

```{figure} ../assets/image20.jpg
:alt: Brick outlet chamber with finished mortar joints
:width: 85%

Step 5b: Completed outlet chamber showing the finished brickwork and outlet opening.
```

```{figure} ../assets/image17.png
:alt: Cross-section diagram of inlet and outlet chambers showing Hi and Ho heights
:width: 80%

Inlet height (Hi) must always be higher than outlet height (Ho) to ensure gravity-driven slurry flow.
```

### Step 6: Cut and Glue the Bag Sheet

Cut the pond liner/bag material to the dimensions specified for your digester size. Glue seams according to the manufacturer's instructions, ensuring a completely airtight seal.

```{warning}
Test the bag for leaks by inflating gently before installation. Any leaks must be sealed before the bag goes in the ground.
```

```{raw} html
<div style="background:#f8fffe;border:2px solid #b2dfdb;border-radius:10px;padding:1.25rem;margin:1rem 0;">
  <h4 style="margin:0 0 0.25rem;color:#00695c;font-size:1rem;">🫧 How Airtightness Testing Works</h4>
  <p style="margin:0 0 1rem;font-size:0.875rem;color:#555;">Click to toggle between a sealed bag and one with a leak — watch where the soapy water bubbles form.</p>

  <div style="display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap;">
    <!-- Animated SVG -->
    <div style="flex:0 0 auto;">
      <svg id="at-svg" width="260" height="200" viewBox="0 0 260 200" style="display:block;overflow:visible;">
        <!-- Bag body -->
        <path d="M20,20 Q20,10 30,10 L230,10 Q240,10 240,20 L240,180 Q240,190 230,190 L30,190 Q20,190 20,180 Z"
              fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
        <!-- Seam line -->
        <line id="at-seam" x1="20" y1="100" x2="240" y2="100" stroke="#1565c0" stroke-width="1.5" stroke-dasharray="6,4"/>
        <!-- Inlet pipe -->
        <rect x="0" y="88" width="28" height="24" rx="3" fill="#78909c"/>
        <text x="14" y="103" text-anchor="middle" font-size="8" fill="white" font-weight="bold">IN</text>
        <!-- Outlet pipe -->
        <rect x="232" y="88" width="28" height="24" rx="3" fill="#78909c"/>
        <text x="246" y="103" text-anchor="middle" font-size="8" fill="white" font-weight="bold">OUT</text>
        <!-- Gas pipe top -->
        <rect x="108" y="0" width="20" height="18" rx="3" fill="#78909c"/>
        <text x="118" y="12" text-anchor="middle" font-size="7" fill="white">GAS</text>

        <!-- Interior gas bubbles (always present) -->
        <circle class="at-bubble-i" cx="80"  cy="165" r="5"  fill="none" stroke="#42a5f5" stroke-width="1.5"/>
        <circle class="at-bubble-i" cx="130" cy="155" r="7"  fill="none" stroke="#42a5f5" stroke-width="1.5"/>
        <circle class="at-bubble-i" cx="175" cy="160" r="4"  fill="none" stroke="#42a5f5" stroke-width="1.5"/>
        <circle class="at-bubble-i" cx="100" cy="140" r="6"  fill="none" stroke="#42a5f5" stroke-width="1.5"/>
        <circle class="at-bubble-i" cx="155" cy="145" r="5"  fill="none" stroke="#42a5f5" stroke-width="1.5"/>

        <!-- Leak gap (hidden in good state) -->
        <line id="at-gap" x1="130" y1="97" x2="160" y2="103" stroke="#ef9a9a" stroke-width="4" stroke-linecap="round" opacity="0"/>

        <!-- Exterior soapy bubble at leak (hidden in good state) -->
        <circle id="at-soap" cx="145" cy="100" r="0" fill="rgba(255,235,238,0.7)" stroke="#e53935" stroke-width="1.5"/>
        <text id="at-soap-txt" x="145" y="88" text-anchor="middle" font-size="8" fill="#b71c1c" font-weight="bold" opacity="0">LEAK!</text>

        <!-- Good seal tick (shown in good state) -->
        <circle id="at-good-badge" cx="130" cy="55" r="16" fill="#e8f5e9" stroke="#a5d6a7" stroke-width="1.5"/>
        <text id="at-good-txt" x="130" y="60" text-anchor="middle" font-size="14">✅</text>
      </svg>
    </div>

    <div style="flex:1;min-width:160px;">
      <div id="at-status" style="padding:0.6rem 0.9rem;border-radius:8px;font-size:0.875rem;font-weight:600;background:#e8f5e9;color:#1b5e20;border:1px solid #a5d6a7;margin-bottom:0.75rem;">
        ✅ Sealed — gas stays inside. Bag inflates evenly. No exterior bubbles.
      </div>
      <button onclick="atToggle()" id="at-btn"
        style="background:#1565c0;color:white;border:none;padding:0.5rem 1.1rem;border-radius:6px;font-size:0.875rem;font-weight:600;cursor:pointer;">
        Show a leak →
      </button>
    </div>
  </div>

  <!-- Step-by-step test procedure -->
  <hr style="border:none;border-top:1px solid #b2dfdb;margin:1.25rem 0;"/>
  <h5 style="margin:0 0 0.75rem;color:#00695c;font-size:0.9rem;">Pre-installation test — tick each step as you complete it</h5>
  <div id="at-checklist" style="display:flex;flex-direction:column;gap:0.5rem;"></div>
  <div id="at-result" style="display:none;margin-top:0.9rem;padding:0.7rem 1rem;border-radius:8px;font-size:0.875rem;font-weight:600;"></div>
</div>

<style>
@keyframes at-rise {
  0%   { transform: translateY(0);   opacity:0.8; }
  100% { transform: translateY(-80px); opacity:0; }
}
.at-bubble-i {
  animation: at-rise 3s ease-in infinite;
}
.at-bubble-i:nth-child(1) { animation-delay:0s; }
.at-bubble-i:nth-child(2) { animation-delay:0.8s; }
.at-bubble-i:nth-child(3) { animation-delay:1.4s; }
.at-bubble-i:nth-child(4) { animation-delay:2s; }
.at-bubble-i:nth-child(5) { animation-delay:2.6s; }
@keyframes at-soap-grow {
  0%   { r: 2; }
  60%  { r: 18; }
  70%  { r: 16; }
  100% { r: 18; }
}
</style>

<script>
(function(){
  var leaking=false;
  window.atToggle=function(){
    leaking=!leaking;
    var gap=document.getElementById('at-gap');
    var soap=document.getElementById('at-soap');
    var stxt=document.getElementById('at-soap-txt');
    var good=document.getElementById('at-good-badge');
    var gtxt=document.getElementById('at-good-txt');
    var status=document.getElementById('at-status');
    var btn=document.getElementById('at-btn');

    if(leaking){
      gap.style.opacity='1';
      soap.style.animation='at-soap-grow 1.5s ease-in-out infinite alternate';
      soap.setAttribute('r','16');
      stxt.style.opacity='1';
      good.style.opacity='0';
      gtxt.style.opacity='0';
      status.style.cssText='padding:0.6rem 0.9rem;border-radius:8px;font-size:0.875rem;font-weight:600;background:#ffebee;color:#b71c1c;border:1px solid #ef9a9a;margin-bottom:0.75rem;';
      status.innerHTML='❌ Leak found — soapy bubbles appear at the seam. Mark, dry, seal with glue, and re-test.';
      btn.textContent='Show sealed bag →';
    } else {
      gap.style.opacity='0';
      soap.setAttribute('r','0');
      soap.style.animation='none';
      stxt.style.opacity='0';
      good.style.opacity='1';
      gtxt.style.opacity='1';
      status.style.cssText='padding:0.6rem 0.9rem;border-radius:8px;font-size:0.875rem;font-weight:600;background:#e8f5e9;color:#1b5e20;border:1px solid #a5d6a7;margin-bottom:0.75rem;';
      status.innerHTML='✅ Sealed — gas stays inside. Bag inflates evenly. No exterior bubbles.';
      btn.textContent='Show a leak →';
    }
  };

  var steps=[
    'Close the main gas valve and block the gas outlet with your thumb or a plug.',
    'Inflate the bag gently via the inlet — use your mouth or a pump. Stop when the bag just begins to hold its shape (do not over-inflate).',
    'Mix soapy water: 1 tsp dish soap in 500 ml water.',
    'Brush soapy water along all seams and glued joins.',
    'Apply to all fittings: inlet, outlet, and gas pipe connection.',
    'Watch for 2–3 minutes. Any bubbles forming = a leak. Mark the spot with a pen.',
    'Dry marked spots, apply more sealant or glue, allow to cure fully, then re-inflate and repeat from Step 4.',
  ];
  var done={};
  var cl=document.getElementById('at-checklist');
  var res=document.getElementById('at-result');
  steps.forEach(function(s,i){
    var row=document.createElement('div');
    row.style.cssText='display:flex;align-items:flex-start;gap:0.6rem;padding:0.5rem 0.7rem;border-radius:7px;border:1px solid #b2dfdb;background:#f0fffe;cursor:pointer;font-size:0.8rem;color:#333;transition:background 0.2s;';
    row.innerHTML='<span id="atck-'+i+'" style="flex-shrink:0;font-size:1rem;">⬜</span><span><strong>Step '+(i+1)+':</strong> '+s+'</span>';
    row.addEventListener('click',function(){
      done[i]=!done[i];
      document.getElementById('atck-'+i).textContent=done[i]?'✅':'⬜';
      row.style.background=done[i]?'#e8f5e9':'#f0fffe';
      row.style.borderColor=done[i]?'#a5d6a7':'#b2dfdb';
      if(Object.values(done).filter(Boolean).length===steps.length){
        res.style.display='block';
        res.style.cssText='display:block;margin-top:0.9rem;padding:0.7rem 1rem;border-radius:8px;font-size:0.875rem;font-weight:600;background:#e8f5e9;color:#1b5e20;border:1px solid #a5d6a7;';
        res.innerHTML='🌟 All steps complete — bag is airtight and ready to insert into the pit!';
      }
    });
    cl.appendChild(row);
  });
})();
</script>
```

### Step 7: Insert the Bag

Lower the sealed bag into the pit. Connect the inlet and outlet fittings, ensuring all connections are airtight.

```{figure} ../assets/image13.jpg
:alt: Digester bag being lowered into the excavated pit
:width: 85%

Step 7a: The bag is carefully lowered into the pit before the inlet and outlet fittings are connected.
```

```{figure} ../assets/image18.jpg
:alt: Bag installed in pit with inlet and outlet connections visible
:width: 85%

Step 7b: Bag in position with fittings connected — all joints checked for airtightness before backfilling.
```

### Step 8: Make Covers for Inlet and Outlet

Construct covers for the inlet and outlet openings. **Attach each cover to the brickwork with a hinge** to prevent it from blowing away and damaging the digester bag.

```{figure} ../assets/image4.jpg
:alt: Hinged cover fitted to the inlet opening
:width: 85%

Step 8a: Hinged inlet cover — the hinge prevents wind from carrying the cover away and puncturing the bag.
```

```{figure} ../assets/image8.jpg
:alt: Outlet cover with hinge and securing mechanism
:width: 85%

Step 8b: Outlet cover secured with a hinge. Both covers should open easily for daily feeding and checking.
```

```{figure} ../assets/image19.jpg
:alt: Aerial view showing both inlet and outlet covers fitted and the digester area complete
:width: 85%

Step 8 complete: both covers fitted and hinged, and the surface around the digester tidied.
```

### Step 9: Connect the Pipework

Run PVC gas pipe from the bag to the point of use (kitchen, stove).

- Install the **bubbler** in the gas line as a flashback preventer.
- Install the **steel wool H₂S filter** after the bubbler.
- Install a **ball valve** at the point where the pipe enters the house.
- Install the **main shutoff valve** near the digester.

```{figure} ../assets/image6.jpg
:alt: PVC gas pipe run from digester to kitchen with bubbler and H₂S filter installed
:width: 85%

Step 9a: Gas pipe run from the digester — bubbler (flashback preventer) and steel wool H₂S filter installed in sequence.
```

```{figure} ../assets/image23.jpg
:alt: Ball valve and shutoff valve fitted at the digester end of the gas pipe
:width: 85%

Step 9b: Main shutoff valve near the digester and ball valve at the house entry — two independent control points for safe operation.
```

### Step 10: First Fill

Mix feedstock (e.g. cow dung) with water at a 1:1 ratio and fill the digester to the correct starting level.

- The first gas production typically takes **2–4 weeks** as the microbial population establishes.
- Do not use the gas for the first week — vent it. The first gas produced contains mostly CO₂, which will not burn well. Proper methane-rich gas follows.

---

## Checking Your Work

Before declaring the build complete, run through the full QA checklist below. All items must be ticked before the system is handed over.

```{raw} html
<div style="background:#f8fffe;border:2px solid #b2dfdb;border-radius:10px;padding:1.25rem;margin:1rem 0;">
  <h4 style="margin:0 0 0.5rem;color:#00695c;font-size:1rem;">✅ Build QA Checklist — tick each item to sign off</h4>
  <div id="qa-list" style="display:flex;flex-direction:column;gap:0.45rem;margin-bottom:0.9rem;"></div>
  <div id="qa-progress" style="background:#e0e0e0;border-radius:99px;height:10px;overflow:hidden;margin-bottom:0.5rem;">
    <div id="qa-bar" style="background:#26a69a;height:100%;width:0%;transition:width 0.3s;border-radius:99px;"></div>
  </div>
  <div id="qa-score" style="font-size:0.85rem;color:#555;">0 / 8 complete</div>
  <div id="qa-result" style="display:none;margin-top:0.75rem;padding:0.7rem 1rem;border-radius:8px;font-weight:600;font-size:0.875rem;"></div>
</div>
<script>
(function(){
  var items=[
    {label:'All inlet/outlet connections confirmed airtight (soapy water test)'},
    {label:'Reference line re-checked for final levels — bag sits correctly'},
    {label:'Inlet cover is hinged and can be lifted and lowered freely'},
    {label:'Outlet cover is hinged and secured against wind'},
    {label:'Bubbler installed in the gas line and filled with water'},
    {label:'H₂S filter (steel wool) fitted in the pipe between bubbler and stove'},
    {label:'Main gas valve tested — opens and closes cleanly with no stiffness'},
    {label:'1 m exclusion zone marked, fenced, or pegged out'},
  ];
  var done={};
  var list=document.getElementById('qa-list');
  var bar=document.getElementById('qa-bar');
  var score=document.getElementById('qa-score');
  var result=document.getElementById('qa-result');

  function update(){
    var n=Object.values(done).filter(Boolean).length;
    bar.style.width=Math.round(n/items.length*100)+'%';
    score.textContent=n+' / '+items.length+' complete';
    if(n===items.length){
      result.style.display='block';
      result.style.cssText='display:block;margin-top:0.75rem;padding:0.7rem 1rem;border-radius:8px;font-weight:600;font-size:0.875rem;background:#e8f5e9;color:#1b5e20;border:1px solid #a5d6a7;';
      result.innerHTML='🌟 Build complete — all checks passed. System is ready for first fill!';
    } else {
      result.style.display='none';
    }
  }

  items.forEach(function(it,i){
    var row=document.createElement('div');
    row.style.cssText='display:flex;align-items:flex-start;gap:0.6rem;padding:0.5rem 0.75rem;border-radius:7px;border:1px solid #b2dfdb;background:#f0fffe;cursor:pointer;font-size:0.82rem;color:#333;transition:background 0.2s;';
    row.innerHTML='<span id="qatk-'+i+'" style="flex-shrink:0;font-size:1.1rem;line-height:1.3;">⬜</span><span>'+it.label+'</span>';
    row.addEventListener('click',function(){
      done[i]=!done[i];
      document.getElementById('qatk-'+i).textContent=done[i]?'✅':'⬜';
      row.style.background=done[i]?'#e8f5e9':'#f0fffe';
      row.style.borderColor=done[i]?'#a5d6a7':'#b2dfdb';
      update();
    });
    list.appendChild(row);
  });
  update();
})();
</script>
```

---

## Session 7 Quiz

```{raw} html
<div class="quiz-container" id="quiz-session7">

  <div class="quiz-question" data-question="s7q1" data-type="tf" data-answer="true"
       data-hint="The reference line is the fixed datum — all depth measurements (inlet, outlet, base) are taken from it.">
    <p><strong><span class="q-type-badge tf">True / False</span> Q1. The reference line set up at the start of construction is used for all depth measurements throughout the build.</strong></p>
    <label><input type="radio" name="s7q1" value="true"> True</label>
    <label><input type="radio" name="s7q1" value="false"> False</label>
    <p class="feedback" id="s7q1-feedback"></p>
  </div>

  <div class="quiz-question" data-question="s7q2" data-type="mc" data-answer="c">
    <p><strong><span class="q-type-badge mc">MC</span> Q2. Which is correct regarding inlet height (Hi) and outlet height (Ho)?</strong></p>
    <label><input type="radio" name="s7q2" value="a"> Hi must be lower than Ho</label>
    <label><input type="radio" name="s7q2" value="b"> Hi and Ho must be at exactly the same height</label>
    <label><input type="radio" name="s7q2" value="c"> Hi must be higher than Ho so slurry flows from inlet to outlet by gravity</label>
    <label><input type="radio" name="s7q2" value="d"> Ho must be above the gas pipe outlet</label>
    <p class="feedback" id="s7q2-feedback"></p>
  </div>

  <div class="quiz-question" data-question="s7q3" data-type="fill"
       data-answer="leaks|leak|air leaks|holes"
       data-hint="You inflate the bag and look for escaping air before it goes underground.">
    <p><strong><span class="q-type-badge fill">Fill in</span> Q3. Before the bag is lowered into the pit, it must be tested for ___ by inflating it and checking for escaping air.</strong></p>
    <input type="text" data-fill="s7q3" placeholder="One word…">
    <p class="feedback" id="s7q3-feedback"></p>
  </div>

  <div class="quiz-question" data-question="s7q4" data-type="mc" data-answer="b">
    <p><strong><span class="q-type-badge mc">MC</span> Q4. Why should inlet and outlet covers be attached with a hinge?</strong></p>
    <label><input type="radio" name="s7q4" value="a"> To make them easier to remove quickly</label>
    <label><input type="radio" name="s7q4" value="b"> To prevent them blowing away and puncturing the digester bag</label>
    <label><input type="radio" name="s7q4" value="c"> To mark the exclusion zone</label>
    <label><input type="radio" name="s7q4" value="d"> To hold the gas pipe in place</label>
    <p class="feedback" id="s7q4-feedback"></p>
  </div>

  <div class="quiz-question" data-question="s7q5" data-type="mc" data-answer="c">
    <p><strong><span class="q-type-badge mc">MC</span> Q5. How long does it typically take for a newly filled digester to produce usable methane-rich gas?</strong></p>
    <label><input type="radio" name="s7q5" value="a"> A few hours</label>
    <label><input type="radio" name="s7q5" value="b"> 1–2 days</label>
    <label><input type="radio" name="s7q5" value="c"> 2–4 weeks</label>
    <label><input type="radio" name="s7q5" value="d"> 6 months</label>
    <p class="feedback" id="s7q5-feedback"></p>
  </div>

  <div class="quiz-question" data-question="s7q6" data-type="fill"
       data-answer="monthly|every month|once a month"
       data-hint="The steel wool filter removes H₂S — replace it on a regular monthly schedule.">
    <p><strong><span class="q-type-badge fill">Fill in</span> Q6. The steel wool H₂S filter removes toxic hydrogen sulfide from the gas. How often should it be replaced?</strong></p>
    <input type="text" data-fill="s7q6" placeholder="e.g. weekly / monthly / annually">
    <p class="feedback" id="s7q6-feedback"></p>
  </div>

  <button class="quiz-check-btn"
    onclick="checkQuiz('session7', ['s7q1','s7q2','s7q3','s7q4','s7q5','s7q6'])">
    Check My Answers
  </button>

  <div id="session7-result"></div>
  <div id="session7-submit-section" class="quiz-submit-section" style="display:none;">
    <p>Submit your score to receive credit for this session:</p>
    <a id="session7-form-link" href="#" target="_blank" class="quiz-submit-btn">
      Submit Score via Google Forms →
    </a>
  </div>
</div>
```

---

## Summary

The key steps are: reference line → excavation → concrete base → brick chambers → bag installation → pipework → first fill.

Take your time on each step — a properly built digester will serve the farm for 10+ years.

Next: **[Session 8: Biogas as a Business](session8-business)**
