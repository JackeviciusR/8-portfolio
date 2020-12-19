class Testimonials {
    constructor(params) {
        this.selector = params.selector || 'body';
        this.data = params.data || [];
        this.isArrowControlsVisible = params.isArrowControlsVisible || false;
        this.isDotControlsVisible = params.isDotControlsVisible || true;
        this.maxItems = params.maxItems || 5;
        this.cloneCount = params.cloneCount || 2;
        this.visibilityStrategy = params.visibilityStrategy || 'random';

        this.DOM = null;
        this.listDOM = null;
        this.controlsDOM = null;
        this.dotsDOMs = null;
        this.arrowsDOMs = null;
        this.activeDotIndex = 0;

        this.init();
    }

    init() {
        // TODO: input (params) validation
        // TODO: blogiems reikia priskirti default reiksmes

        if (!this.isValidSelector()) {
            return;
        }
        this.render();
        this.addEvents();
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            return false;
        }
        this.DOM = DOM;
        return true;
    }

    isValidTestimonial(testimonial) {
        return true;
    }

    generateStars(rating) {
        const maxStars = 5;
        let HTML = '<i class="fa fa-star"></i>'.repeat(rating);
        HTML += '<i class="fa fa-star-o"></i>'.repeat(maxStars - rating);

        return HTML;
    }

    generateItems() {
        let HTML = '';

        // perskaiciuojame vieno item'o ploti
        const itemWidth = 100 / (this.data.length + 2 * this.cloneCount);
        // pridedame klonus is abieju pusiu
        const dataCopy = [this.data[this.data.length-2], this.data[this.data.length-1],...this.data, this.data[0], this.data[1]];

        for (let testimonial of dataCopy) {
            if (!this.isValidTestimonial(testimonial)) {
                console.log(`items ${num}`);
                continue;
            }

            console.log(testimonial);

            HTML += `<div class="item" style="width: ${itemWidth}%;">
                        <img class="avatar" src="./img/testimonials/avatar-2.png" alt="${testimonial.name} testimonial image">
                        <div class="name">${testimonial.name}</div>
                        <div class="location">${testimonial.location}</div>
                        <div class="stars">
                            ${this.generateStars(testimonial.rating)}
                        </div>
                        <p class="description">${testimonial.comment}</p>
                    </div>`;
        }
        return HTML;
    }

    generateControls() {
        let HTML = '';

        if (!this.isArrowControlsVisible && !this.isDotControlsVisible) {
            return HTML;
        }

        const testimonialsCount = this.data.length;
        let dotsHTML = '<div class="dot active"></div>';
        dotsHTML += '<div class="dot"></div>'.repeat(testimonialsCount - 1);

        HTML = `<div class="controls">
                    ${this.isArrowControlsVisible ? '<i class="fa fa-angle-left"></i>' : ''}
                    ${this.isDotControlsVisible ? dotsHTML : ''}
                    ${this.isArrowControlsVisible ? '<i class="fa fa-angle-right"></i>' : ''}
                </div>`;

        return HTML;
    }


    render() {

        //  perskaiciuojamas visas list'o ilgis, nes pridejome klonu
        // 100 - vieno item'o plotis px
        const listWidth = 100 * (this.data.length + 2 * this.cloneCount);

        // pirma nuotrauka laikoma tikra, ne klonuota, todel list pastumiamas taip, kad klonai butu kaireje ir matytusi pirma nuotrauka po klonu
        const HTML = `<div class="testimonial">
                        <div class="view"> 
                            <div class="list" style="width: ${listWidth}%; margin-left: -${this.cloneCount}00%;">
                                ${this.generateItems()}
                            </div>
                        </div>
                        ${this.generateControls()}
                    </div>`;

        this.DOM.innerHTML = HTML;

        this.listDOM = this.DOM.querySelector('.list');

        if (this.isArrowControlsVisible || this.isDotControlsVisible) {
            this.controlsDOM = this.DOM.querySelector('.controls');

            if (this.isArrowControlsVisible) {
                this.arrowsDOMs = this.controlsDOM.querySelectorAll('.fa');
            }

            if (this.isDotControlsVisible) {
                this.dotsDOMs = this.controlsDOM.querySelectorAll('.dot');
            }
        }
    }



    clickDot(dotIndex) {

        const dot = this.dotsDOMs[dotIndex];

        this.listDOM.style.marginLeft = -100 * (dotIndex + this.cloneCount) + '%';

        this.dotsDOMs[this.activeDotIndex].classList.remove('active');
        this.activeDotIndex = dotIndex;

        dot.classList.add('active');
    }



    addEvents() {

        if (this.isDotControlsVisible) {

            for (let i = 0; i < this.dotsDOMs.length; i++) {
                const dot = this.dotsDOMs[i];

                dot.addEventListener('click', () => {
                    this.clickDot(i);
                });
            }
        }


       if (this.isArrowControlsVisible) {

            this.arrowsDOMs[0].addEventListener('click', () => {
                let dotIndex = this.activeDotIndex - 1;
                if (dotIndex === -1) {
                    dotIndex = this.data.length - 1;
                }
                this.clickDot(dotIndex);
            });

            this.arrowsDOMs[1]. addEventListener('click', () => {
                let dotIndex = this.activeDotIndex + 1;
                if (dotIndex === this.dotsDOMs.length) {
                    dotIndex = 0;
                }
                this.clickDot(dotIndex);
            });



       }


    }



}

export { Testimonials }