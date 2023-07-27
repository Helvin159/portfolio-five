import classNames from 'classnames/bind';
import { Container, NavigationMenu } from '../../components';
import styles from './Footer.module.scss';
import Script from 'next/script';

export default function Footer({ title, menuItems }) {
	const year = new Date().getFullYear();

	return (
		<div>
			<footer className={styles.footer}>
				<Container>
					<NavigationMenu menuItems={menuItems} />
					<p
						className={
							styles.footer__copyright
						}>{`${title} © ${year}. Powered by WordPress.`}</p>
				</Container>
			</footer>
			<Script
				src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js'
				integrity='sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz'
				crossorigin='anonymous'
			/>
		</div>
	);
}
