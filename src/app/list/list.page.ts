import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  sekiro = {"name": "Sekiro",
            "img": "https://dlprivateserver.com/wp-content/uploads/2020/05/1589055989_Esta-figura-de-Sekiro-Shadows-Die-Twice-de-470.jpg",
            }

  megaman = {"name": "Megaman X3",
            "img": "https://tooys.mx/pub/media/catalog/product/cache/96210167b6a992dbdbaba9ff58d054c8/m/e/mega-man-x3-max-armor-ver-kotobukiya-tooys-05.jpg",
            }

  prey = {"name": "Prey",
            "img": "https://images.ctfassets.net/rporu91m20dc/6vWTTNCt0qxcmIALTIobY8/df5a93434321f5f6910592b7b4000aca/prey-m-hero-960.jpg?q=70",
           }

  stardewvalley = {"name": "Stardew Valley",
                   "img": "https://image.api.playstation.com/cdn/UP2456/CUSA06840_00/0WuZecPtRr7aEsQPv2nJqiPa2ZvDOpYm.png",
                   } 
  
  constructor() { }

  ngOnInit() {
  }

}
