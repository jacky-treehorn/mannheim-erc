/* ========================================
   DATEN FÜR WETTBEWERBE
   Hier neue Wettbewerbe hinzufügen.
   ======================================== */

const wettbewerbeData = [
  {
    id: "Brigitte-Föll-Pokal 2026",
    title: "Brigitte-Föll-Pokal 2026",
    date: "08.11.2026",
   description: ` 
    <p>
      <span>Erfolgreiches Wochenende für den Mannheimer ERC beim Brigitte Föll Pokal 2026</span>
    </p>

    <h4><span>Unsere Ergebnisse:</span></h4>

    <h5><span>Advanced Novice Jungen und Qualifikation zur Deutschen Nachwuchsmeisterschaft 2027:</span></h5>
    <ul>
      <p><li>Platz 1 -Leo Zhou</li></p>
      <p><li>Platz 2 - Theodor Peth</li></p>
      <p><li>Platz 3 - Maximilian Mild</li></p> 
    </ul>

    <h5><span>Advanced Novice Mädchen und Qualifikation zur Deutschen Nachwuchsmeisterschaft 2027:</span></h5>
    <ul>
      <p><li>Platz 1 - Liliana Bloch</li></p>
      <p><li>Platz 3 - Stella Herzog</li></p>
      <p><li>Platz 4 - Sophia Solz</li></p>
      <p><li>Platz 7 - Lotta Montwe</li></p> 
      <p><li>Platz 9 - Emma Adamczyk (Ersatz DNM)</li></p>
      <p><li>Platz 10 - Lea Jurisic (Ersatz DNM)</li></p> 
    </ul>

    <h5><span>Novice U12 Mädchen:</span></h5>
    <ul>
      <p><li>Platz 1 - Conny Li</li></p>
      <p><li>Platz 2 - Isabelle Moskalyuk</li></p>
      <p><li>Platz 3 - Alisa Slidziewska</li></p>
    </ul>

    <h5><span>Novice U10 Mädchen:</span></h5>
    <ul>
      <p><li>Platz 1 - Alisa Pastukhova</li></p>
      <p><li>Platz 2 - Élise Reiser</li></p>
      <p><li>Platz 3 - Phyllis Duda</li></p>
    </ul>

    <h5><span>Intermediate Mädchen:</span></h5>
    <ul>
        <p><li>Platz 2 - Laura Rosenthal</li></p>
    </ul>

    <h5><span>Pre-Advanced Mädchen:</span></h5>
    <ul>
      <p><li>Platz 3 - Taylor Sauer</li></p>
    </ul>

    <h5><span>Anwärter Mädchen B:</span></h5>
    <ul>
      <p><li>Platz 7 - Melina Lehmann</li></p>
      <p><li>Platz 8 - Zoe Jurakova</li></p>
    </ul>

    <h5><span>Anwärter C Mädchen:</span></h5>
    <ul>
      <p><li>Platz 3 - Eva Engelhorn</li></p>
    </ul>`,
    coverImage: "images/wettbewerbe/Gruppenbild_nach_Siegerehrung.jpeg",
    gallery: [
      "images/wettbewerbe/Siegerehrung_Advanced_Jungen.jpeg",
      "images/wettbewerbe/Siegerehrung_U10.jpeg",
      "images/wettbewerbe/Phyllis_und_Elise_mit_Adrian.jpeg",
      "images/wettbewerbe/Clara_Engelhorn_mit_Nicole_Lampe.jpeg",
    ],
  },

 
 
 
];

function parseDate(dateStr) {
  if (!dateStr || dateStr === "N/A" || typeof dateStr !== "string") return null;

  const germanMatch = dateStr.match(/(\d{1,2})\.(\d{1,2})\.(\d{4})/);
  if (germanMatch) {
    return new Date(
      Number.parseInt(germanMatch[3]),
      Number.parseInt(germanMatch[2]) - 1,
      Number.parseInt(germanMatch[1]),
    );
  }

  const monthMap = {
    januar: 0,
    january: 0,
    februar: 1,
    february: 1,
    märz: 2,
    march: 2,
    april: 3,
    mai: 4,
    may: 4,
    juni: 5,
    june: 5,
    juli: 6,
    july: 6,
    august: 7,
    september: 8,
    oktober: 9,
    october: 9,
    november: 10,
    dezember: 11,
    december: 11,
  };

  const words = dateStr.toLowerCase().split(/[\s-]+/);
  let year = words.find((w) => w.match(/^\d{4}$/));
  let month = words.find((w) => monthMap.hasOwnProperty(w));

  if (year && month !== undefined) {
    return new Date(Number.parseInt(year), monthMap[month], 1);
  }

  return null;
}

const NEWS_LIST_DATES = wettbewerbeData
  .map((item) => parseDate(item.date))
  .filter((d) => d !== null)
  .sort((a, b) => a - b);

let NEWS_LIST_MIN_DATE = null;
let NEWS_LIST_MAX_DATE = null;
if (NEWS_LIST_DATES.length > 0) {
  NEWS_LIST_MIN_DATE = NEWS_LIST_DATES[0];
  NEWS_LIST_MAX_DATE = NEWS_LIST_DATES.at(-1);
}

const wettbewerbeData_DATES_SORTED = wettbewerbeData.toSorted((a, b) => {
  const dateA = parseDate(a.date);
  const dateB = parseDate(b.date);
  if (dateA === null && dateB === null) return 0;
  if (dateA === null) return 1;
  if (dateB === null) return -1;
  return dateB - dateA;
});
