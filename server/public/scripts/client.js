console.log('JS Sourced');

  class CoffeeMaker {
    constructor(cups, brew) {
      this.cups = cups; // Maximum capacity of the container
      this.brew = brew; // Color of the water maker
      this.maxCups = 0; // Amount of liquid the container holds
    }

    // Add liquid if space is available
    fill(waterResevour) {
      if(this.maxCups + waterResevour <= this.cups) {
        this.maxCups = this.maxCups + waterResevour;
      } else {
        console.log('Coffee Maker is full!');
      }
    }
  }

  let maker = new CoffeeMaker(10, 'dark');

  console.log(maker.maxCups);
  maker.fill(2);
  console.log(maker.maxCups); // Will log 8
  maker.fill(5); // A total of 12 would put us over the limit
  console.log(maker.maxCups); // Will log 8
