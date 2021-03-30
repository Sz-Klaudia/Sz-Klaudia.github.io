
   let imagesData = [
    {
        photo: 'kepek/ramen.jpg',
        title: 'Ramen',
        description: 'Japán tésztaleves. Kínai típusú búzalisztből készített tésztát, húsból készült alaplevet tartalmaz, melyet gyakran ízesítenek szójaszósszal vagy miszóval.'

    },

    {
        photo: 'kepek/paella.jpg',
        title: 'Paella',
        description:'A paella a leghíresebb spanyol étel. A sáfránnyal ízesített ételspecialitás regionális eredetű, ami azonban napjainkra Spanyolország nemzeti eledelévé vált.'
    },
    {
        photo: 'kepek/tom-yum-goong.jpg',
        title: 'Tom yum goong',
        description: 'A "tom yam" szavak két thaiföldi szóból származnak. A Tom yumot jellegzetes meleg és savanyú íze jellemzi, illatos fűszerekkel és gyógynövényekkel bőségesen használják a húslevesben. A levest olyan friss alapanyagokból is készítik, mint a citromfű , a kaffir lime levelek, a galangal , a lime juice,  chili paprika,és garnélarák'

    },
    {
        photo: 'kepek/schnitzel.jpg',
        title: 'Bécsi szelet',
        description: 'a bécsi konyha közismert, 3-4 milliméter vastagságúra kivert, borjúhúsból (borjú dió, frikandó, felsál vagy alaposan megtisztított lapocka) készített, panírozott, húsétele.'
    },
    {
        photo: 'kepek/lasagna.jpg',
        title: 'Lasagna',
        description: 'Olasz rakott tésztaétel. Főbb összetevői a tésztalapok, valamilyen ragu, vagy zöldség, a besamel mártás és a sajt.'
    },
    {
        photo: 'kepek/kimchi.jpg',
        title: 'Kimchi',
        description: ' A koreai konyhaművészet egyik legismertebb étele, és a koreai étkezések elengedhetetlen része. A legfontosabb összetevő a kínai kel, a retek, a zöldhagyma és az uborka. A kimchi erjesztéssel készül.'
    },
    {
        photo: 'kepek/goulash.jpg',
        title: 'Gulyásleves',
        description: 'A hagyományos gulyásleves 2017. óta hungarikum. A gulyás külföldön is az egyik legnépszerűbb magyar eredetű étel, amelyet igen sok országban ismernek Gulasch, goulash néven.'
     },
     {
        photo: 'kepek/fish-and-chips.jpg',
        title: 'Fish and chips',
        description: 'A fish and chips az angol konyha talán legismertebb és legkedveltebb étele amelyet régebben újságpapírba csomagolva árultak. Ma már az éttermek kínálatában is megtalálható.'
        
     },
     {
        photo: 'kepek/chilaquiles.jpg',
        title: 'Chilaquiles',
        description: 'Hagyományos mexikói reggeli étel. Ropogós tortilla háromszögekre zöld vagy piros salsa kerül, majd a keveréket addig pároljuk, amíg a tortilla meg nem puhul. A keverékhez néha húzt csirkét is adnak. '
     },
     {
        photo: 'kepek/kebab.jpg',
        title: 'Kebab',
        description: ' Hagyományos török húsétel. Általában darált birka vagy bárányhúsból készül, és erősen fűszerezett.  Nyílt tűzön, zsírozott nyársra vagy pálcikára tűzve, a parázs fölött gyakran forgatva, egyenletesen sütik meg.'
     }
]



let currentPhoto = 0;

 
let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-descripton').text( imagesData[photoNumber].description);
    
  }
  
  loadPhoto(currentPhoto);
  
  $('#rightarrow').click(() => {
    if(currentPhoto < imagesData.length -1){
        currentPhoto++;
      
    }
    else  {
        currentPhoto= 0;
    }
    loadPhoto(currentPhoto);
  }) 


   
$('#leftarrow').click(() => {
  if (currentPhoto >  0){
        currentPhoto--;
  }
  else {
    currentPhoto = imagesData.length -1;
  }
  loadPhoto(currentPhoto);
}) 
 
imagesData.forEach((item, index) => {
    $('.thumbnails').append(
       `<div class="thumbnail" data-number="${index}">
        <img src="${item.photo}" data-number="${index}" alt="${item.title}">
       </div>`
    );
    });
   
   
    $('.thumbnails').click((event) => {
      let indexClicked = $(event.target).attr('data-number');
    $('.thumbnails').attr('data-number');
    loadPhoto(indexClicked);
  
  });
  
    
  
