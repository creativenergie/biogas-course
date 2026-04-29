# Session 5: Digestate & Fertiliser

## Connecting to Earlier Sessions

In Session 2 you loaded cattle manure into the digester. In Sessions 3–4 you saw how microbes broke it down to release biogas. This session completes the cycle: what flows from the outlet pipe is **not waste** — it is **bio-slurry**, a transformed fertiliser that is in many ways more valuable than the manure you started with.

---

## Case Study: Bio-Slurry and Coffee

*Mrs Linguina demonstrates how bio-slurry improves coffee crop yields.*

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;max-width:100%;margin-bottom:1rem;">
  <iframe src="https://www.youtube.com/embed/M2vj4PbVSCE"
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
</div>

---

## Case Study: Bio-Slurry Reviving Garden

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;max-width:100%;margin-bottom:1rem;">
  <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
</div>

---

## Learning Objectives

By the end of this session, you will be able to:

1. Explain why bio-slurry is more effective than raw manure.
2. Choose the correct application method based on your farm situation.
3. Handle and apply bio-slurry safely.

---

## What is Digestate (Bio-Slurry)?

```{raw} html
<div style="background:#f8fffe;border:2px solid #c8e6c9;border-radius:10px;padding:1.25rem;margin:0 0 1.25rem 0;">
  <h4 style="margin:0 0 0.5rem;color:#1b5e20;font-size:1rem;">🔄 The Biogas Cycle — Closing the Loop</h4>
  <p style="margin:0 0 1rem;font-size:0.875rem;color:#555;">Click each stage to learn what happens at that point.</p>
  <div style="position:relative;max-width:480px;margin:0 auto;">
    <svg viewBox="0 0 480 300" style="width:100%;display:block;">
      <!-- Arrows forming a cycle -->
      <defs>
        <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#4caf50"/>
        </marker>
      </defs>
      <!-- Arrow: Manure → Digester -->
      <path d="M 130 80 Q 195 50 240 80" stroke="#4caf50" stroke-width="2" fill="none" marker-end="url(#arr)"/>
      <!-- Arrow: Digester → Biogas -->
      <path d="M 300 100 Q 370 80 390 130" stroke="#4caf50" stroke-width="2" fill="none" marker-end="url(#arr)"/>
      <!-- Arrow: Digester → Bio-slurry -->
      <path d="M 300 160 Q 370 180 390 210" stroke="#66bb6a" stroke-width="2" fill="none" marker-end="url(#arr)"/>
      <!-- Arrow: Biogas → Cooking/Use -->
      <path d="M 390 160 Q 430 185 390 210" stroke="#4caf50" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
      <!-- Arrow: Bio-slurry → Crops -->
      <path d="M 340 250 Q 240 290 160 250" stroke="#4caf50" stroke-width="2" fill="none" marker-end="url(#arr)"/>
      <!-- Arrow: Crops → Livestock/Farm -->
      <path d="M 100 220 Q 50 170 90 120" stroke="#4caf50" stroke-width="2" fill="none" marker-end="url(#arr)"/>
      <!-- Stage bubbles -->
      <!-- Manure (top-left) -->
      <circle cx="95" cy="95" r="52" fill="#efebe9" stroke="#bcaaa4" stroke-width="2" onclick="bsCycle(1)" style="cursor:pointer;"/>
      <text x="95" y="90" text-anchor="middle" font-size="20" style="pointer-events:none;">🐄</text>
      <text x="95" y="108" text-anchor="middle" font-size="11" font-weight="700" fill="#4e342e" style="pointer-events:none;">Manure</text>
      <text x="95" y="122" text-anchor="middle" font-size="9" fill="#6d4c41" style="pointer-events:none;">daily feed</text>
      <!-- Digester (centre) -->
      <circle cx="255" cy="130" r="52" fill="#e8f5e9" stroke="#4caf50" stroke-width="2.5" onclick="bsCycle(2)" style="cursor:pointer;"/>
      <text x="255" y="125" text-anchor="middle" font-size="20" style="pointer-events:none;">⚗️</text>
      <text x="255" y="143" text-anchor="middle" font-size="11" font-weight="700" fill="#1b5e20" style="pointer-events:none;">Digester</text>
      <text x="255" y="157" text-anchor="middle" font-size="9" fill="#2e7d32" style="pointer-events:none;">40 days</text>
      <!-- Biogas (top-right) -->
      <circle cx="415" cy="115" r="45" fill="#e3f2fd" stroke="#90caf9" stroke-width="2" onclick="bsCycle(3)" style="cursor:pointer;"/>
      <text x="415" y="110" text-anchor="middle" font-size="18" style="pointer-events:none;">🔥</text>
      <text x="415" y="127" text-anchor="middle" font-size="11" font-weight="700" fill="#0d47a1" style="pointer-events:none;">Biogas</text>
      <text x="415" y="141" text-anchor="middle" font-size="9" fill="#1565c0" style="pointer-events:none;">cooking &amp; use</text>
      <!-- Bio-slurry (bottom-right) -->
      <circle cx="415" cy="230" r="45" fill="#f9fbe7" stroke="#dce775" stroke-width="2" onclick="bsCycle(4)" style="cursor:pointer;"/>
      <text x="415" y="225" text-anchor="middle" font-size="18" style="pointer-events:none;">💧</text>
      <text x="415" y="242" text-anchor="middle" font-size="11" font-weight="700" fill="#827717" style="pointer-events:none;">Bio-slurry</text>
      <text x="415" y="256" text-anchor="middle" font-size="9" fill="#827717" style="pointer-events:none;">fertiliser</text>
      <!-- Crops (bottom-centre) -->
      <circle cx="255" cy="265" r="40" fill="#e8f5e9" stroke="#a5d6a7" stroke-width="2" onclick="bsCycle(5)" style="cursor:pointer;"/>
      <text x="255" y="260" text-anchor="middle" font-size="18" style="pointer-events:none;">🌾</text>
      <text x="255" y="278" text-anchor="middle" font-size="11" font-weight="700" fill="#2e7d32" style="pointer-events:none;">Crops</text>
    </svg>
  </div>
  <div id="bs-info" style="margin-top:0.75rem;padding:0.6rem 0.9rem;border-radius:7px;font-size:0.875rem;background:#f5f5f5;border:1px solid #e0e0e0;color:#555;">
    Click any stage to learn more.
  </div>
</div>
<script>
function bsCycle(n){
  var el=document.getElementById('bs-info');
  var d=[
    {bg:'#efebe9',c:'#4e342e',b:'#bcaaa4',h:'<strong>🐄 Manure — daily feed</strong><br>Mix fresh cow dung 1:1 with water and add daily through the inlet. Consistent daily feeding keeps the microbial population stable and gas production steady.'},
    {bg:'#e8f5e9',c:'#1b5e20',b:'#a5d6a7',h:'<strong>⚗️ Digester — 40-day process</strong><br>Microbes break down organic matter without oxygen. Carbon is converted to methane (CH₄). Nitrogen, phosphorus, and potassium remain — but in a more plant-available form.'},
    {bg:'#e3f2fd',c:'#0d47a1',b:'#90caf9',h:'<strong>🔥 Biogas — cooking and productive use</strong><br>Methane-rich gas rises and is piped to the stove, brooder, or other appliance. Surplus gas beyond cooking needs can power income-generating activities (see Session 6).'},
    {bg:'#f9fbe7',c:'#827717',b:'#dce775',h:'<strong>💧 Bio-slurry — liquid fertiliser</strong><br>Fully digested material flows from the outlet continuously. It contains 2–2.5× more plant-available nitrogen than raw manure. This is the topic of Session 5!'},
    {bg:'#e8f5e9',c:'#2e7d32',b:'#a5d6a7',h:'<strong>🌾 Crops — improved yield</strong><br>Bio-slurry applied to fields improves crop yield, reduces need for chemical fertiliser, and builds soil health over time. The farm produces more manure → the cycle continues.'},
  ][n-1];
  el.style.cssText='margin-top:0.75rem;padding:0.6rem 0.9rem;border-radius:7px;font-size:0.875rem;background:'+d.bg+';border:1px solid '+d.b+';color:'+d.c+';';
  el.innerHTML=d.h;
}
</script>
```

