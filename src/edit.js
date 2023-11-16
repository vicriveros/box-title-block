/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

import { Panel, PanelBody, TextControl, SelectControl  } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({attributes, setAttributes}) {
	let palette_class, url_class, text ;
	switch(attributes.color) {
		case 'blue':
			palette_class = ' bl-bg-sky-800 !bl-text-white ';
			url_class = ' !bl-text-white ';
			break;
		case 'green':
			palette_class = ' bl-bg-green-800 !bl-text-white ';
			url_class = '!bl-text-white';
			break;
		case 'border_green':
			palette_class = ' !bl-border-2 !bl-border-green-800 bl-text-green-800 ';
			url_class = '!bl-text-green-800';
			break;
		case 'border_blue':
			palette_class = ' !bl-border-2 !bl-border-sky-800 bl-text-sky-800 ';
			url_class = '!bl-text-sky-800';
			break;
		default:
			palette_class = ' bl-bg-sky-800 !bl-text-white ';
			url_class = ' !bl-text-white ';
	}

	if(attributes.url == ''){
		text = <span className={"preconfig bl-grow bl-text-center bl-text-xl bl-font-medium bl-no-underline"}> {attributes.title} </span>
	}else{
		text = <a className={"preconfig bl-grow bl-text-center bl-text-xl bl-font-medium bl-no-underline hover:bl-underline " + url_class} href={attributes.url} > {attributes.title} </a>
	}

	return (
		<div { ...useBlockProps() }> 
			<InspectorControls key="setting">
				<Panel>
					<PanelBody title='Box Title Block' initialOpen={true}>
						<TextControl 
							className="blocks-base-control__input"
							label={"Title"}
							value={attributes.title}
							onChange={(val) => setAttributes({title: val})}
						/>
						<SelectControl
							label="Color"
							value={attributes.color}
							options={ [
								{ label: 'Blue', value: 'blue' },
								{ label: 'Green', value: 'green' },
								{ label: 'Border green', value: 'border_green' },
								{ label: 'Border blue', value: 'border_blue' },
							] }
							onChange={(val) => setAttributes({color: val})}
						/>
						<TextControl 
							className="blocks-base-control__input"
							label={"URL"}
							value={attributes.url}
							onChange={(val) => setAttributes({url: val})}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>

			<div className={"preconfig bl-px-3 bl-py-1.5 bl-flex bl-justify-between bl-items-center" + palette_class}> {text} </div> 
		</div>
	);
}
