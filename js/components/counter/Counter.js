class Counter {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;

        this.DOM = null;
        this.countersDOMs = null;

        this.animationDuration = 3;
        this.animationFPS = 30;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }

        this.render();
        this.addEvents();

        // rodytu, jei langas atsidarytu tiesiai ant COUNTER sekcijos ir neskrolintume
        this.shouldCounterAnimationRun();
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if(!DOM) {
            return false
        }

        this.DOM = DOM;
        return true;
    }


    render() {
        let HTML = '';

        for(let item of this.data) {
            HTML += `<div class="counter col-3 col-sm-6 col-xs-12">
                        <div class="number">0${item.number}${item.type}</div>
                        <div class="label">${item.label}</div>
                    </div>`;
        }

        this.DOM.innerHTML = HTML;
        this.countersDOMs = this.DOM.querySelectorAll('.counter');
    }


    counterAnimation(counterIndex) {

        const targetNumber = this.data[counterIndex].number;
        const totalTickCount = this.animationFPS * this.animationDuration;
        const numberDOM = this.countersDOMs[counterIndex].querySelector('.number');
        let count = 0;
        let tick = 0;

        const timer = setInterval(() => {
            count = Math.floor(tick / totalTickCount * targetNumber);
            tick++;

            numberDOM.innerText = count + this.data[counterIndex].type;


            if (targetNumber === count) {
                clearInterval(timer);
            }
        }, 1000 / this.animationFPS);
    }


    shouldCounterAnimationRun() {
        const windowBottom = scrollY + innerHeight;
        let counterBottom = 0;

        for (let i = 0; i < this.countersDOMs.length; i++) {
            if (this.data[i].animated) {
                continue;
            }

            const counter = this.countersDOMs[i];
                       // pacio elemento aukstis + kokiame aukstyje elementas yras
            counterBottom = counter.clientHeight + counter.offsetTop;

            if (counterBottom < windowBottom) {
                // priskiriame nauja objekto kintamaji animated su reiksme true
                this.data[i].animated = true;
                this.counterAnimation(i);
            }
        }
    }



    addEvents() {
        console.log('countersDOMs: ', this.countersDOMs);

        // su bind nurodome, kad funkcija imama ne is scroll'o ('this') objekto, bet
        // is 'this' objekto, kuriame viskas ir yra aprasya (t.y Counter objekto);
        addEventListener('scroll', this.shouldCounterAnimationRun.bind(this));
    }

}

export { Counter }