**Digestate** is the organic material left after microbes have broken down manure in the digester. During this process:

- Carbon is converted into biogas (useful energy).
- What remains is **concentrated, stable, and nutrient-rich**.
- Nutrients (especially nitrogen) become **more available to plants**.

This means digestate often works **faster and more effectively than raw manure** as a fertiliser.

```{figure} ../assets/fertiliser-cycle.png
:alt: Closing the loop — from manure to fertiliser, the nutrient cycle, high nitrogen content, and application decision guide
:width: 100%

Closing the loop: manure enters the digester, bio-slurry exits as a high-nitrogen fertiliser, and crops return organic matter — along with a quick-reference guide for choosing your application method.
```

---

## Why is Bio-Slurry Different from Raw Manure?

### Nutrient Content

Anaerobic digestion does not reduce total nutrients (N, P, K), but it **changes their form**:

- Much organic nitrogen is converted to **ammonium-N (NH₄-N)** — a form plants absorb immediately.
- NH₄ levels in digested manure are often **2–2.5× higher** than in undigested manure.
- Total N, P, and K remain similar.

```{note}
**Key finding:** Bio-slurry can contain 44–81% of total nitrogen as ammonium-N.
This means it acts faster than raw manure — but timely, correct application is essential to avoid nutrient losses or crop burning. *(Möller & Müller, 2012; Gurung, 1997)*
```

