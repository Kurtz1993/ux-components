export class CardController {
    public title: string;
    public height: string;
    public hasFooter: boolean;
    public canFlip: boolean;
    public isLoading: boolean;
    public isFlipped: boolean = false;
    public onSaveSettings: Function;

    constructor() {
        this.title = this.title || 'Card Title';
    }

    public toggleFlip(): void {
        this.isFlipped = !this.isFlipped;
        this._checkCardHeightIsValid();
    }

    public saveSettings(): void {
        try {
            this.onSaveSettings();
        } catch (e) {
            alert('ERROR: Cards that can flip must define the onSaveSettings property with a valid function!');
        } finally {
            this.toggleFlip();
        }
    }

    private _checkCardHeightIsValid(): void {
        if (parseInt(this.height) < 1) {
            this.height = '1';
        } else if (parseInt(this.height) > 4) {
            this.height = '4';
        }
    }
}