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
								{ label: 'Blue', value: ' bl-bg-sky-800 !bl-text-white ' },
								{ label: 'Green', value: ' bl-bg-green-800 !bl-text-white ' },
								{ label: 'Border green', value: ' !bl-border-2 !bl-border-green-800 bl-text-green-800 ' },
								{ label: 'Border blue', value: ' !bl-border-2 !bl-border-sky-800 bl-text-sky-800 ' },
							] }
							onChange={(val) => setAttributes({color: val})}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>

			<div className={"preconfig bl-px-3 bl-py-1.5 bl-flex bl-justify-between bl-items-center" + attributes.color}> <span className={"shortcode bl-grow bl-text-center bl-text-xl bl-font-medium bl-no-underline"}> {attributes.title} </span> </div> 
		</div>
	);
}
