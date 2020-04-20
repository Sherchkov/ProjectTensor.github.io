"use strict";

require.config({
	baseUrl: 'js',
	paths: {

		// плагины для require
		text: 'libs/requirejs/text',
		css: 'libs/requirejs/native-css',

		app: 'app',
		component: 'component',
		modal: 'component/modal',
		base: 'component/base',
		page: 'component/page',
		server: 'server',
	}
});

/**
 * Абстрактная фабрика для удобного создания контролов
 */
class AbstractFactory {
    create(component, options) {
        return new component(options || {});
    }
}
const factory = new AbstractFactory();
let modal;

require(["app/main"]);	