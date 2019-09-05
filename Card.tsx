import * as React from 'react';

import './Card.scss';

import {getModifiers} from 'components/libs';

import {Media, MediaProps, Heading, RichText, Link, LinkItem} from 'components/editable';
import {Theme} from 'components/types';
type CardProps = {
	children?: React.ReactNode;
	theme?: Theme;
	media?: MediaProps;
	title?: string;
	content?: string;
	href?: string | null;
	cta?: LinkItem | Array<LinkItem>;
};

export const Card = (props: CardProps) => {
	const base: string = 'card';

	const {children, theme = 'default', media, title, content, href, cta} = props;

	const atts: object = {
		className: getModifiers(base, {}),
		'data-theme': theme,
	};

	return (
		<div {...atts}>
			{media && <Media {...media} />}
			<div className={`${base}__main`}>
				<Heading title={title} href={href} />
				<RichText content={content} />
				{children}

				{cta && (
					<div>
						{Array.isArray(cta) ? (
							<div className="link-group">
								{cta.map((link, index) => (
									<Link priority="secondary" {...link} isWide key={`link-${index}`} />
								))}
							</div>
						) : (
							<Link priority="secondary" {...cta} isWide />
						)}
					</div>
				)}
			</div>
		</div>
	);
};
