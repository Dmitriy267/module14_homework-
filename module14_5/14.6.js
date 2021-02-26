const myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let num=Math.floor(Math.random()*101);
       console.log(num);            
   if(num%2==0){
       resolve({
           message:`Завершено успешно. Сгенерированное число — ${num}`
       });
       
   }else{
       reject({
          message:`Завершено с ошибкой. Сгенерированное число — ${num}`  
       });
   } 
    },3000);
});
     myPromise   
     .then((result)=>{
         console.log(result.message);
        
     })
      .catch((error) => {
      console.log(error.message);
        
    });
              
  


