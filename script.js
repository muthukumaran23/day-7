//a.Get all the countries from the Asia continent /region using the Filter function

//Step-1:Create an XHR Object  
     
var request1 = new XMLHttpRequest();

//Step-2:Initiate a request
  
       request1.open("GET","https://restcountries.com/v2/all");

//Step-3:Sending the request
  
       request1.send();

//Step-4:Once the data successfully load from the server

       request1.onload = function () {
 
      var res= JSON.parse(request1.response);
     
      
      var result=res.filter((ele)=>ele.region=="Asia")//map((ele)=>ele.name)
       console.log(result);
      
   }
   
//b.Get all the countries with a population of less than 2 lakhs using Filter function
//Step-1:Create an XHR Object  
     
       var request1 = new XMLHttpRequest();

//Step-2:Initiate a request
  
       request1.open("GET","https://restcountries.com/v2/all");

//Step-3:Sending the request
  
       request1.send();

//Step-4:Once the data successfully load from the server

       request1.onload = function () {
 
      var res1= JSON.parse(request1.response);
      
      
      var result1=res1.filter((ele)=>ele.population< 200000)
       console.log(result1);
      
   }
  
//c.Print the following details name, capital, flag using forEach function
   //Step-1:Create an XHR Object  
     
          var request1 = new XMLHttpRequest();

   //Step-2:Initiate a request
     
          request1.open("GET","https://restcountries.com/v2/all");
   
   //Step-3:Sending the request
     
          request1.send();
   
   //Step-4:Once the data successfully load from the server
   
          request1.onload = function () {
    
         var res2= JSON.parse(request1.response);
        
         
         var result2=res2.forEach(element => {
            console.log(element.name)
            console.log(element.capital)
            console.log(element.flag)
         });
         
         }

//d.Print the total population of countries using reduce function
// //Step-1:Create an XHR Object  
     
       var request1 = new XMLHttpRequest();

//Step-2:Initiate a request
  
       request1.open("GET","https://restcountries.com/v2/all");

//Step-3:Sending the request
  
       request1.send();

//Step-4:Once the data successfully load from the server

       request1.onload = function () {
 
      var res3= JSON.parse(request1.response);
      
      var result3=res3.reduce((acc,cv)=> acc+cv.population,0)
      console.log(result3);
      }

      
//E.Print the country which uses US Dollars as currency
//Step-1:Create an XHR Object  
     
       var request1 = new XMLHttpRequest();

//Step-2:Initiate a request
  
       request1.open("GET","https://restcountries.com/v2/all");

//Step-3:Sending the request
  
       request1.send();

//Step-4:Once the data successfully load from the server

       request1.onload = function () {
 
      var res4= JSON.parse(request1.response);
     
         res4.filter((ele)=>{
              for(let key in ele.currencies){
              
               if(ele.currencies[key].code=="USD"){
             
              console.log(ele.name)
                     }
              }
         })
       }
           