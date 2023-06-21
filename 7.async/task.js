class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    if (this.alarmCollection.some(alarm => alarm.time === time)) {
      console.warn('Уже присутствует звонок на это же время');
    }

    this.alarmCollection.push({ time, callback, canCall: true });
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
  }

  getCurrentFormattedTime() {
    const d = new Date();
    let currentDate = d.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return currentDate;
  }

  start() {
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => {
      const curretntTime = this.getCurrentFormattedTime();
      this.alarmCollection.forEach(alarms => {
        if (alarms.time === curretntTime && alarms.canCall) {
          alarms.canCall = false;
          alarms.callback();
        }
      });
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((calls) => calls.canCall = true)
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}