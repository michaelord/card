import {Img} from 'components/media';
import {Heading, LinkItem, Tag} from 'components/editable';
import * as Utils from 'components/libs';
import * as Types from 'components/types';
import React, {memo} from 'react';
import './CardV2.scss';

type LinkGroup = LinkItem | Array<LinkItem>;

type CardProps = {
	title?: Types.Text;
	image?: Types.Image;
	theme?: Types.Theme;
	href?: Types.Url;
	cta?: LinkGroup;
	accent?: Types.Accent;
};

export const CardV2 = memo((props: CardProps) => {
	const base: string = 'cardv2';

	const {
		title = '[Lorem ipsum dolor sit amet consectetur.]',
		image = {src: '//via.placeholder.com/600'},
		href = '#',
		cta = {href: '#btn', label: '[Call to Action]', priority: 'secondary'},
		theme = 'default',
		accent,
	} = props;

	const atts = {
		className: Utils.getModifiers(base, {}),
		'data-theme': theme,
		'data-accent': accent,
		href,
	};

	const Component = href ? 'a' : 'div';

	return (
		<Component {...atts}>
			<div className={`${base}__body`}>
				{image && (
					<figure className={`${base}__media`}>
						<Img {...image} />
					</figure>
				)}
				<div className={`${base}__main`}>
					<header className={`${base}__header`}>
						<Tag label="[Category]" />
						<Heading priority={3} className={`${base}__title`} title={title} />
					</header>
				</div>
			</div>
		</Component>
	);
});
