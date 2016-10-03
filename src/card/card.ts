import './card.scss';
import {CardController} from './card-controller';
let template = require('./card.html');

let directiveDefinition = (): ng.IDirective => {
    return {
        restrict: 'E',
        bindToController: true,
        controller: CardController,
        controllerAs: '$ctrl',
        template: template,
        transclude: {
            'front': 'cardFront',
            'back': '?cardBack',
            'footer': '?cardFooter'
        },
        scope: {
            title: '@cardTitle',
            height: '@cardHeight',
            hasFooter: '@?',
            canFlip: '@?',
            onSaveSettings: '&?',
            isLoading: '='
        }
    }
};

let card = angular.module('ux.components.card', [])
    .directive('card', directiveDefinition);

export {card};