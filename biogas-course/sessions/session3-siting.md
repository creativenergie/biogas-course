# Session 3: Siting Your Digester

## Learning Objectives

By the end of this session, you will be able to:

1. Identify the four key factors when choosing a site for your biogas plant.
2. Understand the safety distances required from water sources, buildings, and trees.
3. Explain why convenience of access is critical for long-term success.

---

## Case Study: Choosing a Site

*Sanile demonstrates how to assess and choose the right site for a biodigester.*

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;max-width:100%;margin-bottom:1rem;">
  <iframe src="https://www.youtube.com/embed/p0ML4t1lzcE"
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
</div>

---

## Introduction: A Firm Foundation

As with the parable of the house built on rock, the biogas plant must be built on a firm foundation. A poor site choice risks:

- Safety hazards (gas leaks near buildings or water supplies)
- Construction difficulties (rocks, roots, existing pipes)
- Abandonment through inconvenience

The four key factors to consider are:

1. **Safety and Contamination Risks**
2. **Proximity to Hazards**
3. **Ground Conditions**
4. **Access to Inputs and Outputs**

```{figure} ../assets/image27.png
:alt: Siting overview infographic — four key factors illustrated
:width: 90%

The four key siting factors: safety distances, hazard proximity, ground conditions, and convenient access.
```

```{figure} ../assets/siting-distances.png
:alt: Siting distances diagram — minimum distances from buildings, water sources, and trees
:width: 90%

Key siting distances: keep the digester more than 10 m from water sources and trees, and less than 20 m from the house and animal pen for convenient daily use.
```

---

## 1. Safety and Contamination Risks

Locate the biogas plant **at least 10 m away** from any water source (wells, boreholes, open water). If there are any leaks, this distance prevents contamination of drinking water.

```{figure} ../assets/image5.png
:alt: Safety distances diagram — water source, buildings, and exclusion zones
:width: 85%

Minimum safety distances: 10 m from water sources, 3 m from buildings, 5 m from tree crowns.
```

---

## 2. Proximity to Hazards

Keep the plant a safe distance from:

| Hazard | Minimum Distance |
|---|---|
| Buildings | 3 m |
| Trees (from crown edge) | 5 m |
| Roads / vehicle tracks | 10 m |
| Water sources | 10 m |

Tree roots can grow into and damage the digester bag. If roots are present, they can be treated with a rock salt or caustic soda solution.

```{figure} ../assets/image24.png
:alt: Proximity hazards map — distances from trees, roads, buildings
:width: 85%

Keep the digester clear of trees (roots cause damage), roads (traffic vibration), and buildings (gas accumulation risk).
```

---

## 3. Ground Conditions

Before digging, assess the site for:

- **Rocks and boulders** — underground rocks can make excavation very difficult and expensive.
- **Existing infrastructure** — drainage pipes, cables, or underground structures that could be damaged.
- **Soft or waterlogged ground** — can cause the structure to shift over time.

```{warning}
Choose a location where the ground is clear of obstacles. Digging through rock is one of the most common avoidable construction delays.
```

---

## 4. Access to Inputs and Outputs

Digesters that are inconvenient to use tend to be abandoned. From experience, the most important factor for long-term success is **making it easy to use every day**.

Consider:
- Is the digester **close to the source of feedstock** (e.g. the cow shed)?
- Is it **close to a water source** (12–20 m recommended)?
- Is the **walk from the digester to the house short**, so gas valves can be checked and turned off easily?

```{figure} ../assets/parable-biogas-seeds.png
:alt: The Parable of the Biogas Seeds — fertile ground versus thorny ground
:width: 100%

The Parable of the Biogas Seeds: a well-sited, convenient system flourishes; one built in the wrong place or too far from daily routines is often abandoned.
```

```{tip}
Like seeds in the parable, technology will only flourish where it falls on fertile ground — not where thorns of inconvenience prevent it from taking root.
```

