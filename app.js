/* =========================================================
   SMC — Study More Confidently
   Unit 1: Basic Computer Concepts & Network Models
   Unit 2: Physical Layer
   Content adapted in original simplified wording from the
   course PPTs (topic list) and cross-checked against
   Forouzan's "Data Communications and Networking" for the
   topics the PPTs actually cover.
   ========================================================= */

const STATIONS = [
  { id:"home",        icon:"🏠", label:"Home", kind:"home" },

  { id:"network",     icon:"🌐", label:"What is a Network?", kind:"topic", group:"unit1" },
  { id:"datacomm",    icon:"✉️", label:"Data Communication", kind:"topic", group:"unit1" },
  { id:"effective",   icon:"✅", label:"Good Communication", kind:"topic", group:"unit1" },
  { id:"devices",     icon:"🖥️", label:"Network Devices", kind:"topic", group:"unit1" },
  { id:"represent",   icon:"🔤", label:"Data Representation", kind:"topic", group:"unit1" },
  { id:"flow",        icon:"🔁", label:"Data Flow", kind:"topic", group:"unit1" },
  { id:"criteria",    icon:"🚗", label:"Network Criteria", kind:"topic", group:"unit1" },
  { id:"topology",    icon:"🕸️", label:"Physical Topologies", kind:"topic", group:"unit1" },
  { id:"lanwan",      icon:"🏙️", label:"LAN, WAN & Internetwork", kind:"topic", group:"unit1" },
  { id:"switching",   icon:"🔀", label:"Switching Basics", kind:"topic", group:"unit1" },
  { id:"internet",    icon:"🛰️", label:"The Internet", kind:"topic", group:"unit1" },
  { id:"history",     icon:"🕰️", label:"History of the Internet", kind:"topic", group:"unit1" },
  { id:"infra",       icon:"🌊", label:"Cables, Standards & Governance", kind:"topic", group:"unit1" },
  { id:"layers",      icon:"🧱", label:"Protocols & Layers", kind:"topic", group:"unit1" },
  { id:"netstack",    icon:"🧭", label:"Network, Transport & App Layers", kind:"topic", group:"unit1" },
  { id:"quiz1",       icon:"🧠", label:"Unit 1 Quiz", kind:"quiz", group:"unit1", quizId:"quiz1" },

  { id:"signals",     icon:"📡", label:"Data & Signals", kind:"topic", group:"unit2" },
  { id:"digitalnums", icon:"🔢", label:"Bit Rate & Bandwidth", kind:"topic", group:"unit2" },
  { id:"composite",   icon:"📈", label:"Composite Signals & Bandwidth", kind:"topic", group:"unit2" },
  { id:"transmission",icon:"📶", label:"Baseband & Broadband", kind:"topic", group:"unit2" },
  { id:"performance", icon:"🚦", label:"Network Performance", kind:"topic", group:"unit2" },
  { id:"modes",       icon:"🔀", label:"Transmission Modes", kind:"topic", group:"unit2" },
  { id:"multiplexing",icon:"🎛️", label:"Multiplexing: FDM & WDM", kind:"topic", group:"unit2" },
  { id:"tdm",         icon:"⏱️", label:"Time-Division Multiplexing", kind:"topic", group:"unit2" },
  { id:"media",       icon:"🔌", label:"Guided Media", kind:"topic", group:"unit2" },
  { id:"wireless",    icon:"🛰️", label:"Unguided Media: Wireless", kind:"topic", group:"unit2" },
  { id:"pswitching",  icon:"🔗", label:"Circuit & Packet Switching", kind:"topic", group:"unit2" },
  { id:"datagramvc",  icon:"🗺️", label:"Datagram vs Virtual-Circuit", kind:"topic", group:"unit2" },
  { id:"switcharch",  icon:"🏗️", label:"Inside a Switch", kind:"topic", group:"unit2" },
  { id:"quiz2",       icon:"🧠", label:"Unit 2 Quiz", kind:"quiz", group:"unit2", quizId:"quiz2" },

  { id:"dllintro",    icon:"🧩", label:"Data-Link Layer Basics", kind:"topic", group:"unit3" },
  { id:"framing",     icon:"📦", label:"Framing", kind:"topic", group:"unit3" },
  { id:"flowerr",     icon:"🚥", label:"Flow, Error & Protocol Types", kind:"topic", group:"unit3" },
  { id:"arq",         icon:"⏳", label:"Stop-and-Wait & ARQ", kind:"topic", group:"unit3" },
  { id:"errortypes",  icon:"⚡", label:"Types of Errors", kind:"topic", group:"unit3" },
  { id:"crc",         icon:"🧮", label:"Block Coding & CRC", kind:"topic", group:"unit3" },
  { id:"checksum",    icon:"➗", label:"Checksum", kind:"topic", group:"unit3" },
  { id:"macintro",    icon:"🚏", label:"Multiple Access — Overview", kind:"topic", group:"unit3" },
  { id:"aloha",       icon:"📻", label:"Random Access: ALOHA", kind:"topic", group:"unit3" },
  { id:"csma",        icon:"🚧", label:"CSMA, CSMA/CD & CSMA/CA", kind:"topic", group:"unit3" },
  { id:"controlled",  icon:"🎟️", label:"Controlled Access", kind:"topic", group:"unit3" },
  { id:"channelize",  icon:"🎚️", label:"Channelization: FDMA/TDMA/CDMA", kind:"topic", group:"unit3" },
  { id:"ethernet",    icon:"🖧", label:"Ethernet Basics", kind:"topic", group:"unit3" },
  { id:"quiz3",       icon:"🧠", label:"Unit 3 Quiz", kind:"quiz", group:"unit3", quizId:"quiz3" },

  { id:"summary",     icon:"📄", label:"Summary & Download", kind:"summary" },
];

const GROUP_META = {
  unit1: { title:"Unit 1 · Network Basics", eyebrow:"UNIT 1" },
  unit2: { title:"Unit 2 · Physical Layer", eyebrow:"UNIT 2" },
  unit3: { title:"Unit 3 · Data-Link Layer", eyebrow:"UNIT 3" },
};

