import { Header } from "@/components/ui/header-with-search";
import { cn } from "@/lib/utils";

const blogs = [
	{
		id: 'blog-1',
		title: 'The Future of Web Dev',
		description: 'A quick look at upcoming web technologies.',
		category: 'Web Dev',
	},
	{
		id: 'blog-2',
		title: 'Minimalist Design Tips',
		description: 'Learn how less can often be more in UI design.',
		category: 'Design',
	},
	{
		id: 'blog-3',
		title: 'Boosting Page Speed',
		description: 'Simple tricks to make your site load faster.',
		category: 'Performance',
	},
	{
		id: 'blog-4',
		title: 'Intro to TypeScript',
		description: 'Why TypeScript makes JavaScript safer and clearer.',
		category: 'Programming',
	},
	{
		id: 'blog-5',
		title: 'Dark Mode Design',
		description: 'Best practices for building a dark theme UI.',
		category: 'Design',
	},
	{
		id: 'blog-6',
		title: 'Understanding APIs',
		description: 'Breaking down REST and GraphQL for beginners.',
		category: 'Backend',
	},
	{
		id: 'blog-7',
		title: 'CSS Grid Basics',
		description: 'A quick guide to building layouts with CSS Grid.',
		category: 'Frontend',
	},
	{
		id: 'blog-8',
		title: 'React State Management',
		description: 'Exploring useState, Redux, and other options.',
		category: 'Frontend',
	},
	{
		id: 'blog-9',
		title: 'SEO in 2025',
		description: 'Trends and tips to rank higher on Google.',
		category: 'SEO',
	},
	{
		id: 'blog-10',
		title: 'Debugging Like a Pro',
		description: 'Tools and techniques to fix bugs faster.',
		category: 'Programming',
	},
];

export default function DemoOne() {
	return (
		<div className="relative min-h-screen w-full">
			<Header data={blogs} />

			<div
				aria-hidden="true"
				className={cn(
					'absolute inset-0 -z-10 size-full',
					'bg-[radial-gradient(color-mix(in_oklab,--theme(--color-foreground/.5)30%,transparent)_2px,transparent_2px)]',
					'bg-[size:12px_12px]',
				)}
			/>
		</div>
	);
}