### Forms of Bio-Slurry

| Form | Description | Best for |
|---|---|---|
| **Liquid bio-slurry** | Flows from digester outlet | Quick nutrient supply to established crops |
| **Solid (fibre) digestate** | Settled solids | Soil structure improvement, distant fields |

---

## Benefits of Bio-Slurry

- **Plant nutrient supply:** Provides N, P, and K in plant-available forms.
- **Soil health:** Boosts organic matter and water-holding capacity.
- **Cost savings:** Reduces the need for chemical fertiliser purchases.
- **Environmental gains:** Fewer greenhouse gas emissions than unmanaged manure.
- **Crop health:** Some field observations report improved plant resistance to bacterial wilts and insect pests, particularly on banana crops. Rice seedlings soaked in diluted bio-slurry before transplanting show improved germination and early growth. Evidence is largely observational; no peer-reviewed trials confirm resistance to specific viral pathogens. *(Warnars & Oppenoorth, 2014)*
- **Yield increases:** 10 t/ha application to maize has been shown to increase yields. Results vary by soil, climate, and crop type. *(Warnars & Oppenoorth, 2014)*

---

## Choosing Your Application Method

Before applying, answer three questions:

1. **How far is my field from the digester?** (More than 20 min walk → compost first)
2. **How old are my crops?** (Less than 3 weeks old → use diluted irrigation method only)
3. **Is rain expected in the next 48 hours?** (If yes → wait)

