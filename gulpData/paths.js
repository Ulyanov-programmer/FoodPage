import * as nodePath from 'path';

export const dest = nodePath.basename(nodePath.resolve())
export const source = '#src';

export const paths = {
	build: {
		html: `${dest}/`,
		css: `${dest}/css/`,
		scripts: `${dest}/scripts/`,
		scriptModules: `${dest}/scripts/modules/`,
		images: `${dest}/img/`,
		videos: `${dest}/videos/`,
		fonts: `${dest}/fonts/`,
	},
	scr: {
		html: [`${source}/**/*.html`, `!${source}/**/*.htm}`],
		css: [`${source}/styles/**/*.styl`, `!${source}/styles/**/_*.styl`, `${source}/docs/*.styl`],
		scripts: `${source}/scripts/*.{ts,js}`,
		scriptModules: `${source}/scripts/modules/*.{ts,js}`,
		images: `${source}/img/**/*.{jpg,png,svg,gif,ico,webp,avif}`,
		videos: `${dest}/videos/*.{mp4,webm}`,
		fonts: `${source}/fonts/*.{ttf,otf,woff,woff2}`,
	},
	watch: {
		html: `${source}/**/*.{html,htm}`,
		css: `${source}/styles/**/*.styl`,
		demoCss: `${source}/docs/*.styl`,
		scripts: `${source}/scripts/*.{ts,js}`,
		scriptModules: `${source}/scripts/modules/*.{ts,js}`,
		images: `${source}/img/**/*.{jpg,png,svg,gif,ico,webp,avif}`,
		videos: `${dest}/videos/*.{mp4,webm}`,
	},
	clean: `./${dest}/`,
}
export let fontsFIlePath = `${source}/styles/other/_fonts.styl`;