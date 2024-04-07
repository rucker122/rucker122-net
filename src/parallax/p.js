export class Parallax{
    constructor(n, options) {
        this.initElement(n);
        this.options = options;
        console.log(options);
    }

    initElement(n) {
        if (n === undefined || n === null || n.trim() === '') {
            console.error('Can not get Element: ElementName is not given.');
            return;
        }
        this.element = document.querySelector(n);
        if (this.element === undefined) {
            console.error('Target element is undefined.');
            return;
        }
        this.startParallax();
    }

    startParallax() {
        document.addEventListener("mousemove", (e) => {
            let moveX = (e.x - window.innerWidth / 2) / 50;
            let moveY = (e.y - window.innerHeight / 2) / 50;

            // Determining it's direction
            if (this.options.moveDirection) [ moveX, moveY ] = [ -moveX, -moveY ];

            this.element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    }
}