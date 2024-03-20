# Week 1 CSS To The Rescue:
Ik ben gegaan voor de control panel, waarbij ik in het scherm 4 controllable schermen wilde creëren. Op desktop wil ik dat er 2 naast elkaar en 2 onder elkaar komen, en op mobiel mogen ze alle 4 onder elkaar.
Ik ben meteen mijn ideeën gaan uitwerken in Figma voordat ik ging coderen. Het was voor mij de eerste keer met Figma, dus het was ook een beetje uitzoeken hoe alles precies werkte.

## Eerste scherm
<img width="633" alt="Scherm­afbeelding 2024-03-12 om 12 47 55" src="https://github.com/maxstrikkers/CSSToTheRescue/assets/91324635/ff7bf075-3ebd-4a22-b914-8bd8efd99d0c">
<br>
Voor het eerste scherm (links boven) wilde ik een grid maken van knoppen waar de gebruiker op kan klikken. Als de gebruiker dit heeft gedaan, zal er op basis van welke knop er is aangeklikt een animatie gaan lopen op andere knoppen. Deze animatie zal oneindig duren totdat de gebruiker de knop weer indrukt om hem uit te zetten.

## Tweede scherm
<img width="632" alt="Scherm­afbeelding 2024-03-12 om 12 51 43" src="https://github.com/maxstrikkers/CSSToTheRescue/assets/91324635/cb279b77-c4a9-462f-9bb7-215882e328f4">
<br>
Voor het tweede scherm wilde ik een soort tv maken met feitjes over bepaalde planeten. De gebruiker kan zelf aangeven welke planeet hij of zij wil zien door op een van de knoppen aan de rechterkant te drukken. Het marsmannetje zal in het scherm blijven, alleen zal er een andere planeet verschijnen en zal de tekst ook veranderen met feitjes over de andere planeet.


## Derde scherm
<img width="637" alt="Scherm­afbeelding 2024-03-12 om 12 59 48" src="https://github.com/maxstrikkers/CSSToTheRescue/assets/91324635/1c7bf85a-db41-4aaf-9e6b-2c8b93648329">
<br>
Voor het derde scherm (links onder) wilde ik een kleiner schermpje maken waar tekst (in dit geval lines) naar beneden scrollt. De snelheid van deze scrollende tekst kan worden bepaald door de slider die rechtsonder staat. Ook wilde ik een radar maken die kan zien waar de muis zich op dit moment bevindt, maar ik denk dat dat lastig gaat worden met alleen CSS. Mocht dit niet mogelijk zijn, dan wil ik de radar laten draaien als de muis erboven zweeft.


## Vierde scherm
<img width="632" alt="Scherm­afbeelding 2024-03-12 om 13 03 51" src="https://github.com/maxstrikkers/CSSToTheRescue/assets/91324635/4d533255-ce26-4481-b0e3-3a8cd38f4027">
<br>
Voor het vierde scherm (rechts onder) wilde ik een soort hartslagmeter maken die aan en uit gezet kan worden met de knop aan de rechterkant. Echter, ik zit nog een beetje te twijfelen, want ik overweeg ook om de knop te laten fungeren als een schakelaar tussen de lichte en donkere modus.

# Week 2 CSS To The Rescue:

## Alle schermen goed positioneren
Ik ben begonnen met het maken van 4 sections in HTML. Elk van deze sections wordt later een scherm. Ik ben op mobiel begonnen, wilde daarom dat de schermen eerst onder elkaar kwamen en als het scherm groot genoeg werd, dan zouden er 2 naast elkaar en 2 onder elkaar komen.

```
/* STYLING BODY */
body{
    background-color: var(--light-color-background);
    display: grid;
    grid-template: 1fr 1fr 1fr 1fr / 1fr;
    padding: 1rem;
    grid-gap: 1rem;
    font-family:'Keania One', sans-serif;
}

/* STYLING BODY MOBIEL */
@media screen and (min-width: 1500px){
    body{
        grid-template: 1fr 1fr / 1fr 1fr;

 }
}
```

## Eerste scherm
Ik ben voor het eerste scherm (links boven) gaan werken met een formulier waar allemaal checkboxes in zitten dat ziet er als volgt uit in HTML. Er zijn een aantal checkboxes disabled omdat ik alleen wil dat de onderste rij klikbaar is.
```
<!-- SECTION LINKS BOVEN -->
    <section>
        <form>
            <input type="checkbox" disabled>
            <input type="checkbox" disabled>
            <input type="checkbox" disabled>
            <input type="checkbox" disabled>
            <input type="checkbox" disabled>
            <input type="checkbox" disabled>
            <input type="checkbox" disabled>
            <input type="checkbox" disabled>
            <input type="checkbox" disabled>
            <input type="checkbox" disabled>
            <input type="checkbox" disabled>
            <input type="checkbox" disabled>
            <input type="checkbox" disabled>
            <input type="checkbox" disabled>
            <input type="checkbox" disabled>
            <input type="checkbox" disabled>
            <input type="checkbox" disabled>
            <input type="checkbox" disabled>
            <input type="checkbox" disabled>
            <input type="checkbox" disabled>
            <input type="checkbox" disabled>
            <input type="checkbox" disabled>
            <input type="checkbox" disabled>
            <input type="checkbox" disabled>
            <input type="checkbox" disabled>
            <input type="checkbox" disabled>
            <input type="checkbox" disabled>
            <input type="checkbox" disabled>
            <input type="checkbox" disabled>
            <input type="checkbox" disabled>
            <input type="checkbox">
            <input type="checkbox">
            <input type="checkbox">
            <input type="checkbox">
            <input type="checkbox">
        </form>
    </section>
```

