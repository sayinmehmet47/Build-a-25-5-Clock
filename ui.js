class Ui {
  constructor(name, length) {
    this.name = name;
    this.length = length;
  }

  increase() {
    if (this.name === 'session') {
      this.length += 1;
      if (this.length >= 60) {
        this.length = 60;
      }
      $(`#${this.name}-length`).text(this.length);
      $('#time-left').text(`${this.length}:00`);
      countdownTime = Number(this.length * 60 * 1000);
    } else {
      this.length += 1;
      if (this.length >= 60) {
        this.length = 60;
      }
      $(`#${this.name}-length`).text(this.length);
    }
  }

  decrease() {
    if (this.name === 'session') {
      this.length -= 1;
      if (this.length <= 1) {
        this.length = 1;
      }
      $(`#${this.name}-length`).text(this.length);
      $('#time-left').text(`${this.length}:00`);
      countdownTime = Number(this.length * 60 * 1000);
    } else {
      this.length -= 1;
      if (this.length <= 1) {
        this.length = 1;
      }

      $(`#${this.name}-length`).text(this.length);
    }
  }

  reset() {
    uiSession.length = 25;
    uiBreak.length = 5;
    $(`#session-length`).text('25');
    $('#time-left').text(`25:00`);
    $('#break-length').text('5');
    $('#timer-label').text('Session');
    $('#beep').onpause = function () {
      audio.currentTime = 0;
    };
    countdownTime = Number(25 * 60 * 1000);
  }

  input() {
    if(this.name==="session"){
      isPaused=true;
      this.length=Number($(`#session-length`).text())
      $('#time-left').text(`${this.length}:00`);
      sessionNum=this.length
      sesNum=this.length
      countdownTime = Number(sessionNum * 60 * 1000);
      
      doubleClicked===false;
    }

    if(this.name==="break"){
    this.length=Number($(`#break-length`).text())
      breNum=this.length;
      console.log(breNum)

      
      doubleClicked===false;
    }

 
    
  }
}

let sesNum = Number($('#session-length').text());
let breNum = Number($('#break-length').text());
const uiSession = new Ui('session', sesNum);
const uiBreak = new Ui('break', breNum);
