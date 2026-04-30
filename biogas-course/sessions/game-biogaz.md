# 🎮 Bio-Gaz: Village Energy Entrepreneur

*Apply everything from this course. Install digesters, negotiate payment models, keep customers happy, and build a biogas business across three villages.*

---

## How to Play

You are **Bio-Gaz**, a biogas technician with **$400 starting capital**.

- **Click any house** to visit and start a conversation with the owner
- **Ask about cows, cooking needs, and budget** — then propose the right digester size
- **Negotiate payment**: customer pays outright (cash), gets a loan and repays weekly, or you install and they pay-as-you-go (PAYG) each week
- **A timer counts down each week** — if you do nothing, the week advances automatically. Business waits for no one!
- **PAYG customers stop paying if unhappy** — and can demand system removal if ignored
- **Unlock Village 2 and 3** by keeping customers happy and installing enough digesters

**Game over if:** you run out of money, any customer hits 0% satisfaction, or your reputation stays below 20% for 2 weeks.

---

```{raw} html
<div id="bg-root" style="font-family:system-ui,-apple-system,sans-serif;max-width:700px;margin:0 auto;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.14);">

<!-- Header -->
<div style="background:linear-gradient(135deg,#1b5e20,#388e3c);color:white;padding:0.75rem 1.1rem;display:flex;align-items:center;gap:0.9rem;">
  <span style="font-size:1.8rem;">⚡</span>
  <div style="flex:1;">
    <div style="font-weight:800;font-size:1.05rem;">Bio-Gaz: Village Energy Entrepreneur</div>
    <div id="bg-sub" style="font-size:0.76rem;opacity:0.85;margin-top:0.1rem;">Village 1 of 3 — Click a house to visit</div>
  </div>
  <div style="text-align:right;font-size:0.72rem;opacity:0.85;margin-right:0.5rem;">
    <div id="bg-vdots" style="font-size:1rem;letter-spacing:2px;">⬜⬜⬜</div>
    <div>Villages</div>
  </div>
  <div id="bg-timer" style="min-width:70px;text-align:right;"></div>
</div>

<!-- Map + Dashboard -->
<div style="display:flex;background:white;border:1px solid #c8e6c9;border-top:none;">
  <div style="flex:0 0 360px;height:260px;position:relative;overflow:hidden;">
    <svg id="bg-svg" width="360" height="260" viewBox="0 0 360 260" style="display:block;"></svg>
    <div id="bg-player" title="You — Bio-Gaz"
      style="position:absolute;width:26px;height:26px;background:#f57f17;border:3px solid white;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;font-size:0.58rem;font-weight:900;color:white;transition:left 0.5s cubic-bezier(.4,0,.2,1),top 0.5s cubic-bezier(.4,0,.2,1);pointer-events:none;z-index:10;">BG</div>
  </div>
  <div style="flex:1;min-width:0;padding:0.75rem 0.9rem;background:#f9fbe7;border-left:1px solid #dce775;font-size:0.78rem;">
    <div style="font-weight:700;color:#827717;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.4rem;">📊 Business</div>
    <div id="m-cap"  style="line-height:1.7;color:#555;">💰 Capital: <b style="color:#2e7d32;">$400</b></div>
    <div id="m-earn" style="line-height:1.7;color:#555;">📈 Earned: <b style="color:#2e7d32;">$0</b></div>
    <div id="m-inst" style="line-height:1.7;color:#555;">🔧 Installed: <b style="color:#2e7d32;">0/5</b></div>
    <div id="m-sat"  style="line-height:1.7;color:#555;">😊 Avg sat: <b style="color:#2e7d32;">—</b></div>
    <div id="m-co2"  style="line-height:1.7;color:#555;">🌱 CO₂ saved: <b style="color:#2e7d32;">0 kg</b></div>
    <div id="m-vent" style="line-height:1.7;color:#555;">💨 CH₄ vented: <b style="color:#2e7d32;">0 m³</b></div>
    <div id="m-dots" style="margin-top:0.5rem;display:flex;flex-wrap:wrap;gap:3px;"></div>
    <div id="bg-wkwrap" style="margin-top:0.55rem;display:none;">
      <button onclick="bgWeek()" style="width:100%;padding:0.4rem;background:#1b5e20;color:white;border:none;border-radius:7px;font-size:0.76rem;font-weight:700;cursor:pointer;">▶ Next week (Week <span id="bg-nw">1</span>)</button>
    </div>
  </div>
</div>

<!-- Dialogue panel -->
<div id="bg-panel" style="background:white;border:1px solid #c8e6c9;border-top:none;min-height:130px;padding:0.85rem 1rem;font-size:0.83rem;line-height:1.5;"></div>

<!-- Log -->
<div id="bg-log" style="background:#fafafa;border:1px solid #e0e0e0;border-top:none;border-radius:0 0 12px 12px;max-height:130px;overflow-y:auto;padding:0.55rem 0.9rem;font-size:0.75rem;color:#666;display:none;"></div>

</div>

<!-- Week-end modal — outside bg-root to avoid overflow:hidden clipping -->
<div id="bg-modal" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(27,94,32,0.88);z-index:9999;align-items:center;justify-content:center;padding:1rem;box-sizing:border-box;">
  <div id="bg-modal-inner" style="background:white;border-radius:12px;padding:1.2rem;max-width:460px;width:100%;max-height:85vh;overflow-y:auto;box-shadow:0 8px 32px rgba(0,0,0,0.3);"></div>
</div>

<style>
#bg-modal{display:none;}
#bg-modal.active{display:flex;}
.bg-house{cursor:pointer;}
.bg-house:hover rect:first-child{opacity:0.85;}
.dlg-opt{display:block;width:100%;text-align:left;margin:0.18rem 0;padding:0.35rem 0.75rem;border-radius:7px;border:1px solid;font-size:0.79rem;cursor:pointer;font-weight:600;background:white;transition:background 0.15s;}
.dlg-ok{border-color:#a5d6a7;color:#1b5e20;background:#f1f8e9;}
.dlg-ok:hover{background:#c8e6c9;}
.dlg-warn{border-color:#ffcc80;color:#e65100;background:#fff8e1;}
.dlg-warn:hover{background:#ffe0b2;}
.dlg-red{border-color:#ef9a9a;color:#b71c1c;background:#ffebee;}
.dlg-red:hover{background:#ffcdd2;}
.dlg-neutral{border-color:#e0e0e0;color:#555;background:#fafafa;}
.dlg-neutral:hover{background:#f0f0f0;}
.dlg-dim{border-color:#eee;color:#bbb;background:#fafafa;cursor:not-allowed;}
.bubble-owner{background:#fffde7;border:1px solid #ffe082;border-radius:4px 12px 12px 12px;padding:0.5rem 0.8rem;font-size:0.82rem;color:#333;margin-bottom:0.55rem;}
.bubble-you{background:#e3f2fd;border:1px solid #90caf9;border-radius:12px 4px 12px 12px;padding:0.5rem 0.8rem;font-size:0.82rem;color:#333;margin-bottom:0.55rem;}
@keyframes bg-pulse{0%{opacity:1;}100%{opacity:0.3;}}
</style>

<script>
(function(){

// ════════════════════════ CONSTANTS — edit here to tune the game ══════════════
var C = {
  // Physics (from course manual — Session 2)
  DUNG_PER_COW_KG:      10,    // kg dung produced per cow per day
  GAS_PER_KG:           0.04,  // m³ biogas per kg dung input (manual: 0.04 m³/kg)
  STOVE_M3_PER_HR:      0.5,   // m³/hour stove consumption
  CO2_PER_M3:           2.5,   // kg CO₂ saved per m³ biogas used (vs firewood/charcoal)
  // Feeding consistency: % of ideal daily dung actually fed each day
  FEED_TRAINED_MIN:     90,    // trained households are consistent
  FEED_TRAINED_MAX:     100,
  FEED_UNTRAINED_MIN:   65,    // untrained households skip days
  FEED_UNTRAINED_MAX:   100,
  // Cooking demand variability: multiplier on baseline h.cook (m³/day)
  COOK_TRAINED_MIN:     0.85,  // trained: consistent cooking schedule
  COOK_TRAINED_MAX:     1.15,
  COOK_UNTRAINED_MIN:   0.60,  // untrained: forgets to cook OR over-cooks
  COOK_UNTRAINED_MAX:   1.40,
  // Income
  SURPLUS_PER_M3_WK:    5,     // $ earned per m³/week surplus (used by player as service income)
  PROD_SELL:            80,    // $ customer pays for productive use equipment (cash sale)
  PROD_LOAN_WEEKS:      5,     // weeks to repay productive use loan
  PROD_LOAN_WEEKLY:     20,    // $ per week productive use loan repayment
  // Player costs
  START_CAPITAL:        400,   // $ player starts with
  TRAIN_COST:           30,    // $ to train a household
  METER_COST:           80,    // $ to install a smart meter
  PROD_COST:            50,    // $ to connect productive use equipment
  PAYG_FEE_MULT:        2.3,   // PAYG weekly fee = digester.fee × this multiplier
  LOAN_WEEKS:           12,    // number of weekly loan repayment instalments
  // PAYG satisfaction payment thresholds
  PAYG_SAT_FULL:        50,    // sat% ≥ this → full PAYG fee collected
  PAYG_SAT_HALF:        30,    // sat% ≥ this → half fee; below → no fee
  PAYG_REMOVAL:         9,     // sat% ≤ this → customer demands system removal
  // Random event probability per installed household per week
  EVENT_PROB_TRAINED:   0.08,  // 8% per week for trained households
  EVENT_PROB_UNTRAINED: 0.20,  // 20% per week for untrained households
  // Timer
  TIMER_SECS:           90,    // seconds per week countdown
};
// ══════════════════════════════════════════════════════════════════════════════

// ════════════════════════ CHARACTER PORTRAITS ════════════════════════════════
// SVG portrait generator — all characters 64×84 viewBox
function mkPortrait(sk,sh,hair,extras,smile){
  var eyes='<circle cx="25" cy="28" r="2.5" fill="#1a1a1a"/><circle cx="39" cy="28" r="2.5" fill="#1a1a1a"/>';
  return '<svg width="64" height="84" viewBox="0 0 64 84">'
    +'<rect x="10" y="54" width="44" height="30" rx="6" fill="'+sh+'"/>'
    +'<rect x="25" y="42" width="14" height="14" fill="'+sk+'"/>'
    +'<ellipse cx="32" cy="30" rx="20" ry="22" fill="'+sk+'"/>'
    +hair+eyes+(extras||'')
    +'<path d="'+(smile||'M25,39 Q32,45 39,39')+'" stroke="#795548" stroke-width="1.5" fill="none"/>'
    +'</svg>';
}
function hCurly(c){return '<ellipse cx="32" cy="12" rx="17" ry="11" fill="'+c+'"/><circle cx="17" cy="14" r="6" fill="'+c+'"/><circle cx="24" cy="7" r="6" fill="'+c+'"/><circle cx="32" cy="5" r="6" fill="'+c+'"/><circle cx="40" cy="7" r="6" fill="'+c+'"/><circle cx="47" cy="14" r="6" fill="'+c+'"/>';}
function hAfro(c){return '<circle cx="32" cy="10" r="19" fill="'+c+'"/><circle cx="15" cy="17" r="7" fill="'+c+'"/><circle cx="49" cy="17" r="7" fill="'+c+'"/>';}
function hShort(c){return '<ellipse cx="32" cy="13" rx="20" ry="11" fill="'+c+'"/>';}
function hWrap(f,b){return '<ellipse cx="32" cy="12" rx="24" ry="14" fill="'+f+'"/><ellipse cx="32" cy="8" rx="21" ry="8" fill="'+b+'"/><ellipse cx="50" cy="11" rx="9" ry="6" fill="'+f+'" transform="rotate(-20 50 11)"/>';}
function hHat(c){return '<ellipse cx="32" cy="14" rx="28" ry="5" fill="'+c+'"/><rect x="16" y="5" width="32" height="12" rx="3" fill="#ffe082"/><rect x="16" y="14" width="32" height="3" fill="#e65100" opacity="0.55"/>';}
function hHijab(c,c2){return '<ellipse cx="32" cy="12" rx="28" ry="16" fill="'+c+'"/><ellipse cx="32" cy="14" rx="22" ry="14" fill="'+(c2||c)+'"/><ellipse cx="32" cy="50" rx="28" ry="8" fill="'+c+'"/>';}
function hCap(){return '<rect x="14" y="8" width="36" height="14" rx="3" fill="white"/><rect x="14" y="18" width="36" height="3" fill="#1565c0" opacity="0.7"/><ellipse cx="46" cy="20" rx="4" ry="5" fill="#1a1a1a"/>';}
function hBun(c){return '<ellipse cx="32" cy="11" rx="14" ry="9" fill="'+c+'"/><circle cx="32" cy="7" r="8" fill="'+c+'"/><rect x="12" y="15" width="6" height="22" rx="3" fill="'+c+'"/><rect x="46" y="15" width="6" height="22" rx="3" fill="'+c+'"/>';}
function hElder(c){return '<ellipse cx="32" cy="12" rx="22" ry="13" fill="'+c+'"/>';}
function hBraids(c){return '<ellipse cx="32" cy="10" rx="18" ry="9" fill="'+c+'"/><rect x="12" y="8" width="8" height="46" rx="4" fill="'+c+'"/><rect x="44" y="8" width="8" height="46" rx="4" fill="'+c+'"/>';}
// Glasses helpers (drawn over eyes)
var GRECT='<rect x="17" y="23" width="13" height="9" rx="2.5" fill="none" stroke="#aaa" stroke-width="1.5"/><rect x="31" y="23" width="13" height="9" rx="2.5" fill="none" stroke="#aaa" stroke-width="1.5"/><line x1="30" y1="27" x2="31" y2="27" stroke="#aaa" stroke-width="1.5"/>';
var GOVAL='<ellipse cx="23" cy="27" rx="7" ry="5" fill="none" stroke="#666" stroke-width="1.5"/><ellipse cx="41" cy="27" rx="7" ry="5" fill="none" stroke="#666" stroke-width="1.5"/><line x1="30" y1="27" x2="34" y2="27" stroke="#666" stroke-width="1.5"/>';
var GRND='<circle cx="23" cy="27" r="7" fill="none" stroke="#555" stroke-width="1.5"/><circle cx="41" cy="27" r="7" fill="none" stroke="#555" stroke-width="1.5"/><line x1="30" y1="27" x2="34" y2="27" stroke="#555" stroke-width="1.5"/>';

var PORTRAITS={
  // Bio-Gaz (player): dark skin, voluminous curly afro, rectangular glasses, slate shirt
  'bg':     mkPortrait('#4e342e','#546e7a',hCurly('#1a1a1a'),GRECT,'M24,38 Q32,44 40,38'),
  // Village 1
  'amara':  mkPortrait('#6D4C41','#e65100',hWrap('#F9A825','#FFB300'),'<circle cx="11" cy="32" r="2.5" fill="#FFD700"/>','M22,38 Q32,48 42,38'),
  'kofi':   mkPortrait('#4e342e','#1565c0',hShort('#1a1a1a'),GOVAL+'<polygon points="25,54 32,60 39,54" fill="white"/>','M26,37 Q32,42 38,37'),
  'diallo': mkPortrait('#6D4C41','#4caf50',hHat('#ffd54f'),null,'M25,39 Q32,44 39,39'),
  'zara':   mkPortrait('#8D6E63','#e53935',hAfro('#1a1a1a'),'<circle cx="11" cy="31" r="3" fill="#FFD700"/><circle cx="53" cy="31" r="3" fill="#FFD700"/>','M24,38 Q32,45 40,38'),
  'chief':  mkPortrait('#6D4C41','#F9A825',hElder('#9e9e9e'),'<ellipse cx="32" cy="44" rx="8" ry="4" fill="#9e9e9e" opacity="0.7"/>','M26,38 Q32,43 38,38'),
  // Village 2
  'grace':  mkPortrait('#4e342e','white',hCap(),null,'M25,38 Q32,44 39,38'),
  'peter':  mkPortrait('#8D6E63','#f5f5f5',hShort('#3e2723'),GRND+'<polygon points="26,54 32,62 38,54" fill="#e0e0e0"/>','M26,37 Q32,42 38,37'),
  'fatima': mkPortrait('#6D4C41','#4a148c',hHijab('#1a237e','#283593'),null,'M24,38 Q32,46 40,38'),
  'jacob':  mkPortrait('#8D6E63','#1565c0',hHat('#ffd54f'),null,'M25,38 Q32,43 39,38'),
  'nurse':  mkPortrait('#5d4037','#b3e5fc',hCap(),'<rect x="28" y="56" width="8" height="16" rx="1" fill="#e53935" opacity="0.8"/><rect x="22" y="62" width="20" height="6" rx="1" fill="#e53935" opacity="0.8"/>','M25,38 Q32,44 39,38'),
  // Village 3
  'ben':    mkPortrait('#4e342e','white',hShort('#1a1a1a'),'<polygon points="30,54 34,54 33,72 31,72" fill="#1a237e"/><polygon points="29,54 35,54 34,58 30,58" fill="#283593"/>','M25,38 Q32,43 39,38'),
  'charity':mkPortrait('#7B5E57','#7b1fa2',hBraids('#3e2723'),GOVAL,'M25,37 Q32,43 39,37'),
  'moses':  mkPortrait('#8D6E63','#388e3c',hShort('#1a1a1a'),'<path d="M20,22 Q24,19 28,22" stroke="#1a1a1a" stroke-width="1.5" fill="none"/><path d="M36,22 Q40,19 44,22" stroke="#1a1a1a" stroke-width="1.5" fill="none"/>','M22,38 Q32,47 42,38'),
  'bishop': mkPortrait('#6D4C41','#4a148c',hElder('#bdbdbd'),'<ellipse cx="32" cy="45" rx="10" ry="5" fill="#bdbdbd" opacity="0.7"/><rect x="6" y="54" width="52" height="4" fill="#FFD700"/><line x1="32" y1="58" x2="32" y2="84" stroke="#FFD700" stroke-width="2"/><circle cx="32" cy="61" r="3" fill="#FFD700"/>','M26,37 Q32,42 38,37'),
  'sophia': mkPortrait('#5D4037','#f5f5f5',hBun('#3e2723'),'<polygon points="26,54 32,62 38,54" fill="#e0e0e0"/><line x1="24" y1="22" x2="30" y2="22" stroke="#1a1a1a" stroke-width="1.5"/><line x1="34" y1="22" x2="40" y2="22" stroke="#1a1a1a" stroke-width="1.5"/>','M26,38 Q32,42 38,38'),
};
// ══════════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════ DATA ═══════════════════════════════════

var VILLAGES=[
  {name:'Village 1 — Mwanzo',unlockTarget:{installed:3,sat:70},
   hh:[
    {id:'amara', name:'Mama Amara',  emoji:'👩‍🌾',x:65, y:58, cows:3,cook:1.2,budget:320,
     payPref:'cash',
     greeting:'Bio-Gaz! Welcome. I\'ve been hoping someone like you would come.',
     cookingText:'We cook three meals a day for five people. I spend two hours collecting firewood every morning and the smoke makes the youngest cough every night. It\'s exhausting.',
     satHigh:'The biogas is wonderful. We cook any time we want, no smoke, no firewood. The children are healthier.',
     satLow:'Things haven\'t been going well with the system. I\'m worried about it.'},
    {id:'kofi',  name:'Teacher Kofi',emoji:'📚',  x:285,y:58, cows:2,cook:2.0,budget:530,
     payPref:'loan',
     greeting:'Ah, the biogas technician! Please come in. The school kitchen is desperate for a better solution.',
     cookingText:'We feed 40 children every school day. Charcoal costs $40 a month — that\'s money that should go to books. And I worry about the children breathing the smoke.',
     satHigh:'The school kitchen runs on biogas now. Parents are impressed. It\'s become a teaching example for the science lessons.',
     satLow:'The kitchen has had problems. Teachers are complaining. I need this fixed.'},
    {id:'diallo',name:'Farmer Diallo',emoji:'🌾', x:65, y:198,cows:8,cook:2.0,budget:860,
     payPref:'cash',
     greeting:'Welcome! Eight cows and I still burn wood for cooking — that makes no sense. Tell me about biogas.',
     cookingText:'I cook large meals — workers eat here too. And in dry season I struggle to water my crops. I\'ve heard biogas can run a pump. Is that true?',
     satHigh:'Excellent! The cooking gas is consistent and I\'m using the surplus to run my irrigation pump. My yields are up 20% this season.',
     satLow:'Something\'s wrong. The gas keeps dropping and I can\'t rely on it for the pump.'},
    {id:'zara',  name:'Market Zara', emoji:'🛒',  x:285,y:198,cows:1,cook:0.5,budget:310,
     payPref:'payg',
     greeting:'Biogas? Yes! Come in. I cook all day at my stall and the charcoal costs are ruining my profit.',
     cookingText:'I start cooking at 6am and finish at 6pm. Charcoal takes 30% of my profits. And customers complain about the smoke near the food. I only have one cow though — is that enough?',
     satHigh:'My customers love the clean cooking. No smoke smell on the food. And I save money every week!',
     satLow:'The gas isn\'t reliable. I\'ve had to go back to charcoal some days and customers notice.'},
    {id:'chief', name:'Chief Nzinga',emoji:'👴',  x:175,y:122,cows:5,cook:2.0,budget:540,
     payPref:'cash',
     greeting:'Bio-Gaz. I have been expecting you. As village chief, I must be first to adopt clean energy.',
     cookingText:'Twelve people in my household. Five cows. I want to demonstrate to the whole village what is possible — they will follow my example. What do you recommend?',
     satHigh:'Three families have asked me about biogas after seeing mine. You should visit them — word travels fast in this village.',
     satLow:'People are watching my system. If it keeps having problems, they will not trust biogas. Please fix this quickly.'},
  ]},
  {name:'Village 2 — Kati',unlockTarget:{installed:4,sat:75},
   hh:[
    {id:'grace',  name:'Grace',     emoji:'👩‍🍳',x:65, y:58, cows:4,cook:1.6,budget:400,
     payPref:'payg',
     greeting:'Welcome! I run a small restaurant here. Reliable gas is everything to my business.',
     cookingText:'I serve customers all day. If gas stops, I lose business. Four cows — please tell me exactly how much gas I would get and whether it is reliable.',
     satHigh:'The restaurant has not had a single gas outage since the digester was installed. Revenue is up 15%.',
     satLow:'The gas has been unreliable. I\'ve had to turn customers away twice this week.'},
    {id:'peter',  name:'Peter',     emoji:'👨‍🔬',x:285,y:58, cows:2,cook:1.0,budget:350,
     payPref:'loan',
     greeting:'Excellent timing! I\'ve been researching biogas. Ask me anything — I may know more than you expect!',
     cookingText:'Small family, just two of us. Two cows. I want to understand the process properly before I commit. How does the retention time affect gas yield at my temperature?',
     satHigh:'I\'ve been monitoring the gas production daily. The data matches your predictions exactly. Fascinating system.',
     satLow:'Production has been lower than your estimates. I have data. Would you like to review it?'},
    {id:'fatima', name:'Fatima',    emoji:'👩',   x:65, y:198,cows:6,cook:2.5,budget:720,
     payPref:'cash',
     greeting:'Please sit. Six cows and a large family — we spend more on LPG than on food some months.',
     cookingText:'We have twelve family members living here. We cook three times a day plus preserve food. LPG cylinders cost so much and run out at the worst times. Can biogas fully replace them?',
     satHigh:'No more LPG deliveries. We cook freely. I cannot believe we waited so long for this.',
     satLow:'The gas sometimes runs out before cooking is done. We still need to buy LPG. I\'m disappointed.'},
    {id:'jacob',  name:'Jacob',     emoji:'👨‍🌾',x:285,y:198,cows:3,cook:1.2,budget:380,
     payPref:'loan',
     greeting:'I\'ve seen what biogas did for Mama Amara in the next village. I want the same.',
     cookingText:'Three cows, careful family. My wife says we should also think about a small generator for evenings — is excess gas enough for that?',
     satHigh:'Cooking is sorted and we\'re using the surplus to charge phone batteries for neighbours. Small income but it adds up.',
     satLow:'We\'re not getting enough gas for reliable cooking. Something needs to be checked.'},
    {id:'nurse',  name:'Nurse Anna',emoji:'👩‍⚕️',x:175,y:122,cows:4,cook:2.0,budget:600,
     payPref:'cash',
     greeting:'Thank you for coming. The clinic needs reliable heat for sterilising equipment. Safety is paramount here.',
     cookingText:'We sterilise instruments twice daily. We also cook for in-patients. Four cows. I need to know: is biogas safe enough for a medical setting? What about the H₂S?',
     satHigh:'The clinic has been running smoothly. The H₂S filter is replaced monthly as you showed us. Staff feel confident with the system.',
     satLow:'We had a H₂S smell last week. Staff were worried. This cannot happen here — please come urgently.'},
  ]},
  {name:'Village 3 — Mwisho',unlockTarget:null,
   hh:[
    {id:'ben',    name:'Ben',       emoji:'👨‍💼',x:65, y:58, cows:7,cook:3.0,budget:900,
     payPref:'cash',
     greeting:'Bio-Gaz! I run a crop processing business. Energy costs are killing my margins.',
     cookingText:'Seven cows, big operation. I want gas to dry crops AND run the kitchen. Can one digester do both, or do I need two? I want to maximise the return on investment.',
     satHigh:'Both the drying unit and kitchen run on biogas. I\'ve calculated the ROI — system pays back in 14 months.',
     satLow:'The system isn\'t producing enough for both uses. I need a serious conversation about what was promised.'},
    {id:'charity',name:'Charity',  emoji:'👩‍🏫',x:285,y:58, cows:3,cook:1.5,budget:440,
     payPref:'loan',
     greeting:'Welcome! I\'m the school headteacher. I want a showcase digester the students can study.',
     cookingText:'Three cows and a school kitchen for sixty children. But the educational value is just as important to me as the gas. I want students to measure inputs, record gas production, everything.',
     satHigh:'Students take daily readings and have won the district science fair with their biogas project. The community is so proud.',
     satLow:'The system has had issues that I can\'t explain to the students. They notice when things go wrong.'},
    {id:'moses',  name:'Moses',    emoji:'👨',   x:65, y:198,cows:2,cook:1.0,budget:300,
     payPref:'payg',
     greeting:'I am the first in my area to want biogas. My neighbours are watching. Please, be honest with me.',
     cookingText:'Two cows, modest home. I don\'t have much money but I believe in this. My wife is worried it won\'t work. I need you to be completely honest — will two cows be enough?',
     satHigh:'It works! My wife is converted. My neighbours are asking questions. You should come back with more systems.',
     satLow:'My wife said "I told you so." Please help me — my marriage depends on this system working.'},
    {id:'bishop', name:'Bishop K.',emoji:'🧑‍🤝‍🧑',x:285,y:198,cows:9,cook:4.0,budget:1100,
     payPref:'cash',
     greeting:'Bio-Gaz, the community hall serves three hundred families. We need serious capacity.',
     cookingText:'Nine cows, community hall kitchen for events and a daily feeding programme. We also want to sell surplus gas to neighbours — there is real demand here. What is the largest system you can install?',
     satHigh:'The hall kitchen runs every day. We\'ve started a gas-sharing scheme — three neighbouring households pipe from our system. This is transforming the whole area.',
     satLow:'The hall kitchen cannot be unreliable. Three hundred families depend on this. I need answers.'},
    {id:'sophia', name:'Sophia',   emoji:'👩‍🔬',x:175,y:122,cows:5,cook:2.0,budget:650,
     payPref:'loan',
     greeting:'Excellent. I\'m running a 3-year study on bio-slurry impact on crop yield. I need a reliable system.',
     cookingText:'Five cows, research compound. I need consistent, measurable gas production. I\'ll also be testing the bio-slurry on three crop varieties. This data will be published — it matters that the system works properly.',
     satHigh:'The bio-slurry is outperforming chemical fertiliser by 40% in my nitrogen trial. I\'m citing this installation in my paper.',
     satLow:'Variable gas production is introducing confounding factors into my research. I need the system stable.'},
  ]},
];

var SIZES=[
  {m3:4, label:'Small (4 m³)', cost:250,sell:300,fee:15,goodFor:'2–3 cows'},
  {m3:8, label:'Medium (8 m³)',cost:400,sell:500,fee:20,goodFor:'4–5 cows'},
  {m3:15,label:'Large (15 m³)',cost:650,sell:800,fee:30,goodFor:'7–8+ cows'},
];

var EVENTS=[
  {id:'underfeed',emoji:'😴',title:'Household stopped feeding daily',
   outcome:function(h){
     if(h.trained)return{sat:-5,cost:0,note:'Training paid off — they noticed the drop and corrected it quickly.'};
     return{sat:-20,cost:0,note:'Nobody reminded them to feed daily. Gas production down 50% this week.'};
   }},
  {id:'valve_on',emoji:'🔴',title:'Gas valve left open overnight',
   outcome:function(h){
     if(h.trained&&h.smartMeter)return{sat:-5,cost:0,note:'Smart meter + training: valve closed within minutes. No damage.'};
     if(h.trained)return{sat:-10,cost:0,note:'Trained customer smelled gas and closed the valve. No flashback.'};
     if(h.smartMeter)return{sat:-18,cost:30,note:'Smart meter alerted you. Emergency night visit — customer safe but shaken.'};
     return{sat:-38,cost:40,note:'UNTRAINED: valve open all night. Gas in the kitchen. Near miss! Village is talking.'};
   }},
  {id:'puncture',emoji:'💨',title:'Bag puncture — gas escaping',
   outcome:function(h){
     if(h.smartMeter)return{sat:-6,cost:15,note:'Smart meter flagged pressure loss instantly. Quick patch, minimal gas lost.'};
     if(h.trained)return{sat:-14,cost:20,note:'Trained customer noticed the bag deflating and called you the same day.'};
     return{sat:-22,cost:30,note:'Puncture went unnoticed for days. Significant gas lost and customer very unhappy.'};
   }},
  {id:'pipe_joint',emoji:'🔧',title:'Gas pipe joint has come loose',
   outcome:function(h){
     if(h.smartMeter)return{sat:-4,cost:10,note:'Smart meter pressure alert. You directed the fix remotely — 15-minute job.'};
     if(h.trained)return{sat:-10,cost:12,note:'Trained customer noticed the smell and called you the same day.'};
     return{sat:-22,cost:15,note:'No smart meter, untrained. Customer waited 5 days to report. Reputation hit.'};
   }},
  {id:'children',emoji:'👶',title:'Children in the exclusion zone',
   outcome:function(h){
     if(h.trained)return{sat:-5,cost:8,note:'Exclusion zone was fenced as instructed. Minor: inlet cover hinge bent.'};
     return{sat:-30,cost:50,note:'No exclusion zone — children pulled a fitting loose and damaged the bag. Expensive repair.'};
   }},
  {id:'h2s',emoji:'☠️',title:'H₂S smell in the kitchen',
   outcome:function(h){
     if(h.trained&&h.smartMeter)return{sat:-8,cost:10,note:'Smart meter + training: valve closed, H₂S filter replaced. Clean outcome.'};
     if(h.trained)return{sat:-12,cost:10,note:'Trained: they shut the valve, opened windows, called you. Filter replaced — clear.'};
     return{sat:-50,cost:20,note:'DANGER: Untrained family kept cooking while smelling gas! Health complaint. Word spread.'};
   }},
  {id:'overpressure',emoji:'💥',title:'Bag dangerously over-inflated',
   outcome:function(h){
     if(h.trained)return{sat:-8,cost:0,note:'Trained: they opened the valve immediately as taught. Crisis averted.'};
     return{sat:-40,cost:75,note:'UNTRAINED: no idea what to do. Bag seam split. Major repair. Training would have prevented this.'};
   }},
  {id:'filter',emoji:'🪜',title:'H₂S filter needs replacing',
   outcome:function(h){
     if(h.smartMeter)return{sat:-3,cost:8,note:'Smart meter flow-rate alert flagged this. Quick filter swap.'};
     return{sat:-10,cost:8,note:'Customer noticed sulphur smell. H₂S filter was overdue — replaced.'};
   }},
];

// ═══════════════════════════════════ STATE ══════════════════════════════════

var G;

function newHH(t){
  return {id:t.id,name:t.name,emoji:t.emoji,x:t.x,y:t.y,
    cows:t.cows,cook:t.cook,budget:t.budget,payPref:t.payPref,
    greeting:t.greeting,cookingText:t.cookingText,
    satHigh:t.satHigh,satLow:t.satLow,
    digester:null,trained:false,smartMeter:false,prod:false,
    sat:80,issues:[],issueAge:0,
    financing:null,loanWeeksLeft:0,loanWeekly:0,paygWeekly:0,
    prodFinancing:null,prodLoanWeeksLeft:0,prodLoanWeekly:0,
    lastFeedPct:100,lastProdDay:0,lastCookDay:0};
}

function initState(){
  stopTimer();
  G={village:0,week:0,phase:'setup',capital:C.START_CAPITAL,earned:0,vented:0,co2:0,
     totalWeeks:0,log:[],at:null,critLowWeeks:0,started:false,
     hh:VILLAGES[0].hh.map(newHH)};
}

// ═══════════════════════════════════ MAP ════════════════════════════════════

function tr(x,y){
  return '<circle cx="'+x+'" cy="'+y+'" r="11" fill="#388e3c" opacity="0.6"/>'
    +'<rect x="'+(x-3)+'" y="'+(y+8)+'" width="6" height="7" fill="#795548"/>';
}
function houseEl(h){
  var col=h.digester?(h.issues.length?'#ffcc80':'#a5d6a7'):'#fff9c4';
  var str=h.digester?(h.issues.length?'#f57f17':'#2e7d32'):'#f9a825';
  var hx=h.x-24,hy=h.y-22;
  var badges='';
  if(h.trained)badges+='<text x="'+(h.x+14)+'" y="'+(hy-1)+'" font-size="9">🎓</text>';
  if(h.smartMeter)badges+='<text x="'+(h.x-28)+'" y="'+(hy-1)+'" font-size="9">📡</text>';
  if(h.financing==='payg')badges+='<text x="'+h.x+'" y="'+(hy-14)+'" text-anchor="middle" font-size="7" fill="#1565c0" font-weight="bold">PAYG</text>';
  else if(h.financing==='loan'&&h.loanWeeksLeft>0)badges+='<text x="'+h.x+'" y="'+(hy-14)+'" text-anchor="middle" font-size="7" fill="#e65100" font-weight="bold">LOAN</text>';
  if(h.issues.length)badges+='<circle cx="'+(h.x+20)+'" cy="'+(h.y-20)+'" r="5" fill="#e53935"/>'
    +'<text x="'+(h.x+20)+'" y="'+(h.y-16)+'" text-anchor="middle" font-size="7" fill="white" font-weight="bold">!</text>';
  return '<g id="bgh-'+h.id+'" class="bg-house">'
    +'<rect x="'+hx+'" y="'+hy+'" width="48" height="36" rx="5" fill="'+col+'" stroke="'+str+'" stroke-width="2.5"/>'
    +'<polygon points="'+(hx-4)+','+hy+' '+h.x+','+(hy-15)+' '+(hx+52)+','+hy+'" fill="#e64a19"/>'
    +'<text x="'+h.x+'" y="'+(h.y+5)+'" text-anchor="middle" font-size="14">'+h.emoji+'</text>'
    +'<text x="'+h.x+'" y="'+(h.y+19)+'" text-anchor="middle" font-size="7" fill="#333" font-weight="600">'+h.name.split(' ')[0]+'</text>'
    +badges+'</g>';
}
function drawMap(){
  var s=document.getElementById('bg-svg');
  s.innerHTML=
    '<rect x="0" y="0" width="360" height="260" fill="#c8e6c9"/>'
    +'<rect x="148" y="0" width="64" height="260" fill="#e8d5b7"/>'
    +'<rect x="0" y="108" width="360" height="50" fill="#e8d5b7"/>'
    +'<line x1="148" y1="0" x2="148" y2="260" stroke="#c9b99a" stroke-width="1" stroke-dasharray="7,5"/>'
    +'<line x1="212" y1="0" x2="212" y2="260" stroke="#c9b99a" stroke-width="1" stroke-dasharray="7,5"/>'
    +'<line x1="0" y1="108" x2="360" y2="108" stroke="#c9b99a" stroke-width="1" stroke-dasharray="7,5"/>'
    +'<line x1="0" y1="158" x2="360" y2="158" stroke="#c9b99a" stroke-width="1" stroke-dasharray="7,5"/>'
    +tr(22,32)+tr(322,32)+tr(22,222)+tr(322,222)+tr(105,76)+tr(242,76)+tr(105,175)+tr(242,175)+tr(180,24)+tr(180,228)
    +'<rect x="145" y="218" width="70" height="32" rx="5" fill="#90a4ae"/>'
    +'<polygon points="138,218 180,202 222,218" fill="#607d8b"/>'
    +'<text x="180" y="239" text-anchor="middle" font-size="8" fill="white" font-weight="bold">YOUR WORKSHOP</text>'
    +G.hh.map(houseEl).join('');
  G.hh.forEach(function(h){
    var el=document.getElementById('bgh-'+h.id);
    if(el)el.addEventListener('click',function(){bgVisit(h.id);});
  });
}
function moveTo(x,y){
  var p=document.getElementById('bg-player');
  p.style.left=(x-13)+'px';p.style.top=(y-13)+'px';
}

// ═══════════════════════════════════ DASHBOARD ══════════════════════════════

function $s(id,html){var e=document.getElementById(id);if(e)e.innerHTML=html;}
function panel(html){$s('bg-panel',html);}

function updateDash(){
  var inst=G.hh.filter(function(h){return h.digester;});
  var sat=inst.length?Math.round(inst.reduce(function(a,h){return a+h.sat;},0)/inst.length):'—';
  var satCol=sat==='—'?'#2e7d32':sat>=70?'#2e7d32':sat>=40?'#e65100':'#b71c1c';
  $s('m-cap','💰 Capital: <b style="color:'+(G.capital<100?'#b71c1c':'#2e7d32')+';">$'+G.capital+'</b>');
  $s('m-earn','📈 Earned: <b style="color:#2e7d32;">$'+G.earned+'</b>');
  $s('m-inst','🔧 Installed: <b style="color:#2e7d32;">'+inst.length+'/5</b>');
  $s('m-sat','😊 Avg sat: <b style="color:'+satCol+';">'+(sat==='—'?'—':sat+'%')+'</b>');
  $s('m-co2','🌱 CO₂ saved: <b style="color:#2e7d32;">'+G.co2+' kg</b>');
  $s('m-vent','💨 CH₄ vented: <b style="color:'+(G.vented>0?'#e65100':'#2e7d32')+';">'+G.vented.toFixed(1)+' m³</b>');
  $s('bg-nw',G.week+1);
  var vdots=['⬜','⬜','⬜'];
  for(var i=0;i<G.village;i++)vdots[i]='✅';
  vdots[G.village]='🟩';
  $s('bg-vdots',vdots.join(''));
  $s('bg-sub',VILLAGES[G.village].name+' — Week '+G.week+(G.phase==='setup'?' (setup)':''));
  $s('m-dots',G.hh.map(function(h){
    if(!h.digester)return'';
    return'<span title="'+h.name+' — '+h.sat+'%" style="font-size:0.88rem;cursor:pointer;" onclick="bgVisit(\''+h.id+'\')">'
      +h.emoji+(h.issues.length?'🔴':'')+'</span>';
  }).join(' '));
  if(inst.length>0)document.getElementById('bg-wkwrap').style.display='block';
}

function showLog(){
  var el=document.getElementById('bg-log');
  if(!G.log.length){el.style.display='none';return;}
  el.style.display='block';
  el.innerHTML=G.log.slice(0,60).map(function(l){
    return'<div style="padding:0.1rem 0;border-bottom:1px solid #f0f0f0;">'+l+'</div>';
  }).join('');
  el.scrollTop=0;
}

// ═══════════════════════════════════ TIMER ══════════════════════════════════

var timerIv=null,timerSecs=0;

function startTimer(){
  if(!G.started||G.phase==='gameover'||G.phase==='won')return;
  clearInterval(timerIv);
  timerSecs=C.TIMER_SECS;
  updateTimerUI();
  timerIv=setInterval(function(){
    timerSecs--;
    updateTimerUI();
    if(timerSecs<=0){clearInterval(timerIv);timerIv=null;bgWeek();}
  },1000);
}

function stopTimer(){
  clearInterval(timerIv);timerIv=null;
  var el=document.getElementById('bg-timer');
  if(el)el.innerHTML='';
}

function updateTimerUI(){
  var el=document.getElementById('bg-timer');
  if(!el)return;
  var pct=Math.max(0,(timerSecs/C.TIMER_SECS)*100);
  var col=timerSecs>40?'rgba(255,255,255,0.9)':timerSecs>15?'#ffcc80':'#ef9a9a';
  var anim=timerSecs<=10?' style="animation:bg-pulse 0.5s infinite alternate;"':'';
  el.innerHTML='<div style="font-size:0.68rem;margin-bottom:3px;text-align:right;color:rgba(255,255,255,0.85);">⏱ '+timerSecs+'s</div>'
    +'<div style="background:rgba(255,255,255,0.25);border-radius:3px;height:5px;overflow:hidden;">'
    +'<div'+anim+' style="background:'+col+';height:5px;width:'+pct+'%;transition:width 1s linear;border-radius:3px;"></div>'
    +'</div>';
}

// ═══════════════════════════════════ MODAL ══════════════════════════════════

function showWeekModal(lines,weekNum){
  var modal=document.getElementById('bg-modal');
  var inner=document.getElementById('bg-modal-inner');
  if(!modal||!inner)return;
  var html='<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.75rem;">'
    +'<div style="font-size:1.05rem;font-weight:800;color:#1b5e20;">📅 Week '+weekNum+' Summary</div>'
    +'<button onclick="bgCloseModal()" style="background:#1b5e20;color:white;border:none;border-radius:6px;padding:0.32rem 0.85rem;cursor:pointer;font-size:0.83rem;font-weight:700;">Continue →</button>'
    +'</div>';
  lines.forEach(function(l){
    var bg='transparent',col='#555';
    if(l.indexOf('🚨')>=0){bg='#ffebee';col='#b71c1c';}
    else if(l.indexOf('⚠️')>=0||l.indexOf('❌')>=0){bg='#fff8e1';col='#e65100';}
    else if(l.indexOf('✅')>=0||l.indexOf('⚡')>=0||l.indexOf('🎉')>=0){bg='#f1f8e9';col='#2e7d32';}
    else if(l.indexOf('💳')>=0||l.indexOf('💰')>=0){bg='#e3f2fd';col='#1565c0';}
    html+='<div style="background:'+bg+';color:'+col+';font-size:0.78rem;padding:0.22rem 0.55rem;border-radius:4px;margin:0.1rem 0;line-height:1.5;">'+l+'</div>';
  });
  inner.innerHTML=html;
  modal.classList.add('active');
}

window.bgCloseModal=function(){
  var modal=document.getElementById('bg-modal');
  if(modal)modal.classList.remove('active');
  if(G.at)bgVisit(G.at);
  else panel('<p style="color:#555;font-size:0.875rem;margin:0;">Week '+G.week+' complete — check log for issues. Timer running for next week.</p>');
  startTimer();
};

// ═══════════════════════════════ DIALOGUE SYSTEM ════════════════════════════

function dlgRender(h,nodeId){
  var nodes=dlgTree(h);
  var node=nodes[nodeId];
  if(!node){bgLeave();return;}
  var isBG=node.speaker==='bg';
  var speakerLabel=isBG?'⚡ You — Bio-Gaz':h.emoji+' '+h.name;
  var optsHtml=(node.opts||[]).map(function(o){
    var cls=o.cls||'dlg-neutral';
    var dis=o.disabled?' disabled':'';
    var onclick=o.fn?"onclick='"+o.fn+"'":''; // single-quote wrapper so double-quoted JS args don't break HTML
    return'<button class="dlg-opt '+cls+'"'+dis+' '+onclick+'>'+o.label+'</button>';
  }).join('');
  var portraitKey=isBG?'bg':h.id;
  var avatarHtml=PORTRAITS[portraitKey]
    ?'<div style="flex-shrink:0;width:68px;text-align:center;line-height:0;">'+PORTRAITS[portraitKey]+'</div>'
    :'<span style="font-size:1.7rem;flex-shrink:0;line-height:1.1;">'+(isBG?'⚡':h.emoji)+'</span>';
  panel(
    '<div style="display:flex;gap:0.7rem;align-items:flex-start;">'
    +avatarHtml
    +'<div style="flex:1;min-width:0;">'
    +'<div style="font-size:0.71rem;font-weight:700;color:#888;margin-bottom:0.18rem;">'+speakerLabel+'</div>'
    +'<div class="'+(isBG?'bubble-you':'bubble-owner')+'">'+node.text+'</div>'
    +optsHtml
    +'</div></div>'
  );
}

window.bgDlg=function(id,nodeId){
  var h=G.hh.find(function(x){return x.id===id;});
  if(h)dlgRender(h,nodeId);
};

function prefLabel(pref){
  if(pref==='cash')return'pay outright if possible';
  if(pref==='loan')return'prefer to pay in instalments';
  return'prefer pay-as-you-go (weekly)';
}

function dlgTree(h){
  var id=h.id;
  var gd=+(h.cows*0.4).toFixed(1);
  var surplus=+(gd-h.cook).toFixed(1);
  var matchLabel=gd>=h.cook*0.88&&gd<=h.cook*1.45
    ?'✅ Good balance — production meets cooking need'
    :gd>h.cook*1.45
      ?'⚠️ Large surplus — extra gas can power equipment'
      :'❌ Gas deficit — will need to supplement. Manage expectations!';

  // ── PRE-INSTALLATION ───────────────────────────────────────────────────
  if(!h.digester){
    var installNodes={};

    SIZES.forEach(function(sz){
      var canCash=G.capital>=sz.cost&&h.budget>=sz.sell;
      var canLoan=G.capital>=sz.cost;
      var profit=sz.sell-sz.cost;
      var gasOut=+(h.cows*0.4).toFixed(1);
      var meetsNeed=gasOut>=h.cook*0.88;
      var sur2=+(gasOut-h.cook).toFixed(1);
      var lw=Math.round(sz.sell/C.LOAN_WEEKS);
      var pw=Math.round(sz.fee*C.PAYG_FEE_MULT);

      installNodes['confirm_'+sz.m3]={
        speaker:'bg',
        text:'<b>'+sz.label+' — '+sz.goodFor+'</b><br>'
          +'Gas: <b>'+gasOut+' m³/day</b> | Cooking need: <b>'+h.cook+' m³/day</b> — '
          +(meetsNeed?'<b style="color:#2e7d32;">✅ meets need</b>':'<b style="color:#e65100;">⚠️ deficit</b>')
          +(sur2>0?' | ⚡ '+sur2+' m³/day surplus available':'')
          +'<br><br><b>Payment options — '+h.name.split(' ')[0]+' prefers to '+prefLabel(h.payPref)+':</b>'
          +'<table style="width:100%;font-size:0.73rem;margin:0.4rem 0;border-collapse:collapse;">'
          +'<tr style="background:#f0f0f0;"><th style="padding:3px 6px;text-align:left;border:1px solid #ddd;">Model</th><th style="padding:3px;border:1px solid #ddd;">You get now</th><th style="padding:3px;border:1px solid #ddd;">Weekly from customer</th></tr>'
          +'<tr style="'+(h.payPref==='cash'?'background:#f1f8e9;font-weight:700;':'')+'"><td style="padding:3px 6px;border:1px solid #ddd;">💰 Cash</td><td style="padding:3px 6px;border:1px solid #ddd;color:#2e7d32;">+$'+profit+'</td><td style="padding:3px 6px;border:1px solid #ddd;">$'+sz.fee+'/wk maint</td></tr>'
          +'<tr style="background:#fff8e1;'+(h.payPref==='loan'?'font-weight:700;':'')+'"><td style="padding:3px 6px;border:1px solid #ddd;">💳 Loan</td><td style="padding:3px 6px;border:1px solid #ddd;color:#e65100;">−$'+sz.cost+'</td><td style="padding:3px 6px;border:1px solid #ddd;">$'+(lw+sz.fee)+'/wk × '+C.LOAN_WEEKS+', then $'+sz.fee+'</td></tr>'
          +'<tr style="background:#e3f2fd;'+(h.payPref==='payg'?'font-weight:700;':'')+'"><td style="padding:3px 6px;border:1px solid #ddd;">⚡ PAYG</td><td style="padding:3px 6px;border:1px solid #ddd;color:#e65100;">−$'+sz.cost+'</td><td style="padding:3px 6px;border:1px solid #ddd;">$'+pw+'/wk (if sat ≥50%)</td></tr>'
          +'</table>',
        opts:[
          canCash
            ?{label:'💰 Cash — '+h.name.split(' ')[0]+' pays $'+sz.sell+' now (+$'+profit+' profit)',cls:'dlg-ok',
              fn:'bgInstall("'+id+'",'+sz.m3+',"cash");bgDlg("'+id+'","installed_welcome")'}
            :{label:'💰 Cash — over their $'+h.budget+' budget',cls:'dlg-dim',disabled:true},
          canLoan
            ?{label:'💳 Loan — they pay $'+lw+'/wk for 12 weeks',cls:'dlg-warn',
              fn:'bgInstall("'+id+'",'+sz.m3+',"loan");bgDlg("'+id+'","installed_loan_welcome")'}
            :{label:'💳 Loan — need $'+(sz.cost-G.capital)+' more capital',cls:'dlg-dim',disabled:true},
          canLoan
            ?{label:'⚡ PAYG — you own it, they pay $'+pw+'/wk',cls:'dlg-warn',
              fn:'bgInstall("'+id+'",'+sz.m3+',"payg");bgDlg("'+id+'","installed_payg_welcome")'}
            :{label:'⚡ PAYG — need more capital',cls:'dlg-dim',disabled:true},
          {label:'← Back to size options',cls:'dlg-neutral',fn:'bgDlg("'+id+'","proposal")'},
        ]
      };
    });

    return Object.assign({
      'start':{
        speaker:'owner',text:h.greeting,
        opts:[
          {label:'Tell me about your cooking situation →',cls:'dlg-neutral',fn:'bgDlg("'+id+'","cooking")'},
          {label:'How many cows do you have? →',cls:'dlg-neutral',fn:'bgDlg("'+id+'","cows")'},
          {label:'What\'s your budget and payment preference? →',cls:'dlg-neutral',fn:'bgDlg("'+id+'","budget")'},
          {label:'I\'d like to propose a biogas system →',cls:'dlg-ok',fn:'bgDlg("'+id+'","proposal")'},
          {label:'Goodbye — I\'ll come back another time',cls:'dlg-neutral',fn:'bgLeave()'},
        ]
      },
      'cooking':{
        speaker:'owner',text:h.cookingText,
        opts:[
          {label:'With your cows, how much gas could you get? →',cls:'dlg-neutral',fn:'bgDlg("'+id+'","sizing")'},
          {label:'Let me show you the digester options →',cls:'dlg-ok',fn:'bgDlg("'+id+'","proposal")'},
          {label:'Back',cls:'dlg-neutral',fn:'bgDlg("'+id+'","start")'},
        ]
      },
      'cows':{
        speaker:'owner',
        text:'I have <b>'+h.cows+' cows</b>. Each produces about 10 kg of dung per day — '+h.cows*10+' kg daily. You say that produces gas?',
        opts:[
          {label:'"Yes — at 40 litres per kg, that\'s '+gd+' m³/day. Let me explain..." →',cls:'dlg-neutral',fn:'bgDlg("'+id+'","sizing")'},
          {label:'Back',cls:'dlg-neutral',fn:'bgDlg("'+id+'","start")'},
        ]
      },
      'sizing':{
        speaker:'bg',
        text:'<b>Manual formula:</b> 1 cow = 10 kg dung/day × 0.04 m³/kg = 0.4 m³ gas/day<br>'
          +'<b>'+h.cows+' cows → '+h.cows*10+' kg dung/day → '+gd+' m³ gas/day</b><br>'
          +'Daily feed: '+h.cows*10+' kg dung + '+h.cows*10+' kg water = '+h.cows*20+' kg slurry<br>'
          +'Cooking demand: '+h.cook+' m³/day ('+(h.cook/C.STOVE_M3_PER_HR).toFixed(1)+' hrs × '+C.STOVE_M3_PER_HR+' m³/hr)<br>'
          +'<b>'+matchLabel+'</b><br>'
          +'<span style="font-size:0.74rem;color:#888;">⚠️ Untrained households feed inconsistently — real output varies 65–100% of expected.</span>',
        opts:[
          {label:'Show me the digester options →',cls:'dlg-ok',fn:'bgDlg("'+id+'","proposal")'},
          {label:'Back',cls:'dlg-neutral',fn:'bgDlg("'+id+'","start")'},
        ]
      },
      'budget':{
        speaker:'owner',
        text:'My budget is <b>$'+h.budget+'</b>. I would prefer to <b>'+prefLabel(h.payPref)+'</b>. Is that workable?',
        opts:[
          {label:'"Yes — I have cash, loan, and PAYG options. Let me show you →"',cls:'dlg-ok',fn:'bgDlg("'+id+'","proposal")'},
          {label:'Back',cls:'dlg-neutral',fn:'bgDlg("'+id+'","start")'},
        ]
      },
      'proposal':{
        speaker:'owner',
        text:'Please show me the options. Budget: <b>$'+h.budget+'</b> | Cooking need: <b>'+h.cook+' m³/day</b> | I prefer to <b>'+prefLabel(h.payPref)+'</b>.',
        opts:SIZES.map(function(sz){
          var canCash2=G.capital>=sz.cost&&h.budget>=sz.sell;
          var canLoan2=G.capital>=sz.cost;
          var gasMatch=Math.abs(+(h.cows*0.4).toFixed(1)-h.cook)<=0.3?'✅':
                       (+(h.cows*0.4).toFixed(1))>h.cook*1.4?'⚡':'⚠️';
          var label=sz.label+' ($'+sz.sell+', '+sz.goodFor+') '+gasMatch;
          if(!canLoan2)return{label:label+' — need $'+(sz.cost-G.capital)+' more capital',cls:'dlg-dim',disabled:true};
          if(!canCash2)return{label:label+' — over budget: loan/PAYG only →',cls:'dlg-warn',fn:'bgDlg("'+id+'","confirm_'+sz.m3+'")'};
          return{label:label+(h.payPref==='cash'?' ★':'')+' — discuss →',cls:'dlg-ok',fn:'bgDlg("'+id+'","confirm_'+sz.m3+'")'};
        }).concat([{label:'Not today — I\'ll think about it',cls:'dlg-neutral',fn:'bgLeave()'}])
      },
    },installNodes);
  }

  // ── POST-INSTALLATION ──────────────────────────────────────────────────
  var satText=h.sat>=75?h.satHigh:h.sat>=45?'The system is working, but there have been some issues lately.':h.satLow;
  var greeting2=h.sat>=70?'Bio-Gaz! Welcome back. Things are going well!':h.sat>=40?'Ah Bio-Gaz. Glad you came — we\'ve had some difficulties.':'Bio-Gaz. We need to talk. I\'m not happy.';

  var mainOpts=[{label:'How is the system working? →',cls:'dlg-neutral',fn:'bgDlg("'+id+'","status")'}];
  if(h.issues.length)mainOpts.push({label:'🔧 There\'s a maintenance issue — let\'s sort it',cls:'dlg-warn',fn:'bgDlg("'+id+'","fix_pitch")'});
  if(!h.trained)mainOpts.push({label:'🎓 I\'d like to train your household',cls:'dlg-warn',fn:'bgDlg("'+id+'","train_pitch")'});
  if(!h.smartMeter)mainOpts.push({label:'📡 I have a smart meter to offer you',cls:'dlg-neutral',fn:'bgDlg("'+id+'","meter_pitch")'});
  if(surplus>0&&!h.prod)mainOpts.push({label:'⚡ Your surplus gas could earn you money',cls:'dlg-ok',fn:'bgDlg("'+id+'","prod_pitch")'});
  mainOpts.push({label:'Goodbye',cls:'dlg-neutral',fn:'bgLeave()'});

  var payInfo='';
  if(h.financing==='loan'&&h.loanWeeksLeft>0)payInfo=' | 💳 Loan: '+h.loanWeeksLeft+' wks left ($'+h.loanWeekly+'/wk)';
  else if(h.financing==='payg')payInfo=' | ⚡ PAYG: $'+h.paygWeekly+'/wk (halves at sat<50%, stops at sat<30%)';

  var nodes={
    'installed_welcome':{
      speaker:'owner',
      text:'Wonderful! I\'m so glad we did this. When will the gas start flowing?',
      opts:[{label:'"Gas starts in 2–4 weeks as microbes establish. Here\'s what you need to do daily..." →',cls:'dlg-neutral',fn:'bgDlg("'+id+'","post_start")'}]
    },
    'installed_loan_welcome':{
      speaker:'owner',
      text:'A loan — perfect! I could not afford the full amount upfront. $'+h.loanWeekly+'/week for 12 weeks is manageable. When does the gas start?',
      opts:[{label:'"2–4 weeks. Keep the daily feeding up and your payments will be easy." →',cls:'dlg-ok',fn:'bgDlg("'+id+'","post_start")'}]
    },
    'installed_payg_welcome':{
      speaker:'owner',
      text:'PAYG — so you own the equipment and I pay $'+h.paygWeekly+'/week? No big upfront cost. That suits me! But please make sure it works well.',
      opts:[{label:'"My weekly income depends on it working — you\'ll be in good hands." →',cls:'dlg-ok',fn:'bgDlg("'+id+'","post_start")'}]
    },
    'post_start':{
      speaker:'bg',
      text:'Feed the digester every day with '+h.cows*10+' kg of dung mixed 1:1 with water. Keep the inlet and outlet clear. Check the bag is inflating. <b>Always turn the gas valve off after cooking.</b> I\'ll come back to train your household properly.'
        +(h.financing==='loan'?'<br><br>💳 <b>Loan:</b> $'+h.loanWeekly+'/week for '+h.loanWeeksLeft+' weeks. If satisfaction drops below 30% your payment pauses that week.':'')
        +(h.financing==='payg'?'<br><br>⚡ <b>PAYG:</b> I charge $'+h.paygWeekly+'/week. If you\'re unhappy (sat<50%) I get half. Below 30% — nothing that week. If things get very bad you can demand I remove the system.':''),
      opts:[{label:'"Understood. Thank you!"',cls:'dlg-ok',fn:'bgDlg("'+id+'","start2")'}]
    },
    'start2':{speaker:'owner',text:greeting2,opts:mainOpts},
    'start':{speaker:'owner',text:greeting2,opts:mainOpts},
    'status':{
      speaker:'owner',
      text:satText+'<br><br>'
        +'<div style="background:#f5f5f5;border-radius:6px;padding:0.4rem 0.6rem;font-size:0.75rem;color:#555;line-height:1.8;">'
        +'<b>Expected:</b> '+h.cows*10+' kg dung/day → '+gd+' m³/day gas | Stove need: '+h.cook+' m³/day ('+(h.cook/C.STOVE_M3_PER_HR).toFixed(1)+'hrs)<br>'
        +(h.lastProdDay?'<b>Last week actual:</b> fed '+h.lastFeedPct+'% → '+h.lastProdDay+' m³/day produced | cooked '+h.lastCookDay+' m³/day':'<i>No data yet — advance a week first</i>')
        +'<br>Sat: <b>'+h.sat+'%</b>'
        +(h.trained?' | 🎓 Trained':'')+(h.smartMeter?' | 📡 Smart meter':'')
        +(h.prod?' | ⚡ Productive use'+(h.prodFinancing==='loan'&&h.prodLoanWeeksLeft>0?' (loan '+h.prodLoanWeeksLeft+' wks)':h.prodFinancing==='payg'?' (PAYG)':''):'')
        
        +payInfo
        +'</div>',
      opts:[{label:'Back',cls:'dlg-neutral',fn:'bgDlg("'+id+'","start")'}]
    },
  };

  if(h.issues.length){
    nodes['fix_pitch']={
      speaker:'owner',
      text:'Yes — <b>'+h.issues[0].emoji+' '+h.issues[0].desc+'</b>. It\'s affecting us.<br>'
        +'<span style="font-size:0.78rem;color:#777;">'+h.issues[0].note+'</span>',
      opts:[
        {label:'I\'ll fix it now — $'+h.issues[0].cost,cls:'dlg-red',fn:'bgFix("'+id+'");bgDlg("'+id+'","start")'},
        {label:'I need to come back with funds',cls:'dlg-neutral',fn:'bgDlg("'+id+'","start")'},
      ]
    };
  }

  if(!h.trained){
    nodes['train_pitch']={
      speaker:'bg',
      text:'I\'d like to spend an hour with your household covering:<br>'
        +'1. <b>Daily feeding</b> — the right amount, every day, no skipping<br>'
        +'2. <b>Safety</b> — valve off after cooking, what to do if you smell gas<br>'
        +'3. <b>Checks</b> — how to spot a puncture or pressure drop early<br><br>'
        +'This prevents most of the costly incidents I see. Cost: <b>$'+C.TRAIN_COST+'</b>.',
      opts:[
        {label:'"Yes — that sounds essential." ($'+C.TRAIN_COST+')',cls:'dlg-ok',fn:'bgTrain("'+id+'");bgDlg("'+id+'","train_done")'},
        {label:'Let me think about it',cls:'dlg-neutral',fn:'bgDlg("'+id+'","start")'},
      ]
    };
    nodes['train_done']={
      speaker:'owner',
      text:'That was very useful. I didn\'t realise how important daily feeding consistency was. And I\'ll make sure everyone knows the valve must be closed after cooking.',
      opts:[{label:'Good. I\'ll check back soon.',cls:'dlg-ok',fn:'bgDlg("'+id+'","start")'}]
    };
  }

  if(!h.smartMeter){
    nodes['meter_pitch']={
      speaker:'bg',
      text:'A smart meter monitors your gas pressure 24/7 and sends me an instant alert if anything goes wrong — a pressure drop, a blockage, anything unusual.<br><br>'
        +'Without it, problems go undetected for days. <b>With it, I can often direct a fix before you\'ve even noticed.</b> Cost: <b>$'+C.METER_COST+'</b>.',
      opts:[
        {label:'"That would give me real peace of mind." ($'+C.METER_COST+')',cls:'dlg-ok',fn:'bgSmartMeter("'+id+'");bgDlg("'+id+'","meter_done")'},
        {label:'Not right now',cls:'dlg-neutral',fn:'bgDlg("'+id+'","start")'},
      ]
    };
    nodes['meter_done']={
      speaker:'owner',
      text:'Installed already? So now you\'ll know before I do if something goes wrong?',
      opts:[{label:'"Exactly. You\'re in good hands."',cls:'dlg-ok',fn:'bgDlg("'+id+'","start")'}]
    };
  }

  if(surplus>0&&!h.prod){
    var weekIncome=Math.round(surplus*C.SURPLUS_PER_M3_WK*7);
    var canCashProd=G.capital>=C.PROD_COST&&h.budget>=C.PROD_SELL;
    var canFrontProd=G.capital>=C.PROD_COST;
    var prodProfit=C.PROD_SELL-C.PROD_COST;
    nodes['prod_pitch']={
      speaker:'bg',
      text:'You produce <b>'+surplus+' m³/day more gas than you need for cooking</b>. Right now that\'s venting as methane — wasted income and bad for the climate.<br><br>'
        +'I can connect a water pump, grain mill, or generator to your surplus. Earning around <b>$'+weekIncome+'/week</b> for you.<br><br>'
        +'<b>Payment options:</b>'
        +'<table style="width:100%;font-size:0.73rem;margin:0.3rem 0;border-collapse:collapse;">'
        +'<tr style="background:#f0f0f0;"><th style="padding:3px 6px;border:1px solid #ddd;">Model</th><th style="padding:3px;border:1px solid #ddd;">You get now</th><th style="padding:3px;border:1px solid #ddd;">Weekly from customer</th></tr>'
        +'<tr><td style="padding:3px 6px;border:1px solid #ddd;">💰 Cash</td><td style="padding:3px 6px;border:1px solid #ddd;color:#2e7d32;">+$'+prodProfit+'</td><td style="padding:3px 6px;border:1px solid #ddd;">+$'+weekIncome+' surplus</td></tr>'
        +'<tr style="background:#fff8e1;"><td style="padding:3px 6px;border:1px solid #ddd;">💳 Loan</td><td style="padding:3px 6px;border:1px solid #ddd;color:#e65100;">−$'+C.PROD_COST+'</td><td style="padding:3px 6px;border:1px solid #ddd;">$'+C.PROD_LOAN_WEEKLY+'/wk × '+C.PROD_LOAN_WEEKS+' + surplus $'+weekIncome+'</td></tr>'
        +'<tr style="background:#e3f2fd;"><td style="padding:3px 6px;border:1px solid #ddd;">⚡ PAYG</td><td style="padding:3px 6px;border:1px solid #ddd;color:#e65100;">−$'+C.PROD_COST+'</td><td style="padding:3px 6px;border:1px solid #ddd;">+$'+weekIncome+' surplus every week</td></tr>'
        +'</table>',
      opts:[
        canCashProd
          ?{label:'💰 Cash — sell for $'+C.PROD_SELL+' (+$'+prodProfit+' profit)',cls:'dlg-ok',fn:'bgProdInstall("'+id+'","cash");bgDlg("'+id+'","prod_done_cash")'}
          :{label:'💰 Cash — over their budget',cls:'dlg-dim',disabled:true},
        canFrontProd
          ?{label:'💳 Loan — $'+C.PROD_LOAN_WEEKLY+'/wk × '+C.PROD_LOAN_WEEKS+' weeks',cls:'dlg-warn',fn:'bgProdInstall("'+id+'","loan");bgDlg("'+id+'","prod_done_loan")'}
          :{label:'💳 Loan — need more capital',cls:'dlg-dim',disabled:true},
        canFrontProd
          ?{label:'⚡ PAYG — you own it, earn surplus weekly',cls:'dlg-neutral',fn:'bgProdInstall("'+id+'","payg");bgDlg("'+id+'","prod_done_payg")'}
          :{label:'⚡ PAYG — need more capital',cls:'dlg-dim',disabled:true},
        {label:'Tell me more about the equipment →',cls:'dlg-neutral',fn:'bgDlg("'+id+'","prod_detail")'},
        {label:'I\'ll think about it',cls:'dlg-neutral',fn:'bgDlg("'+id+'","start")'},
      ]
    };
    nodes['prod_detail']={
      speaker:'bg',
      text:'Options for your '+surplus+' m³/day surplus:<br>'
        +'• <b>Water pump</b> — irrigation in dry season (saves diesel and labour)<br>'
        +'• <b>Grain mill</b> — process crops on-site (saves transport)<br>'
        +'• <b>Sell to neighbours</b> — pipe gas to adjacent households<br>'
        +'• <b>Generator</b> — evening lighting or phone charging station<br><br>'
        +'Any of these earns around <b>$'+weekIncome+'/week</b>. Choose Cash, Loan, or PAYG →',
      opts:[
        {label:'← Back to payment options',cls:'dlg-neutral',fn:'bgDlg("'+id+'","prod_pitch")'},
        {label:'I\'ll think about it',cls:'dlg-neutral',fn:'bgDlg("'+id+'","start")'},
      ]
    };
    nodes['prod_done_cash']={
      speaker:'owner',
      text:'Excellent — I\'ll pay the full $'+C.PROD_SELL+' now. What equipment do you recommend?',
      opts:[{label:'"Based on your surplus, a water pump or grain mill would give the best return."',cls:'dlg-ok',fn:'bgDlg("'+id+'","start")'}]
    };
    nodes['prod_done_loan']={
      speaker:'owner',
      text:'A loan works well for me — $'+C.PROD_LOAN_WEEKLY+'/week for '+C.PROD_LOAN_WEEKS+' weeks I can manage. When does it start earning?',
      opts:[{label:'"From next week. Keep the gas flowing and the income will follow."',cls:'dlg-ok',fn:'bgDlg("'+id+'","start")'}]
    };
    nodes['prod_done_payg']={
      speaker:'owner',
      text:'You own the equipment and take the surplus income — fair enough. You\'ll want it to keep working then!',
      opts:[{label:'"Exactly — we\'re both invested in this system performing well."',cls:'dlg-ok',fn:'bgDlg("'+id+'","start")'}]
    };
  }

  return nodes;
}

// ═══════════════════════════════════ VISIT ══════════════════════════════════

window.bgVisit=function(id){
  var h=G.hh.find(function(x){return x.id===id;});
  if(!h)return;
  G.at=id;moveTo(h.x,h.y);
  dlgRender(h,'start');
};

window.bgLeave=function(){
  G.at=null;moveTo(180,235);
  panel('<p style="color:#888;font-size:0.875rem;margin:0;">Click any house on the map to visit a household.</p>');
};

// ═══════════════════════════════════ ACTIONS ════════════════════════════════

window.bgInstall=function(id,m3,mode){
  mode=mode||'cash';
  var h=G.hh.find(function(x){return x.id===id;});
  var sz=SIZES.find(function(x){return x.m3===m3;});
  if(!h||!sz)return;
  var profit=sz.sell-sz.cost;
  var lw=Math.round(sz.sell/C.LOAN_WEEKS);
  var pw=Math.round(sz.fee*C.PAYG_FEE_MULT);

  if(mode==='cash'){
    if(G.capital<sz.cost||h.budget<sz.sell)return;
    G.capital+=profit;G.earned+=profit;
    h.financing='cash';
    G.log.unshift('🔧 '+sz.label+' at '+h.name+'\'s — Cash +$'+profit+' | $'+sz.fee+'/wk maintenance');
  } else if(mode==='loan'){
    if(G.capital<sz.cost)return;
    G.capital-=sz.cost;
    h.financing='loan';h.loanWeeksLeft=C.LOAN_WEEKS;h.loanWeekly=lw;
    G.log.unshift('🔧 '+sz.label+' at '+h.name+'\'s — Loan: $'+lw+'/wk × 12 + $'+sz.fee+'/wk maintenance');
  } else if(mode==='payg'){
    if(G.capital<sz.cost)return;
    G.capital-=sz.cost;
    h.financing='payg';h.paygWeekly=pw;
    G.log.unshift('🔧 '+sz.label+' at '+h.name+'\'s — PAYG: $'+pw+'/wk (you own system)');
  }
  h.digester=sz;
  drawMap();updateDash();showLog();
};

window.bgFix=function(id){
  var h=G.hh.find(function(x){return x.id===id;});
  if(!h||!h.issues.length)return;
  var c=h.issues[0].cost;
  if(G.capital<c){
    panel(document.getElementById('bg-panel').innerHTML
      +'<p style="color:#b71c1c;font-size:0.79rem;margin:0.3rem 0;">⚠️ Not enough capital ($'+G.capital+' available, need $'+c+'). Earn more first.</p>');
    return;
  }
  G.capital-=c;
  G.log.unshift('✅ Fixed: '+h.issues[0].emoji+' '+h.issues[0].desc+' at '+h.name+'\'s — $'+c);
  h.issues.shift();h.issueAge=0;h.sat=Math.min(100,h.sat+8);
  drawMap();updateDash();showLog();
};

window.bgTrain=function(id){
  var h=G.hh.find(function(x){return x.id===id;});
  if(!h||h.trained||G.capital<C.TRAIN_COST)return;
  G.capital-=C.TRAIN_COST;h.trained=true;
  G.log.unshift('🎓 Trained '+h.name+'\'s household — event risk reduced. Cost: $'+C.TRAIN_COST);
  drawMap();updateDash();showLog();
};

window.bgSmartMeter=function(id){
  var h=G.hh.find(function(x){return x.id===id;});
  if(!h||h.smartMeter||G.capital<C.METER_COST)return;
  G.capital-=C.METER_COST;h.smartMeter=true;
  G.log.unshift('📡 Smart meter at '+h.name+'\'s — instant alerts. Cost: $'+C.METER_COST);
  drawMap();updateDash();showLog();
};

window.bgProdInstall=function(id,mode){
  var h=G.hh.find(function(x){return x.id===id;});
  if(!h||h.prod)return;
  mode=mode||'payg';
  var canDo=G.capital>=C.PROD_COST;
  var canCash=canDo&&h.budget>=C.PROD_SELL;
  var profit=C.PROD_SELL-C.PROD_COST;
  if(mode==='cash'){
    if(!canCash)return;
    G.capital+=profit;G.earned+=profit;
    h.prodFinancing='cash';
    G.log.unshift('⚡ Prod use at '+h.name+'\'s — Cash +$'+profit);
  } else if(mode==='loan'){
    if(!canDo)return;
    G.capital-=C.PROD_COST;
    h.prodFinancing='loan';h.prodLoanWeeksLeft=C.PROD_LOAN_WEEKS;h.prodLoanWeekly=C.PROD_LOAN_WEEKLY;
    G.log.unshift('⚡ Prod use at '+h.name+'\'s — Loan $'+C.PROD_LOAN_WEEKLY+'/wk × '+C.PROD_LOAN_WEEKS);
  } else {
    if(!canDo)return;
    G.capital-=C.PROD_COST;
    h.prodFinancing='payg';
    G.log.unshift('⚡ Prod use at '+h.name+'\'s — PAYG (earn surplus income weekly)');
  }
  h.prod=true;
  drawMap();updateDash();showLog();
};

// ═══════════════════════════════════ WEEK ═══════════════════════════════════

window.bgWeek=function(){
  if(G.phase==='gameover'||G.phase==='won')return;
  G.week++;G.totalWeeks++;
  stopTimer();
  var wl=['<b style="color:#1b5e20;">━━ Week '+G.week+' ━━</b>'];
  var paygRemovals=[];

  G.hh.forEach(function(h){
    if(!h.digester)return;

    // ── GAS PRODUCTION ───────────────────────────────────────────────────
    // Manual formula: cows × C.DUNG_PER_COW_KG × C.GAS_PER_KG = cows × 0.4 m³/day
    var feedPct = h.trained
      ? Math.round(C.FEED_TRAINED_MIN   + Math.random()*(C.FEED_TRAINED_MAX   - C.FEED_TRAINED_MIN))
      : Math.round(C.FEED_UNTRAINED_MIN + Math.random()*(C.FEED_UNTRAINED_MAX - C.FEED_UNTRAINED_MIN));
    feedPct = Math.min(100, feedPct);
    var dungDay  = h.cows * C.DUNG_PER_COW_KG;
    var prodDay  = dungDay * feedPct/100 * C.GAS_PER_KG;
    var gw = +(prodDay * 7).toFixed(2);      // m³/week produced
    h.lastFeedPct = feedPct;
    h.lastProdDay = +prodDay.toFixed(2);

    // ── COOKING DEMAND ───────────────────────────────────────────────────
    // Stove: C.STOVE_M3_PER_HR. h.cook = baseline m³/day.
    var cookVar = h.trained
      ? (C.COOK_TRAINED_MIN   + Math.random()*(C.COOK_TRAINED_MAX   - C.COOK_TRAINED_MIN))
      : (C.COOK_UNTRAINED_MIN + Math.random()*(C.COOK_UNTRAINED_MAX - C.COOK_UNTRAINED_MIN));
    cookVar = Math.max(0.5, Math.min(1.5, cookVar));
    var cookDay  = +(h.cook * cookVar).toFixed(2); // m³/day actually needed this week
    var cw = +(cookDay * 7).toFixed(2);      // m³/week cooking demand
    h.lastCookDay = cookDay;

    var used = Math.min(gw, cw);
    var surp = +(gw - cw).toFixed(2);
    var fewCooking = cookVar < 0.65;  // they forgot / barely used it

    // CO2 savings
    G.co2 += Math.round(used * C.CO2_PER_M3);

    // Smart meter alerts on anomalies
    if(h.smartMeter){
      if(fewCooking && surp > 0.3)
        wl.push('📡 Smart meter at '+h.name+'\'s: very low gas use ('+cookDay+' m³/day) — they may have forgotten to cook. Visit to retrain or offer productive use!');
      else if(feedPct < 75)
        wl.push('📡 Smart meter at '+h.name+'\'s: low pressure — only feeding '+feedPct+'% of needed dung ('+Math.round(dungDay*feedPct/100)+' kg/day). Visit to retrain!');
      else if(surp > 0.5 && !h.prod)
        wl.push('📡 Smart meter at '+h.name+'\'s: consistent surplus '+surp.toFixed(2)+' m³/wk — productive use could earn $'+Math.round(surp*5)+'/week!');
    }

    // Productive use income / venting
    if(h.prod && surp > 0){
      var inc = Math.round(surp * C.SURPLUS_PER_M3_WK);
      G.capital += inc; G.earned += inc;
      var prodNote = '⚡ '+h.name+': surplus +$'+inc+' ('+prodDay.toFixed(2)+' m³/day, '+cookDay+' m³/day used)';
      if(h.prodFinancing==='loan'&&h.prodLoanWeeksLeft>0){
        if(h.sat>=C.PAYG_SAT_HALF){
          G.capital+=h.prodLoanWeekly;G.earned+=h.prodLoanWeekly;
          h.prodLoanWeeksLeft--;
          if(h.prodLoanWeeksLeft===0) prodNote+=' 🎉 prod loan REPAID!';
          else prodNote+=' | 💳 loan +$'+h.prodLoanWeekly+' ('+h.prodLoanWeeksLeft+' wks left)';
        }
      }
      wl.push(prodNote);
    } else if(!h.prod && surp > 0){
      G.vented = +(G.vented + surp).toFixed(2);
      var ventNote = fewCooking ? ' (forgot to cook!)' : '';
      wl.push('💨 '+h.name+': '+surp.toFixed(2)+' m³ surplus vented'+ventNote+' (produced '+prodDay.toFixed(2)+', used '+cookDay+' m³/day)');
    }

    // Satisfaction from gas supply
    if(used >= cw * 0.98){
      h.sat = Math.min(100, h.sat + 4);
      wl.push('✅ '+h.name+': cooking met — '+prodDay.toFixed(2)+' m³/day produced, '+cookDay+' m³/day used.');
    } else {
      var def = +(cw - used).toFixed(2);
      var causeNote = feedPct < 78 ? 'underfeeding ('+feedPct+'% of '+dungDay+' kg/day)' : 'digester may be undersized';
      h.sat = Math.max(5, h.sat + (h.trained ? -10 : -16));
      wl.push('❌ '+h.name+': deficit '+def+' m³ ('+causeNote+'; made '+prodDay.toFixed(2)+', need '+cookDay+' m³/day) — '+(h.trained?'supplements with wood':'frustrated, blames you'));
    }

    // Payment collection
    if(h.financing==='payg'){
      if(h.sat<=C.PAYG_REMOVAL){
        paygRemovals.push(h);
        wl.push('🚨 '+h.name+': demands PAYG system REMOVAL (sat '+h.sat+'%)!');
      } else if(h.sat>=C.PAYG_SAT_FULL){
        G.capital+=h.paygWeekly;G.earned+=h.paygWeekly;
        wl.push('💳 '+h.name+': PAYG fee +$'+h.paygWeekly);
      } else if(h.sat>=C.PAYG_SAT_HALF){
        var hf=Math.round(h.paygWeekly/2);
        G.capital+=hf;G.earned+=hf;
        wl.push('⚠️ '+h.name+': PAYG — unhappy, paid half ($'+hf+'). Fix issues!');
      } else {
        wl.push('❌ '+h.name+': PAYG — REFUSED payment (sat '+h.sat+'%)! Act now!');
      }
    } else if(h.financing==='loan'&&h.loanWeeksLeft>0){
      if(h.sat>=C.PAYG_SAT_HALF){
        G.capital+=h.loanWeekly+h.digester.fee;G.earned+=h.loanWeekly+h.digester.fee;
        h.loanWeeksLeft--;
        if(h.loanWeeksLeft===0)wl.push('🎉 '+h.name+': Loan FULLY REPAID! Now on maintenance fee only.');
        else wl.push('💳 '+h.name+': loan +$'+h.loanWeekly+' ('+h.loanWeeksLeft+' wks left) + $'+h.digester.fee+' maint');
      } else {
        G.capital+=h.digester.fee;G.earned+=h.digester.fee;
        wl.push('⚠️ '+h.name+': Loan skipped this week (too unhappy). Maintenance only ($'+h.digester.fee+').');
      }
    } else {
      // Cash (paid off) or loan fully repaid
      G.capital+=h.digester.fee;G.earned+=h.digester.fee;
    }

    // Issue ageing
    if(h.issues.length){
      h.issueAge=(h.issueAge||0)+1;
      h.sat=Math.max(5,h.sat+(h.smartMeter?-4:-10));
      if(h.issueAge>=3&&!h.smartMeter){
        h.issues[0].cost=Math.round(h.issues[0].cost*1.8);
        wl.push('🚨 CRITICAL at '+h.name+'\'s — ignored 3+ weeks! Repair now $'+h.issues[0].cost);
      }
    } else {
      h.issueAge=0;
      if(Math.random()<(h.trained?C.EVENT_PROB_TRAINED:C.EVENT_PROB_UNTRAINED)){
        var ev=EVENTS[Math.floor(Math.random()*EVENTS.length)];
        var out=ev.outcome(h);
        h.sat=Math.max(5,h.sat+out.sat);
        if(out.cost>0){h.issues.push({emoji:ev.emoji,desc:ev.title,note:out.note,cost:out.cost});h.issueAge=0;}
        wl.push((out.sat<=-30?'🚨':out.sat<=-15?'⚠️':'🔔')+' '+ev.emoji+' '+h.name+': <b>'+ev.title+'</b>');
        wl.push('&nbsp;&nbsp;→ '+out.note);
      }
    }
  });

  // PAYG removals
  paygRemovals.forEach(function(h){
    var lost=h.digester.cost;
    G.capital-=lost;
    wl.push('🚨 PAYG system at '+h.name+'\'s REMOVED. Lost $'+lost+'!');
    h.digester=null;h.financing=null;h.paygWeekly=0;
  });

  G.log=wl.concat(G.log);
  drawMap();updateDash();showLog();

  var go=checkGameOver();
  if(go){triggerGameOver(go);return;}
  if(checkVillageUnlock())return;

  showWeekModal(wl.slice(1),G.week);
};

// ═══════════════════════════════ GAME OVER / WIN ═════════════════════════════

function checkGameOver(){
  if(G.capital<=0)return'bankrupt';
  var inst=G.hh.filter(function(h){return h.digester;});
  if(!inst.length)return null;
  var lost=inst.find(function(h){return h.sat<=5;});
  if(lost)return'lost:'+lost.name;
  var avg=inst.reduce(function(a,h){return a+h.sat;},0)/inst.length;
  if(avg<=22){G.critLowWeeks=(G.critLowWeeks||0)+1;if(G.critLowWeeks>=2)return'reputation';}
  else G.critLowWeeks=0;
  return null;
}

function checkVillageUnlock(){
  var vd=VILLAGES[G.village];
  if(!vd.unlockTarget)return false;
  var inst=G.hh.filter(function(h){return h.digester;});
  if(!inst.length)return false;
  var avg=inst.reduce(function(a,h){return a+h.sat;},0)/inst.length;
  if(inst.length>=vd.unlockTarget.installed&&avg>=vd.unlockTarget.sat){
    stopTimer();
    document.getElementById('bg-wkwrap').style.display='none';
    var nextV=G.village+1;
    panel('<div style="text-align:center;padding:0.5rem;">'
      +'<div style="font-size:1.5rem;margin-bottom:0.3rem;">🌍 Village '+(G.village+1)+' Completed!</div>'
      +'<div style="font-size:0.83rem;color:#555;line-height:1.8;">Word of your work has spread to <b>'+VILLAGES[nextV].name+'</b>.<br>Your capital carries over. Let\'s go!</div>'
      +'<button onclick="bgNextVillage()" style="margin-top:0.65rem;background:#1b5e20;color:white;border:none;padding:0.45rem 1.3rem;border-radius:7px;font-size:0.875rem;font-weight:700;cursor:pointer;">Go to '+VILLAGES[nextV].name+' →</button>'
      +'</div>');
    return true;
  }
  return false;
}

window.bgNextVillage=function(){
  stopTimer();
  G.village++;G.week=0;G.phase='setup';G.at=null;G.critLowWeeks=0;
  G.hh=VILLAGES[G.village].hh.map(newHH);
  drawMap();updateDash();showLog();
  document.getElementById('bg-wkwrap').style.display='none';
  moveTo(180,235);
  panel('<div style="color:#555;font-size:0.875rem;line-height:1.7;">'
    +'<b style="color:#1b5e20;">Welcome to '+VILLAGES[G.village].name+'!</b> Capital: $'+G.capital+'.<br>'
    +'New households, same principles — size correctly, train customers, respond fast.<br>'
    +'👆 <em>Click any house to start. Timer is running!</em></div>');
  startTimer();
};

function triggerGameOver(reason){
  stopTimer();
  G.phase='gameover';
  document.getElementById('bg-wkwrap').style.display='none';
  var inst=G.hh.filter(function(h){return h.digester;});
  var avg=inst.length?Math.round(inst.reduce(function(a,h){return a+h.sat;},0)/inst.length):0;
  var score=Math.round(G.earned*0.4+avg*5+G.co2*0.3-G.vented*10+G.totalWeeks*8);
  var reasonHtml='',tips='';
  if(reason==='bankrupt'){
    reasonHtml='<div style="background:#ffebee;border:1px solid #ef9a9a;border-radius:6px;padding:0.45rem 0.7rem;margin:0.4rem 0;font-size:0.8rem;color:#b71c1c;">💸 <b>You ran out of money.</b> Repair costs mounted faster than income.</div>';
    tips='PAYG customers who refuse payment drain you fast. Fix issues early, train customers (reduces events 60%), and balance cash vs loan vs PAYG installs.';
  } else if(reason.startsWith('lost:')){
    var nm=reason.split(':')[1];
    reasonHtml='<div style="background:#ffebee;border:1px solid #ef9a9a;border-radius:6px;padding:0.45rem 0.7rem;margin:0.4rem 0;font-size:0.8rem;color:#b71c1c;">😡 <b>'+nm+' removed their digester</b> and warned the whole village. Your reputation is gone.</div>';
    tips='Train customers before advancing weeks — untrained households lose satisfaction fast. PAYG customers can demand removal at 10% sat.';
  } else {
    reasonHtml='<div style="background:#ffebee;border:1px solid #ef9a9a;border-radius:6px;padding:0.45rem 0.7rem;margin:0.4rem 0;font-size:0.8rem;color:#b71c1c;">📉 <b>Reputation collapsed.</b> Average satisfaction below 20% for 2 weeks.</div>';
    tips='Match digester size to cow count carefully — a gas deficit tanks satisfaction every week (Session 2 sizing formula).';
  }
  var grade=score>=1500?'🌟 Entrepreneur!':score>=900?'👍 Solid effort!':score>=400?'📖 Still learning...':'🔁 Try again!';
  panel('<div style="padding:0.2rem;">'
    +'<div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.3rem;">'
    +'<span style="font-size:1.4rem;">'+grade+'</span>'
    +'<div style="font-size:1.1rem;font-weight:800;color:#1b5e20;">Score: '+score+' | '+G.totalWeeks+' weeks</div>'
    +'</div>'+reasonHtml
    +'<div style="font-size:0.79rem;color:#555;line-height:1.8;">💰 $'+G.earned+' earned &nbsp;|&nbsp; 😊 '+avg+'% sat &nbsp;|&nbsp; 🌱 '+G.co2+' kg CO₂ &nbsp;|&nbsp; 💨 '+G.vented.toFixed(1)+' m³ vented</div>'
    +'<div style="background:#fff8e1;border:1px solid #ffe082;border-radius:6px;padding:0.35rem 0.6rem;margin:0.35rem 0;font-size:0.77rem;color:#555;">💡 '+tips+'</div>'
    +'<button onclick="bgReset()" style="background:#1b5e20;color:white;border:none;padding:0.42rem 1.2rem;border-radius:7px;font-size:0.84rem;font-weight:700;cursor:pointer;margin-top:0.15rem;">▶ Play Again</button>'
    +'</div>');
}

// ═══════════════════════════════════ RESET ══════════════════════════════════

function showStartPanel(){
  panel(
    '<div style="text-align:center;padding:0.8rem 0.5rem;">'
    +'<div style="font-size:2.2rem;margin-bottom:0.3rem;">🌿⚡🌿</div>'
    +'<div style="font-size:1rem;font-weight:800;color:#1b5e20;margin-bottom:0.4rem;">Bio-Gaz: Village Energy Entrepreneur</div>'
    +'<div style="font-size:0.82rem;color:#555;line-height:1.7;margin-bottom:0.75rem;">'
    +'You have <b>$'+C.START_CAPITAL+'</b> starting capital. Five households need biogas — visit them, negotiate <b>Cash / Loan / PAYG</b>, train them, and keep them happy.<br>'
    +'<b>⏱ A 90-second timer counts down each week.</b> Act fast or the week advances without you!'
    +'</div>'
    +'<button onclick="bgStartGame()" style="background:#1b5e20;color:white;border:none;padding:0.65rem 2.2rem;border-radius:9px;font-size:1rem;font-weight:800;cursor:pointer;box-shadow:0 3px 10px rgba(27,94,32,0.35);">▶ Start Game</button>'
    +'</div>'
  );
}

window.bgStartGame=function(){
  G.started=true;
  panel('<div style="color:#555;font-size:0.875rem;line-height:1.75;">'
    +'<b style="color:#1b5e20;">Welcome, Bio-Gaz!</b> The clock is running — you have '+C.TIMER_SECS+' seconds before the week ends!<br>'
    +'<b>Click any house</b> on the map to walk up and start a conversation with the owner.<br>'
    +'Ask about their cows, cooking, and budget — then choose the right system and payment model.</div>');
  startTimer();
};

window.bgReset=function(){
  initState();drawMap();updateDash();showLog();
  document.getElementById('bg-wkwrap').style.display='none';
  moveTo(180,235);
  showStartPanel();
};

initState();drawMap();moveTo(180,235);
showStartPanel();
updateDash();

})();
</script>
```

