   const btn=document.querySelector('.btn');
             const mydiv=document.querySelector('.mydiv');
            
         
                btn.addEventListener('click',() =>{
                    const inputNums = document.querySelector('.inputNums').value;
    const inputLimit = document.querySelector('.inputLimit').value;
                    
             if (inputNums < 1 || inputNums > 10 || isNaN(inputNums)) {
        mydiv.textContent = 'Номер страницы вне диапазона от 1 до 10';
    } else if (inputLimit < 1 || inputLimit > 10 || isNaN(inputLimit)) {
        mydiv.textContent = 'Лимит вне диапазона от 1 до 10';
    } else if ((inputNums < 1 || inputNums > 10) || isNaN(inputNums) && (inputLimit < 1 || inputLimit > 10) || isNaN(inputLimit)) {
        mydiv.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
                }else {
        fetch(`https://picsum.photos/v2/list?page=${inputNums}&limit=${inputLimit}`)
        .then((response) => {
           
    
            const result = response.json();

            return result;
        });
                
                    .then((data) => {
            if (data.length !== 0) {
                console.log(data); 
                mydiv.textContent = '';
                data.forEach(item => {
                    let resultValue = `
                    <div>
                        <div class="result-img">Автор картинки: ${item.author}</div>
                        <a class="result-link" target="_blank" href="${item.download_url}">${item.download_url}</a>
                    </div>
                    `;
                    mydiv.innerHTML += resultValue;
                });
            } 
        })
        .catch(() => {
            console.log('error');
        })
    }
                });