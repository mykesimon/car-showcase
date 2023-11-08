import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { footerLinks } from '../constants/index';

const Footer = () => {
	const getCurrentYear = (): ReactNode => {
		return new Date().getFullYear();
	};

	return (
		<footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
			<div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
				<div className='flex flex-col justify-start item-start gap-6'>
					<Image
						src='/logo.svg'
						alt='car hub logo'
						width={118}
						height={18}
						className='object-contain'
					/>
					<p className='text-base text-gray-700'>
						Carhub {getCurrentYear()} <br /> All rights reserved &copy;
					</p>
				</div>

				<div className='footer__links'>
					{footerLinks.map(({ title, links }) => (
						<div
							key={title}
							className='footer__link'
						>
							<h3 className='font-bold'>{title}</h3>
							{links.map(({ title, url }) => (
								<Link
									key={title}
									href={url}
									className='text-gray-500'
								>
									{title}
								</Link>
							))}
						</div>
					))}
				</div>
			</div>

			<div className='flex justify-between sm:items-center items-start flex-wrap mt-10 border-t border-gray-100 sm:flex-row flex-col sm:px-16 px-6 py-10'>
				<p>@{getCurrentYear()} Carhub. All Rights Reserved</p>

				<div className='footer__copyrights-link'>
					<Link
						href='/'
						className='text-gray-500'
					>
						Privacy Policy
					</Link>
					<Link
						href='/'
						className='text-gray-500'
					>
						Terms of Use
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
