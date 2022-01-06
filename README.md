# Dokumentacja
### Aplikacja zrealizowana w ramach ramach laboratorium PFSwCO
Do uruchomienia aplikacji nalezy uzyc polecenia "docker compose up", nastepnie aplikacja uruchamia sie na porcie 3000, na ktory wystarczy wejsc przy pomocy przegladarki
Aplikacja dziala w obrebie 4 kontenerow. Za frontend aplikacji odpowiada React.js w kontenerze o nazwie frontend, backend jest stworzony przy pomocy Spring-Boot w konterzenie backend, a jako magazyn danych sluzy MySQL z kontenera db i Redis z kontenera o tej samej nazwie, PHPMyAdmin z kontenera o nazwie pma pozwala na polaczenie sie z baza danych i pozwala na wykonywanie operacji DDL i DMD.
### Schemat aplikacji
![obrazek](https://user-images.githubusercontent.com/47696039/148454034-a5415c6c-78ab-4493-aadb-07263f7a208d.png)
### Zdjecie przedstawiajace uruchomione kontenery dzialajace w ramach aplikacji:
![Screenshot from 2022-01-06 21-50-25](https://user-images.githubusercontent.com/47696039/148454100-6843bedf-8323-44a3-a2d1-398c618415b8.png)
## Zdjecie przedstawiajace dzialajaca aplikacje:
![aplikacja](https://user-images.githubusercontent.com/47696039/148454137-7a4b120b-e307-4578-9e04-f9ba31e27479.png)
### Zdjecie przedstawiajace dzialajaca aplikacje:
![aplikacja2](https://user-images.githubusercontent.com/47696039/148454196-2078c7fd-e0fa-4c0b-8173-a3a4d20f4110.png)
Frontend dziala na porcie 3000, backend na porcie 8080, PHPMyAdmin na porcie 8081 i MySQL na 3306.
Do aplikacji podlaczono takze wolumeny, ktore umozliwiaja sledzenie zmian w kodzie.