/* ---------- helper builders ---------- */
function explain(html){ return `<div class="card explain-card"><h3>🌟 Simple Explanation</h3>${html}</div>`; }
function analogy(html){ return `<div class="card analogy-card"><h3>🚂 Real-Life Analogy</h3>${html}</div>`; }
function remember(items){ return `<div class="remember-box"><h3>💡 Remember</h3><ul>${items.map(i=>`<li>${i}</li>`).join("")}</ul></div>`; }
function mistake(html){ return `<div class="mistake-box"><h3>⚠️ Common Mistake</h3>${html}</div>`; }
function more(title,html){ return `<details class="more"><summary>${title}</summary><div class="more-inner">${html}</div></details>`; }
function esc(s){ return String(s).replace(/"/g,"&quot;"); }
function fig(unit,file,caption,srcNote){ return `<figure class="figure"><img src="images/${unit}/${file}" alt="${esc(caption)}" loading="lazy"><figcaption class="figure-cap">${caption}${srcNote?` <span class="src-tag">${srcNote}</span>`:""}</figcaption></figure>`; }
function figGrid(unit,items){ return `<div class="figure-grid">${items.map(it=>fig(unit,it[0],it[1],it[2])).join("")}</div>`; }

/* ================= STATION CONTENT ================= */
const CONTENT = {};

CONTENT.home = `
  <div class="hero">
    <div class="hero-cables">🛰️</div>
    <span class="eyebrow" style="background:rgba(255,255,255,.22);">SMC PORTAL</span>
    <h1>Study More Confidently</h1>
    <p>Welcome to SMC! We'll travel station by station through three units of Computer Networks — one small idea at a time, with pictures, examples, and quick checks along the way.</p>
    <div class="stat-row">
      <div class="stat-pill">🧩 3 Units</div>
      <div class="stat-pill">🧠 A quiz after each unit</div>
      <div class="stat-pill">📥 Downloadable notes</div>
    </div>
  </div>

  ${explain(`<p>This page is your travel guide. Every station explains <strong>one idea only</strong>, with a real-life comparison and a short "Remember" box so it's easy to recall later.</p>`)}

  <h3 style="margin-top:26px;">Unit 1 · Basic Computer Concepts &amp; Network Models</h3>
  <div class="route-preview">
    ${STATIONS.filter(s=>s.group==="unit1" && s.kind==="topic").map(s=>`
      <div class="route-item"><span class="emoji">${s.icon}</span>${s.label}</div>
    `).join("")}
  </div>

  <h3 style="margin-top:26px;">Unit 2 · Physical Layer</h3>
  <div class="route-preview">
    ${STATIONS.filter(s=>s.group==="unit2" && s.kind==="topic").map(s=>`
      <div class="route-item"><span class="emoji">${s.icon}</span>${s.label}</div>
    `).join("")}
  </div>

  <h3 style="margin-top:26px;">Unit 3 · Data-Link Layer</h3>
  <div class="route-preview">
    ${STATIONS.filter(s=>s.group==="unit3" && s.kind==="topic").map(s=>`
      <div class="route-item"><span class="emoji">${s.icon}</span>${s.label}</div>
    `).join("")}
  </div>

  ${more("🎒 Tips for using this page","<p>Use the ⬅️➡️ buttons at the bottom of each page, or tap any station on the left. Tap boxes and diagrams — they are clickable! Turn on <strong>Dark mode</strong> or <strong>Easy-read spacing</strong> from the side menu if that helps you read more comfortably.</p>")}
`;

CONTENT.network = `
  ${explain(`
    <p>Imagine you and your friends are sitting in different classrooms. If everyone has a mobile phone, you can all send messages to each other.</p>
    <p>When many devices are connected so that they can share information, we call this a <strong>computer network</strong>. A network simply means devices (called <strong>nodes</strong>) that are linked together by <strong>communication links</strong> so they can talk to each other and share resources or data.</p>
  `)}

  ${analogy(`<p>A railway network connects many stations. A road network connects many cities. In the same way, a computer network connects many devices so that information can travel between them.</p>`)}

  <h3>The 5 pieces every communication needs</h3>
  <p>Whenever two devices "talk", five things must be present. Tap each one below to find out what it does.</p>
  <div class="diagram" id="commDiagram">
    <div class="node clickable" data-pop="The device that sends the message. Example: your phone when you type and send a text.">
      <span class="emoji">📤</span>Sender
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="The information being sent — text, a number, a picture, sound, or video.">
      <span class="emoji">💬</span>Message
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="The path the message travels through — a cable, or the air (wireless).">
      <span class="emoji">🛣️</span>Medium
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="The device that gets the message. Example: your friend's phone.">
      <span class="emoji">📥</span>Receiver
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="A set of rules both sender and receiver agree to follow, so the message is understood correctly.">
      <span class="emoji">📜</span>Protocol
      <div class="node-pop"></div>
    </div>
  </div>

  ${fig("unit1","network-components-diagram.jpg","Two computers linked by a cable — the simplest possible picture of sender, receiver, and the transmission medium between them.")}

  ${remember(["Network = devices connected together","A protocol is simply a set of agreed rules","Every message needs: Sender + Message + Medium + Receiver + Protocol"])}

  ${mistake(`<p><strong>Network</strong> and <strong>Internet</strong> are not the same thing!</p>
  <p>✔ Every Internet connection uses a network.<br>✘ But not every network is the Internet — your home Wi-Fi network connecting your phone and laptop is a network, even without internet access.</p>`)}

  ${more("🔎 Want to know more? What can be a 'device' in a network?","<p>A device in a network can be a <strong>host</strong> — something a person uses directly, like a laptop, desktop, workstation, or mobile phone. It can also be a <strong>connecting device</strong> — something that helps other devices talk to each other, like a router, switch, or modem. We'll meet these in the 'Network Devices' station.</p>")}
`;

CONTENT.datacomm = `
  ${explain(`
    <p><strong>Data Communication</strong> means exchanging data between two devices using some kind of transmission medium (a cable, or wireless signal).</p>
    <p>For this exchange to work, the devices must be part of a communication system — which is a combination of hardware (the physical devices) and software (the programs that control them).</p>
  `)}

  ${analogy(`<p>Think of a phone call. The hardware is your phone and the network towers. The software is the app or system managing the call. Together, they let your voice (the data) travel from you to your friend.</p>`)}

  ${remember(["Data communication = exchanging data via a transmission medium","It needs both hardware AND software working together"])}

  <h3>What can travel as "data"?</h3>
  <div class="chiprow">
    <span class="chip">📝 Text</span>
    <span class="chip">🔢 Numbers</span>
    <span class="chip">🖼️ Images</span>
    <span class="chip">🔊 Audio</span>
    <span class="chip">🎬 Video</span>
  </div>
  <p style="margin-top:6px; color:var(--ink-soft); font-size:15px;">We'll look closely at how each of these is represented as data in the "Data Representation" station.</p>
`;

CONTENT.effective = `
  ${explain(`
    <p>Not all communication is good communication! For a network to be truly effective, it must have <strong>4 key qualities</strong>.</p>
  `)}

  <div class="diagram">
    <div class="node clickable" data-pop="The data must reach the correct destination — and only that destination.">
      <span class="emoji">🎯</span>Delivery
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="The data delivered must be exactly correct — without errors or missing parts.">
      <span class="emoji">✅</span>Accuracy
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="Data must arrive within a reasonable, expected time — late data can be useless (imagine a delayed video call!). This matters most for real-time data like audio and video.">
      <span class="emoji">⏱️</span>Timeliness
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="This means how much the arrival time of packets varies. Low jitter = smooth video/audio. High jitter = choppy video calls.">
      <span class="emoji">📶</span>Jitter
      <div class="node-pop"></div>
    </div>
  </div>

  ${analogy(`<p>Think of food delivery. It should go to the <strong>right house</strong> (delivery), the order should be <strong>correct</strong> (accuracy), it should arrive <strong>while still hot</strong> (timeliness), and if you order twice, both should arrive around the same gap each time, not wildly different (jitter)!</p>`)}

  ${remember(["Delivery — reaches the right destination","Accuracy — data is correct, no errors","Timeliness — arrives on time (critical for real-time audio/video)","Jitter — arrival time doesn't vary too much"])}
`;

CONTENT.devices = `
  ${explain(`
    <p>A network is made of the interconnection of devices that can communicate. These devices fall into two types.</p>
  `)}

  <h3>1. Hosts — devices people use directly</h3>
  <div class="chiprow">
    <span class="chip">🖥️ Desktop computer</span>
    <span class="chip">💻 Laptop</span>
    <span class="chip">🗄️ Large / mainframe computer</span>
    <span class="chip">🧑‍💻 Workstation</span>
    <span class="chip">📱 Mobile phone</span>
    <span class="chip">🔐 Security system</span>
  </div>

  <h3 style="margin-top:20px;">2. Connecting devices — devices that link networks together</h3>
  <div class="chiprow">
    <span class="chip">🌐 Router — connects a network to other networks</span>
    <span class="chip">🔌 Switch — connects devices together</span>
    <span class="chip">📡 Modem — changes the form of data (modulator‑demodulator)</span>
  </div>

  ${analogy(`<p>Hosts are like the people at a party — they're the ones actually talking. Connecting devices are like the doors and hallways that let people move between rooms so conversations can happen.</p>`)}

  ${fig("unit1","nic-cable-connector-photos.png","Real hardware behind a wired connection: a Network Interface Card (NIC) inside the computer, a CAT5 cable, and the RJ45 connector on its end.")}

  ${remember(["Host = a device a person uses directly","Connecting device = links devices/networks together (router, switch, modem)","Devices connect using wired or wireless transmission media"])}

  ${more("🔎 Want to know more? A real wired LAN example","<p>A common wired local network (Ethernet LAN) uses a <strong>Network Interface Card (NIC)</strong> inside the computer, a <strong>CAT 5 cable</strong>, and an <strong>RJ45 connector</strong> at the end of the cable that plugs into the device.</p>"+fig("unit1","sample-enterprise-network-diagram.jpg","A typical small office network — router, firewall, switch, server, workstations and a Wi-Fi access point all working together.")) }
`;

CONTENT.represent = `
  ${explain(`<p>Before any information can travel over a network, it must first be turned into a pattern of <strong>bits</strong> — 0s and 1s. Different kinds of information are represented differently. Tap a tab below to explore each type.</p>`)}

  <div class="tabbar" id="reprTabs">
    <button class="tabbtn active" data-tab="text">📝 Text</button>
    <button class="tabbtn" data-tab="numbers">🔢 Numbers</button>
    <button class="tabbtn" data-tab="images">🖼️ Images</button>
    <button class="tabbtn" data-tab="audio">🔊 Audio</button>
    <button class="tabbtn" data-tab="video">🎬 Video</button>
  </div>

  <div class="tabpanel active" data-tab="text">
    <div class="card">
      <p>Text is stored as a pattern of bits. A group of bit-patterns used to represent text symbols is called a <strong>code</strong>, and the process of assigning these patterns is called <strong>coding</strong>.</p>
      <ul>
        <li><strong>ASCII</strong> — uses 7 or 8 bits, and covers roughly 128 characters: basic English letters, numbers, and symbols. It's actually the first 128 characters of Unicode.</li>
        <li><strong>Unicode</strong> — a much bigger system that can use up to 32 bits, representing over 1,50,000 characters covering almost every language in the world. "Basic Latin" is the part of Unicode that overlaps with ASCII.</li>
      </ul>
      ${fig("unit1","ascii-unicode-table.jpg","ASCII versus Unicode — Unicode is the bigger umbrella that ASCII sits inside as a small subset.")}
      ${remember(["ASCII has 128 characters (7/8-bit)","Unicode can represent 150,000+ characters (covers world languages)"])}
    </div>
  </div>

  <div class="tabpanel" data-tab="numbers">
    <div class="card">
      <p>Numbers are also represented using bit patterns — but unlike text, a number is <strong>directly converted into binary</strong> (no lookup coding table needed). This makes mathematical operations (like addition) simpler for the computer to perform.</p>
      ${fig("unit1","binary-decimal-conversion-table.jpg","A decimal number converted straight into its binary bit pattern.")}
    </div>
  </div>

  <div class="tabpanel" data-tab="images">
    <div class="card">
      <p>An image is made up of tiny dots called <strong>pixels</strong> (picture elements). The sharpness of an image depends on how many pixels it has — this is called <strong>resolution</strong>.</p>
      <ul>
        <li><strong>1-bit pattern:</strong> only black (0) and white (1) — like a simple line drawing.</li>
        <li><strong>2-bit pattern (grayscale):</strong> 4 shades — 00, 01, 10, 11.</li>
        <li><strong>Color images</strong> use combinations such as <strong>RGB</strong> (Red, Green, Blue — an additive, light-based model) or <strong>YCM</strong> (Yellow, Cyan, Magenta — a subtractive, pigment-based model, used in printing), where each color's intensity gets its own bit pattern.</li>
      </ul>
      ${figGrid("unit1",[["grayscale-pixel-encoding.jpg","A 2-bit grayscale pixel: 00, 01, 10, 11 give four shades of gray."],["rgb-ycm-color-model.jpg","RGB (light, additive) vs YCM (pigment, subtractive) color models."]])}
    </div>
  </div>

  <div class="tabpanel" data-tab="audio">
    <div class="card">
      <p>Audio means recorded or broadcast sound/music. Unlike text or images, natural sound is <strong>continuous</strong>, not made of separate, distinct steps — so it must be converted into digital form to travel over a network.</p>
      <p>An <strong>ADC</strong> (Analog-to-Digital Converter) turns sound into bits for storage/transmission; a <strong>DAC</strong> (Digital-to-Analog Converter) turns those bits back into sound for playback.</p>
      ${fig("unit1","adc-dac-audio-diagram.jpg","MP3 player example — recording goes sound → ADC → bits → DSP → memory; playback reverses it: memory → DSP → DAC → speaker.")}
    </div>
  </div>

  <div class="tabpanel" data-tab="video">
    <div class="card">
      <p>Video means a recorded or broadcast picture/movie. It can be:</p>
      <ul>
        <li>A <strong>continuous</strong> entity, like the feed from a TV camera, or</li>
        <li>A <strong>combination of separate images</strong> (frames) shown quickly one after another to create the illusion of motion.</li>
      </ul>
      ${fig("unit1","video-frame-sequence.jpg","Video as a rapid sequence of discrete frames — shown fast enough that our eyes perceive smooth motion.")}
    </div>
  </div>

  ${mistake(`<p>Don't assume more bits always means "better" in every situation — it means more <strong>detail can be stored</strong> (e.g. more shades of gray, more characters supported), which also needs more storage and transmission capacity.</p>`)}
`;

CONTENT.flow = `
  ${explain(`<p>Once two devices are connected, data can flow between them in different directions. There are three types of data flow.</p>`)}

  <div class="flow-grid">
    <div class="flow-card">
      <h4>Simplex</h4>
      <div class="flow-arrow">A ➡️ B</div>
      <p style="font-size:14.5px;">Data travels in <strong>one direction only</strong>. Example: a keyboard sends data to the computer, but the computer doesn't send data back to the keyboard.</p>
    </div>
    <div class="flow-card">
      <h4>Half-Duplex</h4>
      <div class="flow-arrow">A ⇄ B<br><span style="font-size:13px;">(one at a time)</span></div>
      <p style="font-size:14.5px;">Both directions are possible, but <strong>only one at a time</strong>. Example: a walkie-talkie — you must wait for the other person to finish before speaking.</p>
    </div>
    <div class="flow-card">
      <h4>Full-Duplex</h4>
      <div class="flow-arrow">A ⇄ B<br><span style="font-size:13px;">(both together)</span></div>
      <p style="font-size:14.5px;">Both directions happen <strong>at the same time</strong>. Example: a telephone call — both people can talk and listen at once.</p>
    </div>
  </div>

  ${fig("unit1","data-flow-modes-diagram.png","The three data-flow modes side by side — one arrow, two arrows taking turns, and two arrows running together.")}

  ${analogy(`<p>Think of a one-way street (simplex), a single-lane bridge where cars take turns (half-duplex), and a two-lane road where traffic flows both ways at once (full-duplex).</p>`)}

  ${remember(["Simplex → one direction only","Half-Duplex → both directions, but one at a time","Full-Duplex → both directions, at the same time"])}
`;

CONTENT.criteria = `
  ${explain(`<p>A good network — just like a good product — must meet certain standards. There are 3 main criteria used to judge a network.</p>`)}

  ${analogy(`<p>Imagine you're buying a car. You'd check its <strong>performance</strong> (speed, mileage), <strong>reliability</strong> (does it run for years without major repairs?), and <strong>security</strong> (passenger safety, airbags, secure seats). Networks are judged the very same way!</p>`)}

  ${fig("unit1","car-buying-analogy-diagram.png","The car-buying analogy: performance ~ speed/mileage, reliability ~ frequency of repairs, security ~ safety features.")}

  <div class="diagram">
    <div class="node clickable" data-pop="How well and how fast the network works. Measured using response time (time between a request and its answer) and transit time (time for a message to travel from one device to another).">
      <span class="emoji">🚀</span>Performance
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="How accurately and consistently the network delivers data. Measured by how often it fails, how fast it recovers, and how well it survives a disaster.">
      <span class="emoji">🛡️</span>Reliability
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="Protecting data from unauthorized access and damage, and having a recovery plan if something goes wrong.">
      <span class="emoji">🔒</span>Security
      <div class="node-pop"></div>
    </div>
  </div>

  <h3>Performance depends on:</h3>
  <div class="chiprow">
    <span class="chip">👥 Number of users</span>
    <span class="chip">🔌 Type of transmission medium</span>
    <span class="chip">⚙️ Hardware capability</span>
    <span class="chip">💾 Software efficiency</span>
  </div>
  <p style="margin-top:14px;">Performance is often measured using two networking metrics:</p>
  <ul>
    <li><strong>Throughput</strong> — how much data can actually pass through (capacity)</li>
    <li><strong>Delay</strong> — how long data takes to arrive (latency)</li>
  </ul>
  <p>Ideally we want <strong>high throughput</strong> and <strong>low delay</strong> — but these two often work against each other!</p>

  ${figGrid("unit1",[["network-performance-gauge-chart.jpg","Performance shown as a gauge — how close actual capacity gets to what's needed."],["throughput-expectation-diagram.jpg","Throughput vs customer expectation, shown speedometer-style."]])}

  ${remember(["Performance = speed & efficiency (throughput + delay)","Reliability = consistency & recovery from failure","Security = protection from unauthorized access & damage"])}
`;

CONTENT.topology = `
  ${explain(`<p>Before we get to topology, there's one more basic idea: how many devices does a single link connect? A <strong>point-to-point</strong> connection is a dedicated link between exactly two devices. A <strong>multipoint (multidrop)</strong> connection is a single link shared by more than two devices.</p>`)}

  ${fig("unit1","point-to-point-multipoint-diagram.jpg","Point-to-point — a private link between exactly two devices — versus multipoint, where several devices share one line.")}

  <p><strong>Physical topology</strong> is the way a network is laid out physically — how the devices (called <strong>nodes</strong>) and the links between them are arranged. There are 4 basic topologies. Tap each card to see its advantages and disadvantages — and a real diagram from the textbook.</p>

  <div class="topo-grid" id="topoGrid">

    <div class="topo-card" data-topo="mesh">
      <svg viewBox="0 0 200 120"><g stroke="var(--rail)" stroke-width="2" fill="none">
        <line x1="30" y1="20" x2="170" y2="20"/><line x1="30" y1="20" x2="30" y2="100"/>
        <line x1="30" y1="20" x2="170" y2="100"/><line x1="170" y1="20" x2="30" y2="100"/>
        <line x1="170" y1="20" x2="170" y2="100"/><line x1="30" y1="100" x2="170" y2="100"/>
      </g>
        <circle cx="30" cy="20" r="9" fill="var(--rail)"/><circle cx="170" cy="20" r="9" fill="var(--rail)"/>
        <circle cx="30" cy="100" r="9" fill="var(--rail)"/><circle cx="170" cy="100" r="9" fill="var(--rail)"/>
      </svg>
      <h4>Mesh</h4>
      <p style="font-size:14px; margin:0;">Every device connects directly to every other device — needs n(n-1)/2 links for n devices (duplex links).</p>
      <div class="topo-details">
        <p class="pro">✔ Advantages</p>
        <ul style="font-size:14px;"><li>No traffic congestion problems</li><li>If one link fails, the rest of the network keeps working</li><li>Private line = more secure, only the intended receiver sees the message</li><li>Easy to identify and isolate faults</li></ul>
        <p class="con">✘ Disadvantages</p>
        <ul style="font-size:14px;"><li>Needs a lot of cabling and I/O ports — expensive</li><li>Hard to install and reconnect</li><li>Mostly used as a backbone for connecting main computers, not for everyday use</li></ul>
        ${fig("unit1","mesh-topology-diagram.jpg","Every node wired directly to every other node.")}
      </div>
    </div>

    <div class="topo-card" data-topo="star">
      <svg viewBox="0 0 200 120"><g stroke="var(--rail)" stroke-width="2">
        <line x1="100" y1="60" x2="30" y2="20"/><line x1="100" y1="60" x2="170" y2="20"/>
        <line x1="100" y1="60" x2="30" y2="100"/><line x1="100" y1="60" x2="170" y2="100"/>
      </g>
        <circle cx="100" cy="60" r="11" fill="var(--spark)"/>
        <circle cx="30" cy="20" r="8" fill="var(--rail)"/><circle cx="170" cy="20" r="8" fill="var(--rail)"/>
        <circle cx="30" cy="100" r="8" fill="var(--rail)"/><circle cx="170" cy="100" r="8" fill="var(--rail)"/>
      </svg>
      <h4>Star</h4>
      <p style="font-size:14px; margin:0;">Every device connects to one central hub — not to each other directly.</p>
      <div class="topo-details">
        <p class="pro">✔ Advantages</p>
        <ul style="font-size:14px;"><li>Cheaper than mesh, needs less cabling</li><li>Easy to install and reconfigure</li><li>If one link fails, only that device is affected — rest keep working</li><li>Hub can monitor and bypass faulty links</li></ul>
        <p class="con">✘ Disadvantages</p>
        <ul style="font-size:14px;"><li>Whole network depends on the central hub — if it fails, everything fails</li><li>Needs more cabling than ring or bus</li></ul>
        ${fig("unit1","star-topology-diagram.jpg","All nodes wired to one central hub/switch.")}
      </div>
    </div>

    <div class="topo-card" data-topo="bus">
      <svg viewBox="0 0 200 120"><line x1="15" y1="60" x2="185" y2="60" stroke="var(--rail)" stroke-width="4"/>
        <g stroke="var(--rail)" stroke-width="2">
          <line x1="45" y1="60" x2="45" y2="25"/><line x1="100" y1="60" x2="100" y2="25"/><line x1="155" y1="60" x2="155" y2="25"/>
        </g>
        <circle cx="45" cy="20" r="8" fill="var(--rail)"/><circle cx="100" cy="20" r="8" fill="var(--rail)"/><circle cx="155" cy="20" r="8" fill="var(--rail)"/>
      </svg>
      <h4>Bus</h4>
      <p style="font-size:14px; margin:0;">One long cable (the backbone) that all devices tap into via drop lines.</p>
      <div class="topo-details">
        <p class="pro">✔ Advantages</p>
        <ul style="font-size:14px;"><li>Very easy to install</li><li>Uses less cabling than mesh or star</li></ul>
        <p class="con">✘ Disadvantages</p>
        <ul style="font-size:14px;"><li>Difficult to reconnect and isolate faults</li><li>Hard to add new devices</li><li>A break in the main cable stops all transmission</li><li>Too many taps degrade the signal</li></ul>
        ${fig("unit1","bus-topology-diagram.jpg","A shared backbone cable with devices tapping in through drop lines.")}
      </div>
    </div>

    <div class="topo-card" data-topo="ring">
      <svg viewBox="0 0 200 120"><circle cx="100" cy="60" r="45" fill="none" stroke="var(--rail)" stroke-width="3"/>
        <circle cx="100" cy="15" r="8" fill="var(--rail)"/><circle cx="145" cy="60" r="8" fill="var(--rail)"/>
        <circle cx="100" cy="105" r="8" fill="var(--rail)"/><circle cx="55" cy="60" r="8" fill="var(--rail)"/>
      </svg>
      <h4>Ring</h4>
      <p style="font-size:14px; margin:0;">Each device connects to exactly two neighbours, forming a circle. Each device also acts as a repeater, passing the signal on.</p>
      <div class="topo-details">
        <p class="pro">✔ Advantages</p>
        <ul style="font-size:14px;"><li>Relatively easy to install and reconfigure</li><li>Simple fault isolation — a silent device can raise an alarm</li></ul>
        <p class="con">✘ Disadvantages</p>
        <ul style="font-size:14px;"><li>Traffic moves in one direction only</li><li>One broken connection can disable the whole ring (unless a dual ring is used)</li></ul>
        ${fig("unit1","ring-topology-diagram.jpg","Devices arranged in a closed loop, each repeating the signal to the next.")}
      </div>
    </div>
  </div>

  ${remember(["Point-to-point = link for exactly 2 devices · Multipoint = link shared by many","Mesh = every device to every device (most cabling, most robust)","Star = all devices to one central hub","Bus = all devices share one long cable","Ring = devices connected in a circle, each a repeater"])}
`;

CONTENT.lanwan = `
  ${explain(`<p>Networks come in different sizes depending on how far apart the connected devices are.</p>`)}

  <div class="flow-grid">
    <div class="flow-card">
      <h4>🏢 LAN <span style="font-weight:400;font-size:13px;">(Local Area Network)</span></h4>
      <p style="font-size:14.5px;">Usually privately owned. Connects hosts within a single office, building, or campus. Every host has its own address, and packets carry both sender's and receiver's addresses. Older LANs used a bus topology; today's LANs almost always use a central switch.</p>
    </div>
    <div class="flow-card">
      <h4>🌍 WAN <span style="font-weight:400;font-size:13px;">(Wide Area Network)</span></h4>
      <p style="font-size:14.5px;">Covers a much wider area — a town, state, country, or the whole world. While a LAN connects hosts, a WAN connects connecting devices like switches, routers, and modems. There are two kinds: <strong>point-to-point WAN</strong> (connects just two devices) and <strong>switched WAN</strong> (a backbone with more than two ends, linking several LANs/WANs).</p>
    </div>
    <div class="flow-card">
      <h4>🔗 Internetwork</h4>
      <p style="font-size:14.5px;">When two or more networks are connected together, the result is called an internetwork, or simply an "internet" (lowercase i) — not to be confused with capital-I "the Internet".</p>
    </div>
  </div>

  ${fig("unit1","lan-past-vs-today-diagram.jpg","Older bus-wired LANs versus a modern LAN built around a central switch.")}

  ${figGrid("unit1",[["wan-diagrams.jpg","Point-to-point WAN (two devices) vs switched WAN (a backbone linking several networks)."],["internetwork-diagram.jpg","LAN — WAN — LAN joined together to form one internetwork."]])}

  ${analogy(`<p>A LAN is like the road network inside a single college campus. A WAN is like the national highway system connecting entire cities and states. When many such road networks link up, you get one giant connected system — an internetwork.</p>`)}

  ${remember(["LAN = small area, connects hosts directly, usually via a switch","WAN = large area, connects connecting devices (point-to-point or switched)","Internetwork = two or more networks joined together"])}
`;

CONTENT.switching = `
  ${explain(`<p>An internet is really a <strong>switched network</strong> — a switch is a device with several input/output ports that connects at least two links, and forwards data from one link to another when needed. There are two major switching approaches.</p>`)}

  ${fig("unit1","switching-diagram.jpg","A switched network — modems, routers and switches interlinked so any device can reach any other.")}

  <div class="flow-grid">
    <div class="flow-card">
      <h4>☎️ Circuit Switching</h4>
      <p style="font-size:14.5px;">A dedicated end-to-end connection (a "circuit") is set up between the two end devices <strong>before</strong> data is sent, and stays reserved for the whole session — the switch can only turn this one path <strong>on or off</strong>.</p>
    </div>
    <div class="flow-card">
      <h4>📦 Packet Switching</h4>
      <p style="font-size:14.5px;">Data is broken into small blocks called <strong>packets</strong>, which travel independently — not as one continuous stream. Each router has a queue and forwards packets on a <strong>store-and-forward</strong> basis, so bandwidth is used more efficiently.</p>
    </div>
  </div>

  ${figGrid("unit1",[["circuit-switched-network-diagram.jpg","Circuit switching: users A–D, each connected through a single reserved path once a circuit is set up."],["packet-switched-network-diagram.jpg","Packet switching: users A–D, whose data travels as independent packets that can take different paths."]])}

  ${fig("unit1","packet-routing-diagram.png","Colour-coded packets hopping across nodes A through H — each packet finds its own way toward the destination.")}

  ${analogy(`<p>Circuit switching is like booking a private cab for your entire trip — the same car and route is reserved just for you. Packet switching is like sending each part of your luggage in separate parcels, which might even take slightly different routes, but all arrive at the same destination address.</p>`)}

  ${remember(["Circuit switching → one dedicated path, reserved for the whole session","Packet switching → data split into packets, sent independently, reassembled at destination"])}

  ${more("🔎 Want to know more? Unit 2 goes deeper","<p>In Unit 2 (Physical Layer) we revisit switching in much more depth — the exact phases circuit switching goes through, and the two flavours of packet switching (datagram vs virtual-circuit) — plus what's actually inside a switch.</p>")}
`;

CONTENT.internet = `
  ${explain(`<p>The most famous "internet" is written with a capital <strong>I</strong> — <strong>the Internet</strong>. It is made up of thousands of interconnected networks working together across the world, built from <strong>backbone networks</strong> (huge networks owned by major ISPs), <strong>provider networks</strong> that connect to them, and <strong>peering points</strong> where different networks interconnect.</p>`)}

  ${fig("unit1","internet-backbone-diagram.jpg","The Internet's structure — backbone ISPs, smaller provider networks, and the peering points where they interconnect.")}

  <h3>How does data actually travel across it?</h3>
  <p>Whenever you load a web page, your data is broken into packets. Each packet can travel through a different path of routers and ISPs to reach the destination, where they're reassembled in the correct order — this is packet switching in action, at a global scale.</p>

  ${fig("unit1","how-internet-works-infographic.jpg","Data breaks into packets, packets hop across routers and ISPs — sometimes by different paths — and get reassembled at the destination.")}

  <h3>How do people connect to the Internet?</h3>
  <div class="chiprow">
    <span class="chip">☎️ Telephone lines (Dial-up / DSL)</span>
    <span class="chip">📺 Cable networks</span>
    <span class="chip">📶 Wireless networks</span>
    <span class="chip">🔌 Direct / dedicated connection</span>
  </div>

  ${remember(["The Internet = thousands of networks connected worldwide, via backbones, providers, and peering points","Data always travels as packets, which can take different paths to the same destination"])}

  ${more("🔎 Want the full story? Two more stations ahead","<p>The next two stations, <strong>History of the Internet</strong> and <strong>Cables, Standards & Governance</strong>, tell you exactly how we got here — from a crashed 1969 login attempt to the Internet you use today — and who keeps it all running smoothly.</p>")}
`;

CONTENT.history = `
  ${explain(`<p>The Internet wasn't built in a day — it grew step by step from a single experimental link in 1969 into the global network we use today. Here's the story, in order.</p>`)}

  ${fig("unit1","circuit-switching-history-routing-diagram.jpg","Before packet switching existed, telephone-style circuit switching was the only model anyone had for long-distance communication.")}

  <h3>1969 — The first (failed!) login</h3>
  <p>The U.S. built <strong>ARPANET</strong>, using devices called <strong>IMPs</strong> (Interface Message Processors) at each site, running a protocol called <strong>NCP</strong> (Network Control Protocol). The very first network had just <strong>4 nodes</strong>: Stanford, UCLA, UC Santa Barbara (UCSB), and the University of Utah.</p>
  ${figGrid("unit1",[["arpanet-imp-graphic.jpg","ARPANET's IMPs — the very first routers."],["ncp-four-node-network-diagram.jpg","The original 4-node ARPANET, running NCP."]])}
  ${mistake(`<p>The first-ever remote login attempt, from Stanford to UCLA, tried to type "LOGIN" — but the system crashed right after transmitting just "L" and "O"! It had to be tried again a little later, successfully.</p>`)}
  ${fig("unit1","stanford-ucla-first-login-map.jpg","The famous first (crashed) login attempt between Stanford and UCLA.")}

  <h3>1971 — Growth, and the invention of email</h3>
  <p>The network expanded to more U.S. locations. <strong>Ray Tomlinson</strong> invented network email and introduced the <strong>@</strong> symbol to separate the username from the host machine — a symbol you still use in every email address today.</p>
  ${figGrid("unit1",[["1971-network-expansion-map.jpg","ARPANET's expanded map of locations by 1971."],["tomlinson-email-at-symbol-graphic.jpg","Ray Tomlinson's invention of the @ symbol for email addresses."]])}

  <h3>1972–1973 — TCP is born</h3>
  <p><strong>Vint Cerf</strong> and <strong>Bob Kahn</strong> launched the "Internetting Project" in 1972, introducing the idea of a <strong>gateway</strong> to connect dissimilar networks. By 1973 they had developed <strong>TCP</strong> (Transmission Control Protocol).</p>
  ${figGrid("unit1",[["cerf-kahn-internetting-project.jpg","Vint Cerf and Bob Kahn's 1972 Internetting Project."],["tcp-development-graphic.jpg","TCP takes shape in 1973."]])}

  <h3>1977–1983 — TCP/IP takes over</h3>
  <p>In October 1977, engineers demonstrated three very different networks — ARPANET, a packet radio network, and a packet satellite network — talking to each other successfully. TCP was later split into two protocols, <strong>TCP</strong> and <strong>IP</strong>, together known as <strong>TCP/IP</strong>. In 1981, <strong>CSNET</strong> (Computer Science Network) extended access to universities not on ARPANET, and the word "Internet" began to take its modern meaning. On "flag day" in 1983, TCP/IP officially became the standard protocol for ARPANET, which then split into civilian ARPANET and military <strong>MILNET</strong>.</p>
  ${fig("unit1","1981-vintage-tv-ad-screenshot.jpg","A vintage 1981 TV advertisement, from around the time CSNET was launched.")}

  <h3>1986–1995 — From research network to the Web</h3>
  <p>In 1986, <strong>NSFNET</strong> connected five national supercomputer centers, massively expanding academic access. By 1990, ARPANET was formally shut down, fully replaced by NSFNET. In 1991, IBM, Merit and MCI built <strong>ANSNET</strong>, a faster new US backbone — and on <strong>6 August 1991</strong>, Tim Berners-Lee published the world's very first website, <em>info.cern.ch</em>, at CERN. By 1995, NSFNET went back to being a pure research network as commercial backbones took over, and <strong>Netscape Navigator</strong> brought the Web to millions of everyday users for the first time.</p>
  ${figGrid("unit1",[["nsfnet-backbone-diagram.jpg","The 1986 NSFNET backbone linking five supercomputer centers."],["ansnet-us-map.jpg","ANSNET — a faster new US backbone built in 1991."],["netscape-navigator-screenshot.jpg","Netscape Navigator (1995) — the browser that brought the Web to everyday users."]])}

  <h3>Two ways networks can be organized</h3>
  <div class="flow-grid">
    <div class="flow-card"><h4>🖥️ Server-based</h4><p style="font-size:14.5px;">A central, dedicated server provides resources to many client devices.</p></div>
    <div class="flow-card"><h4>🤝 Peer-to-Peer (P2P)</h4><p style="font-size:14.5px;">Every node acts as both client and server — no central authority needed.</p></div>
  </div>
  ${fig("unit1","server-based-vs-p2p-diagram.jpg","Server-based networks vs peer-to-peer networks — plus Tim Berners-Lee, inventor of the World Wide Web.")}

  ${remember(["1969: ARPANET, 4 nodes, NCP","1973: TCP invented (Cerf & Kahn)","1983: TCP/IP becomes the standard; ARPANET splits into ARPANET + MILNET","1990: ARPANET retired, replaced by NSFNET","1991: first website published by Tim Berners-Lee","1995: Netscape Navigator drives mass Web adoption"])}
`;

CONTENT.infra = `
  ${explain(`<p>Two very different questions: how is the world physically wired together, and who decides the rules everyone follows? This station answers both.</p>`)}

  <h3>🌊 How is the whole world literally connected?</h3>
  <p>Surprisingly, it's mostly <strong>undersea (submarine) cables</strong> lying along ocean floors between continents that carry the vast majority of the world's Internet traffic — not satellites! These cables use a layered design: protective outer layers, insulation, a copper conductor for power, and an inner <strong>fiber-optic core</strong> that carries the actual light-based data signal.</p>
  ${figGrid("unit1",[["submarine-cable-cross-section.jpg","A submarine cable's layered construction, protecting the fiber-optic core at its center."],["cable-stations-india-map.jpg","Cable landing stations in India — where undersea cables come ashore and join India's terrestrial network."]])}

  <h3>📜 Who decides Internet standards?</h3>
  <p>An <strong>Internet Standard</strong> is a specification that's been thoroughly tested and is mature and reliable enough for general use. Before that, it's just an <strong>Internet Draft</strong> — a working document valid for a maximum of six months.</p>
  <p>A protocol climbs a ladder of maturity: <strong>Internet Draft → Proposed Standard</strong> (min. 6 months, needs 2 independent working implementations) <strong>→ Draft Standard</strong> (min. 4 months, 2 successful trials) <strong>→ Internet Standard</strong>. Some documents instead become Experimental, Informational, or Historic.</p>
  <p>Requirement levels for protocols range from <strong>Required</strong> (e.g. IP, ICMP — must be implemented) and <strong>Recommended</strong> (e.g. FTP, Telnet), down to <strong>Elective</strong>, <strong>Limited Use</strong>, and <strong>Not Recommended</strong> (historic/obsolete).</p>
  ${figGrid("unit1",[["rfc-lifecycle-diagram.jpg","The RFC (Request for Comments) lifecycle: idea → Internet Draft → IESG review → IETF working group → Proposed Standard → published RFC."],["maturity-levels-flowchart.jpg","The maturity ladder a standard climbs before becoming a full Internet Standard."]])}

  <h3>🏛️ Who runs all of this?</h3>
  <p><strong>ISOC</strong> (Internet Society, formed 1992) oversees Internet-wide standards and societal issues. It oversees the <strong>IAB</strong> (Internet Architecture Board), its technical advisor — which in turn oversees two bodies: the <strong>IRTF</strong> (Internet Research Task Force, long-term research) and the <strong>IETF</strong> (Internet Engineering Task Force, which solves short-term engineering problems through Working Groups organized into about 9 subject Areas).</p>
  ${fig("unit1","internet-administration-org-chart.jpg","The chain of command: ISOC → IAB → IRTF and IETF.")}

  ${remember(["Submarine fiber-optic cables — not satellites — carry most world Internet traffic","Draft → Proposed Standard → Draft Standard → Internet Standard is the maturity ladder","ISOC oversees IAB, which oversees IRTF (research) and IETF (engineering)"])}
`;

CONTENT.layers = `
  ${explain(`<p>Real communication is complex, so instead of solving it as one giant problem, engineers split the task into <strong>layers</strong> — each layer handles one job and follows its own protocol. This is called <strong>protocol layering</strong>.</p>`)}

  ${analogy(`<p>Maria and Ann communicate through the postal system using 3 layers: the top layer just talks in plain language, a middle layer encrypts/decrypts it into ciphertext, and a bottom layer physically sends/receives the mail. Each layer only worries about its own job — and the same layer on both sides must be able to understand each other.</p>`)}
  ${fig("unit1","maria-ann-layering-analogy.jpg","Maria and Ann's 3-layer postal analogy for protocol layering.")}

  <h3>Two guiding principles</h3>
  <ul>
    <li><strong>Principle 1:</strong> if a layer needs to be bidirectional, it must perform two mirror-image tasks, one for each direction.</li>
    <li><strong>Principle 2:</strong> the objects handled by a given layer at the sender and receiver must be identical.</li>
  </ul>
  <p>Even though data physically zig-zags through cables and intermediate devices, we imagine a <strong>logical connection</strong> directly between corresponding layers on each end — this makes reasoning about the system far simpler.</p>
  ${fig("unit1","logical-connection-diagram.jpg","A logical (imagined) direct connection between the same layer on the sender and receiver, even though the real path zig-zags through the network.")}

  <h3>The 5 layers of TCP/IP (bottom to top)</h3>
  <p>TCP/IP is <strong>hierarchical</strong> — every upper layer is supported by the layer(s) below it.</p>
  <div class="diagram" id="layerDiagram">
    <div class="node clickable" data-pop="Carries the raw bits of a frame across the physical link, as electrical or optical signals.">
      <span class="emoji">🔌</span>1. Physical
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="Takes data and wraps it into a 'frame' to move it safely across one link — hop by hop, node to node.">
      <span class="emoji">🔗</span>2. Data-Link
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="Handles host-to-host delivery and routing using IP (Internet Protocol). Data unit here is called a datagram.">
      <span class="emoji">🌐</span>3. Network
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="Delivers the message from the correct app on the sender to the correct app on the receiver, using TCP or UDP.">
      <span class="emoji">🚚</span>4. Transport
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="Where actual apps like browsers and email clients talk to each other, using HTTP, SMTP, FTP, etc.">
      <span class="emoji">💻</span>5. Application
      <div class="node-pop"></div>
    </div>
  </div>
  ${fig("unit1","layered-architecture-diagram.jpg","The 5-layer TCP/IP architecture as data moves between linked systems.")}

  <p>Every layer's data unit gets a different name, even though it's the same payload wrapped differently: <strong>message</strong> (Application) → <strong>segment/user datagram</strong> (Transport) → <strong>datagram</strong> (Network) → <strong>frame</strong> (Data-link) → <strong>bits</strong> (Physical). Switches only operate up through the Data-link and Physical layers; routers operate up through the Network layer.</p>
  ${figGrid("unit1",[["physical-layer-diagram.jpg","The physical layer's job: carrying raw bits as electrical/optical signals across one link."],["data-link-frame-encapsulation-diagram.jpg","The data-link layer wraps a datagram into a frame by adding a header (and sometimes a trailer)."]])}
  ${fig("unit1","data-link-hop-to-hop-diagram.jpg","The data-link layer's real job: hop-to-hop delivery across each individual link, via intermediate switches/routers.")}

  <h3 style="margin-top:24px;">TCP vs UDP</h3>
  <p><strong>TCP</strong> is connection-oriented — it first sets up a logical connection before sending data, and provides flow, error, and congestion control. <strong>UDP</strong> is connectionless — it just sends data without setting up a connection first, which makes it faster but less reliable — good for short messages where speed matters more than guaranteed delivery.</p>

  ${more("🔎 Want to know more? Encapsulation","<p>As data travels down the layers on the sender's side, each layer adds its own header — this is called <strong>encapsulation</strong>. On the receiver's side, each layer removes its matching header as data moves up — this is <strong>decapsulation</strong>. We'll see this in full detail in the next station.</p>")}

  ${remember(["TCP/IP has 5 layers: Physical → Data-Link → Network → Transport → Application","Each layer only talks to the same layer on the other device (logically)","Data-link layer = hop-to-hop; Network layer = host-to-host; Transport layer = process-to-process","TCP = reliable, connection-oriented · UDP = fast, connectionless"])}
`;

CONTENT.netstack = `
  ${explain(`<p>Let's zoom into the top 3 layers — Network, Transport, and Application — see how a message actually gets addressed and multiplexed on its way out, and finally compare TCP/IP to its cousin, the OSI model.</p>`)}

  <div class="tabbar" id="stackTabs">
    <button class="tabbtn active" data-tab="netl">🌐 Network Layer</button>
    <button class="tabbtn" data-tab="transl">🚚 Transport Layer</button>
    <button class="tabbtn" data-tab="appl">💻 Application Layer</button>
    <button class="tabbtn" data-tab="addr">🏷️ Addressing & OSI</button>
  </div>

  <div class="tabpanel active" data-tab="netl">
    <div class="card">
      <p>The <strong>Network layer</strong> is responsible for <strong>host-to-host (source-to-destination)</strong> delivery and routing. <strong>IP</strong> (Internet Protocol) defines the datagram format and the logical (IP) addressing scheme. IP itself is <strong>connectionless</strong> and provides <em>no</em> flow control, error control, or congestion control — those are left to the transport layer.</p>
      ${fig("unit1","network-layer-packet-encapsulation-diagram.jpg","The network layer wraps a segment into a packet, adding source/destination IP addresses.")}
      <p>Think of flow/congestion control with a funnel-and-bucket analogy: a fast network feeding a slow receiver causes overflow (data loss); a slow network feeding a fast receiver risks congestion inside the network itself. The sending rate must be matched to what the path can actually carry.</p>
      ${fig("unit1","congestion-control-funnel-diagram.jpg","The funnel/bucket analogy for flow and congestion control — sending rate must match what the receiver and network can handle.")}
      <p><strong>Routing protocols</strong> (unicast and multicast) build and maintain the forwarding tables routers use — the routing protocol itself doesn't move packets, it just builds the map ordinary routing then follows. Helper protocols at this layer include <strong>ICMP</strong> (error reporting), <strong>IGMP</strong> (multicast group management), <strong>DHCP</strong> (dynamic address assignment), and <strong>ARP</strong> (resolves an IP address to a link-layer/MAC address).</p>
      ${fig("unit1","routing-table-diagram.jpg","Router A and Router B each keeping their own forwarding table to decide where a packet goes next.")}
    </div>
  </div>

  <div class="tabpanel" data-tab="transl">
    <div class="card">
      <p>The <strong>Transport layer</strong> provides <strong>process-to-process</strong> delivery — not just host-to-host. It wraps data into a <strong>segment</strong> (TCP) or <strong>user datagram</strong> (UDP).</p>
      ${fig("unit1","transport-layer-segment-diagram.jpg","The transport layer packages application data into a segment, ready to hand to the network layer.")}
      <p><strong>TCP</strong> behaves like a logical pipe — a continuous stream of bytes between two processes — using send/receive buffers, and guarantees flow control, error control, and congestion control. <strong>UDP</strong> sends independent datagrams with no relationship between them and no such guarantees, which suits short request/response messages. <strong>SCTP</strong> is a newer transport protocol suited to multimedia traffic.</p>
      ${figGrid("unit1",[["tcp-stream-of-bytes-diagram.jpg","TCP's logical stream-of-bytes connection between two processes."],["tcp-circular-buffer-diagram.jpg","TCP's send/receive circular buffers, used for flow control."]])}
    </div>
  </div>

  <div class="tabpanel" data-tab="appl">
    <div class="card">
      <p>The <strong>Application layer</strong> provides process-to-process communication using request/response messages. Familiar examples: <strong>HTTP</strong> (the Web), <strong>SMTP</strong> (email), <strong>FTP</strong> (file transfer), <strong>TELNET/SSH</strong> (remote login), <strong>SNMP</strong> (network management), and <strong>DNS</strong> (name-to-address resolution).</p>
      ${fig("unit1","application-layer-message-diagram.jpg","Application-layer protocols exchanging request/response messages directly with their peer process.")}
    </div>
  </div>

  <div class="tabpanel" data-tab="addr">
    <div class="card">
      <h4 style="margin-top:0;">Encapsulation, all the way down</h4>
      <p>Going down the stack at the sender, each layer adds its own header (Transport adds H4, Network adds H3, Data-link adds H2/T2). Going up the stack at the receiver, each layer strips off its matching header. Intermediate routers only process up through the network-layer header, then re-encapsulate and forward.</p>
      ${figGrid("unit1",[["encapsulation-decapsulation-layered-diagram.jpg","Encapsulation on the way down, decapsulation on the way up — across the full protocol stack."],["udp-ip-frame-header-diagram.jpg","A UDP segment wrapped inside an IP datagram, wrapped inside a link-layer frame."]])}

      <h4>Addressing: a different kind at every layer</h4>
      <div class="chiprow">
        <span class="chip">Application → Names</span>
        <span class="chip">Transport → Port numbers</span>
        <span class="chip">Network → Logical (IP) addresses</span>
        <span class="chip">Data-link → Physical (MAC) addresses</span>
      </div>
      ${figGrid("unit1",[["addressing-names-layers-table.jpg","Which data unit and address type belongs to which layer."],["addressing-port-logical-physical-diagram.jpg","Port numbers, logical IP addresses, and physical MAC addresses, mapped across the stack."]])}

      <h4>Multiplexing / Demultiplexing</h4>
      <p>At the source, several application protocols (FTP, HTTP, DNS, SNMP…) share the single Transport layer, then the single Network layer — this is <strong>multiplexing</strong>. At the destination, the reverse process (<strong>demultiplexing</strong>) uses port numbers to deliver incoming data up to the correct application process.</p>
      ${fig("unit1","multiplexing-demultiplexing-diagram.jpg","Many application protocols multiplexed down onto one transport/network layer, then demultiplexed back out at the far end.")}

      <h4>The OSI Model</h4>
      <p>The <strong>OSI Model</strong> (Open Systems Interconnection), an ISO standard, is a 7-layer reference model: <strong>Application</strong> (access to network resources), <strong>Presentation</strong> (translation, encryption, compression), <strong>Session</strong> (dialog control between applications), <strong>Transport</strong>, <strong>Network</strong>, <strong>Data-link</strong>, <strong>Physical</strong>. TCP/IP's single Application layer corresponds to OSI's Application + Presentation + Session combined — the bottom four layers line up roughly one-to-one between the two models.</p>
      ${figGrid("unit1",[["osi-seven-layer-diagram.jpg","The OSI model's seven layers and what each one is responsible for."],["osi-vs-tcpip-comparison-diagram.jpg","OSI's 7 layers side-by-side with TCP/IP's 5 layers."]])}
    </div>
  </div>

  ${remember(["Network layer = host-to-host + routing (IP) · Transport layer = process-to-process (TCP/UDP) · Application layer = process-to-process via HTTP/SMTP/FTP/DNS…","Each layer down adds a header (encapsulation); each layer up removes one (decapsulation)","4 kinds of address: names, ports, logical (IP), physical (MAC)","OSI has 7 layers; TCP/IP's Application layer = OSI's Application+Presentation+Session combined"])}
`;

CONTENT.signals = `
  ${explain(`
    <p>The <strong>Physical layer</strong> is the bottom layer of the whole protocol stack — its job is simply to move raw bits across a cable or through the air. To do that, it has to turn data into <strong>signals</strong>, because media carry signals, not "data" directly.</p>
    <p>Both data and the signals that represent it can be <strong>analog</strong> (continuous) or <strong>digital</strong> (discrete states) — like the difference between an analog clock's sweeping hands and a digital clock's jump from "10:41" to "10:42".</p>
  `)}

  ${fig("unit2","network-topology-protocol-stack.jpg","Hosts, routers and ISPs — every device runs the Physical layer at the very bottom of its protocol stack.")}
  ${fig("unit2","analog-vs-digital-clock.jpg","An analog clock's continuous sweep versus a digital clock's discrete jumps — the same idea behind analog vs digital data.")}

  <h3>A familiar example: the MP3 player</h3>
  <p>Recording: sound → <strong>ADC</strong> (Analog-to-Digital Converter) → bits → DSP (digital signal processor) → memory. Playback reverses it: memory → DSP → <strong>DAC</strong> (Digital-to-Analog Converter) → speaker.</p>
  ${fig("unit2","mp3-adc-dac-diagram.jpg","The MP3 player's full round trip: sound to bits on the way in, bits back to sound on the way out.")}

  <h3>Analog signals: amplitude, frequency, phase</h3>
  <p>An analog signal has infinitely many levels of intensity over time — a smooth wave, like a sine wave. Two key measurements:</p>
  <div class="diagram">
    <div class="node clickable" data-pop="The distance between the peak (or trough) of a wave and the equilibrium/rest position — basically, how 'tall' the wave is. In sound, bigger amplitude = louder.">
      <span class="emoji">📏</span>Amplitude
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="The rate of change with respect to time. A signal that changes over a short time span has high frequency; one that changes over a long span has low frequency.">
      <span class="emoji">🔁</span>Frequency
      <div class="node-pop"></div>
    </div>
  </div>
  ${figGrid("unit2",[["amplitude-loudness-sine-wave.jpg","Amplitude visualised as loudness — a taller wave, a louder sound."],["bird-sound-frequency-example.jpg","A low-frequency chirp (widely spaced wave) versus a high-frequency chirp (tightly packed wave)."]])}

  ${analogy(`<p>Think of a swing: how high it swings is its amplitude; how fast it swings back and forth is its frequency.</p>`)}

  ${remember(["Physical layer moves raw bits as signals — data itself never travels, only signals representing it","Data and signals can each be analog (continuous) or digital (discrete)","Amplitude = wave height (intensity) · Frequency = rate of change over time"])}
`;

CONTENT.digitalnums = `
  ${explain(`<p>A digital signal can only take a limited number of defined values — often just 1 and 0. If a signal has <strong>L</strong> levels, each level needs <strong>log₂(L)</strong> bits to encode it.</p>`)}

  ${figGrid("unit2",[["digital-signal-bit-waveform.jpg","A digital signal for the bit pattern 0 1 0 0 1 1 0 0 0 1 1 — each bit a fixed-height step."],["digital-signal-levels-bitrate.jpg","More levels per symbol packs more bits into the same number of symbols."]])}

  <h3>Bit rate — how fast bits are sent</h3>
  <p><strong>Bit rate</strong> = number of bits sent per second (bps).</p>
  <ul>
    <li>2-level digital signal, 8 bits sent in 1 second → bit rate = <strong>8 bps</strong></li>
    <li>4-level digital signal (2 bits/level: 11, 10, 01, 00), 16 bits sent in 1 second → bit rate = <strong>16 bps</strong></li>
  </ul>
  ${fig("unit2","bit-rate-bit-interval-diagram.jpg","Bit rate and bit interval — how many bits fit into one second, and how long each one lasts.")}
  ${fig("unit2","video-bitrate-example.jpg","A real-world video streamed at roughly 65 Mbps (65,000,000 bits every second) — lower bitrate means lower quality but a smaller file.")}

  <h3>Bit length — how much "space" a bit takes up</h3>
  <p>Just like distance = time × speed, a bit physically occupies some length of the medium:</p>
  <p style="text-align:center; font-weight:700; font-size:17px; background:var(--bg); padding:10px; border-radius:10px;">Bit Length = Bit Interval × Propagation Speed</p>
  ${more("🧮 Worked example","<p>Bit Rate = 8 bps → Bit Interval = 1/8 = 0.125 s. Propagation speed = 2×10⁸ m/s.</p><p>Bit Length = 0.125 × 2×10⁸ = <strong>25,000,000 m = 25,000 km</strong> — that one bit is physically stretched across 25,000 km of cable!</p>"+fig("unit2","bit-length-worked-example.jpg","The worked bit-length example, step by step."))}

  ${remember(["L signal levels need log₂(L) bits per level","Bit rate = bits sent per second (bps)","Bit Length = Bit Interval × Propagation Speed"])}
`;

CONTENT.composite = `
  ${explain(`<p>Real signals are rarely a single clean sine wave — they're usually a <strong>composite</strong> made of many simple sine waves added together. Understanding this is the key to understanding bandwidth.</p>`)}

  <h3>Periodic vs nonperiodic signals</h3>
  <p>A <strong>periodic</strong> signal completes a repeating pattern within a measurable <strong>period</strong>, and keeps repeating it — one full repetition is a <strong>cycle</strong>. A <strong>nonperiodic (aperiodic)</strong> signal never settles into a repeating pattern. In practice, we mostly deal with <strong>periodic analog</strong> signals and <strong>nonperiodic digital</strong> signals.</p>
  ${fig("unit2","periodic-analog-vs-digital-signal.jpg","A periodic analog sine wave next to a periodic digital square wave.")}

  <h3>Any composite wave = a sum of sine waves</h3>
  <p>The <strong>Fourier series</strong> says any composite periodic signal can be broken down into a sum of simple sine waves (<strong>harmonics</strong>). For a square wave:</p>
  <p style="text-align:center; font-weight:600; font-size:15.5px; background:var(--bg); padding:10px; border-radius:10px;">(4·sinθ)/π + (4·sin3θ)/3π + (4·sin5θ)/5π + (4·sin7θ)/7π + …</p>
  <p style="font-size:14.5px; color:var(--ink-soft);">— only <strong>odd</strong> harmonics, with amplitude shrinking as 1/n. The more harmonics you add, the more the sum starts to look like a true square wave.</p>
  ${figGrid("unit2",[["square-wave-single-sinusoid-approx.jpg","Using just the first harmonic — a rough sine-shaped approximation of the square wave."],["square-wave-more-harmonics-approx.jpg","Adding more odd harmonics (3rd, 5th, 7th…) — the approximation gets sharper and more square."]])}

  <h3>Time domain vs frequency domain</h3>
  <p>A <strong>time-domain</strong> plot shows amplitude vs time — the messy composite wave. A <strong>frequency-domain</strong> plot shows amplitude vs frequency — just a few clean vertical spikes at f, 3f, 5f, 9f… — much easier to read! The <strong>Fourier Transform</strong> converts one into the other.</p>
  ${figGrid("unit2",[["signal-decomposition-harmonics.jpg","A composite signal decomposed into its fundamental frequency plus harmonics."],["frequency-domain-spikes.jpg","The same signal in the frequency domain — a handful of clean spikes instead of a messy wave."]])}

  ${mistake(`<p><strong>Key result:</strong> a digital signal is really a composite analog signal made of <em>infinite</em> harmonics — so representing a digital signal perfectly would need infinite bandwidth! In practice we only send enough harmonics to approximate it well.</p>`)}

  <p><strong>Bandwidth</strong> of a composite signal = the difference between its highest and lowest frequencies. A periodic digital signal has a <strong>discrete</strong> (line) spectrum — only certain frequencies are present. A nonperiodic digital signal has a <strong>continuous</strong> spectrum — every frequency is present.</p>

  ${remember(["Any composite periodic signal = sum of sine-wave harmonics (Fourier series)","More harmonics included → closer approximation, but more bandwidth needed","A perfect digital signal would need infinite bandwidth — real links only approximate it"])}
`;

CONTENT.transmission = `
  ${explain(`<p>There are two fundamentally different ways to send a digital signal from A to B.</p>`)}

  <div class="flow-grid">
    <div class="flow-card">
      <h4>📉 Baseband Transmission</h4>
      <p style="font-size:14.5px;">Sends the digital signal <strong>as-is</strong>, without converting it to analog. Needs a <strong>low-pass channel</strong> — one whose bandwidth starts right from 0 Hz up to some f₁.</p>
    </div>
    <div class="flow-card">
      <h4>📡 Broadband Transmission (modulation)</h4>
      <p style="font-size:14.5px;">Converts the digital signal into an <strong>analog</strong> signal before sending. Needs a <strong>bandpass channel</strong> — one whose band does <em>not</em> start at 0 Hz (it spans f₁ to f₂).</p>
    </div>
  </div>
  ${figGrid("unit2",[["baseband-transmission-diagram.jpg","Baseband: the digital signal travels unchanged over a low-pass (0-Hz-starting) channel."],["broadband-transmission-diagram.jpg","Broadband: digital → analog converter → sent over a bandpass channel → analog → digital converter at the far end."]])}

  <h3>How much bandwidth does baseband actually need?</h3>
  <p>To preserve a digital signal <em>exactly</em>, you'd need to send its entire (infinite) spectrum — only possible with a dedicated, infinite-bandwidth medium. In the real world, bandwidth is limited, so the signal gets <strong>approximated</strong> — and the worst case to plan for is a signal that flips every single bit, like <code>0101 0101</code>.</p>
  ${more("🧮 Worked example: finding the worst-case frequency","<p>Bit rate N = 8 bits/s → each bit lasts 1/N = 0.125 s. The pattern flips every bit, so one full cycle takes 2 bits → cycle time = 2 × 0.125 = 0.25 s → frequency = 1/0.25 = <strong>4 Hz</strong>.</p><p>In general: <strong>maximum frequency f = N/2</strong> (a cycle always needs 2 bits). Approximating with just this frequency is called using the <strong>first harmonic</strong>.</p>")}

  <table style="width:100%; border-collapse:collapse; margin:16px 0; font-size:14.5px;">
    <tr style="background:var(--bg);"><th style="padding:8px; text-align:left; border:1px solid var(--line);">Bit rate n</th><th style="padding:8px; border:1px solid var(--line);">B (1 harmonic)</th><th style="padding:8px; border:1px solid var(--line);">B (1,3)</th><th style="padding:8px; border:1px solid var(--line);">B (1,3,5)</th></tr>
    <tr><td style="padding:8px; border:1px solid var(--line);">1 kbps</td><td style="padding:8px; border:1px solid var(--line); text-align:center;">500 Hz</td><td style="padding:8px; border:1px solid var(--line); text-align:center;">1.5 kHz</td><td style="padding:8px; border:1px solid var(--line); text-align:center;">2.5 kHz</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--line);">10 kbps</td><td style="padding:8px; border:1px solid var(--line); text-align:center;">5 kHz</td><td style="padding:8px; border:1px solid var(--line); text-align:center;">15 kHz</td><td style="padding:8px; border:1px solid var(--line); text-align:center;">25 kHz</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--line);">100 kbps</td><td style="padding:8px; border:1px solid var(--line); text-align:center;">50 kHz</td><td style="padding:8px; border:1px solid var(--line); text-align:center;">150 kHz</td><td style="padding:8px; border:1px solid var(--line); text-align:center;">250 kHz</td></tr>
  </table>
  <p style="font-size:14.5px;">Formulas: <strong>B = n/2</strong> (1st harmonic only) · <strong>B = 3n/2</strong> (harmonics 1 & 3) · <strong>B = 5n/2</strong> (harmonics 1, 3, 5) — more harmonics = better square-wave shape, but more bandwidth needed.</p>
  ${fig("unit2","bandwidth-requirements-harmonics-table.jpg","How many harmonics you include directly trades off against how much bandwidth you need.")}

  ${remember(["Baseband = digital signal sent as-is, needs a low-pass (0-Hz-starting) channel","Broadband = digital converted to analog, needs a bandpass channel","Worst-case signal (alternating bits) sets max frequency = bit-rate / 2"])}
`;

CONTENT.performance = `
  ${explain(`<p>How do we actually measure whether a network is "fast"? A handful of metrics, used together.</p>`)}

  <div class="flow-grid">
    <div class="flow-card"><h4>📶 Bandwidth</h4><p style="font-size:14.5px;">In Hz: the range of frequencies a channel can pass. In bps: the number of bits/sec a link can theoretically transmit — its <em>potential</em>.</p></div>
    <div class="flow-card"><h4>🚀 Throughput</h4><p style="font-size:14.5px;">How fast data can <em>actually</em> be sent through the network — the real-world number, which is often lower than the theoretical bandwidth.</p></div>
  </div>

  <h3>Latency = the sum of 4 delays</h3>
  <p style="text-align:center; font-weight:700; font-size:16px; background:var(--bg); padding:10px; border-radius:10px;">Latency = Propagation Time + Transmission Time + Queuing Time + Processing Delay</p>
  <div class="chiprow">
    <span class="chip">🛰️ Propagation Time = Distance / Propagation Speed</span>
    <span class="chip">🚚 Transmission Time = Message size / Bandwidth</span>
    <span class="chip">⏳ Queuing Time — waiting to be processed at a device</span>
    <span class="chip">⚙️ Processing Delay — time routers spend reading the packet header</span>
  </div>

  <h3>Bandwidth-Delay Product</h3>
  <p>This tells you how many bits can be "in flight," filling up the link, at any one instant — like the volume of a pipe (cross-section = bandwidth, length = delay).</p>
  ${figGrid("unit2",[["bandwidth-delay-product-example1.jpg","Bandwidth = 1 bps, Delay = 5 s → 5 bits fit on the link at once."],["bandwidth-delay-product-example2.jpg","Bandwidth = 5 bps, Delay = 5 s → 25 bits fit on the link at once."]])}

  <h3>Jitter</h3>
  <p>When different packets (A, B, C, D…) experience different delays, their arrival spacing becomes uneven. For time-sensitive apps like audio/video calls, this shows up as stutters and glitches — even if every packet eventually arrives!</p>
  ${fig("unit2","jitter-packet-delay-diagram.png","Packets A, B, C, D arriving with uneven gaps between them — that unevenness is jitter.")}

  ${remember(["Bandwidth = theoretical capacity · Throughput = actual achieved speed","Latency = propagation + transmission + queuing + processing delay","Bandwidth-Delay Product = how many bits can be 'in flight' on the link at once","Jitter = variation in packet arrival spacing — a problem for real-time audio/video"])}
`;

CONTENT.modes = `
  ${explain(`<p>Once data is a stream of bits, how do we actually push it out onto the wire? There are two main families of transmission.</p>`)}

  ${fig("unit2","transmission-modes-tree.jpg","The full transmission-mode family tree: Parallel, and Serial (which further splits into Asynchronous, Synchronous, and Isochronous).")}

  <div class="flow-grid">
    <div class="flow-card">
      <h4>⏸️ Parallel</h4>
      <p style="font-size:14.5px;">Groups of n bits sent <strong>at the same time</strong>, each bit on its own wire (e.g. 8 bits needs 8 wires). <strong>Fast</strong>, but <strong>expensive</strong> — needs many wires.</p>
    </div>
    <div class="flow-card">
      <h4>➡️ Serial</h4>
      <p style="font-size:14.5px;">Bits sent <strong>one after another</strong> over a single wire. Needs a parallel-to-serial converter at the sender, and serial-to-parallel at the receiver. <strong>Cheaper</strong> — only one line.</p>
    </div>
  </div>
  ${figGrid("unit2",[["parallel-transmission-diagram.jpg","Parallel transmission — n bits travel together on n separate wires."],["serial-transmission-diagram.jpg","Serial transmission — bits travel one after another down a single wire."]])}

  <h3>Serial has 3 flavours</h3>
  <div class="chiprow">
    <span class="chip">🅰️ Asynchronous — start/stop bits frame each byte, gaps allowed between bytes</span>
    <span class="chip">🅱️ Synchronous — continuous stream, no gaps, grouped into larger frames</span>
    <span class="chip">🅲️ Isochronous — guarantees data arrives at a fixed, constant rate</span>
  </div>
  <p><strong>Asynchronous</strong> is "synchronous at the byte level" — the bits inside one byte all have the same duration, but each byte gets a <strong>start bit (0)</strong> before it and a <strong>stop bit (1)</strong> after it, e.g. <code>0 | 11111011 | 1</code>, with variable gaps between bytes. It's cheap and effective. <strong>Synchronous</strong> transmission has no start/stop bits or gaps at all — the receiver itself is responsible for correctly grouping the continuous bit stream, which is faster but needs tighter clock coordination.</p>
  ${figGrid("unit2",[["asynchronous-transmission-framing.jpg","Asynchronous framing — a start bit and stop bit bracket every byte, with gaps allowed between bytes."],["synchronous-transmission-framing.jpg","Synchronous framing — one continuous stream, no start/stop bits, grouped into larger frames."]])}

  ${remember(["Parallel = many bits at once on many wires (fast, costly)","Serial = one bit at a time on one wire (cheap)","Asynchronous = start/stop bits frame each byte · Synchronous = continuous stream, no gaps · Isochronous = guaranteed constant rate"])}
`;

CONTENT.multiplexing = `
  ${explain(`<p><strong>Multiplexing</strong> lets multiple signals share a single link at the same time. A <strong>multiplexer (MUX)</strong> combines several lines into one stream at the sender; a <strong>demultiplexer (DEMUX)</strong> splits it back apart at the receiver.</p>`)}

  ${figGrid("unit2",[["multiplexing-vs-no-multiplexing.jpg","Without multiplexing, every line needs its own physical link. With multiplexing, many lines share just one link."],["mux-demux-n-channel-diagram.jpg","A MUX combining n input lines into one link, and a DEMUX splitting it back into n outputs at the far end."]])}

  <p>A <strong>link</strong> is the whole physical path; a <strong>channel</strong> is the portion of that link carrying one particular pair of lines' traffic. There are three multiplexing families — this station covers the two analog ones, FDM and WDM; the next station covers digital TDM in depth.</p>
  ${fig("unit2","multiplexing-types-tree.jpg","The three multiplexing families: FDM and WDM (analog), and TDM (digital).")}

  <h3>Frequency-Division Multiplexing (FDM)</h3>
  <p>Used when a link's bandwidth is bigger than the combined bandwidth of all the signals sharing it. Each device modulates onto a different <strong>carrier frequency</strong> — a constant-frequency signal that alone carries little/no information until you <strong>modulate</strong> (impose) real data onto it. The modulated signals are then combined into one composite signal.</p>
  ${figGrid("unit2",[["carrier-signal-modulation-waveforms.jpg","A plain carrier wave, an information signal, and the modulated result carrying that information."],["fdm-multiplexing-process.jpg","FDM at the sender: several signals each modulated onto their own carrier frequency, then combined."]])}
  <p>At the receiver, the composite signal is split apart with per-channel filters, then each is demodulated using its own carrier frequency to recover the original signal. <strong>Guard bands</strong> — small strips of unused frequency — sit between channels to stop them overlapping.</p>
  ${fig("unit2","fdm-demultiplexing-process.jpg","FDM demultiplexing: filters split the composite signal, then each piece is demodulated back to its original signal.")}
  ${more("🔎 A real example: the analog telephone hierarchy","<p>Group = 12 voice channels → 48 kHz. Supergroup = 5 groups (60 channels) → 240 kHz. Master group = 10 supergroups (600 channels) → 2.52 MHz. Jumbo group = 6 master groups (3600 channels) → 16.984 MHz.</p>"+fig("unit2","analog-carrier-system-hierarchy.jpg","The analog carrier system — voice channels nested into groups, supergroups, master groups, and jumbo groups."))}

  <h3>Wavelength-Division Multiplexing (WDM)</h3>
  <p>Conceptually identical to FDM, but built for <strong>fiber-optic</strong> cable at very high (optical) frequencies/wavelengths — since one fiber carrying just a single signal wastes most of its capacity. A combiner (think: a glass prism) merges individually-coloured wavelengths (λ₁–λ₄) from separate transmitters onto one fiber; a splitter separates them back out at the far end.</p>
  ${figGrid("unit2",[["wdm-glass-prism-diagram.jpg","A prism-like combiner merging separate coloured wavelengths onto one shared fiber."],["wdm-mux-demux-wavelengths.jpg","WDM multiplexing and demultiplexing four wavelengths over a single fiber."]])}

  ${remember(["MUX combines many lines into one link; DEMUX splits it back apart","FDM: each signal gets its own carrier frequency band, with guard bands between channels","WDM = FDM's fiber-optic cousin, multiplexing light wavelengths instead of radio frequencies"])}
`;

CONTENT.tdm = `
  ${explain(`<p><strong>Time-Division Multiplexing (TDM)</strong> is digital — instead of splitting the link by frequency, it splits the link by <strong>time</strong>. Each connection gets its own slice of time on the shared link.</p>`)}

  <div class="flow-grid">
    <div class="flow-card"><h4>🕰️ Synchronous TDM</h4><p style="font-size:14.5px;">For n connections, each frame is divided into exactly n time slots — one guaranteed slot per input line, whether it has data or not.</p></div>
    <div class="flow-card"><h4>📊 Statistical TDM</h4><p style="font-size:14.5px;">Slots are allocated dynamically — only to lines that actually have data — so the frame can have fewer slots than input lines.</p></div>
  </div>
  ${fig("unit2","tdm-time-slot-diagram.jpg","Four stations each getting their own time slot, one after another, on a shared link.")}

  <h3>Synchronous TDM: interleaving</h3>
  <p>If each input unit takes duration T, then with n inputs each slot gets duration T/n, and one full frame also takes duration T — so the link's data rate ends up n times faster than any single input. A pair of synchronized rotating switches (spinning in opposite directions at each end) opens in front of each connection in turn, letting it place one unit onto the link — this round-robin insertion is called <strong>interleaving</strong>.</p>
  ${figGrid("unit2",[["synchronous-tdm-frames.jpg","Synchronous TDM frames — each frame carries exactly one slot per input line, in fixed positions."],["tdm-interleaving-rotating-switches.jpg","Interleaving, visualised as two synchronized rotating switches picking up one unit from each line in turn."]])}

  <h3>The data-rate mismatch problem — 3 fixes</h3>
  <p>What if input lines run at different speeds (say 100, 40, and 10 bps)? Three strategies:</p>
  <ol>
    <li><strong>Multilevel multiplexing</strong> — combine slower lines together first to match a common rate before merging further (e.g. two 20 kbps lines → 40 kbps, then merged with three other 40 kbps lines → 160 kbps total).</li>
    <li><strong>Multiple-slot allocation</strong> — give a faster input more slots per frame (e.g. a 50 kbps input gets 2 slots per frame alongside four 25 kbps inputs at 1 slot each → 125 kbps total).</li>
    <li><strong>Pulse stuffing</strong> — pad the slowest input with dummy bits to match the others (e.g. a 46 kbps input stuffed up to 50 kbps to match two other 50 kbps lines → 150 kbps total).</li>
  </ol>
  ${figGrid("unit2",[["multilevel-multiplexing-example.jpg","Multilevel multiplexing — slower lines combined together first, before joining the rest."],["pulse-stuffing-example.png","Pulse (bit) stuffing — dummy bits pad a slower line up to match the others."]])}
  <p>If MUX and DEMUX ever fall out of sync, a bit could land in the wrong channel! The fix is <strong>framing bits</strong> — a recognizable pattern (e.g. repeating <code>101</code>) added at the start of every frame so the DEMUX can always find its footing again.</p>

  ${more("🔎 Want to know more? The T-carrier / DS hierarchy (used for digital telephone lines)","<p>DS-0 = 64 kbps (1 voice channel) · DS-1/T-1 = 1.544 Mbps = 24 channels · DS-2/T-2 = 6.312 Mbps = 4×T-1 · DS-3/T-3 = 44.736 Mbps = 7×T-2 · DS-4/T-4 = 274.176 Mbps = 6×T-3.</p><p><strong>How a T-1 line is built:</strong> each of 24 voice channels (4 kHz bandwidth) is sampled at 8000 samples/sec using 8 bits/sample → 8000 × 8 = 64,000 bps per channel. 24 channels × 64 kbps + 8 kbps of framing overhead = <strong>1.544 Mbps</strong>. Frame structure: 24 × 8 = 192 bits + 1 framing bit = 193 bits/frame, sent 8000 times a second → 8000 × 193 = 1,544,000 bps.</p>"+figGrid("unit2",[["digital-signal-hierarchy-ds-levels.png","The DS/T-carrier hierarchy, from DS-0 up to DS-4."],["t1-frame-structure-diagram.jpg","A T-1 frame: 24 channels of 8 bits each, plus 1 framing bit."]]))}

  <h3>Statistical TDM: no wasted slots</h3>
  <p>In basic synchronous TDM, an idle line's slot is still transmitted — <strong>empty and wasted</strong>. Statistical TDM fixes this: the MUX scans lines round-robin and only allocates a slot to a line that actually has data. Since slot position no longer implies which channel it belongs to, each slot must now carry its own <strong>destination address</strong> (an n-bit address supports N = 2ⁿ output lines). Because of this addressing overhead, the link's overall capacity is normally set <em>less</em> than the sum of all channel capacities, sized to match real usage patterns.</p>
  ${figGrid("unit2",[["tdm-empty-slots-wasted.jpg","Synchronous TDM: an idle line's slot is sent anyway, wasting bandwidth."],["statistical-vs-synchronous-tdm.jpg","Statistical TDM skips idle lines entirely, but needs an address in every slot."]])}

  ${remember(["TDM shares a link by time slot, not frequency","Synchronous TDM: fixed slot per line, even if idle","Statistical TDM: only busy lines get a slot, but each slot needs an address","3 fixes for mismatched input speeds: multilevel multiplexing, multiple-slot allocation, pulse stuffing"])}
`;

CONTENT.media = `
  ${explain(`<p>Transmission media are the physical "highway" a signal travels on. They split into two broad types: <strong>guided media</strong> (the signal is physically directed and contained — cables) and <strong>unguided media</strong> (the signal just radiates through the air). This station covers guided media.</p>`)}
  ${fig("unit2","transmission-media-types-tree.jpg","The full media family tree: guided (twisted-pair, coaxial, fiber-optic) and unguided (radio, microwave, infrared).")}

  <div class="tabbar" id="mediaTabs">
    <button class="tabbtn active" data-tab="twisted">🧵 Twisted-Pair</button>
    <button class="tabbtn" data-tab="coax">📺 Coaxial</button>
    <button class="tabbtn" data-tab="fiber">💡 Fiber-Optic</button>
  </div>

  <div class="tabpanel active" data-tab="twisted">
    <div class="card">
      <p>Two insulated copper wires twisted together — one carries the signal, the other is a ground reference. The receiver reads the <strong>difference</strong> between the two wires, and the twisting itself cancels out externally induced noise and crosstalk.</p>
      ${fig("unit2","twisted-pair-cable-diagram.jpg","Two copper wires twisted together to cancel out external noise.")}
      <p><strong>UTP</strong> (Unshielded Twisted Pair) vs <strong>STP</strong> (Shielded Twisted Pair — adds a metal shield for extra noise protection, at extra cost and installation difficulty). Cables use the standard <strong>RJ45</strong> connector.</p>
      ${figGrid("unit2",[["utp-vs-stp-cable-photo.png","UTP vs STP cable — the shielded version wraps the pair in a protective metal layer."],["rj45-connector-photo.jpg","The standard 8-pin RJ45 connector used with twisted-pair cable."]])}
      <p>Performance: attenuation (signal loss, in dB/km) increases with frequency. Wire thickness is measured in <strong>gauge</strong> — a higher gauge number means a thinner wire, so a thin 26-gauge wire attenuates more than a thick 18-gauge wire at the same frequency. Twisted-pair is used for telephone lines and DSL.</p>
      ${fig("unit2","twisted-pair-attenuation-graph.jpg","Attenuation rises with frequency, and rises faster for thinner (higher-gauge) wire.")}
    </div>
  </div>

  <div class="tabpanel" data-tab="coax">
    <div class="card">
      <p>Coaxial cable ("coax") has a central inner conductor, an insulator, a braided outer conductor (shield), and a plastic outer cover — all sharing one axis, hence "co-axial". It uses a <strong>BNC</strong> (Bayonet Neill-Concelman) twist-lock connector.</p>
      ${figGrid("unit2",[["coaxial-cable-cross-section.jpg","Coaxial cable's layered cross-section: core, insulator, braided shield, outer jacket."],["bnc-connector-photo.jpg","The BNC twist-lock connector used with coaxial cable."]])}
      <p>Like twisted-pair, attenuation increases with frequency, and thinner coax attenuates more than thicker coax. Historically used for analog telephone networks (~10,000 voice signals per cable) and later digital telephone networks (up to 600 Mbps).</p>
      ${fig("unit2","coaxial-cable-attenuation-graph.jpg","Coaxial attenuation vs frequency — thin coax loses more signal than thick coax.")}
    </div>
  </div>

  <div class="tabpanel" data-tab="fiber">
    <div class="card">
      <p>Fiber-optic cable is made of glass or plastic and carries signals as <strong>light</strong>, not electricity. The physics: when light hits the boundary between a denser and less-dense medium at a steep enough angle (past the "critical angle"), it doesn't escape — it bounces straight back in. This is <strong>total internal reflection</strong>, and it's what makes fiber work.</p>
      <p>A fiber has a dense glass/plastic <strong>core</strong> (carries the light) surrounded by less-dense <strong>cladding</strong>. Light hitting the core-cladding boundary steeply enough reflects back into the core; light hitting too shallow an angle escapes and is lost.</p>
      ${fig("unit2","fiber-optic-core-cladding-reflection.jpg","Light bouncing down the fiber core via total internal reflection off the cladding.")}

      <h4 style="margin-top:18px;">Three propagation modes</h4>
      ${fig("unit2","fiber-propagation-modes-tree.jpg","Multimode (step-index, graded-index) and single-mode fiber.")}
      <div class="chiprow">
        <span class="chip">Multimode step-index — wide uniform core, light zig-zags sharply</span>
        <span class="chip">Multimode graded-index — density decreases toward the edge, light curves smoothly</span>
        <span class="chip">Single mode — very thin core, one nearly-straight ray, least distortion</span>
      </div>
      ${figGrid("unit2",[["single-mode-vs-multimode-fiber.jpg","Single-mode's thin core versus multimode's much wider core."],["fiber-modes-pulse-comparison.jpg","A square input pulse arrives least distorted through single mode, more distorted through graded-index, most distorted through step-index."]])}

      <h4>Real cable construction & connectors</h4>
      <p>From outside in: outer jacket → Kevlar strands (for tensile strength) → plastic buffer → cladding → core. Common connectors: <strong>ST</strong>, <strong>SC</strong>, and <strong>MTRJ</strong>.</p>
      ${figGrid("unit2",[["fiber-cable-composition-kevlar.jpg","A real fiber cable's layers, including Kevlar strands for strength."],["fiber-optic-connector-types.jpg","ST, SC and MTRJ fiber-optic connector types."]])}
      <p>Signal loss varies with wavelength — there are low-loss "windows" around 1310 nm and 1550 nm that real systems deliberately use, avoiding a big loss peak near 1400 nm.</p>
      ${fig("unit2","fiber-optic-loss-wavelength-graph.jpg","Fiber loss vs wavelength — low-loss windows around 1310 nm and 1550 nm, with a peak to avoid near 1400 nm.")}
      <p><strong>Advantages:</strong> huge bandwidth, very little attenuation, immune to electromagnetic interference, resistant to corrosion, lightweight, hard to tap/eavesdrop. <strong>Disadvantages:</strong> skilled/costly installation, light only travels one way (needs two fibers, or WDM, for two-way communication), and cost.</p>
    </div>
  </div>

  ${remember(["Twisted-pair: cheap, noise-cancelling twist, RJ45 connector, used for telephone/DSL","Coaxial: shielded core, BNC connector, higher capacity than twisted-pair","Fiber-optic: light + total internal reflection; single-mode has least distortion, most bandwidth"])}
`;

CONTENT.wireless = `
  ${explain(`<p><strong>Unguided media</strong> send electromagnetic waves through the air — no physical conductor at all. Where they sit on the electromagnetic spectrum determines almost everything about how they behave.</p>`)}
  ${fig("unit2","electromagnetic-spectrum-chart.jpg","The electromagnetic spectrum, from radio waves up through microwave, infrared, visible light, and beyond.")}

  <h3>Three propagation methods</h3>
  <div class="chiprow">
    <span class="chip">🌍 Ground-wave — below 2 MHz, follows Earth's curvature</span>
    <span class="chip">🌌 Sky-wave — 2–30 MHz, bounces off the ionosphere for long-distance "hops"</span>
    <span class="chip">👁️ Line-of-sight (LOS) — above 30 MHz, needs a clear straight path</span>
  </div>
  ${fig("unit2","wave-propagation-methods-diagram.jpg","Ground-wave hugging the Earth, sky-wave bouncing off the ionosphere, and line-of-sight travelling straight.")}
  ${fig("unit2","frequency-bands-table.jpg","The full frequency-band table — from VLF navigation beacons up to EHF radar and satellite links.")}

  <div class="flow-grid">
    <div class="flow-card">
      <h4>📻 Radio Waves <span style="font-weight:400;font-size:12.5px;">(~3 kHz–1 GHz)</span></h4>
      <p style="font-size:14.5px;">Mostly <strong>omnidirectional</strong> — antennas don't need precise alignment. Can travel long distances via sky-wave (long-range AM radio) and can penetrate walls — both a strength and a weakness (interference!). Great for <strong>multicasting</strong> (one-to-many).</p>
    </div>
    <div class="flow-card">
      <h4>📡 Microwaves <span style="font-weight:400;font-size:12.5px;">(1–300 GHz)</span></h4>
      <p style="font-size:14.5px;">Strictly <strong>unidirectional</strong> — must be tightly focused, so sending/receiving antennas must be aligned. Strictly line-of-sight; can't penetrate walls. Long links need tall towers and relay stations roughly every 30 miles. Great for <strong>unicast</strong> (point-to-point) links.</p>
    </div>
  </div>
  ${figGrid("unit2",[["omnidirectional-vs-directional-antenna.jpg","An omnidirectional antenna spreading signal in every direction vs a focused directional antenna."],["microwave-relay-line-of-sight.jpg","Tall microwave relay towers, spaced for line-of-sight, passing a signal along in hops."]])}
  ${fig("unit2","parabolic-horn-antenna-photos.jpg","Real unidirectional antennas — a parabolic dish and a horn antenna, both used to focus microwave beams.")}

  <h3>Infrared <span style="font-weight:400;font-size:13px;">(300 GHz–400 THz)</span></h3>
  <p>Short-range only, and its high frequencies mean it <strong>cannot</strong> penetrate walls — which is actually useful, since it prevents interference between adjacent rooms. Its wide bandwidth supports high-data-rate short-range links, standardized by <strong>IrDA</strong> for devices like keyboards, mice, and printers.</p>

  ${remember(["Ground-wave (low freq, hugs Earth) · Sky-wave (bounces off ionosphere) · Line-of-sight (high freq, needs a clear path)","Radio waves: omnidirectional, good for multicasting, penetrates walls","Microwaves: unidirectional, line-of-sight only, good for unicast point-to-point links","Infrared: short range, blocked by walls (a feature, not a bug), used for nearby device links"])}
`;

CONTENT.pswitching = `
  ${explain(`<p>An internet is really a <strong>switched network</strong> — a series of interlinked switches, each capable of creating a temporary connection between two or more attached devices.</p>`)}
  ${fig("unit2","network-switch-devices-diagram.jpg","A LAN switch connecting a desktop, laptop, printer and database together.")}

  <p>There are three basic switching methods, each tied to a different protocol layer: <strong>Circuit switching</strong> (Physical layer), <strong>Packet switching</strong> (Data-link / Network layer — split further into datagram and virtual-circuit approaches, covered in the next station), and <strong>Message switching</strong> (Application layer, mostly historical).</p>
  ${fig("unit2","network-switch-hardware-photo.jpg","A real physical network switch, with cables plugged into its many ports.")}
  ${fig("unit2","switching-methods-tree.jpg","The three switching families and which protocol layer each one belongs to.")}

  <h3>Circuit switching, in detail</h3>
  <p>A circuit-switched network is built from switches connected by links, each link divided into channels. A dedicated end-to-end path threads through a sequence of switches before any data moves.</p>
  ${figGrid("unit2",[["circuit-switching-example.jpg","Telephones connecting through a chain of circuit switches, with one dedicated path reserved for the call."],["circuit-switching-mesh-network.jpg","A circuit-switched mesh, showing the exact dedicated path a call takes end-to-end."]])}

  <h3>3 phases of circuit switching</h3>
  <div class="flow-grid">
    <div class="flow-card"><h4>1️⃣ Setup</h4><p style="font-size:14.5px;">A requests a connection to M. Every switch along the path — and M itself — must accept. M sends an acknowledgment back before the connection is considered live.</p></div>
    <div class="flow-card"><h4>2️⃣ Data Transfer</h4><p style="font-size:14.5px;">Once the dedicated channel exists, data flows freely — with <strong>no per-switch delay</strong>, since resources were reserved end-to-end in advance.</p></div>
    <div class="flow-card"><h4>3️⃣ Teardown</h4><p style="font-size:14.5px;">After all data is sent, the reserved circuits are released so other calls can use them.</p></div>
  </div>
  <p style="font-size:14.5px; color:var(--ink-soft);">Setup delay = propagation + transfer time of the request + propagation + transfer time of the acknowledgment. Transfer delay = propagation time of the data + its transmission time. Teardown delay = propagation + processing time of the teardown request.</p>
  ${figGrid("unit2",[["circuit-switching-setup-delay.jpg","Setup-phase delay — the request travelling out and the acknowledgment travelling back."],["circuit-switching-transfer-delay.jpg","Transfer-phase delay — just propagation and transmission time, no per-switch waiting."],["circuit-switching-teardown-delay.jpg","Teardown-phase delay — releasing the reserved circuits once data transfer finishes."]])}

  ${mistake(`<p>Circuit switching is <strong>not</strong> the most efficient option — resources stay reserved for the entire call duration even during silence or idle moments, which wastes capacity that packet switching would let other users share.</p>`)}

  ${remember(["Circuit switching → Physical layer; Packet switching → Data-link/Network layer; Message switching → Application layer","3 phases: Setup → Data Transfer (no per-switch delay) → Teardown","Resources stay dedicated for the whole call, even if idle — not very efficient"])}
`;

CONTENT.datagramvc = `
  ${explain(`<p>In packet switching, a message is broken into packets, and — unlike circuit switching — <strong>no resources are pre-reserved</strong>. Packets get resources on demand, first-come first-served. There are two very different approaches.</p>`)}

  ${fig("unit2","packet-switching-node-network.png","An original colour-coded message split into packets, hopping across a mesh of nodes toward the destination — possibly by different paths.")}

  <div class="flow-grid">
    <div class="flow-card">
      <h4>🗺️ Datagram Networks</h4>
      <p style="font-size:14.5px;">Each packet is treated <strong>completely independently</strong>, even if part of the same message — these packets are literally called "datagrams". Normally implemented at the <strong>Network layer</strong>. Different packets can take different paths and arrive out of order.</p>
    </div>
    <div class="flow-card">
      <h4>🔀 Virtual-Circuit Networks</h4>
      <p style="font-size:14.5px;">A hybrid of circuit-switched and datagram ideas: has Setup and Teardown phases like circuit switching, but data is still packetized. All packets of one connection follow the <strong>same path</strong>. Normally implemented at the <strong>Data-link layer</strong>.</p>
    </div>
  </div>

  <h3>Datagram routing</h3>
  <p>Each switch keeps a simple <strong>routing table</strong> mapping destination address → output port.</p>
  ${fig("unit2","routing-table-switch-diagram.jpg","A switch's routing table: destination address 1232 → port 1, 4150 → port 2, 9130 → port 3.")}
  <p style="text-align:center; font-weight:700; background:var(--bg); padding:10px; border-radius:10px;">Datagram delay = 3T + 3τ + w₁ + w₂</p>
  <p style="font-size:14.5px; color:var(--ink-soft);">(3 transmission times + 3 propagation delays + the waiting time queued at each intermediate switch)</p>
  ${fig("unit2","datagram-network-delay-diagram.jpg","Datagram delay stacking up: transmission times, propagation delays, and per-switch waiting.")}

  <h3>Virtual-Circuit addressing: global vs local</h3>
  <p>Setup uses a <strong>global address</strong> (unique across the whole network). Actual data transfer instead uses a small, switch-local <strong>Virtual-Circuit Identifier (VCI)</strong> — and crucially, a frame's VCI gets <strong>translated</strong> to a new value at every switch it passes through.</p>
  ${fig("unit2","virtual-circuit-network-diagram.jpg","A virtual circuit threading through several switches from source to destination.")}
  ${fig("unit2","vci-addressing-diagram.jpg","How a VCI is translated hop by hop as a frame moves through each switch's table.")}

  <h3>3 phases of a virtual circuit</h3>
  <div class="flow-grid">
    <div class="flow-card"><h4>1️⃣ Setup</h4><p style="font-size:14.5px;">The request travels A→Switch1→Switch2→Switch3→B, each switch building an (in-port, in-VCI) → (out-port, out-VCI) table entry.</p></div>
    <div class="flow-card"><h4>✅ Acknowledgment</h4><p style="font-size:14.5px;">Travels back B→A, filling in the outgoing VCI values at every hop along the way.</p></div>
    <div class="flow-card"><h4>2️⃣ Data Transfer</h4><p style="font-size:14.5px;">Data flows A→B; each switch relabels the VCI according to its table as the frame passes through.</p></div>
  </div>
  ${figGrid("unit2",[["virtual-circuit-setup-phase.jpg","Setup phase — the request builds a VCI mapping table entry at every switch."],["virtual-circuit-acknowledgment-phase.jpg","Acknowledgment phase — travelling back and filling in outgoing VCI values."],["virtual-circuit-data-transfer-phase.jpg","Data-transfer phase — each switch relabels the VCI as frames pass through."]])}
  <p>Teardown: A sends a special teardown-request frame after its last data; B replies with a teardown confirmation; every switch along the path deletes its table entry.</p>

  <p style="text-align:center; font-weight:700; background:var(--bg); padding:10px; border-radius:10px; margin-top:16px;">Virtual-circuit delay = 3T + 3τ + setup delay + teardown delay</p>
  <p style="font-size:14.5px; color:var(--ink-soft);">If resources are reserved during setup, there's no more per-packet waiting during data transfer — contrast this with the datagram formula, which has w₁+w₂ waiting time baked into every packet.</p>
  ${fig("unit2","virtual-circuit-delay-diagram.jpg","Virtual-circuit delay: one-time setup and teardown delay, but smooth data transfer in between.")}

  ${remember(["Datagram: every packet independent, network-layer, routed by a simple table, delay = 3T+3τ+w₁+w₂","Virtual-circuit: setup/data/teardown phases, data-link layer, same path for every packet, VCI relabelled hop-by-hop","Datagram trades consistency for simplicity; virtual-circuit trades a setup cost for smoother data transfer"])}
`;

CONTENT.switcharch = `
  ${explain(`<p>What's actually happening inside a switch when it moves data from an input port to an output port? Two different technologies, plus what a modern packet switch looks like on the inside.</p>`)}

  <div class="flow-grid">
    <div class="flow-card">
      <h4>🔲 Space-Division Switch</h4>
      <p style="font-size:14.5px;">Paths through the switch are kept spatially separate. Originally built for analog networks, still used in digital ones today.</p>
    </div>
    <div class="flow-card">
      <h4>⏱️ Time-Division Switch</h4>
      <p style="font-size:14.5px;">Uses TDM <em>inside</em> the switch itself, instead of separate physical paths — no crosspoints needed, but processing adds delay.</p>
    </div>
  </div>

  <h3>Crossbar & Multistage (space-division)</h3>
  <p>A <strong>crossbar switch</strong> is the simplest space-division design: a grid connecting n inputs to k outputs, with a crosspoint at every intersection — any input can reach any output by closing the right crosspoint. The catch: it needs n×k crosspoints, most of them idle at any moment — expensive to scale.</p>
  <p>A <strong>multistage switch</strong> cascades smaller crossbar stages to cut the crosspoint count way down, trading fewer crosspoints for the possibility of internal blocking.</p>
  ${figGrid("unit2",[["crossbar-switch-diagram-photo.jpg","A crossbar switch — a full grid of crosspoints connecting every input to every output."],["multistage-switch-diagram.jpg","A multistage switch — smaller crossbar stages cascaded to reduce crosspoint count."]])}

  <h3>Time-Slot Interchange (TSI)</h3>
  <p>The most popular time-division switching technology. Incoming time slots are written into RAM in arrival order, then a control unit reads them back out in a <em>different</em>, deliberately chosen order (per a mapping table) — effectively reordering, or "switching," the output slots.</p>
  ${fig("unit2","time-slot-interchange-diagram.jpg","TSI: incoming slots written into RAM, then read back out in a reshuffled order to switch them.")}
  <p>Multistage switches can even combine both worlds as a <strong>Time-Space-Time (TST)</strong> switch: input TSI stage → crossbar-like space stage → output TSI stage.</p>
  ${fig("unit2","tst-switch-architecture.png","A TST switch — Time-stage, Space-stage, Time-stage, combining the strengths of both approaches.")}

  <h3>Inside a modern packet switch</h3>
  <p>Four components: <strong>Input ports</strong> and <strong>Output ports</strong> (each running physical + data-link layer functions — reconstructing bits, decapsulating the frame, checking for errors), a <strong>Routing processor</strong> (keeps the routing table), and the <strong>Switching fabric</strong> itself.</p>
  ${figGrid("unit2",[["packet-switch-structure-diagram.jpg","The four building blocks of a packet switch: input ports, output ports, routing processor, switching fabric."],["input-output-port-structure.jpg","Inside a port: physical-layer processor → data-link-layer processor → queue (and reversed on the output side)."]])}

  <h3>Banyan & Batcher-Banyan switching fabric</h3>
  <p>A <strong>Banyan switch</strong> is a multistage, self-routing fabric built from small 2×2 elements — each stage reads one bit of the destination address to decide which way to route the packet. The catch: packets heading to <em>different</em> outputs can still collide internally if their paths happen to cross the same internal link at the same stage.</p>
  <p>The fix is a <strong>Batcher-Banyan</strong> switch: a Batcher stage sorts incoming packets by destination address before they ever reach the Banyan stage, with a "Trap" module catching duplicate requests for the same output in between — this pre-sorted, deduplicated input eliminates the internal collision problem.</p>
  ${figGrid("unit2",[["banyan-switch-routing-diagram.jpg","A Banyan switch routing a packet using successive bits of its destination address."],["batcher-banyan-switch-diagram.jpg","A Batcher-Banyan switch — sorting and deduplicating packets before the Banyan stage to avoid internal collisions."]])}

  ${remember(["Crossbar = simple but needs n×k crosspoints; Multistage = fewer crosspoints, possible blocking","TSI reorders time slots via RAM; TST combines Time+Space+Time stages","A packet switch = input/output ports + routing processor + switching fabric","Banyan routes by address bits but can collide internally; Batcher-Banyan sorts first to avoid that"])}
`;

CONTENT.dllintro = `
  ${explain(`
    <p>In Unit 1 we met the 5-layer TCP/IP stack. The <strong>Data-Link Layer</strong> sits just above the Physical layer, and its job is to get a chunk of data safely across <strong>one single link</strong> — from one node to the very next node, not all the way to the final destination in one shot.</p>
    <p>A <strong>node</strong> is any device that can send or receive at this layer — an end host (like your laptop) or an in-between device (like a router). A <strong>link</strong> is the network connecting two neighbouring nodes.</p>
  `)}

  ${analogy(`<p>Think of sending a parcel across the country by train, changing trains at several junctions. Each individual train ride — from one station to the very next station — is like one "hop" across a link. The Data-Link Layer only worries about getting the parcel safely through <strong>this one leg</strong> of the journey; it doesn't know or care about the whole route. The Network layer (from Unit 1) is the one keeping track of the full end-to-end journey.</p>`)}

  ${figGrid("unit3",[["node-to-node-delivery.jpg","Data-link and physical layers hand a packet forward hop by hop, one link at a time, along the full path."],["node-link-topology.png","Nodes and links — a small slice of the Internet, LANs joined by point-to-point links."]])}

  <h3>What services does the Data-Link Layer provide?</h3>
  <p>It sits between the Network layer (which it serves) and the Physical layer (from which it receives raw bits). Tap each service below to see what it does.</p>
  <div class="diagram">
    <div class="node clickable" data-pop="Wraps the data into a 'frame' so the receiver knows exactly where it starts and ends.">
      <span class="emoji">📦</span>Framing
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="Adds the sender's and receiver's node addresses so the frame reaches the correct neighbouring device.">
      <span class="emoji">🏷️</span>Addressing
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="Makes sure a fast sender doesn't overwhelm a slow receiver's buffer.">
      <span class="emoji">🚦</span>Flow Control
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="Detects (and sometimes corrects) frames that got damaged in transit.">
      <span class="emoji">🛡️</span>Error Control
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="When many devices share the same link, this decides whose turn it is to transmit.">
      <span class="emoji">🎚️</span>Media Access Control
      <div class="node-pop"></div>
    </div>
  </div>

  ${fig("unit3","dll-services-block-diagram.jpg","The five Data-Link Layer services in one block diagram: packetizing, addressing, flow control, error control, and media access control.")}

  ${mistake(`<p>The Data-Link Layer does <strong>not</strong> handle congestion control! Congestion control is "end-to-end" in nature, so it's mainly a job for the Network and Transport layers (some WAN technologies do a little of it, but it isn't a core Data-Link job).</p>`)}

  <h3>Two categories of links</h3>
  <div class="flow-grid">
    <div class="flow-card">
      <h4>📡 Broadcast Link</h4>
      <p style="font-size:14.5px;">Many stations share the same link at once — like everyone in a room hearing the same announcement. Needs a Media Access Control sublayer to decide turns.</p>
    </div>
    <div class="flow-card">
      <h4>➡️ Point-to-Point Link</h4>
      <p style="font-size:14.5px;">Only two devices are connected directly — a private line just between them. No "whose turn is it" problem.</p>
    </div>
  </div>

  ${fig("unit3","link-categories-broadcast-vs-p2p.png","A broadcast (multipoint) link versus a point-to-point (unicast) link.")}

  <h3 style="margin-top:20px;">Two sublayers inside the Data-Link Layer</h3>
  <p>To organize all these jobs, the Data-Link Layer is split into two sublayers:</p>
  ${fig("unit3","dll-sublayers-broadcast-vs-p2p.jpg","The DLC and MAC sublayers on a broadcast link, versus just DLC on a point-to-point link.")}
  ${remember(["DLC (Data Link Control) — handles framing, flow control, and error control between two adjacent nodes, whether the link is broadcast or point-to-point.","MAC (Media Access Control) — only needed on broadcast links, to decide which station gets to send next.","Node = a device (host or router) · Link = the connection between two neighbouring nodes.","The Data-Link Layer works hop-by-hop, not end-to-end."])}
`;

CONTENT.framing = `
  ${explain(`<p>A packet at the Data-Link Layer is called a <strong>frame</strong>. <strong>Framing</strong> means packing a stream of bits into these separate, clearly-marked frames, and stamping each one with a sender address and a destination address — so the receiver always knows "where one frame ends and the next begins."</p>`)}

  ${fig("unit3","framing-encapsulation-example.png","The same datagram gets wrapped into different frame types as it crosses two different kinds of links on its way to the destination.")}
  ${fig("unit3","framing-bits-to-frames.jpg","A raw bit stream at the physical layer gets packed into clearly separated frames at the data-link layer.")}

  <h3>Why not just send the whole message as ONE giant frame?</h3>
  <p>It's technically possible, but it's a bad idea, for two reasons:</p>
  ${remember(["A giant frame makes flow control and error control very inefficient — think how awkward it would be to manage one enormous parcel instead of several small ones.","Even a single corrupted bit would force you to resend the <em>entire</em> huge frame — instead of just one small piece."])}

  <div class="framebar">
    <div class="frameseg flag">Flag</div>
    <div class="frameseg">Header <span class="sub">addresses</span></div>
    <div class="frameseg data" style="flex:2 1 120px;">Data <span class="sub">from upper layer</span></div>
    <div class="frameseg">Trailer <span class="sub">error check</span></div>
    <div class="frameseg flag">Flag</div>
  </div>
  <p style="text-align:center; color:var(--ink-soft); font-size:14px; margin-top:-8px;">A typical frame — the header carries addressing/control info, the trailer carries error-detection bits, and flags mark the start/end.</p>

  ${fig("unit3","frame-structure-header-trailer.png","The same frame anatomy in the original textbook diagram — header, packet, and trailer between two flags.")}

  <h3 style="margin-top:22px;">Frame size: fixed or variable?</h3>
  <div class="flow-grid">
    <div class="flow-card">
      <h4>📏 Fixed-Size Framing</h4>
      <p style="font-size:14.5px;">Every frame is exactly the same length, called a <strong>cell</strong>. Since the length never changes, there's no need to mark where one frame ends!</p>
    </div>
    <div class="flow-card">
      <h4>📐 Variable-Size Framing</h4>
      <p style="font-size:14.5px;">Mostly used in LANs. Since frames can be any length, we need a clear way to mark the end of one frame and the start of the next.</p>
    </div>
  </div>

  <h3 style="margin-top:22px;">Marking frame boundaries — two approaches</h3>
  <div class="tabbar" id="framingTabs">
    <button class="tabbtn active" data-tab="byte">🔤 Byte-Oriented</button>
    <button class="tabbtn" data-tab="bit">🔘 Bit-Oriented</button>
  </div>

  <div class="tabpanel active" data-tab="byte">
    <div class="card">
      <p>Data here is made of 8-bit characters (like ASCII). To mark where a frame starts and ends, we add a special 1-byte <strong>flag</strong> both before and after the frame.</p>
      <p><strong>The problem:</strong> what if the flag's exact bit-pattern accidentally shows up inside the actual data being carried? The receiver would mistake it for the end of the frame!</p>
      <p><strong>The fix — Byte Stuffing:</strong> whenever the flag pattern (or a special "escape" pattern) appears inside the data, the sender sneaks in one extra <strong>ESC (escape) byte</strong> right before it. The receiver, seeing an ESC byte, knows to remove it and treat the very next byte as ordinary data — not as a real flag.</p>
      ${fig("unit3","flag-delimited-frame-structure.jpg","A character-oriented frame: a Flag byte marks both the start and the end.")}
      ${figGrid("unit3",[["byte-stuffing-basic-example.jpg","An ESC byte inserted right before a FLAG byte that's really just part of the data."],["byte-stuffing-esc-flag-example.jpg","The fuller case: stuffing handles both an accidental ESC byte and an accidental FLAG byte in the data."]])}
      ${fig("unit3","byte-stuffing-unstuffing-frame.jpg","A complete frame view: stuffing extra bytes in on send, and removing them again on receive.")}
      <div class="framebar" style="margin-top:16px;">
        <div class="frameseg data">A</div>
        <div class="frameseg stuffed">ESC</div>
        <div class="frameseg data">FLAG <span class="sub">as data</span></div>
        <div class="frameseg data">B</div>
      </div>
      <p style="text-align:center; color:var(--ink-soft); font-size:13.5px; margin-top:-6px;">Original data A · FLAG · B → after stuffing, an extra ESC byte is inserted just before the "FLAG" that's really just data.</p>
    </div>
  </div>

  <div class="tabpanel" data-tab="bit">
    <div class="card">
      <p>Here the data section is just a long stream of bits (interpreted by the upper layer as text, graphics, audio, etc.). Most protocols use one special 8-bit flag, <code>01111110</code>, to mark the start and end of every frame.</p>
      ${fig("unit3","bit-oriented-framing-flag.png","A bit-oriented frame using the 8-bit flag pattern 01111110 as its delimiter.")}
      <p><strong>The fix — Bit Stuffing:</strong> whenever <strong>five consecutive 1s</strong> appear in the actual data (which could be mistaken for part of the flag pattern), the sender inserts one extra <strong>0</strong> right after them. The receiver reverses this — whenever it sees five 1s followed by a stuffed 0, it simply removes that 0.</p>
      ${fig("unit3","bit-stuffing-example.png","An extra 0 inserted right after five consecutive 1s, so the data can never be mistaken for the flag pattern.")}
      ${fig("unit3","bit-stuffing-unstuffing-frame.jpg","A complete frame view: bits stuffed in on send, and unstuffed again on receive.")}
      <div class="framebar" style="margin-top:16px;">
        <div class="frameseg data">0</div><div class="frameseg data">1</div><div class="frameseg data">1</div><div class="frameseg data">1</div><div class="frameseg data">1</div><div class="frameseg stuffed">1</div><div class="frameseg data">1</div><div class="frameseg data">0</div>
      </div>
      <p style="text-align:center; color:var(--ink-soft); font-size:13.5px; margin-top:-6px;">Five 1s in a row, then a stuffed extra bit (highlighted) is inserted right after, so the receiver never confuses this run with the real flag <code>01111110</code>.</p>
    </div>
  </div>

  ${remember(["A frame = Flag + Header + Data + Trailer + Flag","Fixed-size frames (cells) don't need boundary markers; variable-size frames do","Byte stuffing → insert an extra ESC byte before an accidental flag/ESC pattern in the data","Bit stuffing → insert an extra 0 after five consecutive 1s in the data"])}
`;

CONTENT.flowerr = `
  ${explain(`<p>Two more essential Data-Link jobs: making sure the sender doesn't overwhelm the receiver (<strong>flow control</strong>), and making sure damaged frames get caught (<strong>error control</strong>).</p>`)}

  <h3>🚦 Flow Control</h3>
  <p>Picture a <strong>producer</strong> (sending node) pushing out frames, and a <strong>consumer</strong> (receiving node) that has to process each one. If the producer is faster, the consumer's memory can overflow!</p>
  <p>The usual fix: give both the sender and receiver a <strong>buffer</strong> — a set of memory locations that can temporarily hold frames. When the receiver's buffer gets full, it simply tells the sender to <strong>slow down or stop</strong> pushing more frames, until there's room again.</p>

  ${fig("unit3","flow-control-producer-diagram.png","A producer pushing frames toward a consumer, with a flow-control feedback path telling it when to slow down.")}

  ${analogy(`<p>It's exactly like a car park with limited spaces (the buffer). Once it's full, the attendant at the gate (flow control) tells incoming cars to wait outside, rather than letting them pile up with nowhere to park.</p>`)}

  <h3 style="margin-top:22px;">🛡️ Error Control</h3>
  <p>Every frame travels as bits turned into electromagnetic signals — and signals can get corrupted by noise along the way. To catch this, the sender adds redundant check bits (like a <strong>CRC</strong>) to the frame; the receiver recalculates and compares. If a frame turns out corrupted, it is simply <strong>discarded</strong>.</p>
  <p>There are two ways to handle this:</p>
  <div class="flow-grid">
    <div class="flow-card">
      <h4>1️⃣ Detection Only</h4>
      <p style="font-size:14.5px;">The receiver just discards corrupted frames silently — no acknowledgment sent back at all.</p>
    </div>
    <div class="flow-card">
      <h4>2️⃣ Detection + Acknowledgment</h4>
      <p style="font-size:14.5px;">The receiver sends back an <strong>ACK</strong> for good frames, so the sender knows delivery was reliable — and can resend if it doesn't hear back.</p>
    </div>
  </div>
  <p style="margin-top:12px;">In fact, one ACK frame conveniently does <strong>double duty</strong> — it silently means both: <em>"I received the frame"</em> (flow control — you can send the next one now) <strong>and</strong> <em>"it arrived correctly"</em> (error control).</p>

  <h3 style="margin-top:22px;">Connectionless vs Connection-Oriented Protocols</h3>
  <div class="flow-grid">
    <div class="flow-card">
      <h4>🔓 Connectionless</h4>
      <p style="font-size:14.5px;">Frames are sent independently, with no relationship to each other — not numbered, not ordered. Most LAN Data-Link protocols work this way.</p>
    </div>
    <div class="flow-card">
      <h4>🔗 Connection-Oriented</h4>
      <p style="font-size:14.5px;">Has Setup → Transfer → Teardown phases. Frames are numbered and ordered, and the receiver waits until it has the whole set. Used in some point-to-point protocols and some wireless/WAN links.</p>
    </div>
  </div>

  ${remember(["Flow control = don't overwhelm the receiver (uses buffers)","Error control = catch corrupted/lost frames (uses CRC + optional ACK)","An ACK can serve BOTH flow control and error control at once","Connectionless = independent, unordered frames · Connection-oriented = numbered, ordered, with setup/teardown"])}
`;

CONTENT.arq = `
  ${explain(`<p>Now let's see how flow control and error control actually work together, through a couple of classic protocols. (Two more advanced ones — Go-Back-N and Selective-Repeat — build on these ideas but are beyond what we'll cover here.)</p>`)}

  ${fig("unit3","fsm-notation-diagram.jpg","How to read a finite-state-machine diagram: states, events, and the actions they trigger.")}

  <h3>1️⃣ The Simple Protocol</h3>
  <p>Exactly what it sounds like — <strong>no flow control, no error control</strong>. Whenever the sender has a packet, it just wraps it in a frame and fires it off. The receiver is always ready and simply accepts every frame that arrives. It only works if the receiver is guaranteed to always be fast enough and the link is error-free — rarely true in real life!</p>
  ${figGrid("unit3",[["simple-protocol-node-diagram.jpg","The Simple protocol's block diagram — network and data-link sublayers at each node."],["simple-protocol-timing-diagram.jpg","The Simple protocol's timing diagram: packets flow straight through with no flow or error control at all."]])}
  ${fig("unit3","fsm-simple-protocol.jpg","The finite state machine for the Simple protocol — a sending node and a receiving node, each with just one state.")}

  <h3 style="margin-top:22px;">2️⃣ Stop-and-Wait Protocol</h3>
  <p>This one adds <strong>both</strong> flow control and error control. The rules are simple:</p>
  ${remember(["Send exactly ONE frame, then STOP and WAIT for an acknowledgment before sending the next one","Add a CRC to every frame so the receiver can detect corruption","Start a timer when a frame is sent — if no ACK arrives before it expires, resend the frame","Only one frame and one ACK are ever 'in the channel' at any given moment"])}
  ${fig("unit3","stop-and-wait-protocol-diagram.png","Stop-and-Wait: Frame+CRC goes out, ACK+CRC comes back, with a timer running at the sender.")}
  ${fig("unit3","fsm-stop-and-wait.jpg","The finite state machine for Stop-and-Wait — a sender that's either Ready or Blocking, waiting on an ACK.")}

  <h3 style="margin-top:20px;">The hidden problem: duplicate frames</h3>
  ${fig("unit3","stop-and-wait-lost-frame-issue.jpg","A lost frame or lost ACK in plain Stop-and-Wait — exactly the scenario that motivates adding sequence numbers.")}
  <p>Imagine the sender's frame arrives fine, and the receiver sends back an ACK — but that ACK gets lost. The sender's timer runs out, so it (reasonably) resends the very same frame. Now the receiver gets <strong>two copies</strong> of the same data, with no way to tell they're duplicates!</p>

  <div class="card" style="background:var(--bg);">
    <p style="margin:0 0 8px;"><strong>The fix:</strong> add a small <strong>sequence number</strong> (just 0 or 1, alternating) to every data frame, and a matching <strong>acknowledgment number</strong> to every ACK. This upgraded version is called <strong>Stop-and-Wait ARQ</strong> (Automatic Repeat reQuest).</p>
    <ul style="margin:0;">
      <li>Sender sends <strong>Frame 0</strong> → receiver replies <strong>ACK 1</strong> (meaning "I got frame 0, send me frame 1 next").</li>
      <li>Sender sends <strong>Frame 1</strong>, but it's lost → timeout → sender resends <strong>Frame 1</strong> → receiver replies <strong>ACK 0</strong>.</li>
      <li>Sender sends <strong>Frame 0</strong> again, but this time the receiver's ACK gets lost → sender times out and resends <strong>Frame 0</strong> → the receiver notices it already has frame 0 (it's expecting frame 1), so it quietly <strong>discards the duplicate</strong> and just resends the ACK.</li>
    </ul>
  </div>
  ${fig("unit3","stop-and-wait-arq-sequence-numbers.jpg","Stop-and-Wait ARQ in action — Frame 0/1 sequence numbers correctly surviving a lost frame and a lost ACK.")}

  ${analogy(`<p>It's like posting letters one at a time and waiting for a "received!" postcard before mailing the next one. If the postcard itself gets lost in the post, you might resend a letter that actually already arrived — unless every letter is numbered, so your friend can spot "oh, I already have letter #0" and just quietly resend the postcard instead of being confused twice over.</p>`)}

  <h3 style="margin-top:22px;">Piggybacking</h3>
  <p>When two devices are both sending data to each other (not just one direction), it's wasteful to send a separate ACK frame every single time. Instead, a node can attach ("piggyback") its acknowledgment onto a data frame it was going to send anyway — one frame now does two jobs at once, saving bandwidth.</p>
  ${fig("unit3","piggybacking-diagram.png","Piggybacking: Host A and Host B each attach their ACK onto a data frame heading the other way, instead of sending a separate ACK frame.")}

  ${mistake(`<p>Stop-and-Wait only needs a <strong>single bit</strong> (0 or 1) for its sequence number — because only one frame is ever "in flight" at a time, there are never more than two situations to tell apart (this one, or the previous one).</p>`)}
