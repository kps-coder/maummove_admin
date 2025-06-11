window.addEventListener('DOMContentLoaded', function(){
  tabSelect();
  modalOpen();
});

function tabSelect() {
  let tabWrap = $('.tab'); 

  tabWrap.find('li').click(function(e){
    let idx = $(this).index();
    let parentsTab = $(this).parents('.tab');
    let tabBtnIdx = parentsTab.attr('data-tab-index');
    let tabCont = $('.tab-cont[data-tab-cont='+ tabBtnIdx +']');

    parentsTab.find('li').removeClass('on'); 
    $(this).addClass('on');      
    tabCont.find('> div').removeClass('tab-cont--open');
    tabCont.find('> div').eq(idx).addClass('tab-cont--open');
  });
}

function modalOpen() {
  let modalBtn = $('[data-modal-btn]');
  
  modalBtn.click(function(){
    let modalWrapId = $(this).attr('data-modal-btn');
    let modalWrap = $('#' + modalWrapId );
    console.log(modalWrapId);
    modalWrap.addClass('modal--open');

    $('body').attr('style', 'overflow:hidden');
  });
}

function modalClose(obj) {
  let closeBtn = $(obj);
  let modalWrap = closeBtn.parents('.modal-wrap');
  let modalId = modalWrap.attr('id');

  modalWrap.removeClass('modal--open');
  $('[data-modal-btn="'+ modalId +'"]').focus();
  $('body').removeAttr('style');
}