export class Clients{
    _id?: string;
    firstname: string;
    lastname: string;
    cellphone:string;
    email:string;
    address:string;
    constructor(firstname:string, lastname:string, cellphone:string,email:string,address:string){
        this.firstname = firstname;
        this.lastname = lastname;
        this.cellphone = cellphone;
        this.email = email;
        this.address = address;
    }
}