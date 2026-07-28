/* =========================================================
   SMC (Study More Confidently) — Unit 1 Learning Portal
   Content adapted in original simplified wording from the
   course PPT (topic list) and cross-checked against
   Forouzan's "Data Communications and Networking" for the
   topics the PPT actually covers.
   ========================================================= */

const STATIONS = [
  { id:"home",        icon:"🏠", label:"Home" },
  { id:"network",     icon:"🌐", label:"What is a Network?" },
  { id:"datacomm",    icon:"✉️", label:"Data Communication" },
  { id:"effective",   icon:"✅", label:"Good Communication" },
  { id:"devices",     icon:"🖥️", label:"Network Devices" },
  { id:"represent",   icon:"🔤", label:"Data Representation" },
  { id:"flow",        icon:"🔁", label:"Data Flow" },
  { id:"criteria",    icon:"🚗", label:"Network Criteria" },
  { id:"topology",    icon:"🕸️", label:"Physical Topologies" },
  { id:"lanwan",      icon:"🏙️", label:"LAN, WAN & Internetwork" },
  { id:"switching",   icon:"🔀", label:"Switching" },
  { id:"internet",    icon:"🛰️", label:"The Internet" },
  { id:"layers",      icon:"🧱", label:"Protocols & Layers" },
  { id:"quiz",        icon:"🧠", label:"Test Yourself" },
  { id:"summary",     icon:"📄", label:"Summary & Download" },
];

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
    <span class="eyebrow" style="background:rgba(255,255,255,.22);">UNIT 1</span>
    <h1>Basic Computer Concepts &amp; Network Models</h1>
    <p>Welcome to SMC — Study More Confidently! We'll travel station by station through how computers talk to each other — one small idea at a time, with pictures, examples, and quick checks along the way.</p>
    <div class="stat-row">
      <div class="stat-pill">🧩 13 Learning Stations</div>
      <div class="stat-pill">🧠 Quiz at the end</div>
      <div class="stat-pill">📥 Downloadable notes</div>
    </div>
  </div>

  ${explain(`<p>This page is your travel guide for Unit 1. Every station explains <strong>one idea only</strong>, with a real-life comparison and a short "Remember" box so it's easy to recall later.</p>`)}

  <h3 style="margin-top:26px;">Where we're headed</h3>
  <div class="route-preview">
    ${STATIONS.filter(s=>!["home","quiz","summary"].includes(s.id)).map(s=>`
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

/* ================= QUIZ DATA ================= */
const QUIZ = [
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
];

/* ================= RENDER LOGIC ================= */
let current = 0;
const contentEl = document.getElementById("content");
const stationlistEl = document.getElementById("stationlist");

function buildNav(){
  stationlistEl.innerHTML = STATIONS.map((s,i)=>`
    <li>
      <button class="navbtn" data-idx="${i}" aria-current="${i===0?'true':'false'}">
        <span class="navdot">${s.icon}</span>
        <span class="navlabel">${s.label}</span>
      </button>
    </li>
  `).join("");
  stationlistEl.querySelectorAll(".navbtn").forEach(btn=>{
    btn.addEventListener("click",()=>goTo(parseInt(btn.dataset.idx)));
  });
}

function buildStationShell(s,i){
  const isQuiz = s.id==="quiz";
  const isSummary = s.id==="summary";
  const isHome = s.id==="home";
  let body;
  if(isQuiz){ body = buildQuizHTML(); }
  else if(isSummary){ body = buildSummaryHTML(); }
  else { body = CONTENT[s.id]; }

  return `
    <section class="station" id="station-${i}" data-idx="${i}">
      ${!isHome ? `<span class="eyebrow">Station ${i} of ${STATIONS.length-1}</span>` : ""}
      ${!isHome ? `<h1 class="stationtitle">${s.icon} ${s.label}</h1>` : ""}
      ${body}
      <div class="navfoot">
        ${i>0 ? `<button class="btn secondary" data-nav="prev">⬅️ Back</button>` : `<span></span>`}
        ${i<STATIONS.length-1 ? `<button class="btn" data-nav="next">Next ➡️</button>` : `<span></span>`}
      </div>
    </section>
  `;
}

function buildQuizHTML(){
  return `
    ${explain(`<p>Answer each question below. Tap an option to see instantly whether you got it right!</p>`)}
    <div id="quizList">
      ${QUIZ.map((item,qi)=>`
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
      <strong id="scoreText">Score: 0 / ${QUIZ.length}</strong>
      <button class="btn secondary" id="resetQuiz" type="button">🔄 Reset Quiz</button>
    </div>
  `;
}

function buildSummaryHTML(){
  return `
    ${explain(`<p>Great job reaching the last station! Here's a one-page recap of everything we covered.</p>`)}
    <div class="card">
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
    ${remember(["Revisit any station any time from the side menu","Try the quiz again until you score full marks!"])}
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

  /* tabs (data representation) */
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

  /* quiz */
  const quizList = document.getElementById("quizList");
  if(quizList){
    quizList.addEventListener("click",(e)=>{
      const opt = e.target.closest(".opt");
      if(!opt) return;
      const card = opt.closest(".quiz-card");
      if(card.dataset.answered) return; // lock after first answer
      const qi = parseInt(card.dataset.qi);
      const oi = parseInt(opt.dataset.oi);
      const correctIdx = QUIZ[qi].a;
      card.dataset.answered = "1";
      card.querySelectorAll(".opt").forEach((o,idx)=>{
        if(idx===correctIdx) o.classList.add("correct");
        else if(idx===oi) o.classList.add("incorrect");
      });
      const fb = card.querySelector(".quiz-feedback");
      fb.classList.add("show");
      fb.textContent = (oi===correctIdx) ? "✅ Correct! Well done." : `❌ Not quite — the correct answer is: "${QUIZ[qi].opts[correctIdx]}"`;
      fb.style.color = (oi===correctIdx) ? "var(--right)" : "var(--wrong)";
      updateScore();
    });
    document.getElementById("resetQuiz").addEventListener("click",()=>{
      quizList.querySelectorAll(".quiz-card").forEach(card=>{
        delete card.dataset.answered;
        card.querySelectorAll(".opt").forEach(o=>o.classList.remove("correct","incorrect"));
        const fb = card.querySelector(".quiz-feedback");
        fb.classList.remove("show"); fb.textContent="";
      });
      updateScore();
    });
  }
}

function updateScore(){
  const cards = document.querySelectorAll(".quiz-card[data-answered]");
  let correct = 0;
  cards.forEach(card=>{
    const qi = parseInt(card.dataset.qi);
    if(card.querySelector(`.opt.correct`).classList.contains("correct") && card.querySelector(".opt.incorrect")===null){
      // answered correctly on first try only if no incorrect marked
    }
  });
  // simpler: count cards whose clicked (incorrect-marked) is absent i.e. user chose correct directly
  let score = 0;
  document.querySelectorAll(".quiz-card").forEach(card=>{
    if(card.dataset.answered && !card.querySelector(".opt.incorrect")) score++;
  });
  document.getElementById("scoreText").textContent = `Score: ${score} / ${QUIZ.length}`;
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
