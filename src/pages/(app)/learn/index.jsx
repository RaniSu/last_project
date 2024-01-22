export const Component = () => {
	const pages = [
		{
			title: 'Java Basics Tutorial',
			href: 'https://www.w3schools.com/java/',
		},
        {
            title: 'React Basics Tutorial',
			href: 'https://www.w3schools.com/React/',
        },
        {
            title: 'JavaScript Basics Tutorial',
			href: 'https://www.w3schools.com/JavaScript/',
        },
        {
            title: 'C# Basics Tutorial',
			href: 'https://www.w3schools.com/cs/index.php',
        },
		{
			title: 'CSS Basics Tutorial',
			href: 'https://www.w3schools.com/css/',
		},
		{
			title: 'Html Basics Tutorial',
			href: 'https://www.w3schools.com/html/',
		},
		{
			title: 'python Basics Tutorial',
			href: 'https://www.w3schools.com/python/',
		},
	]
	return (
		<div>
			<h1 className="text-2xl font-bold">Learn</h1>
			<ul className="mt-8 space-y-4 list-disc pl-8">
				{pages.map((page, index) => (
					<li key={index}>
						<a href={page.href} className="text-lg hover:text-blue-500 hover:underline">
							{page.title}
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}