import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Ciao, sono Marco!
            <br className="hidden lg:inline-block" />
            Sono un giovane architetto contraddistinto della mia forte
            creatività che coltivo da quando ero bambino, una creatività che ha
            sempre preso il sopravento su tutto.
          </h1>
          <p className="mb-8 leading-relaxed">
            Grazie a questo mio aspetto mi sono sempre trovato a mio agio a
            lavorare con i modellini in quanto li reputo il primo step
            fondamentale per la progettazione architettonica. Oltre alla mia
            creatività mi contraddistinguo per una facile e rapida comprensione
            degli aspetti che ancora non conosco, il senso di riuscirmi ad
            adeguare a tutte le situazioni in cui mi ritrovo e la voglia di
            uscire sempre dalle mie zone di confort per mettermi sempre alla
            prova e sentirmi stimolato. Ho svolto differenti workshop che mi
            hanno permesso di mettermi sempre alla prova affrontando tematiche
            sempre differenti. La tematica maggiormente affrontata in queste mie
            esperienze è stata quella dell'architettura ipogea e della
            riqualificazione urbana. Ho terminato il mio percorso di laurea con
            una tesi dal titolo VARIAZIONI DI UNO SPAZIO SACRO - NUOVI USI PER
            UNA CHIESA DI RUDOLF SCHWARZ, dove ho potuto mettermi alla prova
            nella rifunzionalizzazione di una chiesa in una mensa sociale nella
            quale non si sono modificati i caratteri architettonici, ma anzi ne
            sono stati esaltati. Dopo aver conseguito il titolo ho svolto un
            tirocinio formativo a Barcellona all'interno dello studio di MIAS
            arquitectos, uno studio dove ho imparato un nuovo metodo
            progettuale, che non parte solo dallo schizzo su carta ma bensì
            dalla realizzazione di un modellino concettuale. All'interno di
            questo studio ho migliorato le mia capacità organizzative e
            specialmente il lavorare sotto pressione in vista di una consegna
            imminente.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
