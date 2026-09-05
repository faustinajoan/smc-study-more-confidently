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
  { id:"layers",      icon:"🧱", label:"Protocols & Layers", kind:"topic", group:"unit1" },
  { id:"quiz1",       icon:"🧠", label:"Unit 1 Quiz", kind:"quiz", group:"unit1", quizId:"quiz1" },

  { id:"signals",     icon:"📡", label:"Data & Signals", kind:"topic", group:"unit2" },
  { id:"digitalnums", icon:"🔢", label:"Bit Rate & Bandwidth", kind:"topic", group:"unit2" },
  { id:"transmission",icon:"📶", label:"Baseband & Broadband", kind:"topic", group:"unit2" },
  { id:"performance", icon:"🚦", label:"Network Performance", kind:"topic", group:"unit2" },
  { id:"modes",       icon:"🔀", label:"Transmission Modes", kind:"topic", group:"unit2" },
  { id:"multiplexing",icon:"🎛️", label:"Multiplexing", kind:"topic", group:"unit2" },
  { id:"media",       icon:"🔌", label:"Transmission Media", kind:"topic", group:"unit2" },
  { id:"pswitching",  icon:"🔗", label:"Circuit & Packet Switching", kind:"topic", group:"unit2" },
  { id:"quiz2",       icon:"🧠", label:"Unit 2 Quiz", kind:"quiz", group:"unit2", quizId:"quiz2" },

  { id:"dlbasics",    icon:"🔗", label:"Data Link Layer Basics", kind:"topic", group:"unit3" },
  { id:"framing",     icon:"🧩", label:"Framing", kind:"topic", group:"unit3" },
  { id:"flowerror",   icon:"🛡️", label:"Flow & Error Control Basics", kind:"topic", group:"unit3" },
  { id:"arqprotocols",icon:"🔁", label:"Protocols: Simple, Stop-and-Wait & Beyond", kind:"topic", group:"unit3" },
  { id:"errortypes",  icon:"⚡", label:"Error Types & Redundancy", kind:"topic", group:"unit3" },
  { id:"blockcrc",    icon:"🧮", label:"Block Coding & CRC", kind:"topic", group:"unit3" },
  { id:"checksum",    icon:"➕", label:"Checksum", kind:"topic", group:"unit3" },
  { id:"macbasics",   icon:"🚦", label:"Media Access Control Basics", kind:"topic", group:"unit3" },
  { id:"aloha",       icon:"📻", label:"ALOHA", kind:"topic", group:"unit3" },
  { id:"csmacd",      icon:"👂", label:"CSMA & CSMA/CD", kind:"topic", group:"unit3" },
  { id:"csmaca",      icon:"📶", label:"CSMA/CA", kind:"topic", group:"unit3" },
  { id:"controlled",  icon:"🎫", label:"Controlled Access", kind:"topic", group:"unit3" },
  { id:"channelization",icon:"🎚️", label:"Channelization: FDMA, TDMA & CDMA", kind:"topic", group:"unit3" },
  { id:"ethernet",     icon:"🔌", label:"Ethernet & IEEE Standards", kind:"topic", group:"unit3" },
  { id:"quiz3",        icon:"🧠", label:"Unit 3 Quiz", kind:"quiz", group:"unit3", quizId:"quiz3" },

  { id:"summary",     icon:"📄", label:"Summary & Download", kind:"summary" },
];

const GROUP_META = {
  unit1: { title:"Unit 1 · Network Basics", eyebrow:"UNIT 1" },
  unit2: { title:"Unit 2 · Physical Layer", eyebrow:"UNIT 2" },
  unit3: { title:"Unit 3 · Data Link Layer & MAC", eyebrow:"UNIT 3" },
};

/* ---------- helper builders ---------- */
function explain(html){ return `<div class="card explain-card"><h3>🌟 Simple Explanation</h3>${html}</div>`; }
function analogy(html){ return `<div class="card analogy-card"><h3>🚂 Real-Life Analogy</h3>${html}</div>`; }
function remember(items){ return `<div class="remember-box"><h3>💡 Remember</h3><ul>${items.map(i=>`<li>${i}</li>`).join("")}</ul></div>`; }
function mistake(html){ return `<div class="mistake-box"><h3>⚠️ Common Mistake</h3>${html}</div>`; }
function more(title,html){ return `<details class="more"><summary>${title}</summary><div class="more-inner">${html}</div></details>`; }

/* ================= STATION CONTENT ================= */
const CONTENT = {};

CONTENT.home = `
  <div class="hero">
    <div class="hero-cables">🛰️</div>
    <span class="eyebrow" style="background:rgba(28,18,6,.18);">SMC PORTAL</span>
    <h1>Study More Confidently</h1>
    <p>Welcome to SMC! We'll travel station by station through three units of Computer Networks — one small idea at a time, with pictures, examples, and quick checks along the way.</p>
    <div class="stat-row">
      <div class="stat-pill">🧩 3 Units</div>
      <div class="stat-pill">🧠 A quiz after each unit</div>
      <div class="stat-pill">📥 Downloadable notes</div>
    </div>
  </div>

  ${explain(`<p>This page is your travel guide. Every station explains <strong>one idea only</strong>, with a real-life comparison, an original diagram where it helps, and a short "Remember" box so it's easy to recall later.</p>`)}

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

  <h3 style="margin-top:26px;">Unit 3 · Data Link Layer &amp; MAC</h3>
  <div class="route-preview">
    ${STATIONS.filter(s=>s.group==="unit3" && s.kind==="topic").map(s=>`
      <div class="route-item"><span class="emoji">${s.icon}</span>${s.label}</div>
    `).join("")}
  </div>

  ${more("🎒 Tips for using this page","<p>Use the ⬅️➡️ buttons at the bottom of each page, or tap any station on the left. Tap boxes and diagrams — they are clickable! Turn on <strong>Dark mode</strong>, <strong>High Contrast</strong>, adjust <strong>Text size</strong>, or turn on <strong>Easy-read spacing</strong> from the side menu if that helps you read more comfortably.</p>")}
`;

CONTENT.network = `
  ${explain(`
    <p>Imagine you and your friends are sitting in different classrooms. If everyone has a mobile phone, you can all send messages to each other.</p>
    <p>When many devices are connected so that they can share information, we call this a <strong>computer network</strong>. A network simply means devices that are linked together so they can talk to each other.</p>
  `)}

  ${analogy(`<p>A railway network connects many stations. A road network connects many cities. In the same way, a computer network connects many devices so that information can travel between them.</p>`)}

  <div class="imgcard">
    <svg viewBox="0 0 400 180">
      <g stroke="var(--rail)" stroke-width="2.5" fill="none">
        <line x1="200" y1="90" x2="60" y2="35"/>
        <line x1="200" y1="90" x2="340" y2="35"/>
        <line x1="200" y1="90" x2="60" y2="145"/>
        <line x1="200" y1="90" x2="340" y2="145"/>
      </g>
      <circle cx="200" cy="90" r="22" fill="var(--spark)"/>
      <text x="200" y="95" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">Switch</text>
      <g>
        <rect x="30" y="15" width="60" height="40" rx="6" fill="var(--rail)"/>
        <text x="60" y="39" text-anchor="middle" font-size="20">💻</text>
        <rect x="310" y="15" width="60" height="40" rx="6" fill="var(--rail)"/>
        <text x="340" y="39" text-anchor="middle" font-size="20">🖥️</text>
        <rect x="30" y="125" width="60" height="40" rx="6" fill="var(--rail)"/>
        <text x="60" y="149" text-anchor="middle" font-size="20">📱</text>
        <rect x="310" y="125" width="60" height="40" rx="6" fill="var(--rail)"/>
        <text x="340" y="149" text-anchor="middle" font-size="20">🖨️</text>
      </g>
    </svg>
    <p class="imgcaption">Four different devices — a laptop, desktop, phone, and printer — all connected through a central switch. This is a small computer network.</p>
  </div>

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
    <div class="node clickable" data-pop="Data must arrive within a reasonable, expected time — late data can be useless (imagine a delayed video call!).">
      <span class="emoji">⏱️</span>Timeliness
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="This means how much the arrival time of packets varies. Low jitter = smooth video/audio. High jitter = choppy video calls.">
      <span class="emoji">📶</span>Jitter
      <div class="node-pop"></div>
    </div>
  </div>

  ${analogy(`<p>Think of food delivery. It should go to the <strong>right house</strong> (delivery), the order should be <strong>correct</strong> (accuracy), it should arrive <strong>while still hot</strong> (timeliness), and if you order twice, both should arrive around the same gap each time, not wildly different (jitter)!</p>`)}

  ${remember(["Delivery — reaches the right destination","Accuracy — data is correct, no errors","Timeliness — arrives on time","Jitter — arrival time doesn't vary too much"])}
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

  <div class="imgcard">
    <svg viewBox="0 0 380 110">
      <rect x="15" y="15" width="90" height="35" rx="6" fill="var(--rail)"/><text x="60" y="37" text-anchor="middle" font-size="18">💻</text>
      <rect x="15" y="60" width="90" height="35" rx="6" fill="var(--rail)"/><text x="60" y="82" text-anchor="middle" font-size="18">📱</text>
      <text x="60" y="108" text-anchor="middle" font-size="10" font-weight="700" fill="var(--rail)">Hosts</text>

      <rect x="150" y="38" width="80" height="35" rx="18" fill="var(--spark)"/><text x="190" y="60" text-anchor="middle" font-size="18">🌐</text>
      <text x="190" y="90" text-anchor="middle" font-size="10" font-weight="700" fill="var(--spark)">Router / Switch</text>

      <rect x="275" y="15" width="90" height="35" rx="6" fill="var(--rail)"/><text x="320" y="37" text-anchor="middle" font-size="18">🖥️</text>
      <rect x="275" y="60" width="90" height="35" rx="6" fill="var(--rail)"/><text x="320" y="82" text-anchor="middle" font-size="18">🖨️</text>
      <text x="320" y="108" text-anchor="middle" font-size="10" font-weight="700" fill="var(--rail)">Hosts</text>

      <g stroke="var(--ink-soft)" stroke-width="2">
        <line x1="105" y1="32" x2="150" y2="50"/><line x1="105" y1="77" x2="150" y2="60"/>
        <line x1="230" y1="50" x2="275" y2="32"/><line x1="230" y1="60" x2="275" y2="77"/>
      </g>
    </svg>
    <p class="imgcaption">Hosts (laptops, phones, desktops, printers) do the actual communicating. Connecting devices like routers and switches sit in between, directing traffic without being the source or destination themselves.</p>
  </div>

  ${remember(["Host = a device a person uses directly","Connecting device = links devices/networks together (router, switch, modem)","Devices connect using wired or wireless transmission media"])}

  ${more("🔎 Want to know more? A real wired LAN example","<p>A common wired local network (Ethernet LAN) uses a <strong>Network Interface Card (NIC)</strong> inside the computer, a <strong>CAT 5 cable</strong>, and an <strong>RJ45 connector</strong> at the end of the cable that plugs into the device.</p>")}
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
        <li><strong>ASCII</strong> — the first 127 characters of Unicode. It covers basic English letters, numbers, and symbols.</li>
        <li><strong>Unicode</strong> — a much bigger system (32-bit) that can represent almost any character from any language in the world.</li>
      </ul>
      ${remember(["ASCII has 128 characters","Unicode can represent 1,54,998+ characters (covers world languages)"])}
    </div>
  </div>

  <div class="tabpanel" data-tab="numbers">
    <div class="card">
      <p>Numbers are also represented using bit patterns — but unlike text, a number is <strong>directly converted into binary</strong>. This makes mathematical operations (like addition) simpler for the computer to perform.</p>
    </div>
  </div>

  <div class="tabpanel" data-tab="images">
    <div class="card">
      <p>An image is made up of tiny dots called <strong>pixels</strong> (picture elements). The sharpness of an image depends on how many pixels it has — this is called <strong>resolution</strong>.</p>
      <ul>
        <li><strong>1-bit pattern:</strong> only black (0) and white (1) — like a simple line drawing.</li>
        <li><strong>2-bit pattern (grayscale):</strong> black (00), dark gray (01), light gray (10), white (11).</li>
        <li><strong>Color images</strong> use combinations such as <strong>RGB</strong> (Red, Green, Blue) or <strong>YCM</strong> (Yellow, Cyan, Magenta), where each color's intensity gets its own bit pattern.</li>
      </ul>
    </div>
  </div>

  <div class="tabpanel" data-tab="audio">
    <div class="card">
      <p>Audio means recorded or broadcast sound/music. Unlike text or images, natural sound is <strong>continuous</strong>, not made of separate, distinct steps — so it must be converted (sampled) into digital form to travel over a network.</p>
    </div>
  </div>

  <div class="tabpanel" data-tab="video">
    <div class="card">
      <p>Video means a recorded or broadcast picture/movie. It can be:</p>
      <ul>
        <li>A <strong>continuous</strong> entity, like the feed from a TV camera, or</li>
        <li>A <strong>combination of separate images</strong> (frames) shown quickly one after another to create the illusion of motion.</li>
      </ul>
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

  ${analogy(`<p>Think of a one-way street (simplex), a single-lane bridge where cars take turns (half-duplex), and a two-lane road where traffic flows both ways at once (full-duplex).</p>`)}

  ${remember(["Simplex → one direction only","Half-Duplex → both directions, but one at a time","Full-Duplex → both directions, at the same time"])}
`;

CONTENT.criteria = `
  ${explain(`<p>A good network — just like a good product — must meet certain standards. There are 3 main criteria used to judge a network.</p>`)}

  ${analogy(`<p>Imagine you're buying a car. You'd check its <strong>performance</strong> (speed, mileage), <strong>reliability</strong> (does it run for years without major repairs?), and <strong>security</strong> (passenger safety, airbags, secure seats). Networks are judged the very same way!</p>`)}

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

  ${remember(["Performance = speed & efficiency (throughput + delay)","Reliability = consistency & recovery from failure","Security = protection from unauthorized access & damage"])}
`;

CONTENT.topology = `
  ${explain(`<p><strong>Physical topology</strong> is simply the way a network is laid out physically — how the devices (called <strong>nodes</strong>) and the links between them are arranged. There are 4 basic topologies. Tap each card to see its advantages and disadvantages.</p>`)}

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
      <p style="font-size:14px; margin:0;">Every device connects directly to every other device.</p>
      <div class="topo-details">
        <p class="pro">✔ Advantages</p>
        <ul style="font-size:14px;"><li>No traffic congestion problems</li><li>If one link fails, the rest of the network keeps working</li><li>Private line = more secure, only the intended receiver sees the message</li><li>Easy to identify and isolate faults</li></ul>
        <p class="con">✘ Disadvantages</p>
        <ul style="font-size:14px;"><li>Needs a lot of cabling and I/O ports — expensive</li><li>Hard to install and reconnect</li><li>Mostly used as a backbone for connecting main computers, not for everyday use</li></ul>
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
      <p style="font-size:14px; margin:0;">One long cable (the backbone) that all devices tap into.</p>
      <div class="topo-details">
        <p class="pro">✔ Advantages</p>
        <ul style="font-size:14px;"><li>Very easy to install</li><li>Uses less cabling than mesh or star</li></ul>
        <p class="con">✘ Disadvantages</p>
        <ul style="font-size:14px;"><li>Difficult to reconnect and isolate faults</li><li>Hard to add new devices</li><li>A break in the main cable stops all transmission</li></ul>
      </div>
    </div>

    <div class="topo-card" data-topo="ring">
      <svg viewBox="0 0 200 120"><circle cx="100" cy="60" r="45" fill="none" stroke="var(--rail)" stroke-width="3"/>
        <circle cx="100" cy="15" r="8" fill="var(--rail)"/><circle cx="145" cy="60" r="8" fill="var(--rail)"/>
        <circle cx="100" cy="105" r="8" fill="var(--rail)"/><circle cx="55" cy="60" r="8" fill="var(--rail)"/>
      </svg>
      <h4>Ring</h4>
      <p style="font-size:14px; margin:0;">Each device connects to exactly two neighbours, forming a circle.</p>
      <div class="topo-details">
        <p class="pro">✔ Advantages</p>
        <ul style="font-size:14px;"><li>Relatively easy to install and reconfigure</li><li>Simple fault isolation — a silent device can raise an alarm</li></ul>
        <p class="con">✘ Disadvantages</p>
        <ul style="font-size:14px;"><li>Traffic moves in one direction only</li><li>One broken connection can disable the whole ring (unless a dual ring is used)</li></ul>
      </div>
    </div>
  </div>

  ${remember(["Mesh = every device to every device (most cabling, most robust)","Star = all devices to one central hub","Bus = all devices share one long cable","Ring = devices connected in a circle"])}
