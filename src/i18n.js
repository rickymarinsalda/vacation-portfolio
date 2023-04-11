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
      },
      "dove":{
        "title":"Where we are",
        "body1": "Marciana is a beautiful village that offers a unique blend of history, culture, and natural beauty. You can explore the narrow streets of the village and discover hidden gems such as small shops selling local products and traditional restaurants serving delicious food.",
        "title2":"How to reach Marciana from Portoferraio",
        "body2": "You can reach Marciana from Portoferraio by <span class='font-black'>bus, taxi or car</span>.The bus journey time between Portoferraio and Marciana is around 30 minutes.",
        "foot": " Marciana is a peaceful medieval hilltop village on the slopes of <span class='font-black'>Monte Capanne</span> in the western part of Elba island. It’s one of the oldest settlements on the island with foundations dating back to 35 BC. There are many things to do in Marciana such as visiting the Marciana Fortress, which was built in 1700 and offers stunning views of the surrounding area. You can also visit the <span class='font-black'>Church of San Niccolò</span>, which dates back to the 12th century and has a beautiful bell tower. If you’re interested in hiking, there are many trails that offer breathtaking views of the island. <br> <br> Nestled in greenery of oak, pine and chestnut trees and enjoying the freshest of air, the Marciana area exudes a special atmosphere with a mountain-like climate although the sea is only <span class='font-black'>five kilometers away</span>. Like the rest of the island, the Marciana area is bursting with stunning beaches, such as the sandy stretches at Paolina, Procchio and Spartaia, the sand and reefs of Sant’Andrea; the reefs of Punta Nera and Chiessi, and the rocks and gravel of Pomonte and Patresi. In the village are available bar café, restaurants, wine-shop, pizzeria, typical shops, cash machine, playgrounds."
      },
      "vicino":{
        "title":"What's near",
        "beach1":"Procchio beach",
        "beach2":"Paolina beach",
        "beach3":"Sant'Andrea beach",
        "beach4":"Spartaia beach",
        "beach1desc":"Procchio beach is one of the longest and best equipped sandy beaches on the Island of Elba. It is located in Procchio, a small town in the municipality of Marciana. The beach is just under one kilometer long and has golden, fine sand. You'll spend 20 minutes to arrive there by car.",
        "beach2desc":"Paolina beach is characterized by the nearby tiny island covered in lush, Mediterranean bush. The beach is very narrow, about 6 meters wide at its widest point and less than one hundred meters long. The sand is mixed with pebbles. The water is transparent and the sea bed is splendid. You'll spend 18 minutes to arrive there by car. ",
        "beach3desc":"Sant’Andrea beach is one of the most famous beaches in the Commune of Marciana. The beach is characterized by turquoise, crystal clear water and smooth granite rocks that go right down to the sea. The beach is quite small, only about 150 meters long and 10 meters at its widest point.",
        "beach4desc":"Spartaia beach is located in the northern part of Elba Island, between Procchio and Paolina beaches. It is a beautiful sandy beach, about 160 meters long and characterized by fine golden sand. The beach is protected by lush Mediterranean vegetation and two cliffs",
        "bottone":"Go"
      },
      "prezzo":{
        "title":"Prices",
        "body":" The cost of the apartment varies depending on the month of booking, but in any case it starts from <span class='font-black'>50 euros</span> per night.",
        "mese1":"July",
        "mese2":"August",
        "mese3":"June & September",
        "mese4":"May",
        "notte":"/night",
        "info1":"Minimum stay 5 nights",
        "info2":"Minimum stay 2 nights",
        "info4":" +30€ final cleaning",
        "info3":"Rent linen (sheets, towels) on request"
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
        "body": "Noleggiare una <span class='font-black'>Vespa 50</span> è un’ottima soluzione per esplorare le spiagge e le calette vicine a Marciana. È un’opzione economica che ti permette di viaggiare in tutta la zona a tuo ritmo e goderti tutto il bellissimo paesaggio.",
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
      },
      "dove":{
        "title":"Dove siamo",
        "body1": "Marciana è un bellissima cittadina che offre un mix unico di storia, cultura e bellezza naturale. Puoi esplorare le stradine della città e scoprire tesori nascosti come piccoli negozi che vendono prodotti locali e ristoranti tradizionali che servono cibo delizioso.",
        "title2":"Come raggiungere Marciana da Portoferraio",
        "body2":"Puoi raggiungere Marciana da Portoferraio in <span class='font-black'>autobus, taxi o auto</span>. Il tempo di percorrenza in autobus tra Portoferraio e Marciana è di circa 30 minuti.",
        "foot":"Marciana è un tranquillo villaggio medievale situato sulle pendici del <span class='font-black'>Monte Capanne</span>, nella parte occidentale dell’isola d’Elba. È uno dei più antichi insediamenti dell’isola con fondazioni risalenti al 35 a.C. Ci sono molte cose da fare a Marciana come visitare la Fortezza di Marciana, costruita nel 1700 e offre una vista mozzafiato della zona circostante. Puoi anche visitare la <span class='font-black'>Chiesa di San Niccolò</span>, risalente al XII secolo e con un bellissimo campanile. Se sei interessato all’escursionismo, ci sono molti sentieri che offrono viste mozzafiato dell’isola.<br> <br> Immersa nel verde di querce, pini e castagni e godendo dell’aria più fresca, l’area di Marciana emana un’atmosfera speciale con un clima di montagna anche se il mare dista solo <span class='font-black'> cinque chilometri</span>. Come il resto dell’isola, l’area di Marciana è ricca di spiagge mozzafiato, come le distese sabbiose di Paolina, Procchio e Spartaia, la sabbia e le scogliere di Sant’Andrea; le scogliere di Punta Nera e Chiessi e le rocce e i ciottoli di Pomonte e Patresi. Nel villaggio sono disponibili bar caffè, ristoranti, enoteche, pizzerie, negozi tipici, bancomat e parchi giochi."
      },
      "vicino":{
        "title":"Cosa c'è vicino",
        "beach1":"Spiaggia di Procchio",
        "beach2":"Spiaggia della Paolina",
        "beach3":"Spiaggia di Sant'Andrea",
        "beach4":"Spiaggia di Spartaia",
        "beach1desc":"La spiaggia di Procchio è una delle spiagge sabbiose più lunghe e meglio attrezzate dell’Isola d’Elba. Si trova a Procchio, una piccola città nel comune di Marciana. La spiaggia è lunga poco meno di un chilometro e ha sabbia dorata e fine. Ci vorranno circa 20 minuti per arrivarci in auto.",
        "beach2desc":"La spiaggia di Paolina è caratterizzata dalla vicina piccola isola coperta di lussureggiante macchia mediterranea. La spiaggia è molto stretta, larga circa 6 metri nel punto più largo e lunga meno di cento metri. La sabbia è mista a ciottoli. L’acqua è trasparente e il fondale marino è splendido. Ci vorranno circa 18 minuti per arrivarci in auto.",
        "beach3desc":"La spiaggia di Sant’Andrea è una delle spiagge più famose del Comune di Marciana. La spiaggia è caratterizzata da acqua turchese e cristallina e da lisci massi di granito che scendono fino al mare. La spiaggia è piuttosto piccola, lunga solo circa 150 metri e larga 10 metri nel punto più largo.",
        "beach4desc":"La spiaggia di Spartaia si trova nella parte nord dell’Isola d’Elba, tra le spiagge di Procchio e Paolina. È una bellissima spiaggia sabbiosa, lunga circa 160 metri e caratterizzata da sabbia fine e dorata. La spiaggia è protetta dalla lussureggiante vegetazione mediterranea e da due scogliere.",
        "bottone":"Vai"
      },
      "prezzo":{
        "title":"Prezzi",
        "body":"Il costo dell’appartamento varia a seconda del mese di prenotazione, ma in ogni caso parte da <span class='font-black'>50 euro</span> a notte.",
        "mese1":"Luglio",
        "mese2":"Agosto",
        "mese3":"Giugno e Settembre",
        "mese4":"Maggio",
        "notte":"/notte",
        "info1":"Permanenza minima 5 notti",
        "info2":"Permanenza minima 2 notti",
        "info3":"Biancheria prenotabile su richiesta",
        "info4":"+30€ pulizia finale"
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