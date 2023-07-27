import { useState } from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import {
	Container,
	NavigationMenu,
	SkipNavigationLink,
} from '../../components';

import styles from './Header.module.scss';

export default function Header({
	title = 'Headless by WP Engine',
	description,
	menuItems,
}) {
	const [isNavShown, setIsNavShown] = useState(false);

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
							<li>FB</li>
							<li>TW</li>
							<li>IN</li>
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
