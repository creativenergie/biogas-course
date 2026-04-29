# Session 2: Sizing Your Digester

## Learning Objectives

By the end of this session, you will be able to:

1. Understand why correct sizing is critical.
2. Determine the amount of available feedstock and calculate the daily feeding rate.
3. Understand retention time and its impact on biogas production.
4. Perform basic calculations to determine slurry and gas volume.
5. Select an appropriate digester size.

---

## Case Study: Sizing a Digester

*Sanile walks through how to size a biodigester correctly for a typical farm.*

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;max-width:100%;margin-bottom:1rem;">
  <iframe src="https://www.youtube.com/embed/3cJF69M_zv8"
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
</div>

---

## Why Does Sizing Matter?

It is vitally important that the digester is sized correctly:

- **Too small** → not enough gas for your needs.
- **Too large** → excess gas vents to atmosphere. Methane has **20× the global warming potential of CO₂** — venting it is actively harmful.

Start with what the farmer wants to *use* the biogas for, then work backwards to determine the size needed.

---

## Step 1: Assess Your Feedstock and Gas Needs

Start by answering two simple questions:

**1. How much waste do you produce each day?**
(e.g. number of cows × kg of dung per day)

**2. How much gas do you want to use?**
(e.g. cooking time per day)

```{tip}
A simple guide: one gas stove uses about **0.5 m³ of gas per hour**.
So cooking for **2 hours per day** requires approximately **1 m³ of gas per day**.
```

Compare what you *have* (available feedstock) against what you *need* (desired gas use).

