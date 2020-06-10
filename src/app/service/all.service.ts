import { Injectable } from "@angular/core";
export interface Package {
  domain: string,
  storage: string,
  styleTemplates: number,
  mySqlDatabases: number,
  bandwidth: string,
  emailAccounts: number,
  support: string,

  name: string,
  price: string,
  site: number,
  yearUpdate: number,

  id:number,
  change: boolean

}
@Injectable({providedIn: 'root'})
export class AllService {
  package: Package [] = [
    {
      domain: "Free",
      storage: "25GB",
      styleTemplates: 1,
      mySqlDatabases: 5,
      bandwidth: "10GB",
      emailAccounts: 5,
      support: "24/7",

      name: "Starter",
      price: "50$",
      site: 1,
      yearUpdate: 1,

      id: 0,
      change: true
    },
    {
      domain: "Free",
      storage: "50GB",
      styleTemplates: 10,
      mySqlDatabases: 5,
      bandwidth: "15GB",
      emailAccounts: 20,
      support: "24/7",

      name: "Premium",
      price: "98$",
      site: 1,
      yearUpdate: 1,

      id: 1,
      change: false
    },
    {
      domain: "Free",
      storage: "100GB",
      styleTemplates: 30,
      mySqlDatabases: 15,
      bandwidth: "150GB",
      emailAccounts: 50,
      support: "24/7",

      name: "Business",
      price: "199$",
      site: 1,
      yearUpdate: 1,

      id: 2,
      change: false
    },
  ]
  onToggle(id: number) {
    for(let i = 0; i < 3;i++) {
      if(i == id){}
      else{this.package[i].change = false}
    }
    const idx = this.package.findIndex(t => t.id ===id)
    this.package[idx].change = !this.package[idx].change
    console.log(this.package[idx].change);
  }
}
