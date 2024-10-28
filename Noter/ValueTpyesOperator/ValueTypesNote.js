
//Bolean værdier
console.log(3 > 2)
console.log("OG")
console.log(2<3)

console.log("\n")

//Logiske operator  comparison operator kommer så før de andre
//and operator
console.log(true && false) // Er kun true hvis begee er true er den true  større precident end or 
console.log("OG")
console.log(true && true)  
console.log("\n")
//Or opearator 
console.log(true || false) // giver true hvis bare en af dem er true  mindste precedens lowest precdens
console.log(false || false)
console.log("\n")

//NOT operator 
console.log(!true)
console.log(!false)
console.log("\n")


//ternary operating på tre værider skrives med ?
console.log(true ? 1: 2)
console.log(false? 1: 2)
console.log("\n")

/*
kaldes den conditional operator 

The value on the
left of the question mark “picks” which of the other two values will come out.
When it is true, it chooses the middle value, and when it is false, it chooses the
value on the right.
*/


/*Automatik type conversion: handler om at convete  null bliver fx 0 i converisonen osv 
og "5" bliver til 5 i den under  og men trejdje prøver stirng   concatnation 
før nummer addition så 1 bliver converted fra 1 nummer til "1" string når noget 
der ikke mappes til et nummer (som "fice" eller undifined ) er converted til nummer får man
NaN og andre operationer på NaN kan før til flere NaN output
*/

console.log(8 * null)
console.log("5" -1)
console.group("5"+1)
console.log("fice" *5)


/*
Når man sammenligner værdier af samme type ved brug af == 
er outcome nemme at predict, man skal få true hvis hvis begge værdier er det samme
undtagen i tilfælde af NaN
Man når typer adskiller sig , Javascript bruger en kompliceret og forvirende sæt af regler 
for at bestemme hvad der skal gøres. 
I fleste tilfælde prøver den bare en value til den anden values type 
Men når null eller undifiend sker på en vilkårlig side af operator, så bliver den sand hvis
true kun hvis begge sider er en af null eller undfined

hvis man ikke vil have type conversion brug === 
*/

//Short circuting af logical operators
/*
Logisk operator && og || håndtere values af forskellige typer på en særligmåde 
I korte træk betyder det, at når et logisk udtryk evalueres, vil det stoppe evalueringen, 
så snart resultatet er kendt uden at skulle evaluere hele udtrykket.

Der er to hovedlogiske operatorer, der kan short-circuite: "&&" (logisk og) og "||" (logisk eller).

Logisk og (&&): Hvis det første udtryk i en &&-operation evalueres til false, 
behøver det andet udtryk ikke at blive evalueret, fordi hele udtrykket vil være false uanset hvad.
 På samme måde, hvis det første udtryk evalueres til true, 
 fortsætter evalueringen for at afgøre resultatet af det andet udtryk.
  Dette er fordi, hvis den første del er false, kan hele udtrykket ikke være true, 
  uanset hvad den anden del er.

Logisk eller (||): Hvis det første udtryk i en ||-operation evalueres til true, 
behøver det andet udtryk ikke at blive evalueret, fordi hele udtrykket vil være true uanset hvad.
 På samme måde, hvis det første udtryk evalueres til false, 
 fortsætter evalueringen for at afgøre resultatet af det andet udtryk
 Dette skyldes, at hvis den første del er true, kan hele udtrykket ikke være false,
uanset hvad den anden del er.

Short-circuiting hjælper med at forbedre ydeevnen og undgår unødvendige evalueringer, 
især når der arbejdes med komplekse logiske udtryk eller udtryk, der involverer funktioner 
med betydelig beregningsmæssig overhead.
*/
console.log(null || "user")
console.log("Agnes" || "user")


console.log("\n")
let count = 0; // Nul
let defaultCount = 10;

let result = count || defaultCount;
console.log(result); // Output: 10
