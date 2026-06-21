const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, 'images', 'services');
fs.mkdirSync(OUT, { recursive: true });

const svgs = {

/* ── MAIN SERVICES ─────────────────────────────────────────────────────── */

'digital-marketing': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#f8f8f8"/>
  <!-- Grid lines -->
  <line x1="0" y1="100" x2="800" y2="100" stroke="#e0e0e0" stroke-width="1"/>
  <line x1="0" y1="200" x2="800" y2="200" stroke="#e0e0e0" stroke-width="1"/>
  <line x1="0" y1="300" x2="800" y2="300" stroke="#e0e0e0" stroke-width="1"/>
  <line x1="0" y1="400" x2="800" y2="400" stroke="#e0e0e0" stroke-width="1"/>
  <!-- Bar chart -->
  <rect x="80" y="320" width="60" height="120" fill="#1a1a1a" rx="4"/>
  <rect x="180" y="260" width="60" height="180" fill="#1a1a1a" rx="4"/>
  <rect x="280" y="200" width="60" height="240" fill="#1a1a1a" rx="4"/>
  <rect x="380" y="140" width="60" height="300" fill="#1a1a1a" rx="4"/>
  <rect x="480" y="80" width="60" height="360" fill="#0d0d0d" rx="4"/>
  <!-- Growth arrow -->
  <polyline points="80,370 180,310 280,250 380,190 480,130 600,60" stroke="#1a1a1a" stroke-width="3" stroke-dasharray="8,4" fill="none"/>
  <polygon points="600,60 580,75 615,78" fill="#1a1a1a"/>
  <!-- Social icons circles -->
  <circle cx="660" cy="140" r="40" fill="white" stroke="#1a1a1a" stroke-width="2"/>
  <text x="660" y="148" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#1a1a1a">f</text>
  <circle cx="660" cy="240" r="40" fill="#1a1a1a"/>
  <text x="660" y="248" text-anchor="middle" font-family="sans-serif" font-size="18" fill="white">in</text>
  <circle cx="660" cy="340" r="40" fill="white" stroke="#1a1a1a" stroke-width="2"/>
  <text x="660" y="348" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#1a1a1a">✕</text>
  <!-- Connecting lines from bars to icons -->
  <line x1="540" y1="140" x2="618" y2="140" stroke="#ccc" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="540" y1="240" x2="618" y2="240" stroke="#ccc" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="540" y1="340" x2="618" y2="340" stroke="#ccc" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- Labels -->
  <text x="110" y="468" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#888">Q1</text>
  <text x="210" y="468" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#888">Q2</text>
  <text x="310" y="468" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#888">Q3</text>
  <text x="410" y="468" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#888">Q4</text>
  <text x="510" y="468" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#888">Q5</text>
  <text x="400" y="30" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="bold" fill="#1a1a1a">GROWTH PERFORMANCE</text>
</svg>`,

'website-development': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#f8f8f8"/>
  <!-- Browser window -->
  <rect x="80" y="60" width="640" height="380" rx="10" fill="white" stroke="#1a1a1a" stroke-width="2.5"/>
  <!-- Browser toolbar -->
  <rect x="80" y="60" width="640" height="48" rx="10" fill="#1a1a1a"/>
  <rect x="80" y="88" width="640" height="20" fill="#1a1a1a"/>
  <!-- Traffic light dots -->
  <circle cx="114" cy="84" r="8" fill="#e0e0e0"/>
  <circle cx="140" cy="84" r="8" fill="#c0c0c0"/>
  <circle cx="166" cy="84" r="8" fill="#ffffff"/>
  <!-- URL bar -->
  <rect x="198" y="72" width="360" height="24" rx="12" fill="#2a2a2a"/>
  <text x="378" y="89" text-anchor="middle" font-family="monospace" font-size="12" fill="#888">https://8dots.netlify.app</text>
  <!-- Code lines in browser -->
  <rect x="110" y="136" width="180" height="12" rx="3" fill="#e0e0e0"/>
  <rect x="110" y="158" width="140" height="10" rx="3" fill="#ebebeb"/>
  <rect x="110" y="176" width="160" height="10" rx="3" fill="#ebebeb"/>
  <rect x="110" y="194" width="120" height="10" rx="3" fill="#ebebeb"/>
  <rect x="110" y="212" width="150" height="10" rx="3" fill="#e0e0e0"/>
  <rect x="110" y="230" width="130" height="10" rx="3" fill="#ebebeb"/>
  <rect x="110" y="248" width="170" height="10" rx="3" fill="#ebebeb"/>
  <!-- UI mockup on right -->
  <rect x="330" y="128" width="360" height="200" rx="6" fill="#f0f0f0" stroke="#ddd" stroke-width="1"/>
  <rect x="330" y="128" width="360" height="44" rx="6" fill="#1a1a1a"/>
  <rect x="330" y="152" width="360" height="20" fill="#1a1a1a"/>
  <rect x="350" y="190" width="160" height="18" rx="3" fill="#d0d0d0"/>
  <rect x="350" y="218" width="220" height="10" rx="3" fill="#e0e0e0"/>
  <rect x="350" y="236" width="190" height="10" rx="3" fill="#e0e0e0"/>
  <rect x="350" y="254" width="100" height="28" rx="14" fill="#1a1a1a"/>
  <!-- Image placeholder -->
  <rect x="530" y="185" width="130" height="100" rx="4" fill="#ddd"/>
  <line x1="530" y1="185" x2="660" y2="285" stroke="#c0c0c0" stroke-width="1"/>
  <line x1="660" y1="185" x2="530" y2="285" stroke="#c0c0c0" stroke-width="1"/>
  <!-- Bottom cards -->
  <rect x="110" y="350" width="170" height="70" rx="6" fill="#f0f0f0" stroke="#ddd" stroke-width="1"/>
  <rect x="300" y="350" width="170" height="70" rx="6" fill="#1a1a1a"/>
  <rect x="490" y="350" width="170" height="70" rx="6" fill="#f0f0f0" stroke="#ddd" stroke-width="1"/>
</svg>`,

'app-development': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#f8f8f8"/>
  <!-- Phone left -->
  <rect x="150" y="60" width="180" height="360" rx="28" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="160" y="90" width="160" height="300" fill="#f4f4f4"/>
  <circle cx="240" cy="80" r="6" fill="#1a1a1a"/>
  <rect x="215" y="400" width="50" height="8" rx="4" fill="#1a1a1a"/>
  <!-- App UI on left phone -->
  <rect x="168" y="98" width="144" height="40" fill="#1a1a1a"/>
  <rect x="176" y="150" width="60" height="60" rx="12" fill="#1a1a1a"/>
  <rect x="248" y="150" width="56" height="26" rx="4" fill="#e0e0e0"/>
  <rect x="248" y="184" width="40" height="10" rx="3" fill="#ebebeb"/>
  <rect x="176" y="224" width="128" height="8" rx="3" fill="#e0e0e0"/>
  <rect x="176" y="242" width="100" height="8" rx="3" fill="#ebebeb"/>
  <rect x="176" y="268" width="128" height="40" rx="8" fill="#1a1a1a"/>
  <rect x="176" y="320" width="60" height="60" rx="12" fill="#ebebeb"/>
  <rect x="248" y="320" width="56" height="60" rx="12" fill="#ebebeb"/>
  <!-- Phone right -->
  <rect x="470" y="80" width="180" height="360" rx="28" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="480" y="110" width="160" height="300" fill="#f4f4f4"/>
  <circle cx="560" cy="100" r="6" fill="#1a1a1a"/>
  <rect x="535" y="416" width="50" height="8" rx="4" fill="#1a1a1a"/>
  <!-- App UI on right phone -->
  <rect x="488" y="118" width="144" height="280" fill="white"/>
  <rect x="488" y="118" width="144" height="50" fill="#1a1a1a"/>
  <circle cx="520" cy="143" r="16" fill="white" opacity="0.2"/>
  <rect x="544" y="136" width="70" height="10" rx="3" fill="white" opacity="0.5"/>
  <rect x="544" y="153" width="50" height="8" rx="3" fill="white" opacity="0.3"/>
  <rect x="496" y="180" width="128" height="80" rx="6" fill="#f0f0f0"/>
  <rect x="496" y="272" width="60" height="56" rx="6" fill="#1a1a1a"/>
  <rect x="564" y="272" width="60" height="56" rx="6" fill="#e8e8e8"/>
  <rect x="496" y="338" width="128" height="10" rx="3" fill="#e0e0e0"/>
  <rect x="496" y="356" width="90" height="10" rx="3" fill="#ebebeb"/>
  <!-- Connection lines -->
  <path d="M330 240 Q400 200 470 240" stroke="#1a1a1a" stroke-width="2" stroke-dasharray="6,4"/>
  <circle cx="400" cy="210" r="24" fill="white" stroke="#1a1a1a" stroke-width="2"/>
  <text x="400" y="218" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1a1a1a">⚡</text>
</svg>`,

'hire-developer': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#f8f8f8"/>
  <!-- Desk -->
  <rect x="100" y="340" width="600" height="16" rx="4" fill="#1a1a1a"/>
  <rect x="140" y="356" width="20" height="80" fill="#1a1a1a"/>
  <rect x="640" y="356" width="20" height="80" fill="#1a1a1a"/>
  <!-- Laptop -->
  <rect x="260" y="200" width="280" height="180" rx="8" fill="#1a1a1a"/>
  <rect x="270" y="210" width="260" height="160" rx="4" fill="#2a2a2a"/>
  <!-- Code on screen -->
  <rect x="284" y="224" width="80" height="8" rx="2" fill="#555"/>
  <rect x="284" y="240" width="120" height="8" rx="2" fill="#444"/>
  <rect x="300" y="256" width="100" height="8" rx="2" fill="#555"/>
  <rect x="300" y="272" width="140" height="8" rx="2" fill="#444"/>
  <rect x="284" y="288" width="80" height="8" rx="2" fill="#666"/>
  <rect x="300" y="304" width="110" height="8" rx="2" fill="#555"/>
  <rect x="300" y="320" width="90" height="8" rx="2" fill="#444"/>
  <rect x="284" y="336" width="60" height="8" rx="2" fill="#666"/>
  <!-- Laptop base -->
  <rect x="220" y="380" width="360" height="14" rx="4" fill="#1a1a1a"/>
  <rect x="340" y="374" width="120" height="8" rx="2" fill="#2a2a2a"/>
  <!-- Person avatar -->
  <circle cx="400" cy="110" r="50" fill="white" stroke="#1a1a1a" stroke-width="2.5"/>
  <circle cx="400" cy="95" r="22" fill="#1a1a1a"/>
  <path d="M355 155 Q400 130 445 155" fill="#1a1a1a"/>
  <!-- Skills badges -->
  <rect x="100" y="140" width="100" height="32" rx="16" fill="#1a1a1a"/>
  <text x="150" y="161" text-anchor="middle" font-family="monospace" font-size="12" fill="white">React</text>
  <rect x="100" y="186" width="100" height="32" rx="16" fill="white" stroke="#1a1a1a" stroke-width="1.5"/>
  <text x="150" y="207" text-anchor="middle" font-family="monospace" font-size="12" fill="#1a1a1a">Node.js</text>
  <rect x="100" y="232" width="100" height="32" rx="16" fill="#1a1a1a"/>
  <text x="150" y="253" text-anchor="middle" font-family="monospace" font-size="12" fill="white">Python</text>
  <rect x="600" y="140" width="100" height="32" rx="16" fill="white" stroke="#1a1a1a" stroke-width="1.5"/>
  <text x="650" y="161" text-anchor="middle" font-family="monospace" font-size="12" fill="#1a1a1a">AWS</text>
  <rect x="600" y="186" width="100" height="32" rx="16" fill="#1a1a1a"/>
  <text x="650" y="207" text-anchor="middle" font-family="monospace" font-size="12" fill="white">Docker</text>
  <rect x="600" y="232" width="100" height="32" rx="16" fill="white" stroke="#1a1a1a" stroke-width="1.5"/>
  <text x="650" y="253" text-anchor="middle" font-family="monospace" font-size="12" fill="#1a1a1a">TypeScript</text>
  <!-- Dashed connection lines -->
  <line x1="200" y1="156" x2="355" y2="120" stroke="#ccc" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="600" y1="156" x2="445" y2="120" stroke="#ccc" stroke-width="1" stroke-dasharray="4,3"/>
</svg>`,

'graphic-design': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#f8f8f8"/>
  <!-- Design canvas -->
  <rect x="160" y="60" width="480" height="340" rx="8" fill="white" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Canvas grid -->
  <line x1="320" y1="60" x2="320" y2="400" stroke="#efefef" stroke-width="1"/>
  <line x1="480" y1="60" x2="480" y2="400" stroke="#efefef" stroke-width="1"/>
  <line x1="160" y1="173" x2="640" y2="173" stroke="#efefef" stroke-width="1"/>
  <line x1="160" y1="287" x2="640" y2="287" stroke="#efefef" stroke-width="1"/>
  <!-- Logo concept on canvas -->
  <circle cx="320" cy="220" r="80" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="320" cy="220" r="50" fill="#1a1a1a"/>
  <text x="320" y="230" text-anchor="middle" font-family="serif" font-size="32" font-weight="bold" fill="white">8</text>
  <!-- Typography beside -->
  <rect x="430" y="175" width="150" height="18" rx="3" fill="#1a1a1a"/>
  <rect x="430" y="203" width="110" height="12" rx="3" fill="#d0d0d0"/>
  <rect x="430" y="223" width="130" height="10" rx="3" fill="#e0e0e0"/>
  <!-- Color swatches -->
  <rect x="430" y="255" width="30" height="30" rx="4" fill="#1a1a1a"/>
  <rect x="468" y="255" width="30" height="30" rx="4" fill="#555"/>
  <rect x="506" y="255" width="30" height="30" rx="4" fill="#888"/>
  <rect x="544" y="255" width="30" height="30" rx="4" fill="#ccc"/>
  <rect x="582" y="255" width="30" height="30" rx="4" fill="#f0f0f0" stroke="#ddd" stroke-width="1"/>
  <!-- Pen tool -->
  <path d="M620 80 L680 40 L740 60 L720 120 L660 140 Z" fill="white" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="680" y1="40" x2="560" y2="160" stroke="#1a1a1a" stroke-width="2"/>
  <circle cx="560" cy="160" r="8" fill="#1a1a1a"/>
  <!-- Ruler -->
  <rect x="60" y="60" width="20" height="340" fill="white" stroke="#1a1a1a" stroke-width="1.5"/>
  <line x1="60" y1="120" x2="72" y2="120" stroke="#1a1a1a" stroke-width="1"/>
  <line x1="60" y1="180" x2="72" y2="180" stroke="#1a1a1a" stroke-width="1"/>
  <line x1="60" y1="240" x2="72" y2="240" stroke="#1a1a1a" stroke-width="1"/>
  <line x1="60" y1="300" x2="72" y2="300" stroke="#1a1a1a" stroke-width="1"/>
  <line x1="60" y1="360" x2="72" y2="360" stroke="#1a1a1a" stroke-width="1"/>
  <!-- Bottom ruler -->
  <rect x="160" y="420" width="480" height="20" fill="white" stroke="#1a1a1a" stroke-width="1.5"/>
  <line x1="280" y1="420" x2="280" y2="432" stroke="#1a1a1a" stroke-width="1"/>
  <line x1="400" y1="420" x2="400" y2="432" stroke="#1a1a1a" stroke-width="1"/>
  <line x1="520" y1="420" x2="520" y2="432" stroke="#1a1a1a" stroke-width="1"/>
</svg>`,

/* ── DIGITAL MARKETING SUBS ─────────────────────────────────────────────── */

'seo': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#f8f8f8"/>
  <!-- Browser -->
  <rect x="80" y="60" width="440" height="340" rx="8" fill="white" stroke="#1a1a1a" stroke-width="2"/>
  <rect x="80" y="60" width="440" height="44" rx="8" fill="#1a1a1a"/>
  <rect x="80" y="84" width="440" height="20" fill="#1a1a1a"/>
  <rect x="140" y="70" width="300" height="22" rx="11" fill="#2a2a2a"/>
  <text x="290" y="86" text-anchor="middle" font-family="monospace" font-size="11" fill="#888">google.com/search?q=8dots+india</text>
  <!-- Search results -->
  <rect x="100" y="124" width="400" height="60" rx="4" fill="#f8f8f8" stroke="#e8e8e8" stroke-width="1"/>
  <rect x="116" y="134" width="200" height="12" rx="3" fill="#1a1a1a"/>
  <rect x="116" y="154" width="300" height="8" rx="2" fill="#888"/>
  <rect x="116" y="168" width="250" height="8" rx="2" fill="#aaa"/>
  <!-- #1 badge -->
  <rect x="448" y="130" width="32" height="32" rx="4" fill="#1a1a1a"/>
  <text x="464" y="151" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="white">#1</text>
  <rect x="100" y="196" width="400" height="60" rx="4" fill="#f8f8f8" stroke="#e8e8e8" stroke-width="1"/>
  <rect x="116" y="206" width="180" height="12" rx="3" fill="#555"/>
  <rect x="116" y="226" width="320" height="8" rx="2" fill="#aaa"/>
  <rect x="116" y="240" width="260" height="8" rx="2" fill="#c0c0c0"/>
  <rect x="100" y="268" width="400" height="60" rx="4" fill="#f8f8f8" stroke="#e8e8e8" stroke-width="1"/>
  <rect x="116" y="278" width="220" height="12" rx="3" fill="#555"/>
  <rect x="116" y="298" width="300" height="8" rx="2" fill="#aaa"/>
  <rect x="116" y="312" width="240" height="8" rx="2" fill="#c0c0c0"/>
  <!-- Magnifying glass -->
  <circle cx="640" cy="220" r="100" fill="white" stroke="#1a1a1a" stroke-width="4"/>
  <circle cx="640" cy="220" r="70" fill="#f4f4f4" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Chart inside magnifier -->
  <polyline points="590,260 610,230 630,240 650,200 670,210 690,180" stroke="#1a1a1a" stroke-width="3" fill="none"/>
  <line x1="706" y1="336" x2="740" y2="370" stroke="#1a1a1a" stroke-width="6" stroke-linecap="round"/>
</svg>`,

'social-media-marketing': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#f8f8f8"/>
  <!-- Central node -->
  <circle cx="400" cy="250" r="60" fill="#1a1a1a"/>
  <text x="400" y="258" text-anchor="middle" font-family="sans-serif" font-size="28" fill="white">8</text>
  <!-- Platform nodes -->
  <circle cx="200" cy="130" r="44" fill="white" stroke="#1a1a1a" stroke-width="2.5"/>
  <text x="200" y="138" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#1a1a1a">f</text>
  <circle cx="600" cy="130" r="44" fill="#1a1a1a"/>
  <text x="600" y="138" text-anchor="middle" font-family="sans-serif" font-size="16" fill="white">in</text>
  <circle cx="140" cy="320" r="44" fill="white" stroke="#1a1a1a" stroke-width="2.5"/>
  <text x="140" y="328" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#1a1a1a">✕</text>
  <circle cx="660" cy="320" r="44" fill="#1a1a1a"/>
  <text x="660" y="328" text-anchor="middle" font-family="sans-serif" font-size="16" fill="white">▶</text>
  <circle cx="300" cy="420" r="44" fill="white" stroke="#1a1a1a" stroke-width="2.5"/>
  <text x="300" y="428" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#1a1a1a">ig</text>
  <circle cx="500" cy="420" r="44" fill="#1a1a1a"/>
  <text x="500" y="428" text-anchor="middle" font-family="sans-serif" font-size="16" fill="white">be</text>
  <!-- Connection lines -->
  <line x1="353" y1="205" x2="232" y2="163" stroke="#1a1a1a" stroke-width="2" stroke-dasharray="6,4"/>
  <line x1="447" y1="205" x2="568" y2="163" stroke="#1a1a1a" stroke-width="2" stroke-dasharray="6,4"/>
  <line x1="348" y1="265" x2="182" y2="305" stroke="#1a1a1a" stroke-width="2" stroke-dasharray="6,4"/>
  <line x1="452" y1="265" x2="618" y2="305" stroke="#1a1a1a" stroke-width="2" stroke-dasharray="6,4"/>
  <line x1="370" y1="302" x2="330" y2="382" stroke="#1a1a1a" stroke-width="2" stroke-dasharray="6,4"/>
  <line x1="430" y1="302" x2="470" y2="382" stroke="#1a1a1a" stroke-width="2" stroke-dasharray="6,4"/>
  <!-- Engagement bubbles -->
  <rect x="90" y="200" width="80" height="28" rx="14" fill="white" stroke="#1a1a1a" stroke-width="1.5"/>
  <text x="130" y="218" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1a1a1a">+12k ❤</text>
  <rect x="630" y="200" width="80" height="28" rx="14" fill="white" stroke="#1a1a1a" stroke-width="1.5"/>
  <text x="670" y="218" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1a1a1a">8.4k 🔁</text>
</svg>`,

'ppc-advertising': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#f8f8f8"/>
  <!-- Target circles -->
  <circle cx="360" cy="240" r="180" fill="none" stroke="#e0e0e0" stroke-width="2"/>
  <circle cx="360" cy="240" r="130" fill="none" stroke="#ccc" stroke-width="2"/>
  <circle cx="360" cy="240" r="80" fill="none" stroke="#aaa" stroke-width="2"/>
  <circle cx="360" cy="240" r="36" fill="#1a1a1a"/>
  <!-- Crosshair lines -->
  <line x1="180" y1="240" x2="324" y2="240" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="396" y1="240" x2="540" y2="240" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="360" y1="60" x2="360" y2="204" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="360" y1="276" x2="360" y2="420" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Ad cards -->
  <rect x="560" y="80" width="200" height="100" rx="8" fill="white" stroke="#1a1a1a" stroke-width="2"/>
  <rect x="568" y="88" width="60" height="10" rx="2" fill="#1a1a1a"/>
  <rect x="568" y="106" width="170" height="8" rx="2" fill="#e0e0e0"/>
  <rect x="568" y="122" width="140" height="8" rx="2" fill="#e8e8e8"/>
  <rect x="568" y="148" width="80" height="22" rx="11" fill="#1a1a1a"/>
  <text x="608" y="163" text-anchor="middle" font-family="sans-serif" font-size="11" fill="white">Click Now</text>
  <rect x="560" y="200" width="200" height="100" rx="8" fill="#1a1a1a"/>
  <rect x="568" y="210" width="60" height="10" rx="2" fill="white" opacity="0.6"/>
  <rect x="568" y="228" width="170" height="8" rx="2" fill="white" opacity="0.3"/>
  <rect x="568" y="244" width="140" height="8" rx="2" fill="white" opacity="0.2"/>
  <rect x="568" y="270" width="80" height="22" rx="11" fill="white"/>
  <text x="608" y="285" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1a1a1a">Learn More</text>
  <!-- Arrow from target to ads -->
  <path d="M490 240 Q530 200 558 160" stroke="#1a1a1a" stroke-width="2" stroke-dasharray="6,4" fill="none"/>
  <polygon points="558,160 543,168 556,180" fill="#1a1a1a"/>
  <!-- ROI label -->
  <rect x="80" y="160" width="140" height="60" rx="8" fill="white" stroke="#1a1a1a" stroke-width="2"/>
  <text x="150" y="188" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1a1a1a">ROAS 3.2x</text>
  <text x="150" y="208" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#888">Return on Ad Spend</text>
</svg>`,

'email-content-marketing': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#f8f8f8"/>
  <!-- Main envelope -->
  <rect x="140" y="120" width="380" height="260" rx="10" fill="white" stroke="#1a1a1a" stroke-width="2.5"/>
  <polyline points="140,130 330,260 520,130" stroke="#1a1a1a" stroke-width="2.5" fill="none"/>
  <line x1="140" y1="380" x2="260" y2="270" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="520" y1="380" x2="400" y2="270" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Email content peek -->
  <rect x="180" y="230" width="300" height="120" rx="4" fill="#f8f8f8" stroke="#e8e8e8" stroke-width="1"/>
  <rect x="196" y="244" width="120" height="12" rx="3" fill="#1a1a1a"/>
  <rect x="196" y="264" width="260" height="8" rx="2" fill="#d0d0d0"/>
  <rect x="196" y="280" width="240" height="8" rx="2" fill="#e0e0e0"/>
  <rect x="196" y="296" width="100" height="28" rx="14" fill="#1a1a1a"/>
  <!-- Floating mini envelopes -->
  <rect x="580" y="100" width="100" height="70" rx="6" fill="white" stroke="#1a1a1a" stroke-width="2"/>
  <polyline points="580,106 630,136 680,106" stroke="#1a1a1a" stroke-width="2" fill="none"/>
  <rect x="580" y="210" width="100" height="70" rx="6" fill="#1a1a1a"/>
  <polyline points="580,216 630,246 680,216" stroke="white" stroke-width="2" fill="none"/>
  <rect x="580" y="320" width="100" height="70" rx="6" fill="white" stroke="#1a1a1a" stroke-width="2"/>
  <polyline points="580,326 630,356 680,326" stroke="#1a1a1a" stroke-width="2" fill="none"/>
  <!-- Dashed send lines -->
  <line x1="520" y1="135" x2="578" y2="130" stroke="#ccc" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="520" y1="245" x2="578" y2="245" stroke="#ccc" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="520" y1="355" x2="578" y2="355" stroke="#ccc" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- Stats -->
  <rect x="60" y="150" width="60" height="50" rx="4" fill="white" stroke="#1a1a1a" stroke-width="1.5"/>
  <text x="90" y="172" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1a1a1a">42%</text>
  <text x="90" y="190" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#888">Open Rate</text>
  <rect x="60" y="220" width="60" height="50" rx="4" fill="#1a1a1a"/>
  <text x="90" y="242" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="white">8.1%</text>
  <text x="90" y="260" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#aaa">CTR</text>
</svg>`,

/* ── WEBSITE DEV SUBS ────────────────────────────────────────────────────── */

'custom-web-apps': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#0d0d0d"/>
  <!-- Terminal window -->
  <rect x="80" y="60" width="640" height="380" rx="10" fill="#1a1a1a" stroke="#333" stroke-width="1.5"/>
  <rect x="80" y="60" width="640" height="44" rx="10" fill="#2a2a2a"/>
  <rect x="80" y="84" width="640" height="20" fill="#2a2a2a"/>
  <circle cx="110" cy="82" r="7" fill="#555"/>
  <circle cx="132" cy="82" r="7" fill="#444"/>
  <circle cx="154" cy="82" r="7" fill="#666"/>
  <text x="400" y="89" text-anchor="middle" font-family="monospace" font-size="12" fill="#666">~/8dots/app — bash</text>
  <!-- Code lines -->
  <text x="108" y="130" font-family="monospace" font-size="13" fill="#666">$</text>
  <text x="124" y="130" font-family="monospace" font-size="13" fill="#aaa">npm run dev</text>
  <text x="108" y="155" font-family="monospace" font-size="13" fill="#4ade80">✓</text>
  <text x="124" y="155" font-family="monospace" font-size="13" fill="#666">Ready on http://localhost:3000</text>
  <text x="108" y="185" font-family="monospace" font-size="13" fill="#60a5fa">import</text>
  <text x="178" y="185" font-family="monospace" font-size="13" fill="#aaa">React</text>
  <text x="228" y="185" font-family="monospace" font-size="13" fill="#60a5fa">from</text>
  <text x="268" y="185" font-family="monospace" font-size="13" fill="#f59e0b">'react'</text>
  <text x="108" y="210" font-family="monospace" font-size="13" fill="#60a5fa">const</text>
  <text x="166" y="210" font-family="monospace" font-size="13" fill="#4ade80">App</text>
  <text x="196" y="210" font-family="monospace" font-size="13" fill="#aaa">= () =&gt; (</text>
  <text x="124" y="235" font-family="monospace" font-size="13" fill="#f87171">&lt;div</text>
  <text x="168" y="235" font-family="monospace" font-size="13" fill="#60a5fa">className</text>
  <text x="260" y="235" font-family="monospace" font-size="13" fill="#aaa">=</text>
  <text x="272" y="235" font-family="monospace" font-size="13" fill="#f59e0b">"app"</text>
  <text x="316" y="235" font-family="monospace" font-size="13" fill="#f87171">&gt;</text>
  <text x="140" y="260" font-family="monospace" font-size="13" fill="#f87171">&lt;Hero</text>
  <text x="188" y="260" font-family="monospace" font-size="13" fill="#60a5fa">title</text>
  <text x="230" y="260" font-family="monospace" font-size="13" fill="#aaa">=</text>
  <text x="242" y="260" font-family="monospace" font-size="13" fill="#f59e0b">"8dots"</text>
  <text x="296" y="260" font-family="monospace" font-size="13" fill="#f87171">/&gt;</text>
  <text x="140" y="285" font-family="monospace" font-size="13" fill="#f87171">&lt;Services</text>
  <text x="218" y="285" font-family="monospace" font-size="13" fill="#60a5fa">data</text>
  <text x="252" y="285" font-family="monospace" font-size="13" fill="#aaa">={services}</text>
  <text x="352" y="285" font-family="monospace" font-size="13" fill="#f87171">/&gt;</text>
  <text x="124" y="310" font-family="monospace" font-size="13" fill="#f87171">&lt;/div&gt;</text>
  <text x="108" y="335" font-family="monospace" font-size="13" fill="#aaa">)</text>
  <!-- Cursor -->
  <rect x="108" y="355" width="9" height="18" fill="#aaa" opacity="0.8"/>
</svg>`,

'ecommerce': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#f8f8f8"/>
  <!-- Store front -->
  <rect x="100" y="80" width="600" height="340" rx="10" fill="white" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Header bar -->
  <rect x="100" y="80" width="600" height="56" rx="10" fill="#1a1a1a"/>
  <rect x="100" y="116" width="600" height="20" fill="#1a1a1a"/>
  <rect x="120" y="94" width="100" height="24" rx="4" fill="#333"/>
  <rect x="480" y="92" width="60" height="28" rx="14" fill="white"/>
  <text x="510" y="110" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1a1a1a">Cart 3</text>
  <!-- Product grid -->
  <rect x="120" y="156" width="170" height="200" rx="6" fill="#f4f4f4" stroke="#e8e8e8" stroke-width="1"/>
  <rect x="120" y="156" width="170" height="120" fill="#e8e8e8" rx="6"/>
  <line x1="120" y1="156" x2="290" y2="276" stroke="#ddd" stroke-width="1"/>
  <line x1="290" y1="156" x2="120" y2="276" stroke="#ddd" stroke-width="1"/>
  <rect x="130" y="286" width="100" height="10" rx="2" fill="#1a1a1a"/>
  <rect x="130" y="304" width="60" height="10" rx="2" fill="#888"/>
  <rect x="130" y="324" width="80" height="24" rx="12" fill="#1a1a1a"/>
  <text x="170" y="340" text-anchor="middle" font-family="sans-serif" font-size="11" fill="white">Add to Cart</text>

  <rect x="315" y="156" width="170" height="200" rx="6" fill="#1a1a1a"/>
  <rect x="315" y="156" width="170" height="120" fill="#2a2a2a" rx="6"/>
  <rect x="325" y="286" width="100" height="10" rx="2" fill="white" opacity="0.7"/>
  <rect x="325" y="304" width="60" height="10" rx="2" fill="white" opacity="0.4"/>
  <rect x="325" y="324" width="80" height="24" rx="12" fill="white"/>
  <text x="365" y="340" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1a1a1a">Buy Now</text>

  <rect x="510" y="156" width="170" height="200" rx="6" fill="#f4f4f4" stroke="#e8e8e8" stroke-width="1"/>
  <rect x="510" y="156" width="170" height="120" fill="#e8e8e8" rx="6"/>
  <line x1="510" y1="156" x2="680" y2="276" stroke="#ddd" stroke-width="1"/>
  <line x1="680" y1="156" x2="510" y2="276" stroke="#ddd" stroke-width="1"/>
  <rect x="520" y="286" width="100" height="10" rx="2" fill="#1a1a1a"/>
  <rect x="520" y="304" width="60" height="10" rx="2" fill="#888"/>
  <rect x="520" y="324" width="80" height="24" rx="12" fill="#1a1a1a"/>
  <text x="560" y="340" text-anchor="middle" font-family="sans-serif" font-size="11" fill="white">Add to Cart</text>

  <!-- Shopping cart icon -->
  <rect x="120" y="374" width="560" height="36" rx="4" fill="#f0f0f0" stroke="#e0e0e0" stroke-width="1"/>
  <text x="200" y="397" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#888">🛒  3 items in cart  —  ₹4,299</text>
  <rect x="560" y="380" width="100" height="24" rx="12" fill="#1a1a1a"/>
  <text x="610" y="396" text-anchor="middle" font-family="sans-serif" font-size="11" fill="white">Checkout →</text>
</svg>`,

'cms-wordpress': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#f8f8f8"/>
  <!-- Dashboard -->
  <rect x="60" y="60" width="680" height="380" rx="8" fill="white" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Sidebar -->
  <rect x="60" y="60" width="180" height="380" rx="8" fill="#1a1a1a"/>
  <rect x="228" y="60" width="12" height="380" fill="#1a1a1a"/>
  <!-- Sidebar logo -->
  <circle cx="110" cy="100" r="24" fill="white" opacity="0.1"/>
  <text x="110" y="108" text-anchor="middle" font-family="sans-serif" font-size="16" fill="white">8</text>
  <!-- Sidebar menu items -->
  <rect x="76" y="142" width="144" height="32" rx="4" fill="white" opacity="0.15"/>
  <rect x="92" y="152" width="16" height="12" rx="2" fill="white" opacity="0.7"/>
  <rect x="116" y="154" width="80" height="8" rx="2" fill="white" opacity="0.6"/>
  <rect x="92" y="190" width="16" height="12" rx="2" fill="white" opacity="0.3"/>
  <rect x="116" y="192" width="70" height="8" rx="2" fill="white" opacity="0.3"/>
  <rect x="92" y="222" width="16" height="12" rx="2" fill="white" opacity="0.3"/>
  <rect x="116" y="224" width="60" height="8" rx="2" fill="white" opacity="0.3"/>
  <rect x="92" y="254" width="16" height="12" rx="2" fill="white" opacity="0.3"/>
  <rect x="116" y="256" width="75" height="8" rx="2" fill="white" opacity="0.3"/>
  <rect x="92" y="286" width="16" height="12" rx="2" fill="white" opacity="0.3"/>
  <rect x="116" y="288" width="65" height="8" rx="2" fill="white" opacity="0.3"/>
  <!-- Main content area -->
  <rect x="256" y="80" width="464" height="40" fill="#f8f8f8" rx="4"/>
  <rect x="266" y="93" width="200" height="14" rx="3" fill="#1a1a1a"/>
  <rect x="620" y="89" width="90" height="24" rx="12" fill="#1a1a1a"/>
  <text x="665" y="105" text-anchor="middle" font-family="sans-serif" font-size="11" fill="white">+ New Post</text>
  <!-- Post editor -->
  <rect x="256" y="136" width="464" height="280" rx="4" fill="#f8f8f8" stroke="#e8e8e8" stroke-width="1"/>
  <rect x="272" y="152" width="432" height="44" rx="4" fill="white" stroke="#e0e0e0" stroke-width="1"/>
  <rect x="288" y="166" width="200" height="16" rx="3" fill="#ccc"/>
  <!-- Toolbar -->
  <rect x="272" y="210" width="432" height="36" rx="4" fill="#f0f0f0" stroke="#e8e8e8" stroke-width="1"/>
  <rect x="284" y="222" width="20" height="12" rx="2" fill="#1a1a1a"/>
  <rect x="312" y="222" width="20" height="12" rx="2" fill="#888"/>
  <rect x="340" y="222" width="20" height="12" rx="2" fill="#888"/>
  <rect x="368" y="222" width="20" height="12" rx="2" fill="#888"/>
  <!-- Content lines -->
  <rect x="272" y="260" width="380" height="10" rx="3" fill="#e8e8e8"/>
  <rect x="272" y="280" width="420" height="10" rx="3" fill="#ebebeb"/>
  <rect x="272" y="300" width="340" height="10" rx="3" fill="#e8e8e8"/>
  <rect x="272" y="330" width="432" height="60" rx="4" fill="#e0e0e0"/>
  <!-- Publish button -->
  <rect x="596" y="400" width="120" height="36" rx="8" fill="#1a1a1a"/>
  <text x="656" y="422" text-anchor="middle" font-family="sans-serif" font-size="13" fill="white">Publish</text>
</svg>`,

'landing-pages': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#f8f8f8"/>
  <!-- Conversion funnel -->
  <path d="M180 80 L620 80 L540 200 L440 200 Z" fill="#1a1a1a" opacity="0.9"/>
  <path d="M440 200 L540 200 L490 300 L390 300 Z" fill="#1a1a1a" opacity="0.7"/>
  <path d="M390 300 L490 300 L460 380 L420 380 Z" fill="#1a1a1a" opacity="0.9"/>
  <!-- Labels on funnel -->
  <text x="400" y="148" text-anchor="middle" font-family="sans-serif" font-size="14" fill="white">10,000 Visitors</text>
  <text x="440" y="258" text-anchor="middle" font-family="sans-serif" font-size="12" fill="white">2,400 Leads</text>
  <text x="440" y="344" text-anchor="middle" font-family="sans-serif" font-size="11" fill="white">480 Sales</text>
  <!-- Page mockup beside -->
  <rect x="580" y="100" width="180" height="300" rx="8" fill="white" stroke="#1a1a1a" stroke-width="2"/>
  <rect x="580" y="100" width="180" height="60" fill="#1a1a1a" rx="8"/>
  <rect x="580" y="140" width="180" height="20" fill="#1a1a1a"/>
  <rect x="596" y="116" width="100" height="14" rx="3" fill="white" opacity="0.5"/>
  <rect x="596" y="178" width="148" height="14" rx="3" fill="#e0e0e0"/>
  <rect x="596" y="200" width="120" height="10" rx="2" fill="#ebebeb"/>
  <rect x="596" y="218" width="130" height="10" rx="2" fill="#ebebeb"/>
  <rect x="606" y="244" width="128" height="36" rx="18" fill="#1a1a1a"/>
  <text x="670" y="266" text-anchor="middle" font-family="sans-serif" font-size="12" fill="white">Get Started →</text>
  <rect x="596" y="300" width="60" height="8" rx="2" fill="#e0e0e0"/>
  <rect x="596" y="316" width="148" height="8" rx="2" fill="#ebebeb"/>
  <rect x="596" y="332" width="130" height="8" rx="2" fill="#ebebeb"/>
  <rect x="596" y="356" width="148" height="36" rx="6" fill="#f4f4f4" stroke="#e0e0e0" stroke-width="1"/>
  <!-- CRO stats left -->
  <rect x="60" y="180" width="100" height="56" rx="6" fill="white" stroke="#1a1a1a" stroke-width="1.5"/>
  <text x="110" y="204" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#1a1a1a">4.8%</text>
  <text x="110" y="224" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#888">Conv. Rate</text>
  <rect x="60" y="254" width="100" height="56" rx="6" fill="#1a1a1a"/>
  <text x="110" y="278" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="white">+68%</text>
  <text x="110" y="298" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#aaa">vs Control</text>
</svg>`,

/* ── APP DEV SUBS ────────────────────────────────────────────────────────── */

'ios-android': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#f8f8f8"/>
  <!-- iOS phone -->
  <rect x="120" y="50" width="200" height="400" rx="32" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="130" y="80" width="180" height="340" rx="8" fill="#f4f4f4"/>
  <!-- Dynamic island -->
  <rect x="185" y="62" width="70" height="20" rx="10" fill="#1a1a1a"/>
  <!-- Home indicator -->
  <rect x="191" y="432" width="58" height="5" rx="3" fill="#1a1a1a"/>
  <!-- iOS app screen -->
  <rect x="130" y="80" width="180" height="60" fill="#1a1a1a" rx="8"/>
  <text x="220" y="116" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="white">MyApp</text>
  <!-- App grid -->
  <rect x="144" y="156" width="44" height="44" rx="10" fill="#1a1a1a"/>
  <rect x="198" y="156" width="44" height="44" rx="10" fill="#555"/>
  <rect x="252" y="156" width="44" height="44" rx="10" fill="#888"/>
  <rect x="144" y="212" width="44" height="44" rx="10" fill="#aaa"/>
  <rect x="198" y="212" width="44" height="44" rx="10" fill="#1a1a1a"/>
  <rect x="252" y="212" width="44" height="44" rx="10" fill="#555"/>
  <rect x="144" y="280" width="152" height="100" rx="10" fill="#e8e8e8"/>
  <!-- Android phone -->
  <rect x="480" y="50" width="200" height="400" rx="20" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="490" y="75" width="180" height="350" rx="6" fill="#f4f4f4"/>
  <!-- Camera dot -->
  <circle cx="580" cy="63" r="8" fill="#1a1a1a"/>
  <!-- Android nav bar -->
  <rect x="490" y="400" width="180" height="25" fill="#e8e8e8" rx="4"/>
  <circle cx="540" cy="413" r="8" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <rect x="571" y="407" width="16" height="12" rx="2" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <path d="M610,407 L618,413 L610,419" stroke="#1a1a1a" stroke-width="1.5" fill="none"/>
  <!-- Android app screen -->
  <rect x="490" y="75" width="180" height="56" fill="#1a1a1a"/>
  <text x="580" y="108" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="white">MyApp</text>
  <!-- Material cards -->
  <rect x="502" y="144" width="156" height="80" rx="8" fill="white" stroke="#e0e0e0" stroke-width="1"/>
  <rect x="512" y="154" width="80" height="12" rx="3" fill="#1a1a1a"/>
  <rect x="512" y="174" width="136" height="8" rx="2" fill="#e0e0e0"/>
  <rect x="512" y="190" width="110" height="8" rx="2" fill="#ebebeb"/>
  <rect x="502" y="238" width="156" height="80" rx="8" fill="#1a1a1a"/>
  <rect x="512" y="250" width="80" height="12" rx="3" fill="white" opacity="0.6"/>
  <rect x="512" y="270" width="136" height="8" rx="2" fill="white" opacity="0.3"/>
  <!-- Connecting bridge -->
  <path d="M320 250 Q400 220 480 250" stroke="#1a1a1a" stroke-width="2.5" stroke-dasharray="8,5" fill="none"/>
  <text x="400" y="210" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#888">cross-platform</text>
</svg>`,

'react-native-flutter': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#f8f8f8"/>
  <!-- React atom left -->
  <ellipse cx="240" cy="250" rx="120" ry="50" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <ellipse cx="240" cy="250" rx="120" ry="50" fill="none" stroke="#1a1a1a" stroke-width="2.5" transform="rotate(60 240 250)"/>
  <ellipse cx="240" cy="250" rx="120" ry="50" fill="none" stroke="#1a1a1a" stroke-width="2.5" transform="rotate(120 240 250)"/>
  <circle cx="240" cy="250" r="18" fill="#1a1a1a"/>
  <text x="240" y="258" text-anchor="middle" font-family="monospace" font-size="14" fill="white">RN</text>
  <!-- Flutter diamond right -->
  <polygon points="560,130 640,250 560,370 480,250" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <polygon points="560,190 610,250 560,310 510,250" fill="#1a1a1a"/>
  <text x="560" y="258" text-anchor="middle" font-family="monospace" font-size="14" fill="white">FL</text>
  <!-- One codebase label -->
  <rect x="300" y="100" width="200" height="40" rx="6" fill="#1a1a1a"/>
  <text x="400" y="125" text-anchor="middle" font-family="monospace" font-size="13" fill="white">One Codebase</text>
  <!-- Arrow down -->
  <line x1="400" y1="140" x2="400" y2="200" stroke="#1a1a1a" stroke-width="2" stroke-dasharray="5,4"/>
  <polygon points="400,200 392,184 408,184" fill="#1a1a1a"/>
  <!-- Two platform badges -->
  <rect x="300" y="380" width="90" height="36" rx="18" fill="#1a1a1a"/>
  <text x="345" y="402" text-anchor="middle" font-family="sans-serif" font-size="12" fill="white"> iOS</text>
  <rect x="410" y="380" width="90" height="36" rx="18" fill="white" stroke="#1a1a1a" stroke-width="2"/>
  <text x="455" y="402" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1a1a1a">Android</text>
  <!-- Connection lines down -->
  <line x1="280" y1="300" x2="345" y2="380" stroke="#ccc" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="560" y1="370" x2="455" y2="380" stroke="#ccc" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Shared code indicator -->
  <rect x="300" y="225" width="200" height="120" rx="6" fill="white" stroke="#1a1a1a" stroke-width="1.5"/>
  <rect x="316" y="242" width="80" height="8" rx="2" fill="#1a1a1a"/>
  <rect x="316" y="260" width="140" height="8" rx="2" fill="#e0e0e0"/>
  <rect x="316" y="276" width="120" height="8" rx="2" fill="#e8e8e8"/>
  <rect x="316" y="292" width="160" height="8" rx="2" fill="#e0e0e0"/>
  <rect x="316" y="316" width="60" height="18" rx="4" fill="#1a1a1a"/>
  <text x="346" y="329" text-anchor="middle" font-family="monospace" font-size="10" fill="white">90% shared</text>
</svg>`,

'app-ui-ux-design': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#f8f8f8"/>
  <!-- Figma-style frame left: wireframe -->
  <rect x="60" y="80" width="200" height="340" rx="12" fill="white" stroke="#1a1a1a" stroke-width="2"/>
  <text x="160" y="68" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#888">Wireframe</text>
  <rect x="76" y="100" width="168" height="24" rx="3" fill="#e8e8e8"/>
  <rect x="76" y="136" width="168" height="100" rx="3" fill="#f0f0f0" stroke="#ddd" stroke-width="1"/>
  <line x1="76" y1="136" x2="244" y2="236" stroke="#e0e0e0" stroke-width="1"/>
  <line x1="244" y1="136" x2="76" y2="236" stroke="#e0e0e0" stroke-width="1"/>
  <rect x="76" y="252" width="80" height="10" rx="2" fill="#e0e0e0"/>
  <rect x="76" y="270" width="168" height="8" rx="2" fill="#ebebeb"/>
  <rect x="76" y="286" width="140" height="8" rx="2" fill="#ebebeb"/>
  <rect x="96" y="310" width="128" height="32" rx="16" fill="#d0d0d0"/>
  <rect x="76" y="356" width="70" height="50" rx="4" fill="#ebebeb"/>
  <rect x="156" y="356" width="56" height="50" rx="4" fill="#ebebeb"/>
  <rect x="222" y="356" width="22" height="50" rx="4" fill="#ebebeb"/>
  <!-- Arrow -->
  <line x1="278" y1="250" x2="340" y2="250" stroke="#1a1a1a" stroke-width="2.5"/>
  <polygon points="340,250 326,243 326,257" fill="#1a1a1a"/>
  <!-- Figma-style frame right: hi-fi -->
  <rect x="358" y="80" width="200" height="340" rx="12" fill="white" stroke="#1a1a1a" stroke-width="2"/>
  <text x="458" y="68" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#888">Hi-Fidelity UI</text>
  <rect x="358" y="80" width="200" height="60" fill="#1a1a1a" rx="12"/>
  <rect x="358" y="120" width="200" height="20" fill="#1a1a1a"/>
  <text x="458" y="116" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="white">MyApp</text>
  <rect x="374" y="160" width="168" height="110" rx="8" fill="#f0f0f0"/>
  <rect x="374" y="282" width="80" height="14" rx="3" fill="#1a1a1a"/>
  <rect x="374" y="304" width="168" height="8" rx="2" fill="#e0e0e0"/>
  <rect x="374" y="320" width="140" height="8" rx="2" fill="#ebebeb"/>
  <rect x="394" y="344" width="128" height="36" rx="18" fill="#1a1a1a"/>
  <text x="458" y="366" text-anchor="middle" font-family="sans-serif" font-size="12" fill="white">Get Started</text>
  <!-- Component panel right -->
  <rect x="600" y="80" width="160" height="340" rx="8" fill="white" stroke="#ddd" stroke-width="1"/>
  <text x="680" y="68" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#888">Components</text>
  <rect x="616" y="96" width="128" height="32" rx="16" fill="#1a1a1a"/>
  <rect x="616" y="140" width="128" height="32" rx="8" fill="#f0f0f0" stroke="#ddd" stroke-width="1"/>
  <rect x="616" y="184" width="128" height="24" rx="4" fill="#ebebeb"/>
  <rect x="616" y="220" width="60" height="60" rx="8" fill="#e8e8e8"/>
  <rect x="684" y="220" width="60" height="60" rx="8" fill="#1a1a1a"/>
  <rect x="616" y="296" width="128" height="8" rx="2" fill="#e0e0e0"/>
  <rect x="616" y="312" width="100" height="8" rx="2" fill="#ebebeb"/>
  <rect x="616" y="328" width="128" height="8" rx="2" fill="#e0e0e0"/>
</svg>`,

'api-integration': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#f8f8f8"/>
  <!-- Central API hub -->
  <circle cx="400" cy="250" r="64" fill="#1a1a1a"/>
  <text x="400" y="245" text-anchor="middle" font-family="monospace" font-size="14" font-weight="bold" fill="white">REST</text>
  <text x="400" y="265" text-anchor="middle" font-family="monospace" font-size="14" fill="#aaa">API</text>
  <!-- Connected services -->
  <rect x="80" y="80" width="130" height="60" rx="8" fill="white" stroke="#1a1a1a" stroke-width="2"/>
  <text x="145" y="110" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1a1a1a">Stripe</text>
  <text x="145" y="128" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#888">Payments</text>

  <rect x="80" y="220" width="130" height="60" rx="8" fill="white" stroke="#1a1a1a" stroke-width="2"/>
  <text x="145" y="250" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1a1a1a">Twilio</text>
  <text x="145" y="268" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#888">SMS / WhatsApp</text>

  <rect x="80" y="360" width="130" height="60" rx="8" fill="white" stroke="#1a1a1a" stroke-width="2"/>
  <text x="145" y="390" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1a1a1a">HubSpot</text>
  <text x="145" y="408" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#888">CRM</text>

  <rect x="590" y="80" width="130" height="60" rx="8" fill="#1a1a1a"/>
  <text x="655" y="110" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="white">Razorpay</text>
  <text x="655" y="128" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#aaa">India Payments</text>

  <rect x="590" y="220" width="130" height="60" rx="8" fill="#1a1a1a"/>
  <text x="655" y="250" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="white">AWS S3</text>
  <text x="655" y="268" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#aaa">Storage</text>

  <rect x="590" y="360" width="130" height="60" rx="8" fill="#1a1a1a"/>
  <text x="655" y="390" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="white">Salesforce</text>
  <text x="655" y="408" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#aaa">Enterprise CRM</text>

  <!-- Connection lines -->
  <line x1="210" y1="110" x2="336" y2="220" stroke="#1a1a1a" stroke-width="1.5" stroke-dasharray="6,4"/>
  <line x1="210" y1="250" x2="336" y2="250" stroke="#1a1a1a" stroke-width="1.5" stroke-dasharray="6,4"/>
  <line x1="210" y1="390" x2="336" y2="280" stroke="#1a1a1a" stroke-width="1.5" stroke-dasharray="6,4"/>
  <line x1="590" y1="110" x2="464" y2="220" stroke="#1a1a1a" stroke-width="1.5" stroke-dasharray="6,4"/>
  <line x1="590" y1="250" x2="464" y2="250" stroke="#1a1a1a" stroke-width="1.5" stroke-dasharray="6,4"/>
  <line x1="590" y1="390" x2="464" y2="280" stroke="#1a1a1a" stroke-width="1.5" stroke-dasharray="6,4"/>
  <!-- Endpoint labels on lines -->
  <rect x="260" y="198" width="60" height="18" rx="4" fill="white" stroke="#e0e0e0" stroke-width="1"/>
  <text x="290" y="211" text-anchor="middle" font-family="monospace" font-size="9" fill="#888">POST</text>
  <rect x="260" y="240" width="60" height="18" rx="4" fill="white" stroke="#e0e0e0" stroke-width="1"/>
  <text x="290" y="253" text-anchor="middle" font-family="monospace" font-size="9" fill="#888">GET</text>
</svg>`,

/* ── HIRE DEV SUBS ───────────────────────────────────────────────────────── */

'full-stack': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#f8f8f8"/>
  <!-- Stack layers -->
  <rect x="200" y="80" width="400" height="64" rx="8" fill="#1a1a1a"/>
  <text x="400" y="108" text-anchor="middle" font-family="monospace" font-size="14" font-weight="bold" fill="white">Frontend</text>
  <text x="400" y="128" text-anchor="middle" font-family="monospace" font-size="11" fill="#aaa">React · Next.js · TypeScript · CSS</text>

  <rect x="160" y="164" width="480" height="64" rx="8" fill="#333"/>
  <text x="400" y="192" text-anchor="middle" font-family="monospace" font-size="14" font-weight="bold" fill="white">Backend</text>
  <text x="400" y="212" text-anchor="middle" font-family="monospace" font-size="11" fill="#aaa">Node.js · Express · REST · GraphQL</text>

  <rect x="120" y="248" width="560" height="64" rx="8" fill="#555"/>
  <text x="400" y="276" text-anchor="middle" font-family="monospace" font-size="14" font-weight="bold" fill="white">Database</text>
  <text x="400" y="296" text-anchor="middle" font-family="monospace" font-size="11" fill="#ddd">PostgreSQL · MongoDB · Redis · MySQL</text>

  <rect x="80" y="332" width="640" height="64" rx="8" fill="#888"/>
  <text x="400" y="360" text-anchor="middle" font-family="monospace" font-size="14" font-weight="bold" fill="white">Infrastructure</text>
  <text x="400" y="380" text-anchor="middle" font-family="monospace" font-size="11" fill="#eee">AWS · Docker · CI/CD · Kubernetes</text>

  <!-- Stack width indicators -->
  <line x1="200" y1="70" x2="200" y2="406" stroke="#ddd" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="600" y1="70" x2="600" y2="406" stroke="#ddd" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="80" y1="406" x2="720" y2="406" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Person icon above -->
  <circle cx="400" cy="40" r="20" fill="white" stroke="#1a1a1a" stroke-width="2"/>
  <text x="400" y="48" text-anchor="middle" font-family="sans-serif" font-size="16">👤</text>
  <line x1="400" y1="60" x2="400" y2="80" stroke="#1a1a1a" stroke-width="2"/>
</svg>`,

'frontend': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#f8f8f8"/>
  <!-- Browser chrome -->
  <rect x="80" y="60" width="640" height="380" rx="10" fill="white" stroke="#1a1a1a" stroke-width="2.5"/>
  <rect x="80" y="60" width="640" height="50" rx="10" fill="#1a1a1a"/>
  <rect x="80" y="90" width="640" height="20" fill="#1a1a1a"/>
  <circle cx="112" cy="85" r="8" fill="#444"/>
  <circle cx="136" cy="85" r="8" fill="#555"/>
  <circle cx="160" cy="85" r="8" fill="#666"/>
  <rect x="190" y="73" width="350" height="24" rx="12" fill="#2a2a2a"/>
  <!-- UI layout -->
  <rect x="96" y="128" width="608" height="60" fill="#f4f4f4" stroke="#e8e8e8" stroke-width="1"/>
  <rect x="112" y="143" width="80" height="28" rx="6" fill="#1a1a1a"/>
  <rect x="510" y="143" width="80" height="28" rx="14" fill="#1a1a1a"/>
  <rect x="600" y="143" width="80" height="28" rx="14" fill="white" stroke="#1a1a1a" stroke-width="1.5"/>
  <!-- Hero block -->
  <rect x="96" y="204" width="608" height="140" fill="#1a1a1a"/>
  <rect x="120" y="228" width="200" height="20" rx="4" fill="white" opacity="0.5"/>
  <rect x="120" y="258" width="280" height="16" rx="4" fill="white" opacity="0.3"/>
  <rect x="120" y="280" width="100" height="36" rx="18" fill="white"/>
  <!-- Cards row -->
  <rect x="96" y="360" width="192" height="70" rx="8" fill="#f4f4f4" stroke="#e8e8e8" stroke-width="1"/>
  <rect x="304" y="360" width="192" height="70" rx="8" fill="#f4f4f4" stroke="#e8e8e8" stroke-width="1"/>
  <rect x="512" y="360" width="192" height="70" rx="8" fill="#f4f4f4" stroke="#e8e8e8" stroke-width="1"/>
  <!-- Pixel ruler overlay -->
  <rect x="80" y="432" width="640" height="8" fill="none" stroke="#1a1a1a" stroke-width="1" stroke-dasharray="2,8"/>
  <text x="720" y="438" font-family="monospace" font-size="10" fill="#888">px</text>
</svg>`,

'backend': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#0d0d0d"/>
  <!-- Server rack left -->
  <rect x="80" y="80" width="200" height="340" rx="6" fill="#1a1a1a" stroke="#333" stroke-width="1.5"/>
  <text x="180" y="68" text-anchor="middle" font-family="monospace" font-size="11" fill="#666">SERVER</text>
  <!-- Server units -->
  <rect x="96" y="100" width="168" height="44" rx="4" fill="#2a2a2a" stroke="#444" stroke-width="1"/>
  <circle cx="116" cy="122" r="6" fill="#4ade80"/>
  <rect x="132" y="116" width="80" height="6" rx="2" fill="#333"/>
  <rect x="132" y="128" width="60" height="4" rx="2" fill="#333"/>
  <rect x="96" y="156" width="168" height="44" rx="4" fill="#2a2a2a" stroke="#444" stroke-width="1"/>
  <circle cx="116" cy="178" r="6" fill="#4ade80"/>
  <rect x="132" y="172" width="80" height="6" rx="2" fill="#333"/>
  <rect x="96" y="212" width="168" height="44" rx="4" fill="#2a2a2a" stroke="#444" stroke-width="1"/>
  <circle cx="116" cy="234" r="6" fill="#facc15"/>
  <rect x="132" y="228" width="80" height="6" rx="2" fill="#333"/>
  <rect x="96" y="268" width="168" height="44" rx="4" fill="#2a2a2a" stroke="#444" stroke-width="1"/>
  <circle cx="116" cy="290" r="6" fill="#4ade80"/>
  <rect x="96" y="324" width="168" height="44" rx="4" fill="#2a2a2a" stroke="#444" stroke-width="1"/>
  <circle cx="116" cy="346" r="6" fill="#4ade80"/>
  <!-- Database cylinders center -->
  <ellipse cx="400" cy="160" rx="70" ry="22" fill="#333" stroke="#555" stroke-width="1.5"/>
  <rect x="330" y="160" width="140" height="70" fill="#2a2a2a" stroke="#555" stroke-width="1.5"/>
  <ellipse cx="400" cy="230" rx="70" ry="22" fill="#333" stroke="#555" stroke-width="1.5"/>
  <text x="400" y="200" text-anchor="middle" font-family="monospace" font-size="12" fill="#aaa">PostgreSQL</text>
  <ellipse cx="400" cy="300" rx="70" ry="22" fill="#444" stroke="#666" stroke-width="1.5"/>
  <rect x="330" y="300" width="140" height="60" fill="#333" stroke="#555" stroke-width="1.5"/>
  <ellipse cx="400" cy="360" rx="70" ry="22" fill="#444" stroke="#666" stroke-width="1.5"/>
  <text x="400" y="335" text-anchor="middle" font-family="monospace" font-size="12" fill="#aaa">Redis</text>
  <!-- API gateway right -->
  <rect x="540" y="120" width="180" height="260" rx="6" fill="#1a1a1a" stroke="#333" stroke-width="1.5"/>
  <text x="630" y="108" text-anchor="middle" font-family="monospace" font-size="11" fill="#666">API GATEWAY</text>
  <rect x="556" y="140" width="148" height="28" rx="4" fill="#2a2a2a"/>
  <text x="568" y="158" font-family="monospace" font-size="11" fill="#60a5fa">GET</text>
  <text x="610" y="158" font-family="monospace" font-size="11" fill="#aaa">/api/users</text>
  <rect x="556" y="180" width="148" height="28" rx="4" fill="#2a2a2a"/>
  <text x="568" y="198" font-family="monospace" font-size="11" fill="#4ade80">POST</text>
  <text x="614" y="198" font-family="monospace" font-size="11" fill="#aaa">/api/auth</text>
  <rect x="556" y="220" width="148" height="28" rx="4" fill="#2a2a2a"/>
  <text x="568" y="238" font-family="monospace" font-size="11" fill="#facc15">PUT</text>
  <text x="604" y="238" font-family="monospace" font-size="11" fill="#aaa">/api/orders</text>
  <rect x="556" y="260" width="148" height="28" rx="4" fill="#2a2a2a"/>
  <text x="568" y="278" font-family="monospace" font-size="11" fill="#f87171">DEL</text>
  <text x="606" y="278" font-family="monospace" font-size="11" fill="#aaa">/api/posts</text>
  <!-- Connecting lines -->
  <line x1="280" y1="200" x2="330" y2="200" stroke="#444" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="470" y1="200" x2="540" y2="200" stroke="#444" stroke-width="1.5" stroke-dasharray="5,3"/>
</svg>`,

'dedicated-teams': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#f8f8f8"/>
  <!-- Team member cards -->
  <!-- Dev 1 -->
  <rect x="60" y="120" width="140" height="180" rx="10" fill="white" stroke="#1a1a1a" stroke-width="2"/>
  <circle cx="130" cy="170" r="36" fill="#1a1a1a"/>
  <text x="130" y="178" text-anchor="middle" font-family="sans-serif" font-size="20" fill="white">👨‍💻</text>
  <text x="130" y="228" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1a1a1a">Full-Stack</text>
  <text x="130" y="246" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#888">Developer</text>
  <rect x="76" y="264" width="108" height="24" rx="12" fill="#1a1a1a"/>
  <text x="130" y="280" text-anchor="middle" font-family="sans-serif" font-size="10" fill="white">React · Node</text>
  <!-- Dev 2 -->
  <rect x="220" y="80" width="140" height="180" rx="10" fill="#1a1a1a"/>
  <circle cx="290" cy="130" r="36" fill="#333"/>
  <text x="290" y="138" text-anchor="middle" font-family="sans-serif" font-size="20" fill="white">🎨</text>
  <text x="290" y="188" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="white">UI/UX</text>
  <text x="290" y="206" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#aaa">Designer</text>
  <rect x="236" y="224" width="108" height="24" rx="12" fill="white"/>
  <text x="290" y="240" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1a1a1a">Figma · Adobe</text>
  <!-- PM -->
  <rect x="380" y="60" width="140" height="180" rx="10" fill="white" stroke="#1a1a1a" stroke-width="2.5"/>
  <circle cx="450" cy="110" r="36" fill="#1a1a1a"/>
  <text x="450" y="118" text-anchor="middle" font-family="sans-serif" font-size="20" fill="white">📋</text>
  <text x="450" y="168" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1a1a1a">Project</text>
  <text x="450" y="184" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1a1a1a">Manager</text>
  <rect x="396" y="206" width="108" height="24" rx="12" fill="#1a1a1a"/>
  <text x="450" y="222" text-anchor="middle" font-family="sans-serif" font-size="10" fill="white">Agile · Scrum</text>
  <!-- QA -->
  <rect x="540" y="80" width="140" height="180" rx="10" fill="#1a1a1a"/>
  <circle cx="610" cy="130" r="36" fill="#333"/>
  <text x="610" y="138" text-anchor="middle" font-family="sans-serif" font-size="20" fill="white">🧪</text>
  <text x="610" y="188" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="white">QA</text>
  <text x="610" y="206" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#aaa">Engineer</text>
  <rect x="556" y="224" width="108" height="24" rx="12" fill="white"/>
  <text x="610" y="240" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1a1a1a">Selenium · Jest</text>
  <!-- DevOps -->
  <rect x="700" y="120" width="60" height="80" rx="10" fill="white" stroke="#1a1a1a" stroke-width="2"/>
  <text x="730" y="160" text-anchor="middle" font-family="sans-serif" font-size="20">⚙️</text>
  <text x="730" y="186" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#888">DevOps</text>
  <!-- Sprint board bottom -->
  <rect x="60" y="340" width="680" height="120" rx="8" fill="white" stroke="#1a1a1a" stroke-width="1.5"/>
  <text x="80" y="360" font-family="sans-serif" font-size="11" font-weight="bold" fill="#888">SPRINT 4</text>
  <rect x="80" y="370" width="140" height="76" rx="4" fill="#f4f4f4"/>
  <text x="150" y="386" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#888">TO DO</text>
  <rect x="88" y="392" width="124" height="20" rx="3" fill="#e0e0e0"/>
  <rect x="88" y="418" width="124" height="20" rx="3" fill="#e0e0e0"/>
  <rect x="240" y="370" width="160" height="76" rx="4" fill="#f4f4f4"/>
  <text x="320" y="386" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#888">IN PROGRESS</text>
  <rect x="248" y="392" width="144" height="20" rx="3" fill="#1a1a1a"/>
  <rect x="420" y="370" width="160" height="76" rx="4" fill="#f4f4f4"/>
  <text x="500" y="386" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#888">REVIEW</text>
  <rect x="428" y="392" width="144" height="20" rx="3" fill="#555"/>
  <rect x="428" y="418" width="144" height="20" rx="3" fill="#555"/>
  <rect x="600" y="370" width="120" height="76" rx="4" fill="#1a1a1a"/>
  <text x="660" y="386" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="white">DONE</text>
  <rect x="608" y="392" width="104" height="20" rx="3" fill="#333"/>
  <rect x="608" y="418" width="104" height="20" rx="3" fill="#333"/>
</svg>`,

/* ── GRAPHIC DESIGN SUBS ─────────────────────────────────────────────────── */

'logo-branding': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#f8f8f8"/>
  <!-- Logo variations -->
  <!-- Primary dark -->
  <rect x="80" y="80" width="280" height="180" rx="8" fill="#1a1a1a"/>
  <circle cx="180" cy="170" r="60" fill="white" opacity="0.08"/>
  <circle cx="180" cy="170" r="40" fill="white"/>
  <text x="180" y="180" text-anchor="middle" font-family="serif" font-size="28" font-weight="bold" fill="#1a1a1a">8</text>
  <text x="248" y="165" font-family="sans-serif" font-size="28" font-weight="800" fill="white">dots</text>
  <text x="180" y="240" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#666">PRIMARY — DARK BG</text>
  <!-- Primary light -->
  <rect x="380" y="80" width="280" height="180" rx="8" fill="white" stroke="#1a1a1a" stroke-width="1.5"/>
  <circle cx="480" cy="170" r="60" fill="#1a1a1a"/>
  <circle cx="480" cy="170" r="40" fill="white"/>
  <text x="480" y="180" text-anchor="middle" font-family="serif" font-size="28" font-weight="bold" fill="#1a1a1a">8</text>
  <text x="548" y="165" font-family="sans-serif" font-size="28" font-weight="800" fill="#1a1a1a">dots</text>
  <text x="480" y="240" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#888">PRIMARY — LIGHT BG</text>
  <!-- Colour palette -->
  <rect x="80" y="280" width="580" height="60" rx="8" fill="white" stroke="#e0e0e0" stroke-width="1"/>
  <rect x="96" y="294" width="80" height="32" rx="4" fill="#0d0d0d"/>
  <rect x="184" y="294" width="80" height="32" rx="4" fill="#1a1a1a"/>
  <rect x="272" y="294" width="80" height="32" rx="4" fill="#555"/>
  <rect x="360" y="294" width="80" height="32" rx="4" fill="#888"/>
  <rect x="448" y="294" width="80" height="32" rx="4" fill="#e8e8e8" stroke="#ddd" stroke-width="1"/>
  <rect x="536" y="294" width="80" height="32" rx="4" fill="#f8f8f8" stroke="#ddd" stroke-width="1"/>
  <!-- Typography -->
  <rect x="80" y="360" width="580" height="100" rx="8" fill="white" stroke="#e0e0e0" stroke-width="1"/>
  <text x="100" y="398" font-family="sans-serif" font-size="28" font-weight="800" fill="#1a1a1a">Space Grotesk</text>
  <text x="100" y="426" font-family="sans-serif" font-size="14" fill="#888">Primary Typeface — Bold for headlines, Regular for body copy</text>
  <text x="540" y="406" font-family="sans-serif" font-size="18" font-style="italic" fill="#ccc">Aa</text>
</svg>`,

'social-media-creatives': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#f8f8f8"/>
  <!-- Instagram post large -->
  <rect x="60" y="60" width="220" height="220" rx="10" fill="#1a1a1a"/>
  <rect x="76" y="76" width="188" height="120" rx="4" fill="#2a2a2a"/>
  <text x="170" y="142" text-anchor="middle" font-family="sans-serif" font-size="28" fill="white">8</text>
  <circle cx="80" cy="218" r="14" fill="#333"/>
  <rect x="104" y="210" width="80" height="10" rx="3" fill="#555"/>
  <rect x="104" y="228" width="60" height="8" rx="2" fill="#444"/>
  <rect x="76" y="252" width="188" height="8" rx="2" fill="#333"/>
  <!-- Story vertical -->
  <rect x="300" y="40" width="120" height="220" rx="10" fill="#1a1a1a"/>
  <rect x="310" y="50" width="100" height="160" rx="4" fill="#2a2a2a"/>
  <text x="360" y="136" text-anchor="middle" font-family="sans-serif" font-size="14" fill="white">Swipe Up</text>
  <text x="360" y="154" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#888">↑</text>
  <rect x="310" y="222" width="100" height="28" rx="4" fill="#333"/>
  <!-- LinkedIn banner -->
  <rect x="440" y="40" width="320" height="100" rx="8" fill="#1a1a1a"/>
  <rect x="456" y="56" width="200" height="16" rx="3" fill="white" opacity="0.5"/>
  <rect x="456" y="80" width="150" height="12" rx="3" fill="white" opacity="0.3"/>
  <rect x="456" y="100" width="100" height="28" rx="14" fill="white"/>
  <text x="506" y="118" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1a1a1a">Connect</text>
  <!-- Twitter/X post -->
  <rect x="440" y="160" width="320" height="120" rx="8" fill="white" stroke="#1a1a1a" stroke-width="1.5"/>
  <circle cx="464" cy="184" r="16" fill="#1a1a1a"/>
  <text x="464" y="192" text-anchor="middle" font-family="sans-serif" font-size="12" fill="white">8</text>
  <rect x="490" y="176" width="100" height="10" rx="3" fill="#1a1a1a"/>
  <rect x="490" y="194" width="60" height="8" rx="2" fill="#888"/>
  <rect x="456" y="218" width="288" height="8" rx="2" fill="#e0e0e0"/>
  <rect x="456" y="234" width="240" height="8" rx="2" fill="#ebebeb"/>
  <rect x="456" y="254" width="40" height="18" rx="4" fill="none" stroke="#e0e0e0" stroke-width="1"/>
  <rect x="504" y="254" width="40" height="18" rx="4" fill="none" stroke="#e0e0e0" stroke-width="1"/>
  <!-- Carousel post -->
  <rect x="60" y="300" width="360" height="160" rx="10" fill="white" stroke="#1a1a1a" stroke-width="1.5"/>
  <rect x="60" y="300" width="120" height="160" fill="#1a1a1a" rx="10"/>
  <text x="120" y="385" text-anchor="middle" font-family="sans-serif" font-size="11" fill="white">Slide 1</text>
  <rect x="186" y="320" width="214" height="14" rx="3" fill="#e0e0e0"/>
  <rect x="186" y="344" width="190" height="10" rx="2" fill="#ebebeb"/>
  <rect x="186" y="362" width="214" height="10" rx="2" fill="#ebebeb"/>
  <circle cx="320" cy="434" r="5" fill="#1a1a1a"/>
  <circle cx="340" cy="434" r="5" fill="#ccc"/>
  <circle cx="360" cy="434" r="5" fill="#ccc"/>
  <circle cx="380" cy="434" r="5" fill="#ccc"/>
</svg>`,

'print-packaging': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#f8f8f8"/>
  <!-- 3D Box isometric -->
  <!-- Top face -->
  <polygon points="300,100 500,100 560,160 360,160" fill="#e8e8e8" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Front face -->
  <polygon points="300,100 360,160 360,360 300,300" fill="white" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Right face -->
  <polygon points="500,100 560,160 560,360 500,300" fill="#f4f4f4" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Front bottom -->
  <polygon points="300,300 360,360 560,360 500,300" fill="#ececec" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Logo on front face -->
  <circle cx="330" cy="200" r="28" fill="#1a1a1a"/>
  <text x="330" y="208" text-anchor="middle" font-family="serif" font-size="18" font-weight="bold" fill="white">8</text>
  <!-- Brand text on front -->
  <text x="330" y="250" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1a1a1a">8dots</text>
  <!-- Business card beside -->
  <rect x="600" y="120" width="160" height="90" rx="6" fill="#1a1a1a"/>
  <circle cx="630" cy="155" r="20" fill="white" opacity="0.15"/>
  <circle cx="630" cy="155" r="13" fill="white"/>
  <text x="630" y="161" text-anchor="middle" font-family="serif" font-size="10" font-weight="bold" fill="#1a1a1a">8</text>
  <rect x="654" y="148" width="80" height="8" rx="2" fill="white" opacity="0.7"/>
  <rect x="654" y="162" width="60" height="6" rx="2" fill="white" opacity="0.4"/>
  <rect x="614" y="186" width="132" height="6" rx="2" fill="white" opacity="0.3"/>
  <rect x="614" y="198" width="100" height="5" rx="2" fill="white" opacity="0.2"/>
  <!-- Brochure below -->
  <rect x="600" y="240" width="160" height="200" rx="6" fill="white" stroke="#1a1a1a" stroke-width="1.5"/>
  <rect x="600" y="240" width="160" height="80" fill="#1a1a1a" rx="6"/>
  <rect x="600" y="300" width="160" height="20" fill="#1a1a1a"/>
  <rect x="616" y="260" width="100" height="12" rx="3" fill="white" opacity="0.6"/>
  <rect x="616" y="280" width="80" height="10" rx="2" fill="white" opacity="0.3"/>
  <rect x="616" y="336" width="128" height="8" rx="2" fill="#e0e0e0"/>
  <rect x="616" y="352" width="110" height="8" rx="2" fill="#ebebeb"/>
  <rect x="616" y="368" width="128" height="8" rx="2" fill="#e0e0e0"/>
  <rect x="616" y="392" width="100" height="28" rx="14" fill="#1a1a1a"/>
  <text x="666" y="410" text-anchor="middle" font-family="sans-serif" font-size="10" fill="white">Learn More</text>
  <!-- Dieline hint bottom left -->
  <rect x="60" y="340" width="200" height="120" rx="4" fill="none" stroke="#bbb" stroke-width="1.5" stroke-dasharray="6,4"/>
  <line x1="160" y1="340" x2="160" y2="460" stroke="#bbb" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="60" y1="400" x2="260" y2="400" stroke="#bbb" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="160" y="385" text-anchor="middle" font-family="monospace" font-size="11" fill="#bbb">DIELINE</text>
</svg>`,

'motion-graphics': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#0d0d0d"/>
  <!-- Timeline -->
  <rect x="60" y="380" width="680" height="6" rx="3" fill="#2a2a2a"/>
  <rect x="60" y="380" width="340" height="6" rx="3" fill="#555"/>
  <!-- Playhead -->
  <line x1="400" y1="360" x2="400" y2="420" stroke="white" stroke-width="2"/>
  <polygon points="400,355 393,362 407,362" fill="white"/>
  <!-- Play button -->
  <circle cx="400" cy="220" r="70" fill="#1a1a1a" stroke="#333" stroke-width="2"/>
  <polygon points="380,190 380,250 440,220" fill="white"/>
  <!-- Keyframe diamonds on timeline -->
  <polygon points="100,377 106,383 100,389 94,383" fill="#aaa"/>
  <polygon points="200,377 206,383 200,389 194,383" fill="white"/>
  <polygon points="300,377 306,383 300,389 294,383" fill="#aaa"/>
  <polygon points="400,377 406,383 400,389 394,383" fill="white"/>
  <polygon points="500,377 506,383 500,389 494,383" fill="#555"/>
  <polygon points="600,377 606,383 600,389 594,383" fill="#555"/>
  <polygon points="700,377 706,383 700,389 694,383" fill="#444"/>
  <!-- Layer tracks -->
  <text x="60" y="340" font-family="monospace" font-size="10" fill="#555">Layer 3</text>
  <rect x="120" y="328" width="560" height="10" rx="3" fill="#1f1f1f" stroke="#333" stroke-width="1"/>
  <rect x="160" y="328" width="200" height="10" rx="3" fill="#333"/>
  <text x="60" y="316" font-family="monospace" font-size="10" fill="#555">Layer 2</text>
  <rect x="120" y="304" width="560" height="10" rx="3" fill="#1f1f1f" stroke="#333" stroke-width="1"/>
  <rect x="120" y="304" width="280" height="10" rx="3" fill="#444"/>
  <text x="60" y="292" font-family="monospace" font-size="10" fill="#666">Layer 1</text>
  <rect x="120" y="280" width="560" height="10" rx="3" fill="#1f1f1f" stroke="#333" stroke-width="1"/>
  <rect x="120" y="280" width="440" height="10" rx="3" fill="#555"/>
  <!-- Motion blur circles around play button -->
  <circle cx="400" cy="220" r="90" fill="none" stroke="#222" stroke-width="1.5"/>
  <circle cx="400" cy="220" r="110" fill="none" stroke="#1a1a1a" stroke-width="1"/>
  <!-- Corner sparkles -->
  <text x="100" y="100" font-family="sans-serif" font-size="20" fill="#333">✦</text>
  <text x="660" y="100" font-family="sans-serif" font-size="20" fill="#333">✦</text>
  <text x="100" y="260" font-family="sans-serif" font-size="14" fill="#222">✦</text>
  <text x="680" y="260" font-family="sans-serif" font-size="14" fill="#222">✦</text>
  <!-- FPS counter -->
  <rect x="680" y="60" width="80" height="30" rx="4" fill="#1a1a1a" stroke="#333" stroke-width="1"/>
  <text x="720" y="79" text-anchor="middle" font-family="monospace" font-size="12" fill="#4ade80">60 FPS</text>
</svg>`,

};

Object.entries(svgs).forEach(([name, content]) => {
  const file = path.join(OUT, `${name}.svg`);
  fs.writeFileSync(file, content.trim());
  console.log(`✓ images/services/${name}.svg`);
});

console.log(`\n✅ ${Object.keys(svgs).length} SVGs generated.`);