`;

CONTENT.errortypes = `
  ${explain(`<p>Whenever bits travel from one point to another, interference (noise) can flip some of them along the way. This is what we call an <strong>error</strong>.</p>`)}

  <h3>Two types of errors</h3>
  <div class="flow-grid">
    <div class="flow-card">
      <h4>🎯 Single-Bit Error</h4>
      <p style="font-size:14.5px;">Only <strong>one</strong> bit in the data unit changes — say, from 0 to 1. Example: <code>00000010</code> → <code>00001010</code> (only the 5th bit flipped).</p>
    </div>
    <div class="flow-card">
      <h4>💥 Burst Error</h4>
      <p style="font-size:14.5px;"><strong>Two or more</strong> bits change — and they don't even need to be right next to each other, only within the same short span of bits.</p>
    </div>
  </div>

  <p style="margin-top:14px;">Burst errors are the more common real-world troublemaker, because noise usually doesn't strike for just one bit's worth of time. <strong>Worked example:</strong> if data is sent at 1000 bps and a noise burst lasts 1/100 of a second, it can corrupt up to <strong>1000 × 0.01 = 10 bits</strong> in a row.</p>

  ${fig("unit3","single-bit-vs-burst-error.png","Single-bit error versus burst error, shown side by side across the same bit sequence.")}

  ${analogy(`<p>A single-bit error is like one word in a sentence getting smudged by a coffee spill. A burst error is like a whole splash covering several words in a row — much harder for the reader to guess what was originally there.</p>`)}

  <h3 style="margin-top:22px;">The big idea: Redundancy</h3>
  <p>To catch (or fix) errors, we send a few <strong>extra bits</strong> along with the actual data — computed from the data itself using some agreed-upon rule. The receiver redoes the same calculation and compares. These extra bits are added by the sender and stripped off by the receiver once checked.</p>
  ${fig("unit3","redundancy-check-diagram.jpg","Redundancy in action: the sender's generator function adds check bits; the receiver's checker function decides accept or reject.")}

  <h3 style="margin-top:22px;">Detection vs Correction</h3>
  <p><strong>Correcting</strong> an error is much harder than simply <strong>detecting</strong> one:</p>
  <ul>
    <li><strong>Detection</strong> just answers Yes/No — "did anything go wrong?" It doesn't even care how many bits were affected; one flipped bit is treated the same as a whole burst.</li>
    <li><strong>Correction</strong> needs to know exactly <em>how many</em> bits are wrong, and precisely <em>where</em> — which gets expensive fast. In an 8-bit unit, there are 8 different single-bit positions to consider; if two bits could be wrong at once, there are 28 different possible position-pairs to check!</li>
  </ul>

  ${remember(["Single-bit error = 1 bit flips · Burst error = 2+ bits flip within a span","Redundancy = extra check bits, added by sender, verified & removed by receiver","Detection only answers Yes/No · Correction must pinpoint the exact bad bit(s) — much harder","Coding schemes fall into two families: block coding and convolutional coding"])}
