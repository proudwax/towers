import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const minSize = 0,
            maxSize = 100,
            minWeight = 500,
            maxWeight = 1300;

        const towers = [
            { id: 1, now: Date.now(), title: 'Уровень карналита в силосной башне №1', indicator: { id: '1', title: 'Indicator 1', minValue: minSize, maxValue: maxSize, value: this.generateRandom(minSize, maxSize) }, weight: this.generateRandom(minWeight, maxWeight) },
            { id: 2, now: Date.now(), title: 'Уровень карналита в силосной башне №2', indicator: { id: '2', title: 'Indicator 2', minValue: minSize, maxValue: maxSize, value: this.generateRandom(minSize, maxSize) }, weight: this.generateRandom(minWeight, maxWeight) },
            { id: 3, now: Date.now(), title: 'Уровень карналита в силосной башне №3', indicator: { id: '3', title: 'Indicator 3', minValue: minSize, maxValue: maxSize, value: this.generateRandom(minSize, maxSize) }, weight: this.generateRandom(minWeight, maxWeight) },
            { id: 4, now: Date.now(), title: 'Уровень карналита в силосной башне №4', indicator: { id: '4', title: 'Indicator 4', minValue: minSize, maxValue: maxSize, value: this.generateRandom(minSize, maxSize) }, weight: this.generateRandom(minWeight, maxWeight) },
            { id: 5, now: Date.now(), title: 'Уровень карналита в силосной башне №5', indicator: { id: '5', title: 'Indicator 5', minValue: minSize, maxValue: maxSize, value: this.generateRandom(minSize, maxSize) }, weight: this.generateRandom(minWeight, maxWeight) },
            { id: 6, now: Date.now(), title: 'Уровень карналита в силосной башне №6', indicator: { id: '6', title: 'Indicator 6', minValue: minSize, maxValue: maxSize, value: this.generateRandom(minSize, maxSize) }, weight: this.generateRandom(minWeight, maxWeight) },
            { id: 7, now: Date.now(), title: 'Уровень карналита в силосной башне №7', indicator: { id: '7', title: 'Indicator 7', minValue: minSize, maxValue: maxSize, value: this.generateRandom(minSize, maxSize) }, weight: this.generateRandom(minWeight, maxWeight) },
            { id: 8, now: Date.now(), title: 'Уровень карналита в силосной башне №8', indicator: { id: '8', title: 'Indicator 8', minValue: minSize, maxValue: maxSize, value: this.generateRandom(minSize, maxSize) }, weight: this.generateRandom(minWeight, maxWeight) }
        ];

        return { towers };
    }

    generateRandom(min: number, max: number) {
        return Math.floor(Math.random() * (max + 1 - min)) + min;
    }
}