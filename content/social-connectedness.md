<p style="text-align:center;">
  <img src="../img/hdx.gif" width="250">
</p>

# Mapping Iceland’s Global Social Connections — HDX & the Social Connectedness Index

**Day 8 of the [#30DayMapChallenge](https://30daymapchallenge.com/) 2024**  
Created for **Náttúrufræðistofnun** (Natural Science Institute of Iceland)

| [➡️ Go to Interactive Map](https://m-lmi.github.io/30DayMapChallenge/Day-8/index.html) |
|---------------------------|

The Day 8 theme of the #30DayMapChallenge is **Humanitarian Data Exchange (HDX)** — and for this challenge, I mapped how Iceland connects socially to the rest of the world using the **Social Connectedness Index (SCI)**. This interactive network shows how Icelandic Facebook users are linked to people in other countries, based on anonymized friendship graph data.

The result is a visual snapshot of Iceland’s international social landscape.

---

## 🌐 What This Map Shows

The map uses the **Social Connectedness Index (SCI)** from the Humanitarian Data Exchange (HDX) to model Iceland’s global social ties.

The SCI is a measure of how likely it is that individuals in two different locations are friends on Facebook.  
Higher SCI values = **stronger social ties**.

### The map illustrates:
- **Connections between Iceland and every other country**
- **No connections shown between non-Iceland countries** (to keep Iceland-centered clarity)
- **Line thickness** proportional to connection strength
- **Distance and clustering** reflecting network structure
- **Flags & hover interaction** revealing each country’s SCI score and percentage of total connectedness

The visualization is fully interactive: drag nodes, explore clusters, and inspect Iceland’s closest global relationships.

---

## 🧠 Why SCI Is Interesting

The Social Connectedness Index provides a rare look at **global social cohesion**, beyond geography or economics.  
For Iceland, it reveals:

- Strong ties to Nordic neighbors  
- Connections shaped by migration patterns  
- Unexpected relationships with distant communities  
- Unique cultural, historical, and social footprints  

Because the data is anonymized and aggregated, it provides valuable insight while protecting privacy.

---

## 🧩 Data & Methodology

- **Dataset:** [Social Connectedness Index — HDX](https://data.humdata.org/dataset/social-connectedness-index)  
- **Documentation:** [SCI Technical Notes](https://s3.us-east-1.amazonaws.com/hdx-production-filestore/resources/a0c37eb4-b45c-436d-b2b2-c0c9b1974318/documentation-fb-social-connectedness-index-october-2021.pdf?AWSAccessKeyId=AKIAXYC32WNAQN3DYDGS&Signature=cf24xgLTOU%2FN2diqcguiUwMAb3Y%3D&Expires=1730928875)  
- **Source:** Facebook *Data for Good*, Meta  
- **Dataset period:** *October 13, 2021 – March 15, 2024*  

The SCI is calculated from a real-time anonymized snapshot of active Facebook users and their friendship networks.  
It estimates the **relative probability** that a person in Iceland is friends with someone abroad.

This dataset is widely used in:

- migration studies  
- disaster response  
- economic resilience  
- epidemiology  
- community network mapping  

For this project, it powers a clean, Iceland-centered network visualization.

---

## 🎨 Design Notes

- **Author:** Marco Pizzolato  
- **License:** Creative Commons **CC BY 4.0**  
- Created as part of **#30DayMapChallenge 2024** for **Náttúrufræðistofnun**  

If you’d like an extended version with methodology diagrams, country clusters, or a write-up about the interactivity mechanics, just let me know!