```{raw} html
<div style="background:#f8fffe;border:2px solid #80cbc4;border-radius:10px;padding:1.25rem;margin:1.25rem 0;">
  <h4 style="margin:0 0 0.5rem;color:#004d40;font-size:1rem;">🧭 Site Assessment Checker</h4>
  <p style="margin:0 0 1rem;font-size:0.875rem;color:#555;">Answer all six questions about your proposed site to get a suitability score.</p>
  <div id="sa-questions" style="display:grid;gap:0.55rem;">
    <div class="sa-q" style="background:#f5f5f5;border-radius:7px;padding:0.65rem 0.9rem;display:flex;justify-content:space-between;align-items:center;gap:0.5rem;">
      <span style="font-size:0.875rem;">Is the site at least <strong>10 m from any water source</strong> (well, borehole, stream)?</span>
      <div style="display:flex;gap:0.4rem;flex-shrink:0;">
        <button class="sa-btn" onclick="saSet(this,1,1)" style="padding:0.3rem 0.8rem;border:1.5px solid #bbb;border-radius:5px;background:white;cursor:pointer;font-size:0.85rem;">Yes</button>
        <button class="sa-btn" onclick="saSet(this,1,0)" style="padding:0.3rem 0.8rem;border:1.5px solid #bbb;border-radius:5px;background:white;cursor:pointer;font-size:0.85rem;">No</button>
      </div>
    </div>
    <div class="sa-q" style="background:#f5f5f5;border-radius:7px;padding:0.65rem 0.9rem;display:flex;justify-content:space-between;align-items:center;gap:0.5rem;">
      <span style="font-size:0.875rem;">Is it at least <strong>3 m from any building</strong>?</span>
      <div style="display:flex;gap:0.4rem;flex-shrink:0;">
        <button class="sa-btn" onclick="saSet(this,2,1)" style="padding:0.3rem 0.8rem;border:1.5px solid #bbb;border-radius:5px;background:white;cursor:pointer;font-size:0.85rem;">Yes</button>
        <button class="sa-btn" onclick="saSet(this,2,0)" style="padding:0.3rem 0.8rem;border:1.5px solid #bbb;border-radius:5px;background:white;cursor:pointer;font-size:0.85rem;">No</button>
      </div>
    </div>
    <div class="sa-q" style="background:#f5f5f5;border-radius:7px;padding:0.65rem 0.9rem;display:flex;justify-content:space-between;align-items:center;gap:0.5rem;">
      <span style="font-size:0.875rem;">Is it <strong>within 20 m of the animal pen</strong> (feedstock source)?</span>
      <div style="display:flex;gap:0.4rem;flex-shrink:0;">
        <button class="sa-btn" onclick="saSet(this,3,1)" style="padding:0.3rem 0.8rem;border:1.5px solid #bbb;border-radius:5px;background:white;cursor:pointer;font-size:0.85rem;">Yes</button>
        <button class="sa-btn" onclick="saSet(this,3,0)" style="padding:0.3rem 0.8rem;border:1.5px solid #bbb;border-radius:5px;background:white;cursor:pointer;font-size:0.85rem;">No</button>
      </div>
    </div>
    <div class="sa-q" style="background:#f5f5f5;border-radius:7px;padding:0.65rem 0.9rem;display:flex;justify-content:space-between;align-items:center;gap:0.5rem;">
      <span style="font-size:0.875rem;">Is it <strong>within 20 m of the kitchen</strong>?</span>
      <div style="display:flex;gap:0.4rem;flex-shrink:0;">
        <button class="sa-btn" onclick="saSet(this,4,1)" style="padding:0.3rem 0.8rem;border:1.5px solid #bbb;border-radius:5px;background:white;cursor:pointer;font-size:0.85rem;">Yes</button>
        <button class="sa-btn" onclick="saSet(this,4,0)" style="padding:0.3rem 0.8rem;border:1.5px solid #bbb;border-radius:5px;background:white;cursor:pointer;font-size:0.85rem;">No</button>
      </div>
    </div>
    <div class="sa-q" style="background:#f5f5f5;border-radius:7px;padding:0.65rem 0.9rem;display:flex;justify-content:space-between;align-items:center;gap:0.5rem;">
      <span style="font-size:0.875rem;">Is the ground <strong>free of large rocks and tree roots</strong>?</span>
      <div style="display:flex;gap:0.4rem;flex-shrink:0;">
        <button class="sa-btn" onclick="saSet(this,5,1)" style="padding:0.3rem 0.8rem;border:1.5px solid #bbb;border-radius:5px;background:white;cursor:pointer;font-size:0.85rem;">Yes</button>
        <button class="sa-btn" onclick="saSet(this,5,0)" style="padding:0.3rem 0.8rem;border:1.5px solid #bbb;border-radius:5px;background:white;cursor:pointer;font-size:0.85rem;">No</button>
      </div>
    </div>
    <div class="sa-q" style="background:#f5f5f5;border-radius:7px;padding:0.65rem 0.9rem;display:flex;justify-content:space-between;align-items:center;gap:0.5rem;">
      <span style="font-size:0.875rem;">Is the site <strong>sunny and well-ventilated</strong> (not heavily shaded by trees)?</span>
      <div style="display:flex;gap:0.4rem;flex-shrink:0;">
        <button class="sa-btn" onclick="saSet(this,6,1)" style="padding:0.3rem 0.8rem;border:1.5px solid #bbb;border-radius:5px;background:white;cursor:pointer;font-size:0.85rem;">Yes</button>
        <button class="sa-btn" onclick="saSet(this,6,0)" style="padding:0.3rem 0.8rem;border:1.5px solid #bbb;border-radius:5px;background:white;cursor:pointer;font-size:0.85rem;">No</button>
      </div>
    </div>
  </div>
  <div id="sa-score-bar" style="margin:1rem 0 0.5rem;display:none;">
    <div style="display:flex;justify-content:space-between;font-size:0.78rem;color:#555;margin-bottom:0.25rem;">
      <span>Site score</span><span id="sa-score-label">0 / 6</span>
    </div>
    <div style="background:#e0e0e0;border-radius:6px;height:14px;overflow:hidden;">
      <div id="sa-score-fill" style="height:100%;border-radius:6px;transition:width 0.4s,background 0.4s;"></div>
    </div>
  </div>
  <div id="sa-verdict" style="display:none;padding:0.8rem 1rem;border-radius:7px;font-size:0.9rem;margin-top:0.5rem;"></div>
</div>
<script>
var saScores={};
function saSet(btn,q,val){
  saScores[q]=val;
  var row=btn.closest('.sa-q');
  row.querySelectorAll('.sa-btn').forEach(function(b){
    b.style.background='white';b.style.color='#333';b.style.borderColor='#bbb';
  });
  btn.style.background=val?'#2e7d32':'#c62828';
  btn.style.color='white';btn.style.borderColor=val?'#1b5e20':'#b71c1c';
  var answered=Object.keys(saScores).length;
  var score=Object.values(saScores).reduce(function(a,b){return a+b;},0);
  var bar=document.getElementById('sa-score-bar');
  var verdict=document.getElementById('sa-verdict');
  bar.style.display='block';
  document.getElementById('sa-score-label').textContent=score+' / 6';
  var pct=score/6*100;
  var fill=document.getElementById('sa-score-fill');
  fill.style.width=pct+'%';
  fill.style.background=score>=5?'#4caf50':score>=4?'#ff9800':'#f44336';
  if(answered<6){
    verdict.style.display='none';return;
  }
  verdict.style.display='block';
  var msgs=[
    {min:6,bg:'#e8f5e9',c:'#1b5e20',b:'#a5d6a7',t:'🌟 Excellent site — all six criteria met. This location should give your digester the best chance of long-term success.'},
    {min:5,bg:'#f1f8e9',c:'#33691e',b:'#aed581',t:'✅ Good site — five criteria met. One minor limitation; check which "No" answer poses the least risk and whether it can be mitigated.'},
    {min:4,bg:'#fff8e1',c:'#e65100',b:'#ffe082',t:'⚠️ Acceptable but review carefully — two criteria not met. Consider whether an alternative location scores higher before committing.'},
    {min:0,bg:'#ffebee',c:'#b71c1c',b:'#ef9a9a',t:'❌ Poor site — more than two criteria not met. We strongly recommend finding a better location before installation.'},
  ];
  var m=msgs.find(function(x){return score>=x.min;});
  verdict.style.cssText='display:block;padding:0.8rem 1rem;border-radius:7px;font-size:0.9rem;margin-top:0.5rem;background:'+m.bg+';color:'+m.c+';border:1.5px solid '+m.b+';';
  verdict.textContent=m.t;
}
</script>
```

