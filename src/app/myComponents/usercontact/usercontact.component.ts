import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/contact';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-usercontact',
  templateUrl: './usercontact.component.html',
  styleUrls: ['./usercontact.component.css']
})
export class UsercontactComponent implements OnInit {
  messages: Contact[]=[];

  
  constructor(private contactService : ContactService) { }

  

  ngOnInit(): void {

    this.getMessage();

  }

  private getMessage()
  {
    this.contactService.getMessagesList().subscribe(data=>{
      this.messages=data;
    })
  }

  deleteMessage(id:number)
  {
    this.contactService.deleteMessage(id).subscribe(data=>{
      console.log(data)
      this.getMessage();

    })
  }

}
