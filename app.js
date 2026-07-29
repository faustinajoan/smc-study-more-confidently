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

  { id:"summary",     icon:"📄", label:"Summary & Download", kind:"summary" },
];

const GROUP_META = {
  unit1: { title:"Unit 1 · Network Basics", eyebrow:"UNIT 1" },
  unit2: { title:"Unit 2 · Physical Layer", eyebrow:"UNIT 2" },
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
    <span class="eyebrow" style="background:rgba(255,255,255,.22);">SMC PORTAL</span>
    <h1>Study More Confidently</h1>
    <p>Welcome to SMC! We'll travel station by station through two units of Computer Networks — one small idea at a time, with pictures, examples, and quick checks along the way.</p>
    <div class="stat-row">
      <div class="stat-pill">🧩 2 Units</div>
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

  ${more("🎒 Tips for using this page","<p>Use the ⬅️➡️ buttons at the bottom of each page, or tap any station on the left. Tap boxes and diagrams — they are clickable! Turn on <strong>Dark mode</strong> or <strong>Easy-read spacing</strong> from the side menu if that helps you read more comfortably.</p>")}
`;

CONTENT.network = `
  ${explain(`
    <p>Imagine you and your friends are sitting in different classrooms. If everyone has a mobile phone, you can all send messages to each other.</p>
    <p>When many devices are connected so that they can share information, we call this a <strong>computer network</strong>. A network simply means devices that are linked together so they can talk to each other.</p>
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
      "<li><strong>Pulse Stuffing</strong> — the opposite trick: if one line is slightly slower than what a slot requires, extra filler (\"dummy\") bits are deliberately stuffed in to artificially bring it up to the required rate.</li>"+
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
    </div>
  </div>
  <div class="tabpanel" data-tab="coax">
    <div class="card">
      <p><strong>Guided medium.</strong> A central copper conductor wrapped in insulation, a metal shield, and an outer jacket. Uses the <strong>BNC connector</strong>.</p>
      <p>Historically carried up to 10,000 voice signals on analog telephone networks, and up to 600 Mbps on digital networks.</p>
    </div>
  </div>
  <div class="tabpanel" data-tab="fiber">
    <div class="card">
      <p><strong>Guided medium.</strong> Made of glass or plastic, and carries signals as pulses of <strong>light</strong> rather than electricity. A glass/plastic core is wrapped in a "cladding" of less dense glass/plastic, so light reflects internally and stays inside the core (single-mode = one straight path; multimode = many zig-zag light paths).</p>
      <p><strong>Advantages:</strong> very high bandwidth, very little signal loss, immune to electrical interference, corrosion-resistant, lightweight, and hard to "tap" secretly.</p>
      <p><strong>Disadvantages:</strong> expensive, tricky to install/maintain, and light can only travel in one direction per fiber.</p>
      <p>Used for backbone networks and standards like <strong>SONET</strong>.</p>
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
    ${explain(`<p>Great job reaching the last station! Here's a one-page recap of everything we covered across both units.</p>`)}
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