`;

CONTENT.crc = `
  ${explain(`<p>The most common error-detection family used in networks is <strong>block coding</strong> — and its most popular real-world member is the <strong>CRC (Cyclic Redundancy Check)</strong>.</p>`)}

  <h3>Block Coding — the basic idea</h3>
  <p>We take a <strong>k</strong>-bit dataword and turn it into a longer <strong>n</strong>-bit codeword (n &gt; k) using a fixed rule (a "generator"). Since n &gt; k, only <em>some</em> of all possible n-bit patterns are actually valid codewords — the rest are "invalid." If a corrupted codeword happens to land on one of those invalid patterns, the receiver can tell something went wrong!</p>
  ${fig("unit3","block-coding-encoder-decoder.png","Block coding's big picture: dataword to codeword encoding at the sender, checking and decoding at the receiver.")}

  <div class="card" style="background:var(--bg);">
    <p style="margin:0 0 8px;"><strong>Tiny example:</strong> a 2-bit dataword → 3-bit codeword rule: <code>00→000</code>, <code>01→011</code>, <code>10→101</code>, <code>11→110</code>.</p>
    <p style="margin:0;">Say <code>011</code> is sent, but noise flips its first bit to <code>111</code>. Since <code>111</code> isn't in our valid list, the receiver correctly flags an error. ✅</p>
  </div>
  ${fig("unit3","block-coding-corruption-scenarios-table.jpg","A dataword/codeword table for a small block code, with several worked corruption-detection scenarios.")}

  ${mistake(`<p>No error-detection scheme is perfect! In the same tiny example above, if <code>011</code> gets corrupted to <code>000</code> instead, the receiver is fooled — <code>000</code> also happens to be a <em>valid</em> codeword (for dataword 00), so this particular error slips through undetected. Stronger codes (like CRC, below) are designed to make this kind of "lucky escape" far less likely.</p>`)}

  <h3 style="margin-top:22px;">Cyclic Codes → CRC</h3>
  <p><strong>Cyclic codes</strong> are block codes with a neat extra property: if you rotate ("cyclically shift") a valid codeword, the result is <em>also</em> a valid codeword. Example: if <code>1011000</code> is valid, then <code>0110001</code> (shifted left by one) is valid too.</p>
  <p>The <strong>Cyclic Redundancy Check (CRC)</strong> is the most widely used cyclic code — it's what runs behind the scenes on nearly every LAN and WAN link.</p>
  ${fig("unit3","crc-dataword-codeword-table.jpg","A table of 4-bit datawords mapped to their CRC codewords.")}

  <h3 style="margin-top:20px;">How CRC actually works — a worked example</h3>
  <p>The sender and receiver agree in advance on a fixed binary number called the <strong>divisor</strong>. The sender does long division (using a special XOR-based binary division) of the dataword against this divisor — the <strong>remainder</strong> becomes the extra check bits attached to the message.</p>
  ${fig("unit3","crc-encoder-decoder-block-diagram.png","The CRC encoder/decoder block diagram: generator, divisor, syndrome, and the final accept/discard decision.")}

  ${more("🔎 See the full worked example (Dataword 1001, Divisor 1011)", `
    <p><strong>Step 1 — Sender encodes:</strong> append three 0s to the dataword <code>1001</code> → <code>1001000</code>. Divide this by the divisor <code>1011</code> using XOR instead of ordinary subtraction. The remainder that comes out is <code>110</code>.</p>
    ${fig("unit3","crc-encoder-worked-example.png","The CRC encoder's binary long division, step by step, producing the remainder.")}
    ${fig("unit3","and-xor-gate-truth-tables.png","The AND and XOR gate truth tables — CRC division uses XOR wherever ordinary subtraction would normally go.")}
    <p><strong>Step 2 — Build the codeword:</strong> Codeword = Dataword + Remainder = <code>1001</code> + <code>110</code> = <code>1001110</code>. This is what actually gets sent.</p>
    <p><strong>Step 3 — Receiver checks (no error):</strong> the receiver divides the whole received codeword <code>1001110</code> by the same divisor <code>1011</code>. The result (called the <strong>syndrome</strong>) is <code>000</code> — all zeros means <strong>Accept</strong>, no error found.</p>
    ${fig("unit3","crc-decoder-worked-example-uncorrupted.png","The CRC decoder on an uncorrupted codeword — a zero syndrome, so the dataword is accepted.")}
    <p><strong>Step 4 — Receiver checks (with an error):</strong> suppose noise flips a bit, so <code>1000110</code> arrives instead. Dividing this by <code>1011</code> gives a syndrome of <code>011</code> — <strong>not</strong> all zeros, so the receiver knows this frame is corrupted and <strong>discards</strong> it.</p>
    ${fig("unit3","crc-decoder-worked-example-corrupted.png","The CRC decoder on a corrupted codeword — a nonzero syndrome, so the frame is discarded.")}
  `)}

  ${analogy(`<p>It's the same idea as a check digit on a bank account number or an ISBN book code — one extra digit, computed from all the others by a fixed rule, that lets you instantly catch a typo without needing to double-check every single digit by hand.</p>`)}

  ${remember(["Block coding: k-bit dataword → n-bit codeword; only some n-bit patterns are 'valid'","No code catches every possible error — but a well-chosen one makes it extremely unlikely","Cyclic code = rotating a valid codeword gives another valid codeword","CRC = codeword's remainder (syndrome) is 0 at the receiver → accept; nonzero → discard"])}
