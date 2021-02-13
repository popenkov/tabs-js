    function tabModule (button, btnContainer, tab) {

    //нужно найти кнопки, блок контента и блок c кнопками
    let tabButton = document.querySelectorAll(button),
        buttonsContainer = document.querySelector(btnContainer),
        tabContent = document.querySelectorAll(tab);

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
    buttonsContainer.addEventListener('click', function (evt) {
        let target = evt.target;
        if(target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i<tabButton.length; i++) {
                if (target == tabButton[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }


    })

    }

    
    tabModule('.info-header-tab', '.info-header', '.info-tabcontent');
