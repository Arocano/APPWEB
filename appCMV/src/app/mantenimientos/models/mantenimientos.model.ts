export class Maintenance{
    _id?: string;
    date: string;
    mechanic: string;
    client:string;
    agency:string;
    constructor(date:string, mechanic:string, client:string,agency:string){
        this.date = date;
        this.mechanic = mechanic;
        this.client = client;
        this.agency = agency;
    }
}