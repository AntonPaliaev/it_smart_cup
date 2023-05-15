import svgSprite from "gulp-svg-sprite";

export const svgsprite = () => {
  return app.gulp.src(`${app.path.src.svgicons}`, {})
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: "SVG"
    })
  ))
  .pipe(svgSprite({
    mode: {
      stack: {
        sprite: `../icons/icons.svg`,
        //создать страницу с перечнем иконок
        example: true
      }
    },
  }))
  .pipe(app.gulp.dest(`${app.path.build.images}`))
}