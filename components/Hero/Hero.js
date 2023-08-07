import React from 'react';
import { Heading } from '../../components';
import styles from './Hero.module.scss';
import Image from 'next/image';

import HeroImg from '../../assets/Helvin_profile_bw.svg';

export default function Hero({
	title,
	subTitle,
	level = 'h2',
	children,
	description,
}) {
	return (
		<div>
			<div className={styles.hero}>
				<div className={`${styles.hero__content} row`}>
					<div className={`${styles.hero__content__subtitle} col-3`}>
						<Heading level={level}>
							<span>{subTitle}</span>
						</Heading>
					</div>
					<div className='col-9'>
						<div className='row'>
							<div className='col-6 p-0'>
								<Image src={HeroImg} alt={'Hero ImG'} />
							</div>
							<div className='col-6'>
								<div className='pt-5'>
									<Heading level='h1'>{title}</Heading>
									<p>{description}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{children}
		</div>
	);
}
