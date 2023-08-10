import { useState } from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import {
	Container,
	NavigationMenu,
	SkipNavigationLink,
} from '../../components';

import styles from './Header.module.scss';
import { gql, useQuery } from '@apollo/client';

export default function Header({
	title = 'Headless by WP Engine',
	description,
	menuItems,
}) {
	const [isNavShown, setIsNavShown] = useState(false);

	const { data } = useQuery(gql`
		query NewQuery {
			user(id: "dXNlcjox") {
				socialMedia {
					facebook
					github
					linkedin
					instagram
				}
				userId
			}
		}
	`);	

	console.log(data, 'header data');
	console.log(data, 'header data - from userEnvVariable Branch');
	return (
		<header className={styles.header}>
			<div className='row'>
				<div className='col-3'>
					<div className={styles.header__logo}>
						<Link href='/'>
							<a>{title}</a>
						</Link>
						{description && <p>{description}</p>}
					</div>
				</div>
				<div className='col-5'>
					<div className={styles.header__social}>
						<ul>
							<li>
								<a href={data?.user.socialMedia.github} target='_blank'>
									GH
								</a>
							</li>
							<li>
								<a href={data?.user.socialMedia.instagram} target='_blank'>
									ig
								</a>
							</li>
							<li>
								<a href={data?.user.socialMedia.linkedin} target='_blank'>
									IN
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className='col-4'>
					<NavigationMenu
						className={`${isNavShown ? 'd-block' : 'd-none'}`}
						menuItems={menuItems}
					/>
				</div>
				<button
					className='d-md-none'
					type='button'
					onClick={() => setIsNavShown(!isNavShown)}
					aria-label='Toggle navigation'
					aria-expanded={isNavShown}>
					☰
				</button>
			</div>
		</header>
	);
}
