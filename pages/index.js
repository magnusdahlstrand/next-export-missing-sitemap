import React from 'react';
import Link from 'next/link';

const Homepage = () => {
	return (
		<main>
			<h1>Homepage</h1>
			<p>See the <Link href="/about">about page</Link></p>
		</main>
	);
};

export default Homepage;
