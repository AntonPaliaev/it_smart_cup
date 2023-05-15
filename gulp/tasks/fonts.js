import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfToTtf = () => {
  //ищем файлы шрифтов .otf
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
    // .pipe(app.pluging.plumber(
    //   app.plugins.notify.onError({
    //     title: "FONTS"
    //   })
    // ))
    //конвертируем в .ttf
    .pipe(fonter({
      formats: ['ttf']
    }))
    //выгружаем в исходную папку
    .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}

export const ttfToWoff = () => {
  //ищем файлы шрифтов .ttf
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
    // .pipe(app.pluging.plumber(
    //   app.plugins.notify.onError({
    //     title: "FONTS"
    //   })
    // ))
    
    //конвертируем в .woff
    .pipe(fonter({
      formats: ['woff']
    }))
    //выгружаем в папку с результатом
    .pipe(app.gulp.dest(`${app.path.build.fonts}`))
    //ищем файлы шрифтов .ttf
    .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
    //конвертируем в .woff2
    .pipe(ttf2woff2())
    //выгружаем в папку с результатом
    .pipe(app.gulp.dest(`${app.path.build.fonts}`));
}