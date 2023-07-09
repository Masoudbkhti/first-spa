import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { ProductDetails } from "./components/ProductDetails";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Route, Routes } from "react-router-dom";
function App() {
  const products = {
    sizif: {
      title: "Der Mythos des Sisyphos",
      img: "../src/assets/images/sizif.jpg",
      price: "18 Euro",
      sliderimg: "../src/assets/images/sizif-slider.jpg",
      description:
        "Der Mythos des Sisyphos ist neben Der Mensch in der Revolte (L’homme révolté) das wichtigste philosophische Werk Camus’. In Der Mythos des Sisyphos entwickelt Camus seine Philosophie des Absurden, die eng mit dem Existentialismus verwandt ist. Der Essay ist im Zusammenhang mit dem Bühnenstück Caligula (Uraufführung 1945) und dem Roman Der Fremde (L’Étranger, 1942) zu sehen. Die Thematik des Absurden, welche Camus in diesem Werk entwickelt, findet sich jedoch nicht nur in diesen Werken, sondern durchzieht Camus’ Œuvre, so sind zum Beispiel diese Motive auch in Die Pest (La Peste, 1947) vorhanden.1948 erschien das Werk erstmals mit der im Erstdruck nicht enthaltenen Kafka-Studie, 1965 erschien die letzte noch von Camus durchgesehene Fassung.[1]",
    },
    ikigai: {
      title: "Ikigai",
      img: "../src/assets/images/ikigay.jpg",
      sliderimg: "../src/assets/images/ikigay-slider.jpg",
      price: "25 Euro",
      description:
        "Ikigai (japanisch 生き甲斐 ‚Lebenssinn‘) ist frei übersetzt „das, wofür es sich zu leben lohnt“ „die Freude und das Lebensziel“ oder in der Sprache der Verlagswerbung ausgedrückt „das Gefühl, etwas zu haben, für das es sich lohnt, morgens aufzustehen“.Generell hat in der japanischen Kultur bedingt durch religiös-philosophische Überlieferungen die gründliche Selbsterforschung und die Suche nach dem Lebenszweck eine wichtige Bedeutung. Die Sinnfindung ist naturgemäß von Individuum zu Individuum sehr verschieden. Die japanische Ratgeberliteratur (ikikata no hon) hat hier das Konzept Ikigai entdeckt, das dem Sinnsuchenden Lebensfreude und damit innere Zufriedenheit vermitteln soll.In den japanischen Medien wird häufig das landeseigene Selbstverständnis und die kulturelle Identität thematisiert. Demnach wird dort auch die Frage diskutiert, welche gesellschaftlichen Ideale als Grundlage für Ikigai dienen sollten, was man als Ikigai ansehen kann (und was nicht) und ob man Personen bei der Suche nach Ikigai in organisierter Weise anleiten sollte (oder nicht). Das Konzept Ikigai ist vor allem im Rahmen des neueren japanischen Sinnorientierungs- und Selbstoptimierungstrends ab den 1980er Jahren von Bedeutung, in denen auch der iyashi-Trend und der Trend zu einer neuen Spiritualität seinen Anfang nahm Ikigai wird gegenwärtig als kulturelle Exportware in der globalen Content-Industrie vermarktet.",
    },
    ablah: {
      title: "Der Idiot",
      img: "../src/assets/images/ablah.jpg",
      price: "29 Euro",
      sliderimg: "../src/assets/images/ablah-slider.jpg",
      description:
        "Der Idiot (russisch Идиот Idiot) gehört zu den bekanntesten Romanen Fjodor Dostojewskis. Er wurde von Dostojewski in Genf 1867 begonnen, in Mailand 1868 beendet und erschien erstmals von Januar 1868 bis Februar 1869 in der Zeitschrift Russki Westnik. Die deutsche Erstausgabe erschien 1889 im S. Fischer Verlag in der Übersetzung von August Scholz. Im selben Verlag erschien 1998 die in den Feuilletons gefeierte Neuübersetzung von Swetlana Geier im Rahmen der Dostojewski-Werkausgabe.[1] Die Geschichte des Fürsten Myschkin, der für ungefähr ein halbes Jahr sein Schweizer Refugium verlässt und in die Petersburger Gesellschaft gerät, zählt zu den Werken der Weltliteratur. In seiner naiven, unkonventionellen Art erblickt der Protagonist die Menschen in ihren persönlichen und sozialen Spannungen und Widersprüchen und ihrem daraus resultierenden Leid. Er scheitert in seinen Bemühungen, ihnen zu helfen, und versinkt wieder in seinen Krankheitszustand der geistigen Isolation.",
    },
    ansuyemarg: {
      title: "Jenseits des todes",
      img: "../src/assets/images/ansuyemarg.jpg",
      price: "19 Euro",
      sliderimg: "../src/assets/images/ansuyemarg-slider.jpg",
      description:
        "Jamal (Hossein) Mirsadeghi (Persian: جمال میرصادقی, b. 1933) is an Iranian writer.[1] He was born in Tehran, and graduated in Persian Literature from the Literature and Human Science Faculty of Tehran University. He held various jobs as an aide, teacher, library staff, and examination designer for governmental employers and staff in the national old document centre, and as a creative writing lecturer. He has written ten novels, numerous short stories, a fiction dictionary, and published some research on literature and the short story. His writing has been translated into English, German, Armenian, Georgian, Italian, Russian, Romanian, Hebrew, Arabic, Hungarian, Urdu, Hindi and Chinese. He lives in Tehran and teaches creative writing and short story writing.",
    },
    mana: {
      title: "Ja zum Leben",
      img: "../src/assets/images/mana.jpg",
      price: "39 Euro",
      sliderimg: "../src/assets/images/mana-slider.jpg",
      description:
        "In dem Erlebnisbericht, den Frankl zunächst anonym veröffentlichen wollte, beschreibt er aus der Sicht eines jüdischen Psychologen dessen Erlebnisse im Konzentrationslager. Dabei geht es zunächst um die Auswirkung der Einlieferung in ein Konzentrationslager auf die Häftlinge, aber auch um die Beziehungen zwischen Häftlingen wie beispielsweise, dass einige Häftlinge, die Aufseher wurden, brutaler handelten als die eigentlichen SS-Aufseher. Das zentrale Erlebnis im Konzentrationslager war für Frankl die Erfahrung, dass es möglich ist, auch noch unter inhumansten Bedingungen einen Sinn im Leben zu sehen. So beschreibt er, dass diejenigen Häftlinge eine bessere Chance hatten, zu überleben, die jemanden hatten, der auf sie wartet. Für Frankl selbst war es die Vorstellung, dass er in der Zukunft Vorlesungen über die Auswirkungen des Lagers auf die Psyche halten wird. Die letzten 50 Seiten bestehen aus dem Theaterstück Synchronisation im Birkenwald: Sokrates, Kant und Spinoza kommen vom Himmel in das fiktive „KZ Birkenwald“ und wollen den ahnungslosen Menschen helfen. Doch das können sie nicht, die Menschen müssen selbst auf den Sinn ihres Lebens kommen.",
    },
    badbadakbaz: {
      title: "Drachenläufer",
      img: "../src/assets/images/badbadakbaz.jpg",
      price: "49 Euro",
      sliderimg: "../src/assets/images/badbadakbaz-slider.jpg",
      description:
        "Amir und Hassan, zwei befreundete Jungen aus unterschiedlichen Bevölkerungsgruppen, wachsen im Kabul der 1970er Jahre auf. Amir, Sohn eines großbürgerlichen Paschtunen, macht sich für den Tod seiner Mutter, die bei seiner Geburt starb, schwere Vorwürfe. Hassan, der Sohn des Hausdieners Ali und Angehöriger der Hazara, einer diskriminierten Ethnie, lässt sich gerne von Amir Geschichten vorlesen. Hassan kann nicht lesen und nicht schreiben, ist aber charakterlich ein durch und durch aufrichtiger Mensch und Amir, den er sehr bewundert, in unerschütterlicher Freundschaft ergeben. Die beiden Jungen genießen das Leben im bürgerlichen Kabul.Eines Tages versucht der kräftigere Assef, die beiden Freunde zu verprügeln. Hassan vertreibt Assef und seine Freunde mit seiner Zwille. Baba, Amirs Vater, schenkt Hassan zum Geburtstag eine Operation, die dessen angeborene Hasenscharte entfernt. Etwas später, am Tag als die beiden zusammen einen mit Papierdrachen ausgetragenen Wettkampf gewinnen, wird jedoch Hassan von Assef zusammengeschlagen und vergewaltigt. Amir, der dies heimlich beobachtet, aber zu feige ist, Hassan zu helfen, macht sich nach diesem Vorfall schwere Vorwürfe. Aus Scham über sein Versagen kann er nicht damit umgehen, dass Hassan weiter in seiner Nähe ist, und schiebt Hassan einen fingierten Diebstahl unter, damit dieser aus dem Haus gejagt wird. Hassan gesteht die Tat, obgleich er diese nicht begangen hat. Amirs Vater – von ihm Baba genannt – verzeiht die angebliche Tat, aber Hassans Vater Ali verlässt das Haus mit seinem Sohn, um der Schande zu entgehen.",
    },
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products products={products} />} />
        <Route
          path="/products/:id"
          element={<ProductDetails products={products} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