```{raw} html
<div style="background:#f8fffe;border:2px solid #c8e6c9;border-radius:10px;padding:1.25rem;margin:1rem 0 1.5rem;">
  <h4 style="margin:0 0 0.5rem;color:#1b5e20;font-size:1rem;">🌿 Which Method Should I Use? — Decision Tool</h4>
  <p style="margin:0 0 1rem;font-size:0.875rem;color:#555;">Answer the three questions to find the right application method.</p>
  <div style="display:flex;flex-direction:column;gap:0.6rem;margin-bottom:1rem;">
    <label style="font-weight:600;font-size:0.9rem;display:flex;align-items:center;gap:0.5rem;cursor:pointer;">
      <input type="checkbox" id="bsq1" onchange="bsMethod()" style="width:18px;height:18px;accent-color:#2e7d32;">
      Field is more than 20 minutes walk from the digester
    </label>
    <label style="font-weight:600;font-size:0.9rem;display:flex;align-items:center;gap:0.5rem;cursor:pointer;">
      <input type="checkbox" id="bsq2" onchange="bsMethod()" style="width:18px;height:18px;accent-color:#2e7d32;">
      Crops are less than 3 weeks old (seedlings)
    </label>
    <label style="font-weight:600;font-size:0.9rem;display:flex;align-items:center;gap:0.5rem;cursor:pointer;">
      <input type="checkbox" id="bsq3" onchange="bsMethod()" style="width:18px;height:18px;accent-color:#2e7d32;">
      Rain is expected within the next 48 hours
    </label>
    <label style="font-weight:600;font-size:0.9rem;display:flex;align-items:center;gap:0.5rem;cursor:pointer;">
      <input type="checkbox" id="bsq4" onchange="bsMethod()" style="width:18px;height:18px;accent-color:#2e7d32;">
      Crop will be eaten fresh / is a root vegetable (food safety concern)
    </label>
  </div>
  <div id="bs-method" style="padding:0.7rem 1rem;border-radius:7px;background:#e8f5e9;border:1.5px solid #4caf50;font-size:0.9rem;color:#1b5e20;">
    ✅ <strong>Method 1 — Direct Application</strong> &nbsp;|&nbsp; Dilute 1:1 with water. Apply in a ring 30 cm from plant base. Cover with soil immediately.
  </div>
</div>
<script>
function bsMethod(){
  var q1=document.getElementById('bsq1').checked,
      q2=document.getElementById('bsq2').checked,
      q3=document.getElementById('bsq3').checked,
      q4=document.getElementById('bsq4').checked;
  var el=document.getElementById('bs-method');
  if(q3){
    el.style.cssText='padding:0.7rem 1rem;border-radius:7px;background:#fff3e0;border:1.5px solid #ff9800;font-size:0.9rem;color:#e65100;';
    el.innerHTML='⏳ <strong>Wait — do not apply yet</strong><br>Rain within 48 hours will wash nutrients off before crops can absorb them. Wait until the forecast is clear.';
  } else if(q1||q4){
    el.style.cssText='padding:0.7rem 1rem;border-radius:7px;background:#f9fbe7;border:1.5px solid #cddc39;font-size:0.9rem;color:#827717;';
    el.innerHTML='♻️ <strong>Method 3 — Compost First (100 days)</strong><br>Build a composting pit near the digester. Composted slurry is safer for food crops, lighter to carry, and can fertilise up to 3× more land.';
  } else if(q2){
    el.style.cssText='padding:0.7rem 1rem;border-radius:7px;background:#e3f2fd;border:1.5px solid #90caf9;font-size:0.9rem;color:#0d47a1;';
    el.innerHTML='💧 <strong>Method 2 — Surface Irrigation / Watering Can</strong><br>Mix 1:3 (slurry:water). Apply via watering can or upstream furrow — <strong>never drip irrigation</strong>. Switch to Method 1 once plants are established (3+ weeks).';
  } else {
    el.style.cssText='padding:0.7rem 1rem;border-radius:7px;background:#e8f5e9;border:1.5px solid #4caf50;font-size:0.9rem;color:#1b5e20;';
    el.innerHTML='✅ <strong>Method 1 — Direct Application</strong><br>Dilute 1:1 with water. Apply in a ring 30 cm from plant base, along crop rows. Cover lightly with soil immediately to retain nitrogen.';
  }
}
</script>
```

---

### Method 1 — Direct Application

**Best for:** Established crops, nearby field, no rain forecast.

- Dilute fresh liquid bio-slurry **1:1 with water** before applying.
- Apply in a **ring around plant bases** or along crop rows.
- Cover lightly with soil immediately to reduce nitrogen loss.
- **Do not** apply to plants close to harvest date.
- **Do not** contact plant stems, seeds, or seedlings directly.

#### Worked Example: 10 m × 10 m Maize Plot

1. Add 20 litres of water to 20 litres of bio-slurry (1:1 ratio) = 40 litres diluted.
2. Pour ~0.5 litres around the base of each maize plant (30 cm from the stem).
3. Cover each application with a handful of soil.
4. Repeat 3–4 weeks later.

---

### Method 2 — Surface Irrigation / Watering Can

**Best for:** Seedlings or small plots where direct application would burn plants.

```{warning}
**Never use bio-slurry in drip or trickle irrigation systems.** Bio-slurry causes severe emitter clogging through bacteria, solids, and mineral precipitates. Use Method 1 instead.
```

