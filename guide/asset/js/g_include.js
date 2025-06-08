window.addEventListener('load', function() {
  
    // guide gnb include
    const guideGnb = document.querySelector('.g-gnb-wrap');

    guideGnb.outerHTML = `
    <nav class="g-gnb-wrap">
      <div class="gnb-container">
        <div class="gnb-head"></div>
        <ul>
          <li><a href="../index.html">HTML List</a></li>
          <li><a href="guide.html">UI/UX Guide</a>
            <ul>
              <li class="active"><a href="guide.html"><i class="fas fa-minus-circle"></i>  Guide</a></li>
              <li><a href="component.html"><i class="fas fa-minus-circle"></i>  Component</a></li>
              <li><a href="button.html"><i class="fas fa-minus-circle"></i> Button</a></li>
              <li><a href="form.html"><i class="fas fa-minus-circle"></i> Form</a></li>
              <li><a href="modal.html"><i class="fas fa-minus-circle"></i> Modal</a></li>
            </ul>
          </li>
        </ul>
        <div class="gnb-close"><button type="button"><i class="fas fa-times"></i></button></div>
      </div>
    </nav>`;

    gnbControlGuide(); // gnb
});


