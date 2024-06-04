import { OverlayMixin, withDropdownConfig, OverlayController } from '@lion/ui/overlays.js';
import { LitElement, html } from 'lit';

export class TestOverlay extends OverlayMixin(LitElement) {
	render() {
		return html`
			<button id="invoker">Invoker</button>
			<div id="content">content</div>
		`;
	}

	get __invokerNode() {
		return this.shadowRoot!.querySelector<HTMLElement>('#invoker');
	}

	get __contentNode() {
		return this.shadowRoot!.querySelector<HTMLElement>('#content');
	}

	_defineOverlay() {
		return new OverlayController({
			contentNode: this.__contentNode!,
			invokerNode: this.__invokerNode!,
			...withDropdownConfig(),
		});
	}
}