- Mix bio-slurry at **1:3 ratio** (1 part slurry : 3 parts water).
- Pour into upstream furrow channel or use a watering can.
- Apply once every 2–3 weeks until plants are established; then switch to Method 1.

---

### Method 3 — Composting Bio-Slurry

**Best for:** Distant fields, food crops, or when immediate application is not safe.

A **100-day composting process** makes bio-slurry safer, lighter, and longer-lasting — comparable to commercial peat fertiliser.

**Building a composting pit:**

1. Dig a pit at least 1 m away from the digester.
2. Line with dry organic material (dry grass or banana leaves).
3. Direct overflow bio-slurry into the pit and mix with organic waste.
4. Cover the pit to maintain moisture.
5. Aerate weekly by turning with a fork.
6. Once full, start a second pit and allow the first to compost for **100 days**.

```{tip}
An average digester produces ~30 tonnes of slurry per year, fertilising approximately 1 acre. Well-composted, the same slurry can fertilise up to **3 hectares** — a threefold gain through volume reduction and improved nutrient retention. *(SNV, 2023)*
```

**When and how to apply composted bio-slurry:**

- Apply before planting or during early growth stages.
- Avoid applying within 48 hours of rain.
- Do not use on waterlogged soil.
- Maintain safe distances: at least **50 m from drinking-water sources**, **10 m from surface water bodies**.

---

## Quick Reference: Choosing Your Method

| Situation | Method | Dilution | Notes |
|---|---|---|---|
| Established crops, nearby | Direct (Method 1) | 1:1 | Cover soil after application |
| Seedlings / surface irrigation | Method 2 (furrow/can — NOT drip) | 1:3 | Never undiluted on seedlings |
| Pre-planting | Composted | None | Incorporate into top 10 cm |
| Distant field (>20 min) | Compost first | None | Reduces volume ~3× |
| Fresh vegetables | Composted only | None | 6+ weeks before harvest |

```{figure} ../assets/fertiliser-methods.png
:alt: Bio-slurry products and application methods — liquid, solid, compost; do's and don'ts
:width: 100%

Bio-slurry forms and how to use them: liquid and solid bio-slurry, building compost, and the key do's and don'ts for safe application.
```