`;

CONTENT.lanwan = `
  ${explain(`<p>Networks come in different sizes depending on how far apart the connected devices are.</p>`)}

  <div class="flow-grid">
    <div class="flow-card">
      <h4>🏢 LAN <span style="font-weight:400;font-size:13px;">(Local Area Network)</span></h4>
      <p style="font-size:14.5px;">Usually privately owned. Connects hosts within a single office, building, or campus. Every host has its own address, and packets carry both sender's and receiver's addresses.</p>
    </div>
    <div class="flow-card">
      <h4>🌍 WAN <span style="font-weight:400;font-size:13px;">(Wide Area Network)</span></h4>
      <p style="font-size:14.5px;">Covers a much wider area — a town, state, country, or the whole world. While a LAN connects hosts, a WAN connects connecting devices like switches, routers, and modems.</p>
    </div>
    <div class="flow-card">
      <h4>🔗 Internetwork</h4>
      <p style="font-size:14.5px;">When two or more networks are connected together, the result is called an internetwork, or simply an "internet" (lowercase i).</p>
    </div>
  </div>

  ${analogy(`<p>A LAN is like the road network inside a single college campus. A WAN is like the national highway system connecting entire cities and states. When many such road networks link up, you get one giant connected system — an internetwork.</p>`)}

  <div class="imgcard">
    <svg viewBox="0 0 420 160">
      <g stroke="var(--rail)" stroke-width="2" fill="none">
        <circle cx="90" cy="80" r="10" fill="var(--rail)"/>
        <circle cx="60" cy="50" r="8" fill="var(--rail)"/><circle cx="120" cy="50" r="8" fill="var(--rail)"/>
        <circle cx="60" cy="110" r="8" fill="var(--rail)"/><circle cx="120" cy="110" r="8" fill="var(--rail)"/>
        <line x1="90" y1="80" x2="60" y2="50"/><line x1="90" y1="80" x2="120" y2="50"/>
        <line x1="90" y1="80" x2="60" y2="110"/><line x1="90" y1="80" x2="120" y2="110"/>
      </g>
      <text x="90" y="145" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">LAN (one campus)</text>

      <line x1="150" y1="80" x2="270" y2="80" stroke="var(--spark)" stroke-width="3" stroke-dasharray="6 4"/>

      <g stroke="var(--rail)" stroke-width="2" fill="none">
        <circle cx="330" cy="80" r="10" fill="var(--spark)"/>
        <circle cx="290" cy="40" r="8" fill="var(--rail)"/><circle cx="370" cy="40" r="8" fill="var(--rail)"/>
        <circle cx="290" cy="120" r="8" fill="var(--rail)"/><circle cx="370" cy="120" r="8" fill="var(--rail)"/>
        <line x1="330" y1="80" x2="290" y2="40"/><line x1="330" y1="80" x2="370" y2="40"/>
        <line x1="330" y1="80" x2="290" y2="120"/><line x1="330" y1="80" x2="370" y2="120"/>
      </g>
      <text x="330" y="145" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Another LAN (elsewhere)</text>
    </svg>
    <p class="imgcaption">Two separate LANs, each built around their own switch/router, joined together by a WAN link (dashed line) — together they form one internetwork.</p>
  </div>

  ${remember(["LAN = small area, connects hosts directly","WAN = large area, connects connecting devices","Internetwork = two or more networks joined together"])}
`;

CONTENT.switching = `
  ${explain(`<p>An internet is really a <strong>switched network</strong> — a switch is a device that connects at least two links, and forwards data from one network to another when needed. There are two major switching approaches.</p>`)}

  <div class="flow-grid">
    <div class="flow-card">
      <h4>☎️ Circuit Switching</h4>
      <p style="font-size:14.5px;">A dedicated connection (a "circuit") is set up between the two end devices before data is sent. The switch can only turn this path <strong>on or off</strong> — the same path is reserved for the whole conversation.</p>
    </div>
    <div class="flow-card">
      <h4>📦 Packet Switching</h4>
      <p style="font-size:14.5px;">Data is broken into small blocks called <strong>packets</strong>, which travel independently — not as one continuous stream. A router has a queue where it can store and forward each packet toward its destination.</p>
    </div>
  </div>

  ${analogy(`<p>Circuit switching is like booking a private cab for your entire trip — the same car and route is reserved just for you. Packet switching is like sending each part of your luggage in separate parcels, which might even take slightly different routes, but all arrive at the same destination address.</p>`)}

  <div class="imgcard">
    <svg viewBox="0 0 420 130">
      <text x="105" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="var(--rail)">Circuit Switching — one fixed path</text>
      <circle cx="30" cy="50" r="12" fill="var(--rail)"/><text x="30" y="55" text-anchor="middle" font-size="10" fill="#fff">A</text>
      <circle cx="105" cy="30" r="10" fill="var(--ink-soft)"/><circle cx="105" cy="70" r="10" fill="var(--ink-soft)"/>
      <circle cx="180" cy="50" r="12" fill="var(--rail)"/><text x="180" y="55" text-anchor="middle" font-size="10" fill="#fff">B</text>
      <path d="M30,50 L105,30 L180,50" stroke="var(--rail)" stroke-width="3" fill="none"/>
      <text x="105" y="100" text-anchor="middle" font-size="9" fill="var(--ink-soft)">Every bit follows this SAME reserved path</text>

      <text x="330" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="var(--spark)">Packet Switching — independent paths</text>
      <circle cx="250" cy="50" r="12" fill="var(--spark)"/><text x="250" y="55" text-anchor="middle" font-size="10" fill="#fff">A</text>
      <circle cx="330" cy="25" r="10" fill="var(--ink-soft)"/><circle cx="330" cy="50" r="10" fill="var(--ink-soft)"/><circle cx="330" cy="75" r="10" fill="var(--ink-soft)"/>
      <circle cx="405" cy="50" r="12" fill="var(--spark)"/><text x="405" y="55" text-anchor="middle" font-size="10" fill="#fff">B</text>
      <path d="M250,50 L330,25 L405,50" stroke="var(--spark)" stroke-width="2" stroke-dasharray="4 3" fill="none"/>
      <path d="M250,50 L330,50 L405,50" stroke="var(--spark)" stroke-width="2" stroke-dasharray="4 3" fill="none"/>
      <path d="M250,50 L330,75 L405,50" stroke="var(--spark)" stroke-width="2" stroke-dasharray="4 3" fill="none"/>
      <text x="330" y="100" text-anchor="middle" font-size="9" fill="var(--ink-soft)">Different packets can take DIFFERENT routes</text>
    </svg>
    <p class="imgcaption">Circuit switching locks in one path for the whole conversation. Packet switching lets each packet find its own way through the network's routers.</p>
  </div>

  ${remember(["Circuit switching → one dedicated path, reserved for the whole session","Packet switching → data split into packets, sent independently, reassembled at destination"])}

  ${more("🔎 Want to know more? Unit 2 goes deeper","<p>In Unit 2 (Physical Layer) we'll revisit switching in more detail — including the exact phases circuit switching goes through, and the two flavours of packet switching (datagram vs virtual-circuit).</p>")}
`;

CONTENT.internet = `
  ${explain(`<p>The most famous "internet" is written with a capital <strong>I</strong> — <strong>the Internet</strong>. It is made up of thousands of interconnected networks working together across the world.</p>`)}

  <h3>How do people connect to the Internet?</h3>
  <div class="chiprow">
    <span class="chip">☎️ Telephone lines (Dial-up / DSL)</span>
    <span class="chip">📺 Cable networks</span>
    <span class="chip">📶 Wireless networks</span>
    <span class="chip">🔌 Direct connection</span>
  </div>

  ${more("🔎 Want to know more? A quick history of the Internet","<p>1969 — The first network links were made between UCLA, Stanford, UC Santa Barbara and University of Utah using the Interface Message Processor (IMP), running on the Network Control Protocol (NCP).</p>"+
  "<p>1972 — Vint Cerf and Bob Kahn began the 'Internetting Project', introducing the idea of a gateway to move data between different networks.</p>"+
  "<p>1977 — TCP was split into two protocols: <strong>TCP</strong> (Transmission Control Protocol) and <strong>IP</strong> (Internet Protocol) — together known as <strong>TCP/IP</strong>, still used today.</p>"+
  "<p>1983 — TCP/IP officially became the standard protocol for ARPANET, and it split into ARPANET (civilian) and MILNET (military).</p>"+
  "<p>1986 onward — NSFNET connected major supercomputer centers; by 1990 it replaced ARPANET entirely, and by 1995 the web browser (Netscape Navigator) brought the Internet to everyday users.</p>")}

  ${more("🔎 Want to know more? How is the whole world physically connected?","<p>Surprisingly, it's mostly <strong>undersea (submarine) cables</strong> running along ocean floors between continents that carry most of the world's Internet traffic — including several cable landing stations right here in India!</p>")}

  ${remember(["The Internet = thousands of networks connected worldwide","TCP/IP is the protocol suite that makes the modern Internet work"])}
`;

CONTENT.layers = `
  ${explain(`<p>Real communication is complex, so instead of solving it as one giant problem, engineers split the task into <strong>layers</strong> — each layer handles one job and follows its own protocol. This is called <strong>protocol layering</strong>.</p>`)}

  ${analogy(`<p>Think of sending a parcel through a courier company: you pack the item (application), the courier puts a shipping label (transport), it gets sorted by destination city (network), loaded onto the right truck (data link), and physically driven on the road (physical). Each step only worries about its own job.</p>`)}

  <h3>The 5 layers of TCP/IP (bottom to top)</h3>
  <div class="diagram" id="layerDiagram">
    <div class="node clickable" data-pop="Carries the raw bits of a frame across the physical link, as electrical or optical signals.">
      <span class="emoji">🔌</span>1. Physical
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="Takes data and wraps it into a 'frame' to move it safely across one link.">
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

  <h3 style="margin-top:24px;">Key protocols at each layer</h3>
  <div class="chiprow">
    <span class="chip">Network: IP, ICMP, ARP, DHCP</span>
    <span class="chip">Transport: TCP, UDP</span>
    <span class="chip">Application: HTTP, SMTP, FTP, DNS, TELNET/SSH</span>
  </div>

  <p style="margin-top:16px;"><strong>TCP</strong> is connection-oriented — it first sets up a logical connection before sending data, and provides flow, error, and congestion control. <strong>UDP</strong> is connectionless — it just sends data without setting up a connection first, which makes it faster but less reliable — good for short messages where speed matters more than guaranteed delivery.</p>

  <div class="imgcard">
    <svg viewBox="0 0 420 130">
      <g font-size="11" fill="var(--ink)" font-weight="700">
        <rect x="10" y="10" width="400" height="20" rx="4" fill="none" stroke="var(--line)" stroke-width="2"/>
        <text x="210" y="24" text-anchor="middle">DATA (Application layer message)</text>

        <rect x="10" y="38" width="400" height="20" rx="4" fill="none" stroke="var(--line)" stroke-width="2"/>
        <rect x="10" y="38" width="35" height="20" rx="4" fill="var(--rail)"/>
        <text x="27" y="52" text-anchor="middle" font-size="9" fill="#fff">TCP</text>
        <text x="230" y="52" text-anchor="middle" font-weight="400">DATA</text>

        <rect x="10" y="66" width="400" height="20" rx="4" fill="none" stroke="var(--line)" stroke-width="2"/>
        <rect x="10" y="66" width="35" height="20" rx="4" fill="var(--rail)"/>
        <text x="27" y="80" text-anchor="middle" font-size="9" fill="#fff">TCP</text>
        <rect x="45" y="66" width="35" height="20" fill="var(--spark)"/>
        <text x="62" y="80" text-anchor="middle" font-size="9" fill="#fff">IP</text>
        <text x="245" y="80" text-anchor="middle" font-weight="400">DATA</text>

        <rect x="10" y="94" width="400" height="20" rx="4" fill="none" stroke="var(--line)" stroke-width="2"/>
        <rect x="10" y="94" width="35" height="20" fill="var(--rail)"/>
        <text x="27" y="108" text-anchor="middle" font-size="9" fill="#fff">TCP</text>
        <rect x="45" y="94" width="35" height="20" fill="var(--spark)"/>
        <text x="62" y="108" text-anchor="middle" font-size="9" fill="#fff">IP</text>
        <rect x="80" y="94" width="35" height="20" rx="4" fill="var(--volt)"/>
        <text x="97" y="108" text-anchor="middle" font-size="9">Frame</text>
        <text x="260" y="108" text-anchor="middle" font-weight="400">DATA</text>
      </g>
    </svg>
    <p class="imgcaption">Encapsulation: as data moves down the layers, each one wraps the data with its own header — a TCP header, then an IP header, then a frame header — like nesting envelopes inside envelopes.</p>
  </div>

  ${more("🔎 Want to know more? Encapsulation","<p>As data travels down the layers on the sender's side, each layer adds its own header — this is called <strong>encapsulation</strong>. On the receiver's side, each layer removes its matching header as data moves up — this is <strong>decapsulation</strong>.</p>")}

  ${more("🔎 Want to know more? The OSI Model","<p>The <strong>OSI Model</strong> (Open Systems Interconnection), defined by ISO, is a similar 7-layer reference model. It splits TCP/IP's Application layer into 3 separate layers (Application, Presentation, Session) and keeps the rest similar. It's mostly used today as a teaching/reference model to understand networking concepts.</p>")}

  ${remember(["TCP/IP has 5 layers: Physical → Data-Link → Network → Transport → Application","Each layer only talks to the same layer on the other device (logically)","TCP = reliable, connection-oriented · UDP = fast, connectionless"])}
`;

/* ================= UNIT 2 CONTENT ================= */

CONTENT.signals = `
  ${explain(`
    <p>Communication at the physical layer really means exchanging <strong>signals</strong>. Data has to be turned into a signal before it can travel across a medium. Both data and signals can be <strong>analog</strong> or <strong>digital</strong>.</p>
  `)}

  <div class="flow-grid">
    <div class="flow-card">
      <h4>🌊 Analog</h4>
      <p style="font-size:14.5px;"><strong>Analog data</strong> is continuous — it can take any value smoothly, with no jumps (like your voice). An <strong>analog signal</strong> has infinitely many levels of intensity over time — a smooth wave.</p>
    </div>
    <div class="flow-card">
      <h4>🔘 Digital</h4>
      <p style="font-size:14.5px;"><strong>Digital data</strong> has discrete (separate, countable) states. A <strong>digital signal</strong> can only take a limited number of defined values — often just 1 and 0.</p>
    </div>
  </div>

  ${analogy(`<p>Analog is like a water tap you can open smoothly to any amount — a little, a lot, or anywhere in between. Digital is like a light switch — it's either ON or OFF, with nothing "in between" that counts.</p>`)}

  <div class="imgcard">
    <svg viewBox="0 0 420 130">
      <text x="10" y="16" font-size="11" font-weight="700" fill="var(--rail)">Analog signal (smooth wave)</text>
      <path d="M10,45 Q35,15 60,45 T110,45 T160,45 T210,45" stroke="var(--rail)" stroke-width="3" fill="none"/>

      <text x="10" y="80" font-size="11" font-weight="700" fill="var(--spark)">Digital signal (only two levels)</text>
      <path d="M10,110 L10,95 L45,95 L45,110 L80,110 L80,95 L115,95 L115,110 L150,110 L150,95 L185,95 L185,110 L210,110" stroke="var(--spark)" stroke-width="3" fill="none"/>
    </svg>
    <p class="imgcaption">An analog signal glides smoothly between values, like the top wave. A digital signal jumps only between fixed levels (here, just "high" and "low"), like the bottom one.</p>
  </div>

  <h3>Periodic vs Nonperiodic Signals</h3>
  <p>A <strong>periodic signal</strong> repeats the same pattern again and again over equal time frames. One full repeat is called a <strong>cycle</strong>. A <strong>nonperiodic signal</strong> keeps changing without ever repeating a pattern.</p>

  ${analogy(`<p>A periodic signal is like your heartbeat — the same "lub-dub" pattern repeats over and over. A nonperiodic signal is like someone knocking on a door randomly — no fixed pattern.</p>`)}

  <p style="margin-top:10px;">In real data communication: <strong>periodic analog signals</strong> and <strong>nonperiodic digital signals</strong> are the ones commonly used.</p>

  ${remember(["Analog data/signal = continuous, smooth, infinite levels","Digital data/signal = discrete, limited defined values (often just 0 and 1)","Periodic signal = repeats a pattern (cycle) · Nonperiodic signal = never repeats"])}
