import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { Album } from "../album";
import { ProductService } from "../product.service";
import { Track } from "../track";

@Component({
  selector: "app-product-tracklisting",
  templateUrl: "./product-tracklisting.component.html",
  styleUrls: ["./product-tracklisting.component.css"],
})
export class ProductTracklistingComponent implements OnInit {
  albumInfo: Album;
  constructor(private _productService: ProductService) {}

  ngOnInit() {}
  getAlbum(id: number) {
    this._productService
      .getAlbum(1)
      .subscribe((response) => (this.albumInfo = response));
  }
}