```{raw} html
<div style="background:#f9fbe7;border:2px solid #dce775;border-radius:10px;padding:1.25rem;margin:1.25rem 0;">
  <h4 style="margin:0 0 0.25rem;color:#827717;font-size:1rem;">🌱 Bio-Slurry Application Calculator</h4>
  <p style="margin:0 0 1rem;font-size:0.875rem;color:#555;">Enter your plot size and application method — find out how much slurry and water you need.</p>
  <div style="display:flex;gap:1rem;flex-wrap:wrap;align-items:flex-end;margin-bottom:1rem;">
    <div>
      <label style="display:block;font-size:0.8rem;font-weight:700;color:#827717;margin-bottom:0.3rem;">Plot area (m²)</label>
      <input id="bs-area" type="number" min="1" max="10000" value="100"
        style="width:90px;padding:0.4rem 0.5rem;border:1px solid #dce775;border-radius:6px;font-size:0.9rem;"/>
    </div>
    <div>
      <label style="display:block;font-size:0.8rem;font-weight:700;color:#827717;margin-bottom:0.3rem;">Method</label>
      <select id="bs-method" style="padding:0.4rem 0.6rem;border:1px solid #dce775;border-radius:6px;font-size:0.85rem;background:white;">
        <option value="1">Method 1 — Direct (1:1, established crops)</option>
        <option value="2">Method 2 — Watering can (1:3, seedlings)</option>
      </select>
    </div>
    <button onclick="bsCalc()" style="background:#827717;color:white;border:none;padding:0.45rem 1rem;border-radius:6px;font-size:0.875rem;font-weight:600;cursor:pointer;">Calculate</button>
  </div>
  <div id="bs-result" style="display:none;padding:0.8rem 1rem;border-radius:8px;font-size:0.875rem;line-height:1.7;"></div>
</div>
<script>
function bsCalc(){
  var area=parseFloat(document.getElementById('bs-area').value)||100;
  var method=document.getElementById('bs-method').value;
  var res=document.getElementById('bs-result');
  var slurry,water,total,perPlant,note;
  if(method==='1'){
    // Method 1: ~0.5 L diluted per m² (0.25 L slurry + 0.25 L water)
    slurry=Math.round(area*0.25*10)/10;
    water=slurry;
    total=Math.round((slurry+water)*10)/10;
    perPlant='~0.5 L diluted mixture per plant (pour in a ring 30 cm from base, then cover with soil)';
    note='✅ Cover each application with a handful of soil immediately to lock in nitrogen.';
    res.style.cssText='display:block;padding:0.8rem 1rem;border-radius:8px;font-size:0.875rem;line-height:1.7;background:#f1f8e9;border:1px solid #c5e1a5;color:#33691e;';
  } else {
    // Method 2: ~0.75 L diluted per m² (0.19 L slurry + 0.56 L water = 1:3)
    slurry=Math.round(area*0.19*10)/10;
    water=Math.round(slurry*3*10)/10;
    total=Math.round((slurry+water)*10)/10;
    perPlant='Apply via watering can along rows — do not concentrate on individual plants';
    note='⚠️ Never use undiluted bio-slurry on seedlings — it will burn them. Switch to Method 1 once plants are 3+ weeks old.';
    res.style.cssText='display:block;padding:0.8rem 1rem;border-radius:8px;font-size:0.875rem;line-height:1.7;background:#fff9c4;border:1px solid #f9a825;color:#6d4c41;';
  }
  var buckets=Math.ceil(total/10);
  res.innerHTML='<strong>For '+area+' m²:</strong><br>'
    +'• Bio-slurry needed: <strong>'+slurry+' litres</strong><br>'
    +'• Water to add: <strong>'+water+' litres</strong><br>'
    +'• Total diluted mixture: <strong>'+total+' litres</strong> (~'+buckets+' × 10 L bucket'+(buckets===1?'':'s')+')<br>'
    +'• Application rate: '+perPlant+'<br>'
    +'<em style="font-size:0.8rem;">'+note+'</em>';
  res.style.display='block';
}
bsCalc();
</script>
```

---

## Challenges and How to Manage Them

### High nitrogen content — risk of plant burn

High ammonium-N can burn young plants and cause losses if misapplied.

- Always dilute liquid bio-slurry (minimum 1:1, 1:3 for seedlings).
- Use composted material for sensitive crops.
- Apply small amounts more frequently (split applications over the season).

### Nitrogen loss during handling

Ammonia volatilises when slurry is left uncovered, spread thinly across a surface, or dries in hot sun. Significant nitrogen can be lost this way, reducing fertiliser value and causing odour. Surface broadcast without soil incorporation is particularly prone to losses.

- Cover storage and composting pits at all times.
- Incorporate bio-slurry into the soil immediately after application.
- Avoid spreading during hot, windy conditions.

### Uneven nutrient distribution

Irrigation channel application can lead to uneven spread.

- Dilute before mixing with irrigation water.
- Rotate inlet positions across the plot.
- Use buckets or watering cans for small plots to ensure even coverage.

### Nutrient runoff and water pollution

Heavy rain after application can wash nutrients into water bodies.

- Never apply before forecast rain.
- Observe safe buffer distances from water sources (50 m from drinking water, 10 m from surface water).

### Transport and labour

Bio-slurry is bulky and heavy to move to distant fields.

- Prioritise nearby plots for liquid application.
- Compost to reduce volume before carrying to distant fields (reduces mass ~3×).

---

## Health, Safety, and Pathogen Risk

This is one of the most important sections. Bio-slurry from animal manure is generally safe when handled correctly, but risk levels vary significantly depending on what went into the digester.

**Mesophilic digesters** (20–40°C — the most common type in smallholder settings) do **not** fully eliminate pathogens. Salmonella, E. coli, and helminth eggs can survive the digestion process, particularly with short retention times.

**Thermophilic digesters** (50–60°C) achieve a higher degree of pathogen kill but are less common in rural Africa. Even here, composting the output adds a further safety margin. The 100-day composting process substantially reduces pathogen loads in all cases.

