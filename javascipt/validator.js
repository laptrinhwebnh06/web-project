function button({
    title ='',
    message = '',
    type = '',
    duration = 3000,
    }){
        const main = document.getElementById('button');
        if (main) {
            const button = document.createElement('div');

            // const autoremove =  setTimeout(function(){
            //     main.removeChild(button);
            // },duration +1000);

            button.onclick = function(e) {
                if (e.target.closest('.button__close')) {
                    main.removeChild(button);
                    clearTimeout(autoremove);
                }
            }
            const icons = {
                sucess : 'fa-solid fa-check',
                error : 'fa-solid fa-xmark',
            };
            const icon = icons[type];
            const delay = (duration / 1000 ).toFixed(2);
            button.classList.add('button', `button--${type}`);
            button.style.animation = `slidein ease 0.3s, fadeOut linear 1s ${delay}s forwards`;
            button.innerHTML = `
                <div class="button__icon">
                <i class="${icon}"></i>
                </div>
                <div class="button__body">
                    <h3 class="button__body--title">
                        ${title}
                    </h3>
                    <p class="button__body--mess">
                        ${message}
                    </p>
                </div>
                <div class="button__close">
                    <i class="fa-regular fa-circle-xmark"></i>
                </div>`;
            main.appendChild(button);
           
        }
    }

function showSucessButton() {
button({
    title: 'sucess',
    message: 'Cool, well done! my boy',
    type:'sucess',
    duration: 3000
    });
}

function showErrorButton() {
button({
    title: 'error',
    message: 'Try again, dont give up',
    type:'error',
    duration: 3000
    });
}