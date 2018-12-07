class Action{
    static run(){
        console.log('I can run.');
    }
    swim(){
        console.log('I can swim');
        
    }
}
Action.run();
const ac=new Action();
ac.swim();
