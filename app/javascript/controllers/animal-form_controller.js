import { Controller } from 'stimulus';

export default class extends Controller {
    //  initialize() {
    //      console.log("Hello from stimulus!");
    //  }
    static get targets() {
        return ['name', 'counter'];
    }
    greet() {
        //const element = this.testTarget;
        //const name = element.value;
        //console.log('Hello, Stimulus!', this.element)
        //console.log(`Hello, ${name}!`)
        console.log('Testing the forms now ')
    }
    countCharacters(event){
        //console.log(event);
        let characters = this.nameTarget.value.length;
        this.counterTarget.innerText = characters
    }
}