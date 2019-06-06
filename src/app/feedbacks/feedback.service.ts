import {Feedback} from './feedback.model';
import {Email} from './email.model';
import { EventEmitter, Injectable } from '../../../node_modules/@angular/core';
import { Feature } from '../shared/feature.model';
import { Subject } from '../../../node_modules/rxjs';
import {map} from 'rxjs/operators';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Injectable({providedIn:'root'})
export class FeedbackService{
    // cakeSelected=new EventEmitter<Cake>();
     feedsChanged=new Subject<Feedback[]>();
     private feeds:Feedback[]=[];
    // private cake:Cake;
    
        

      constructor( private http:HttpClient){}
      getFeeds(){
          this.http.get<{message:string,feeds:any}>('http://localhost:3000/api/feeds')
          .pipe(
            map((feedData)=>{
              return feedData.feeds.map(feed=>{
                return {
                  id:feed._id,
                  name:feed.name,
                  email:feed.email,
                  message:feed.message
                };
              });
            })
          )
          .subscribe((transformedFeeds)=>{
            this.feeds=transformedFeeds;
            this.feedsChanged.next([...this.feeds]);
            
          });
         
      }

      sendEmail(email:Email){
       
        this.http.post("http://localhost:3000/api/feeds/sendEmail",email).subscribe(data=>{
          console.log("Email sent successfully!!");
        });
      }

      deleteFeed(feedId:String){
        this.http.delete("http://localhost:3000/api/feeds/"+feedId)
        .subscribe((response)=>{
          console.log(response);
          const updatedFeeds=this.feeds.filter(feed=>feed.id !== feedId);
          this.feeds=updatedFeeds;
          this.feedsChanged.next([...this.feeds]);
          console.log('deleted');
        });
      }
// getCake1(id:string){
//   return this.http.get<{_id:string,name:string,category:string,price:number,imagePath:string,description:string,features:Feature[]}>("http://localhost:3000/api/cakes/"+id);
        
//   }

//   getCake(id:string){
//     this.cakesChanged.subscribe((cakes:Cake[])=>{
//       this.cakes=cakes;
//     });
//     return {...this.cakes.find(c=>c.id===id)};
//   }
     
    
      addFeed(feed:Feedback){ 

         
        this.http.post<{message:string,feedId:string}>(
          "http://localhost:3000/api/feeds/",feed
        )
        .subscribe(responseData=>{
          const id=responseData.feedId ;     
          feed.id=id; 
          this.feeds.push(feed);
          this.feedsChanged.next([...this.feeds]);
          console.log(responseData.message);
        });
      }
     
    //   updateCake(id:string,newCake:Cake,image:File|string){
    //     let cakeData:Cake| FormData;
    //     if(typeof(image)==='object'){
    //       cakeData=new FormData();
    //       cakeData.append("id",newCake.id);
    //       cakeData.append("name",newCake.name);
    //       cakeData.append("category",newCake.category);
    //       cakeData.append("price",JSON.stringify(newCake.price));
    //       cakeData.append("imagePath",image);
    //       cakeData.append("description",newCake.description)
    //       cakeData.append("features",JSON.stringify(newCake.features));
    //     }else{
    //       newCake.imagePath=image;
    //       cakeData =newCake;
    //     }
    //     this.http.put<{message:string,imagePath:string}>("http://localhost:3000/api/cakes/"+id,cakeData )
    //     .subscribe((response)=>{
    //       const updatedCakes=[...this.cakes];
    //       const oldCakeIndex=updatedCakes.findIndex(c=>c.id===id);
    //       newCake.imagePath=response.imagePath;
    //       console.log(response.imagePath);
    //       updatedCakes[oldCakeIndex]=newCake;
    //       console.log(newCake);
    //       this.cakes=updatedCakes;
    //       this.cakesChanged.next([...this.cakes]);
    //     });
    //   }
     

    //   deleteCake(cakeId:String){
    //     this.http.delete("http://localhost:3000/api/cakes/"+cakeId)
    //     .subscribe((response)=>{
    //       console.log(response);
    //       const updatedCakes=this.cakes.filter(cake=>cake.id !== cakeId);
    //       this.cakes=updatedCakes;
    //       this.cakesChanged.next([...this.cakes]);
    //       console.log('deleted');
    //     });
    //   }
}