/* ТАБЫ - это способ организации информации. 
Например у нас есть много статей, а надо чтобы на странице показывалась одна, а по клику ну другую рубрику, другая статья. это и есть табы. 
*/




// любой проект начинается с обработчика определенного события на всю страницу.
//Например. тяжелый сайт, все еще не загрузилось, а скрипт уже начинает работать и выдает ошибку
//DOMContentLoaded
//этим я говорю, что джс будет выполнятся только после загрузки структуры дом дерева. Картинки могут дальше грузится потом, нам это не важно.
window.addEventListener('DOMContentLoaded', function () {
    //здесь будет весь код страницы
    'use strict';

    //нужно найти кнопки, блок контента и блок c кнопками
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent (a) {
        for (let i = a; i< tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    //скрываем все табы, кроме первого
    hideTabContent(1);

    //показ определенного таба
    function showTabContent (b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    //обработчик клика
    info.addEventListener('click', function (evt) {
        let target = evt.target;
        if(target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i<tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }


    })
}