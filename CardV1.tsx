import {Heading, LinkItem, Tag} from 'components/editable';
import * as Utils from 'components/libs';
import * as Types from 'components/types';
import React, {memo} from 'react';
import './CardV1.scss';

type LinkGroup = LinkItem | Array<LinkItem>;

type CardProps = {
	title?: Types.Text;
	image?: Types.Image;
	theme?: Types.Theme;
	href?: Types.Url;
	cta?: LinkGroup;
	accent?: Types.Accent;
};

export const CardV1 = memo((props: CardProps) => {
	const base: string = 'cardv1';

	const {
		title = '[Lorem ipsum dolor sit amet consectetur.]',
		image = {src: Utils.Placeholder.imageObj(300, 300).src},
		href = '#',
		cta = {href: '#btn', label: '[Call to Action]', priority: 'secondary'},
		theme = 'default',
		accent,
	} = props;

	const atts = {
		className: Utils.getModifiers(base, {}),
		'data-theme': theme,
		'data-accent': accent,
		style: {
			backgroundImage: image ? `url(${image.src})` : undefined,
		},
		href,
	};

	const Component = href ? 'a' : 'div';

	return (
		<Component {...atts}>
			<div className={`${base}__body`}>
				<header className={`${base}__header`}>
					<Tag label="[Category]" />
					<Heading priority={3} className={`${base}__title`} title={title} />
				</header>
				<footer className={`${base}__footer`}>[CTA]</footer>
			</div>
		</Component>
	);
});
