export function videos() {
	return gulp.src(paths.scr.videos)
		.pipe(gulp.dest(paths.build.videos));
}