var CODES = {
//hello
"Hello" : `/*
Neche UrduScript likhen.
Code chalane k liye Run pe click karen.
*/

likho("Salam, Dunya")
`,
// var
"Variable": `// declare variable
rakho naam = "Ali"

// output to screen
likho(naam)
`,

// foreach
"ForEach": `// variable
rakho list = ["Ahmed", "Ali", "Qasim"]

// foreach loop. Iterate over 'list' array
har list k naam per{
  // output to screen
  likho(naam)
}
`,

// if-else
"If-Else": `// declare variable
rakho naam = "Asad"

// if else
agar (naam){
  likho("Salam, " + naam)
}
warna {
  likho("Naam khali hai")
}
`,

// function
"Function": `// function is 'kaam'
kaam salaam(naam){
	agar (naam){
    likho("Salam, " + naam)
  }
  warna {
    likho("Naam khali hai")
  }
}

// calling function
salaam("Asad")
`,

"While": `// declare a variable
rakho a = 10

// while is 'jabtak'
jabtak( a>0 ){
	likho(a)
	a--
}
`

}