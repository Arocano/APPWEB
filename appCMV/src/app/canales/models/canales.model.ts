export class Chanel{
    _id?: string;
    name: string;
    description: string;
    schedule:string;
    constructor(name:string, description:string, schedule:string){
        this.name = name;
        this.description = description;
        this.schedule = schedule;
    }
}