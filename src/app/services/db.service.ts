import { Injectable } from '@angular/core';
import { Image } from '../models/image';

@Injectable()
export class DbService {
  private imageArr: Image[] = [
    { id: "2204a7a7-35a8-49a1-8fae-45ab292b89ca", url: "https://avatars3.githubusercontent.com/u/6191078?v=3&s=460", firstName: "Incredible", lastName: "Hulk", position: "Angular superhero", company: "Stark Corporation"},
    { id: "5cfe0e02-76c7-4aa3-bc57-7d5d4d97654a", url: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAx2AAAAJDZhNTVmODI1LTQyZDUtNGNhMS04MzhmLWQwY2E1MDU0OTk3YQ.jpg", firstName: "Captain", lastName: "America", position: "Angular superhero", company: "Stark Corporation"},
    { id: "5d5f989c-71d0-4113-87de-6021eaaf3960", url: "https://firebasestorage.googleapis.com/v0/b/doppleganger-finder.appspot.com/o/206f2801f182779599ff49080acd5d59--mens-cuts-mens-haircuts.jpg?alt=media&token=4bbea267-e5e0-4675-8c93-cb203696d3c8", firstName: "Captain", lastName: "America", position: "Angular superhero", company: "Stark Corporation"},
    { id: "d0f5b94c-aed2-48fe-9dae-0cded76708c9", url: "https://firebasestorage.googleapis.com/v0/b/doppleganger-finder.appspot.com/o/aadd97eb58cc864d4056009ef27b172b--diamond-face-shapes-diamond-shaped-faces.jpg?alt=media&token=77c7becf-6923-4876-9fa8-f2e06ab7435e", firstName: "Captain", lastName: "America", position: "Angular superhero", company: "Stark Corporation"},
    { id:"47d4fe39-3487-4ba0-a944-10ca92ce27b5", url: "https://firebasestorage.googleapis.com/v0/b/doppleganger-finder.appspot.com/o/c0ded861585e2d3714601cc028f05813.jpg?alt=media&token=73c241c0-9eb2-4963-8e75-6a85629bc14f", firstName: "Captain", lastName: "America", position: "Angular superhero", company: "Stark Corporation"},
    { id:"fc2b85f6-e037-4ff1-accf-61a75f0b3b69", url: "https://firebasestorage.googleapis.com/v0/b/doppleganger-finder.appspot.com/o/WIN_20170818_11_54_45_Pro.jpg?alt=media&token=01eb58be-98be-4537-898c-624991eba1eb", firstName: "Captain", lastName: "America", position: "Angular superhero", company: "Stark Corporation"}];

  constructor() { }

  getImages(): Promise<Image[]> {
    return Promise.resolve(this.imageArr);
  }

}
