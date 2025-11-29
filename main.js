// main.js

// ---- BLOG POSTS CONFIG ----
// slug -> content/<slug>.md
// image -> img/<file> (top-level img folder)

const posts_draft = [
    {
    slug: "history-of-breida",
    title: "History of Breiða – Storytelling with Maps",
    date: "2020-11-12",
    tags: ["project", "story map", "Iceland"],
    image: "breida.png"
  },
  {
    slug: "roundabouts-of-iceland",
    title: "Roundabouts of Iceland",
    date: "2020-11-24",
    tags: ["project", "fun", "maps"],
    image: "roundabouts.png"
  },
  {
    slug: "westfjords",
    title: "Westfjords – Remote Geography",
    date: "2020-11-18",
    tags: ["project", "Iceland"],
    image: "westfjords.png"
  },
  {
    slug: "three-d-heat",
    title: "3D Heat – Visualizing Heat in Three Dimensions",
    date: "2020-11-27",
    tags: ["project", "data vis", "3D"],
    image: "heat.png"
  },
  {
    slug: "rivers-of-iceland",
    title: "Rivers of Iceland",
    date: "2020-11-28",
    tags: ["project", "hydrology", "maps"],
    image: "rivers.png"
  },
  {
    slug: "urban-fabrics",
    title: "Urban Fabrics – Patterns in Cities",
    date: "2020-11-29",
    tags: ["project", "urban", "maps"],
    image: "urban.png"
  },
    {
    slug: "ultrasonic-wave-propagation",
    title: "Ultrasonic Wave Propagation",
    date: "2018-01-01",
    tags: ["project", "ultrasonics", "engineering"],
    image: "paper2018.png"
  },
  {
    slug: "circa",
    title: "Circa – Sustainability Association",
    date: "2019-01-01",
    tags: ["hobby", "community", "sustainability"],
    image: "circa.jpg"
  },
  {
    slug: "sustainable-iceland",
    title: "Member of Sustainable Iceland",
    date: "2019-06-01",
    tags: ["news", "policy", "sustainability"],
    image: "sustainable.jpg"
  },
  {
    slug: "mountaineering",
    title: "Mountaineering – Trekking in the Highlands",
    date: "2022-07-01",
    tags: ["hobby", "adventure", "mountains"],
    image: "mountains.gif"
  },
    {
    slug: "soil-erosion-modelling-2023",
    title: "Comparative Analysis of Machine Learning Algorithms for Soil Erosion Modelling",
    date: "2023-01-01",
    tags: ["research", "remote sensing", "machine learning"],
    image: "paper2023.png"
  },
  {
    slug: "soil-erosion-risk-iceland-2022",
    title: "Remote Mapping of Soil Erosion Risk in Iceland",
    date: "2022-01-01",
    tags: ["research", "remote sensing", "Iceland"],
    image: "paper2022.png"
  },
  {
    slug: "guided-wave-beam-skew-2018",
    title: "Guided Ultrasonic Wave Beam Skew in Silicon Wafers",
    date: "2018-01-01",
    tags: ["research", "ultrasonics", "materials"],
    image: "paper2018b.png"
  },
  {
    slug: "lamb-wave-propagation-2018",
    title: "Lamb Wave Propagation in Monocrystalline Silicon Wafers",
    date: "2018-02-01",
    tags: ["research", "ultrasonics", "materials"],
    image: "paper2018a.png"
  },
  {
    slug: "high-frequency-guided-wave-2017",
    title: "High Frequency Guided Wave Propagation in Monocrystalline Silicon Wafers",
    date: "2017-01-01",
    tags: ["research", "ultrasonics", "materials"],
    image: "paper2018.png"
  }
]

