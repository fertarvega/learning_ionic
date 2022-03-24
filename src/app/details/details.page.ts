import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  game;
  constructor(private router :ActivatedRoute) { }

  ngOnInit() {

    if(this.router.snapshot.params.name == "Sekiro"){
      this.game = { "name": this.router.snapshot.params.name,
                    "img": this.router.snapshot.params.img,
                    "resume" : "Sekiro: Shadows Die Twice is set in a Sengoku period Japan in the late 16th century, a period of constant conflict between life and death. Its protagonist is a shinobi who was left for dead after his lord was kidnapped and his arm severed by a samurai leader of the Ashina Clan. This shinobi awakens to discover that his arm has been replaced with a prosthetic by a mysterious busshi who calls him Sekiro, the 'one-armed wolf'. Armed with a katana and the prosthesis, which allows him to install different tools and devices, his purpose is to rescue his master and take revenge."}
    }

    if(this.router.snapshot.params.name == "Megaman X3"){
      this.game = { "name": this.router.snapshot.params.name,
                    "img": this.router.snapshot.params.img,
                    "resume" : "Mavericks are spreading rapidly throughout the world, threatening what little human existence remains on Earth. To prevent this, a Reploid named Dr. Doppler has created a powerful antivirus that will prevent the emergence of more Mavericks. To support his tests, Doppler Town is created to gather test Reploids. To ensure human life in Doppler Town, the Maverick Hunters' headquarters are relocated there. In the end it is revealed that it was all a trap set by Dr. Doppler himself, all the Reploids with the antivirus become Mavericks and put themselves at his service. That same afternoon they organize an attack on the headquarters of the Maverick Hunter, X and Zero manage to repel the attack and are ready to catch Doppler to reverse the chaos he has caused."}
    }

    if(this.router.snapshot.params.name == "Prey"){
      this.game = { "name": this.router.snapshot.params.name,
                    "img": this.router.snapshot.params.img,
                    "resume" : "In Prey, you awaken aboard Talos I, a space station orbiting the moon in the year 2032. You are the key subject of an experiment meant to alter humanity forever – but things have gone terribly wrong. The space station has been overrun by hostile aliens and you are now being hunted."}
    }

    if(this.router.snapshot.params.name == "Stardew Valley"){
      this.game = { "name": this.router.snapshot.params.name,
                    "img": this.router.snapshot.params.img,
                    "resume" : "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?"}
    }
  }

}
