export class Mechanic{
    _id?: string;
    firstname: string;
    lastname: string;
    schedule:string;
    cellphone: string;
    email: string;
    agency:string;
    constructor(firstname:string, lastname:string, schedule:string,cellphone:string,email:string,agency:string){
        this.firstname = firstname;
        this.lastname = lastname;
        this.schedule = schedule;
        this.cellphone = cellphone;
        this.email = email;
        this.agency = agency;
    }
}