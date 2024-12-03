document.addEventListener('DOMContentLoaded' , () =>{

let plans = {
    '9' : 'Arcade' ,
    '90' : 'Arcade' ,
    '12' : 'Advanced' ,
    '120' : 'Advanced' ,
    '15' : 'Pro' ,
    '150' : 'pro'   
   }
   let obj = {
       'plan' : {},
       'add-ons' : {}
   }
   
   let sum = 0;
   
   let addOnsPricesMon = ['1' , '2' , '2'] ;
   let addOnsPricesAn = [ '10' , '20' , '20'] ;
   
   
   
   
   let page1 = document.getElementById('page-1') ;
   let goBack1 = document.getElementById('go-back-btn-1');
   let page2 = document.getElementById('page-2') ;
   goBack1.addEventListener('click', (e) => {
       e.preventDefault();
       page1.classList.remove('hidden')
       page2.classList.add('hidden') ;
       btns.classList.add('hidden') ;
       section1.classList.add('bg-new-blue' , 'text-black')
       section1.classList.add('text-white') ;
       section2.classList.remove( 'bg-new-blue' , 'text-black'); 
       section2.classList.add( 'text-white');
   
   })
   let labels = document.getElementsByClassName('plan-label') ;
   let inputs = document.getElementsByClassName('plan-input');
   let nextBtn = document.getElementById('next-btn-2');
   let error = document.getElementById('plan-error')
   let page3 = document.getElementById('page-3') ;
   let addOnInputs = document.getElementsByClassName('add-on-inputs') ;
   let addOnContainers = document.getElementsByClassName( 'add-on-input-containers') ;
   let addOnPrice1 = document.getElementById('add-on-price-1') ;
   let btns = document.getElementById('page-2-btns') ;
   let addOnPrice2 = document.getElementById('add-on-price-2') ;
   let addOnPrice3 = document.getElementById('add-on-price-3') ;
   let nextBtn2 = document.getElementById('page-3-btns') ;
   let goBack2 = document.getElementById('go-back-btn-2') ;
   
   goBack2.addEventListener( 'click' , (e) => {
       e.preventDefault() ;
       section3.classList.add('text-white') ;
       section3.classList.remove('bg-new-blue' , 'text-black')
       section2.classList.add('bg-new-blue' , 'text-black') ;
       section2.classList.remove('text-white') ;
       page3.classList.add('hidden') ;
       btns.classList.remove('hidden')
       page2.classList.remove('hidden') ;
   })
   nextBtn.addEventListener('click', (e) => {
       e.preventDefault();
       let count = 0;
       for (let i = 0; i < inputs.length; i++) {
           if (inputs[i].checked) {
               count++;
           }
       }
       if (count != 0) {
           error.classList.add('hidden');
           section2.classList.add( 'text-white') ;
           section2.classList.remove('bg-new-blue' , 'text-black') ;
           section3.classList.remove('text-white') ;
           section3.classList.add( 'text-black' , 'bg-new-blue') ;
           page2.classList.add('hidden') ;
           btns.classList.add('hidden') ;
           for( let j = 0 ; j < inputs.length ; j++  ) {
               if( inputs[ j ].checked ) {
                   obj['plan'][inputs[ j ].dataset.pack ] = inputs[ j ].dataset.val ;
               }
           }
           page3.classList.remove('hidden');
           nextBtn2.classList.remove('hidden')
       }
       else {
           error.classList.remove('hidden');
       }
   })
   let form = document.getElementById('plan-form') ;
   
   for( let i = 0 ; i < inputs.length ; i++ ) {
       inputs[ i ].addEventListener( 'change' , (e) => {
            for( let j = 0 ; j <inputs.length ; j++ ) {
               if( j != i && inputs[ j ].checked ) {
                   inputs[ j ].checked = false ;
                   labels[ j ].classList.remove('border-green-700');
                   labels[ j ].classList.remove('bg-new-blue')
                   obj['plan'] = {};
               }
            } 
   
           if( inputs[ i ].checked ) {
               labels[ i ].classList.add( 'border-green-700')
               labels[ i ].classList.add('bg-new-blue');
               error.classList.add('hidden') ;
           }
           else{
               labels[ i ].classList.remove('border-green-700');
               labels[ i ].classList.remove('bg-new-blue')
           }
       })
   }
   let input = document.getElementsByClassName('first-input') ;
   let submitBtn = document.querySelector('#next-btn') ;
   let free = document.getElementsByClassName('free-para') ;
   
   for( let i = 0 ; i<input.length ; i++ ){
       input[ i ].addEventListener( 'change' , () =>{
           input[ i ].classList.remove('outline-red-600') ;
           input[ i ].classList.add('focus:outline-purple-600') ;
           let error = document.getElementById( input[ i ].dataset.error ) ;
           error.classList.add('hidden') ;
       })
   }
   submitBtn.addEventListener( 'click' , (e) =>{
       e.preventDefault()
       let count = 0 ;
       for( let i = 0 ; i< input.length ; i++){
           if( input[i].value.length == 0 ){
               input[ i ].classList.add('outline-red-600') ;
               input[ i ].classList.remove('focus:outline-purple-600') ;
               let error = document.getElementById( input[ i ].dataset.error ) ;
               error.classList.remove('hidden') ;
               count++;
           }
           else if(input[ i ].dataset.name == 'email'){
               let alpha = 0 ;
               let a = 0 ;
               let after = 0 ;
               let domain = false ;
               for (let j = 0 ; j < input[ i ].value.length ; j++ ){
                   if( input[ i ].value[ j ] == '@'){
                       a++;
                   }
                   else if( input[ i ].value[ j ] != '@' && a == 0 ) {
                   if( input[ i ].value[ j ] >= 'a' && input[ i ].value[ j ] <= 'z') {
                           alpha++;
                       }
                   }
   
                   else{
                       let temp = input[ i ].value.slice(j) ;
                       if( temp.includes('.com') ){
                           domain = true ;
                       }
                       if( temp.length != '.com'.length ){
                           after = 1 ;
                       }
                       break; 
                   }
               }
               if( alpha == 0 ){
                 document.getElementById(input[ i ].dataset.error).innerHTML = "Add alphabets before @" ;
                 input[ i ].classList.add('outline-red-600') ;
                 input[ i ].classList.remove('focus:outline-purple-600') ;
                 let error = document.getElementById( input[ i ].dataset.error ) ;
                 error.classList.remove('hidden') ;
                 count++;
               }
   
               if( a == 0 ){
                   document.getElementById(input[ i ].dataset.error).innerHTML = "Add @" ;
                   input[ i ].classList.add('outline-red-600') ;
                   input[ i ].classList.remove('focus:outline-purple-600') ;
                   let error = document.getElementById( input[ i ].dataset.error ) ;
                   error.classList.remove('hidden') ;
                   count++; 
                   break ;
               }
               if( !after || !domain ){
                 if( after == false ) {
                 document.getElementById(input[ i ].dataset.error).innerHTML = "Add gmail" ;
                 input[ i ].classList.add('outline-red-600') ;
                 input[ i ].classList.remove('focus:outline-purple-600') ;
                 let error = document.getElementById( input[ i ].dataset.error ) ;
                 error.classList.remove('hidden') ;
                 count++;
                 break ;
                 }
                 if( domain == false ) {
                   document.getElementById(input[ i ].dataset.error).innerHTML = "Add domain" ;
                   input[ i ].classList.add('outline-red-600') ;
                   input[ i ].classList.remove('focus:outline-purple-600') ;
                   let error = document.getElementById( input[ i ].dataset.error ) ;
                   error.classList.remove('hidden') ;
                   count++;
                   break;
                 }
   
               }
            }
           else if( input[ i ].dataset.name == "number"){
            if( input[ i ].value.length != 10 ) {
               document.getElementById(input[ i ].dataset.error).innerHTML = "Enetr a valid mobile number" ;
               input[ i ].classList.add('outline-red-600') ;
               input[ i ].classList.remove('focus:outline-purple-600') ;
               let error = document.getElementById( input[ i ].dataset.error ) ;
               error.classList.remove('hidden') ;
               count++;
               break;
            }
            else{
            let b = false ;
               for( let j of input[ i ].value ){
                   if( j < '0' || j > '9' ){
                       b = true ;
                       break;  
                   } 
               }
               if( b ) {
                   document.getElementById(input[ i ].dataset.error).innerHTML = "Enetr a valid mobile number" ;
                   input[ i ].classList.add('outline-red-600') ;
                   input[ i ].classList.remove('focus:outline-purple-600') ;
                   let error = document.getElementById( input[ i ].dataset.error ) ;
                   error.classList.remove('hidden') ;
                   count++;
                   break ;
               }
               else{
               input[ i ].classList.remove('outline-red-600') ;
               input[ i ].classList.add('focus:outline-purple-600') ;
               let error = document.getElementById( input[ i ].dataset.error ) ;
               error.classList.add('hidden') ;
               count = 0 ;
               }
            }
           }
    
           else{ 
               input[ i ].classList.remove('outline-red-600') ;
               input[ i ].classList.add('focus:outline-purple-600') ;
               let error = document.getElementById( input[ i ].dataset.error ) ;
               error.classList.add('hidden') ;
           }
       }
       console.log( count ) ;
       if( count == 0 ) {
           form.parentElement.classList.remove('hidden') ;
           page1.classList.add('hidden');
           btns.classList.remove('hidden');
          section1.classList.remove('bg-new-blue' , 'text-black')
          section1.classList.add( 'text-white') 
          section2.classList.add( 'bg-new-blue' , 'text-black')
       }
   })
   
   let toggleContainer = document.getElementById('toggle-container') ;
   let toggleBtn = document.getElementById('toggle-btn') ;
   let state = true ;
   let monthly = document.getElementById('monthly-title') ;
   let yearly = document.getElementById('yearly-title') ;
   let price1 = document.getElementById('price-1') ;
   let price2 = document.getElementById('price-2') ;
   let price3 = document.getElementById('price-3') ;
   let arcade = document.getElementById('arcade');
   let advanced = document.getElementById('advanced');
   let pro = document.getElementById('pro');
   let section1 = document.getElementById('section-1' ) ;
   let section2 = document.getElementById('section-2' ) ;
   let section3 = document.getElementById('section-3' ) ;
   let section4 = document.getElementById('section-4' ) ;
   toggleContainer.addEventListener( 'click' , () =>{
    if( state ) {
         obj['plan'] = {} ;
         toggleBtn.classList.remove('left-[2px]' ) ;
         toggleBtn.classList.add( 'left-[41px]' ,'transition-all' , 'ease-in-out' , 'duration-500');
         state = false ;
         monthly.classList.remove('text-custom-blue-2' ) ;
         monthly.classList.add('text-gray-500') ;
         yearly.classList.add( 'text-custom-blue-2') ;
         for( let i = 0 ; i < free.length ; i++ ){
           free[ i ].classList.remove('hidden') ;
         }
         price1.innerHTML = '$90/yr';
         price2.innerHTML = '$120/yr';
         price3.innerHTML = '$150/yr';
         arcade.dataset.val = '90';
         advanced.dataset.val = '120';
         pro.dataset.val = '150';
         arcade.dataset.pack = 'yearly';
         advanced.dataset.pack = 'yearly';
         pro.dataset.pack = 'yearly';
         addOnPrice1.innerHTML = '+$10/yr';
         addOnPrice2.innerHTML = '+$20/yr';
         addOnPrice3.innerHTML = '+$20/yr';
         for( let i = 0 ;i < addOnInputs.length ; i++) {
           addOnInputs[ i ].dataset.val = addOnsPricesAn[ i ] ;
           if( addOnInputs[ i ].checked ){
               obj['add-ons'][addOnInputs[ i ].dataset.title] = addOnInputs[ i ].dataset.val  ;
           }
           else{
               addOnContainers[ i ].classList.remove('border-blue-700')
               delete obj['add-ons'][addOnInputs[ i ].dataset.title]; 
           }
         }
    }
    else{
       obj['plan'] = {} ;
       toggleBtn.classList.remove('left-[41px]' ) ;
       toggleBtn.classList.add( 'left-[2px]' ,'transition-all' , 'ease-in-out' , 'duration-500');
       state = true ;
       yearly.classList.remove('text-custom-blue-2' ) ;
       yearly.classList.add('text-gray-500') ;
       monthly.classList.add( 'text-custom-blue-2') ;
       for( let i = 0 ; i < free.length ; i++ ){
           free[ i ].classList.add('hidden') ;
         }
         price1.innerHTML = '$9/mo';
         price2.innerHTML = '$12/mo';
         price3.innerHTML = '$15/mo';
         arcade.dataset.val = '9';
         advanced.dataset.val = '12';
         pro.dataset.val = '15';
         arcade.dataset.pack = 'monthly';
         advanced.dataset.pack = 'monthly';
         pro.dataset.pack = 'monthly';
         addOnPrice1.innerHTML = '+$1/ymo';
         addOnPrice2.innerHTML = '+$2/mo';
         addOnPrice3.innerHTML = '+$2/mo';
         for( let i = 0 ;i < addOnInputs.length ; i++) {
           addOnInputs[ i ].dataset.val = addOnsPricesMon[ i ] ;
           if( addOnInputs[ i ].checked ){
               obj['add-ons'][addOnInputs[ i ].dataset.title] = addOnInputs[ i ].dataset.val  ;
           }
           else{
               addOnContainers[ i ].classList.remove('border-blue-700')
               delete obj['add-ons'][addOnInputs[ i ].dataset.title]; 
           }
         }
   
    }
   })
   
   
   for( let i = 0 ;  i < addOnInputs.length ; i++ ) {
      addOnInputs[ i ].addEventListener( 'change' , () => {
       if( addOnInputs[ i ].checked ) {
           addOnContainers[ i ].classList.add('border-blue-700')
           obj['add-ons'][addOnInputs[ i ].dataset.title] = addOnInputs[ i ].dataset.val  ;
          }
       else{
           addOnContainers[ i ].classList.remove('border-blue-700')
           delete obj['add-ons'][addOnInputs[ i ].dataset.title];  
          } 
      })
       
   }
   
   let planName = document.getElementById('plan-name' ) ;
   let change = document.getElementById('change') ;
   let finalPrice = document.getElementById('final-price' ) ;
   let nextBtn3 = document.getElementById('next-btn-3') ;
   let page4 = document.getElementById('page-4');
   let btns4 = document.getElementById('page-4-btns') ;
   let planDuration = "" ;
   let totalpricetitle = document.getElementById('total-price-title')
   let totalprice = document.getElementById('total-price-price') ;
   nextBtn3.addEventListener( 'click' , (e) => {
   e.preventDefault() ;
   section3.classList.remove('text-black' , 'bg-new-blue') ;
   section4.classList.add('text-black' , 'bg-new-blue') ;
   section4.classList.remove('text-white');
   page3.classList.add('hidden') ;
   section3.classList.add('text-white') ;
   page4.classList.remove('hidden');
   btns4.classList.remove('hidden') ;
   page3.classList.add('hidden') ;
   for( let i in obj['plan']) {
       sum = 0 ;
       sum += Number(obj['plan'][ i ] ) ;
       if( i == 'monthly' ) {
           planDuration = 'monthly' ;
           planName.innerHTML = plans[ obj['plan'][ i ]] + ' ' + '(Monthly)';
           finalPrice.innerHTML= '$' + obj['plan'][i] + '/mo'
       }
       else{
           planDuration = "yearly"
           planName.innerHTML = plans[ obj['plan'][ i ]] + ' ' + '(Yearly)' ;
           finalPrice.innerHTML = '$' + obj['plan'][i] + '/yr'
       }
   
   }
   let finalContainer = document.getElementById('final-container-inner') ;
   finalContainer.innerHTML ="" ;
   for( let i in obj['add-ons'] ) {
       let newdiv = document.createElement('div') ;
       newdiv.classList.add('flex' , 'justify-between' , 'mt-6' , 'font-bold' ) 
       let addon = document.createElement('p') ;
       addon.classList.add('font-bold' , 'text-gray-400' , 'text-sm')
       addon.innerHTML = i ;
       let price = document.createElement('p') ;
       sum += Number(obj['add-ons'][ i ]);
       if( planDuration == 'monthly') {
         price.innerHTML = '+' + '$' + obj[ 'add-ons'][ i ] + '/mo' ;
       }
       else{
           price.innerHTML = '+' + '$' + obj[ 'add-ons'][ i ] + '/yr' ;
       }
       price.classList.add( 'text-gray-500' , 'text-sm')
       newdiv.appendChild( addon ) ;
       newdiv.appendChild( price );
       finalContainer.appendChild( newdiv )
   
   }
   
   if( planDuration == 'monthly') {
       totalpricetitle.innerHTML = "Total (per month)" ;
       totalprice.innerHTML = '$' + sum + '/' + 'mo'
   }
   else{
       totalpricetitle.innerHTML = "Total (per year)" ;
       totalprice.innerHTML = '$' + sum + '/' + 'yr'
   }
    
   
    })
   
   change.addEventListener('click' , (e) => {
   e.preventDefault() ;
   page4.classList.add('hidden') ;
   page2.classList.remove('hidden') ;
   btns.classList.remove('hidden') ;
   btns4.classList.add('hidden') ;
   section4.classList.add('text-white') ;
   section4.classList.remove('text-black' , 'bg-new-blue') ;
   section2.classList.remove('text-white') ;
   section2.classList.add('bg-new-blue' , 'text-black') ;
   })
   
   
   let page5 = document.getElementById('page-5') ;
   let nextBtn4 = document.getElementById('next-btn-4') ;
   
   nextBtn4.addEventListener('click' , (e) => {
   e.preventDefault() ;
   page4.classList.add('hidden') ;
   page5.classList.remove('hidden') ;
   })
   
   let goBack3 = document.getElementById('go-back-btn-3') ;
   goBack3.addEventListener('click' , (e) => {
       page3.classList.remove('hidden') ;
       page4.classList.add('hidden') ;
       section3.classList.add('bg-new-blue');
       section3.classList.remove('text-white') ;
       section4.classList.add('text-white') ;
       section4.classList.remove('bg-new-blue' , 'text-black') ; 
   
   })
   
   let containers = [false , false , false ] ;
   for( let i = 0 ; i < addOnContainers.length ; i++ ) {
       addOnContainers[ i ].addEventListener( 'click' , () => {
           if( containers[ i ] ) {
              document.getElementById(addOnContainers[ i ].dataset.input).checked = false ;
               containers[ i ] = false ; 
               addOnContainers[ i ].classList.remove('border-blue-800') ;
              delete obj[ 'add-ons' ][obj['add-ons'][document.getElementById(addOnContainers[ i ].dataset.input).dataset.title] = document.getElementById(addOnContainers[ i ].dataset.input).dataset.title] ;
           }
           else{
            addOnContainers[ i ].classList.add('border-blue-800') ;
            document.getElementById(addOnContainers[ i ].dataset.input).checked = true ;
            containers[ i ] = true ;
            obj['add-ons'][document.getElementById(addOnContainers[ i ].dataset.input).dataset.title] = document.getElementById(addOnContainers[ i ].dataset.input).dataset.val ;
           
           }
       })
   }
})