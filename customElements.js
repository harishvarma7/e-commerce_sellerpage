


// create custom elements


// Header

// create custom elements


// Header
class Header extends HTMLElement {
  constructor() {
    super();
  }


  connectedCallback() {
    this.innerHTML = `
    <div class="head_section">
     <nav class="navbar navbar-expand-lg navbar-light bg-light jest">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
   <a class="navbar-brand" href="#"><img src="images/akonlogo.jpg" class="headerLogo" alt=""></a>

  <div class="collapse navbar-collapse header-list" id="navbarTogglerDemo03">
    <p style="color: white;"> Home </p>
        <p style="color: white;"> About us </p>
        <p style="color: white;"> Contact us </p>
        <p style="color: white;"> Sell on AKONZON </p>
        <p class="d-flex avatar-user" > <img src="images/login.png" width="30px" height="30px"/> <span style="color: white;">Login/Signup</span> </p>

  </div>

</nav>
</div>
    `;
  }
}

customElements.define('header-component', Header);

// const menuIcon= document.querySelector('.menu');

// if(menuIcon)
// {
//   menuIcon.addEventListener('click',()=>{
//     const menuList=document.querySelector('.menu-list');
//     menuList.style.display==='none'?menuList.style.display='block':menuList.style.display='none';
//   }
//   )
