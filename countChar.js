function countChar(a, b){
  var recup1 = a;
  var recup2 = b;
  var taille = a.length;
  var n = 0;
  var nbre = 0;
  while( n < taille){
     if(a[n] === b)
        nbre = nbre + 1;
   n++;
  }
 return "we get : " + nbre + "" + recup2 + " " + "in" + "" + recup1;
}
 countChar("kakkerlak", "k");
 
