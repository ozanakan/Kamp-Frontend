import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Product[],filterText:string): Product[] {
   filterText = filterText?filterText.toLocaleLowerCase():"" //gelen filtertext dolumu dolu ise küçük harfe çevir 

    return filterText?value.filter((p:Product)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1):value //ürünleri filtrele
    //filtrelenecek değer yani value.filter ile kısaca foreach yapıyor her bir ürün için önce küçük harfe çevir ve varmı için indexof ve parantez içinde aranacak değer
    //-1den farklı demek varsa demektir eğer varsa yeni bir array yapıp onu döndürüyor   
    //filterText? varmı eğer varsa yazılan devamı demek eğer yoksa : koyup yazılır eğer yoksa value aynı döndür
  }

}