```{figure} ../assets/make-it-convenient.png
:alt: Make it convenient to use — what makes a digester convenient, benefits of convenience, and plan for convenience
:width: 100%

Convenience is the single biggest predictor of long-term use: short distance to feedstock, easy gas connection to the kitchen, and simple daily routines keep the system productive.
```

---

## Session 3 Quiz

```{raw} html
<div class="quiz-container" id="quiz-session3">

  <div class="quiz-question" data-question="s3q1" data-type="number"
       data-answer="10" data-tolerance="0"
       data-hint="The minimum safe distance from a well or borehole is exactly 10 metres.">
    <p><strong><span class="q-type-badge num">Number</span> Q1. What is the minimum distance (in metres) a biogas plant should be sited from a well or borehole?</strong></p>
    <input type="number" data-number="s3q1" placeholder="Enter metres" min="1" max="100">
    <p class="feedback" id="s3q1-feedback"></p>
  </div>

  <div class="quiz-question" data-question="s3q2" data-type="number"
       data-answer="10" data-tolerance="0"
       data-hint="Tree roots can extend at least as far as the crown — stay at least 10 m away.">
    <p><strong><span class="q-type-badge num">Number</span> Q2. What is the minimum distance (in metres) a biogas plant should be from the crown of a mature tree?</strong></p>
    <input type="number" data-number="s3q2" placeholder="Enter metres" min="1" max="100">
    <p class="feedback" id="s3q2-feedback"></p>
  </div>

  <div class="quiz-question" data-question="s3q3" data-type="mc" data-answer="d">
    <p><strong><span class="q-type-badge mc">MC</span> Q3. Which of the four siting factors is most important for ensuring long-term daily use of the digester?</strong></p>
    <label><input type="radio" name="s3q3" value="a"> Proximity to hazards</label>
    <label><input type="radio" name="s3q3" value="b"> Ground conditions</label>
    <label><input type="radio" name="s3q3" value="c"> Safety and contamination risks</label>
    <label><input type="radio" name="s3q3" value="d"> Access to inputs and outputs</label>
    <p class="feedback" id="s3q3-feedback"></p>
  </div>

  <div class="quiz-question" data-question="s3q4" data-type="mc" data-answer="b">
    <p><strong><span class="q-type-badge mc">MC</span> Q4. Why should you check for underground rocks before choosing a site?</strong></p>
    <label><input type="radio" name="s3q4" value="a"> Rocks can damage the gas pipes</label>
    <label><input type="radio" name="s3q4" value="b"> Rocks make excavation very difficult and expensive</label>
    <label><input type="radio" name="s3q4" value="c"> Rocks contaminate the slurry</label>
    <label><input type="radio" name="s3q4" value="d"> Rocks prevent biogas from forming</label>
    <p class="feedback" id="s3q4-feedback"></p>
  </div>

  <div class="quiz-question" data-question="s3q5" data-type="fill"
       data-answer="caustic soda|rock salt|salt|caustic"
       data-hint="Two natural options mentioned in the course — rock salt or caustic soda solution.">
    <p><strong><span class="q-type-badge fill">Fill in</span> Q5. Name one substance that can be applied to soil near the digester to deter tree roots.</strong></p>
    <input type="text" data-fill="s3q5" placeholder="Type your answer…">
    <p class="quiz-input-hint">Two options mentioned in the session: rock salt or caustic soda.</p>
    <p class="feedback" id="s3q5-feedback"></p>
  </div>

  <div class="quiz-question" data-question="s3q6" data-type="tf" data-answer="false"
       data-hint="The digester needs convenient access to water — 12–20 m is the recommended distance.">
    <p><strong><span class="q-type-badge tf">True / False</span> Q6. A biogas plant should be sited as far from a water source as possible to avoid contamination.</strong></p>
    <label><input type="radio" name="s3q6" value="true"> True</label>
    <label><input type="radio" name="s3q6" value="false"> False</label>
    <p class="feedback" id="s3q6-feedback"></p>
  </div>

  <button class="quiz-check-btn"
    onclick="checkQuiz('session3', ['s3q1','s3q2','s3q3','s3q4','s3q5','s3q6'])">
    Check My Answers
  </button>

  <div id="session3-result"></div>
  <div id="session3-submit-section" class="quiz-submit-section" style="display:none;">
    <p>Submit your score to receive credit for this session:</p>
    <a id="session3-form-link" href="#" target="_blank" class="quiz-submit-btn">
      Submit Score via Google Forms →
    </a>
  </div>
</div>
```

---

## Summary

The four siting factors are: **Safety**, **Proximity to hazards**, **Ground conditions**, and **Access**.

The most important for long-term success is **access** — make the digester easy and convenient to use every day.

Next: **[Session 4: Safety](session4-safety)** — understanding the risks and how to manage them.
