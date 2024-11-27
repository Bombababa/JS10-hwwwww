//1

const button = document.getElementById('helloButton');

        
        button.addEventListener('click', () => {
            alert('Hello World!');
        });

//2
        const randomNumber = Math.floor(Math.random() * 100) + 1;

   
        const checkButton = document.getElementById('checkButton');
        const userInput = document.getElementById('userInput');
        const message = document.getElementById('message');
    
       
        checkButton.addEventListener('click', () => {
            const userGuess = parseInt(userInput.value);
    
            if (userGuess === randomNumber) {
                message.textContent = 'молодец братишка поздравляю!';
            } else if (userGuess < randomNumber) {
                message.textContent = 'маленьке! знову';
            } else if (userGuess > randomNumber) {
                message.textContent = 'велике! знову';
            } else {
                message.textContent = 'не пон че єто';
            }
    
            
            userInput.value = '';
        });

//3
        let count = 0;

  
    const clickCountDisplay = document.getElementById('clickCount');

   
    document.body.addEventListener('click', () => {
        count++; 
        clickCountDisplay.textContent = count; 
    });


    //4
    function transformArray(arr, callback) {
        const result = []; 

       
        for (let i = 0; i < arr.length; i++) {
            result.push(callback(arr[i])); 
        }

        return result; 
    }

   
    const numbers = [1, 2, 3, 4, 5];

   
    function double(num) {
        return num * 2;
    }

   
    const doubledNumbers = transformArray(numbers, double);

    
    console.log('Original array:', numbers);
    console.log('Doubled array:', doubledNumbers);


//5
    const calculateDiscountPrice = (price, discount, callback) => {
      
        const discountAmount = (price * discount) / 100;
        
        const discountedPrice = price - discountAmount;

       
        callback(discountedPrice, discountAmount);
    };

   
    const displayDiscountResult = (discountedPrice, discountAmount) => {
        console.log(`Original Price: ${price}`);
        console.log(`Discount Amount: ${discountAmount}`);
        console.log(`Discounted Price: ${discountedPrice}`);
    };

    
    const price = 1000; 
    const discount = 20; 

    
    calculateDiscountPrice(price, discount, displayDiscountResult);