`;

CONTENT.checksum = `
  ${explain(`<p>The <strong>checksum</strong> is another error-detection technique — one that can be used on a message of <em>any</em> length, and is mostly used at the Network and Transport layers (rather than the Data-Link layer, where CRC usually rules).</p>`)}

  ${fig("unit3","checksum-block-diagram.jpg","The checksum's big picture: a generator at the sender, a checker at the receiver, working over the message plus its checksum.")}

  <h3>The naive idea — and its problem</h3>
  <p>Suppose we want to send the numbers <code>(7, 11, 12, 0, 6)</code>. The simplest checksum idea: just add them up (7+11+12+0+6 = <strong>36</strong>) and send the sum along too. But there's a catch — if every number fits in 4 bits (max value 15), the sum 36 <em>doesn't</em> fit in that same 4-bit space!</p>

  <h3 style="margin-top:18px;">The fix — One's Complement Arithmetic</h3>
  <p>In one's complement math, if a number overflows past its bit-width, the extra leftmost bits are simply wrapped around and <strong>added back</strong> into the rightmost bits.</p>
  <div class="card" style="background:var(--bg);">
    <p style="margin:0;"><strong>Worked example:</strong> 36 in binary is <code>100100</code>. Splitting into the extra bits <code>10</code> and the fitting 4 bits <code>0100</code>, then adding them: <code>10 + 0100 = 0110</code> = <strong>6</strong>. So the "wrapped" sum is 6.</p>
    <p style="margin:8px 0 0;">The checksum itself is the <strong>one's complement</strong> (flip every bit) of that sum: complement of <code>0110</code> is <code>1001</code> = <strong>9</strong>.</p>
  </div>
  ${fig("unit3","checksum-ones-complement-wraparound.jpg","Wrapping a value that's too big for its bit-width, using one's-complement addition.")}
  <p style="margin-top:10px;">So the sender actually transmits: <code>(7, 11, 12, 0, 6, 9)</code> — the original numbers plus the checksum 9.</p>
  ${fig("unit3","checksum-sender-side-diagram.jpg","The sender's side: data values, an initially-zeroed checksum slot, the sum, and the final checksum, all forming the outgoing packet.")}

  <h3 style="margin-top:20px;">How the receiver checks it</h3>
  <p>The receiver adds up <em>all six</em> numbers received (including the checksum itself), using the same wraparound one's-complement addition. If nothing was corrupted, this total will always come out as a <strong>"negative zero"</strong> — a number with every bit set to 1 (since a number plus its own complement always does this). Complementing that result one more time gives a clean, ordinary <strong>zero</strong> — confirming the data arrived safely.</p>
  ${fig("unit3","checksum-receiver-side-diagram.jpg","The receiver's side: the received checksum, a recomputed sum, and a calculated checksum of zero confirming clean data.")}

  ${more("🔎 Want to know more? The Internet Checksum algorithm", `
    <p><strong>Sender:</strong> (1) split the message into 16-bit words. (2) Set the checksum word to zero initially. (3) Add all the words (including the zeroed checksum slot) using one's complement addition. (4) Complement the sum — that becomes the real checksum. (5) Send it along with the data.</p>
    <p><strong>Receiver:</strong> (1) receive the message + checksum. (2) Split into 16-bit words again. (3) Add all the words (including the received checksum) with one's complement addition. (4) Complement the result. (5) If it's exactly 0 → accept the message; otherwise → reject it.</p>
    ${fig("unit3","internet-checksum-procedure-table.png","The Internet checksum procedure, step by step, at both the sender and the receiver.")}
    ${fig("unit3","checksum-algorithm-flowchart.png","The checksum algorithm as a flowchart — two's-complement addition followed by a final one's-complement conversion.")}
    <p style="margin-top:8px;">Two faster relatives worth knowing by name: the <strong>Fletcher checksum</strong> and the <strong>Adler checksum</strong> — both compute two running totals side-by-side and combine them, giving stronger error-catching than a plain sum without the full cost of a CRC.</p>
    ${fig("unit3","fletcher-adler-checksum-flowcharts.png","The Fletcher checksum and Adler checksum algorithms, side by side.")}
  `)}

  ${analogy(`<p>It's exactly like adding up every price on a shopping receipt and printing the total at the bottom. If someone later recomputes the sum of all the line items and it doesn't match the printed total, they instantly know a price (or the total itself) is wrong — without having to check the handwriting on every single line.</p>`)}

  ${mistake(`<p>Checksum is <strong>weaker</strong> than CRC — it uses far fewer bits (often just 16) to protect a message that could be thousands of bits long, so it's occasionally possible for two different corrupted messages to accidentally produce a matching checksum, letting the error sneak through.</p>`)}

  ${remember(["Checksum works on messages of any length; mainly used at Network/Transport layer","One's complement addition: overflow bits wrap around and get added back in","Checksum sent = one's complement of the (wrapped) sum","Receiver adds everything including the checksum → should get all-1s → complement → should be 0"])}
