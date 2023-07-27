import React from 'react';
import { Heading } from '../../components';
import styles from './Hero.module.scss';

export default function Hero({ title, level = 'h2', children }) {
	return (
		<div>
			<div className={styles.hero}>
				<div className={`${styles.hero__content} row`}>
					<div className='col-3'>
						<Heading level={level}>
							<span>{title}</span>
						</Heading>
					</div>
					<div className='col-9'>
						<div className='row'>
							<div className='col-6'>{/* Image goes here */}</div>
							<div className='col-6'>
								<div className='pt-5'>
									<Heading level='h1'>
										Breathing in the aroma <br /> of creativity.
									</Heading>
									<p>
										Ham followed now ecstatic use speaking excercise may
										repeated. Himself he evident oh greatly my on inhabit
										general concern.
									</p>
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
