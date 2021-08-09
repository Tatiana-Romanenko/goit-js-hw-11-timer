class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  getRefs() {
    const container = document.querySelector(this.selector);
    const days = document.querySelector('[data-value="days"]');
    const hours = document.querySelector('[data-value="hours"]');
    const mins = document.querySelector('[data-value="mins"]');
    const secs = document.querySelector('[data-value="secs"]');
    return { days, hours, mins, secs, container };
  }
  padStart(value) {
    return String(value).padStart(2, '0');
  }
  updateTextContent({ days, hours, mins, secs, container }) {
    const time = this.targetDate - Date.now();
    days.textContent = this.padStart(
      Math.floor(time / (1000 * 60 * 60 * 24)),
    );
    hours.textContent = this.padStart(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    mins.textContent = this.padStart(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    );
    secs.textContent = this.padStart(
      Math.floor((time % (1000 * 60)) / 1000),
    );
  }
  start() {
    this.intervalId = setInterval(() => this.updateTextContent(this.getRefs()), 1000);
  }
}
const counterDown = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 17, 2021'),
});

counterDown.start();







//-----------------
/*const days = document.querySelector('span[data-value="days"]');
const hours = document.querySelector('span[data-value="hours"]');
const mins = document.querySelector('span[data-value="mins"]');
const secs = document.querySelector('span[data-value="secs"]');

const stopDate = new Date('Dec 17, 2021');

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  start() {
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();

      const time = stopDate - currentTime;
      this.updateTextContent(time);
    }, 1000);
  }

  updateTextContent(time) {
    days.textContent = this.padStart(
      Math.floor(time / (1000 * 60 * 60 * 24)),
    );
    hours.textContent = this.padStart(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    mins.textContent = this.padStart(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    );
    secs.textContent = this.padStart(
      Math.floor((time % (1000 * 60)) / 1000),
    );
  }
  padStart(value) {
    return String(value).padStart(2, '0');
  }
}
const counterDown = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 17, 2021'),
});

counterDown.start();*/
