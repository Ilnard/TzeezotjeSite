function viewModuleWin() {
    const btnView = document.querySelector('.view-module');
    const ModuleWin = document.querySelector('.module-form');

    btnView.addEventListener('click', function() {
        ModuleWin.style.display = 'block';
    })
}
viewModuleWin()
function closeModuleWin() {
    const btnCLose = document.querySelector('.module-form__close');
    const ModuleWin = document.querySelector('.module-form');

    btnCLose.addEventListener('click', function() {
        ModuleWin.style.display = 'none';
    })
}
closeModuleWin()
function viewSlideMenu() {
    const btnView = document.querySelector('.nav__burger');
    const slideMenu = document.querySelector('.slide-menu');

    btnView.addEventListener('click', function() {
        slideMenu.style.left= '0px'
    })
}
viewSlideMenu()
function closeSlideMenu() {
    const btnClose = document.querySelector('.menu-close');
    const slideMenu = document.querySelector('.slide-menu');

    btnClose.addEventListener('click', function() {
        slideMenu.style.left= '100%'
    })
}
closeSlideMenu()
function AjaxReq() {
    $(document).ready(function() {

        $('form').submit(function(event) {

            event.preventDefault()

            $.ajax({
                url: 'getData.php',
                type: 'POST',
                data: new FormData(this),
                contentType: false,
                processData: false,
                success: function(result) {
                    alert(result)
                }
            })
            a = new FormData(this)
            console.log(a)
        })
    })
}
AjaxReq()