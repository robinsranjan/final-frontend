import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/contact';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css']
})
export class CreateMessageComponent implements OnInit {

 contact : Contact =new Contact();

  constructor(private ContactService:ContactService,private router:Router  ) { }

  ngOnInit(): void {
  }

saveContact()
{
  this.ContactService.createMessage(this.contact).subscribe(data=>{
console.log(data);
this.gotoUsercontact();

  },
  error=>console.log(error))
}

gotoUsercontact()
{
  alert("success")
  this.router.navigate(['/home'])
}


  onSubmit()
  {
    console.log(this.contact)
    this.saveContact();
  }


  

}
