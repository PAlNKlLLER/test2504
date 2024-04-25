const swiperTop = new Swiper('.top__swiper', {
  effect: 'fade',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperVacancy = new Swiper('.vacancy__slider', {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
});


let photos = document.querySelector('.photos-instagram__all');
let photoButton = document.querySelector('.photo-button');

photoButton.onclick = function () {
  photos.classList.toggle('hidden');
};


ymaps.ready(function () {
  let myMap = new ymaps.Map('map', {
    center: [55.752565, 37.621372],
    zoom: 13,
    controls: []
  }),

    ButtonLayout = ymaps.templateLayoutFactory.createClass([
      '<div title="{{ data.title }}" class="my-button ',
      '{% if state.selected %} my-button-selected{% endif %}">',
      '<span class="my-button__text">{{ data.content }}</span>',
      '</div>'
    ].join('')),

    firstButton = new ymaps.control.Button({
      data: {
        content: "юрлица",
        title: "юрлица"
      },
      options: {
        layout: ButtonLayout,
      }
    });
    
  myMap.controls.add(firstButton, {
    position: {
      left: 24,
      top: 371
    }

  });

  ButtonLayout = ymaps.templateLayoutFactory.createClass([
    '<div title="{{ data.title }}" class="my-button2 ',
    '{% if state.selected %} my-button-selected{% endif %}">',
    '<span class="my-button__text">{{ data.content }}</span>',
    '</div>'
  ].join('')),

  secondButton = new ymaps.control.Button({
    data: {
      content: "физлица",
      title: "физлица"
    },
    options: {
      layout: ButtonLayout,
    }
  });
  myMap.controls.add(secondButton, {
    position: {
      left: 24,
      top: 422
    }
  });

  ButtonLayout = ymaps.templateLayoutFactory.createClass([
    '<div title="{{ data.title }}" class="my-button3 ',
    '{% if state.selected %} my-button-selected{% endif %}">',
    '<span class="my-button__text">{{ data.content }}</span>',
    '</div>'
  ].join('')),

  thirdButton = new ymaps.control.Button({
    data: {
      content: "показать всё",
      title: "показать всё"
    },
    options: {
      layout: ButtonLayout,
    }
  });
  myMap.controls.add(thirdButton, {
    position: {
      left: 24,
      top: 473
    }
  });

  ButtonLayout = ymaps.templateLayoutFactory.createClass([
    '<div title="{{ data.title }}" class="my-button4 ',
    '{% if state.selected %} my-button-selected{% endif %}">',
    '<span class="my-button__text">{{ data.content }}</span>',
    '</div>'
  ].join('')),

  fourthButton = new ymaps.control.Button({
    data: {
      content: "+",
      title: "+"
    },
    options: {
      layout: ButtonLayout,
    }
  });
  myMap.controls.add(fourthButton, {
    position: {
      right: 24,
      bottom: 72
    }
  });

  ButtonLayout = ymaps.templateLayoutFactory.createClass([
    '<div title="{{ data.title }}" class="my-button5 ',
    '{% if state.selected %} my-button-selected{% endif %}">',
    '<span class="my-button__text">{{ data.content }}</span>',
    '</div>'
  ].join('')),

  fifthButton = new ymaps.control.Button({
    data: {
      content: "-",
      title: "-"
    },
    options: {
      layout: ButtonLayout,
    }
  });
  myMap.controls.add(fifthButton, {
    position: {
      right: 24,
      bottom: 26
    }
  });

  let fizlico1 = new ymaps.Placemark([55.762167, 37.627423], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'images/mark.svg',
    iconImageSize: [44, 44],
    iconImageOffset: [-5, -38]
  });


  let fizlico2 = new ymaps.Placemark([55.763073, 37.597336], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'images/mark.svg',
    iconImageSize: [44, 44],
    iconImageOffset: [-5, -38]
  });
  let fizlico3 = new ymaps.Placemark([55.747855, 37.606293], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'images/mark.svg',
    iconImageSize: [44, 44],
    iconImageOffset: [-5, -38]
  });
  let fizlico4 = new ymaps.Placemark([55.753101, 37.638562], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'images/mark.svg',
    iconImageSize: [44, 44],
    iconImageOffset: [-5, -38]
  });
  let yurlico1 = new ymaps.Placemark([55.768900, 37.625815], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'images/mark.svg',
    iconImageSize: [44, 44],
    iconImageOffset: [-5, -38]
  });
  let yurlico2 = new ymaps.Placemark([55.756727, 37.608590], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'images/mark.svg',
    iconImageSize: [44, 44],
    iconImageOffset: [-5, -38]
  });
  let yurlico3 = new ymaps.Placemark([55.746948, 37.597910], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'images/mark.svg',
    iconImageSize: [44, 44],
    iconImageOffset: [-5, -38]
  });
  let yurlico4 = new ymaps.Placemark([55.747531, 37.619155], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'images/mark.svg',
    iconImageSize: [44, 44],
    iconImageOffset: [-5, -38]
  });
  let yurlico5 = new ymaps.Placemark([55.746754, 37.647634], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'images/mark.svg',
    iconImageSize: [44, 44],
    iconImageOffset: [-5, -38]
  });
  let yurlico6 = new ymaps.Placemark([55.758023, 37.636724], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'images/mark.svg',
    iconImageSize: [44, 44],
    iconImageOffset: [-5, -38]
  });

  myMap.geoObjects.add(fizlico1);
  myMap.geoObjects.add(fizlico2);
  myMap.geoObjects.add(fizlico3);
  myMap.geoObjects.add(fizlico4);
  myMap.geoObjects.add(yurlico1);
  myMap.geoObjects.add(yurlico2);
  myMap.geoObjects.add(yurlico3);
  myMap.geoObjects.add(yurlico4);
  myMap.geoObjects.add(yurlico5);
  myMap.geoObjects.add(yurlico6);

});
