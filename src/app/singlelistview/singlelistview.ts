import { ChangeDetectorRef, Component } from '@angular/core';
import { Apiservice } from '../apiservice';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-singlelistview',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './singlelistview.html',
  styleUrls: ['./singlelistview.css'],
})
export class Singlelistview {
      singleproduct:any;
        constructor(private route:ActivatedRoute,private apiservice:Apiservice,private cdr:ChangeDetectorRef){}
        ngOnInit()
        {
          const
          productid=this.route.snapshot.paramMap.get('id');
          if(productid)
          {
            this.apiservice.getSingleProducts(productid).subscribe((data)=>
              {
                this.singleproduct=data;
                console.log(data)
                this.cdr.detectChanges()
              
              });
          }
        }
}
