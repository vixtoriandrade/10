class LogoGenerator {
    constructor() {
        this.text = "";
        this.textColor = "";
        this.shape = "";
        this.shapeColor = "";
    }

    generateSVG() {
        return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                ${this.generateShape()}
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>
        `;
    }

    generateShape() {
        switch (this.shape) {
            case 'circle':
                return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
            case 'triangle':
                return `<polygon points="150,20 70,180 230,180" fill="${this.shapeColor}" />`;
            case 'square':
                return `<rect x="70" y="20" width="160" height="160" fill="${this.shapeColor}" />`;
            default:
                return '';
        }
    }
}

function generateLogo() {
    const generator = new LogoGenerator();
    generator.text = document.getElementById('text').value;
    generator.textColor = document.getElementById('textColor').value;
    generator.shape = document.getElementById('shape').value;
    generator.shapeColor = document.getElementById('shapeColor').value;

    const logoSVG = generator.generateSVG();

    const logoContainer = document.getElementById('logoContainer');
    logoContainer.innerHTML = logoSVG;
    console.log("Generated logo.svg");
}