```{raw} html
<div style="background:#fff8e1;border:2px solid #ffe082;border-radius:10px;padding:1.25rem;margin:1.25rem 0;">
  <h4 style="margin:0 0 0.5rem;color:#e65100;font-size:1rem;">⚖️ Supply vs Demand — Does your feedstock meet your gas needs?</h4>
  <p style="margin:0 0 1rem;font-size:0.875rem;color:#555;">Move the sliders to match your situation, then see if supply and demand balance.</p>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1.2rem;margin-bottom:1rem;">
    <div style="background:#e8f5e9;border-radius:8px;padding:0.9rem;">
      <div style="font-weight:700;color:#1b5e20;margin-bottom:0.5rem;">🐄 Supply — Daily Dung</div>
      <label style="font-size:0.85rem;color:#333;">Cows: <strong id="sd-cows-val">2</strong></label><br>
      <input type="range" id="sd-cows" min="1" max="20" value="2" step="1"
             style="width:100%;margin:0.4rem 0;" oninput="sdCalc()">
      <div style="font-size:0.82rem;color:#2e7d32;">≈ <strong id="sd-dung-kg">20</strong> kg dung/day → <strong id="sd-supply">0.8</strong> m³ gas/day</div>
    </div>
    <div style="background:#fce4ec;border-radius:8px;padding:0.9rem;">
      <div style="font-weight:700;color:#880e4f;margin-bottom:0.5rem;">🔥 Demand — Daily Cooking</div>
      <label style="font-size:0.85rem;color:#333;">Cooking time: <strong id="sd-cook-val">2</strong> hrs/day</label><br>
      <input type="range" id="sd-cook" min="0.5" max="6" value="2" step="0.5"
             style="width:100%;margin:0.4rem 0;" oninput="sdCalc()">
      <div style="font-size:0.82rem;color:#880e4f;">Needs: <strong id="sd-demand">1.0</strong> m³ gas/day</div>
    </div>
  </div>
  <div id="sd-bar-wrap" style="margin-bottom:0.75rem;">
    <div style="display:flex;justify-content:space-between;font-size:0.78rem;color:#555;margin-bottom:0.2rem;">
      <span>Supply</span><span>Demand</span>
    </div>
    <div style="background:#e0e0e0;border-radius:6px;height:18px;overflow:hidden;position:relative;">
      <div id="sd-bar-supply" style="height:100%;background:#4caf50;transition:width 0.3s;position:absolute;left:0;"></div>
      <div id="sd-bar-demand" style="height:100%;background:rgba(233,30,99,0.35);border-right:3px solid #e91e63;transition:width 0.3s;position:absolute;left:0;"></div>
    </div>
  </div>
  <div id="sd-verdict" style="padding:0.7rem 1rem;border-radius:7px;font-size:0.9rem;font-weight:600;"></div>
</div>
<script>
function sdCalc(){
  var cows=parseInt(document.getElementById('sd-cows').value)||1;
  var cook=parseFloat(document.getElementById('sd-cook').value)||2;
  var dungKg=cows*10;
  var supply=Math.round(dungKg*0.04*10)/10;
  var demand=Math.round(cook*0.5*10)/10;
  document.getElementById('sd-cows-val').textContent=cows;
  document.getElementById('sd-dung-kg').textContent=dungKg;
  document.getElementById('sd-supply').textContent=supply.toFixed(1);
  document.getElementById('sd-cook-val').textContent=cook % 1===0 ? cook : cook.toFixed(1);
  document.getElementById('sd-demand').textContent=demand.toFixed(1);
  var maxVal=Math.max(supply,demand,0.1);
  document.getElementById('sd-bar-supply').style.width=(supply/maxVal*100)+'%';
  document.getElementById('sd-bar-demand').style.width=(demand/maxVal*100)+'%';
  var el=document.getElementById('sd-verdict');
  var surplus=Math.round((supply-demand)*10)/10;
  if(supply>=demand*0.95){
    el.style.cssText='padding:0.7rem 1rem;border-radius:7px;font-size:0.9rem;font-weight:600;background:#e8f5e9;color:#1b5e20;border:1.5px solid #a5d6a7;';
    el.innerHTML= surplus>0.05
      ? '✅ Supply exceeds demand by <strong>'+surplus.toFixed(1)+'&nbsp;m³/day</strong> — you have surplus gas to explore productive uses.'
      : '✅ Supply and demand are balanced — a good match.';
  } else {
    var shortfall=Math.abs(surplus);
    var extraCows=Math.ceil(shortfall/0.4);
    el.style.cssText='padding:0.7rem 1rem;border-radius:7px;font-size:0.9rem;font-weight:600;background:#ffebee;color:#b71c1c;border:1.5px solid #ef9a9a;';
    el.innerHTML='⚠️ Demand exceeds supply by <strong>'+shortfall.toFixed(1)+'&nbsp;m³/day</strong>. Add ~<strong>'+extraCows+' more cow(s)</strong>, reduce cooking time, or consider a smaller stove.';
  }
}
sdCalc();
</script>
```

---

## Step 2: Daily Feeding Rate

A biogas plant must be fed **daily** with a consistent amount of feedstock mixed with water to form a slurry.

**General mixing ratio:** 1 bucket of cow dung : ½ bucket of water (or 1:1 where water is plentiful).

The material must remain inside the digester long enough for complete breakdown — typically **40 days** at 30–40°C. The larger the daily feeding amount, the larger the digester must be.

---

## Step 3: Calculate Slurry Volume (Vs)

Inside the digester there are two parts:
- **Slurry volume (Vs)** — the liquid mixture of waste and water
- **Gas volume (Vg)** — the space where biogas collects

**Total Volume = Slurry Volume (Vs) + Gas Volume (Vg)**

The slurry volume formula is:

```
Vs = Daily slurry input (m³) × Retention time (days)
```

### Worked Example

**Given:** 20 kg of cow dung per day, 1:1 mixing ratio, 40 days retention time.

| Step | Calculation | Result |
|---|---|---|
| Total daily slurry | 20 kg dung + 20 kg water | **40 kg/day** |
| Convert to volume (1000 kg = 1 m³) | 40 ÷ 1000 | **0.04 m³/day** |
| Multiply by retention time | 0.04 × 40 | **Vs = 1.6 m³** |

---

## Step 4: Calculate Gas Volume (Vg)

