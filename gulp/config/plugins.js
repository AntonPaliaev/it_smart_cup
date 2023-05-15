import replace from "gulp-replace"; //поиск и замена
import plumber from "gulp-plumber"; //обработка ошибок
import notify from "gulp-notify"; //сообщения и подсказки
import browsersync from "browser-sync"; //локальный сервер
import newer from "gulp-newer"; //проверяет, обновилась ли картинка

export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer
}

