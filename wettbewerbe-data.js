/* ========================================
   DATEN FÜR WETTBEWERBE
   Hier neue Wettbewerbe hinzufügen.
   ======================================== */

const wettbewerbeData = [
  {
    id: "Brigitte-Föll-Pokal 2026",
    title: "Brigitte-Föll-Pokal 2026",
    date: "14.11.2026",
   description: ` 
    <p>
      <span>Erfolgreiches Wochenende für den Mannheimer ERC beim Brigitte Föll Pokal 2026</span>
    </p>

    <h4><span>Unsere Ergebnisse:</span></h4>

    <h5><span>Advanced Novice Jungen und Qualifikation zur Deutschen Nachwuchsmeisterschaft 2027:</span></h5>
    <ul>
      <p><span>Platz 1 -Leo Zhou</span></p>
      <p><span>Platz 2 - Theodor Peth</span></p>
      <p><span>Platz 3 - Maximilian Mild</span></p>
    </ul>

    <h5><span>Advanced Novice Mädchen und Qualifikation zur Deutschen Nachwuchsmeisterschaft 2027:</span></h5>
    <ul>
      <p><span>Platz 1 - Liliana Bloch</span></p>
      <p><span>Platz 3 - Stella Herzog</span></p>
      <p><span>Platz 4 - Sophia Solz</span></p>
      <p><span>Platz 7 - Lotta Montwe</span></p>
      <p><span>Platz 9 - Emma Adamczyk (Ersatz DNM)</span></p>
      <p><span>Platz 10 - Lea Jurisic (Ersatz DNM)</span></p>
    </ul>

    <h5><span>Novice U12 Mädchen:</span></h5>
    <ul>
      <p><span>Platz 1 - Conny Li</span></p>
      <p><span>Platz 2 - Isabelle Moskalyuk</span></p>
      <p><span>Platz 3 - Alisa Slidziewska</span></p>
    </ul>

    <h5><span>Novice U10 Mädchen:</span></h5>
    <ul>
      <p><span>Platz 1 - Alisa Pastukhova</span></p>
      <p><span>Platz 2 - Élise Reiser</span></p>
      <p><span>Platz 3 - Phyllis Duda</span></p>
    </ul>

    <h5><span>Intermediate Mädchen:</span></h5>
    <ul>
        <p><span>Platz 2 - Laura Rosenthal</span></p>
    </ul>

    <h5><span>Pre-Advanced Mädchen:</span></h5>
    <ul>
      <p><span>Platz 3 - Taylor Sauer</span></p>
    </ul>

    <h5><span>Anwärter Mädchen B:</span></h5>
    <ul>
      <p><span>Platz 7 - Melina Lehmann</span></p>
      <p><span>Platz 8 - Zoe Jurakova</span></p>
    </ul>

    <h5><span>Anwärter C Mädchen:</span></h5>
    <ul>
      <p><span>Platz 3 - Eva Engelhorn</span></p>
    </ul>`,
    coverImage: "images/wettbewerbe/Gruppenbild_nach_Siegerehrung.jpeg",
    gallery: [
      "images/wettbewerbe/Siegerehrung_Advanced_Jungen.jpeg",
      "images/wettbewerbe/Siegerehrung_U10.jpeg",
      "images/wettbewerbe/Phyllis_und_Elise_mit_Adrian.jpeg",
      "images/wettbewerbe/Clara_Engelhorn_mit_Nicole_Lampe.jpeg",
    ],
  },
 {
    id: "NRW Trophy 2026",
    title: "NRW Trophy 2026",
    date: "16.11.2026",
    description: `
      <p><span>Internationaler Auftritt unserer Sportler in Dortmund</span></p>

      <h4><span>Unsere Ergebnisse:</span></h4>

      <h5><span>Junior Men:</span></h5>
      <p><span>Starker Auftritt von Felix Zeng mit persönlicher Bestpunktzahl von 182,12 Punkten.</span></p>
      <p><span>Platz 4 – Felix Zeng</span></p>

      <h5><span>Advanced Novice Jungen:</span></h5>
      <p><span>Leo Zhou gewinnt bei seinem ersten internationalen Wettbewerb.</span></p>
      <p><span>Platz 1 – Leo Zhou</span></p>

      <h5><span>Advanced Novice Mädchen:</span></h5>
      <p><span>Platz 15 – Sophia Solz</span></p>
      <p><span>Platz 17 – Liliana Bloch</span></p>
      <p><span>Platz 19 – Shirley Sheffler</span></p>

      <h5><span>Junior Women:</span></h5>
      <p><span>Platz 21 – Leyla Tosun</span></p>
    `,
    coverImage: "images/wettbewerbe/Felix_Stefan.jpeg",
    gallery: [
      "images/wettbewerbe/Leo_Adrian_Larissa.jpeg",
      "images/wettbewerbe/Felix_SP.jpeg",
      "images/wettbewerbe/Felix_FP.jpeg",
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