Cow dung produces approximately **0.04 m³ of biogas per kg of dung added** per day (at 30–40°C with 40-day retention).

```
Vg = 0.04 m³/kg × Daily dung input (kg)
```

For the example above (20 kg/day):

```
Vg = 0.04 × 20 = 0.8 m³/day
```

Because gas is used daily, you only need to store about **⅔ to 1 day's worth of gas production**.

```{figure} ../assets/gas-volume-how-it-works.png
:alt: Gas volume — how it works, daily gas production, storage in the digester, and calculating Vg
:width: 100%

How gas volume works: daily production rate, storage in the bag, and the Vg = 0.04 × daily dung input formula.
```

---

## Step 5: Total Digester Volume

```
Total Volume = Vs + Vg
```

For our example: **1.6 + 0.8 = 2.4 m³**

```{figure} ../assets/image14.png
:alt: Digester cross-section showing Vs, Vg, inlet height (Hi) and outlet height (Ho)
:width: 90%

Cross-section diagram of the CE Expanding Bag Digester showing slurry volume (Vs), gas volume (Vg), and the critical inlet/outlet height relationship.
```

```{raw} html
<div style="background:#f8fffe;border:2px solid #c8e6c9;border-radius:10px;padding:1.25rem;margin:1.25rem 0;">
  <h4 style="margin:0 0 0.4rem;color:#1b5e20;font-size:1rem;">📐 Digester Sizing Calculator</h4>
  <p style="margin:0 0 1rem;color:#555;font-size:0.875rem;">Enter your farm details to calculate the recommended digester size.</p>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:0.75rem;margin-bottom:1rem;">
    <div>
      <label style="font-weight:600;font-size:0.875rem;display:block;margin-bottom:0.3rem;">Daily dung input (kg)</label>
      <input type="number" id="sc-dung" value="20" min="1" max="500" step="1"
             style="width:100%;padding:0.45rem 0.6rem;border:1.5px solid #c8e6c9;border-radius:6px;font-size:0.95rem;box-sizing:border-box;"/>
    </div>
    <div>
      <label style="font-weight:600;font-size:0.875rem;display:block;margin-bottom:0.3rem;">Water ratio (parts per part dung)</label>
      <input type="number" id="sc-water" value="1" min="0.5" max="3" step="0.5"
             style="width:100%;padding:0.45rem 0.6rem;border:1.5px solid #c8e6c9;border-radius:6px;font-size:0.95rem;box-sizing:border-box;"/>
    </div>
    <div>
      <label style="font-weight:600;font-size:0.875rem;display:block;margin-bottom:0.3rem;">Retention time (days)</label>
      <input type="number" id="sc-rt" value="40" min="20" max="95" step="1"
             style="width:100%;padding:0.45rem 0.6rem;border:1.5px solid #c8e6c9;border-radius:6px;font-size:0.95rem;box-sizing:border-box;"/>
    </div>
  </div>
  <button onclick="calcDigester()"
          style="background:#2e7d32;color:#fff;border:none;padding:0.55rem 1.4rem;border-radius:7px;font-size:0.95rem;font-weight:700;cursor:pointer;margin-bottom:1rem;">
    Calculate
  </button>
  <div id="sc-result" style="display:none;padding:1rem;background:#fff;border:1.5px solid #a5d6a7;border-radius:8px;"></div>
</div>
<script>
function calcDigester(){
  var dung=parseFloat(document.getElementById('sc-dung').value)||0;
  var water=parseFloat(document.getElementById('sc-water').value)||1;
  var rt=parseFloat(document.getElementById('sc-rt').value)||40;
  if(dung<=0){alert('Please enter a valid dung amount.');return;}
  var dailySlurry=(dung*(1+water))/1000; // m³/day (1 kg ≈ 1 litre ≈ 0.001 m³)
  var Vs=dailySlurry*rt;
  var Vg=0.04*dung;
  var total=Vs+Vg;
  var size,note;
  if(total<=2.5){size='5 m³ (Five-Cow) digester';note='Suitable for cooking on one stove twice daily.';}
  else if(total<=5){size='8 m³ (Eight-Cow) digester';note='Suitable for cooking plus some lighting or brooding.';}
  else{size='13 m³ (Twenty-Cow) digester';note='Large installation — suitable for cooking, water heating and productive use.';}
  var r=document.getElementById('sc-result');
  r.style.display='block';
  r.innerHTML=
    '<table style="width:100%;border-collapse:collapse;font-size:0.875rem;margin-bottom:0.75rem;">'+
    '<tr><td style="padding:0.3rem 0.5rem;border-bottom:1px solid #e8f5e9;color:#555;">Daily slurry input</td>'+
    '<td style="padding:0.3rem 0.5rem;border-bottom:1px solid #e8f5e9;font-weight:700;text-align:right;">'+dailySlurry.toFixed(4)+' m³/day</td></tr>'+
    '<tr><td style="padding:0.3rem 0.5rem;border-bottom:1px solid #e8f5e9;color:#555;">Slurry volume (Vs = input × RT)</td>'+
    '<td style="padding:0.3rem 0.5rem;border-bottom:1px solid #e8f5e9;font-weight:700;text-align:right;">'+Vs.toFixed(2)+' m³</td></tr>'+
    '<tr><td style="padding:0.3rem 0.5rem;border-bottom:1px solid #e8f5e9;color:#555;">Gas volume (Vg = 0.04 × dung kg)</td>'+
    '<td style="padding:0.3rem 0.5rem;border-bottom:1px solid #e8f5e9;font-weight:700;text-align:right;">'+Vg.toFixed(2)+' m³</td></tr>'+
    '<tr><td style="padding:0.3rem 0.5rem;color:#555;font-weight:700;">Total volume needed (Vs + Vg)</td>'+
    '<td style="padding:0.3rem 0.5rem;font-weight:700;color:#1b5e20;font-size:1rem;text-align:right;">'+total.toFixed(2)+' m³</td></tr>'+
    '</table>'+
    '<div style="background:#e8f5e9;border:1.5px solid #4caf50;border-radius:7px;padding:0.65rem 0.9rem;">'+
    '<strong style="color:#1b5e20;">✅ Recommended: '+size+'</strong><br>'+
    '<span style="color:#2e7d32;font-size:0.85rem;">'+note+'</span></div>';
}
</script>
```

