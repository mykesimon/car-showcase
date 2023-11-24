'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import { SearchButton, SearchManufacturer } from './';
import Image from 'next/image';

const SearchBar = () => {
	const [manufacturer, setManufacturer] = useState('');
	const [model, setModel] = useState('');
	const router = useRouter();

	const updateSearchParams = (model: string, manufacturer: string) => {
		const searchParams = new URLSearchParams(window.location.search);

		searchParams.delete('limit');

		if (model) {
			searchParams.set('model', model);
		} else {
			searchParams.delete('model');
		}

		if (manufacturer) {
			searchParams.set('manufacturer', manufacturer);
		} else {
			searchParams.delete('manufacturer');
		}

		const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

		router.push(newPathName, { scroll: false });
	};

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (manufacturer === '' && model === '') {
			return alert('Please fill in the search bar');
		}

		updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
	};

	return (
		<form
			onSubmit={handleSearch}
			className='searchbar'
		>
			<div className='searchbar__item'>
				<SearchManufacturer
					manufacturer={manufacturer}
					setManufacturer={setManufacturer}
				/>
				<SearchButton otherClasses='sm:hidden' />
			</div>
			<div className='searchbar__item'>
				<Image
					src='/model-icon.png'
					alt='car model'
					width={25}
					height={25}
					className='absolute w-[20px] h-[20px] ml-4'
				/>
				<input
					type='text'
					name='model'
					value={model}
					onChange={e => setModel(e.target.value)}
					placeholder='Tiguan'
					className='searchbar__input'
				/>
				<SearchButton otherClasses='sm:hidden' />
			</div>
			<SearchButton otherClasses='max-sm:hidden' />
		</form>
	);
};

export default SearchBar;