`;

CONTENT.digitalnums = `
  ${explain(`<p>Digital signals are described using a few key numbers. Let's meet them one at a time.</p>`)}

  <h3>📊 Bit Rate</h3>
  <p>The <strong>bit rate</strong> is the number of bits sent in one second, measured in <strong>bits per second (bps)</strong>. If a signal has <strong>L</strong> possible levels, each level needs <strong>log₂L</strong> bits to represent it.</p>

  <h3 style="margin-top:20px;">📏 Bit Length</h3>
  <p>The <strong>bit length</strong> is the physical distance one bit occupies on the transmission medium — just like Distance = Speed × Time:</p>
  <p style="text-align:center; font-weight:700; background:var(--bg); padding:10px; border-radius:10px;">Bit Length = Bit Interval × Propagation Speed</p>

  ${more("🔎 Want to know more? A worked example","<p>If the Bit Rate = 8 bps, then Bit Interval = 1/8 = 0.125 seconds. If the propagation speed is 2×10⁸ m/s, then Bit Length = 0.125 × 2×10⁸ = <strong>25,000 km</strong> — that's how much physical 'space' one single bit occupies on the wire!</p>")}

  <h3 style="margin-top:20px;">〰️ Frequency &amp; Bandwidth</h3>
  <div class="chiprow">
    <span class="chip">Frequency — number of wave cycles passing a fixed point per second, measured in Hertz (Hz)</span>
    <span class="chip">Bandwidth — the data transfer capacity of a network, in bps (or the range of frequencies, in Hz)</span>
  </div>

  ${analogy(`<p>Bit rate is like how many cars pass a toll gate every second. Bandwidth is like how many lanes the highway has — more lanes (bandwidth) let more cars (bits) through per second.</p>`)}

  <h3 style="margin-top:20px;">A digital signal is really made of many analog waves</h3>
  <p>Surprisingly, a digital (square-shaped) signal can be built by adding together many simple analog sine waves of different frequencies — this is its <strong>composite</strong> form. The more sine waves (harmonics) we add, the closer the result looks to a perfect square wave. A perfectly exact square wave would need <strong>infinite bandwidth</strong> — impossible in real life — so real digital signals are always a practical approximation.</p>

  ${remember(["Bit rate = bits sent per second (bps)","L levels need log₂L bits each","Bit length = bit interval × propagation speed","Frequency = cycles/second (Hz) · Bandwidth = capacity of the channel","A digital signal is actually a composite of many analog sine waves"])}
`;

CONTENT.transmission = `
  ${explain(`<p>Once we have a digital signal, how do we actually send it from point A to point B? There are two approaches.</p>`)}

  <div class="flow-grid">
    <div class="flow-card">
      <h4>🔵 Baseband Transmission</h4>
      <p style="font-size:14.5px;">Sending the digital signal <strong>directly</strong>, without converting it to analog. This needs a <strong>low-pass channel</strong> — one whose bandwidth starts from zero.</p>
    </div>
    <div class="flow-card">
      <h4>🟠 Broadband Transmission</h4>
      <p style="font-size:14.5px;">Also called <strong>modulation</strong> — converting the digital signal into an analog one before sending. This lets us use a <strong>bandpass channel</strong> — one whose bandwidth does NOT start from zero.</p>
    </div>
  </div>

  ${analogy(`<p>Baseband is like shouting a message directly down an empty hallway — it works, but only if the hallway (channel) is completely open from one end. Broadband is like putting your voice onto a radio carrier wave — now it can travel through channels that wouldn't carry your raw voice directly.</p>`)}

  <h3>Baseband with a limited channel: an example</h3>
  <p>With limited bandwidth, we can only approximate a digital signal using its <strong>first harmonic</strong> (the simplest matching sine wave), found using: <strong>f = N/2</strong> (N = bit rate).</p>
  <div class="card" style="background:var(--bg);">
    <p style="margin:0;"><strong>Worked example:</strong> Signal pattern <code>01010101</code>, Bit Rate N = 8 bps.</p>
    <ul style="margin:8px 0 0;">
      <li>Each bit lasts 1/8 = 0.125 seconds</li>
      <li>One full cycle (0→1→0→1) takes 2 bits = 0.25 seconds</li>
      <li>So frequency = 1 ÷ 0.25 = <strong>4 Hz</strong> — matching f = N/2 = 8/2 = 4 Hz</li>
    </ul>
  </div>
  <p style="margin-top:10px;">Adding more harmonics makes the transmitted wave look closer to the ideal square shape — but each added harmonic also needs more bandwidth.</p>

  ${remember(["Baseband = send digital signal as-is (needs a low-pass channel)","Broadband = modulate digital → analog first (works on a bandpass channel)","First harmonic frequency ≈ N/2, where N is the bit rate","More harmonics = closer to ideal shape, but needs more bandwidth"])}
`;

CONTENT.performance = `
  ${explain(`<p>How do we judge whether a network link is "good"? A few key performance measures are used together.</p>`)}

  <div class="flow-grid">
    <div class="flow-card">
      <h4>📶 Bandwidth</h4>
      <p style="font-size:14.5px;">Can mean the range of frequencies a channel can carry (Hz), OR the number of bits per second it can transmit (bps).</p>
    </div>
    <div class="flow-card">
      <h4>🚀 Throughput</h4>
      <p style="font-size:14.5px;">How fast data is <strong>actually</strong> sent through the network. Bandwidth is the potential; throughput is the reality.</p>
    </div>
    <div class="flow-card">
      <h4>📶 Jitter</h4>
      <p style="font-size:14.5px;">The problem when different packets face different delays — very noticeable and disruptive for time-sensitive audio/video calls.</p>
    </div>
  </div>

  <h3 style="margin-top:22px;">⏱️ Latency — the 4 delays that add up</h3>
  <p>Latency is how long an entire message takes to fully arrive, from the moment the first bit leaves the source. It is the sum of four parts. Tap each to learn more.</p>
  <div class="diagram">
    <div class="node clickable" data-pop="Time for the first bit to travel from source to destination. Formula: Propagation Time = Distance ÷ Propagation Speed.">
      <span class="emoji">🛰️</span>Propagation Time
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="Time to push ALL the bits of the message into the channel. Formula: Transmission Time = Message Size ÷ Bandwidth.">
      <span class="emoji">📤</span>Transmission Time
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="Time each in-between device holds the message before it can process it — like waiting in a line.">
      <span class="emoji">⏳</span>Queuing Time
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="Time routers take just to process (read) the packet header.">
      <span class="emoji">⚙️</span>Processing Delay
      <div class="node-pop"></div>
    </div>
  </div>
  <p style="text-align:center; font-weight:700; background:var(--bg); padding:10px; border-radius:10px; margin-top:14px;">Latency = Propagation Time + Transmission Time + Queuing Time + Processing Delay</p>

  <h3 style="margin-top:22px;">🔢 Bandwidth-Delay Product</h3>
  <p>This is simply <strong>Bandwidth × Delay</strong> — it tells us how many bits can be "in flight," filling up the link at any given moment, like water filling a pipe.</p>

  ${analogy(`<p>Think of a water pipe: bandwidth is the pipe's width, throughput is the actual flow you measure coming out, latency is how long it takes the first drop to reach the other end, and the bandwidth-delay product is the total amount of water inside the pipe at once.</p>`)}

  ${remember(["Bandwidth = potential capacity · Throughput = actual achieved speed","Latency = Propagation + Transmission + Queuing + Processing delay","Bandwidth-Delay Product = bits that can fill the link at once","Jitter = inconsistent delay — bad for live audio/video"])}
`;

CONTENT.modes = `
  ${explain(`<p>Once bits are ready to travel, they can be sent over the medium in different arrangements — this is the <strong>transmission mode</strong>.</p>`)}

  <div class="flow-grid">
    <div class="flow-card">
      <h4>➡️➡️➡️ Parallel</h4>
      <p style="font-size:14.5px;">Groups of <strong>n</strong> bits are sent <strong>at the same time</strong>, each on its own wire. <strong>Advantage:</strong> fast. <strong>Disadvantage:</strong> costly (needs many wires).</p>
    </div>
    <div class="flow-card">
      <h4>➡️ Serial</h4>
      <p style="font-size:14.5px;">Bits are sent <strong>one after another</strong> on a single wire. Cheaper, but needs a way to know where one unit of data ends and the next begins.</p>
    </div>
  </div>

  ${analogy(`<p>Parallel is like several friends walking through several doors side-by-side at once — fast, but you need many doors. Serial is like everyone filing through just one door, one at a time — slower, but only one door is needed.</p>`)}

  <h3>Three flavours of Serial Transmission</h3>
  <div class="chiprow">
    <span class="chip">Asynchronous — each byte gets its own start/stop bits; cheap and effective</span>
    <span class="chip">Synchronous — a continuous stream, no start/stop bits; the receiver groups the bits itself; fast</span>
    <span class="chip">Isochronous — guarantees data arrives at a fixed, steady rate; used when delay simply cannot be tolerated</span>
  </div>

  ${analogy(`<p>Asynchronous is like sending separate letters, each with its own stamp and envelope marking where it starts and ends. Synchronous is like a non-stop conveyor belt of letters with no gaps — the receiver has to know how to split them. Isochronous is like a train that MUST arrive exactly on schedule every single time — essential for live video calls, where a "late" frame is as bad as a missing one.</p>`)}

  ${remember(["Parallel = many bits at once (fast, costly)","Asynchronous = start/stop bits per byte (cheap)","Synchronous = continuous stream, no gaps (fast)","Isochronous = guaranteed fixed-rate arrival (for real-time audio/video)"])}
