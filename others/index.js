// make product items and render on Page
// nonsense JSX
const ProductHTML=(props)=>(`
 <img src="${props}" />
 <div id="tag-like">
    <span class="tag">Top</span>
    <span><i class="bi bi-heart-fill"></i></span>
 </div>
 <div class="container">
    <div class="row">
      <div class="col-9">
      <h6>Product Name, <small>Russia</small></h6>

      </div>
      <div class="col-2">
      <span>4.5⭐</span>
      </div>
    <div>
    <div class="row">
    <div class="col-12">
    <p style="font-size:12px;">Designed by David Chipperfield</p>
    </div>
    </div>
</div>
 <div class="price-tag">
    <div>
    <span style="text-decoration: line-through;">$1000</span>
    <span>$1500</span>
    <span id="deduce-perc">
        -20%
    </span>
    </div>
    <span><i class="bi bi-plus-circle-fill" style="font-size: large;"></i></span>
 </div>
`)

const CategoryHTML=(props)=>(`

    <div class="category-item-banner">

    </div>
    <div class="shop-btn-wrapper">
 <button type="button" style="background-color:white" class="btn btn-sm shop-btn">SHOP</button>
 </div>

    `)

// package product items and render on Page
const ProductList=()=>{
     // select dom node
         const productItems=document.querySelector('.product-list');

            // create product item

    Array(5).fill().map((_,i)=>{
        // create a div
           const productItem=ProductHTML("https://source.unsplash.com/random/200x200?sig="+i);
        const div=document.createElement('div');
        // add class product-item
        div.classList.add('product-item');
        // add html to div
        div.innerHTML=productItem;
            // append product item to dom node
            productItems.appendChild(div);

    })
}

const NewProductList=()=>{
    // select dom node
        const productItems=document.querySelector('.new-product-list');
        // create product item

    Array(5).fill().map((_,i)=>{
        // create a div
           const productItem=ProductHTML("https://i.pravatar.cc/300?img="+i);

        const div=document.createElement('div');
        // add class product-item
        div.classList.add('product-item');
        // add html to div
        div.innerHTML=productItem;
            // append product item to dom node
            productItems.appendChild(div);
    })
}

const CategoryList=()=>{
    // select dom node class category-container
        const categoryContainer=document.querySelector('#category-container');
        // create product items
        Array(8).fill().map((_,i)=>{
            const categoryItem=CategoryHTML();
            const div=document.createElement('div');
            div.classList.add('category-item');
            div.style.backgroundImage="url('https://source.unsplash.com/random/200x200?sig="+i+"')";
            div.innerHTML=categoryItem;
            categoryContainer.appendChild(div);
             // create new div
            const div2=document.createElement('div');
            div2.appendChild(div);
            // append category lable to div
            div2.innerHTML+=`<h6 class="text-center mt-2 text-uppercase">Category ${i+1}</h6>`;
            categoryContainer.appendChild(div2);

        })
    }



// call functions
ProductList();
NewProductList();
CategoryList();
