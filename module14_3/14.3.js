   function useRequest(url,callback){
               let xhr=new XMLHttpRequest();
                  xhr.open('GET',url,true);
                xhr.onload=function(){
                if(xhr.status!=200){
            console.log('Статус ответа:',xhr.status);
        }else{
            const result=JSON.parse(xhr.response);
            if(callback){
                callback(result);
            }    
        }
            };
                xhr.onerror=function(){
        console.log('Ошибка! Статус ответа:', xhr.status);
    };
    xhr.send();
};   
const resultNode=document.querySelector('.j-result');
            const btnNode=document.querySelector('#btn');
              const value = document.querySelector('#getYear').value;
            
            function displayResult(apiData){
              
       let getTable='';
                    
             apiData.forEach(item => {
                 if(item.year==value){
   const tablBlock = `<table>
<tr>
<th>1 кв.</th>
<th>2 кв.</th>
<th>3 кв.</th>
<th>4 кв.</th>
</tr>
<tr>
<td>${item.sales.q1}</td>
<td>${item.sales.q2}</td>
<td>${item.sales.q3}</td>
<td>${item.sales.q4}</td>
</tr>
</table>`;
getTable=getTable+tablBlock;
                 }
});
                resultNode.innerHTML = getTable;
            }
 
            btnNode.addEventListener('click', () => {
  useRequest('https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440', displayResult);
})