`;

CONTENT.macintro = `
  ${explain(`<p>So far we've assumed one link, one sender, one receiver. But often, many stations share <strong>one common link</strong> (a "broadcast link") — like several people on the same phone line. We need a <strong>Multiple Access protocol</strong> to decide who gets to talk and when. All such protocols live in the <strong>Media Access Control (MAC)</strong> sublayer.</p>`)}

  <h3>Three big families of Multiple Access protocols</h3>
  <div class="flow-grid">
    <div class="flow-card">
      <h4>🎲 Random Access</h4>
      <p style="font-size:14.5px;">No station is "in charge." Anyone can try to send whenever they like — with the risk of a collision. Includes: <strong>ALOHA, CSMA, CSMA/CD, CSMA/CA.</strong></p>
    </div>
    <div class="flow-card">
      <h4>🎟️ Controlled Access</h4>
      <p style="font-size:14.5px;">Stations consult each other first — nobody sends unless authorized. Includes: <strong>Reservation, Polling, Token Passing.</strong></p>
    </div>
    <div class="flow-card">
      <h4>🎚️ Channelization</h4>
      <p style="font-size:14.5px;">The link's total capacity is permanently divided up in advance among the stations. Includes: <strong>FDMA, TDMA, CDMA.</strong></p>
    </div>
  </div>

  ${fig("unit3","multiple-access-protocols-taxonomy.png","The full Multiple Access family tree: random-access, controlled-access, and channelization protocols.")}

  ${analogy(`<p>Random access is like a 4-way stop sign — no traffic light, drivers just watch each other and take turns informally (with occasional near-misses!). Controlled access is like an intersection with a traffic police officer directly waving each car through. Channelization is like a road permanently painted with separate lanes — everyone just stays in their own lane the whole time, no negotiation needed.</p>`)}

  ${remember(["Broadcast link = many stations sharing one medium — needs traffic rules (MAC)","Random Access = compete for the link, risk collisions (ALOHA, CSMA, CSMA/CD, CSMA/CA)","Controlled Access = take turns by agreement (Reservation, Polling, Token Passing)","Channelization = the link is pre-divided by frequency, time, or code (FDMA, TDMA, CDMA)"])}
`;

CONTENT.aloha = `
  ${explain(`<p><strong>ALOHA</strong> was the very first random-access protocol, developed at the University of Hawaii in the early 1970s for a wireless radio LAN. Its rule is refreshingly simple: <strong>if you have a frame, just send it.</strong></p>`)}

  <h3>Pure ALOHA</h3>
  <p>Every station sends whenever it wants — with no coordination at all — so collisions are inevitable when two stations transmit at overlapping times. This protocol leans on <strong>acknowledgments</strong>: if a station doesn't hear an ACK before its timeout expires, it assumes a collision happened and gets ready to resend.</p>
  ${fig("unit3","pure-aloha-frame-transmission-timing.jpg","Four stations sending frames in Pure ALOHA — overlapping transmissions collide.")}

  <div class="card" style="background:var(--bg);">
    <p style="margin:0;"><strong>But wait</strong> — if everyone who collided just resent immediately, they'd very likely collide again! So instead, each station waits a random <strong>backoff time (T<sub>B</sub>)</strong> before resending — using <strong>binary exponential backoff</strong>: after the K-th collision, the station picks a random number of slots between 0 and 2<sup>K</sup>−1 to wait. After too many failed attempts (usually 15), it simply gives up.</p>
  </div>
  ${fig("unit3","pure-aloha-protocol-flowchart.png","The Pure ALOHA procedure: send, wait for ACK, and on timeout back off and retry (up to a retransmission limit).")}

  <h3 style="margin-top:20px;">Vulnerable time &amp; throughput</h3>
  <p>A frame is at risk of colliding with any other frame that starts up to one full frame-time (T<sub>fr</sub>) <em>before</em> it, or begins <em>during</em> its own transmission — so pure ALOHA's <strong>vulnerable time is 2 × T<sub>fr</sub></strong>. Working through the probability math gives its throughput:</p>
  ${figGrid("unit3",[["pure-aloha-vulnerable-time-diagram.jpg","Overlapping transmissions from stations A, B and C — the vulnerable window where a collision can happen."],["pure-aloha-vulnerable-time-2tfr.jpg","Pure ALOHA's vulnerable time spelled out: exactly 2 × Tfr."]])}
  <p style="text-align:center; font-weight:700; background:var(--bg); padding:10px; border-radius:10px;">S = G · e<sup>−2G</sup> &nbsp;→&nbsp; best case: only <strong>18.4%</strong> of channel capacity used (at G = 0.5)</p>

  <h3 style="margin-top:20px;">Slotted ALOHA — a simple improvement</h3>
  <p>What if we force every station to send only at the <strong>start of a fixed time slot</strong> (of length T<sub>fr</sub>), instead of at any random instant? Now a frame can only collide with another frame starting in the <em>same</em> slot — cutting the vulnerable time exactly in half, to just <strong>T<sub>fr</sub></strong>.</p>
  ${figGrid("unit3",[["slotted-aloha-frame-timing.jpg","Slotted ALOHA — four stations, all sending only at the start of a time slot."],["slotted-aloha-vulnerable-time.jpg","Slotted ALOHA's vulnerable time, cut down to just one Tfr."]])}
  <p style="text-align:center; font-weight:700; background:var(--bg); padding:10px; border-radius:10px;">S = G · e<sup>−G</sup> &nbsp;→&nbsp; best case: <strong>36.8%</strong> of channel capacity used (at G = 1) — double Pure ALOHA!</p>

  ${analogy(`<p>Pure ALOHA is like a walkie-talkie channel where anyone can key in and start talking at any instant — lots of overlapping chatter. Slotted ALOHA is like a walkie-talkie where you're only allowed to key in right at the sound of a periodic "beep" — since everyone starts together (or not at all), there's simply less overlap to go around.</p>`)}

  ${remember(["Pure ALOHA: send anytime · vulnerable time = 2×Tfr · max throughput 18.4% (G=0.5)","Slotted ALOHA: send only at slot boundaries · vulnerable time = Tfr · max throughput 36.8% (G=1)","G = average number of frames generated per frame-transmission-time (how 'busy' the channel is)","Backoff after a collision: random wait between 0 and 2^K−1 slots (binary exponential backoff)"])}
