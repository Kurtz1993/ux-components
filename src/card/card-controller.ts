export default class CardController {
    public title: string;
    public height: string;
    public hasFooter: boolean;
    public canFlip: boolean;
    public isFlipped: boolean = false;

    constructor(){
        this.title = this.title || 'Card Title';
    }

    public toggleFlip(): void {
        this.isFlipped = !this.isFlipped;
    }
}