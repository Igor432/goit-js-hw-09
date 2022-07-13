
const form = document.querySelector('.form')


function createPromise(position, delay) {

  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {

    if (shouldResolve) {

      resolve({ position, delay })
    } else { // Fulfill
      reject({ position, delay })
    }
  })
}


/*
 
  function doNext() {
    for (let i = 1; i < amount; i++) {
 
      position = 2;
      delay = firstDelay + stepDelay * position
 
      setTimeout(() => {
        const newProm = new Promise((resolve, reject) => {
          const shouldResolve = Math.random() > 0.3;
 
          const first = parseInt(firstDelay)
          const secDelay = stepDelay * (position - 1);
 
          if (shouldResolve) {
            resolve({ position: position++, delay: first + secDelay })
          } else {
            reject({ position: position++, delay: first + secDelay });
          }
        })
      }, stepDelay * i)
 
    }
  }
*/




form.addEventListener('submit', (ev) => {
  ev.preventDefault();
})



form.addEventListener('submit', () => {
  const amountVal = form.querySelector('input[name="amount"]').value
  const firstDelay = form.querySelector('input[name="delay"]').value
  var stepDel = form.querySelector('input[name="step"]').value



  setTimeout(() => {
    createPromise(1, firstDelay).then(({ position, delay }) => {

      console.log
        (`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
      .catch(({ position, delay }) => {
        console.log
          (`❌ Rejected promise ${position} in ${delay}ms`);
      }).finally(doNext)
  }, firstDelay)

  function doNext() {

    for (let i = 2; i <= amountVal; i++) {

      setTimeout(() => {

        const delayResult = stepDel * (i - 1);

        createPromise(i, parseInt(firstDelay) + delayResult).then(({ position, delay }) => {

          console.log
            (`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
          .catch(({ position, delay }) => {
            console.log
              (`❌ Rejected promise ${position} in ${delay}ms`);
          });
      }, stepDel * i);
    }
  }
}
)