`;

CONTENT.csma = `
  ${explain(`<p>ALOHA never bothers to check if the channel is already busy — CSMA fixes that with one simple rule: <strong>"sense before you transmit"</strong> (a.k.a. "listen before you talk").</p>`)}

  <h3>CSMA — Carrier Sense Multiple Access</h3>
  <p>CSMA reduces collisions but can't eliminate them entirely, because of <strong>propagation delay</strong> — a station far away may transmit before your signal has even reached it, since it genuinely hasn't "heard" you yet. CSMA's vulnerable time is the propagation time, T<sub>p</sub>.</p>
  ${fig("unit3","csma-wireless-topology.jpg","A shared medium — an access point and several PCs — the setting where CSMA's listen-before-you-talk rule applies.")}
  ${figGrid("unit3",[["csma-collision-signal-propagation.jpg","Two stations' signals overlapping in transit — CSMA reduces collisions but propagation delay means it can't eliminate them."],["csma-vulnerable-time-diagram.jpg","CSMA's vulnerable time — the propagation time it takes a frame to reach the far end of the medium."]])}

  <h3 style="margin-top:20px;">What should a station do if it senses the channel is busy?</h3>
  <div class="flow-grid">
    <div class="flow-card">
      <h4>1-Persistent</h4>
      <p style="font-size:14px;">Keep listening non-stop; the <em>instant</em> the channel goes idle, transmit immediately. Greedy — leads to more collisions if several stations are waiting.</p>
    </div>
    <div class="flow-card">
      <h4>Nonpersistent</h4>
      <p style="font-size:14px;">If busy, wait a <em>random</em> period, then check again. Less greedy, fewer collisions — but wastes some idle channel time.</p>
    </div>
    <div class="flow-card">
      <h4>p-Persistent</h4>
      <p style="font-size:14px;">On a slotted channel: when idle, transmit with probability p, or wait one slot with probability (1−p). A tunable middle ground.</p>
    </div>
  </div>
  ${figGrid("unit3",[["csma-1-persistent-method.jpg","1-persistent CSMA: keep sensing, and transmit the instant the channel goes idle."],["csma-nonpersistent-method.jpg","Nonpersistent CSMA: if busy, wait a random time before sensing again."]])}
  ${fig("unit3","csma-p-persistent-flowchart.jpg","p-persistent CSMA's flowchart — on a slotted channel, transmit with probability p or wait one slot with probability (1-p).")}
  ${fig("unit3","csma-p-persistent-timing.jpg","p-persistent CSMA in action: sensing, waiting a slot, and probabilistically sending.")}

  <h3 style="margin-top:22px;">CSMA/CD — with Collision Detection</h3>
  <p>Used on traditional wired Ethernet. The station keeps <strong>listening while it transmits</strong>. If it detects its own signal colliding with someone else's, it immediately stops and sends a short <strong>jamming signal</strong>, so every other station knows a collision just happened too.</p>
  ${figGrid("unit3",[["csma-cd-collision-detection-timing.jpg","CSMA/CD: the very first bits of two stations' frames collide, and both detect it."],["csma-cd-collision-abortion-diagram.jpg","A collision occurring mid-transmission — both stations detect it and abort immediately."]])}
  <p><strong>Why frames can't be too short:</strong> a station must still be transmitting when a collision signal could possibly reach it back — otherwise it might finish sending and falsely believe delivery succeeded, when the frame was actually destroyed! This is why the frame transmission time must be <strong>at least 2 × T<sub>p</sub></strong> — which is exactly why Ethernet enforces a minimum frame size.</p>
  ${fig("unit3","csma-cd-procedure-flowchart.jpg","The full CSMA/CD procedure: persistence check, transmit/receive, collision detection, and the jamming signal.")}
  ${fig("unit3","csma-cd-energy-level-diagram.jpg","Energy levels on the channel: normal transmission, an abnormal collision spike, and idle silence.")}

  <h3 style="margin-top:22px;">CSMA/CA — with Collision Avoidance</h3>
  <p>Used in <strong>wireless</strong> networks (like Wi-Fi). Here's the catch: a wireless station <strong>can't listen while it transmits</strong> — its own outgoing signal is far too strong compared to any weak incoming signal, so it would never "hear" a collision happening. So instead of detecting collisions, CSMA/CA works hard to <strong>avoid</strong> them in the first place, using three tricks:</p>
  ${remember(["Interframe Space (IFS) — even after sensing 'idle,' wait a short fixed pause before transmitting, giving any higher-priority traffic a chance to go first","Contention Window — pick a random number of extra time slots to wait (using binary exponential backoff), sensing the channel after every slot","Acknowledgments — since collisions can't be directly detected, the receiver must explicitly ACK every frame it gets"])}
  ${figGrid("unit3",[["csma-ca-interframe-space.jpg","The Interframe Space (IFS) — a short mandatory pause after sensing idle, before a station may transmit."],["csma-ca-contention-window.jpg","The contention window that follows the IFS, sized by binary exponential backoff."]])}
  <p>Some CSMA/CA networks add an <strong>RTS/CTS handshake</strong> (Request-to-Send / Clear-to-Send) before the real data: the sender asks first, the receiver grants permission, and every <em>other</em> nearby station that overhears this exchange sets a timer (called a <strong>NAV</strong>) telling it to stay silent until the exchange is done — this also helps solve the tricky "hidden station" problem, where two senders can't hear each other directly but can both reach the same receiver.</p>
  ${fig("unit3","csma-ca-procedure-flowchart.jpg","The full CSMA/CA procedure: carrier sense, contention window, the RTS/CTS handshake, and the ACK timeout.")}
  ${fig("unit3","csma-ca-frame-exchange-timeline.jpg","A complete CSMA/CA frame exchange timeline: DIFS, RTS, CTS, SIFS, data, ACK, and every other station's NAV.")}

  ${mistake(`<p>Wi-Fi uses CSMA/<strong>CA</strong>, not CSMA/CD! It's a very common mix-up — but wireless radios simply cannot detect a collision while transmitting, so they must avoid one instead.</p>`)}

  ${analogy(`<p>CSMA is waiting for a lull in a group conversation before speaking up. CSMA/CD is like immediately stopping mid-sentence and saying "sorry, go ahead" the moment you notice you started talking over someone. CSMA/CA is like a video call with a lot of participants — since you can't always tell who else is about to unmute, everyone politely waits a random short pause and effectively "raises a hand" (RTS) before being given the floor (CTS), so no one talks over each other blindly.</p>`)}
`;

CONTENT.controlled = `
  ${explain(`<p>In controlled access, stations don't just barge in — they consult one another first, so only the authorized station transmits at any moment. There are three flavours.</p>`)}

  <h3>1️⃣ Reservation</h3>
  <p>Time is divided into intervals. Each interval begins with a small <strong>reservation frame</strong>, split into one tiny "minislot" per station, where each station can mark whether it wants to send. Only the stations that reserved a slot get to transmit their actual data during that interval — in order.</p>
  ${fig("unit3","controlled-access-reservation-method.jpg","The reservation method: a reservation frame with one minislot per station, followed by the data frames that were actually reserved.")}

  <h3 style="margin-top:20px;">2️⃣ Polling</h3>
  <p>Needs one <strong>primary</strong> station (the controller) and several <strong>secondary</strong> stations. All communication is routed through the primary, even between two secondaries. The primary always starts the exchange, using one of two functions:</p>
  <div class="flow-grid">
    <div class="flow-card">
      <h4>Select</h4>
      <p style="font-size:14.5px;">Primary has data <em>for</em> a secondary: "Hey B, are you ready?" → B ACKs → primary sends the data → B ACKs again.</p>
    </div>
    <div class="flow-card">
      <h4>Poll</h4>
      <p style="font-size:14.5px;">Primary asks a secondary if <em>it</em> has anything to send: "Hey A, anything for me?" → A replies NAK (nothing) or sends its data, and primary ACKs.</p>
    </div>
  </div>
  ${figGrid("unit3",[["polling-select-function-diagram.jpg","The Select function — the primary sends data TO a chosen secondary."],["polling-poll-function-diagram.jpg","The Poll function — the primary asks a secondary FOR any data it has."]])}

  <h3 style="margin-top:22px;">3️⃣ Token Passing</h3>
  <p>Stations are arranged in a <strong>logical ring</strong> — each one has a predecessor and a successor. A special little frame called a <strong>token</strong> circulates around the ring; whoever is holding it has the right to transmit, and then passes it on. Interestingly, this "ring" doesn't have to be physically wired as a ring — the same logical behaviour can run over several different physical shapes. Tap each card below — and see the textbook's own picture of all the ways a logical ring can be wired.</p>
  ${fig("unit3","token-passing-logical-ring-topologies.jpg","Physical ring, dual ring, bus ring, and star ring — four very different wiring layouts, all implementing the same logical token-passing ring.")}

  <div class="topo-grid" id="ringGrid">
    <div class="topo-card" data-topo="physring">
      <svg viewBox="0 0 200 120"><circle cx="100" cy="60" r="42" fill="none" stroke="var(--rail)" stroke-width="3"/>
        <circle cx="100" cy="18" r="8" fill="var(--rail)"/><circle cx="142" cy="60" r="8" fill="var(--rail)"/>
        <circle cx="100" cy="102" r="8" fill="var(--rail)"/><circle cx="58" cy="60" r="8" fill="var(--rail)"/>
      </svg>
      <h4>Physical Ring</h4>
      <p style="font-size:14px; margin:0;">Stations really are wired in a circle — the token travels station to station around the actual cable.</p>
      <div class="topo-details"><p>A second, counter-spinning "dual ring" version also exists, purely for backup if one ring fails.</p></div>
    </div>
    <div class="topo-card" data-topo="busring">
      <svg viewBox="0 0 200 120"><line x1="15" y1="60" x2="185" y2="60" stroke="var(--rail)" stroke-width="4"/>
        <circle cx="45" cy="60" r="8" fill="var(--rail)"/><circle cx="100" cy="60" r="8" fill="var(--rail)"/><circle cx="155" cy="60" r="8" fill="var(--rail)"/>
      </svg>
      <h4>Bus Ring</h4>
      <p style="font-size:14px; margin:0;">Physically wired as a bus (one shared cable), but the token still passes station-to-station in a fixed logical order.</p>
      <div class="topo-details"><p>Physical shape and "logical" order don't have to match — that's the whole trick of token passing.</p></div>
    </div>
    <div class="topo-card" data-topo="starring">
      <svg viewBox="0 0 200 120"><line x1="100" y1="60" x2="30" y2="20" stroke="var(--rail)" stroke-width="2"/><line x1="100" y1="60" x2="170" y2="20" stroke="var(--rail)" stroke-width="2"/>
        <line x1="100" y1="60" x2="30" y2="100" stroke="var(--rail)" stroke-width="2"/><line x1="100" y1="60" x2="170" y2="100" stroke="var(--rail)" stroke-width="2"/>
        <circle cx="100" cy="60" r="11" fill="var(--spark)"/>
        <circle cx="30" cy="20" r="8" fill="var(--rail)"/><circle cx="170" cy="20" r="8" fill="var(--rail)"/><circle cx="30" cy="100" r="8" fill="var(--rail)"/><circle cx="170" cy="100" r="8" fill="var(--rail)"/>
      </svg>
      <h4>Star Ring</h4>
      <p style="font-size:14px; margin:0;">Physically wired like a star through a central hub, but the hub secretly routes the token in ring order internally.</p>
      <div class="topo-details"><p>Combines the easy cabling of a star topology with the fairness of token passing.</p></div>
    </div>
  </div>

  ${analogy(`<p>Reservation is like booking a time slot at a salon in advance. Polling is like a teacher walking down each row of the class asking "do you have a question?" one student at a time. Token passing is a talking-stick passed around a circle — only whoever is holding the stick may speak, then it moves to the next person.</p>`)}

  ${remember(["Reservation = mini reservation-frame slots before each interval's data","Polling = one primary controls all traffic, using Select (send TO) and Poll (ask FOR data)","Token Passing = a token frame circulates a logical ring; holding it = permission to send","A 'logical ring' can be wired physically as a ring, bus, or star"])}
`;

CONTENT.channelize = `
  ${explain(`<p><strong>Channelization</strong> takes a different approach entirely: instead of competing (random access) or taking turns by asking (controlled access), the link's bandwidth is <strong>permanently pre-divided</strong> among the stations — by frequency, by time, or by a clever code.</p>`)}

  <div class="tabbar" id="channelTabs">
    <button class="tabbtn active" data-tab="fdma">📻 FDMA</button>
    <button class="tabbtn" data-tab="tdma">⏱️ TDMA</button>
    <button class="tabbtn" data-tab="cdma">🔐 CDMA</button>
  </div>

  <div class="tabpanel active" data-tab="fdma">
    <div class="card">
      <p><strong>Frequency-Division Multiple Access:</strong> each station is permanently given its own frequency band and can transmit whenever it likes within that band — the exact same idea as FDM from Unit 2, now used to let independent stations share access rather than just multiplexing an existing stream.</p>
      ${fig("unit3","fdma-frequency-division-diagram.jpg","FDMA: four stations, each with its own permanent frequency band on a shared channel.")}
      ${analogy(`<p>Like separate lanes on a highway — each car (station) stays in its own lane forever, and can drive whenever it wants within that lane.</p>`)}
    </div>
  </div>

  <div class="tabpanel" data-tab="tdma">
    <div class="card">
      <p><strong>Time-Division Multiple Access:</strong> every station shares the same frequency, but takes its own fixed <strong>time slot</strong>, repeating every frame. Since stations may be spread far apart, differences in propagation delay can throw off the timing — so <strong>guard times</strong> and <strong>synchronization (preamble) bits</strong> at the start of every slot help keep everyone lined up correctly.</p>
      ${fig("unit3","tdma-time-division-diagram.jpg","TDMA: four stations, each with its own fixed time slot on a shared frequency.")}
      ${analogy(`<p>Like one single lane governed by a strict traffic light schedule — every car gets an exact, pre-assigned turn to go through.</p>`)}
    </div>
  </div>

  <div class="tabpanel" data-tab="cdma">
    <div class="card">
      <p><strong>Code-Division Multiple Access:</strong> the boldest idea of the three — every station shares the <em>same</em> frequency, at the <em>same</em> time! Instead, each station is given a unique numeric "code" (called a <strong>chip sequence</strong>), carefully chosen so that different codes are <strong>orthogonal</strong> — mathematically, multiplying two different codes together always gives 0, while multiplying a code by itself always gives N (the number of stations).</p>
      ${fig("unit3","cdma-encoding-diagram.jpg","CDMA's big picture: four stations' coded data combined on one shared channel, recovered by correlating with a station's own code.")}
      ${fig("unit3","cdma-chip-sequences-table.jpg","A table of four orthogonal chip sequences (C1-C4), one assigned to each CDMA station.")}
      <p>Every station transmits its data multiplied by its own code, all mixed together onto the shared channel at once. To pick out just one station's message, the receiver multiplies the combined signal by that station's code — thanks to the orthogonal property, every other station's contribution cancels out to 0, leaving only the intended station's data behind.</p>
      <p style="font-size:14.5px; color:var(--ink-soft);">Encoding rule: data bit 1 → +1, data bit 0 → −1, silence → 0.</p>
      ${fig("unit3","cdma-data-bit-encoding.jpg","CDMA's encoding rule: 1 becomes +1, 0 becomes -1, and silence stays 0.")}
      ${more("🧮 See the full worked math (scalars, inner products, and decoding)", `
        ${figGrid("unit3",[["cdma-scalar-multiplication-example.jpg","Multiplying a chip sequence by a scalar."],["cdma-sequence-addition-example.jpg","Adding two chip sequences together, element by element."]])}
        <p>The key trick that makes decoding work: the <strong>inner product</strong> of a code with itself gives N (the number of stations), but the inner product of two <em>different</em> orthogonal codes always gives exactly 0.</p>
        ${figGrid("unit3",[["cdma-inner-product-equal-sequences.jpg","Inner product of a chip sequence with itself — always equals N."],["cdma-inner-product-different-sequences.jpg","Inner product of two different orthogonal sequences — always equals 0."]])}
        <p>Putting it all together — four stations encoding their bits with their own chip sequences, summed onto the channel, and one receiver decoding just its own station's bit via the inner-product trick:</p>
        ${fig("unit3","cdma-encoding-decoding-example.jpg","A full worked CDMA example: four stations encode, the channel carries the sum, and one receiver decodes its own bit.")}
        ${fig("unit3","cdma-signal-level-waveforms.jpg","The actual signal levels on the shared channel, and how summing with a station's code recovers its bit.")}
        <p style="margin-top:8px;">Where do these magic orthogonal codes actually come from? A <strong>Walsh table</strong> generates them systematically for any power-of-two number of stations.</p>
        ${fig("unit3","cdma-walsh-table-sequence-generation.jpg","The Walsh table construction rule, generating W2 and W4 orthogonal chip-sequence matrices.")}
      `)}
      ${analogy(`<p>Imagine a room where everyone talks at once, but each person speaks in their own made-up private language. If you only understand one of those languages, all the other voices blend into meaningless background noise — while your friend's message comes through clearly, because you're specifically "tuned" to their language.</p>`)}
    </div>
  </div>

  ${remember(["Channelization = the link's capacity is divided up in advance, not fought over","FDMA = split by frequency (each station's own permanent band)","TDMA = split by time (each station's own repeating slot; needs guard times & sync bits)","CDMA = split by orthogonal code — everyone transmits together, receiver 'tunes in' using the right code"])}
`;

CONTENT.ethernet = `
  ${explain(`<p><strong>Ethernet</strong> is the most common wired LAN technology in the world — it's the "wire" behind that familiar RJ45 port. It was originally created in the 1970s and has been evolving ever since.</p>`)}

  <h3>IEEE Standards for LANs</h3>
  <p>Different manufacturers used to build incompatible networking equipment. To fix this, <strong>IEEE Project 802</strong> (started in 1985) created standards so equipment from different vendors could actually talk to each other. These were later adopted by ANSI, and in 1987, ISO approved them internationally as <strong>ISO 8802</strong> (equivalent to IEEE 802.2).</p>

  <h3 style="margin-top:20px;">Splitting the Data-Link Layer, IEEE-style</h3>
  <p>IEEE's LAN standards split the Data-Link Layer into two sublayers — the same LLC/MAC split we met earlier, but now made very concrete:</p>
  <div class="flow-grid">
    <div class="flow-card">
      <h4>🔗 LLC (Logical Link Control)</h4>
      <p style="font-size:14.5px;">Handles flow control, error control, and part of framing. There's just <strong>one single LLC</strong>, shared by every kind of IEEE LAN — Ethernet, Token Ring, Token Bus, and so on.</p>
    </div>
    <div class="flow-card">
      <h4>🎚️ MAC (Media Access Control)</h4>
      <p style="font-size:14.5px;">Handles the actual access method — and this part is <strong>different for each LAN type</strong>. Ethernet uses CSMA/CD; Token Ring and Token Bus use token passing.</p>
    </div>
  </div>
  ${fig("unit3","ieee-802-llc-mac-layering-diagram.jpg","How IEEE 802 splits the Data-Link layer: one shared LLC on top, technology-specific MAC and Physical layers underneath.")}

  <h3 style="margin-top:22px;">Ethernet's four generations</h3>
  <p>Ethernet has grown up through four generations, each roughly 10× faster than the one before:</p>
  <div class="flow-grid">
    <div class="flow-card"><h4>1️⃣ Standard Ethernet</h4><p style="font-size:14.5px; font-weight:700;">10 Mbps</p></div>
    <div class="flow-card"><h4>2️⃣ Fast Ethernet</h4><p style="font-size:14.5px; font-weight:700;">100 Mbps</p></div>
    <div class="flow-card"><h4>3️⃣ Gigabit Ethernet</h4><p style="font-size:14.5px; font-weight:700;">1 Gbps</p></div>
    <div class="flow-card"><h4>4️⃣ Ten-Gigabit Ethernet</h4><p style="font-size:14.5px; font-weight:700;">10 Gbps</p></div>
  </div>

  ${mistake(`<p>"Ethernet" and "the Internet" are not the same thing — just like we saw with Network vs Internet back in Unit 1! Ethernet is simply one specific wired LAN technology used to physically connect nearby devices; it's just one small piece of the much bigger picture that makes up the Internet.</p>`)}

  ${remember(["IEEE Project 802 (1985) standardized LAN equipment across manufacturers; later became ISO 8802","LLC = shared by all IEEE LANs (flow/error control, part of framing)","MAC = different per LAN type (CSMA/CD for Ethernet, token passing for Token Ring/Bus)","Ethernet's 4 generations: 10 Mbps → 100 Mbps → 1 Gbps → 10 Gbps"])}
