import { LightningElement, api, track } from 'lwc';
import createacc from '@salesforce/apex/createaccount.createacc';
export default class CreateLeadLWC extends LightningElement {
    @track firstname;
    @track lastname;
    @track phone;
    @track website;
    @track email;
    
    handlefirstnamechange(event){
        this.firstname = event.target.value;
       // alert('First Name is ' + this.firstname);
        console.log('fistname' + this.firstname);

    }
    

    handlelastnamechange(event){
        this.lastname = event.target.value;
        //alert('Last name is' + this.lastname);
        console.log('lastname' + this.lastname);
    }

    handlephonechange(event){
        this.phone = event.target.value;
        //alert('Phone is' + this.phone);
        console.log('phone' + this.phone);
    }

    handlewebitechange(event){
        this.website = event.target.value;
       //alert('Website is' + this.website);
        console.log('website' + this.website)
    }

    handleemailchange(event){
        this.email = event.target.value;
       //alert('Email is' + this.email);
        console.log('email' + this.email)
    }
    handlesubmit(){
        createacc({strfirstname: this.firstname,strlastname: this.lastname,strphone: this.phone,strwebsite: this.website,stremail: this.email})
        .then(result => {
            
        })
        .catch(error => {
            alert('Error during CSAT Creation.');
        })
    }
}