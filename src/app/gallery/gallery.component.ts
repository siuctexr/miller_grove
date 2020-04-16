import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  globalSrc = 'https://sketchfab.com/models/';
  globalExtra = '/embed?autostart=1&amp;preload=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1';

  selectedIndex = 0;
  selectedItem: any;

  src: SafeResourceUrl;

  gallery = [
    {
      name: 'Chewed Bone',
      id: 'd310ddda7d524f6aa310ff366335de1b',
      src: 'https://sketchfab.com/models/d310ddda7d524f6aa310ff366335de1b/embed?autostart=1&amp;preload=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1',
      details: 'Here is the detailed text'
    },
    {
      name: 'Cabin Piers',
      src: 'https://sketchfab.com/models/0b5288c62a19408a883208e332257932/embed?autostart=1&amp;preload=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1',
      id: '0b5288c62a19408a883208e332257932',
      details: 'Here is the detailed text'
    },

    {
      name: 'Ash Bin',
      id: '38e8a66aac584c2aac1500589598123d',
      details: 'Here is the detailed text'
    },

    {
      name: 'Pot',
      id: '1b8b632ac87c49c28942407e470851aa',
      details: 'Here is the detailed text'
    },

    {
      name: 'Civil War Object',
      id: 'efaca45dfe2d4cd78033f41c4a43f259',
      details: 'Here is the detailed text'
    },

    {
      name: 'Iron Harness Buckle',
      id: 'e3df8dff0c9a4997aea4696a1a26b670',
      details: 'Here is the detailed text'
    },

    {
      name: 'Medicine Bottle',
      id: 'a6fcd74510df490482abc389042f9519',
      details: 'Here is the detailed text'
    },

    {
      name: 'Hand-painted Porcelain Doll Fragments',
      id: '34323f2e82f64319878de5ec939106d6',
      details: 'Here is the detailed text'
    }

  ];

  get_full_source(id) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.globalSrc + id + this.globalExtra);
  }


  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.selectedIndex = 0;
    this.selectedItem = this.gallery[this.selectedIndex];
    this.src = this.get_full_source(this.selectedItem.id);
  }

  next() {
    if (this.selectedIndex < this.gallery.length) {
      this.selectedIndex++;
      this.selectedItem = this.gallery[this.selectedIndex];
      this.src = this.get_full_source(this.selectedItem.id);
    }
  }

  previous() {
    if (this.selectedIndex > this.gallery.length) {
      this.selectedIndex--;
      this.selectedItem = this.gallery[this.selectedIndex];
      this.src = this.get_full_source(this.selectedItem.id);
    }
  }

}