| Risk level | Applies when | What to do |
|---|---|---|
| 🟢 **Green — Safe** | Composted animal manure digestate only (cattle, pig, poultry) | Suitable for all crops including fresh vegetables. Apply 6+ weeks before harvest as an extra precaution. |
| 🟡 **Amber — Caution** | Fresh liquid digestate from animal manure only | Safe when diluted 1:1 and applied to established crops. Avoid on root vegetables or crops where slurry contacts the edible part. Wash hands after handling. |
| 🔴 **Red — Restrict** | Digesters co-digesting human waste (night soil, latrine contents) | Do not apply to food crops without composting first (minimum 100 days). Apply only to non-food crops or as pre-planting soil amendment. Strict hygiene essential. |

**General hygiene:**
- Wash hands with soap and water after handling bio-slurry.
- Wash all tools (buckets, jerry cans, watering cans) after use.
- Do not eat, drink, or touch your face while working with slurry.
- Keep children away from composting pits and slurry storage areas.
- If bio-slurry contacts skin, wash immediately with clean water.

---

## Session 5 Quiz

```{raw} html
<div class="quiz-container" id="quiz-session5">

  <div class="quiz-question" data-question="s5q1" data-type="mc" data-answer="b">
    <p><strong><span class="q-type-badge mc">MC</span> Q1. Why is bio-slurry often more effective than raw manure as a fertiliser?</strong></p>
    <label><input type="radio" name="s5q1" value="a"> It contains more total nitrogen</label>
    <label><input type="radio" name="s5q1" value="b"> Nutrients are converted into forms plants can absorb more quickly</label>
    <label><input type="radio" name="s5q1" value="c"> It has a higher carbon content</label>
    <label><input type="radio" name="s5q1" value="d"> It smells less</label>
    <p class="feedback" id="s5q1-feedback"></p>
  </div>

  <div class="quiz-question" data-question="s5q2" data-type="fill"
       data-answer="1:1|1 to 1|equal|50/50|1-1"
       data-hint="Dilute with an equal volume of water before applying to established crops.">
    <p><strong><span class="q-type-badge fill">Fill in</span> Q2. What is the recommended dilution ratio of liquid bio-slurry to water for applying to established crops?</strong></p>
    <input type="text" data-fill="s5q2" placeholder="e.g. 1:1">
    <p class="quiz-input-hint">Express as a ratio (slurry : water).</p>
    <p class="feedback" id="s5q2-feedback"></p>
  </div>

  <div class="quiz-question" data-question="s5q3" data-type="mc" data-answer="b">
    <p><strong><span class="q-type-badge mc">MC</span> Q3. Why should you never use bio-slurry in a drip irrigation system?</strong></p>
    <label><input type="radio" name="s5q3" value="a"> Bio-slurry is too cold for drip systems</label>
    <label><input type="radio" name="s5q3" value="b"> It causes severe clogging of drip emitters</label>
    <label><input type="radio" name="s5q3" value="c"> Drip systems require chemical fertiliser only</label>
    <label><input type="radio" name="s5q3" value="d"> It would make crops grow too fast</label>
    <p class="feedback" id="s5q3-feedback"></p>
  </div>

  <div class="quiz-question" data-question="s5q4" data-type="number"
       data-answer="100" data-tolerance="0"
       data-hint="The composting period to make bio-slurry safe for food crops is 100 days.">
    <p><strong><span class="q-type-badge num">Number</span> Q4. How many days must bio-slurry compost before it is safe to apply to sensitive food crops?</strong></p>
    <input type="number" data-number="s5q4" placeholder="Enter days" min="1" max="500">
    <p class="feedback" id="s5q4-feedback"></p>
  </div>

  <div class="quiz-question" data-question="s5q5" data-type="mc" data-answer="b">
    <p><strong><span class="q-type-badge mc">MC</span> Q5. Which traffic-light risk level applies to fresh liquid digestate from animal manure only?</strong></p>
    <label><input type="radio" name="s5q5" value="a"> Green — safe for all crops immediately</label>
    <label><input type="radio" name="s5q5" value="b"> Amber — use with caution, dilute 1:1</label>
    <label><input type="radio" name="s5q5" value="c"> Red — must compost 100 days first</label>
    <label><input type="radio" name="s5q5" value="d"> Black — for trained agronomists only</label>
    <p class="feedback" id="s5q5-feedback"></p>
  </div>

  <div class="quiz-question" data-question="s5q6" data-type="tf" data-answer="true"
       data-hint="Rain within 48 hours will wash the nutrients off the field before plants absorb them.">
    <p><strong><span class="q-type-badge tf">True / False</span> Q6. Applying bio-slurry within 48 hours of expected heavy rain is wasteful because runoff will carry nutrients away.</strong></p>
    <label><input type="radio" name="s5q6" value="true"> True</label>
    <label><input type="radio" name="s5q6" value="false"> False</label>
    <p class="feedback" id="s5q6-feedback"></p>
  </div>

  <button class="quiz-check-btn"
    onclick="checkQuiz('session5', ['s5q1','s5q2','s5q3','s5q4','s5q5','s5q6'])">
    Check My Answers
  </button>

  <div id="session5-result"></div>
  <div id="session5-submit-section" class="quiz-submit-section" style="display:none;">
    <p>Submit your score to receive credit for this session:</p>
    <a id="session5-form-link" href="#" target="_blank" class="quiz-submit-btn">
      Submit Score via Google Forms →
    </a>
  </div>
</div>
```

