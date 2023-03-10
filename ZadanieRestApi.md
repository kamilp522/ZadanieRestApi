# Zadanie rekrutacyjne

## Wprowadzenie

Dzień dobry, w tym zadaniu oceniana będzie głównie jakość kodu oraz sposób wykonania.
Na początku proszę utworzyć repozytorium do którego będę miał dostęp w celu weryfikacji zadania.
Po jego ukończeniu proszę przesłać adres url repozytorium na adres k.michalik@tmtechnologie.pl

## Treść zadania

Proszę utworzyć REST API za pomocą nodeJS z typescript w którym będziemy mogli:

1. zobaczyć listę książek,
2. dodać nową książkę,
3. usunąć książkę,

Wymagania:

1. dane powinny zapisywać się w bazie sqlite,
2. baza danych powinna zawierać jedną tabelę _books_ z kolumnami - _title_ oraz _author_,
3. do połączenia z bazą danych proszę wykorzystać ORM,
4. backend powinien posiadać endpoint _/books_, _/books/add_ oraz _/books/delete_,
5. zawarta powinna być instukcja w pliku _readme.md_ z opisem utworzonego REST API (np. endpoint, opis co robi konkretny endpoint, metoda http, wymagane parametry) oraz wskazówkami w jaki sposób uruchomić aplikację
