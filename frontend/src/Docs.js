import React from 'react'
import obrazek from './img/obrazek.png'
import kontenery from './img/kontenery.png'
import apka from './img/aplikacja.png'
import apka2 from './img/aplikacja2.png'

export default function Docs() {
    document.title = "Documentation"
    return(
        <div className="App">
            <h1>Dokumentacja</h1>
        <header className="App-header">
            <div>
                <h3>Aplikacja zrealizowana w ramach ramach laboratorium PFSwCO</h3>
                <p>Do uruchomienia aplikacji nalezy uzyc polecenia "docker compose up", nastepnie aplikacja uruchamia sie na porcie 3000, na ktory wystarczy wejsc przy pomocy przegladarki</p>
                <p>Aplikacja dziala w obrebie 4 kontenerow. Za frontend aplikacji odpowiada React.js w kontenerze o nazwie frontend, backend jest stworzony przy pomocy Spring-Boot w konterzenie backend, a jako magazyn danych sluzy MySQL z kontenera db i Redis z kontenera o tej samej nazwie, PHPMyAdmin z kontenera o nazwie pma pozwala na polaczenie sie z baza danych i pozwala na wykonywanie operacji DDL i DMD. </p>
                <h1>Schemat aplikacji</h1>
                <img src={obrazek} alt="Schemat aplikacji"></img>
                <h3>Zdjecie przedstawiajace uruchomione kontenery dzialajace w ramach aplikacji:</h3>
                <img src={kontenery} alt="Dzialajace kontenery"></img>
                <h3>Zdjecie przedstawiajace dzialajaca aplikacje:</h3>
                <img src={apka} alt="Dzialajaca aplikacja"></img>
                <h3>Zdjecie przedstawiajace dzialajaca aplikacje:</h3>
                <img src={apka2} alt="Dzialajaca aplikacja"></img>
                <p>Frontend dziala na porcie 3000, backend na porcie 8080, PHPMyAdmin na porcie 8081 i MySQL na 3306.</p>
                <p>Do aplikacji podlaczono takze wolumeny, ktore umozliwiaja sledzenie zmian w kodzie.</p>
            </div>
        </header>
      </div>
    )
}