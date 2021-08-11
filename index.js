
class CountdownTimer {
  constructor({ selector, targetDate }) {
    
    this.targetDate = targetDate;
    this.selector = selector;
    this.container = document.querySelector(selector);
    this.days = this.container.children[0].children[0];
    this.hours = this.container.children[1].children[0];
    this.min = this.container.children[2].children[0];
    this.sec = this.container.children[3].children[0];
    
    this.updateTextContent = this.updateTextContent.bind(this);
    this.start = this.start.bind(this);
    
  }
  start() {
    this.intervalId = setInterval(this.updateTextContent, 1000);
  }

  updateTextContent() {
    const currentTime = Date.now();
    const time = this.targetDate - currentTime;
    const sec = Math.floor((time % (1000 * 60)) / 1000);
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    this.sec.textContent = sec < 10 ? `0${sec}` : sec;
    this.min.textContent = minutes < 10 ? `0${minutes}` : minutes;
    this.hours.textContent = hours < 10 ? `0${hours}` : hours;
    this.days.textContent = days < 10 ? `0${days}` : days;
  }

}

const counterDown = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date('Dec 17, 2021'),
});

counterDown.start();

const counterDown2 = new CountdownTimer({
  selector: "#timer-2",
  targetDate: new Date('Sept 01, 2021'),
});

counterDown2.start();
