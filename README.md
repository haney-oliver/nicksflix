# Skeleton Labs > Templates > Blog

This templates used SvelteKit, Tailwind, and Skeleton preconfigured along with a curated template created and implemented by the the creators of Skeleton.

## How To Install

Find installation instructions within the FAQ here: https://skeleton.dev/docs/sponsorship#premium-templates

## Theme

A custom theme is bundled with this template and enabled by default. This can be found in `theme.ts`, in the root of your project. [Learn more about customizing themes here](https://www.skeleton.dev/docs/themes).

## Static Data

Several static data files have been provided in `/src/lib/data` to populate content on your site. This includes:

- `authors.ts` - the full list of avaiable authors and their info.
- `categories.ts` - the full list of available categories.
- `social.ts` - the list of social icons and urls.

## Routes

All rountes can be found in the `/src/routes` directory. This template includes:

- `/` - the homepage of the blog.
- `/about` - a page to describe the purpose of the blog.
- `/posts/[slug]` - the unique post article page.
- `/categories/[slug]` - a filtered list of posts by category.
- `/api/posts` - SvelteKit server endpoints for fetching post data.
- `/sandbox` - a hidden sandbox page for testing theme styles.

## Markdown Blog System

The blog uses mdsvex, meaning each blog page is created using Markdown. If you're looking for a deeper understanding of how this operates, we recommend this guide by [Joy of Code](https://joyofcode.xyz/sveltekit-markdown-blog).

### Creating a Post

To create a new post, simply add a new markdown file within `/src/posts/{unique-file-name}.md`. See the `svelte-and-markdown.md` post for example of markdown styling. 

### Frontmatter

View `/src/lib/types.ts` and reference the `Post` type for a full list of frontmatter options per post. New options may be added, just make sure to update the type and apply a default value to each of your previous posts.

## Testing Sandbox

A hidden sandbox page has been provided at `/sandbox`. This allows you to quickly preview and test various Skeleton elements and components, including: typography, buttons, the color palette, and more. This route can be deleted at your own discretion.

## Optional Settings

- Sticky Header: if you wish to make the app header sticky, open `/src/routes/+layout.svelte` and set `stickyHeader` to `true`.

## Additional Assets

- Font Awesome (https://fontawesome.com/) - a library of SVG icons.
- Unsplash (https://unsplash.com/) - all images are provided by Unsplash.
- mdsvex (https://mdsvex.pngwn.io/) - provides markdown parsing for Svelte.
- Typography Plugin (https://tailwindcss.com/docs/typography-plugin) - style content you do not control directly.

## License

This template is served under the terms of the [Personal License](https://www.skeleton.dev/docs/sponsorship/licensing).