// to set max num for quantity line-22
// to change img src for illustration line 52
let q = document.querySelector('div.choose-quantity');
let all = q.getElementsByTagName('*');
document.querySelectorAll('.catag').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelector('.catag.active').classList.remove('active');
        this.classList.add('active');
    });
});

all[1].innerHTML = +all[1].innerHTML.trim()


Array.from(all).forEach((x, index) => {
    x.addEventListener('click', () => {
        console.log(all[1].innerHTML)
        if (all[index].classList[0] == 'minus' && all[1].innerHTML != 1) {
            all[1].innerHTML = `${Number(all[1].innerHTML) - 1}`

            
        } else if (x.classList[0] == 'plus' && all[1].innerHTML != 9) {
            all[1].innerHTML = `${Number(all[1].innerHTML) + 1}`
        }
    })
})
let illustration = `
        <div class = "full-ill" id = "last-full">
        <div class="exit" id = "last-exit">
          <div class="exit-space"></div>
          <div class="exit-symbol">X</div>
        </div>
            
        <img src = '../assets/bobby-flint-blueprint-william-302-zanotta-removebg-preview.png'/>

        </div>
    
    `

const see = document.querySelector('div.see-illustration');
const body = document.body;

see.addEventListener("click", () => {
    const illustration = document.createElement('div');
    illustration.className = 'full-ill';
    illustration.id = 'last-full';
    illustration.innerHTML = `
                <div class="exit" id="last-exit">
                    <div class="exit-space"></div>
                    <div class="exit-symbol">X</div>
                </div>
                <img src='../assets/bobby-flint-blueprint-william-302-zanotta-removebg-preview.png' alt='Illustration'/>
            `;

    body.appendChild(illustration);

    illustration.querySelector('#last-exit').addEventListener('click', () => {
        illustration.remove();
    });
});

