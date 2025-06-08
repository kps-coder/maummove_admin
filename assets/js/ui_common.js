window.addEventListener('DOMContentLoaded', function(){
  tabSelect();
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