`;

CONTENT.multiplexing = `
  ${explain(`<p><strong>Multiplexing</strong> is a set of techniques that let multiple signals share a single data link at the same time — instead of needing a separate physical link for every signal. A <strong>multiplexer (MUX)</strong> combines many lines into one (many-to-one); a <strong>demultiplexer (DEMUX)</strong> splits it back apart (one-to-many) at the other end.</p>
  <p>Two words are important here: a <strong>link</strong> is the actual physical path the data travels on, while a <strong>channel</strong> is just the portion of that link carrying one particular transmission — so one link can be shared by many channels at once.</p>`)}

  ${analogy(`<p>Think of a school van that picks up many students (many-to-one, like a MUX) from different houses on one route, and then drops each one off at their own individual school (one-to-many, like a DEMUX) — one van (the link) serves many students, and each student's individual "ride" is like a channel.</p>`)}

  <div class="imgcard">
    <svg viewBox="0 0 380 130">
      <text x="90" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="var(--rail)">FDM — split by frequency</text>
      <rect x="20" y="25" width="140" height="20" fill="var(--rail)"/><text x="90" y="39" text-anchor="middle" font-size="9" fill="#fff">Signal 1 — Frequency Band A</text>
      <rect x="20" y="48" width="140" height="20" fill="var(--spark)"/><text x="90" y="62" text-anchor="middle" font-size="9" fill="#fff">Signal 2 — Frequency Band B</text>
      <rect x="20" y="71" width="140" height="20" fill="var(--volt)"/><text x="90" y="85" text-anchor="middle" font-size="9">Signal 3 — Frequency Band C</text>
      <text x="90" y="105" text-anchor="middle" font-size="9" fill="var(--ink-soft)">All sent at once, sharing time,</text>
      <text x="90" y="117" text-anchor="middle" font-size="9" fill="var(--ink-soft)">each on its own frequency band</text>

      <text x="290" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="var(--spark)">TDM — split by time</text>
      <rect x="220" y="25" width="45" height="66" fill="var(--rail)"/><text x="242" y="60" text-anchor="middle" font-size="9" fill="#fff" transform="rotate(-90 242 60)">Slot 1</text>
      <rect x="265" y="25" width="45" height="66" fill="var(--spark)"/><text x="287" y="60" text-anchor="middle" font-size="9" fill="#fff" transform="rotate(-90 287 60)">Slot 2</text>
      <rect x="310" y="25" width="45" height="66" fill="var(--volt)"/><text x="332" y="60" text-anchor="middle" font-size="9" transform="rotate(-90 332 60)">Slot 3</text>
      <text x="287" y="105" text-anchor="middle" font-size="9" fill="var(--ink-soft)">Each signal gets the FULL frequency</text>
      <text x="287" y="117" text-anchor="middle" font-size="9" fill="var(--ink-soft)">band, but only during its own time slot</text>
    </svg>
    <p class="imgcaption">FDM gives every signal its own frequency "lane" running simultaneously. TDM gives every signal the whole "lane" but only for its own turn in time.</p>
  </div>

  <div class="tabbar" id="muxTabs">
    <button class="tabbtn active" data-tab="fdm">📻 FDM</button>
    <button class="tabbtn" data-tab="wdm">💡 WDM</button>
    <button class="tabbtn" data-tab="tdm">⏱️ TDM</button>
  </div>

  <div class="tabpanel active" data-tab="fdm">
    <div class="card">
      <p><strong>Frequency-Division Multiplexing</strong> is an <strong>analog</strong> technique used when a link's bandwidth is bigger than the combined bandwidth of all the signals sharing it.</p>
      <p>Each sending device modulates its signal onto a <strong>different carrier frequency</strong>. All these modulated signals are then combined into a single composite signal for transport. On the receiving end, a demultiplexer uses filters to break the composite signal back into its individual component signals, which are then demodulated back to their original form.</p>
      <p>To stop neighbouring signals from overlapping and interfering with each other, small unused strips of bandwidth called <strong>guard bands</strong> are left between each channel.</p>
      ${analogy(`<p>FDM is exactly how a single FM radio band carries many different stations at once — Station A broadcasts at 91.1 MHz, Station B at 94.3 MHz, and so on. Your radio "tunes in" to just one frequency at a time, the same way a demultiplexer filters out one channel from the shared link.</p>`)}
    </div>
  </div>

  <div class="tabpanel" data-tab="wdm">
    <div class="card">
      <p><strong>Wavelength-Division Multiplexing</strong> is designed specifically to make the most of the huge data-rate capability of <strong>fiber-optic cable</strong>. Using one fiber to carry just a single signal would waste almost all of its available bandwidth — so WDM combines several light signals into that one fiber instead.</p>
      <p>The idea is identical to FDM — different signals travel at different frequencies — but in WDM, everything happens as <strong>optical signals</strong> transmitted through fiber-optic channels, and the frequencies (or equivalently, wavelengths of light) involved are extremely high compared to ordinary FDM.</p>
    </div>
  </div>

  <div class="tabpanel" data-tab="tdm">
    <div class="card">
      <p><strong>Time-Division Multiplexing</strong> is a <strong>digital</strong> technique. Instead of sharing frequency (like FDM), connections share <strong>time</strong> — each connection gets its own tiny time slot within a repeating frame. TDM comes in two different schemes.</p>
    </div>

    <div class="card" style="border-left:8px solid var(--rail);">
      <h4>🔵 Synchronous TDM</h4>
      <p>If there are <strong>n</strong> connections, every frame is divided into exactly <strong>n</strong> fixed time slots — one guaranteed slot per line, whether or not that line actually has data ready at that moment. If the duration of one input unit is <strong>T</strong>, then each slot lasts <strong>T/n</strong>, and the whole frame still takes time <strong>T</strong> to complete. Because of this, the data rate on the shared link ends up <strong>n times faster</strong> than any single input line, while each individual unit of data only gets to occupy a slot <strong>n times shorter</strong> than before.</p>
      <p>The multiplexer and demultiplexer behave like two switches spinning in sync, but in opposite directions. As the multiplexer's "switch" opens in front of a connection, that connection gets its brief turn to place a unit of data onto the shared link — this taking-turns process is called <strong>interleaving</strong>.</p>
      <div class="card" style="background:var(--bg); margin-top:10px;">
        <p style="margin:0;"><strong>Worked example:</strong> 3 input lines share one link using Synchronous TDM (n = 3).</p>
        <p style="margin:6px 0 0;">Each frame is split into exactly 3 slots. Line 1 always gets slot 1, Line 2 always gets slot 2, Line 3 always gets slot 3 — every single frame, in strict rotation — even on a frame where, say, Line 2 has nothing to send (that slot just goes empty).</p>
      </div>

      ${more("🔎 Want to know more? What if the input lines run at different speeds?","<p>A real problem: imagine 3 devices sending at 100 bps, 40 bps, and 10 bps — they don't divide evenly into equal slots! Three strategies (used alone or combined) solve this:</p>"+
      "<ul>"+
      "<li><strong>Multilevel Multiplexing</strong> — first combine several of the slower lines together into their own mini-multiplexer, then merge that combined stream into the main frame alongside the faster lines, so everything lines up evenly.</li>"+
      "<li><strong>Multiple-Slot Allocation</strong> — instead of forcing every line to get exactly one slot, a faster line is simply given <strong>more than one slot</strong> per frame, in proportion to how much faster it is.</li>"+
      "<li><strong>Pulse Stuffing</strong> — the opposite trick: if one line is slightly slower than what a slot requires, extra filler ('dummy') bits are deliberately stuffed in to artificially bring it up to the required rate.</li>"+
      "</ul>"+
      "<p><strong>Frame Synchronization:</strong> if the multiplexer and demultiplexer ever fall out of sync, a bit belonging to one channel could accidentally be delivered to the wrong channel! The fix is simple — add extra <strong>framing bits</strong> to the start of every frame, giving the demultiplexer a reliable marker to re-sync against.</p>")}
    </div>

    <div class="card" style="border-left:8px solid var(--spark);">
      <h4>🟠 Statistical TDM</h4>
      <p>Synchronous TDM can waste a lot of bandwidth reserving slots for lines that have nothing to send. <strong>Statistical TDM</strong> fixes this by allocating slots <strong>dynamically</strong> — the number of slots in each frame is actually <strong>less</strong> than the number of input lines!</p>
      <p>The multiplexer checks every input line in a <strong>round-robin</strong> fashion (one after another, in turn): if a line has data ready, it gets a slot; if not, the multiplexer simply skips it and moves on to check the next line — no slot is wasted on silence.</p>
      <p>Because a slot is no longer tied to a fixed, predictable position, every slot must now also carry an <strong>address</strong> telling the demultiplexer which output line the data belongs to. (Synchronous TDM never needed this, since each line's slot position was always fixed and predictable.)</p>
      <div class="chiprow">
        <span class="chip">Addressing needs n = log₂N bits for N output lines — e.g. 8 output lines need just a 3-bit address</span>
        <span class="chip">Slot size — since a slot now carries both data AND an address, the ratio between them must stay reasonable for efficient transmission</span>
        <span class="chip">No synchronization bit needed — the address itself already identifies the line</span>
        <span class="chip">Bandwidth — the link's total capacity is usually less than the sum of all channels' individual capacities, sized based on real usage statistics rather than the worst case</span>
      </div>
    </div>

    ${analogy(`<p><strong>Synchronous TDM</strong> is like a school bus with fixed, numbered seats — Seat 1 is always reserved for Student A, Seat 2 always for Student B, and so on, every single day, even if Student B is absent and that seat rides empty. <strong>Statistical TDM</strong> is like a smarter bus that only stops for students who are actually waiting, checking each stop in order — but since seats are no longer fixed, every student now needs to show a name tag (the address) so the driver knows where each one gets off.</p>`)}
  </div>

  ${remember(["Multiplexing = sharing one link among many signals · MUX combines, DEMUX separates","Link = the physical path · Channel = one transmission's share of that link","FDM = splits by frequency (analog), separated by guard bands","WDM = FDM for fiber-optic light signals (very high frequency)","Synchronous TDM = fixed slot per line every frame (interleaving); may waste slots on idle lines","Uneven input speeds fixed by: Multilevel Multiplexing, Multiple-Slot Allocation, or Pulse Stuffing","Statistical TDM = slots given only to lines with data (round-robin), needs an address in every slot, no sync bit needed"])}
`;

CONTENT.media = `
  ${explain(`<p>Transmission media are the physical paths signals travel through. They're split into two big families. Tap a tab to explore each medium.</p>`)}

  <div class="flow-grid">
    <div class="flow-card">
      <h4>🔌 Guided Media</h4>
      <p style="font-size:14.5px;">Provide an actual physical channel — the signal is directed and contained within the medium's physical limits.</p>
    </div>
    <div class="flow-card">
      <h4>📡 Unguided Media</h4>
      <p style="font-size:14.5px;">Transport electromagnetic waves through the air, without any physical conductor — this is what we call "wireless."</p>
    </div>
  </div>

  <div class="tabbar" id="mediaTabs">
    <button class="tabbtn active" data-tab="twisted">🧵 Twisted-Pair</button>
    <button class="tabbtn" data-tab="coax">📺 Coaxial</button>
    <button class="tabbtn" data-tab="fiber">💡 Fiber-Optic</button>
    <button class="tabbtn" data-tab="radio">📻 Radio</button>
    <button class="tabbtn" data-tab="microwave">📶 Microwave</button>
    <button class="tabbtn" data-tab="infrared">🔴 Infrared</button>
  </div>

  <div class="tabpanel active" data-tab="twisted">
    <div class="card">
      <p><strong>Guided medium.</strong> Two insulated copper wires twisted around each other — one carries the signal, the other acts as a ground reference; the receiver reads the difference between them.</p>
      <p>Uses the <strong>RJ45</strong> connector. Common in telephone lines and DSL connections for voice and data.</p>
      <div class="imgcard">
        <svg viewBox="0 0 200 60">
          <path d="M20,30 Q40,10 60,30 T100,30 T140,30 T180,30" stroke="var(--rail)" stroke-width="4" fill="none"/>
          <path d="M20,30 Q40,50 60,30 T100,30 T140,30 T180,30" stroke="var(--spark)" stroke-width="4" fill="none"/>
        </svg>
        <p class="imgcaption">Two wires twisted around each other — the twisting helps cancel out electrical interference.</p>
      </div>
    </div>
  </div>
  <div class="tabpanel" data-tab="coax">
    <div class="card">
      <p><strong>Guided medium.</strong> A central copper conductor wrapped in insulation, a metal shield, and an outer jacket. Uses the <strong>BNC connector</strong>.</p>
      <p>Historically carried up to 10,000 voice signals on analog telephone networks, and up to 600 Mbps on digital networks.</p>
      <div class="imgcard">
        <svg viewBox="0 0 200 100">
          <circle cx="100" cy="50" r="45" fill="none" stroke="var(--line)" stroke-width="10"/>
          <circle cx="100" cy="50" r="32" fill="var(--bg-panel)" stroke="var(--rail)" stroke-width="3"/>
          <circle cx="100" cy="50" r="8" fill="var(--spark)"/>
        </svg>
        <p class="imgcaption">Cross-section: a central copper core (center), surrounded by insulation, then a braided metal shield (outer ring) that blocks interference.</p>
      </div>
    </div>
  </div>
  <div class="tabpanel" data-tab="fiber">
    <div class="card">
      <p><strong>Guided medium.</strong> Made of glass or plastic, and carries signals as pulses of <strong>light</strong> rather than electricity. A glass/plastic core is wrapped in a "cladding" of less dense glass/plastic, so light reflects internally and stays inside the core (single-mode = one straight path; multimode = many zig-zag light paths).</p>
      <p><strong>Advantages:</strong> very high bandwidth, very little signal loss, immune to electrical interference, corrosion-resistant, lightweight, and hard to "tap" secretly.</p>
      <p><strong>Disadvantages:</strong> expensive, tricky to install/maintain, and light can only travel in one direction per fiber.</p>
      <p>Used for backbone networks and standards like <strong>SONET</strong>.</p>
      <div class="imgcard">
        <svg viewBox="0 0 220 70">
          <rect x="10" y="15" width="200" height="40" rx="18" fill="none" stroke="var(--line)" stroke-width="8"/>
          <rect x="10" y="30" width="200" height="10" fill="var(--volt)"/>
          <path d="M15,35 L50,25 L85,45 L120,25 L155,45 L195,30" stroke="var(--spark)" stroke-width="2" fill="none" stroke-dasharray="3 2"/>
        </svg>
        <p class="imgcaption">Light (dashed path) bounces along inside the core (yellow), reflecting off the cladding (outer ring) so it never escapes.</p>
      </div>
    </div>
  </div>
    </div>
  </div>
  <div class="tabpanel" data-tab="radio">
    <div class="card">
      <p><strong>Unguided (wireless).</strong> Frequencies from 3 kHz to 1 GHz. Mostly <strong>omnidirectional</strong> (spreads in all directions) and can travel long distances by bouncing off the sky — great for AM radio broadcasting. Low/medium frequency radio waves can even penetrate walls.</p>
    </div>
  </div>
  <div class="tabpanel" data-tab="microwave">
    <div class="card">
      <p><strong>Unguided (wireless).</strong> Frequencies from 1–300 GHz. <strong>Unidirectional</strong> — the sending and receiving antennas must be carefully aligned, and it travels line-of-sight (so tall towers/repeaters are needed over distance). High-frequency microwaves cannot pass through walls. Great for point-to-point (unicast) links.</p>
    </div>
  </div>
  <div class="tabpanel" data-tab="infrared">
    <div class="card">
      <p><strong>Unguided (wireless).</strong> Frequencies from 300 GHz to 400 THz. Good for short-range communication (like a TV remote), but cannot penetrate walls — which actually helps avoid interference between rooms. <strong>IrDA</strong> is the standards association for infrared device communication (keyboards, mice, printers).</p>
    </div>
  </div>

  ${remember(["Guided = travels through a physical medium (twisted-pair, coaxial, fiber-optic)","Unguided = wireless (radio, microwave, infrared)","Fiber-optic = fastest and most secure, but priciest and hardest to install","Radio = long range & omnidirectional · Microwave = line-of-sight & unidirectional · Infrared = short-range, blocked by walls"])}
`;

CONTENT.pswitching = `
  ${explain(`<p>Recall from Unit 1: a switched network is made of interlinked switches capable of creating temporary connections between devices. Different layers use different switching approaches: <strong>Physical layer → Circuit Switching</strong>, <strong>Data-Link / Network layer → Packet Switching</strong>, <strong>Application layer → Message Switching</strong>. Let's go deeper into the two major types.</p>`)}

  <h3>☎️ Circuit Switching — 3 Phases</h3>
  <div class="flow-grid">
    <div class="flow-card"><h4>1. Setup</h4><p style="font-size:14px;">The sender requests a connection; every switch along the path — and the receiver — must accept. An acknowledgment travels back before the connection is considered established.</p></div>
    <div class="flow-card"><h4>2. Data Transfer</h4><p style="font-size:14px;">Data flows through the now-dedicated path of connected circuits.</p></div>
    <div class="flow-card"><h4>3. Teardown</h4><p style="font-size:14px;">Once all data is sent, the reserved circuits are released.</p></div>
  </div>
  <p style="margin-top:10px;">Because resources stay reserved for the <strong>entire</strong> connection (even during silence), circuit switching is <strong>less efficient</strong> — but once connected, data isn't delayed further at each switch.</p>

  <h3 style="margin-top:22px;">📦 Packet Switching — 2 Types</h3>
  <div class="flow-grid">
    <div class="flow-card">
      <h4>Datagram Networks</h4>
      <p style="font-size:14.5px;">Each packet (called a <strong>datagram</strong>) is treated completely independently, even if it's part of the same message. Switches use a <strong>routing table</strong> based on the destination address to decide where each packet goes next. Works at the network layer.</p>
    </div>
    <div class="flow-card">
      <h4>Virtual-Circuit Networks</h4>
      <p style="font-size:14.5px;">A hybrid of circuit + packet switching. It has setup and teardown phases like circuit switching, but data still travels as packets. All packets follow the <strong>same path</strong>, marked by a small local address called a <strong>VCI</strong> (Virtual Circuit Identifier) rather than a full address. Works at the data-link layer.</p>
    </div>
  </div>

  ${analogy(`<p>Circuit switching is like booking a private cab for your whole round trip — reserved just for you, whether you're moving or waiting. Datagram packet switching is like mailing separate parcels that might each take a different route to the same address. Virtual-circuit switching is like a scheduled shuttle bus — it follows one fixed route every time (like a circuit), but still carries individual passengers (like packets) that hop on/off using a simple seat number instead of writing the full address each time.</p>`)}

  ${more("🔎 Want to know more? What's actually inside a switch?","<p><strong>Circuit switches</strong> use either <strong>space-division switching</strong> (physically separate paths, e.g. a crossbar switch) or <strong>time-division switching</strong> (uses TDM internally, e.g. the Time-Slot Interchange). Combining both gives a Time-Space-Time (TST) switch.</p><p><strong>Packet switches</strong> are built from four parts: Input Ports, Output Ports, a Routing Processor, and a Switching Fabric (such as a Crossbar or Banyan switch) that actually moves each packet from its input port to the correct output port.</p>")}

  ${remember(["Circuit switching = 3 phases (Setup → Data Transfer → Teardown), dedicated path, less efficient but predictable","Packet switching = no dedicated path, more efficient, resources allocated on demand","Datagram network = each packet routed independently by address","Virtual-circuit network = fixed path, but still packet-based, using a local VCI"])}
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
  ],
  quiz3: [
    {q:"The Data Link Layer's communication is best described as:", opts:["Host-to-host","Node-to-node","Process-to-process","End-to-end only"], a:1},
    {q:"An intermediate router's Data Link Layer must:", opts:["Only encapsulate","Only decapsulate","Both decapsulate AND re-encapsulate","Do nothing"], a:2},
    {q:"Fixed-size frames are also called:", opts:["Packets","Cells","Segments","Datagrams"], a:1},
    {q:"Byte stuffing inserts an extra:", opts:["Flag byte","ESC byte","CRC byte","Address byte"], a:1},
    {q:"Bit stuffing inserts an extra 0 after how many consecutive 1s?", opts:["Three","Four","Five","Six"], a:2},
    {q:"Which protocol has NEITHER flow nor error control?", opts:["Stop-and-Wait","Simple Protocol","Go-Back-N","Selective-Repeat"], a:1},
    {q:"In Go-Back-N, if a frame is lost, the sender resends:", opts:["Only that one frame","That frame and every frame after it","The entire session from scratch","Nothing, it waits"], a:1},
    {q:"Which error type affects only ONE bit in the data unit?", opts:["Burst error","Single-bit error","Redundancy error","Checksum error"], a:1},
    {q:"Which is generally harder to achieve: error detection or error correction?", opts:["Detection","Correction","They are equally hard","Neither is hard"], a:1},
    {q:"In CRC, a nonzero remainder at the receiver means:", opts:["The frame is perfectly fine","An error was very likely detected","The generator polynomial is wrong","Nothing — it's ignored"], a:1},
    {q:"In the checksum method, the checksum itself is:", opts:["The sum of all the data values","The one's complement of the sum","A random number","Always zero"], a:1},
    {q:"In random access (contention) methods, if two stations send at the same time, the result is:", opts:["A handshake","A collision","A token","A reservation"], a:1},
    {q:"Pure ALOHA's vulnerable time is:", opts:["Tfr","2 × Tfr","Tp","2 × Tp"], a:1},
    {q:"Slotted ALOHA improves on Pure ALOHA mainly by:", opts:["Adding more stations","Forcing sends only at the start of a time slot","Removing acknowledgments","Increasing frame size"], a:1},
    {q:"CSMA is based on the principle:", opts:["Send first, ask later","Sense before transmit","Always wait for a token","Ignore the channel state"], a:1},
    {q:"CSMA/CD requires the frame transmission time to be at least:", opts:["Equal to the propagation time","Half the propagation time","Twice the propagation time","Unrelated to propagation time"], a:2},
    {q:"CSMA/CA is mainly designed for:", opts:["Wired Ethernet","Wireless networks","Fiber-optic backbones","Token Ring only"], a:1},
    {q:"In Token Passing, a station may transmit only when it:", opts:["Senses an idle channel","Holds the token","Receives a poll from any station","Waits for a fixed timer"], a:1},
    {q:"Which channelization method lets every station transmit at the same time, separated only by unique codes?", opts:["FDMA","TDMA","CDMA","Polling"], a:2},
    {q:"Ethernet's Media Access Control method is:", opts:["Token passing","Polling","CSMA/CD","Reservation"], a:2},
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
      <h3 style="margin-bottom:8px;">Unit 1 · Basic Computer Concepts &amp; Network Models</h3>
      <ul>
        <li><strong>Network:</strong> connected devices that exchange data using Sender, Message, Medium, Receiver, Protocol.</li>
        <li><strong>Data Communication:</strong> exchanging data via a transmission medium; needs good Delivery, Accuracy, Timeliness, low Jitter.</li>
        <li><strong>Devices:</strong> Hosts (used directly) vs Connecting devices (router, switch, modem).</li>
        <li><strong>Data Representation:</strong> Text (ASCII/Unicode), Numbers (binary), Images (pixels/RGB), Audio (continuous sound), Video (frames or continuous feed).</li>
        <li><strong>Data Flow:</strong> Simplex (one-way), Half-Duplex (turns), Full-Duplex (both ways together).</li>
        <li><strong>Network Criteria:</strong> Performance, Reliability, Security.</li>
        <li><strong>Topologies:</strong> Mesh, Star, Bus, Ring — each with its own pros/cons.</li>
        <li><strong>LAN vs WAN:</strong> LAN = small area/hosts; WAN = large area/connecting devices; Internetwork = networks joined together.</li>
        <li><strong>Switching:</strong> Circuit switching (dedicated path) vs Packet switching (independent packets).</li>
        <li><strong>The Internet:</strong> thousands of connected networks using TCP/IP.</li>
        <li><strong>Layers:</strong> Physical → Data-Link → Network → Transport → Application, each with its own protocols.</li>
      </ul>
    </div>
    <div class="card">
      <h3 style="margin-bottom:8px;">Unit 2 · Physical Layer</h3>
      <ul>
        <li><strong>Data &amp; Signals:</strong> Analog (continuous) vs Digital (discrete); Periodic vs Nonperiodic signals.</li>
        <li><strong>Bit Rate &amp; Bandwidth:</strong> Bit rate (bps), L levels need log₂L bits, Bit Length = Bit Interval × Propagation Speed, Frequency (Hz) &amp; Bandwidth.</li>
        <li><strong>Baseband &amp; Broadband:</strong> Baseband = send digital as-is (low-pass channel); Broadband = modulate to analog first (bandpass channel).</li>
        <li><strong>Network Performance:</strong> Bandwidth vs Throughput, Latency = Propagation + Transmission + Queuing + Processing delay, Bandwidth-Delay Product, Jitter.</li>
        <li><strong>Transmission Modes:</strong> Parallel vs Serial (Asynchronous, Synchronous, Isochronous).</li>
        <li><strong>Multiplexing:</strong> FDM (frequency), WDM (fiber-optic light), TDM (time — Synchronous vs Statistical).</li>
        <li><strong>Transmission Media:</strong> Guided (twisted-pair, coaxial, fiber-optic) vs Unguided (radio, microwave, infrared).</li>
        <li><strong>Switching (in depth):</strong> Circuit switching's 3 phases; Packet switching's Datagram vs Virtual-Circuit networks.</li>
      </ul>
    </div>
    <div class="card">
      <h3 style="margin-bottom:8px;">Unit 3 · Data Link Layer &amp; MAC</h3>
      <ul>
        <li><strong>DLL Basics:</strong> node-to-node communication; source encapsulates, destination decapsulates, routers do both; broadcast vs point-to-point links.</li>
        <li><strong>Framing:</strong> fixed-size (cells) vs variable-size; character-oriented (byte stuffing) vs bit-oriented (bit stuffing) framing.</li>
        <li><strong>Flow &amp; Error Control:</strong> buffering (producer/consumer), CRC-based error control, ACK for both flow+error control, piggybacking.</li>
        <li><strong>Protocols:</strong> Simple (no control), Stop-and-Wait (ARQ), Go-Back-N, Selective-Repeat.</li>
        <li><strong>Error Detection/Correction:</strong> single-bit vs burst errors; redundancy; block coding, cyclic codes, CRC; checksum with one's complement arithmetic.</li>
        <li><strong>Media Access Control:</strong> Random Access (ALOHA, CSMA, CSMA/CD, CSMA/CA), Controlled Access (Reservation, Polling, Token Passing), Channelization (FDMA, TDMA, CDMA).</li>
        <li><strong>Ethernet:</strong> IEEE 802 standards; LLC + MAC sublayers; 4 generations from 10 Mbps to 10 Gbps.</li>
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

/* ================= NAV / MOBILE ================= */
function closeMobileNav(){
  document.getElementById("railnav").classList.remove("open");
  document.getElementById("scrim").classList.remove("show");
}
document.getElementById("menubtn")?.addEventListener("click",()=>{
  document.getElementById("railnav").classList.add("open");
  document.getElementById("scrim").classList.add("show");
});
document.getElementById("scrim")?.addEventListener("click", closeMobileNav);

/* ---- Color theme: Light / Dark / High Contrast ---- */
const themeButtons = {
  light: document.getElementById("themeLight"),
  dark: document.getElementById("themeDark"),
  highcontrast: document.getElementById("themeHC"),
};
function setTheme(name){
  document.documentElement.setAttribute("data-theme", name);
  Object.entries(themeButtons).forEach(([key,btn])=>{
    btn.classList.toggle("active", key===name);
  });
}
themeButtons.light.addEventListener("click",()=>setTheme("light"));
themeButtons.dark.addEventListener("click",()=>setTheme("dark"));
themeButtons.highcontrast.addEventListener("click",()=>setTheme("highcontrast"));

/* ---- Text size: Small / Medium / Large / Extra Large ---- */
const FONT_SIZES = ["sm","md","lg","xl"];
const FONT_LABELS = {sm:"Small", md:"Medium", lg:"Large", xl:"Extra Large"};
let fontSizeIdx = 1; // start at Medium
function applyFontSize(){
  document.documentElement.setAttribute("data-fontsize", FONT_SIZES[fontSizeIdx]);
  document.getElementById("fontLabel").textContent = FONT_LABELS[FONT_SIZES[fontSizeIdx]];
  document.getElementById("fontSmaller").disabled = fontSizeIdx===0;
  document.getElementById("fontBigger").disabled = fontSizeIdx===FONT_SIZES.length-1;
}
document.getElementById("fontSmaller").addEventListener("click",()=>{
  if(fontSizeIdx>0){ fontSizeIdx--; applyFontSize(); }
});
document.getElementById("fontBigger").addEventListener("click",()=>{
  if(fontSizeIdx<FONT_SIZES.length-1){ fontSizeIdx++; applyFontSize(); }
});
applyFontSize();

document.getElementById("spacingToggle").addEventListener("click",()=>{
  const root = document.documentElement;
  const isWide = root.getAttribute("data-spacing")==="wide";
  root.setAttribute("data-spacing", isWide ? "" : "wide");
});



/* ================= UNIT 3 CONTENT: DATA LINK LAYER ================= */

CONTENT.dlbasics = `
  ${explain(`
    <p>The <strong>Data Link Layer</strong> handles something different from what we've seen so far: while the Network layer delivers data <strong>host-to-host</strong> across an entire journey, the Data Link Layer only worries about getting data across <strong>one single link</strong> — <strong>node-to-node</strong>.</p>
  `)}

  <h3>What counts as a "node" and a "link"?</h3>
  <div class="chiprow">
    <span class="chip">🖥️ Nodes — the two end hosts AND every router in between</span>
    <span class="chip">🔗 Links — the individual network connections between each pair of nodes</span>
  </div>

  <div class="imgcard">
    <svg viewBox="0 0 420 90">
      <g stroke="var(--rail)" stroke-width="3">
        <line x1="30" y1="45" x2="140" y2="45"/>
        <line x1="140" y1="45" x2="280" y2="45"/>
        <line x1="280" y1="45" x2="390" y2="45"/>
      </g>
      <circle cx="30" cy="45" r="16" fill="var(--rail)"/><text x="30" y="50" text-anchor="middle" font-size="14" fill="#fff">🖥️</text>
      <circle cx="140" cy="45" r="16" fill="var(--spark)"/><text x="140" y="50" text-anchor="middle" font-size="14" fill="#fff">🌐</text>
      <circle cx="280" cy="45" r="16" fill="var(--spark)"/><text x="280" y="50" text-anchor="middle" font-size="14" fill="#fff">🌐</text>
      <circle cx="390" cy="45" r="16" fill="var(--rail)"/><text x="390" y="50" text-anchor="middle" font-size="14" fill="#fff">🖥️</text>
      <text x="85" y="30" text-anchor="middle" font-size="11" fill="var(--ink-soft)">Link 1</text>
      <text x="210" y="30" text-anchor="middle" font-size="11" fill="var(--ink-soft)">Link 2</text>
      <text x="335" y="30" text-anchor="middle" font-size="11" fill="var(--ink-soft)">Link 3</text>
    </svg>
    <p class="imgcaption">Two end hosts and two routers = four nodes. The three connections between them = three separate links, each handled independently by the Data Link Layer.</p>
  </div>

  <h3 style="margin-top:20px;">What does the Data Link Layer actually do at each node?</h3>
  <p>Tap each role below.</p>
  <div class="diagram">
    <div class="node clickable" data-pop="Only needs to encapsulate — wrap the packet from the network layer into a frame — since it's the very start of the journey.">
      <span class="emoji">📦</span>Source Host
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="Needs to both DEcapsulate the frame it receives AND re-encapsulate a new frame to send it onward — it's just passing through.">
      <span class="emoji">🔀</span>Intermediate Router
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="Only needs to decapsulate — unwrap the final frame to get back the original packet — since it's the end of the journey.">
      <span class="emoji">📭</span>Destination Host
      <div class="node-pop"></div>
    </div>
  </div>

  <h3 style="margin-top:20px;">Two categories of links</h3>
  <div class="flow-grid">
    <div class="flow-card">
      <h4>📡 Broadcast Link</h4>
      <p style="font-size:14.5px;">Many stations share the same link at once — like everyone in a room hearing the same shout. Needs a way to coordinate who gets to "talk" — this is exactly what Media Access Control (MAC) handles later in this unit.</p>
    </div>
    <div class="flow-card">
      <h4>➡️ Point-to-Point (Unicast) Link</h4>
      <p style="font-size:14.5px;">A dedicated link between exactly two devices — no sharing, no coordination needed.</p>
    </div>
  </div>

  ${remember(["Data Link Layer works node-to-node, on ONE link at a time (unlike Network layer's host-to-host)","Nodes = end hosts + routers · Links = the connections between them","Source host encapsulates only · Destination host decapsulates only · Routers do both","Broadcast link = shared among many stations · Point-to-point link = dedicated between two"])}
`;

CONTENT.framing = `
  ${explain(`<p>A packet at the data-link layer is called a <strong>frame</strong>. Before sending data, the Data Link Layer packs bits into frames so each one is clearly distinguishable from the next.</p>`)}

  <h3>Why not just send the whole message as ONE giant frame?</h3>
  <div class="chiprow">
    <span class="chip">🐌 A very large frame makes flow and error control inefficient</span>
    <span class="chip">💥 Even a single-bit error would force retransmitting the ENTIRE message</span>
  </div>

  <h3 style="margin-top:20px;">Fixed-size vs Variable-size framing</h3>
  <p>Frames of a <strong>fixed size</strong> are called <strong>cells</strong> — since every frame is the same size, there's no need to mark where one ends and the next begins. With <strong>variable-size framing</strong> (the common approach in LANs), we DO need a way to mark frame boundaries — two approaches exist.</p>

  <div class="tabbar" id="framingTabs">
    <button class="tabbtn active" data-tab="byte">🔤 Character/Byte-Oriented</button>
    <button class="tabbtn" data-tab="bit">🔢 Bit-Oriented</button>
  </div>

  <div class="tabpanel active" data-tab="byte">
    <div class="card">
      <p>Data is carried as 8-bit characters (like ASCII). An 8-bit (1-byte) <strong>flag</strong> — a special reserved bit pattern — is added at the very beginning and end of every frame to mark where it starts and stops.</p>
      <p><strong>The problem:</strong> what if the actual data happens to contain that exact flag pattern by coincidence? The receiver would think the frame ended early!</p>
      <p><strong>The fix — Byte Stuffing:</strong> whenever the flag pattern (or another reserved character called the <strong>escape character, ESC</strong>) appears inside the real data, the sender secretly inserts one extra ESC byte right before it. The receiver, seeing an ESC byte, knows to remove it and treat the next byte as ordinary data — not a real flag.</p>
      <div class="imgcard">
        <svg viewBox="0 0 400 110">
          <text x="10" y="18" font-size="11" font-weight="700" fill="var(--ink)">Original data (contains a flag byte, shown in orange):</text>
          <rect x="10" y="26" width="34" height="22" fill="var(--rail)"/><text x="27" y="41" text-anchor="middle" font-size="10" fill="#fff">A</text>
          <rect x="46" y="26" width="34" height="22" fill="var(--spark)"/><text x="63" y="41" text-anchor="middle" font-size="9" fill="#fff">FLAG</text>
          <rect x="82" y="26" width="34" height="22" fill="var(--rail)"/><text x="99" y="41" text-anchor="middle" font-size="10" fill="#fff">B</text>

          <text x="10" y="72" font-size="11" font-weight="700" fill="var(--ink)">After byte stuffing (ESC inserted before it):</text>
          <rect x="10" y="80" width="34" height="22" fill="var(--rail)"/><text x="27" y="95" text-anchor="middle" font-size="10" fill="#fff">A</text>
          <rect x="46" y="80" width="30" height="22" fill="var(--volt)"/><text x="61" y="95" text-anchor="middle" font-size="9">ESC</text>
          <rect x="78" y="80" width="34" height="22" fill="var(--spark)"/><text x="95" y="95" text-anchor="middle" font-size="9" fill="#fff">FLAG</text>
          <rect x="114" y="80" width="34" height="22" fill="var(--rail)"/><text x="131" y="95" text-anchor="middle" font-size="10" fill="#fff">B</text>
        </svg>
        <p class="imgcaption">The receiver removes any ESC byte it finds and treats the byte right after it as plain data — not a real flag or control character.</p>
      </div>
    </div>
  </div>

  <div class="tabpanel" data-tab="bit">
    <div class="card">
      <p>Here the data is just a raw sequence of bits (which the upper layer might interpret as text, graphics, audio, or video). Most protocols use a special 8-bit flag, <strong>01111110</strong>, as the delimiter marking each frame's start and end.</p>
      <p><strong>Bit Stuffing:</strong> whenever <strong>five consecutive 1s</strong> appear in the actual data, the sender inserts one extra <strong>0</strong> right after them. This guarantees the real data can never accidentally contain the flag pattern 0111110, since real data will never have five 1s in a row without a stuffed 0 breaking it up. The receiver removes any 0 that follows five consecutive 1s.</p>
      <div class="imgcard">
        <svg viewBox="0 0 400 90">
          <text x="10" y="18" font-size="11" font-weight="700" fill="var(--ink)">Original data:</text>
          <text x="10" y="40" font-family="monospace" font-size="16" fill="var(--rail)">0  1  1  1  1  1  0  1</text>

          <text x="10" y="65" font-size="11" font-weight="700" fill="var(--ink)">After bit stuffing (extra 0 inserted after five 1s):</text>
          <text x="10" y="85" font-family="monospace" font-size="16" fill="var(--spark)">0  1  1  1  1  1  <tspan text-decoration="underline">0</tspan>  0  1</text>
        </svg>
        <p class="imgcaption">The bold/underlined 0 is the stuffed bit — it's not part of the real data, just there to prevent confusion with the flag pattern.</p>
      </div>
    </div>
  </div>

  ${remember(["A frame = a packet at the data-link layer","Fixed-size frames = cells (no boundary marker needed) · Variable-size frames need explicit boundaries","Byte stuffing = insert an ESC byte before an accidental flag/ESC byte in the data","Bit stuffing = insert an extra 0 after five consecutive 1s in the data"])}
`;

CONTENT.flowerror = `
  ${explain(`<p>Beyond framing, the Data Link Layer is also responsible for two more core jobs: making sure the sender doesn't overwhelm the receiver, and making sure the data arrives correctly.</p>`)}

  <h3>💧 Flow Control — Producer & Consumer</h3>
  <p>Think of the sender as a <strong>producer</strong> of frames and the receiver as a <strong>consumer</strong>. If the producer makes frames faster than the consumer can use them, the receiver needs somewhere to hold the extra ones — a <strong>buffer</strong>. When that buffer fills up, the receiving Data Link Layer must tell the sending Data Link Layer to <strong>stop or slow down</strong>.</p>

  <h3 style="margin-top:20px;">🛡️ Error Control</h3>
  <p>On the sender's side: Frames → Bits → Electromagnetic Signals. On the receiver's side, this happens in reverse: Signals → Bits → Frames. Along the way, things can go wrong. When an error is detected, it is either:</p>
  <div class="chiprow">
    <span class="chip">✔️ Corrected right at the receiver, OR</span>
    <span class="chip">🗑️ Discarded, and the sender is asked to retransmit it</span>
  </div>

  ${mistake(`<p>Don't confuse Error Control with Congestion Control! Congestion is about too much traffic overall clogging the network — that's mainly handled by the Network and Transport layers (end-to-end), not the Data Link Layer, even though WANs do sometimes get involved.</p>`)}

  <h3 style="margin-top:20px;">🤝 Combining Flow &amp; Error Control: the ACK</h3>
  <p>A single <strong>acknowledgment (ACK)</strong> frame can actually do both jobs at once:</p>
  <div class="chiprow">
    <span class="chip">Flow Control message: "I've received your frame — I'm ready for the next one."</span>
    <span class="chip">Error Control message: "The frame I got was correct, with no errors."</span>
  </div>
  <p style="margin-top:12px;"><strong>Piggybacking:</strong> when data is flowing in BOTH directions between two nodes, it's efficient to attach ("piggyback") the acknowledgment for data received onto a regular data frame heading the other way — instead of sending a separate, tiny ACK-only frame every time.</p>

  <h3 style="margin-top:20px;">Connectionless vs Connection-Oriented Protocols</h3>
  <div class="flow-grid">
    <div class="flow-card">
      <h4>Connectionless</h4>
      <p style="font-size:14.5px;">Frames are independent of each other — not numbered, not ordered. Most LAN data-link protocols work this way.</p>
    </div>
    <div class="flow-card">
      <h4>Connection-Oriented</h4>
      <p style="font-size:14.5px;">Has clear Setup, Transfer, and Teardown phases. Frames ARE numbered and ordered — the receiver waits until it has every frame in a set. Used in some point-to-point protocols and some wireless LANs/WANs.</p>
    </div>
  </div>

  ${remember(["Flow control = don't overwhelm the receiver's buffer (producer/consumer problem)","Error control = correct or discard-and-retransmit corrupted frames","An ACK frame can serve BOTH flow control and error control at once","Piggybacking = attaching an ACK onto a normal data frame heading the other way","Connectionless = independent, unordered frames · Connection-oriented = Setup → Transfer → Teardown, numbered & ordered"])}
`;

CONTENT.arqprotocols = `
  ${explain(`<p>Traditionally, four protocols are defined for combining flow and error control at the data-link layer. Tap each one below.</p>`)}

  <div class="diagram">
    <div class="node clickable" data-pop="No flow control and no error control at all — the sender just sends whenever it has data ready, with no waiting and no acknowledgments.">
      <span class="emoji">🎯</span>Simple
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="Sends exactly one frame, then waits for an acknowledgment before sending the next. Uses CRC to detect corruption, plus sequence numbers.">
      <span class="emoji">✋</span>Stop-and-Wait
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="Sender can have several frames 'in flight' at once (a sliding window) without waiting for each ACK individually. If one is lost, the sender resends THAT frame and every frame after it.">
      <span class="emoji">↩️</span>Go-Back-N
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="Also uses a sliding window of multiple frames in flight, but if one frame is lost, ONLY that specific frame is resent — not the ones after it. More efficient, but the receiver needs a sorting buffer.">
      <span class="emoji">🎯</span>Selective-Repeat
      <div class="node-pop"></div>
    </div>
  </div>

  <h3>The Simple Protocol</h3>
  <p>Exactly as the name suggests — it has <strong>neither flow nor error control</strong>. The sender fires off a frame the moment it's ready, with no acknowledgment and no waiting. It works only when the receiver can always keep up.</p>

  <h3 style="margin-top:20px;">The Stop-and-Wait Protocol</h3>
  <p>This one uses <strong>both</strong> flow and error control. The sender transmits a single frame, then waits for an acknowledgment before sending the next — meaning only one frame and one ACK can ever be "in the channel" at any moment. A <strong>CRC</strong> is added to every data frame to detect corruption.</p>

  <div class="imgcard">
    <svg viewBox="0 0 380 140">
      <text x="60" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Sender</text>
      <text x="320" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Receiver</text>
      <line x1="60" y1="25" x2="60" y2="130" stroke="var(--line)" stroke-width="2"/>
      <line x1="320" y1="25" x2="320" y2="130" stroke="var(--line)" stroke-width="2"/>

      <line x1="60" y1="40" x2="320" y2="60" stroke="var(--rail)" stroke-width="2.5" marker-end="url(#arrow1)"/>
      <text x="150" y="38" font-size="10" fill="var(--rail)">Frame 0 sent</text>

      <line x1="320" y1="75" x2="60" y2="95" stroke="var(--spark)" stroke-width="2.5" marker-end="url(#arrow2)"/>
      <text x="150" y="92" font-size="10" fill="var(--spark)">ACK 1 returned</text>

      <line x1="60" y1="105" x2="320" y2="125" stroke="var(--rail)" stroke-width="2.5" marker-end="url(#arrow1)"/>
      <text x="150" y="103" font-size="10" fill="var(--rail)">Frame 1 sent</text>

      <defs>
        <marker id="arrow1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="var(--rail)"/></marker>
        <marker id="arrow2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="var(--spark)"/></marker>
      </defs>
    </svg>
    <p class="imgcaption">The sender waits for the ACK of Frame 0 before sending Frame 1 — only one frame is ever "in flight" at a time.</p>
  </div>

  <p style="margin-top:12px;">Sequence numbers are added to data frames, and acknowledgment numbers to ACK frames, so both sides can tell exactly which frame is being confirmed. Because the protocol automatically re-sends a frame if its ACK doesn't arrive, it's also known as <strong>ARQ — Automatic Repeat reQuest</strong>.</p>

  <h3 style="margin-top:20px;">Beyond Stop-and-Wait: sliding windows</h3>
  <p>Stop-and-Wait is simple but slow — the link sits idle while waiting for each ACK. <strong>Go-Back-N</strong> and <strong>Selective-Repeat</strong> both fix this using a <strong>sliding window</strong>, letting the sender have multiple frames outstanding at once. They differ only in how they recover from a lost or corrupted frame — Go-Back-N resends everything from that point onward (simpler, but wastes bandwidth resending already-good frames); Selective-Repeat resends only the exact frame that failed (efficient, but needs the receiver to buffer and reorder frames that arrive out of sequence).</p>

  ${remember(["Simple = no flow/error control at all","Stop-and-Wait = one frame at a time, waits for ACK, uses CRC + sequence numbers (this is ARQ)","Go-Back-N = sliding window, resends the lost frame AND everything after it","Selective-Repeat = sliding window, resends ONLY the lost frame"])}
`;

CONTENT.errortypes = `
  ${explain(`<p>Whenever bits travel from one point to another, interference can unpredictably change them along the way. There are two categories of errors.</p>`)}

  <div class="flow-grid">
    <div class="flow-card">
      <h4>1️⃣ Single-Bit Error</h4>
      <p style="font-size:14.5px;">Only ONE bit in the data unit changes — a 0 flips to a 1, or a 1 flips to a 0.</p>
    </div>
    <div class="flow-card">
      <h4>💥 Burst Error</h4>
      <p style="font-size:14.5px;">TWO OR MORE bits change — and this is actually the <strong>most likely</strong> type of error to happen in real networks.</p>
    </div>
  </div>

  <p style="margin-top:14px;">The number of bits affected in a burst depends on the data rate and how long the noise lasts. <strong>Example:</strong> if data is sent at 1 kbps, just 1/100th of a second of noise can corrupt 10 bits at once!</p>

  <h3 style="margin-top:20px;">Redundancy — the key idea behind catching errors</h3>
  <p>To detect or correct errors, we send some <strong>extra bits</strong> along with our actual data. These <strong>redundant bits</strong> are added by the sender and removed again by the receiver — they carry no "real" information themselves, but let the receiver check whether something went wrong.</p>

  <h3 style="margin-top:20px;">Detection vs Correction — correction is much harder!</h3>
  <p><strong>Error Detection</strong> only answers a yes/no question: did ANY error occur? It doesn't even need to know how many bits were affected — a single-bit error is treated the same as a burst error.</p>
  <p><strong>Error Correction</strong> needs much more — the exact number of corrupted bits AND their precise location in the message. This gets expensive fast: correcting a single error in an 8-bit unit means checking 8 possible locations, but correcting just two errors in that same 8-bit unit means checking 28 possible combinations!</p>

  <h3 style="margin-top:20px;">Coding: how redundancy is actually built</h3>
  <p>The sender adds redundant bits through a process that creates a mathematical relationship between the redundant bits and the real data bits. The receiver then checks whether that relationship still holds — if it doesn't, an error occurred. Coding schemes fall into two broad families:</p>
  <div class="chiprow">
    <span class="chip">🧱 Block Coding — covered next</span>
    <span class="chip">🌊 Convolutional Coding — encodes a continuous stream rather than fixed blocks</span>
  </div>

  ${remember(["Single-bit error = one bit flips · Burst error = two or more bits flip (more common in practice)","Redundancy = extra bits added purely to help detect/correct errors","Detection just says YES/NO · Correction needs the exact location(s) of the error(s) — much harder","Coding creates a relationship between redundant bits and data bits, which the receiver checks"])}
`;

CONTENT.blockcrc = `
  ${explain(`<p><strong>Block coding</strong> divides a message into fixed-size blocks, then adds redundant bits to each one.</p>`)}

  <div class="chiprow">
    <span class="chip">A dataword of k bits becomes a codeword of n bits (n &gt; k)</span>
    <span class="chip">The extra r = n − k bits are the redundant bits</span>
    <span class="chip">This gives 2ᵏ possible datawords mapped to 2ⁿ possible codewords</span>
  </div>
  <p style="margin-top:10px;">Block coding is <strong>one-to-one</strong> — the same dataword is always encoded into the exact same codeword.</p>

  <h3>How does the receiver detect an error?</h3>
  <p>Two conditions must both be true:</p>
  <ol>
    <li>The receiver has (or can figure out) a list of every <strong>valid</strong> codeword.</li>
    <li>The original codeword has changed into an <strong>invalid</strong> one during transmission.</li>
  </ol>
  <div class="card" style="background:var(--bg);">
    <p style="margin:0;"><strong>Worked scenario:</strong> the receiver expects codeword <code>011</code>.</p>
    <ul style="margin:8px 0 0;">
      <li>If the leftmost bit flips, <code>111</code> is received instead — if that's not on the valid list, the error is caught.</li>
      <li>If the right two bits flip, <code>000</code> is received instead — again caught, if invalid.</li>
    </ul>
  </div>

  <h3 style="margin-top:20px;">Cyclic Codes — a special kind of block code</h3>
  <p>In a <strong>cyclic code</strong>, if you cyclically shift (rotate) a valid codeword, the result is <strong>also</strong> a valid codeword. For example, if <code>1011000</code> is a valid codeword, then left-shifting it cyclically gives <code>0110001</code> — which is also valid.</p>

  <h3 style="margin-top:20px;">CRC — Cyclic Redundancy Check</h3>
  <p><strong>CRC</strong> is a widely-used subset of cyclic codes, common in LANs and WANs.</p>

  <div class="imgcard">
    <svg viewBox="0 0 380 110">
      <rect x="10" y="15" width="100" height="40" rx="8" fill="var(--rail)"/>
      <text x="60" y="39" text-anchor="middle" font-size="12" fill="#fff" font-weight="700">Encoder</text>
      <text x="60" y="70" text-anchor="middle" font-size="11" fill="var(--ink-soft)">divides data by</text>
      <text x="60" y="83" text-anchor="middle" font-size="11" fill="var(--ink-soft)">a generator, appends</text>
      <text x="60" y="96" text-anchor="middle" font-size="11" fill="var(--ink-soft)">the remainder</text>

      <line x1="115" y1="35" x2="185" y2="35" stroke="var(--ink-soft)" stroke-width="2" marker-end="url(#arrowcrc)"/>
      <text x="150" y="27" text-anchor="middle" font-size="10">codeword sent</text>

      <rect x="190" y="15" width="100" height="40" rx="8" fill="var(--spark)"/>
      <text x="240" y="39" text-anchor="middle" font-size="12" fill="#fff" font-weight="700">Decoder</text>
      <text x="240" y="70" text-anchor="middle" font-size="11" fill="var(--ink-soft)">divides received</text>
      <text x="240" y="83" text-anchor="middle" font-size="11" fill="var(--ink-soft)">codeword by SAME</text>
      <text x="240" y="96" text-anchor="middle" font-size="11" fill="var(--ink-soft)">generator</text>

      <line x1="295" y1="35" x2="350" y2="35" stroke="var(--ink-soft)" stroke-width="2" marker-end="url(#arrowcrc)"/>
      <text x="322" y="27" text-anchor="middle" font-size="9">remainder = 0?</text>
      <text x="322" y="55" text-anchor="middle" font-size="9" fill="var(--right)" font-weight="700">no error!</text>
      <defs><marker id="arrowcrc" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="var(--ink-soft)"/></marker></defs>
    </svg>
    <p class="imgcaption">The sender's encoder divides the data by an agreed-upon "generator" number and attaches the remainder. If the receiver's decoder divides the received codeword by that same generator and gets a remainder of 0, the frame is (very likely) error-free.</p>
  </div>

  <p style="margin-top:12px;">The divisor (generator) isn't picked randomly — it's a <strong>generator polynomial</strong> chosen specifically because it has strong mathematical properties for catching errors reliably.</p>

  ${remember(["Block coding: k-bit dataword → n-bit codeword, one-to-one mapping","Detecting an error needs: a known list of valid codewords, AND the corruption must produce an invalid one","Cyclic code = rotating a valid codeword always gives another valid codeword","CRC = divide by a generator polynomial; a nonzero remainder at the receiver signals an error"])}
`;

CONTENT.checksum = `
  ${explain(`<p><strong>Checksum</strong> is an error-detecting technique that works on a message of ANY length. On the modern Internet, it's mostly used at the Network and Transport layers rather than the Data Link Layer.</p>`)}

  <h3>A simple (but flawed) first attempt</h3>
  <p>Suppose we want to send the numbers <strong>(7, 11, 12, 0, 6)</strong>. We add them up: 7+11+12+0+6 = <strong>36</strong>. We send <strong>(7, 11, 12, 0, 6, 36)</strong> — the receiver adds the first five and checks it matches the sixth.</p>
  <p><strong>The problem:</strong> if each number fits in 4 bits (since they're all under 15), the sum 36 does NOT fit in 4 bits! We need a smarter way to keep everything the same size.</p>

  <h3 style="margin-top:20px;">The fix: One's Complement Arithmetic</h3>
  <p>In one's complement arithmetic, numbers between 0 and 2ᵐ − 1 can be represented using only <strong>m</strong> bits. If a result needs MORE than m bits, the extra leftmost bits simply "wrap around" and get added back onto the m rightmost bits.</p>

  <div class="card" style="background:var(--bg);">
    <p style="margin:0 0 8px;"><strong>Worked example — Sender's side</strong> (values 7, 11, 12, 0, 6, each as a 4-bit binary number):</p>
    <ul style="margin:0;">
      <li>0111 + 1011 = 10010 → wrap the extra leftmost bit in: 0010 + 1 = <strong>0011</strong> (3)</li>
      <li>0011 + 1100 = 1111 (15)</li>
      <li>1111 + 0000 = 1111 (15)</li>
      <li>1111 + 0110 = 10101 → wrap: 0101 + 1 = <strong>0110</strong> (6) — this is the Sum</li>
      <li><strong>Checksum</strong> = one's complement of the Sum (0110) = <strong>1001</strong> (decimal 9)</li>
    </ul>
    <p style="margin:10px 0 0;">The sender transmits the 5 original values PLUS this checksum (9).</p>
  </div>

  <div class="card" style="background:var(--bg); margin-top:12px;">
    <p style="margin:0 0 8px;"><strong>Worked example — Receiver's side</strong></p>
    <p style="margin:0;">The receiver adds ALL the received values, including the checksum itself: Data Sum (0110) + Checksum (1001) = <strong>1111</strong>. Complementing 1111 gives <strong>0000</strong> — a "positive zero," which tells the receiver: <strong style="color:var(--right);">the data was NOT corrupted!</strong></p>
  </div>

  <h3 style="margin-top:20px;">Why does this trick work?</h3>
  <p>In one's complement arithmetic there are actually two "zeros": <strong>positive zero</strong> (all bits 0) and <strong>negative zero</strong> (all bits 1) — and they are complements of each other. Adding any number to its own complement always produces a negative zero. So when the receiver adds all values (data + checksum) and gets a negative zero, then complements it, a resulting positive zero confirms everything arrived correctly.</p>

  <h3 style="margin-top:20px;">The Internet Checksum &amp; its limits</h3>
  <p>The Internet's own checksum algorithm follows the same idea, using two's complement addition combined with a one's complement conversion step. It's compact — just 16 bits can check a message of any size — but it's noticeably <strong>weaker</strong> than CRC: if, by unlucky coincidence, the sum and checksum happen to still match after corruption, the error slips through undetected.</p>
  <p>Other checksum variants exist too, such as the <strong>Fletcher Checksum</strong> and the <strong>Adler Checksum</strong>, which improve on some of the traditional checksum's weaknesses.</p>

  ${remember(["Checksum works on messages of any length, mainly used at Network/Transport layers","One's complement arithmetic wraps extra leftmost bits back onto the right side","Checksum = one's complement of the sum · Receiver adds everything (including checksum) and expects a 'positive zero'","Checksum is compact (16 bits) but weaker than CRC at catching errors"])}
`;

/* ================= UNIT 3 CONTENT: MEDIA ACCESS CONTROL ================= */

CONTENT.macbasics = `
  ${explain(`
    <p>When multiple stations share the same broadcast link (a "multipoint" link), we need rules to coordinate who gets to send and when. These rules belong to a sublayer of the Data Link Layer called <strong>Media Access Control (MAC)</strong>.</p>
  `)}

  <h3>Random Access (Contention Methods)</h3>
  <p>In <strong>random access</strong>, no station is superior to another, and no station is given control over the rest. Each time a station wants to send, it uses a procedure to decide whether or not to transmit — based on whether the medium is currently idle or busy.</p>

  <h3 style="margin-top:20px;">Why is it called "random" access?</h3>
  <div class="chiprow">
    <span class="chip">⏱️ There's no scheduled time for any station to transmit — it happens randomly among the stations</span>
    <span class="chip">🙅 No rule specifies which station goes next — stations simply compete for the medium</span>
  </div>

  <p style="margin-top:14px;">If more than one station tries to send at the same time, the result is a <strong>collision</strong>! To avoid this, every station's procedure must answer four questions:</p>
  <div class="chiprow">
    <span class="chip">When can I access the medium?</span>
    <span class="chip">What do I do if the medium is busy?</span>
    <span class="chip">How do I know if my transmission succeeded or failed?</span>
    <span class="chip">What do I do if there's an access conflict?</span>
  </div>

  <h3 style="margin-top:20px;">How random-access methods evolved</h3>
  <div class="diagram">
    <div class="node clickable" data-pop="A very simple 'multiple access' (MA) procedure from the University of Hawaii, developed in the early 1970s for wireless LANs.">
      <span class="emoji">📻</span>ALOHA
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="Carrier Sense Multiple Access — 'sense before transmit.' A station checks if the medium is idle before sending.">
      <span class="emoji">👂</span>CSMA
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="CSMA with Collision Detection — used on wired networks; a station keeps listening WHILE sending, to detect collisions early.">
      <span class="emoji">💥</span>CSMA/CD
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="CSMA with Collision Avoidance — used on wireless networks, where reliably detecting collisions directly is much harder.">
      <span class="emoji">🚫</span>CSMA/CA
      <div class="node-pop"></div>
    </div>
  </div>

  ${remember(["MAC = the data-link sublayer that coordinates access to a shared/broadcast link","Random access = no station is superior; stations compete, and collisions can happen","4 key questions: when to send, what to do if busy, how to detect success/failure, what to do on conflict","Evolution: ALOHA → CSMA → CSMA/CD (wired) and CSMA/CA (wireless)"])}
`;

CONTENT.aloha = `
  ${explain(`<p><strong>ALOHA</strong> was developed at the University of Hawaii in the early 1970s, originally for a wireless radio LAN — though the idea works on any shared medium.</p>`)}

  <h3>📻 Pure ALOHA</h3>
  <p>Each station simply sends a frame the moment it has one ready. Since there's only one shared channel, collisions are always possible when two stations transmit around the same time. Pure ALOHA relies on <strong>acknowledgments</strong>: after sending, the station expects an ACK back. If none arrives within a <strong>timeout period</strong>, the station assumes a collision occurred and resends.</p>

  <div class="chiprow">
    <span class="chip">Timeout period = 2 × Tp (twice the maximum propagation time between the two most distant stations)</span>
    <span class="chip">If ALL colliding stations just resent immediately, they'd collide again! So each waits a random <strong>backoff time</strong> first.</span>
    <span class="chip">Kmax = maximum number of retransmission attempts before giving up (usually 15)</span>
  </div>

  <p style="margin-top:12px;"><strong>Binary Exponential Backoff:</strong> after the Kth collision, the station waits a random number of time slots between 0 and 2ᴷ−1 — the possible wait range doubles after each collision (1st collision: 0–1 slots; 2nd: 0–3 slots; 3rd: 0–7 slots, and so on).</p>

  <div class="imgcard">
    <svg viewBox="0 0 380 90">
      <line x1="10" y1="60" x2="370" y2="60" stroke="var(--line)" stroke-width="2"/>
      <rect x="130" y="30" width="60" height="25" fill="var(--rail)"/>
      <text x="160" y="47" text-anchor="middle" font-size="10" fill="#fff">Frame sent</text>
      <rect x="70" y="30" width="60" height="25" fill="var(--spark)" opacity="0.35"/>
      <rect x="190" y="30" width="60" height="25" fill="var(--spark)" opacity="0.35"/>
      <text x="160" y="20" text-anchor="middle" font-size="10" font-weight="700" fill="var(--spark)">Vulnerable time = 2 × Tfr</text>
      <text x="60" y="75" font-size="9" fill="var(--ink-soft)">another station could start...</text>
      <text x="245" y="75" font-size="9" fill="var(--ink-soft)">...or finish here and still collide</text>
    </svg>
    <p class="imgcaption">In Pure ALOHA, a collision can happen if another station starts up to one full frame-time BEFORE, or finishes up to one full frame-time AFTER — a vulnerable window of 2 × Tfr.</p>
  </div>

  <h3 style="margin-top:20px;">Pure ALOHA vs Slotted ALOHA — as flowcharts</h3>
  <p>The two protocols follow almost the same steps — except Slotted ALOHA adds ONE extra step (highlighted in gold below): waiting for the next time-slot boundary before it's allowed to send.</p>

  <div class="imgcard tall">
    <svg viewBox="0 0 480 260">
      <defs>
        <marker id="af1" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 z" fill="var(--ink-soft)"/></marker>
      </defs>

      <text x="110" y="12" text-anchor="middle" font-size="11" font-weight="700" fill="var(--rail)">Pure ALOHA</text>
      <rect x="55" y="20" width="110" height="24" rx="6" fill="var(--rail)"/>
      <text x="110" y="35" text-anchor="middle" font-size="9" fill="#fff">Frame ready</text>
      <line x1="110" y1="44" x2="110" y2="52" stroke="var(--ink-soft)" stroke-width="1.5" marker-end="url(#af1)"/>

      <rect x="55" y="52" width="110" height="24" rx="6" fill="var(--rail)"/>
      <text x="110" y="67" text-anchor="middle" font-size="9" fill="#fff">Send frame now</text>
      <line x1="110" y1="76" x2="110" y2="84" stroke="var(--ink-soft)" stroke-width="1.5" marker-end="url(#af1)"/>

      <rect x="55" y="84" width="110" height="26" rx="6" fill="var(--rail)"/>
      <text x="110" y="95" text-anchor="middle" font-size="8.5" fill="#fff">Wait for ACK</text>
      <text x="110" y="106" text-anchor="middle" font-size="8.5" fill="#fff">(timeout = 2Tp)</text>
      <line x1="110" y1="110" x2="110" y2="118" stroke="var(--ink-soft)" stroke-width="1.5" marker-end="url(#af1)"/>

      <polygon points="110,118 155,142 110,166 65,142" fill="var(--bg-panel)" stroke="var(--rail)" stroke-width="2"/>
      <text x="110" y="139" text-anchor="middle" font-size="8.5" fill="var(--ink)">ACK</text>
      <text x="110" y="150" text-anchor="middle" font-size="8.5" fill="var(--ink)">received?</text>

      <line x1="155" y1="142" x2="190" y2="142" stroke="var(--right)" stroke-width="1.5" marker-end="url(#af1)"/>
      <text x="165" y="136" font-size="8" fill="var(--right)">Yes</text>
      <rect x="190" y="128" width="60" height="28" rx="6" fill="var(--right)"/>
      <text x="220" y="146" text-anchor="middle" font-size="9" fill="#fff">✅ Done</text>

      <line x1="110" y1="166" x2="110" y2="180" stroke="var(--wrong)" stroke-width="1.5" marker-end="url(#af1)"/>
      <text x="118" y="176" font-size="8" fill="var(--wrong)">No</text>

      <rect x="50" y="180" width="120" height="28" rx="6" fill="var(--spark)"/>
      <text x="110" y="192" text-anchor="middle" font-size="8.5" fill="#fff">Wait random</text>
      <text x="110" y="203" text-anchor="middle" font-size="8.5" fill="#fff">backoff time</text>

      <path d="M50,194 L25,194 L25,64 L52,64" fill="none" stroke="var(--ink-soft)" stroke-width="1.5" marker-end="url(#af1)"/>
      <text x="10" y="130" font-size="7.5" fill="var(--ink-soft)" transform="rotate(-90 10 130)">retry (max 15×)</text>

      <line x1="240" y1="0" x2="240" y2="260" stroke="var(--line)" stroke-width="1" stroke-dasharray="3 3"/>

      <text x="360" y="12" text-anchor="middle" font-size="11" font-weight="700" fill="var(--spark-dark)">Slotted ALOHA</text>
      <rect x="305" y="20" width="110" height="24" rx="6" fill="var(--rail)"/>
      <text x="360" y="35" text-anchor="middle" font-size="9" fill="#fff">Frame ready</text>
      <line x1="360" y1="44" x2="360" y2="52" stroke="var(--ink-soft)" stroke-width="1.5" marker-end="url(#af1)"/>

      <rect x="295" y="52" width="130" height="26" rx="6" fill="var(--spark)"/>
      <text x="360" y="63" text-anchor="middle" font-size="8.5" fill="#fff">Wait for next</text>
      <text x="360" y="74" text-anchor="middle" font-size="8.5" fill="#fff">time-slot start</text>
      <line x1="360" y1="78" x2="360" y2="86" stroke="var(--ink-soft)" stroke-width="1.5" marker-end="url(#af1)"/>

      <rect x="305" y="86" width="110" height="24" rx="6" fill="var(--rail)"/>
      <text x="360" y="101" text-anchor="middle" font-size="9" fill="#fff">Send frame</text>
      <line x1="360" y1="110" x2="360" y2="118" stroke="var(--ink-soft)" stroke-width="1.5" marker-end="url(#af1)"/>

      <rect x="305" y="118" width="110" height="26" rx="6" fill="var(--rail)"/>
      <text x="360" y="129" text-anchor="middle" font-size="8.5" fill="#fff">Wait for ACK</text>
      <text x="360" y="140" text-anchor="middle" font-size="8.5" fill="#fff">(timeout = 2Tp)</text>
      <line x1="360" y1="144" x2="360" y2="152" stroke="var(--ink-soft)" stroke-width="1.5" marker-end="url(#af1)"/>

      <polygon points="360,152 405,176 360,200 315,176" fill="var(--bg-panel)" stroke="var(--rail)" stroke-width="2"/>
      <text x="360" y="173" text-anchor="middle" font-size="8.5" fill="var(--ink)">ACK</text>
      <text x="360" y="184" text-anchor="middle" font-size="8.5" fill="var(--ink)">received?</text>

      <line x1="405" y1="176" x2="440" y2="176" stroke="var(--right)" stroke-width="1.5" marker-end="url(#af1)"/>
      <text x="415" y="170" font-size="8" fill="var(--right)">Yes</text>
      <rect x="440" y="162" width="35" height="28" rx="6" fill="var(--right)"/>
      <text x="457" y="180" text-anchor="middle" font-size="9" fill="#fff">✅</text>

      <line x1="360" y1="200" x2="360" y2="214" stroke="var(--wrong)" stroke-width="1.5" marker-end="url(#af1)"/>
      <text x="368" y="210" font-size="8" fill="var(--wrong)">No</text>

      <rect x="300" y="214" width="120" height="28" rx="6" fill="var(--spark)"/>
      <text x="360" y="226" text-anchor="middle" font-size="8.5" fill="#fff">Wait random</text>
      <text x="360" y="237" text-anchor="middle" font-size="8.5" fill="#fff">backoff time</text>

      <path d="M300,228 L280,228 L280,64 L293,64" fill="none" stroke="var(--ink-soft)" stroke-width="1.5" marker-end="url(#af1)"/>
    </svg>
    <p class="imgcaption">Notice the loop-back arrows: Pure ALOHA retries by jumping straight back to "Send frame," while Slotted ALOHA's retry always lands back on "Wait for next time-slot start" (gold box) — it can never send off-slot, even on a retry.</p>
  </div>

  <p>Throughput (the fraction of frames that get through successfully) is <strong>S = G × e⁻²ᴳ</strong>, where G is the average number of frames generated during one frame-transmission time. The best possible throughput is only <strong>S = 1/2e ≈ 0.184</strong> — just <strong>18.4%</strong> — achieved when G = 0.5.</p>

  <h3 style="margin-top:22px;">📶 Slotted ALOHA — a big improvement</h3>
  <p>Slotted ALOHA divides time into slots of exactly Tfr seconds, and forces every station to send ONLY at the very start of a slot. This simple change <strong>halves the vulnerable time</strong> down to just Tfr, since two stations can now only collide if they start in the very same slot.</p>
  <p>Throughput becomes <strong>S = G × e⁻ᴳ</strong>, with a maximum of <strong>S = 0.368</strong> — <strong>36.8%</strong> — achieved when G = 1. That's double Pure ALOHA's best performance, just from timing sends to slot boundaries!</p>

  ${remember(["Pure ALOHA = send whenever ready; rely on ACK + timeout + random backoff to handle collisions","Pure ALOHA's vulnerable time = 2 × Tfr · max throughput = 18.4% (at G = 0.5)","Slotted ALOHA = must send only at the start of a time slot","Slotted ALOHA's vulnerable time = Tfr (halved) · max throughput = 36.8% (at G = 1)"])}
`;

CONTENT.csmacd = `
  ${explain(`<p>To reduce collisions further than ALOHA managed, <strong>CSMA (Carrier Sense Multiple Access)</strong> was developed, based on one simple principle: <strong>"sense before transmit"</strong> — or "listen before talk."</p>`)}

  ${mistake(`<p>CSMA can reduce the CHANCE of a collision, but it can never fully eliminate it — because of propagation delay, a station might sense the channel as idle even though another station's signal just hasn't reached it yet.</p>`)}

  <p>CSMA's vulnerable time shrinks to just the <strong>propagation time (Tp)</strong> — much smaller than ALOHA's whole frame time.</p>

  <h3>What should a station do if the channel is busy?</h3>
  <p>Three "persistence" strategies answer this:</p>
  <div class="flow-grid">
    <div class="flow-card">
      <h4>1-Persistent</h4>
      <p style="font-size:14px;">Keep sensing continuously; the instant the channel goes idle, transmit immediately (with probability 1). Simple, but risky — if several stations are all waiting, they'll all jump in at once.</p>
    </div>
    <div class="flow-card">
      <h4>Nonpersistent</h4>
      <p style="font-size:14px;">If busy, wait a random amount of time, then sense again — rather than continuously monitoring. Reduces collisions, but can waste idle channel time.</p>
    </div>
    <div class="flow-card">
      <h4>p-Persistent</h4>
      <p style="font-size:14px;">When idle, transmit with probability p, or wait for the next time slot with probability (1−p). A tunable middle ground between the other two.</p>
    </div>
  </div>

  <h3 style="margin-top:22px;">💥 CSMA/CD — adding Collision Detection</h3>
  <p>CSMA/CD builds on CSMA by having the sender keep monitoring the channel WHILE it transmits. If a collision is detected, the station immediately <strong>aborts</strong> transmission and sends a brief <strong>jamming signal</strong> so every station on the shared medium knows a collision just happened.</p>

  <h3 style="margin-top:18px;">Why is there a minimum frame size?</h3>
  <p>A station must detect a collision <em>before</em> it finishes sending its last bit — otherwise it won't realize the frame was destroyed. This means the frame's transmission time (Tfr) must be <strong>at least twice</strong> the maximum propagation time (Tp): <strong>Tfr ≥ 2 × Tp</strong>. This guarantees the sender is still transmitting when a signal from the far end of the network could reach it.</p>

  <div class="chiprow">
    <span class="chip">⚪ Energy Level: Normal — a station is transmitting alone, no collision</span>
    <span class="chip">🔵 Energy Level: Zero — the channel is idle</span>
    <span class="chip">🔴 Energy Level: Abnormal — energy is higher than any single station could produce alone — a collision is happening!</span>
  </div>

  <p style="margin-top:12px;"><strong>Throughput:</strong> for the 1-persistent method, maximum throughput is only around 50% (at G=1). For the nonpersistent method, it can reach as high as 90% (when G is between 3 and 8) — showing why patience (waiting instead of pouncing) often pays off on a busy network!</p>

  ${remember(["CSMA = sense before transmit; reduces but never fully eliminates collisions","CSMA's vulnerable time = Tp (propagation time only)","1-persistent = send immediately when idle · Nonpersistent = wait random time, then resense · p-persistent = send with probability p","CSMA/CD adds collision detection + a jamming signal; needs Tfr ≥ 2×Tp so the sender is still transmitting when a collision could be detected"])}
`;

CONTENT.csmaca = `
  ${explain(`<p><strong>CSMA/CA (Collision Avoidance)</strong> was designed for wireless networks, where directly detecting a collision (like CSMA/CD does on wires) is much harder — a wireless station usually can't listen and transmit strongly at the same time, and signals fade very differently over the air. So instead of detecting collisions, CSMA/CA tries to <strong>avoid</strong> them in the first place, using three strategies.</p>`)}

  <div class="flow-grid">
    <div class="flow-card">
      <h4>1. Interframe Space (IFS)</h4>
      <p style="font-size:14px;">Even when a station finds the channel idle, it doesn't send immediately — it waits a short period called the IFS first. If the channel is STILL idle after that, it can proceed (but still needs to wait through the contention window below).</p>
    </div>
    <div class="flow-card">
      <h4>2. Contention Window</h4>
      <p style="font-size:14px;">The station picks a random number of time slots to wait, following the same binary exponential backoff idea as ALOHA/CSMA-CD. It re-checks the channel after each slot.</p>
    </div>
    <div class="flow-card">
      <h4>3. Acknowledgment</h4>
      <p style="font-size:14px;">Even with all this care, a collision or corruption could still occur. A positive ACK, backed by a timeout timer, confirms to the sender that the frame truly arrived safely.</p>
    </div>
  </div>

  <h3 style="margin-top:20px;">CSMA/CA as a flowchart</h3>
  <p>Putting all three strategies together, here's the full decision process a station follows:</p>

  <div class="imgcard tall">
    <svg viewBox="0 0 300 400">
      <defs>
        <marker id="af2" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 z" fill="var(--ink-soft)"/></marker>
      </defs>

      <rect x="70" y="8" width="160" height="26" rx="6" fill="var(--rail)"/>
      <text x="150" y="25" text-anchor="middle" font-size="10" fill="#fff">Frame ready to send</text>
      <line x1="150" y1="34" x2="150" y2="44" stroke="var(--ink-soft)" stroke-width="1.5" marker-end="url(#af2)"/>

      <polygon points="150,44 195,68 150,92 105,68" fill="var(--bg-panel)" stroke="var(--rail)" stroke-width="2"/>
      <text x="150" y="65" text-anchor="middle" font-size="9" fill="var(--ink)">Channel</text>
      <text x="150" y="77" text-anchor="middle" font-size="9" fill="var(--ink)">idle?</text>

      <path d="M195,68 C 240,50 240,86 197,70" fill="none" stroke="var(--wrong)" stroke-width="1.5" marker-end="url(#af2)"/>
      <text x="220" y="45" font-size="7.5" fill="var(--wrong)">No — keep sensing</text>

      <line x1="150" y1="92" x2="150" y2="102" stroke="var(--right)" stroke-width="1.5" marker-end="url(#af2)"/>
      <text x="158" y="99" font-size="8" fill="var(--right)">Yes</text>

      <rect x="65" y="102" width="170" height="24" rx="6" fill="var(--spark)"/>
      <text x="150" y="118" text-anchor="middle" font-size="9" fill="#fff">1. Wait DIFS (interframe space)</text>
      <line x1="150" y1="126" x2="150" y2="136" stroke="var(--ink-soft)" stroke-width="1.5" marker-end="url(#af2)"/>

      <rect x="55" y="136" width="190" height="26" rx="6" fill="var(--spark)"/>
      <text x="150" y="150" text-anchor="middle" font-size="8.5" fill="#fff">2. Choose random Contention</text>
      <text x="150" y="160" text-anchor="middle" font-size="8.5" fill="#fff">Window &amp; count down</text>
      <line x1="150" y1="162" x2="150" y2="172" stroke="var(--ink-soft)" stroke-width="1.5" marker-end="url(#af2)"/>

      <rect x="70" y="172" width="160" height="24" rx="6" fill="var(--rail)"/>
      <text x="150" y="188" text-anchor="middle" font-size="9" fill="#fff">Send RTS, then frame</text>
      <line x1="150" y1="196" x2="150" y2="206" stroke="var(--ink-soft)" stroke-width="1.5" marker-end="url(#af2)"/>

      <rect x="70" y="206" width="160" height="26" rx="6" fill="var(--volt)"/>
      <text x="150" y="223" text-anchor="middle" font-size="9" fill="var(--ink)">3. Wait for CTS / ACK</text>
      <line x1="150" y1="232" x2="150" y2="242" stroke="var(--ink-soft)" stroke-width="1.5" marker-end="url(#af2)"/>

      <polygon points="150,242 200,268 150,294 100,268" fill="var(--bg-panel)" stroke="var(--rail)" stroke-width="2"/>
      <text x="150" y="265" text-anchor="middle" font-size="9" fill="var(--ink)">ACK</text>
      <text x="150" y="277" text-anchor="middle" font-size="9" fill="var(--ink)">received?</text>

      <line x1="200" y1="268" x2="240" y2="268" stroke="var(--right)" stroke-width="1.5" marker-end="url(#af2)"/>
      <text x="208" y="262" font-size="8" fill="var(--right)">Yes</text>
      <rect x="240" y="254" width="50" height="28" rx="6" fill="var(--right)"/>
      <text x="265" y="272" text-anchor="middle" font-size="9" fill="#fff">✅ Done</text>

      <line x1="150" y1="294" x2="150" y2="308" stroke="var(--wrong)" stroke-width="1.5" marker-end="url(#af2)"/>
      <text x="158" y="304" font-size="8" fill="var(--wrong)">No</text>

      <rect x="55" y="308" width="190" height="28" rx="6" fill="var(--wrong)"/>
      <text x="150" y="320" text-anchor="middle" font-size="8.5" fill="#fff">Increase Contention Window</text>
      <text x="150" y="331" text-anchor="middle" font-size="8.5" fill="#fff">(exponential backoff)</text>

      <path d="M55,322 L20,322 L20,68 L103,68" fill="none" stroke="var(--ink-soft)" stroke-width="1.5" marker-end="url(#af2)"/>
      <text x="8" y="200" font-size="7.5" fill="var(--ink-soft)" transform="rotate(-90 8 200)">retry from the top</text>
    </svg>
    <p class="imgcaption">The three CSMA/CA strategies — Interframe Space, Contention Window, and Acknowledgment — mapped onto one flow. A failed ACK sends the station all the way back to re-checking whether the channel is idle.</p>
  </div>

  <h3 style="margin-top:20px;">The Frame Exchange Timeline</h3>
  <p>A full CSMA/CA exchange often uses several short control messages:</p>
  <div class="chiprow">
    <span class="chip">DIFS — Distributed Coordination Function Interframe Space</span>
    <span class="chip">RTS — Request To Send</span>
    <span class="chip">SIFS — Short Interframe Space</span>
    <span class="chip">CTS — Clear To Send</span>
    <span class="chip">NAV — Network Allocation Vector (tells other stations how long to stay quiet)</span>
    <span class="chip">ACK — Acknowledgment</span>
  </div>

  <h3 style="margin-top:20px;">Open questions CSMA/CA still has to handle</h3>
  <p>What if a collision happens DURING the RTS/CTS handshaking itself? And what about the classic <strong>hidden-station problem</strong> — where two stations can each "hear" a shared access point, but can't hear each other, so neither realizes the other is about to transmit?</p>

  ${remember(["CSMA/CA is built for wireless, where direct collision detection is impractical","3 strategies: Interframe Space (IFS), Contention Window (random backoff), Acknowledgment","Frame exchange uses DIFS, RTS, SIFS, CTS, NAV, and ACK","The hidden-station problem: two stations can't hear each other, even though both can hear a shared access point"])}
`;

CONTENT.controlled = `
  ${explain(`<p>In <strong>controlled access</strong>, stations consult one another before anyone sends — a station cannot transmit unless it has been specifically authorized by the others. This trades some flexibility for far fewer collisions.</p>`)}

  <h3>📅 Reservation</h3>
  <p>Time is divided into intervals. In each interval, a small <strong>reservation frame</strong> goes out first, letting stations claim a slot before the actual data frames for that interval are sent.</p>

  <h3 style="margin-top:20px;">📋 Polling</h3>
  <p>Polling needs one device designated as the <strong>primary station</strong>, with the rest as <strong>secondary stations</strong>. Every exchange goes through the primary — even when the real destination is a secondary device — and the primary always initiates each session.</p>
  <div class="chiprow">
    <span class="chip">SELECT function — used when the primary has data to send TO a secondary</span>
    <span class="chip">POLL function — used by the primary to ask secondaries whether THEY have data to send</span>
  </div>

  <h3 style="margin-top:20px;">🎫 Token Passing</h3>
  <p>Stations are arranged in a <strong>logical ring</strong> — each one has a predecessor and a successor. A special packet called a <strong>token</strong> circulates around this ring. Whichever station currently holds the token has earned the right to access the channel and send data; once done, it passes the token along to its successor.</p>

  <div class="imgcard">
    <svg viewBox="0 0 220 160">
      <circle cx="110" cy="80" r="55" fill="none" stroke="var(--line)" stroke-width="2" stroke-dasharray="4 3"/>
      <circle cx="110" cy="25" r="16" fill="var(--rail)"/><text x="110" y="30" text-anchor="middle" font-size="12" fill="#fff">A</text>
      <circle cx="160" cy="60" r="16" fill="var(--rail)"/><text x="160" y="65" text-anchor="middle" font-size="12" fill="#fff">B</text>
      <circle cx="140" cy="125" r="16" fill="var(--rail)"/><text x="140" y="130" text-anchor="middle" font-size="12" fill="#fff">C</text>
      <circle cx="80" cy="125" r="16" fill="var(--rail)"/><text x="80" y="130" text-anchor="middle" font-size="12" fill="#fff">D</text>
      <circle cx="60" cy="60" r="16" fill="var(--spark)"/><text x="60" y="65" text-anchor="middle" font-size="12" fill="#fff">🎫</text>
      <path d="M65,45 A55,55 0 0,1 100,26" stroke="var(--spark)" stroke-width="2" fill="none" marker-end="url(#arrowtok)"/>
      <defs><marker id="arrowtok" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="var(--spark)"/></marker></defs>
    </svg>
    <p class="imgcaption">Station E (gold, holding the token 🎫) currently has the right to transmit. When it's done, it passes the token onward to station A, its successor around the ring.</p>
  </div>

  <p style="margin-top:12px;"><strong>Token management</strong> matters a lot here — how long a station is allowed to hold the token, what happens if a token gets lost, and whether some stations get priority over others based on their data.</p>

  ${remember(["Controlled access = stations authorize each other before anyone sends","Reservation = a reservation frame claims a slot before each interval's data frames","Polling = primary station controls everything; SELECT sends to a secondary, POLL asks a secondary if it has data","Token Passing = a token circulates a logical ring; holding it = the right to transmit"])}
`;

CONTENT.channelization = `
  ${explain(`<p><strong>Channelization</strong> (or channel partitioning) is a multiple-access method where the available bandwidth of a link is divided among different stations — by Time, Frequency, or Code.</p>`)}

  <div class="imgcard">
    <svg viewBox="0 0 420 130">
      <text x="70" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">FDMA</text>
      <rect x="20" y="22" width="100" height="18" fill="var(--rail)"/><text x="70" y="35" text-anchor="middle" font-size="9" fill="#fff">Station 1 (own freq)</text>
      <rect x="20" y="42" width="100" height="18" fill="var(--spark)"/><text x="70" y="55" text-anchor="middle" font-size="9" fill="#fff">Station 2 (own freq)</text>
      <rect x="20" y="62" width="100" height="18" fill="var(--volt)"/><text x="70" y="75" text-anchor="middle" font-size="9">Station 3 (own freq)</text>
      <text x="70" y="95" text-anchor="middle" font-size="9" fill="var(--ink-soft)">all sending at the same time,</text>
      <text x="70" y="107" text-anchor="middle" font-size="9" fill="var(--ink-soft)">each on its own frequency band</text>

      <text x="215" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">TDMA</text>
      <rect x="165" y="22" width="30" height="58" fill="var(--rail)"/><text x="180" y="55" text-anchor="middle" font-size="8" fill="#fff" transform="rotate(-90 180 55)">Stn 1</text>
      <rect x="195" y="22" width="30" height="58" fill="var(--spark)"/><text x="210" y="55" text-anchor="middle" font-size="8" fill="#fff" transform="rotate(-90 210 55)">Stn 2</text>
      <rect x="225" y="22" width="30" height="58" fill="var(--volt)"/><text x="240" y="55" text-anchor="middle" font-size="8" transform="rotate(-90 240 55)">Stn 3</text>
      <text x="215" y="95" text-anchor="middle" font-size="9" fill="var(--ink-soft)">each station gets the WHOLE</text>
      <text x="215" y="107" text-anchor="middle" font-size="9" fill="var(--ink-soft)">band, but only for its own time slot</text>

      <text x="365" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">CDMA</text>
      <rect x="315" y="22" width="100" height="58" fill="var(--rail)" opacity="0.35"/>
      <rect x="315" y="22" width="100" height="58" fill="var(--spark)" opacity="0.35"/>
      <rect x="315" y="22" width="100" height="58" fill="var(--volt)" opacity="0.35"/>
      <text x="365" y="55" text-anchor="middle" font-size="9" fill="var(--ink)">all overlap, separated</text>
      <text x="365" y="67" text-anchor="middle" font-size="9" fill="var(--ink)">only by unique CODES</text>
      <text x="365" y="95" text-anchor="middle" font-size="9" fill="var(--ink-soft)">everyone shares time AND</text>
      <text x="365" y="107" text-anchor="middle" font-size="9" fill="var(--ink-soft)">frequency simultaneously</text>
    </svg>
    <p class="imgcaption">FDMA splits by frequency, TDMA splits by time, and CDMA lets everyone share both — separated only by mathematically unique codes.</p>
  </div>

  <h3>FDMA — Frequency-Division Multiple Access</h3>
  <p>Each station is permanently assigned its own frequency band for as long as it's active — similar in spirit to FDM from Unit 2, but here it's about controlling <em>access</em> rather than just multiplexing signals.</p>

  <h3 style="margin-top:20px;">TDMA — Time-Division Multiple Access</h3>
  <p>Each station gets the entire bandwidth, but only during its own assigned time slot. This requires tight synchronization — every station needs to know exactly when its slot begins. Since stations may be spread over a large area, propagation delays can throw off this timing, so <strong>guard times</strong> are inserted between slots, and special <strong>preamble (synchronization) bits</strong> are added at the start of each slot to help keep everyone in sync.</p>

  <h3 style="margin-top:20px;">CDMA — Code-Division Multiple Access</h3>
  <p>CDMA is different from both of the above: only ONE channel occupies the ENTIRE bandwidth, and unlike TDMA, there's no timesharing at all — every station can send <strong>simultaneously</strong>. Instead, each station is given a unique code (a sequence of numbers called <strong>chips</strong>), carefully chosen so that:</p>
  <div class="chiprow">
    <span class="chip">Multiplying two DIFFERENT stations' codes together always gives 0</span>
    <span class="chip">Multiplying a station's code by ITSELF gives N (the number of stations)</span>
  </div>
  <p style="margin-top:10px;">These special codes are called <strong>orthogonal sequences</strong>. A receiver "decodes" a specific station's signal by multiplying the combined incoming signal by that station's unique code and dividing by N — every other station's contribution cancels out to 0, leaving just the intended data. These chip sequences are generated using a <strong>Walsh table</strong>, and the number of sequences is always a power of 2 (N = 2ᵐ).</p>

  ${remember(["Channelization splits bandwidth by Time (TDMA), Frequency (FDMA), or Code (CDMA)","FDMA = each station gets its own permanent frequency band","TDMA = each station gets the full bandwidth, but only during its own time slot (needs guard times + preamble bits)","CDMA = everyone shares time AND frequency at once, separated only by unique orthogonal codes (chips)"])}
`;

CONTENT.ethernet = `
  ${explain(`<p><strong>Ethernet</strong> is by far the most common technology for wired LANs today. Other LAN technologies have existed historically too — Token Ring, Token Bus, FDDI, and ATM LAN — but Ethernet became the dominant standard.</p>`)}

  <h3>The IEEE 802 Standards</h3>
  <p>In 1985, the <strong>IEEE Project 802</strong> was created specifically to standardize how equipment from different manufacturers could interconnect reliably. It was later adopted by <strong>ANSI</strong> (American National Standards Institute), and in 1987, <strong>ISO</strong> approved it as the international standard <strong>ISO 8802</strong> (also known as IEEE 802.2).</p>

  <h3 style="margin-top:20px;">Two Sublayers of the Data Link Layer</h3>
  <div class="flow-grid">
    <div class="flow-card">
      <h4>LLC — Logical Link Control</h4>
      <p style="font-size:14.5px;">Handles flow control, error control, and part of framing. There's just ONE single LLC standard shared across all IEEE LAN types.</p>
    </div>
    <div class="flow-card">
      <h4>MAC — Media Access Control</h4>
      <p style="font-size:14.5px;">Defines the SPECIFIC access method for each type of LAN — for example, CSMA/CD for Ethernet LANs, and token-passing for Token Ring/Token Bus LANs.</p>
    </div>
  </div>

  <h3 style="margin-top:20px;">Ethernet's Evolution — 4 Generations</h3>
  <div class="chiprow">
    <span class="chip">1️⃣ Standard Ethernet — 10 Mbps</span>
    <span class="chip">2️⃣ Fast Ethernet — 100 Mbps</span>
    <span class="chip">3️⃣ Gigabit Ethernet — 1 Gbps</span>
    <span class="chip">4️⃣ Ten-Gigabit Ethernet — 10 Gbps</span>
  </div>
  <p style="margin-top:10px;">Ethernet was originally created in the 1970s, and each generation since has multiplied its speed roughly tenfold — all while keeping enough backward compatibility that Ethernet devices from very different eras can often still talk to each other.</p>

  ${more("🔎 Want to know more? What's inside an Ethernet frame?","<p>A typical Ethernet frame carries several fields in sequence: a <strong>Preamble</strong> (helps receivers synchronize their clocks), the <strong>Destination and Source addresses</strong> (each a unique 6-byte MAC address), a <strong>Type/Length</strong> field (identifies the upper-layer protocol or the frame's length), the actual <strong>Data</strong> payload, and a trailing <strong>CRC</strong> field for error checking — tying directly back to the CRC concept from earlier in this unit.</p>")}

  ${remember(["Ethernet is the dominant wired LAN technology today","IEEE Project 802 (1985) standardized cross-manufacturer LAN interconnection; later ISO 8802/IEEE 802.2","LLC = one shared standard for flow/error control across all LANs · MAC = access method specific to each LAN type (CSMA/CD for Ethernet)","4 Ethernet generations: Standard (10 Mbps) → Fast (100 Mbps) → Gigabit (1 Gbps) → Ten-Gigabit (10 Gbps)"])}
`;

buildNav();
render();
