const config = {
	siteTitle: 'Tecmie', // Site title.
	siteTitleShort: 'Tecmie', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
	siteTitleAlt: 'Tecmie - The Product Design Company', // Alternative site title for SEO.
	siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
	siteUrl: 'https://tecmie.com', // Domain of your website without pathPrefix.
	pathPrefix: '', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
	siteDescription: 'A Product Design and Development Company for Startups and Entrepreneurs.', // Website description used for RSS feeds/meta description tag.
	siteRss: '/rss.xml', // Path to the RSS file.
	siteFBAppID: '', // FB Application ID for using app insights
	googleAnalyticsID: 'UA-52368657-1', // GA tracking ID.
	disqusShortname: '', // Disqus shortname.
	postDefaultCategoryID: 'Tech', // Default category for posts.
	dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
	dateFormat: 'DD/MM/YYYY', // Date format for display.
	userName: 'Super Admin', // Username to display in the author segment.
	userEmail: 'editor@tecmie.com', // Email used for RSS feed's author segment
	userTwitter: 'tecmie', // Optionally renders "Follow Me" in the UserInfo segment.
	userLocation: 'Lagos, Nigeria', // User location to display in the author segment.
	userAvatar: 'https://avatars0.githubusercontent.com/u/8960757', // User avatar to display in the author segment.
	userDescription:
		'I am Andrew, a Full-stack Software Engineer with a solid background in Mobile and Web Domains, Agile and SCRUM Project Master, Software Architect, Design Creative and Founder of @Tecmie, a platforms solution architect for small and enterprise organizations including Education, Business, Retail and Government.', // User description to display in the author segment.
	// Links to social profiles/projects you want to display in the author segment/navigation bar.
	userLinks: [
		{
			label: 'GitHub',
			url: 'https://github.com/koolamusic',
			iconClassName: 'fa fa-github'
		},
		{
			label: 'Twitter',
			url: 'https://twitter.com/koolamusic',
			iconClassName: 'fa fa-twitter'
		},
		{
			label: 'Email',
			url: 'mailto:editor@tecmie.com',
			iconClassName: 'fa fa-envelope'
		}
	],
	copyright: 'Copyright © 2019. Tecmie LLC', // Copyright string for the footer of the website and RSS feed.
	themeColor: '#011627', // Used for setting manifest and progress theme colors.
	backgroundColor: '#e0e0e0' // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
	config.pathPrefix = '';
} else {
	// Make sure pathPrefix only contains the first forward slash
	config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`;

module.exports = config;
