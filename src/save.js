/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({attributes}) {
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
			<div { ...useBlockProps.save() } className={"preconfig bl-px-3 bl-py-1.5 bl-flex bl-justify-between bl-items-center" + palette_class}> {text} </div>
	);
}
