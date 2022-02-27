const popup = document.querySelector('.popup');
        const close = document.querySelector('.close');

        window.onload = function(){
            setTimeout(function(){
                popup.style.display = "block"; //lo bloqueamos para que no salga al principio del tirón

                //Add some time delay to show popup  
            }, 150000)
        }

        close.addEventListener('click', () => {
            popup.style.display = "none";
        })