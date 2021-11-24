export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].sellIn = this.items[i].sellIn - 1;
            if (this.items[i].name === 'Sulfuras') {
                continue;
            }
            if (this.items[i].name === 'Aged Brie') {
                this.items[i].quality = this.items[i].quality < 50 ? this.items[i].quality + 1: this.items[i].quality;
                continue;
            }
            if (this.items[i].name === 'Backstage passes') {
                if(this.items[i].sellIn > 5 && this.items[i].sellIn < 11) {
                    this.items[i].quality = this.items[i].quality + 2;
                }
                if(this.items[i].sellIn  <= 5) {
                    this.items[i].quality = this.items[i].quality + 3;
                }
                continue;
            }
            if (this.items[i].name === 'Conjured'){
                if(this.items[i].quality > 0) {
                    this.items[i].quality = this.items[i].quality >= 2? this.items[i].quality - 2 : this.items[i].quality - 1;
                }
                continue;
            }
            if(this.items[i].quality > 0){
                if( this.items[i].sellIn < 0){
                    this.items[i].quality = this.items[i].quality >= 2? this.items[i].quality - 2 : this.items[i].quality - 1;
                }
                else {
                    this.items[i].quality = this.items[i].quality - 1;
                }
            }
        }

        return this.items;
    }
}