---

```{raw} html
<div style="border:2px solid #a5d6a7;border-radius:10px;padding:1rem 1.2rem;background:#f1f8e9;margin-top:1rem;">
  <div style="font-weight:700;color:#1b5e20;margin-bottom:0.65rem;font-size:0.95rem;">📚 What Each Mechanic Teaches</div>
  <table style="width:100%;border-collapse:collapse;font-size:0.84rem;">
    <tr style="background:#c8e6c9;">
      <th style="padding:0.4rem 0.75rem;text-align:left;border:1px solid #a5d6a7;">Game mechanic</th>
      <th style="padding:0.4rem 0.75rem;text-align:left;border:1px solid #a5d6a7;">Course lesson</th>
    </tr>
    <tr><td style="padding:0.35rem 0.75rem;border:1px solid #dce775;color:#333;">Ask about cows → sizing formula</td><td style="padding:0.35rem 0.75rem;border:1px solid #dce775;color:#333;">Session 2 — Sizing (cows × 0.4 m³/day)</td></tr>
    <tr style="background:#fafafa;"><td style="padding:0.35rem 0.75rem;border:1px solid #dce775;color:#333;">Cash / Loan / PAYG payment negotiation</td><td style="padding:0.35rem 0.75rem;border:1px solid #dce775;color:#333;">Session 8 — Biogas as a business, financial models</td></tr>
    <tr><td style="padding:0.35rem 0.75rem;border:1px solid #dce775;color:#333;">PAYG customers stop paying when unhappy</td><td style="padding:0.35rem 0.75rem;border:1px solid #dce775;color:#333;">Session 8 — Long-term customer relationship management</td></tr>
    <tr style="background:#fafafa;"><td style="padding:0.35rem 0.75rem;border:1px solid #dce775;color:#333;">Loan repayment tracked week by week</td><td style="padding:0.35rem 0.75rem;border:1px solid #dce775;color:#333;">Session 8 — Cash flow and recurring income</td></tr>
    <tr><td style="padding:0.35rem 0.75rem;border:1px solid #dce775;color:#333;">Training pitch: daily feeding, safety, checks</td><td style="padding:0.35rem 0.75rem;border:1px solid #dce775;color:#333;">Session 4 — Safety &amp; EAT protocol</td></tr>
    <tr style="background:#fafafa;"><td style="padding:0.35rem 0.75rem;border:1px solid #dce775;color:#333;">Smart meter: faster alerts, lower repair cost</td><td style="padding:0.35rem 0.75rem;border:1px solid #dce775;color:#333;">Session 8 — Business efficiency tools</td></tr>
    <tr><td style="padding:0.35rem 0.75rem;border:1px solid #dce775;color:#333;">Productive use: surplus gas → weekly income</td><td style="padding:0.35rem 0.75rem;border:1px solid #dce775;color:#333;">Session 6 — Productive Use</td></tr>
    <tr style="background:#fafafa;"><td style="padding:0.35rem 0.75rem;border:1px solid #dce775;color:#333;">Maintenance events: trained vs untrained outcomes</td><td style="padding:0.35rem 0.75rem;border:1px solid #dce775;color:#333;">Session 4 — Safety consequences</td></tr>
    <tr><td style="padding:0.35rem 0.75rem;border:1px solid #dce775;color:#333;">90-second week timer — act or fall behind</td><td style="padding:0.35rem 0.75rem;border:1px solid #dce775;color:#333;">Session 8 — Running a business requires active management</td></tr>
    <tr style="background:#fafafa;"><td style="padding:0.35rem 0.75rem;border:1px solid #dce775;color:#333;">Village progression: reputation drives referrals</td><td style="padding:0.35rem 0.75rem;border:1px solid #dce775;color:#333;">Session 8 — Business growth through reputation</td></tr>
  </table>
</div>
```
