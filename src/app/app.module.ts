import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BlogComponent } from './blog/blog.component';
import { MenuComponent } from './menu/menu.component';
import { EventsComponent } from './events/events.component';
import { ShopComponent } from './shop/shop.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { AboutComponent } from './main/about/about.component';
import { SocialComponent } from './main/social/social.component';
import { ReviewsComponent } from './main/reviews/reviews.component';
import { ContactComponent } from './shared/components/footer/contact/contact.component';
import { JumbotronComponent } from './main/jumbotron/jumbotron.component';
import { CalendarComponent } from './main/calendar/calendar.component';
import { FeaturedBlogComponent } from './main/featured-blog/featured-blog.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FoodComponent } from './main/provisions/food/food.component';
import { DrinkComponent } from './main/provisions/drink/drink.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BlogComponent,
    MenuComponent,
    EventsComponent,
    ShopComponent,
    FooterComponent,
    NavigationComponent,
    AboutComponent,
    SocialComponent,
    ReviewsComponent,
    ContactComponent,
    JumbotronComponent,
    CalendarComponent,
    FeaturedBlogComponent,
    FoodComponent,
    DrinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