---

```{figure} ../assets/bio-slurry-worksheet.jpg
:alt: Session 5 Bio-Slurry Worksheet — what you have, application method, safe use checklist, and notes
:width: 80%

Use this worksheet to plan your bio-slurry application: record your daily slurry volume, choose your method, and tick off the safe use checklist.
```

```{note}
**Key things to remember from Session 5**

Bio-slurry is the transformed fertiliser that completes your biogas system — the manure you fed in Session 2 becomes the fertiliser you apply now.

- Choose your method based on three questions: **distance, crop stage, and weather**.
- Always dilute liquid slurry (1:1 for established crops, 1:3 for seedlings).
- Composting for 100 days makes bio-slurry safer, lighter to carry, and longer-lasting.
- Know what went into your digester — human waste co-digestion requires composting before any food crop application.
- For maize, 10 t/ha (approximately 1,000 litres undiluted per 0.1 ha plot) has been shown to increase yields — split into 2–3 applications per season. *(Warnars & Oppenoorth, 2014)*
```

Next: **[Session 6: Productive Use of Biogas](session6-productive-use)**

---

## References

The following sources underpin the content of this session. Those marked ★ are particularly recommended for practitioners wanting to go deeper.

★ **Warnars, L. & Oppenoorth, H. (2014).** *Bioslurry: A Supreme Fertiliser — A Study on Bioslurry Results and Uses.* SNV/Hivos. Covers smallholder field evidence across Africa and Asia, including per-plant and per-hectare rates. Start here if you only read one reference.

★ **Gurung, B. (1997/1998).** *Training Manual: Proper Utilisation of Bio-Slurry.* Biogas Support Programme (BSP/SNV), Nairobi. The original practitioner guide with dilution ratios, crop-by-crop guidance, and composting pit instructions.

★ **SNV (2023).** *Biogas, Food Security and Climate Change.* snv.org. Overview of bio-slurry value chains in Africa, including the 30 t/year output figure and 3 ha composting yield.

**Möller, K. & Müller, T. (2012).** Effects of anaerobic digestion on digestate nutrient availability and crop growth: A review. *Engineering in Life Sciences*, 12(3), 242–257. [Source of NH₄-N data: 45–80% of total N as ammonium, 2–2.5× uplift over raw manure.]

**Bonten, L.T.C. et al. (2014).** *Is bio-slurry from household digesters a better fertilizer than manure? A literature review.* Alterra Report 2519, Wageningen UR.

**Kisaka, M.O. et al. (2023).** Smallholder farmers' knowledge on the use of bioslurry as soil fertility amendment for potato production in Kenya. *Land Degradation & Development*, 34(3).
