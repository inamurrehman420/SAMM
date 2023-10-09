import { Component, OnInit, AfterViewInit, ElementRef, ViewChild , HostListener} from '@angular/core';
import {  Router, Event, NavigationStart} from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  public getScreenWidth: any;
  currentRoute: string;
  @ViewChild('layout')
  layout!: ElementRef;
  constructor(
    private router: Router, 
    
  ) {
    
    this.currentRoute = "";
    this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
          this.getScreenWidth = window.innerWidth
          if(this.getScreenWidth > 600 && this.getScreenWidth < 992){
            if(this.layout.nativeElement.classList.contains("tablet")){
              this.layout.nativeElement.classList.remove("sidebar-open")
            }
          }
          if(this.getScreenWidth < 600 ){
            if(this.layout.nativeElement.classList.contains("mobile")){
              this.layout.nativeElement.classList.remove("sidebar-mobile-open")
            }
          }
        }
    });
  }

  ngAfterViewInit (){
    this.getScreenWidth = window.innerWidth
    if(this.getScreenWidth > 992){
      this.layout.nativeElement.classList.add("desktop")
    }
    if(this.getScreenWidth > 600 && this.getScreenWidth < 992){
      this.layout.nativeElement.classList.add("tablet")
    }
    if(this.getScreenWidth < 600){
      this.layout.nativeElement.classList.add("mobile")
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.getScreenWidth = event.target.innerWidth;
    if(this.getScreenWidth > 992){
      this.layout.nativeElement.classList.remove("mobile", "tablet", "sidebar-slim", "sidebar-mobile")
      this.layout.nativeElement.classList.add("desktop")
    }
    if(this.getScreenWidth > 600 && this.getScreenWidth < 992){
      this.layout.nativeElement.classList.remove("mobile" , "desktop" , "mobile", "sidebar-mobile-open")
      this.layout.nativeElement.classList.add("tablet" )
    }
    if(this.getScreenWidth < 600){
      this.layout.nativeElement.classList.remove("tablet", "desktop", "sidebar-slim")
      this.layout.nativeElement.classList.add("mobile")
    }
  }

  toggleSidebar(elem:HTMLElement) {
    this.getScreenWidth = window.innerWidth
    if(this.getScreenWidth > 992){
      elem.classList.toggle("sidebar-close")
    }
    if(this.getScreenWidth > 600 && this.getScreenWidth < 992 ){
      if(elem.classList.contains("tablet")){
        elem.classList.toggle("sidebar-open")
      }
    }
    if(this.getScreenWidth < 600 ){
      if(elem.classList.contains("mobile")){
        elem.classList.toggle("sidebar-mobile-open")
      }
    }
  }
}
