import { Component } from "@angular/core";

@Component({
  selector: "ngx-footer",
  styleUrls: ["./footer.component.scss"],
  template: `
    <span class="created-by"
      >GTU DATABASE PROJECT DEMO, &copy; 2021</span>
      <!-- <div class="socials">
      <a href="https://twitter.com/iyilikrengi" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://www.facebook.com/iyilikrengidernegi" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.instagram.com/iyilikrengi" target="_blank" class="ion ion-social-instagram"></a>
    </div> -->
  `,
})
export class FooterComponent { }