Dit moest natuurlijk gestyled worden en dat heb ik als volgt gedaan

```
/* DIT IS DE STIJLING VOOR DE EERSTE SECTIE VAN DE PAGINA */
section:first-of-type{
    border-radius: 1rem;
    background-color: var(--dark-color-background);
    padding: 1.5rem;
}

/* STIJLING VOOR HET EERSTE FORMULIER BINNEN DE EERSTE SECTIE */
section:first-of-type form:first-of-type{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    gap: 1rem;
    background-color: var(--border-color-purple);
    border-radius: 1rem;
    padding: 1.5rem;
}

/* AANPASSINGEN VOOR DE CHECKBOX-STIJL BINNEN DE EERSTE SECTIE */
section:first-of-type input[type="checkbox"]{
    appearance: none;
    background-color: var(--light-color-background);
    border: 10px solid rgba(0, 0, 0, 0.3);
    height: 3.5rem;
    width: 100%;
}

/* ANIMATIE VOOR KNOPEKLEUR VERANDERING BIJ GESELECTEERDE CHECKBOX */
form:first-of-type:has( input[type="checkbox"]:nth-of-type(5n + 1):checked ) input:nth-of-type(9n + 7){
    animation: changeButtonColor 2s infinite;
}

form:first-of-type:has( input[type="checkbox"]:nth-of-type(5n + 2):checked ) input:nth-of-type(8n + 13){
    animation: changeButtonColor 2s infinite;
}

form:first-of-type:has( input[type="checkbox"]:nth-of-type(5n + 3):checked ) input:nth-of-type(8n + 7){
    animation: changeButtonColor 2s infinite;
}

form:first-of-type:has( input[type="checkbox"]:nth-of-type(5n + 4):checked ) input:nth-of-type(8n + 11){
    animation: changeButtonColor 2s infinite;
}

form:first-of-type:has( input[type="checkbox"]:nth-of-type(5n + 5):checked ) input:nth-of-type(8n + 6){
    animation: changeButtonColor 2s infinite;
}

/* AANPASSINGEN VOOR GESELECTEERDE CHECKBOX-STIJL BINNEN DE EERSTE SECTIE */
section:first-of-type input[type="checkbox"]:checked  {
    background-color: var(--checked-button-color-active) !important;
}

```

Ik heb ook een animatie gemaakt die word toegepast en die loopt door een aantal kleuren heen van de knoppen.

```
/* CHECKBOX ANIMATION VOOR SECTION LINKS BOVEN */

@keyframes changeButtonColor {
    0% {background-color: var(--checked-button-color-1);}
    50% {background-color: var(--checked-button-color-2);}
    75% {background-color: var(--checked-button-color-3);}
    100% {background-color: var(--checked-button-color-1);}
}
```

# Week 3 CSS To the Rescue:
## Tweede scherm
<img width="505" alt="Scherm­afbeelding 2024-03-20 om 13 58 28" src="https://github.com/maxstrikkers/CSSToTheRescue/assets/91324635/d512a37f-15a9-41e8-86c7-2d581779124e">

Om ervoor te zorgen dat het tweede scherm op de manier waarop ik het wil wordt getoond, heb ik het als volgt ingedeeld in HTML. Dit zorgt ervoor dat ik links een groepje heb met de informatie over de planeet, de planeet zelf en de naam van de planeet. Deze zijn nu nog allemaal leeg maar worden later toegevoegd met CSS.
```
<section>
        <div> <!-- GROEP VOOR PLANEET CONTENT EN KNOPPEN-->
            <section> <!-- CONTENT MET PLANETEN-->
                <div>
                    <img src=""> <!-- HIER KOMT DE IMG VAN DE PLANEET-->
                    <span></span> <!--HIER KOMT DE NAAM VAN DE PLANEET-->
                </div> <!-- DIV VOOR PLANEET EN NAAM VAN PLANEET -->
                <div>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div> <!-- DIV VOOR INFORMATIE OVER DE PLANEET -->
                <img src="./assets/img/marsMannetje.svg" alt="Mars Mannetje"> <!-- IMG VAN MARS MANNETJE -->
            </section>
            <section> <!-- KNOPPEN VOOR DE PLANETEN-->
                <form>
                    <input type="radio" name="planet" value="earth">
                    <input type="radio" name="planet" value="mars">
                    <input type="radio" name="planet" value="saturn">
                    <input type="radio" name="planet" value="sun">
                    <input type="radio" name="planet" value="moon">
                </form>
            </section>
        </div>
    </section>
```




