import {CtaGroup} from 'components/content';
import {Heading, LinkItem, Media, MediaProps, RichText} from 'components/editable';
import {getModifiers} from 'components/libs';
import * as Types from 'components/types';
import React, {memo} from 'react';
import './Card.scss';

type LinkGroup = LinkItem | Array<LinkItem>;

export type CardProps = {
	children?: Types.Children;
	theme?: Types.Theme;
	media?: MediaProps;
	title?: Types.Text;
	content?: string;
	href?: Types.Url;
	cta?: LinkGroup;
	accent?: Types.Accent;
	className?: Types.ClassName;
};

export const Card = memo((props: CardProps) => {
	const base: string = 'card';

	const {children, theme = 'default', media, title, content, href, cta, accent, className} = props;

	const atts: object = {
		className: getModifiers(base, {}) + (className ? ` ${className}` : ''),
		'data-theme': theme,
		'data-accent': accent,
	};

	return (
		<div {...atts}>
			{media && <Media {...media} />}
			<div className={`${base}__main`}>
				<Heading title={title} href={href} className={`${base}__title`} />
				<RichText content={content} />
				{children && children}
				<CtaGroup items={cta} />
			</div>
		</div>
	);
});