### Quick Reference: Common Digester Sizes

| Name | Total Volume | Cows needed | Typical use |
|---|---|---|---|
| Five Cow | ~2 m³ | ~5 cows | Cooking twice daily on one stove |
| Eight Cow | ~4 m³ | ~8 cows | Cooking + some lighting |
| Twenty Cow | ~8 m³ | ~20 cows | Cooking + water heating |

```{figure} ../assets/feedstock-worksheet.jpg
:alt: Feedstock and Biogas Needs Worksheet — daily feedstock available, current energy use, target biogas use
:width: 90%

Use this worksheet to record your daily feedstock, current energy use, and target biogas needs before sizing your digester.
```

---

## Session 2 Quiz

```{raw} html
<div class="quiz-container" id="quiz-session2">

  <div class="quiz-question" data-question="s2q1" data-type="mc" data-answer="b">
    <p><strong><span class="q-type-badge mc">MC</span> Q1. Why is it harmful to oversize a biogas digester?</strong></p>
    <label><input type="radio" name="s2q1" value="a"> It uses too much water</label>
    <label><input type="radio" name="s2q1" value="b"> Excess gas vents to the atmosphere, releasing potent methane</label>
    <label><input type="radio" name="s2q1" value="c"> The bag will burst</label>
    <label><input type="radio" name="s2q1" value="d"> It produces too much fertiliser</label>
    <p class="feedback" id="s2q1-feedback"></p>
  </div>

  <div class="quiz-question" data-question="s2q2" data-type="number"
       data-answer="0.5" data-tolerance="0.05"
       data-hint="A single biogas stove burns 0.5 m³ per hour.">
    <p><strong><span class="q-type-badge num">Number</span> Q2. How many cubic metres (m³) of biogas does a single stove consume per hour?</strong></p>
    <input type="number" data-number="s2q2" placeholder="Enter m³" step="0.1" min="0" max="10">
    <p class="quiz-input-hint">Enter a decimal, e.g. 0.5</p>
    <p class="feedback" id="s2q2-feedback"></p>
  </div>

  <div class="quiz-question" data-question="s2q3" data-type="tf" data-answer="true"
       data-hint="The retention time is 40 days — same as Session 1.">
    <p><strong><span class="q-type-badge tf">True / False</span> Q3. The typical retention time for cow dung in a biogas digester is 40 days.</strong></p>
    <label><input type="radio" name="s2q3" value="true"> True</label>
    <label><input type="radio" name="s2q3" value="false"> False</label>
    <p class="feedback" id="s2q3-feedback"></p>
  </div>

  <div class="quiz-question" data-question="s2q4" data-type="number"
       data-answer="0.8" data-tolerance="0.05"
       data-hint="20 litres/day × 40 days = 800 litres = 0.8 m³.">
    <p><strong><span class="q-type-badge num">Number</span> Q4. A farmer adds 10 kg dung + 10 kg water daily (1:1 mix) with a 40-day retention time. Calculate Vs in m³.</strong></p>
    <input type="number" data-number="s2q4" placeholder="Enter m³" step="0.1" min="0" max="20">
    <p class="quiz-input-hint">Vs = daily slurry input (m³/day) × retention time (days). 1 kg liquid ≈ 1 litre = 0.001 m³.</p>
    <p class="feedback" id="s2q4-feedback"></p>
  </div>

  <div class="quiz-question" data-question="s2q5" data-type="fill"
       data-answer="0.4|0.40"
       data-hint="Vg = 0.04 m³ × kg/day. 10 × 0.04 = 0.4 m³/day.">
    <p><strong><span class="q-type-badge fill">Fill in</span> Q5. Using Vg = 0.04 m³ × kg of dung per day, what is the daily gas volume for 10 kg of dung? (m³/day)</strong></p>
    <input type="text" data-fill="s2q5" placeholder="e.g. 0.4">
    <p class="quiz-input-hint">Enter a decimal number.</p>
    <p class="feedback" id="s2q5-feedback"></p>
  </div>

  <div class="quiz-question" data-question="s2q6" data-type="mc" data-answer="b">
    <p><strong><span class="q-type-badge mc">MC</span> Q6. Why should you start with what the farmer wants to <em>use</em> the biogas for when sizing a digester?</strong></p>
    <label><input type="radio" name="s2q6" value="a"> To comply with government regulations</label>
    <label><input type="radio" name="s2q6" value="b"> So the digester produces enough gas for their actual needs without being oversized</label>
    <label><input type="radio" name="s2q6" value="c"> To determine the best location</label>
    <label><input type="radio" name="s2q6" value="d"> Because feedstock costs vary by use</label>
    <p class="feedback" id="s2q6-feedback"></p>
  </div>

  <button class="quiz-check-btn"
    onclick="checkQuiz('session2', ['s2q1','s2q2','s2q3','s2q4','s2q5','s2q6'])">
    Check My Answers
  </button>

  <div id="session2-result"></div>
  <div id="session2-submit-section" class="quiz-submit-section" style="display:none;">
    <p>Submit your score to receive credit for this session:</p>
    <a id="session2-form-link" href="#" target="_blank" class="quiz-submit-btn">
      Submit Score via Google Forms →
    </a>
  </div>
</div>
```

---

## Summary

- Size the digester based on **available feedstock** and **desired gas use**.
- Use the formula: **Vs = daily slurry input × retention time**
- Gas volume: **Vg = 0.04 m³ × daily kg of dung**
- Total volume = Vs + Vg

In the next session we will learn how to **site** your digester correctly.
