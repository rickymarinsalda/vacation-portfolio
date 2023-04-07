import {
  dictionary,
  locale,
  _,t,
} from 'svelte-i18n';
function setupI18n({
  withLocale: _locale
} = {
  withLocale: 'en'
}) {
  dictionary.set({
    en: {
      "intro": {
        "testo": "A studio flat inspired by the <span class='font-black'>Vespa world</span>, located in a historic pedestrian lane in the medieval village of <a href='https://goo.gl/maps/ckj5VXFV7nW2ay9PA' class='underline text-sky-600 font-black'>Marciana</a>. Furnished with taste and attention to detail, it's a <span class='font-black'>cozy space</span> for <span class='font-black'>young couples</span> looking for a charming and elegant getaway.",
        
      },
      "details": {
        "title": "Details",
        "body": "The apartment has a designer sofa bed that encloses inside a comfortable <span class='font-black'>double bed</span>, the kitchenette is equipped with <span class='font-black'>induction cookers</span>, and the bathroom includes an <span class='font-black'>oversize shower</span>. The linen (sheets, towels) is not included, but it will be possible to rent it on request.",
        "letto": "Double bed",
        "bathroom":"Bathroom",
        "wifi":"Free wi-fi",
        "dim":"Dimensions",
        "flat":"Flat studio",
        "cuc": "Equipped kichen",
        "park": "Free parking",
        "sconto": "Ferry discount"
      },
      "services": {
        "title": "Services",
        "body": "Renting a <span class='font-black'>Vespa 50</span> is a great way to explore the nearby beaches and coves in Marciana. It’s an affordable option that allows you to travel around the area at your own pace and take in all of the beautiful scenery.",
        "click": "Click here for more details."
      },
      "gallery": {
        "title": "Gallery",
      },
      "nav": {
        "det": "Details",
        "ser": "Services",
        "gal": "Gallery",
        "loc": "Location",
        "pre": "Price",
      }
    },
    it: {
      "intro": {
        "testo": "Un appartamento ispirato al <span class='font-black'>mondo Vespa</span>, situato in una storica strada pedonale nel villaggio medievale di <a href='https://goo.gl/maps/ckj5VXFV7nW2ay9PA' class='underline text-sky-600 font-black'>Marciana</a>. Arredato con gusto e attenzione ai dettagli, è uno <span class='font-black'>spazio accogliente</span> per <span class='font-black'>giovani coppie</span> in cerca di una fuga affascinante ed elegante.",
        "subtopic": "Internationalization and Localization"
      },
      "details": {
        "title": "Dettagli",
        "body": "L’appartamento ha un divano letto che racchiude all’interno un comodo <span class='font-black'>letto matrimoniale</span>, l’angolo cottura è dotato di <span class='font-black'>fornelli a induzione</span> e il bagno include <span class='font-black'>un'ampia doccia</span>. La biancheria (lenzuola, asciugamani) non è inclusa, ma sarà possibile noleggiarla su richiesta.",
        "letto": "Letto matrimoniale",
        "bathroom":"Bagno",
        "wifi":"Wi-fi gratis",
        "dim":"Dimensioni",
        "flat":"Su un piano",
        "cuc": "Cucina accessoriata",
        "park": "Parcheggio gratis",
        "sconto": "Sconto traghetto"
      },
      "services": {
        "title": "Servizi",
        "body": "Affittare una <span class='font-black'>Vespa 50</span> è un’ottima soluzione per esplorare le spiagge e le calette vicine a Marciana. È un’opzione economica che ti permette di viaggiare in tutta la zona a tuo ritmo e goderti tutto il bellissimo paesaggio.",
        "click": "Clicca qua per maggiori informazioni."
      },
      "gallery": {
        "title": "Galleria",
      },
      "nav": {
        "det": "Dettagli",
        "ser": "Servizi",
        "gal": "Galleria",
        "loc": "Posizione",
        "pre": "Prezzi",
      }
    },
  });
  locale.set(_locale);
}
export {
  _,
  setupI18n,
  t
};