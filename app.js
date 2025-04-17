document.addEventListener('DOMContentLoaded', () =>{
    // const nameInputs = document.querySelectorAll('#first');
    // const emailInput = document.querySelector('#email');
    // const query = document.querySelectorAll('#select');
    // const messageInput = document.querySelector('#message');
    const allInput = document.querySelectorAll('input')
    const errorMessage = document.querySelectorAll('.error-message');
    const submitBtn = document.querySelector('.btn');


    allInput.forEach(input =>{
        input.addEventListener('click', (event) =>{
            event.preventDefault();
            console.log('i clicked an input');
        });
    });
   

    const inputFilled = () => {
        let allfilled = true



        allInput.forEach(input =>{
            if(input.value.trim() === ''){
                input.style.border = '1px solid red';
                document.getElementById('message') === '';
                document.getElementById('message').style.border = '1px solid red'
                allfilled = false
            }
          });

        if(allfilled){
            console.log('ok')
        }else{
            errorMessage.forEach(error =>{
                error.style.display = 'block'
            })
        }

        
    }








    submitBtn.addEventListener('click', (event)=>{
        event.preventDefault();
        inputFilled();
    })
});