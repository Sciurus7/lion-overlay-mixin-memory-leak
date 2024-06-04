import { TestOverlay } from './overlay-component.js';

customElements.define('test-overlay', TestOverlay);

const checkbox = El<HTMLInputElement>('input', { type: 'checkbox' });

document.body.append(El('div', { style: { display: 'flex', flexDirection: 'column'} }, [
	El('label', {}, [checkbox, 'Enable ds-combobox']),
]));

let instance: Element | undefined;

checkbox.addEventListener('change', () => {
	if (instance) {
		instance.remove();
		instance = undefined;
	}

	if (checkbox.checked) {
		instance = El('div', {}, [El('test-overlay')]);
		document.body.append(instance);
	}
});

function El<El extends HTMLElement = HTMLElement>(
		tagname: string,
		{ style, ...rest }: { style?: Partial<CSSStyleDeclaration>, [k: string]: unknown } = {},
		children: Array<Element | string> = [],
	): El {
	const element = document.createElement(tagname);
	Object.assign(element.style, style);
	Object.assign(element, rest);
	element.append(...children);
	return element as El;
}