`;

/* ================= QUIZ DATA ================= */
const QUIZZES = {
  quiz1: [
    {q:"What do we call devices connected together so they can exchange information?", opts:["A protocol","A network","A medium","A packet"], a:1},
    {q:"Which of these is NOT one of the 5 basic components of communication?", opts:["Sender","Receiver","Password","Protocol"], a:2},
    {q:"Which characteristic of good data communication refers to data arriving at the RIGHT destination?", opts:["Accuracy","Delivery","Jitter","Timeliness"], a:1},
    {q:"A router or switch is an example of a:", opts:["Host","Connecting device","Protocol","Topology"], a:1},
    {q:"How many characters can ASCII represent?", opts:["128","1,54,998","32","256"], a:0},
    {q:"In which data flow type can both devices send AND receive at the same time?", opts:["Simplex","Half-Duplex","Full-Duplex","None of these"], a:2},
    {q:"Which network criterion is about how much data passes through and how long it takes?", opts:["Security","Reliability","Performance","Topology"], a:2},
    {q:"In which topology does every device connect directly to every other device?", opts:["Bus","Ring","Star","Mesh"], a:3},
    {q:"Which topology depends heavily on one central hub?", opts:["Star","Mesh","Bus","Ring"], a:0},
    {q:"A LAN usually covers:", opts:["An entire country","A single office, building, or campus","The whole world","Only underwater cables"], a:1},
    {q:"In packet switching, data is broken into:", opts:["Circuits","Frames only","Packets","Protocols"], a:2},
    {q:"Which protocol is connection-oriented and provides flow/error/congestion control?", opts:["UDP","IP","TCP","HTTP"], a:2},
    {q:"Which TCP/IP layer is responsible for routing using IP addresses?", opts:["Physical","Network","Application","Data-Link"], a:1},
    {q:"HTTP is mainly used for:", opts:["Sending email","Accessing the World Wide Web","Managing the network","Assigning IP addresses"], a:1},
    {q:"In 1969, the first ARPANET login attempt (Stanford to UCLA) crashed after transmitting only:", opts:["The full word LOGIN","Just 'LO'","Nothing at all","An error code"], a:1},
    {q:"Who invented network email and introduced the @ symbol?", opts:["Vint Cerf","Bob Kahn","Ray Tomlinson","Tim Berners-Lee"], a:2},
    {q:"In 1990, ARPANET was formally retired and replaced by:", opts:["MILNET","NSFNET","CSNET","ANSNET"], a:1},
    {q:"What carries the vast majority of the world's Internet traffic between continents?", opts:["Communication satellites","Undersea (submarine) fiber-optic cables","Radio towers","Weather balloons"], a:1},
    {q:"Before becoming a full Internet Standard, a document is first published as:", opts:["An RFC directly","An Internet Draft","A MILNET memo","A DNS record"], a:1},
    {q:"Which organization oversees both the IETF (engineering) and IRTF (research)?", opts:["ISOC directly","IAB","W3C","ICANN"], a:1},
    {q:"What does 'encapsulation' mean as data moves down the protocol stack?", opts:["Each layer removes a header","Each layer adds its own header","Data gets compressed","Data gets encrypted"], a:1},
    {q:"Which kind of address does the Transport layer use?", opts:["Names","Port numbers","Logical (IP) addresses","Physical (MAC) addresses"], a:1},
    {q:"The OSI model's Application layer in TCP/IP roughly corresponds to OSI's:", opts:["Just the Application layer","Application + Presentation + Session combined","Only Presentation","Only Session"], a:1},
    {q:"Multiplexing at the Transport/Network layer lets many application protocols:", opts:["Run on separate physical cables","Share the same lower layers using port numbers","Avoid using IP addresses","Skip the Network layer entirely"], a:1},
  ],
  quiz2: [
    {q:"Which type of data has continuous values, with no distinct steps?", opts:["Digital data","Analog data","Binary data","Packet data"], a:1},
    {q:"A signal that repeats the same pattern over equal time frames is called:", opts:["Nonperiodic","Periodic","Composite","Discrete"], a:1},
    {q:"Bit rate is measured in:", opts:["Hertz","Bits per second (bps)","Meters","Volts"], a:1},
    {q:"Sending a digital signal directly without converting it to analog is called:", opts:["Broadband transmission","Baseband transmission","Modulation","Multiplexing"], a:1},
    {q:"Modulation (converting digital to analog before sending) is used in:", opts:["Baseband transmission","Broadband transmission","Parallel transmission","TDM"], a:1},
    {q:"Which measures the ACTUAL speed of data flow through a network, not just its potential?", opts:["Bandwidth","Latency","Throughput","Jitter"], a:2},
    {q:"Latency is the sum of:", opts:["Only propagation time","Propagation + Transmission + Queuing + Processing delay","Only transmission time","Only queuing time"], a:1},
    {q:"Which transmission mode sends multiple bits at the same time using multiple wires?", opts:["Serial","Parallel","Asynchronous","Isochronous"], a:1},
    {q:"Which serial mode guarantees data arrives at a fixed, steady rate — important for live audio/video?", opts:["Asynchronous","Synchronous","Isochronous","Parallel"], a:2},
    {q:"FDM (Frequency-Division Multiplexing) divides a channel by:", opts:["Time","Frequency","Address","Distance"], a:1},
    {q:"TDM (Time-Division Multiplexing) divides a channel by:", opts:["Frequency","Wavelength","Time","Voltage"], a:2},
    {q:"Which type of TDM allocates slots only to lines that actually have data ready to send?", opts:["Synchronous TDM","Statistical TDM","FDM","WDM"], a:1},
    {q:"Which guided transmission medium sends signals as pulses of light?", opts:["Twisted-pair cable","Coaxial cable","Fiber-optic cable","Radio waves"], a:2},
    {q:"In circuit switching, network resources are reserved:", opts:["Only when data is actually being sent","For the entire duration of the connection","Never","Only during teardown"], a:1},
    {q:"According to the Fourier series, any composite periodic signal can be broken down into:", opts:["A single sine wave","A sum of simple sine wave harmonics","Only square waves","Random noise"], a:1},
    {q:"A perfectly exact digital signal would theoretically require:", opts:["Zero bandwidth","A fixed, small bandwidth","Infinite bandwidth","Negative bandwidth"], a:2},
    {q:"Fiber-optic cable carries signals as light thanks to which principle?", opts:["Electromagnetic induction","Total internal reflection","Doppler effect","Capacitive coupling"], a:1},
    {q:"Which fiber propagation mode has the LEAST signal distortion over long distances?", opts:["Multimode step-index","Multimode graded-index","Single mode","None — they're all equal"], a:2},
    {q:"Which unguided medium is strictly unidirectional and needs aligned antennas?", opts:["Radio waves","Microwaves","Infrared light bulbs","AM broadcast"], a:1},
    {q:"Why can't infrared signals pass through walls?", opts:["They're too weak","Their high frequency blocks penetration (this also stops room-to-room interference)","They're absorbed by RJ45 connectors","They only work outdoors"], a:1},
    {q:"In a datagram network, individual packets of the same message:", opts:["Must all follow the exact same path","Can travel independently and arrive out of order","Are never allowed to be sent","Always use circuit switching"], a:1},
    {q:"In a virtual-circuit network, what gets translated at every switch a frame passes through?", opts:["The global address","The VCI (Virtual-Circuit Identifier)","The IP header","The CRC"], a:1},
    {q:"A crossbar switch's main drawback is:", opts:["It's too slow","It needs n×k crosspoints, mostly idle at once","It cannot switch digital signals","It only works with fiber-optic cable"], a:1},
    {q:"What does TSI (Time-Slot Interchange) use to reorder time slots?", opts:["A crossbar grid","RAM plus a control unit","A prism","A dedicated fiber"], a:1},
  ],
  quiz3: [
    {q:"What is a packet called at the Data-Link layer?", opts:["Datagram","Segment","Frame","Cell"], a:2},
    {q:"In byte-oriented framing, what does the sender insert right before an accidental flag pattern found inside the data?", opts:["A duplicate flag","An escape (ESC) byte","A CRC byte","A blank byte"], a:1},
    {q:"In bit-oriented framing, an extra 0 is stuffed in after how many consecutive 1s in the data?", opts:["Three","Four","Five","Six"], a:2},
    {q:"What problem does adding sequence numbers (0/1) solve in Stop-and-Wait ARQ?", opts:["Slow receivers","Duplicate frames caused by a lost ACK","Wrong destination addresses","Running out of bandwidth"], a:1},
    {q:"Piggybacking means:", opts:["Sending two frames at once on separate links","Attaching an ACK onto a data frame going the other direction","Doubling the CRC bits","Compressing the frame header"], a:1},
    {q:"A burst error is different from a single-bit error because:", opts:["It only affects the header","Two or more bits change within a span, not just one","It can never be detected","It only happens in wireless links"], a:1},
    {q:"In block coding, an error slips through undetected when:", opts:["The codeword is longer than the dataword","A corrupted codeword lands on ANOTHER valid codeword by chance","The receiver has no divisor","The sender forgets the header"], a:1},
    {q:"In CRC, what does a nonzero syndrome at the receiver mean?", opts:["The frame is accepted as-is","The frame is corrupted and should be discarded","The dataword was too short","Nothing — syndromes are ignored"], a:1},
    {q:"Checksum error detection relies on which kind of arithmetic?", opts:["Two's complement","Floating point","One's complement","Modular exponent"], a:2},
    {q:"Which Multiple Access category has stations consult each other so only an authorized station transmits?", opts:["Random Access","Controlled Access","Channelization","None of these"], a:1},
    {q:"Pure ALOHA's maximum throughput is about 18.4%, achieved when G equals:", opts:["0.25","0.5","1","2"], a:1},
    {q:"Why does CSMA/CD require a minimum frame size?", opts:["To save memory","So the sender is still transmitting if a collision signal needs to reach it back (Tfr ≥ 2×Tp)","To fit inside one time slot","Ethernet frames must always be the same size"], a:1},
    {q:"Wi-Fi (wireless LANs) typically uses which access method instead of CSMA/CD?", opts:["CSMA/CA","Token Passing","Polling","FDMA"], a:0},
    {q:"In CDMA, multiplying two DIFFERENT orthogonal chip codes together and summing gives:", opts:["N (number of stations)","1","0","A random number"], a:2},
  ],
};

/* ================= RENDER LOGIC ================= */
let current = 0;
const contentEl = document.getElementById("content");
const stationlistEl = document.getElementById("stationlist");

function buildNav(){
  let html = "";
  let lastGroup = undefined;
  STATIONS.forEach((s,i)=>{
    if(s.group !== lastGroup){
      if(s.group && GROUP_META[s.group]){
        html += `<li class="groupheader">${GROUP_META[s.group].title}</li>`;
      }
      lastGroup = s.group;
    }
    html += `
      <li>
        <button class="navbtn" data-idx="${i}" aria-current="${i===0?'true':'false'}">
          <span class="navdot">${s.icon}</span>
          <span class="navlabel">${s.label}</span>
        </button>
      </li>
    `;
  });
  stationlistEl.innerHTML = html;
  stationlistEl.querySelectorAll(".navbtn").forEach(btn=>{
    btn.addEventListener("click",()=>goTo(parseInt(btn.dataset.idx)));
  });
}

function buildStationShell(s,i){
  let body;
  if(s.kind==="quiz"){ body = buildQuizHTML(QUIZZES[s.quizId], s.quizId); }
  else if(s.kind==="summary"){ body = buildSummaryHTML(); }
  else if(s.kind==="home"){ body = CONTENT[s.id]; }
  else { body = CONTENT[s.id]; }

  const showEyebrow = s.kind!=="home";
  const eyebrowText = s.group && GROUP_META[s.group] ? GROUP_META[s.group].eyebrow : (s.kind==="summary" ? "WRAP-UP" : "");

  return `
    <section class="station" id="station-${i}" data-idx="${i}">
      ${showEyebrow ? `<span class="eyebrow">${eyebrowText}</span>` : ""}
      ${showEyebrow ? `<h1 class="stationtitle">${s.icon} ${s.label}</h1>` : ""}
      ${body}
      <div class="navfoot">
        ${i>0 ? `<button class="btn secondary" data-nav="prev">⬅️ Back</button>` : `<span></span>`}
        ${i<STATIONS.length-1 ? `<button class="btn" data-nav="next">Next ➡️</button>` : `<span></span>`}
      </div>
    </section>
  `;
}

function buildQuizHTML(quizArr, quizId){
  return `
    ${explain(`<p>Answer each question below. Tap an option to see instantly whether you got it right!</p>`)}
    <div class="quizblock" data-quizid="${quizId}">
      <div class="quizlist">
        ${quizArr.map((item,qi)=>`
          <div class="quiz-card" data-qi="${qi}">
            <div class="quiz-q">${qi+1}. ${item.q}</div>
            <div class="quiz-opts">
              ${item.opts.map((o,oi)=>`<button class="opt" data-oi="${oi}">${o}</button>`).join("")}
            </div>
            <div class="quiz-feedback"></div>
          </div>
        `).join("")}
      </div>
      <div class="scorebar">
        <strong class="scoreText">Score: 0 / ${quizArr.length}</strong>
        <button class="btn secondary resetQuiz" type="button">🔄 Reset Quiz</button>
      </div>
    </div>
  `;
}

function buildSummaryHTML(){
  return `
    ${explain(`<p>Great job reaching the last station! Here's a one-page recap of everything we covered across all three units.</p>`)}
    <div class="card">
      <h3 style="margin-bottom:8px;">Unit 1 · Network Basics</h3>
      <ul>
        <li><strong>Network:</strong> connected devices that exchange data using Sender, Message, Medium, Receiver, Protocol.</li>
        <li><strong>Data Communication:</strong> exchanging data via a transmission medium; needs good Delivery, Accuracy, Timeliness, low Jitter.</li>
        <li><strong>Devices:</strong> Hosts (used directly) vs Connecting devices (router, switch, modem).</li>
        <li><strong>Data Representation:</strong> Text (ASCII/Unicode), Numbers (binary), Images (pixels/RGB/YCM), Audio (ADC/DAC), Video (frames or continuous feed).</li>
        <li><strong>Data Flow:</strong> Simplex (one-way), Half-Duplex (turns), Full-Duplex (both ways together).</li>
        <li><strong>Network Criteria:</strong> Performance (throughput/delay), Reliability, Security.</li>
        <li><strong>Topologies:</strong> Point-to-point vs multipoint links; Mesh, Star, Bus, Ring — each with its own pros/cons.</li>
        <li><strong>LAN vs WAN:</strong> LAN = small area/hosts; WAN = large area/connecting devices (point-to-point or switched); Internetwork = networks joined together.</li>
        <li><strong>Switching:</strong> Circuit switching (dedicated path) vs Packet switching (independent packets).</li>
        <li><strong>The Internet:</strong> backbones, providers &amp; peering points; how packets actually travel.</li>
        <li><strong>History of the Internet:</strong> 1969 ARPANET → 1973 TCP → 1983 TCP/IP standard → 1990 NSFNET replaces ARPANET → 1991 first website → 1995 Netscape.</li>
        <li><strong>Cables, Standards &amp; Governance:</strong> submarine fiber cables carry most world traffic; RFC lifecycle; ISOC → IAB → IETF/IRTF.</li>
        <li><strong>Layers:</strong> Physical → Data-Link → Network → Transport → Application; encapsulation/decapsulation; TCP vs UDP.</li>
        <li><strong>Network/Transport/App Layers:</strong> IP routing &amp; helper protocols; process-to-process TCP/UDP; addressing (names/ports/IP/MAC); multiplexing; OSI's 7 layers vs TCP/IP's 5.</li>
      </ul>
    </div>
    <div class="card">
      <h3 style="margin-bottom:8px;">Unit 2 · Physical Layer</h3>
      <ul>
        <li><strong>Data &amp; Signals:</strong> Analog (continuous) vs Digital (discrete); amplitude &amp; frequency.</li>
        <li><strong>Bit Rate &amp; Bandwidth:</strong> Bit rate (bps), L levels need log₂L bits, Bit Length = Bit Interval × Propagation Speed.</li>
        <li><strong>Composite Signals &amp; Bandwidth:</strong> Fourier series decomposes any signal into harmonics; time domain vs frequency domain; a perfect digital signal needs infinite bandwidth.</li>
        <li><strong>Baseband &amp; Broadband:</strong> Baseband = send digital as-is (low-pass channel); Broadband = modulate to analog first (bandpass channel); B=n/2, 3n/2, 5n/2.</li>
        <li><strong>Network Performance:</strong> Bandwidth vs Throughput, Latency = Propagation + Transmission + Queuing + Processing delay, Bandwidth-Delay Product, Jitter.</li>
        <li><strong>Transmission Modes:</strong> Parallel vs Serial (Asynchronous, Synchronous, Isochronous).</li>
        <li><strong>Multiplexing (FDM &amp; WDM):</strong> FDM = carrier frequencies + guard bands; WDM = FDM for fiber-optic wavelengths.</li>
        <li><strong>Time-Division Multiplexing:</strong> Synchronous TDM (fixed slots, interleaving) vs Statistical TDM (only busy lines, needs addressing); T-carrier/DS hierarchy.</li>
        <li><strong>Guided Media:</strong> Twisted-pair (RJ45), Coaxial (BNC), Fiber-optic (total internal reflection; single-mode vs multimode).</li>
        <li><strong>Unguided Media:</strong> Radio (omnidirectional, multicast), Microwave (unidirectional, unicast), Infrared (short-range, blocked by walls).</li>
        <li><strong>Circuit &amp; Packet Switching:</strong> Circuit switching's 3 phases (Setup/Transfer/Teardown); packet switching allocates resources on demand.</li>
        <li><strong>Datagram vs Virtual-Circuit:</strong> Datagram = independent packets, network layer; Virtual-circuit = same path, VCI relabelled per hop, data-link layer.</li>
        <li><strong>Inside a Switch:</strong> Crossbar &amp; multistage (space-division); TSI &amp; TST (time-division); Banyan &amp; Batcher-Banyan switching fabric.</li>
      </ul>
    </div>
    <div class="card">
      <h3 style="margin-bottom:8px;">Unit 3 · Data-Link Layer</h3>
      <ul>
        <li><strong>Data-Link Layer Basics:</strong> hop-by-hop (node-to-node) delivery; services = Framing, Addressing, Flow Control, Error Control, Media Access Control; Broadcast vs Point-to-Point links; DLC vs MAC sublayers.</li>
        <li><strong>Framing:</strong> Flag + Header + Data + Trailer + Flag; fixed-size (cells) vs variable-size; Byte Stuffing (ESC byte) and Bit Stuffing (extra 0 after five 1s).</li>
        <li><strong>Flow, Error &amp; Protocol Types:</strong> buffers for flow control; CRC + optional ACK for error control; Connectionless vs Connection-Oriented protocols.</li>
        <li><strong>Stop-and-Wait &amp; ARQ:</strong> Simple protocol (no control) vs Stop-and-Wait (send one, wait for ACK); sequence/ack numbers fix duplicate frames (ARQ); Piggybacking.</li>
        <li><strong>Types of Errors:</strong> Single-bit vs Burst errors; Redundancy = extra check bits; Detection (easy) vs Correction (hard).</li>
        <li><strong>Block Coding &amp; CRC:</strong> k-bit dataword → n-bit codeword; cyclic codes; CRC's remainder (syndrome) reveals corruption.</li>
        <li><strong>Checksum:</strong> one's complement addition with wraparound; sender sends complement of the sum; receiver's total should complement to zero.</li>
        <li><strong>Multiple Access:</strong> Random Access (ALOHA, CSMA, CSMA/CD, CSMA/CA), Controlled Access (Reservation, Polling, Token Passing), Channelization (FDMA, TDMA, CDMA).</li>
        <li><strong>ALOHA:</strong> Pure ALOHA (vulnerable time 2×Tfr, max 18.4%) vs Slotted ALOHA (vulnerable time Tfr, max 36.8%).</li>
        <li><strong>CSMA family:</strong> persistence methods (1-persistent, nonpersistent, p-persistent); CSMA/CD (wired, detects collisions, minimum frame size); CSMA/CA (wireless, avoids collisions using IFS/contention window/ACK/RTS-CTS).</li>
        <li><strong>Controlled Access:</strong> Reservation (minislots), Polling (primary/secondary, Select/Poll), Token Passing (logical ring — physical, bus, or star).</li>
        <li><strong>Channelization:</strong> FDMA (by frequency), TDMA (by time slot), CDMA (by orthogonal code).</li>
        <li><strong>Ethernet:</strong> IEEE Project 802; LLC (shared) vs MAC (per-LAN-type); 4 generations — 10 Mbps → 100 Mbps → 1 Gbps → 10 Gbps.</li>
      </ul>
    </div>
    ${remember(["Revisit any station any time from the side menu","Try each unit's quiz again until you score full marks!"])}
    <div style="text-align:center; margin-top:24px;">
      <button class="btn" onclick="window.print()">📥 Download / Print Notes (PDF)</button>
    </div>
  `;
}

function render(){
  contentEl.innerHTML = STATIONS.map((s,i)=>buildStationShell(s,i)).join("");
  attachStationEvents();
  showStation(0);
}

function showStation(i){
  current = i;
  document.querySelectorAll(".station").forEach(sec=>sec.classList.remove("active"));
  document.getElementById(`station-${i}`).classList.add("active");

  document.querySelectorAll(".navbtn").forEach((btn,idx)=>{
    btn.classList.toggle("active", idx===i);
    btn.classList.toggle("done", idx<i);
    btn.setAttribute("aria-current", idx===i ? "true":"false");
  });

  const pct = Math.round((i/(STATIONS.length-1))*100);
  document.getElementById("progressfill").style.width = Math.max(pct,4)+"%";
  document.getElementById("progresslabel").textContent = `Station ${i+1} of ${STATIONS.length}`;

  window.scrollTo({top:0, behavior:"smooth"});
  closeMobileNav();
}

function goTo(i){ if(i>=0 && i<STATIONS.length) showStation(i); }

function attachStationEvents(){
  contentEl.querySelectorAll('[data-nav="next"]').forEach(b=>b.addEventListener("click",()=>goTo(current+1)));
  contentEl.querySelectorAll('[data-nav="prev"]').forEach(b=>b.addEventListener("click",()=>goTo(current-1)));

  /* clickable diagram nodes */
  contentEl.querySelectorAll(".node.clickable").forEach(node=>{
    node.addEventListener("click",()=>{
      const pop = node.querySelector(".node-pop");
      const wasOpen = node.classList.contains("revealed");
      pop.textContent = node.dataset.pop;
      node.classList.toggle("revealed", !wasOpen);
    });
  });

  /* tabs (data representation, multiplexing, media) */
  contentEl.querySelectorAll(".tabbar").forEach(bar=>{
    bar.addEventListener("click",(e)=>{
      const btn = e.target.closest(".tabbtn");
      if(!btn) return;
      const tab = btn.dataset.tab;
      bar.querySelectorAll(".tabbtn").forEach(b=>b.classList.toggle("active", b===btn));
      const panelParent = bar.parentElement;
      panelParent.querySelectorAll(".tabpanel").forEach(p=>p.classList.toggle("active", p.dataset.tab===tab));
    });
  });

  /* topology cards */
  contentEl.querySelectorAll(".topo-card").forEach(card=>{
    card.addEventListener("click",()=>card.classList.toggle("open"));
  });

  /* quizzes — each quizblock is self-contained, scoped with querySelectorAll (no global ids) */
  contentEl.querySelectorAll(".quizblock").forEach(block=>{
    const quizId = block.dataset.quizid;
    const quizArr = QUIZZES[quizId];
    const list = block.querySelector(".quizlist");
    const scoreEl = block.querySelector(".scoreText");
    const resetBtn = block.querySelector(".resetQuiz");

    function updateScore(){
      let score = 0;
      block.querySelectorAll(".quiz-card").forEach(card=>{
        if(card.dataset.answered && !card.querySelector(".opt.incorrect")) score++;
      });
      scoreEl.textContent = `Score: ${score} / ${quizArr.length}`;
    }

    list.addEventListener("click",(e)=>{
      const opt = e.target.closest(".opt");
      if(!opt) return;
      const card = opt.closest(".quiz-card");
      if(card.dataset.answered) return;
      const qi = parseInt(card.dataset.qi);
      const oi = parseInt(opt.dataset.oi);
      const correctIdx = quizArr[qi].a;
      card.dataset.answered = "1";
      card.querySelectorAll(".opt").forEach((o,idx)=>{
        if(idx===correctIdx) o.classList.add("correct");
        else if(idx===oi) o.classList.add("incorrect");
      });
      const fb = card.querySelector(".quiz-feedback");
      fb.classList.add("show");
      fb.textContent = (oi===correctIdx) ? "✅ Correct! Well done." : `❌ Not quite — the correct answer is: "${quizArr[qi].opts[correctIdx]}"`;
      fb.style.color = (oi===correctIdx) ? "var(--right)" : "var(--wrong)";
      updateScore();
    });

    resetBtn.addEventListener("click",()=>{
      block.querySelectorAll(".quiz-card").forEach(card=>{
        delete card.dataset.answered;
        card.querySelectorAll(".opt").forEach(o=>o.classList.remove("correct","incorrect"));
        const fb = card.querySelector(".quiz-feedback");
        fb.classList.remove("show"); fb.textContent="";
      });
      updateScore();
    });
  });
}

/* ================= NAV / THEME / MOBILE ================= */
function closeMobileNav(){
  document.getElementById("railnav").classList.remove("open");
  document.getElementById("scrim").classList.remove("show");
}
document.getElementById("menubtn")?.addEventListener("click",()=>{
  document.getElementById("railnav").classList.add("open");
  document.getElementById("scrim").classList.add("show");
});
document.getElementById("scrim")?.addEventListener("click", closeMobileNav);

document.getElementById("darkToggle").addEventListener("click",()=>{
  const root = document.documentElement;
  const isDark = root.getAttribute("data-theme")==="dark";
  root.setAttribute("data-theme", isDark ? "light" : "dark");
  document.getElementById("darkToggle").innerHTML = isDark ? "🌙 <span>Dark mode</span>" : "☀️ <span>Light mode</span>";
});

document.getElementById("spacingToggle").addEventListener("click",()=>{
  const root = document.documentElement;
  const isWide = root.getAttribute("data-spacing")==="wide";
  root.setAttribute("data-spacing", isWide ? "" : "wide");
});

buildNav();
render();
