Кейс «Список и детали»
Проект, использующий React Router и Redux Saga, который удовлетворяет следующим условиям:

На главной странице показывается список услуг - данные загружаются методом GET на http://localhost:7070/api/services
При переходе по ссылке (/:id/details), загружаются детали услуги - GET на http://locahost:7070/api/services/:id При загрузке должен отображаться индикатор загрузки (что на странице списка, что на странице деталей):

При ошибке - показывается сообщение об ошибке и кнопка “Повторить запрос”, при нажатии на которую осуществляется попытка снова выполнить запрос (с индикатором загрузки и т.д.):


Готовый бэкенд расположен в каталоге backend.
