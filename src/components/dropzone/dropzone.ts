/*
Copyright 2018 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import { html, LitElement, property } from '@polymer/lit-element';

// @ts-ignore - css generated at build time

import dropzoneStyles from './dropzone.css.js';

export class SpectrumDropzone extends LitElement {

    @property({ type: String, reflect: true })

    public type = 'info';

    protected render() {
        return html`
            <style>
                ${dropzonetyles}
            </style>
            <div id="header"><slot name="header"></slot></div>
            <div id="content"><slot name="content"></slot></div>
        `;
    }
}

if (!customElements.get('spectrum-dropzone')) {
    customElements.define('spectrum-dropzone', SpectrumDropzone);
}