const posts = [
  // PROJECTS / HOBBIES / NEWS
  {
  slug: "dem-shadows",
  title: "DEM-Shadows – Terrain Shadows from DEMs",
  date: "2025-11-24",
  tags: ["project", "python", "terrain", "simulation"],
  image: "dem-shadows.png"
  },
  {
    slug: "eruptions",
    title: "#30DayMapChallenge2024 - Eruptions",
    date: "2024-11-03",
    tags: ["project", "fun", "maps"],
    image: "reykjanes.png"
  },
  {
    slug: "social-connectedness",
    title: "#30DayMapChallenge2024 - Social Connectedness",
    date: "2024-11-08",
    tags: ["project", "fun", "maps"],
    image: "hdx.gif"
  },
  {
    slug: "osm-gamification",
    title: "#30DayMapChallenge2024 - OSM Gamification",
    date: "2024-11-20",
    tags: ["project", "OSM", "maps"],
    image: "osm.gif"
  },
  {
    slug: "roundabouts",
    title: "#30DayMapChallenge2024 - Roundabouts of Iceland",
    date: "2020-11-24",
    tags: ["project", "fun", "maps"],
    image: "roundabouts.png"
  },
  {
    slug: "flettan",
    title: "Fléttan EO – Soil Erosion Detection",
    date: "2021-12-01",
    tags: ["startup", "remote sensing", "Iceland"],
    image: "soil.gif"
  },
  {
    slug: "copernicus",
    title: "Copernicus – Icelandic Copernicus Portal",
    date: "2023-02-01",
    tags: ["project", "remote sensing"],
    image: "copernicus.gif"
  },
  {
    slug: "free-freedge",
    title: "Frískápur – Fighting Food Waste",
    date: "2021-10-01",
    tags: ["hobby", "community", "food"],
    image: "freedge.png"
  },

  // RESEARCH
];

// Simple helper
function $(selector) {
  return document.querySelector(selector);
}

function setupNav() {
  const navToggle = $("#navToggle");
  const navLinks = document.querySelector(".nav-links");
  if (!navToggle || !navLinks) return;

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("nav-open");
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      navLinks.classList.remove("nav-open");
    }
  });
}

function setupYear() {
  const yearEl = $("#year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

let currentOpenSlug = null;

// Render collapsed cards
function renderBlogList() {
  const container = $("#blogList");
  if (!container) return;

  container.innerHTML = "";

  posts
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .forEach((post) => {
      const card = document.createElement("article");
      card.className = "blog-card";
      card.dataset.slug = post.slug;

      const tagsHtml = (post.tags || [])
        .map((t) => `<span class="blog-tag-chip">${t}</span>`)
        .join("");

      const imageSrc = post.image ? `img/${post.image}` : "img/default.png";

      card.innerHTML = `
        <div class="blog-card-main">
          <div class="blog-card-image-wrapper">
            <img src="${imageSrc}" alt="${post.title}">
          </div>
          <div class="blog-card-header">
            <h2>${post.title}</h2>
            <div class="blog-card-meta">
              <span>${post.date}</span>
              ${
                tagsHtml
                  ? `<span class="blog-card-tags">${tagsHtml}</span>`
                  : ""
              }
            </div>
          </div>
          <span class="material-icons blog-card-toggle-icon">expand_more</span>
        </div>
        <div class="blog-card-body" hidden>
          <div class="blog-post-content">Loading…</div>
        </div>
      `;

      const mainRow = card.querySelector(".blog-card-main");
      mainRow.addEventListener("click", () => {
        togglePost(card, post);
      });

      container.appendChild(card);
    });
}

async function togglePost(card, post) {
  const slug = post.slug;

  // If this is already open → collapse it
  if (currentOpenSlug === slug) {
    collapseCard(card);
    currentOpenSlug = null;
    return;
  }

  // Collapse any previously open card
  if (currentOpenSlug) {
    const previousCard = document.querySelector(
      `.blog-card[data-slug="${currentOpenSlug}"]`
    );
    if (previousCard) {
      collapseCard(previousCard);
    }
  }

  // Expand this one
  currentOpenSlug = slug;
  expandCard(card, post);
}

function collapseCard(card) {
  card.classList.remove("expanded");
  const body = card.querySelector(".blog-card-body");
  if (body) {
    body.hidden = true;
  }
}

async function expandCard(card, post) {
  card.classList.add("expanded");
  const body = card.querySelector(".blog-card-body");
  const contentEl = card.querySelector(".blog-post-content");

  if (!body || !contentEl) return;

  body.hidden = false;
  contentEl.textContent = "Loading…";

  const path = `content/${post.slug}.md`;

  try {
    const res = await fetch(path);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    const text = await res.text();
    const html = marked.parse(text);
    contentEl.innerHTML = html;
  } catch (err) {
    contentEl.innerHTML = `
      <p>Failed to load this post from <code>${path}</code>.</p>
      <p>Error: <code>${String(err.message || err)}</code></p>
    `;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupNav();
  setupYear();
  renderBlogList();
});
