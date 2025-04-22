document.addEventListener('DOMContentLoaded', () => {
    const allInputs = document.querySelectorAll('input');
    const text = document.querySelector('#message');
    const errorMessages = document.querySelectorAll('.error-message');
    const submitBtn = document.querySelector('.btn');
    const radioOptions = document.querySelectorAll('.radio-option');
    const radioImgs = document.querySelectorAll('.radio-mark');
    const consentBox = document.querySelector('.nawa');
    const checkmarkImg = document.querySelector('#checkmark');
    let consentGiven = false;
    let selectedRadioIndex = null;

    


    const activateFirstVisibleError = () => {
        errorMessages.forEach(err => err.classList.remove('active'));
        const firstVisibleError = Array.from(errorMessages).find(err => err.style.display === 'block');
        if (firstVisibleError) {
            firstVisibleError.classList.add('active');
        }
    };

    allInputs.forEach((input, index) => {
        input.addEventListener('input', (event) => {
            event.preventDefault();
            errorMessages[index].style.display = 'none';
            input.style.border = '1px solid var(--Green-600)';
        });
    });

    text.addEventListener('input', () => {
        errorMessages[4].style.display = 'none';
        text.style.border = '1px solid var(--Green-600)';
    });

    radioOptions.forEach((radio, index) => {
        radio.addEventListener('click', () => {
            radioOptions.forEach((r, i) => {
                r.classList.remove('active');
                radioImgs[i].style.display = 'none';
            });
    
            radio.classList.add('active');
            radioImgs[index].style.display = 'flex';
            selectedRadioIndex = index;
            errorMessages[3].style.display = 'none';
            console.log(errorMessages);
        });
    });
    
    

    consentBox.addEventListener('click', () => {
        consentGiven = !consentGiven;

        if (consentGiven) {
            consentBox.classList.add('active');
            checkmarkImg.style.display = 'flex';
            errorMessages[5].style.display = 'none'; 
        } else {
            consentBox.classList.remove('active');
            checkmarkImg.style.display = 'none';
        }
    });

    const validateInputs = () => {
        let allFilled = true;

        allInputs.forEach((input, index) => {
            if (input.value.trim() === '') {
                input.style.border = '1px solid red';
                errorMessages[index].style.display = 'block';
                allFilled = false;
            }
        });

        if (text.value.trim() === '') {
            text.style.border = '1px solid red';
            errorMessages[4].style.display = 'block';
            allFilled = false;
        }

        const radioChecked = Array.from(radioOptions).some(r => r.classList.contains('active'));
        if (!radioChecked) {
            errorMessages[3].style.display = 'block';
            allFilled = false;
        }

        if (!consentGiven) {
            errorMessages[5].style.display = 'block';
            allFilled = false;
        }

        if (selectedRadioIndex === null) {
            errorMessages[3].style.display = 'block';
            allFilled = false;
        }        

        if (allFilled) {
            console.log('Form successfully validated');
        } else {
            activateFirstVisibleError();
        }
    };

    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();
        validateInputs();
    });
    
});



