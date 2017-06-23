var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var FoodSearchPipe = (function () {
    function FoodSearchPipe() {
    }
    FoodSearchPipe.prototype.transform = function (items, field, value) {
        if (!items) {
            return [];
        }
        if (!value) {
            return items;
        }
        return items.filter(function (item) { return item[field].match(new RegExp(value, 'i')); });
    };
    return FoodSearchPipe;
}());
FoodSearchPipe = __decorate([
    Pipe({
        name: 'foodSearch'
    })
], FoodSearchPipe);
export { FoodSearchPipe };
//# sourceMappingURL=../../app/food-search.pipe.js.map