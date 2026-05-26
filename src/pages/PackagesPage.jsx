import "./PackagesPage.css";
import Navbarr from "../Navbar";
import Footer from "../Footer";
import vicfalls from "../assets/maclear.jpeg";
// import { Card } from "@mui/material";
// import pack1 from "../assets/text.jpeg";
// import pack2 from "../assets/text1.jpeg";
// import pack3 from "../assets/text2.jpeg";

function PackagesPage() {
  return (
    <div className="packages-page container-fluid">
      <Navbarr />
      <div class="container my-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb p-3 bg-body-tertiary rounded-3">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">Packages</a>
            </li>
          </ol>
        </nav>
      </div>
      <div className="packages-page-section container-fluid">
        <section id="trips" class="filter-section">
          <div class="section-header reveal">
            <div>
              <div class="section-eyebrow">
                <span class="eyebrow-line"></span> Upcoming Departures
              </div>
              <h2 class="section-title">
                Curated <em>journeys</em>
                <br />
                await you
              </h2>
              {/* <div className="price-policy">
                All prices are per person. Group discounts available for parties
                of 4 or more.
              </div> */}
            </div>
          </div>

          <div class="filters reveal reveal-delay-1">
            <button
              class="filter-btn active"
              onclick="filterTrips('all', this)"
            >
              All Journeys
            </button>
            <button class="filter-btn" onclick="filterTrips('safari', this)">
              Safari
            </button>
            <button class="filter-btn" onclick="filterTrips('cultural', this)">
              Cultural
            </button>
            <button class="filter-btn" onclick="filterTrips('adventure', this)">
              Adventure
            </button>
            <button class="filter-btn" onclick="filterTrips('luxury', this)">
              Ultra Luxury
            </button>
          </div>
        </section>
        <section class="trips-section">
          {/* <!-- FEATURED CARD: Victoria Falls --> */}
          <div
            class="featured-card reveal"
            data-category="luxury adventure"
            onclick="openModal('vf')"
          >
            <div class="trip-img">
              <img
                className="pack-img"
                viewBox="0 0 720 480"
                src={vicfalls}
                aria-label="Victoria Falls scene"
              ></img>
            </div>
            <div class="featured-content">
              <div>
                <div class="trip-badge">
                  <span class="trip-badge-dot"></span>
                  Ultra Luxury · Adventure
                  <span
                  //     style="
                  //   margin-left: auto;
                  //   background: rgba(201, 168, 76, 0.15);
                  //   border: 1px solid rgba(201, 168, 76, 0.3);
                  //   padding: 3px 10px;
                  //   border-radius: 2px;
                  //   font-size: 10px;
                  //   color: var(--gold);
                  //   letter-spacing: 0.15em;
                  // "
                  >
                    Featured
                  </span>
                </div>
                <h3 class="trip-name">
                  Victoria Falls
                  <br />
                  <em>Exclusive Retreat</em>
                </h3>
                <p class="trip-desc">
                  Stand at the edge of the world's greatest waterfall — then
                  retreat to a private villa overlooking the gorge. Sunset
                  helicopter flights, white-water rafting on the Zambezi, and a
                  private dinner under the stars.
                </p>
                <div class="trip-meta">
                  <div class="meta-item">
                    <div class="meta-label">Duration</div>
                    <div class="meta-value">4 Days</div>
                  </div>
                  <div class="meta-item">
                    <div class="meta-label">Next Departure</div>
                    <div class="meta-value">Jun 4, 2026</div>
                  </div>
                  <div class="meta-item">
                    <div class="meta-label">Group size</div>
                    <div class="meta-value">Max 8 guests</div>
                  </div>
                </div>
              </div>
              <div class="trip-footer">
                <div class="price-block">
                  <div class="from">From</div>
                  <div class="amount">$490</div>
                  <div class="per">per person · all inclusive</div>
                </div>
                <button class="btn-book">View Details →</button>
              </div>
            </div>
          </div>

          {/* <!-- 5-card grid --> */}
          <div class="cards-grid" id="cards-grid">
            {/* <!-- Card 2: Great Zimbabwe --> */}
            <div
              class="trip-card reveal"
              data-category="cultural"
              onclick="openModal('gz')"
            >
              <div class="card-img">
                <svg
                  viewBox="0 0 380 220"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Great Zimbabwe ruins scene"
                >
                  <defs>
                    <linearGradient
                      id="gz-sky"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stop-color="#2A1808" />
                      <stop offset="100%" stop-color="#5A3010" />
                    </linearGradient>
                  </defs>
                  <rect width="380" height="220" fill="url(#gz-sky)" />
                  {/* <!-- Sun --> */}
                  <circle
                    cx="200"
                    cy="60"
                    r="28"
                    fill="#C9A84C"
                    opacity="0.6"
                  />
                  <ellipse
                    cx="200"
                    cy="70"
                    rx="55"
                    ry="30"
                    fill="#C9A84C"
                    opacity="0.12"
                  />
                  {/* <!-- Hill complex silhouette --> */}
                  <path
                    d="M0 180 Q80 120 140 140 Q180 125 220 135 Q260 125 300 140 Q340 130 380 160 L380 220 L0 220 Z"
                    fill="#1A0E06"
                  />
                  {/* <!-- Stone wall towers --> */}
                  <rect
                    x="80"
                    y="130"
                    width="40"
                    height="60"
                    rx="2"
                    fill="#241608"
                  />
                  <rect
                    x="85"
                    y="115"
                    width="30"
                    height="25"
                    rx="2"
                    fill="#2A1A0A"
                  />
                  <rect
                    x="130"
                    y="140"
                    width="50"
                    height="50"
                    rx="2"
                    fill="#241608"
                  />
                  <rect
                    x="140"
                    y="125"
                    width="30"
                    height="22"
                    rx="2"
                    fill="#2A1A0A"
                  />
                  <rect
                    x="190"
                    y="125"
                    width="60"
                    height="65"
                    rx="2"
                    fill="#1E1208"
                  />
                  <rect
                    x="200"
                    y="108"
                    width="40"
                    height="24"
                    rx="2"
                    fill="#2A1A0A"
                  />
                  {/* <!-- Conical tower (iconic) --> */}
                  <polygon points="230,108 255,140 205,140" fill="#2A1A0A" />
                  <rect
                    x="218"
                    y="138"
                    width="24"
                    height="40"
                    rx="1"
                    fill="#1A0E06"
                  />
                  {/* <!-- Vegetation --> */}
                  <ellipse
                    cx="50"
                    cy="145"
                    rx="30"
                    ry="12"
                    fill="#1A2A10"
                    opacity="0.7"
                  />
                  <ellipse
                    cx="340"
                    cy="155"
                    rx="25"
                    ry="10"
                    fill="#1A2A10"
                    opacity="0.7"
                  />
                  {/* <!-- Warm horizon glow --> */}
                  <ellipse
                    cx="200"
                    cy="165"
                    rx="200"
                    ry="40"
                    fill="#8A4A10"
                    opacity="0.15"
                  />
                </svg>
                <div class="card-tag">Cultural Heritage</div>
              </div>
              <div class="card-body">
                <div class="card-name">
                  Kariba Tour
                  <br />
                  Houseboat Experience
                </div>
                <div class="card-desc">
                  Walk among 900-year-old stone ruins that gave the nation its
                  name. Expert historian guides, Masvingo village homestays, and
                  traditional Shona craft workshops.
                </div>
                <div class="card-details">
                  <div class="card-detail">
                    <div class="cd-label">Days</div>
                    <div class="cd-val">3 days</div>
                  </div>
                  <div class="card-detail">
                    <div class="cd-label">Departs</div>
                    <div class="cd-val">Jun 19</div>
                  </div>
                  <div class="card-detail">
                    <div class="cd-label">Guests</div>
                    <div class="cd-val">Max 10</div>
                  </div>
                </div>
                <div class="card-footer">
                  <div>
                    <div class="card-price-from">From</div>
                    <div class="card-price">$190</div>
                    <div class="card-price-pp">per person</div>
                  </div>
                  <button class="btn-sm">Details</button>
                </div>
              </div>
            </div>

            {/* <!-- Card 3: Hwange --> */}
            <div
              class="trip-card reveal reveal-delay-1"
              data-category="safari luxury"
              onclick="openModal('hw')"
            >
              <div class="card-img">
                <svg
                  viewBox="0 0 380 220"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Hwange safari scene"
                >
                  <defs>
                    <linearGradient
                      id="hw-sky"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stop-color="#1A2A10" />
                      <stop offset="60%" stop-color="#2A4018" />
                      <stop offset="100%" stop-color="#1A3010" />
                    </linearGradient>
                  </defs>
                  <rect width="380" height="220" fill="url(#hw-sky)" />
                  {/* <!-- Stars --> */}
                  <circle cx="60" cy="25" r="1" fill="#E8D49A" opacity="0.8" />
                  <circle
                    cx="130"
                    cy="15"
                    r="1.2"
                    fill="#E8D49A"
                    opacity="0.7"
                  />
                  <circle
                    cx="220"
                    cy="30"
                    r="0.8"
                    fill="#E8D49A"
                    opacity="0.6"
                  />
                  <circle cx="310" cy="20" r="1" fill="#E8D49A" opacity="0.8" />
                  <circle
                    cx="360"
                    cy="40"
                    r="0.9"
                    fill="#E8D49A"
                    opacity="0.5"
                  />
                  {/* <!-- Moon --> */}
                  <circle
                    cx="320"
                    cy="35"
                    r="18"
                    fill="#E8D49A"
                    opacity="0.4"
                  />
                  <circle
                    cx="330"
                    cy="30"
                    r="14"
                    fill="#1A2A10"
                    opacity="0.8"
                  />
                  {/* <!-- Savanna ground --> */}
                  <path
                    d="M0 160 Q190 140 380 155 L380 220 L0 220 Z"
                    fill="#1A1005"
                  />
                  {/* <!-- Acacia trees --> */}
                  <line
                    x1="80"
                    y1="220"
                    x2="80"
                    y2="110"
                    stroke="#0D0A05"
                    stroke-width="7"
                  />
                  <ellipse cx="80" cy="98" rx="48" ry="20" fill="#0D0A05" />
                  <ellipse cx="55" cy="108" rx="32" ry="13" fill="#0D0A05" />
                  <ellipse cx="110" cy="105" rx="35" ry="14" fill="#0D0A05" />
                  <line
                    x1="220"
                    y1="220"
                    x2="220"
                    y2="120"
                    stroke="#0D0A05"
                    stroke-width="5"
                  />
                  <ellipse cx="220" cy="110" rx="38" ry="16" fill="#0D0A05" />
                  <ellipse cx="198" cy="120" rx="25" ry="10" fill="#0D0A05" />
                  <ellipse cx="244" cy="117" rx="28" ry="11" fill="#0D0A05" />
                  {/* <!-- Lion silhouette --> */}
                  <ellipse cx="310" cy="166" rx="28" ry="12" fill="#0D0A05" />
                  <circle cx="286" cy="160" r="12" fill="#0D0A05" />
                  {/* <!-- mane --> */}
                  <ellipse cx="284" cy="158" rx="15" ry="14" fill="#0D0A05" />
                  <line
                    x1="338"
                    y1="168"
                    x2="355"
                    y2="162"
                    stroke="#0D0A05"
                    stroke-width="3"
                  />
                  <line
                    x1="282"
                    y1="172"
                    x2="282"
                    y2="188"
                    stroke="#0D0A05"
                    stroke-width="5"
                  />
                  <line
                    x1="298"
                    y1="172"
                    x2="298"
                    y2="188"
                    stroke="#0D0A05"
                    stroke-width="5"
                  />
                  <line
                    x1="316"
                    y1="174"
                    x2="316"
                    y2="190"
                    stroke="#0D0A05"
                    stroke-width="5"
                  />
                  <line
                    x1="332"
                    y1="172"
                    x2="332"
                    y2="188"
                    stroke="#0D0A05"
                    stroke-width="5"
                  />
                  {/* <!-- Jeep silhouette --> */}
                  <rect
                    x="100"
                    y="158"
                    width="80"
                    height="28"
                    rx="3"
                    fill="#0D0A05"
                  />
                  <rect
                    x="112"
                    y="148"
                    width="50"
                    height="18"
                    rx="2"
                    fill="#0D0A05"
                  />
                  <circle cx="115" cy="188" r="10" fill="#0D0A05" />
                  <circle cx="165" cy="188" r="10" fill="#0D0A05" />
                  <rect
                    x="95"
                    y="162"
                    width="10"
                    height="6"
                    rx="1"
                    fill="#0D0A05"
                  />
                </svg>
                <div class="card-tag">Safari · Luxury</div>
              </div>
              <div class="card-body">
                <div class="card-name">
                  Hwange Safari
                  <br />
                  Lodge Experience
                </div>
                <div class="card-desc">
                  Zimbabwe's largest national park at its finest. Night drives,
                  waterhole photography hides, and the famed 40,000-strong
                  elephant population under expert ranger care.
                </div>
                <div class="card-details">
                  <div class="card-detail">
                    <div class="cd-label">Days</div>
                    <div class="cd-val">7 days</div>
                  </div>
                  <div class="card-detail">
                    <div class="cd-label">Departs</div>
                    <div class="cd-val">Aug 4</div>
                  </div>
                  <div class="card-detail">
                    <div class="cd-label">Guests</div>
                    <div class="cd-val">Max 8</div>
                  </div>
                </div>
                <div class="card-footer">
                  <div>
                    <div class="card-price-from">From</div>
                    <div class="card-price">$210</div>
                    <div class="card-price-pp">per person</div>
                  </div>
                  <button class="btn-sm">Details</button>
                </div>
              </div>
            </div>

            {/* <!-- Card 4: Mana Pools --> */}
            <div
              class="trip-card reveal reveal-delay-2"
              data-category="adventure safari"
              onclick="openModal('mp')"
            >
              <div class="card-img">
                <svg
                  viewBox="0 0 380 220"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Mana Pools canoe scene"
                >
                  <defs>
                    <linearGradient
                      id="mp-water"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stop-color="#2A5050" />
                      <stop offset="100%" stop-color="#1A3030" />
                    </linearGradient>
                    <linearGradient
                      id="mp-sky"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stop-color="#1A3848" />
                      <stop offset="100%" stop-color="#2A4A58" />
                    </linearGradient>
                  </defs>
                  <rect width="380" height="220" fill="url(#mp-sky)" />
                  {/* <!-- Sunset reflection in sky --> */}
                  <ellipse
                    cx="190"
                    cy="80"
                    rx="100"
                    ry="50"
                    fill="#C9A84C"
                    opacity="0.1"
                  />
                  <circle
                    cx="190"
                    cy="75"
                    r="22"
                    fill="#E8A020"
                    opacity="0.5"
                  />
                  {/* <!-- Riverside vegetation --> */}
                  <path
                    d="M0 130 Q80 110 150 120 Q220 110 280 115 Q340 108 380 120 L380 160 L0 160 Z"
                    fill="#1A2A10"
                  />
                  {/* <!-- Zambezi river --> */}
                  <rect
                    x="0"
                    y="155"
                    width="380"
                    height="65"
                    fill="url(#mp-water)"
                  />
                  {/* <!-- Water ripples --> */}
                  <ellipse
                    cx="100"
                    cy="175"
                    rx="30"
                    ry="4"
                    fill="#4A7880"
                    opacity="0.3"
                  />
                  <ellipse
                    cx="260"
                    cy="185"
                    rx="25"
                    ry="3"
                    fill="#4A7880"
                    opacity="0.25"
                  />
                  {/* <!-- Sun reflection on water --> */}
                  <ellipse
                    cx="190"
                    cy="190"
                    rx="20"
                    ry="6"
                    fill="#C9A84C"
                    opacity="0.25"
                  />
                  {/* <!-- Canoe 1 --> */}
                  <path
                    d="M120 168 Q160 162 200 168 Q190 176 150 176 Z"
                    fill="#3A2010"
                  />
                  <ellipse cx="155" cy="168" rx="38" ry="4" fill="#3A2010" />
                  <line
                    x1="148"
                    y1="168"
                    x2="140"
                    y2="148"
                    stroke="#5A3A18"
                    stroke-width="2"
                  />
                  <ellipse cx="138" cy="146" rx="6" ry="3" fill="#5A3A18" />
                  {/* <!-- Person in canoe --> */}
                  <circle cx="158" cy="163" r="5" fill="#1A0E06" />
                  <ellipse cx="158" cy="170" rx="5" ry="3" fill="#1A0E06" />
                  {/* <!-- Canoe 2 (distant) --> */}
                  <path
                    d="M255 173 Q280 168 305 173 Q298 179 270 179 Z"
                    fill="#3A2010"
                    opacity="0.7"
                  />
                  {/* <!-- Hippo head --> */}
                  <ellipse
                    cx="80"
                    cy="165"
                    rx="14"
                    ry="9"
                    fill="#3A3028"
                    opacity="0.9"
                  />
                  <circle cx="73" cy="162" r="4" fill="#3A3028" opacity="0.9" />
                  <circle cx="87" cy="162" r="4" fill="#3A3028" opacity="0.9" />
                  {/* <!-- Trees by river --> */}
                  <line
                    x1="20"
                    y1="160"
                    x2="20"
                    y2="95"
                    stroke="#0D0A05"
                    stroke-width="6"
                  />
                  <ellipse cx="20" cy="83" rx="32" ry="14" fill="#0D0A05" />
                  <line
                    x1="350"
                    y1="160"
                    x2="350"
                    y2="100"
                    stroke="#0D0A05"
                    stroke-width="5"
                  />
                  <ellipse cx="350" cy="90" rx="28" ry="12" fill="#0D0A05" />
                </svg>
                <div class="card-tag">Adventure</div>
              </div>
              <div class="card-body">
                <div class="card-name">
                  Mana Pools
                  <br />
                  Canoe Expedition
                </div>
                <div class="card-desc">
                  Paddle the Zambezi with hippos, crocodiles, and elephants as
                  your companions. Wild camping on sandbanks and a UNESCO World
                  Heritage floodplain unlike anywhere on earth.
                </div>
                <div class="card-details">
                  <div class="card-detail">
                    <div class="cd-label">Days</div>
                    <div class="cd-val">6 days</div>
                  </div>
                  <div class="card-detail">
                    <div class="cd-label">Departs</div>
                    <div class="cd-val">Aug 18</div>
                  </div>
                  <div class="card-detail">
                    <div class="cd-label">Guests</div>
                    <div class="cd-val">Max 8</div>
                  </div>
                </div>
                <div class="card-footer">
                  <div>
                    <div class="card-price-from">From</div>
                    <div class="card-price">$4,400</div>
                    <div class="card-price-pp">per person</div>
                  </div>
                  <button class="btn-sm">Details</button>
                </div>
              </div>
            </div>

            {/* <!-- Card 5: Eastern Highlands --> */}
            <div
              class="trip-card reveal"
              data-category="adventure cultural"
              onclick="openModal('eh')"
            >
              <div class="card-img">
                <svg
                  viewBox="0 0 380 220"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Eastern Highlands mountains scene"
                >
                  <defs>
                    <linearGradient
                      id="eh-sky"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stop-color="#0A1A28" />
                      <stop offset="100%" stop-color="#1A3040" />
                    </linearGradient>
                  </defs>
                  <rect width="380" height="220" fill="url(#eh-sky)" />
                  <path
                    d="M0 220 L0 160 Q60 80 120 130 Q160 90 200 110 Q250 70 300 100 Q340 80 380 130 L380 220 Z"
                    fill="#0A1808"
                  />
                  <path
                    d="M0 220 L0 180 Q50 140 100 160 Q140 130 180 150 Q220 120 260 145 Q300 130 340 155 Q360 145 380 160 L380 220 Z"
                    fill="#142008"
                  />
                  <path
                    d="M0 220 L0 195 Q60 170 120 185 Q180 165 240 180 Q300 168 380 185 L380 220 Z"
                    fill="#1A2A10"
                  />
                  <path
                    d="M195 74 Q200 58 205 74 Q210 68 205 80 Q200 70 195 74 Z"
                    fill="#E8E4D8"
                    opacity="0.7"
                  />
                  <path
                    d="M295 84 Q300 70 305 84 Q308 78 305 90 Q300 80 295 84 Z"
                    fill="#E8E4D8"
                    opacity="0.6"
                  />
                  <ellipse
                    cx="190"
                    cy="160"
                    rx="150"
                    ry="20"
                    fill="#A8C0B8"
                    opacity="0.12"
                  />
                  <rect
                    x="170"
                    y="100"
                    width="5"
                    height="70"
                    fill="#7AAAB8"
                    opacity="0.4"
                    rx="2"
                  />
                  <rect
                    x="178"
                    y="110"
                    width="3"
                    height="60"
                    fill="#7AAAB8"
                    opacity="0.3"
                    rx="1"
                  />
                  <path
                    d="M0 190 Q40 183 80 186 Q120 180 160 183"
                    stroke="#2A4018"
                    stroke-width="2"
                    fill="none"
                    opacity="0.6"
                  />
                  <path
                    d="M0 196 Q40 190 80 192 Q120 188 160 190"
                    stroke="#2A4018"
                    stroke-width="1.5"
                    fill="none"
                    opacity="0.5"
                  />
                  <path
                    d="M280 70 Q285 66 290 70"
                    stroke="#C9A84C"
                    stroke-width="1.5"
                    fill="none"
                  />
                  <path
                    d="M292 68 Q297 64 302 68"
                    stroke="#C9A84C"
                    stroke-width="1.5"
                    fill="none"
                  />
                </svg>
                <div class="card-tag">Highlands</div>
              </div>
              <div class="card-body">
                <div class="card-name">
                  Eastern Highlands
                  <br />
                  Scenic Journey
                </div>
                <div class="card-desc">
                  Tea plantations, mountain trout fishing, Nyanga's Mtarazi
                  Falls, and cool highland air. A lush green escape through
                  Zimbabwe's most scenic mountain terrain.
                </div>
                <div class="card-details">
                  <div class="card-detail">
                    <div class="cd-label">Days</div>
                    <div class="cd-val">5 days</div>
                  </div>
                  <div class="card-detail">
                    <div class="cd-label">Departs</div>
                    <div class="cd-val">Sep 2</div>
                  </div>
                  <div class="card-detail">
                    <div class="cd-label">Guests</div>
                    <div class="cd-val">Max 10</div>
                  </div>
                </div>
                <div class="card-footer">
                  <div>
                    <div class="card-price-from">From</div>
                    <div class="card-price">$2,800</div>
                    <div class="card-price-pp">per person</div>
                  </div>
                  <button class="btn-sm">Details</button>
                </div>
              </div>
            </div>

            <div
              class="trip-card reveal reveal-delay-1"
              data-category="safari adventure luxury"
              onclick="openModal('gn')"
            >
              <div class="card-img">
                <svg
                  viewBox="0 0 380 220"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Gonarezhou red rocks scene"
                >
                  <defs>
                    <linearGradient
                      id="gn-sky"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stop-color="#3A1808" />
                      <stop offset="100%" stop-color="#5A2A10" />
                    </linearGradient>
                  </defs>
                  <rect width="380" height="220" fill="url(#gn-sky)" />
                  <path
                    d="M0 220 L0 100 Q30 70 60 95 Q90 60 120 90 Q140 65 160 85 Q200 50 230 80 Q250 60 270 78 Q300 50 330 75 Q355 60 380 80 L380 220 Z"
                    fill="#6A1A08"
                  />
                  <path
                    d="M0 220 L0 130 Q50 100 100 120 Q150 95 200 115 Q250 100 300 118 Q340 105 380 120 L380 220 Z"
                    fill="#4A1005"
                  />
                  <path
                    d="M0 220 L0 165 Q80 145 160 158 Q240 142 320 158 Q355 150 380 160 L380 220 Z"
                    fill="#2A0805"
                  />

                  <rect
                    x="50"
                    y="100"
                    width="24"
                    height="80"
                    rx="8"
                    fill="#3A1A0A"
                  />
                  <ellipse cx="62" cy="100" rx="38" ry="26" fill="#3A1A0A" />
                  <line
                    x1="40"
                    y1="100"
                    x2="20"
                    y2="80"
                    stroke="#3A1A0A"
                    stroke-width="4"
                  />
                  <line
                    x1="55"
                    y1="95"
                    x2="45"
                    y2="72"
                    stroke="#3A1A0A"
                    stroke-width="3"
                  />
                  <line
                    x1="72"
                    y1="95"
                    x2="82"
                    y2="72"
                    stroke="#3A1A0A"
                    stroke-width="3"
                  />
                  <line
                    x1="82"
                    y1="100"
                    x2="100"
                    y2="82"
                    stroke="#3A1A0A"
                    stroke-width="4"
                  />
                  <rect
                    x="280"
                    y="115"
                    width="16"
                    height="65"
                    rx="6"
                    fill="#2A1008"
                  />
                  <ellipse cx="288" cy="116" rx="26" ry="18" fill="#2A1008" />
                  <line
                    x1="278"
                    y1="116"
                    x2="265"
                    y2="100"
                    stroke="#2A1008"
                    stroke-width="3"
                  />
                  <line
                    x1="298"
                    y1="116"
                    x2="310"
                    y2="102"
                    stroke="#2A1008"
                    stroke-width="3"
                  />
                  <path
                    d="M150 80 Q160 55 175 70 Q185 45 200 62 Q215 40 230 58 Q240 50 250 65"
                    fill="#8A2A0A"
                    opacity="0.8"
                  />
                  <path
                    d="M148 82 Q158 57 173 72 Q183 47 198 64 Q213 42 228 60 Q238 52 248 67"
                    stroke="#7A2008"
                    stroke-width="2"
                    fill="none"
                    opacity="0.4"
                  />
                  <ellipse cx="195" cy="182" rx="16" ry="9" fill="#1A0805" />
                  <circle cx="181" cy="178" r="8" fill="#1A0805" />
                  <ellipse cx="215" cy="185" rx="13" ry="8" fill="#1A0805" />
                  <circle cx="204" cy="181" r="7" fill="#1A0805" />
                  <ellipse
                    cx="190"
                    cy="170"
                    rx="220"
                    ry="35"
                    fill="#8A3010"
                    opacity="0.15"
                  />
                </svg>
                <div class="card-tag">Wilderness · Luxury</div>
              </div>
              <div class="card-body">
                <div class="card-name">
                  Gonarezhou
                  <br />
                  Wilderness Expedition
                </div>
                <div class="card-desc">
                  The Place of Many Elephants. Ancient baobabs, the dramatic
                  Chilojo Cliffs, walking safaris with expert trackers, and an
                  exclusive mobile camp in unspoiled wilderness.
                </div>
                <div class="card-details">
                  <div class="card-detail">
                    <div class="cd-label">Days</div>
                    <div class="cd-val">8 days</div>
                  </div>
                  <div class="card-detail">
                    <div class="cd-label">Departs</div>
                    <div class="cd-val">Sep 15</div>
                  </div>
                  <div class="card-detail">
                    <div class="cd-label">Guests</div>
                    <div class="cd-val">Max 6</div>
                  </div>
                </div>
                <div class="card-footer">
                  <div>
                    <div class="card-price-from">From</div>
                    <div class="card-price">$6,500</div>
                    <div class="card-price-pp">per person</div>
                  </div>
                  <button class="btn-sm">Details</button>
                </div>
              </div>
            </div>

            <div
              class="trip-card reveal reveal-delay-2"
              data-category="cultural"
              onclick="openModal('bw')"
            >
              <div class="card-img">
                <svg
                  viewBox="0 0 380 220"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Bulawayo city and Matobo hills"
                >
                  <defs>
                    <linearGradient
                      id="bw-sky"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stop-color="#0A1820" />
                      <stop offset="100%" stop-color="#1A3040" />
                    </linearGradient>
                  </defs>
                  <rect width="380" height="220" fill="url(#bw-sky)" />
                  <ellipse cx="80" cy="150" rx="80" ry="55" fill="#1E1408" />
                  <ellipse cx="180" cy="140" rx="90" ry="65" fill="#241808" />
                  <ellipse cx="300" cy="155" rx="85" ry="50" fill="#1E1408" />
                  <path
                    d="M50 130 Q80 115 110 130"
                    stroke="#2A1A08"
                    stroke-width="2"
                    fill="none"
                    opacity="0.5"
                  />
                  <path
                    d="M155 120 Q180 105 205 120"
                    stroke="#2A1A08"
                    stroke-width="2"
                    fill="none"
                    opacity="0.5"
                  />
                  <ellipse cx="300" cy="120" rx="30" ry="20" fill="#2A1A08" />
                  <rect x="294" y="138" width="12" height="22" fill="#241408" />
                  <ellipse cx="300" cy="160" rx="20" ry="12" fill="#2A1A08" />
                  <rect x="0" y="190" width="380" height="30" fill="#0A1005" />
                  <circle
                    cx="40"
                    cy="195"
                    r="1.5"
                    fill="#C9A84C"
                    opacity="0.6"
                  />
                  <circle cx="70" cy="200" r="1" fill="#C9A84C" opacity="0.5" />
                  <circle
                    cx="100"
                    cy="193"
                    r="1.5"
                    fill="#C9A84C"
                    opacity="0.7"
                  />
                  <circle
                    cx="140"
                    cy="198"
                    r="1.2"
                    fill="#C9A84C"
                    opacity="0.5"
                  />
                  <circle
                    cx="180"
                    cy="194"
                    r="1.5"
                    fill="#C9A84C"
                    opacity="0.6"
                  />
                  <circle
                    cx="220"
                    cy="200"
                    r="1"
                    fill="#C9A84C"
                    opacity="0.5"
                  />
                  <circle
                    cx="260"
                    cy="195"
                    r="1.5"
                    fill="#C9A84C"
                    opacity="0.7"
                  />
                  <circle
                    cx="310"
                    cy="198"
                    r="1"
                    fill="#C9A84C"
                    opacity="0.5"
                  />
                  <circle
                    cx="340"
                    cy="194"
                    r="1.2"
                    fill="#C9A84C"
                    opacity="0.6"
                  />
                  {/* <!-- Ndebele pattern band --> */}
                  <rect
                    x="0"
                    y="205"
                    width="380"
                    height="8"
                    fill="#1A0808"
                    opacity="0.6"
                  />
                  <rect
                    x="0"
                    y="207"
                    width="20"
                    height="4"
                    fill="#C9A84C"
                    opacity="0.4"
                  />
                  <rect
                    x="25"
                    y="207"
                    width="15"
                    height="4"
                    fill="#C4622D"
                    opacity="0.4"
                  />
                  <rect
                    x="45"
                    y="207"
                    width="20"
                    height="4"
                    fill="#C9A84C"
                    opacity="0.4"
                  />
                  <rect
                    x="70"
                    y="207"
                    width="15"
                    height="4"
                    fill="#5A6B4F"
                    opacity="0.4"
                  />
                </svg>
                <div class="card-tag">Cultural</div>
              </div>
              <div class="card-body">
                <div class="card-name">
                  Bulawayo &amp;
                  <br />
                  Matobo Retreat
                </div>
                <div class="card-desc">
                  Zimbabwe's City of Kings meets its most mystical landscape.
                  Ndebele cultural immersion, Cecil Rhodes's grave, ancient San
                  Bushman rock paintings, and rhino tracking on foot.
                </div>
                <div class="card-details">
                  <div class="card-detail">
                    <div class="cd-label">Days</div>
                    <div class="cd-val">4 days</div>
                  </div>
                  <div class="card-detail">
                    <div class="cd-label">Departs</div>
                    <div class="cd-val">Sep 28</div>
                  </div>
                  <div class="card-detail">
                    <div class="cd-label">Guests</div>
                    <div class="cd-val">Max 10</div>
                  </div>
                </div>
                <div class="card-footer">
                  <div>
                    <div class="card-price-from">From</div>
                    <div class="card-price">$1,950</div>
                    <div class="card-price-pp">per person</div>
                  </div>
                  <button class="btn-sm">Details</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default PackagesPage;
